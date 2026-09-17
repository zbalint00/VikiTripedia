import type { HomePageProps, Page } from "../types";

//TODO - Kicserélni a képet
const cards = [
  {
    page: "map" as Page,
    icon: "🗺",
    title: "Explore the World",
    desc: "Click any country to discover beaches, weather & trip costs from Budapest",
    img: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=400&fit=crop&auto=format",
  },
  {
    page: "lists" as Page,
    icon: "✦",
    title: "Our Dream Lists",
    desc: "Favorites, wishlist, places we've been & our next adventure",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop&auto=format",
  },
  {
    page: "memories" as Page,
    icon: "♡",
    title: "Our Memories",
    desc: "Photos, stories & the little moments that make us us",
    img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=400&fit=crop&auto=format",
  },
  {
    page: "soon4" as Page,
    icon: "✈",
    title: "Coming Soon",
    desc: "Something beautiful is being planned for this spot",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&auto=format",
  },
  {
    page: "soon5" as Page,
    icon: "★",
    title: "Coming Soon",
    desc: "More magic on the way — watch this space",
    img: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&h=400&fit=crop&auto=format",
  },
];

//TODO - Kicserélni a képet + Emotion css-re átírni, átláthatóbb legyen neked. 
// Szövekeget magyarra átírni, a gombokat is.
export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen pt-14">
      {/* Hero */}
      <div className="relative h-[55vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&h=900&fit=crop&auto=format"
          alt="Travel landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B1A0F]/20 via-transparent to-[#FAF6F1]" />
        <div className="absolute bottom-10 left-0 right-0 text-center px-4">
          <p className="text-[#8A6550] text-sm uppercase tracking-widest mb-2">Welcome back,</p>
          <h1
            className="text-5xl md:text-6xl text-[#2B1A0F] leading-tight"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Viki ♡
          </h1>
          <p className="text-[#5C3520] mt-3 text-lg max-w-md mx-auto">
            A világ csak ránk vár — Tervezzük meg a következő közös utunkat.
          </p>
        </div>
      </div>

      {/* Nav cards */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-xs uppercase tracking-widest text-[#8A6550] mb-6 text-center">Where would you like to go?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map(({ page, icon, title, desc, img }) => (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className="group text-left rounded-2xl overflow-hidden border border-[#DDD0C4] bg-[#FFF9F5] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C4603A]"
            >
              <div className="relative h-44 overflow-hidden bg-[#EDE3DA]">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1A0F]/30 to-transparent" />
                <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-[#FFF9F5]/90 flex items-center justify-center text-lg shadow-sm">
                  {icon}
                </div>
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold text-[#2B1A0F] mb-1" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
                  {title}
                </h2>
                <p className="text-sm text-[#8A6550] leading-relaxed">{desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
