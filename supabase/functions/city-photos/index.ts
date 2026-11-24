const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type PhotoCategory = "city" | "beach" | "attractions";

interface UnsplashPhoto {
  id: string;
  alt_description: string | null;
  description: string | null;
  urls: {
    small: string;
    regular: string;
  };
  links: {
    html: string;
  };
  user: {
    name: string;
    links: {
      html: string;
    };
  };
}

interface UnsplashSearchResponse {
  results?: UnsplashPhoto[];
}

interface CityPhoto {
  id: string;
  category: PhotoCategory;
  title: string;
  imageUrl: string;
  photoUrl: string;
  photographerName: string;
  photographerUrl: string;
  unsplashUrl: string;
}

function jsonResponse(
  data: unknown,
  status = 200,
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
}

async function searchPhotos(
  query: string,
  category: PhotoCategory,
  accessKey: string,
): Promise<CityPhoto[]> {
  const url = new URL("https://api.unsplash.com/search/photos");

  url.searchParams.set("query", query);
  url.searchParams.set("per_page", "4");
  url.searchParams.set("orientation", "landscape");
  url.searchParams.set("content_filter", "high");
  url.searchParams.set("order_by", "relevant");

  const response = await fetch(url, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
      "Accept-Version": "v1",
    },
  });

  if (!response.ok) {
    const message = await response.text();

    console.error(
      `Unsplash hiba (${category}):`,
      response.status,
      message,
    );

    throw new Error(
      `Unsplash API hiba: ${response.status}`,
    );
  }

  const data =
    (await response.json()) as UnsplashSearchResponse;

  return (data.results ?? []).map((photo) => ({
    id: photo.id,
    category,
    title:
      photo.alt_description ??
      photo.description ??
      query,
    imageUrl: photo.urls.regular || photo.urls.small,
    photoUrl: photo.links.html,
    photographerName: photo.user.name,
    photographerUrl: photo.user.links.html,
    unsplashUrl: "https://unsplash.com",
  }));
}


async function searchBeachPhotos(
  city: string,
  country: string,
  accessKey: string,
): Promise<CityPhoto[]> {
  // Két külön keresés, hogy ne egyetlen kifejezésen múljon a találat.
  const queries = [
    `${city} ${country} beach`,
    `${city} ${country} coastline seaside sandy beach`,
  ];

  const results = await Promise.all(
    queries.map((query) =>
      searchPhotos(query, "beach", accessKey),
    ),
  );

  // Duplikált fotók kiszűrése, maximum 4 kép.
  const seen = new Set<string>();

  return results
    .flat()
    .filter((photo) => {
      if (seen.has(photo.id)) return false;

      seen.add(photo.id);
      return true;
    })
    .slice(0, 4);
}


Deno.serve(async (request: Request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    });
  }

  if (request.method !== "POST") {
    return jsonResponse(
      { error: "Csak POST kérés engedélyezett." },
      405,
    );
  }

  try {
    const accessKey = Deno.env.get("UNSPLASH_ACCESS_KEY");

    if (!accessKey) {
      console.error("Hiányzik az UNSPLASH_ACCESS_KEY secret.");

      return jsonResponse(
        { error: "A képszolgáltatás nincs konfigurálva." },
        500,
      );
    }

    const body = await request.json();

    const city =
      typeof body.city === "string"
        ? body.city.trim()
        : "";

    const country =
      typeof body.country === "string"
        ? body.country.trim()
        : "";

    const isCoastal = body.isCoastal === true;

    if (
      !city ||
      !country ||
      city.length > 100 ||
      country.length > 100
    ) {
      return jsonResponse(
        { error: "Érvénytelen város vagy ország." },
        400,
      );
    }

    const cityQuery =
      `${city} ${country} city skyline architecture`;

    const attractionsQuery =
      `${city} ${country} famous landmarks tourist attractions`;


    const requests: Promise<CityPhoto[]>[] = [
      searchPhotos(cityQuery, "city", accessKey),
      searchPhotos(
        attractionsQuery,
        "attractions",
        accessKey,
      ),
    ];

if (isCoastal) {
  requests.push(
    searchBeachPhotos(city, country, accessKey),
  );
}

    const results = await Promise.all(requests);

    const seen = new Set<string>();

    const photos = results
      .flat()
      .filter((photo) => {
        if (seen.has(photo.id)) {
          return false;
        }

        seen.add(photo.id);
        return true;
      });

    return jsonResponse({
      city,
      country,
      photos,
    });
  } catch (error) {
    console.error("City photos function error:", error);

    return jsonResponse(
      {
        error:
          error instanceof Error
            ? error.message
            : "Ismeretlen képletöltési hiba.",
      },
      500,
    );
  }
});
