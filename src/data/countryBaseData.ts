// GENERATED FILE. Do not edit manually.
// Source: REST Countries v3.1
// Regenerate with: npm run countries:generate

export interface CountryBaseInfo {
  id: string;
  name: string;
  numericCode: string;
  officialName: string;
  flag: string;
  flagUrl: string;
  region: string;
  continent: string;
  capital: string;
  latitude: number | null;
  longitude: number | null;
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: string[];
  continents: string[];
  alpha2: string;
}

export const countryBaseData: Record<string, CountryBaseInfo> = {
  "AFG": {
    "id": "AFG",
    "name": "Afghanistan",
    "numericCode": "004",
    "officialName": "Islamic Republic of Afghanistan",
    "flag": "🇦🇫",
    "flagUrl": "",
    "region": "Southern Asia",
    "continent": "Asia",
    "capital": "Kabul",
    "latitude": 33,
    "longitude": 65,
    "currencies": [
      {
        "code": "AFN",
        "name": "Afghan afghani",
        "symbol": "؋"
      }
    ],
    "languages": [
      "Dari",
      "Pashto",
      "Turkmen"
    ],
    "continents": [],
    "alpha2": "AF"
  },
  "ALA": {
    "id": "ALA",
    "name": "Åland Islands",
    "numericCode": "248",
    "officialName": "Åland Islands",
    "flag": "🇦🇽",
    "flagUrl": "",
    "region": "Northern Europe",
    "continent": "Europe",
    "capital": "Mariehamn",
    "latitude": 60.116667,
    "longitude": 19.9,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Swedish"
    ],
    "continents": [],
    "alpha2": "AX"
  },
  "ALB": {
    "id": "ALB",
    "name": "Albania",
    "numericCode": "008",
    "officialName": "Republic of Albania",
    "flag": "🇦🇱",
    "flagUrl": "",
    "region": "Southeast Europe",
    "continent": "Europe",
    "capital": "Tirana",
    "latitude": 41,
    "longitude": 20,
    "currencies": [
      {
        "code": "ALL",
        "name": "Albanian lek",
        "symbol": "L"
      }
    ],
    "languages": [
      "Albanian"
    ],
    "continents": [],
    "alpha2": "AL"
  },
  "DZA": {
    "id": "DZA",
    "name": "Algeria",
    "numericCode": "012",
    "officialName": "People's Democratic Republic of Algeria",
    "flag": "🇩🇿",
    "flagUrl": "",
    "region": "Northern Africa",
    "continent": "Africa",
    "capital": "Algiers",
    "latitude": 28,
    "longitude": 3,
    "currencies": [
      {
        "code": "DZD",
        "name": "Algerian dinar",
        "symbol": "د.ج"
      }
    ],
    "languages": [
      "Arabic"
    ],
    "continents": [],
    "alpha2": "DZ"
  },
  "ASM": {
    "id": "ASM",
    "name": "American Samoa",
    "numericCode": "016",
    "officialName": "American Samoa",
    "flag": "🇦🇸",
    "flagUrl": "",
    "region": "Polynesia",
    "continent": "Oceania",
    "capital": "Pago Pago",
    "latitude": -14.33333333,
    "longitude": -170,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English",
      "Samoan"
    ],
    "continents": [],
    "alpha2": "AS"
  },
  "AND": {
    "id": "AND",
    "name": "Andorra",
    "numericCode": "020",
    "officialName": "Principality of Andorra",
    "flag": "🇦🇩",
    "flagUrl": "",
    "region": "Southern Europe",
    "continent": "Europe",
    "capital": "Andorra la Vella",
    "latitude": 42.5,
    "longitude": 1.5,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Catalan"
    ],
    "continents": [],
    "alpha2": "AD"
  },
  "AGO": {
    "id": "AGO",
    "name": "Angola",
    "numericCode": "024",
    "officialName": "Republic of Angola",
    "flag": "🇦🇴",
    "flagUrl": "",
    "region": "Middle Africa",
    "continent": "Africa",
    "capital": "Luanda",
    "latitude": -12.5,
    "longitude": 18.5,
    "currencies": [
      {
        "code": "AOA",
        "name": "Angolan kwanza",
        "symbol": "Kz"
      }
    ],
    "languages": [
      "Portuguese"
    ],
    "continents": [],
    "alpha2": "AO"
  },
  "AIA": {
    "id": "AIA",
    "name": "Anguilla",
    "numericCode": "660",
    "officialName": "Anguilla",
    "flag": "🇦🇮",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "The Valley",
    "latitude": 18.25,
    "longitude": -63.16666666,
    "currencies": [
      {
        "code": "XCD",
        "name": "Eastern Caribbean dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "AI"
  },
  "ATA": {
    "id": "ATA",
    "name": "Antarctica",
    "numericCode": "010",
    "officialName": "Antarctica",
    "flag": "🇦🇶",
    "flagUrl": "",
    "region": "Antarctic",
    "continent": "Antarctic",
    "capital": "",
    "latitude": -90,
    "longitude": 0,
    "currencies": [],
    "languages": [],
    "continents": [],
    "alpha2": "AQ"
  },
  "ATG": {
    "id": "ATG",
    "name": "Antigua and Barbuda",
    "numericCode": "028",
    "officialName": "Antigua and Barbuda",
    "flag": "🇦🇬",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Saint John's",
    "latitude": 17.05,
    "longitude": -61.8,
    "currencies": [
      {
        "code": "XCD",
        "name": "Eastern Caribbean dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "AG"
  },
  "ARG": {
    "id": "ARG",
    "name": "Argentina",
    "numericCode": "032",
    "officialName": "Argentine Republic",
    "flag": "🇦🇷",
    "flagUrl": "",
    "region": "South America",
    "continent": "Americas",
    "capital": "Buenos Aires",
    "latitude": -34,
    "longitude": -64,
    "currencies": [
      {
        "code": "ARS",
        "name": "Argentine peso",
        "symbol": "$"
      }
    ],
    "languages": [
      "Guaraní",
      "Spanish"
    ],
    "continents": [],
    "alpha2": "AR"
  },
  "ARM": {
    "id": "ARM",
    "name": "Armenia",
    "numericCode": "051",
    "officialName": "Republic of Armenia",
    "flag": "🇦🇲",
    "flagUrl": "",
    "region": "Western Asia",
    "continent": "Asia",
    "capital": "Yerevan",
    "latitude": 40,
    "longitude": 45,
    "currencies": [
      {
        "code": "AMD",
        "name": "Armenian dram",
        "symbol": "֏"
      }
    ],
    "languages": [
      "Armenian"
    ],
    "continents": [],
    "alpha2": "AM"
  },
  "ABW": {
    "id": "ABW",
    "name": "Aruba",
    "numericCode": "533",
    "officialName": "Aruba",
    "flag": "🇦🇼",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Oranjestad",
    "latitude": 12.5,
    "longitude": -69.96666666,
    "currencies": [
      {
        "code": "AWG",
        "name": "Aruban florin",
        "symbol": "ƒ"
      }
    ],
    "languages": [
      "Dutch",
      "Papiamento"
    ],
    "continents": [],
    "alpha2": "AW"
  },
  "AUS": {
    "id": "AUS",
    "name": "Australia",
    "numericCode": "036",
    "officialName": "Commonwealth of Australia",
    "flag": "🇦🇺",
    "flagUrl": "",
    "region": "Australia and New Zealand",
    "continent": "Oceania",
    "capital": "Canberra",
    "latitude": -27,
    "longitude": 133,
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "AU"
  },
  "AUT": {
    "id": "AUT",
    "name": "Austria",
    "numericCode": "040",
    "officialName": "Republic of Austria",
    "flag": "🇦🇹",
    "flagUrl": "",
    "region": "Central Europe",
    "continent": "Europe",
    "capital": "Vienna",
    "latitude": 47.33333333,
    "longitude": 13.33333333,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Austro-Bavarian German"
    ],
    "continents": [],
    "alpha2": "AT"
  },
  "AZE": {
    "id": "AZE",
    "name": "Azerbaijan",
    "numericCode": "031",
    "officialName": "Republic of Azerbaijan",
    "flag": "🇦🇿",
    "flagUrl": "",
    "region": "Western Asia",
    "continent": "Asia",
    "capital": "Baku",
    "latitude": 40.5,
    "longitude": 47.5,
    "currencies": [
      {
        "code": "AZN",
        "name": "Azerbaijani manat",
        "symbol": "₼"
      }
    ],
    "languages": [
      "Azerbaijani",
      "Russian"
    ],
    "continents": [],
    "alpha2": "AZ"
  },
  "BHS": {
    "id": "BHS",
    "name": "Bahamas",
    "numericCode": "044",
    "officialName": "Commonwealth of the Bahamas",
    "flag": "🇧🇸",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Nassau",
    "latitude": 24.25,
    "longitude": -76,
    "currencies": [
      {
        "code": "BSD",
        "name": "Bahamian dollar",
        "symbol": "$"
      },
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "BS"
  },
  "BHR": {
    "id": "BHR",
    "name": "Bahrain",
    "numericCode": "048",
    "officialName": "Kingdom of Bahrain",
    "flag": "🇧🇭",
    "flagUrl": "",
    "region": "Western Asia",
    "continent": "Asia",
    "capital": "Manama",
    "latitude": 26,
    "longitude": 50.55,
    "currencies": [
      {
        "code": "BHD",
        "name": "Bahraini dinar",
        "symbol": ".د.ب"
      }
    ],
    "languages": [
      "Arabic"
    ],
    "continents": [],
    "alpha2": "BH"
  },
  "BGD": {
    "id": "BGD",
    "name": "Bangladesh",
    "numericCode": "050",
    "officialName": "People's Republic of Bangladesh",
    "flag": "🇧🇩",
    "flagUrl": "",
    "region": "Southern Asia",
    "continent": "Asia",
    "capital": "Dhaka",
    "latitude": 24,
    "longitude": 90,
    "currencies": [
      {
        "code": "BDT",
        "name": "Bangladeshi taka",
        "symbol": "৳"
      }
    ],
    "languages": [
      "Bengali"
    ],
    "continents": [],
    "alpha2": "BD"
  },
  "BRB": {
    "id": "BRB",
    "name": "Barbados",
    "numericCode": "052",
    "officialName": "Barbados",
    "flag": "🇧🇧",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Bridgetown",
    "latitude": 13.16666666,
    "longitude": -59.53333333,
    "currencies": [
      {
        "code": "BBD",
        "name": "Barbadian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "BB"
  },
  "BLR": {
    "id": "BLR",
    "name": "Belarus",
    "numericCode": "112",
    "officialName": "Republic of Belarus",
    "flag": "🇧🇾",
    "flagUrl": "",
    "region": "Eastern Europe",
    "continent": "Europe",
    "capital": "Minsk",
    "latitude": 53,
    "longitude": 28,
    "currencies": [
      {
        "code": "BYN",
        "name": "Belarusian ruble",
        "symbol": "Br"
      }
    ],
    "languages": [
      "Belarusian",
      "Russian"
    ],
    "continents": [],
    "alpha2": "BY"
  },
  "BEL": {
    "id": "BEL",
    "name": "Belgium",
    "numericCode": "056",
    "officialName": "Kingdom of Belgium",
    "flag": "🇧🇪",
    "flagUrl": "",
    "region": "Western Europe",
    "continent": "Europe",
    "capital": "Brussels",
    "latitude": 50.83333333,
    "longitude": 4,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "German",
      "French",
      "Dutch"
    ],
    "continents": [],
    "alpha2": "BE"
  },
  "BLZ": {
    "id": "BLZ",
    "name": "Belize",
    "numericCode": "084",
    "officialName": "Belize",
    "flag": "🇧🇿",
    "flagUrl": "",
    "region": "Central America",
    "continent": "Americas",
    "capital": "Belmopan",
    "latitude": 17.25,
    "longitude": -88.75,
    "currencies": [
      {
        "code": "BZD",
        "name": "Belize dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "Belizean Creole",
      "English",
      "Spanish"
    ],
    "continents": [],
    "alpha2": "BZ"
  },
  "BEN": {
    "id": "BEN",
    "name": "Benin",
    "numericCode": "204",
    "officialName": "Republic of Benin",
    "flag": "🇧🇯",
    "flagUrl": "",
    "region": "Western Africa",
    "continent": "Africa",
    "capital": "Porto-Novo",
    "latitude": 9.5,
    "longitude": 2.25,
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "BJ"
  },
  "BMU": {
    "id": "BMU",
    "name": "Bermuda",
    "numericCode": "060",
    "officialName": "Bermuda",
    "flag": "🇧🇲",
    "flagUrl": "",
    "region": "North America",
    "continent": "Americas",
    "capital": "Hamilton",
    "latitude": 32.33333333,
    "longitude": -64.75,
    "currencies": [
      {
        "code": "BMD",
        "name": "Bermudian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "BM"
  },
  "BTN": {
    "id": "BTN",
    "name": "Bhutan",
    "numericCode": "064",
    "officialName": "Kingdom of Bhutan",
    "flag": "🇧🇹",
    "flagUrl": "",
    "region": "Southern Asia",
    "continent": "Asia",
    "capital": "Thimphu",
    "latitude": 27.5,
    "longitude": 90.5,
    "currencies": [
      {
        "code": "BTN",
        "name": "Bhutanese ngultrum",
        "symbol": "Nu."
      },
      {
        "code": "INR",
        "name": "Indian rupee",
        "symbol": "₹"
      }
    ],
    "languages": [
      "Dzongkha"
    ],
    "continents": [],
    "alpha2": "BT"
  },
  "BOL": {
    "id": "BOL",
    "name": "Bolivia",
    "numericCode": "068",
    "officialName": "Plurinational State of Bolivia",
    "flag": "🇧🇴",
    "flagUrl": "",
    "region": "South America",
    "continent": "Americas",
    "capital": "Sucre",
    "latitude": -17,
    "longitude": -65,
    "currencies": [
      {
        "code": "BOB",
        "name": "Bolivian boliviano",
        "symbol": "Bs."
      }
    ],
    "languages": [
      "Aymara",
      "Guaraní",
      "Quechua",
      "Spanish"
    ],
    "continents": [],
    "alpha2": "BO"
  },
  "BIH": {
    "id": "BIH",
    "name": "Bosnia and Herzegovina",
    "numericCode": "070",
    "officialName": "Bosnia and Herzegovina",
    "flag": "🇧🇦",
    "flagUrl": "",
    "region": "Southeast Europe",
    "continent": "Europe",
    "capital": "Sarajevo",
    "latitude": 44,
    "longitude": 18,
    "currencies": [
      {
        "code": "BAM",
        "name": "Bosnia and Herzegovina convertible mark",
        "symbol": "KM"
      }
    ],
    "languages": [
      "Bosnian",
      "Croatian",
      "Serbian"
    ],
    "continents": [],
    "alpha2": "BA"
  },
  "BWA": {
    "id": "BWA",
    "name": "Botswana",
    "numericCode": "072",
    "officialName": "Republic of Botswana",
    "flag": "🇧🇼",
    "flagUrl": "",
    "region": "Southern Africa",
    "continent": "Africa",
    "capital": "Gaborone",
    "latitude": -22,
    "longitude": 24,
    "currencies": [
      {
        "code": "BWP",
        "name": "Botswana pula",
        "symbol": "P"
      }
    ],
    "languages": [
      "English",
      "Tswana"
    ],
    "continents": [],
    "alpha2": "BW"
  },
  "BVT": {
    "id": "BVT",
    "name": "Bouvet Island",
    "numericCode": "074",
    "officialName": "Bouvet Island",
    "flag": "🇧🇻",
    "flagUrl": "",
    "region": "Antarctic",
    "continent": "Antarctic",
    "capital": "",
    "latitude": -54.43333333,
    "longitude": 3.4,
    "currencies": [],
    "languages": [
      "Norwegian"
    ],
    "continents": [],
    "alpha2": "BV"
  },
  "BRA": {
    "id": "BRA",
    "name": "Brazil",
    "numericCode": "076",
    "officialName": "Federative Republic of Brazil",
    "flag": "🇧🇷",
    "flagUrl": "",
    "region": "South America",
    "continent": "Americas",
    "capital": "Brasília",
    "latitude": -10,
    "longitude": -55,
    "currencies": [
      {
        "code": "BRL",
        "name": "Brazilian real",
        "symbol": "R$"
      }
    ],
    "languages": [
      "Portuguese"
    ],
    "continents": [],
    "alpha2": "BR"
  },
  "IOT": {
    "id": "IOT",
    "name": "British Indian Ocean Territory",
    "numericCode": "086",
    "officialName": "British Indian Ocean Territory",
    "flag": "🇮🇴",
    "flagUrl": "",
    "region": "Eastern Africa",
    "continent": "Africa",
    "capital": "Diego Garcia",
    "latitude": -6,
    "longitude": 71.5,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "IO"
  },
  "VGB": {
    "id": "VGB",
    "name": "British Virgin Islands",
    "numericCode": "092",
    "officialName": "Virgin Islands",
    "flag": "🇻🇬",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Road Town",
    "latitude": 18.431383,
    "longitude": -64.62305,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "VG"
  },
  "BRN": {
    "id": "BRN",
    "name": "Brunei",
    "numericCode": "096",
    "officialName": "Nation of Brunei, Abode of Peace",
    "flag": "🇧🇳",
    "flagUrl": "",
    "region": "South-Eastern Asia",
    "continent": "Asia",
    "capital": "Bandar Seri Begawan",
    "latitude": 4.5,
    "longitude": 114.66666666,
    "currencies": [
      {
        "code": "BND",
        "name": "Brunei dollar",
        "symbol": "$"
      },
      {
        "code": "SGD",
        "name": "Singapore dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "Malay"
    ],
    "continents": [],
    "alpha2": "BN"
  },
  "BGR": {
    "id": "BGR",
    "name": "Bulgaria",
    "numericCode": "100",
    "officialName": "Republic of Bulgaria",
    "flag": "🇧🇬",
    "flagUrl": "",
    "region": "Southeast Europe",
    "continent": "Europe",
    "capital": "Sofia",
    "latitude": 43,
    "longitude": 25,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Bulgarian"
    ],
    "continents": [],
    "alpha2": "BG"
  },
  "BFA": {
    "id": "BFA",
    "name": "Burkina Faso",
    "numericCode": "854",
    "officialName": "Burkina Faso",
    "flag": "🇧🇫",
    "flagUrl": "",
    "region": "Western Africa",
    "continent": "Africa",
    "capital": "Ouagadougou",
    "latitude": 13,
    "longitude": -2,
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "BF"
  },
  "BDI": {
    "id": "BDI",
    "name": "Burundi",
    "numericCode": "108",
    "officialName": "Republic of Burundi",
    "flag": "🇧🇮",
    "flagUrl": "",
    "region": "Eastern Africa",
    "continent": "Africa",
    "capital": "Gitega",
    "latitude": -3.5,
    "longitude": 30,
    "currencies": [
      {
        "code": "BIF",
        "name": "Burundian franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      "French",
      "Kirundi"
    ],
    "continents": [],
    "alpha2": "BI"
  },
  "KHM": {
    "id": "KHM",
    "name": "Cambodia",
    "numericCode": "116",
    "officialName": "Kingdom of Cambodia",
    "flag": "🇰🇭",
    "flagUrl": "",
    "region": "South-Eastern Asia",
    "continent": "Asia",
    "capital": "Phnom Penh",
    "latitude": 13,
    "longitude": 105,
    "currencies": [
      {
        "code": "KHR",
        "name": "Cambodian riel",
        "symbol": "៛"
      },
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "Khmer"
    ],
    "continents": [],
    "alpha2": "KH"
  },
  "CMR": {
    "id": "CMR",
    "name": "Cameroon",
    "numericCode": "120",
    "officialName": "Republic of Cameroon",
    "flag": "🇨🇲",
    "flagUrl": "",
    "region": "Middle Africa",
    "continent": "Africa",
    "capital": "Yaoundé",
    "latitude": 6,
    "longitude": 12,
    "currencies": [
      {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      "English",
      "French"
    ],
    "continents": [],
    "alpha2": "CM"
  },
  "CAN": {
    "id": "CAN",
    "name": "Canada",
    "numericCode": "124",
    "officialName": "Canada",
    "flag": "🇨🇦",
    "flagUrl": "",
    "region": "North America",
    "continent": "Americas",
    "capital": "Ottawa",
    "latitude": 60,
    "longitude": -95,
    "currencies": [
      {
        "code": "CAD",
        "name": "Canadian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English",
      "French"
    ],
    "continents": [],
    "alpha2": "CA"
  },
  "CPV": {
    "id": "CPV",
    "name": "Cape Verde",
    "numericCode": "132",
    "officialName": "Republic of Cabo Verde",
    "flag": "🇨🇻",
    "flagUrl": "",
    "region": "Western Africa",
    "continent": "Africa",
    "capital": "Praia",
    "latitude": 16,
    "longitude": -24,
    "currencies": [
      {
        "code": "CVE",
        "name": "Cape Verdean escudo",
        "symbol": "Esc"
      }
    ],
    "languages": [
      "Portuguese"
    ],
    "continents": [],
    "alpha2": "CV"
  },
  "BES": {
    "id": "BES",
    "name": "Caribbean Netherlands",
    "numericCode": "535",
    "officialName": "Bonaire, Sint Eustatius and Saba",
    "flag": "",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Kralendijk",
    "latitude": 12.18,
    "longitude": -68.25,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English",
      "Dutch",
      "Papiamento"
    ],
    "continents": [],
    "alpha2": "BQ"
  },
  "CYM": {
    "id": "CYM",
    "name": "Cayman Islands",
    "numericCode": "136",
    "officialName": "Cayman Islands",
    "flag": "🇰🇾",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "George Town",
    "latitude": 19.5,
    "longitude": -80.5,
    "currencies": [
      {
        "code": "KYD",
        "name": "Cayman Islands dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "KY"
  },
  "CAF": {
    "id": "CAF",
    "name": "Central African Republic",
    "numericCode": "140",
    "officialName": "Central African Republic",
    "flag": "🇨🇫",
    "flagUrl": "",
    "region": "Middle Africa",
    "continent": "Africa",
    "capital": "Bangui",
    "latitude": 7,
    "longitude": 21,
    "currencies": [
      {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      "French",
      "Sango"
    ],
    "continents": [],
    "alpha2": "CF"
  },
  "TCD": {
    "id": "TCD",
    "name": "Chad",
    "numericCode": "148",
    "officialName": "Republic of Chad",
    "flag": "🇹🇩",
    "flagUrl": "",
    "region": "Middle Africa",
    "continent": "Africa",
    "capital": "N'Djamena",
    "latitude": 15,
    "longitude": 19,
    "currencies": [
      {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      "Arabic",
      "French"
    ],
    "continents": [],
    "alpha2": "TD"
  },
  "CHL": {
    "id": "CHL",
    "name": "Chile",
    "numericCode": "152",
    "officialName": "Republic of Chile",
    "flag": "🇨🇱",
    "flagUrl": "",
    "region": "South America",
    "continent": "Americas",
    "capital": "Santiago",
    "latitude": -30,
    "longitude": -71,
    "currencies": [
      {
        "code": "CLP",
        "name": "Chilean peso",
        "symbol": "$"
      }
    ],
    "languages": [
      "Spanish"
    ],
    "continents": [],
    "alpha2": "CL"
  },
  "CHN": {
    "id": "CHN",
    "name": "China",
    "numericCode": "156",
    "officialName": "People's Republic of China",
    "flag": "🇨🇳",
    "flagUrl": "",
    "region": "Eastern Asia",
    "continent": "Asia",
    "capital": "Beijing",
    "latitude": 35,
    "longitude": 105,
    "currencies": [
      {
        "code": "CNY",
        "name": "Chinese yuan",
        "symbol": "¥"
      }
    ],
    "languages": [
      "Chinese"
    ],
    "continents": [],
    "alpha2": "CN"
  },
  "CXR": {
    "id": "CXR",
    "name": "Christmas Island",
    "numericCode": "162",
    "officialName": "Territory of Christmas Island",
    "flag": "🇨🇽",
    "flagUrl": "",
    "region": "Australia and New Zealand",
    "continent": "Oceania",
    "capital": "Flying Fish Cove",
    "latitude": -10.5,
    "longitude": 105.66666666,
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "CX"
  },
  "CCK": {
    "id": "CCK",
    "name": "Cocos (Keeling) Islands",
    "numericCode": "166",
    "officialName": "Territory of the Cocos (Keeling) Islands",
    "flag": "🇨🇨",
    "flagUrl": "",
    "region": "Australia and New Zealand",
    "continent": "Oceania",
    "capital": "West Island",
    "latitude": -12.5,
    "longitude": 96.83333333,
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "CC"
  },
  "COL": {
    "id": "COL",
    "name": "Colombia",
    "numericCode": "170",
    "officialName": "Republic of Colombia",
    "flag": "🇨🇴",
    "flagUrl": "",
    "region": "South America",
    "continent": "Americas",
    "capital": "Bogotá",
    "latitude": 4,
    "longitude": -72,
    "currencies": [
      {
        "code": "COP",
        "name": "Colombian peso",
        "symbol": "$"
      }
    ],
    "languages": [
      "Spanish"
    ],
    "continents": [],
    "alpha2": "CO"
  },
  "COM": {
    "id": "COM",
    "name": "Comoros",
    "numericCode": "174",
    "officialName": "Union of the Comoros",
    "flag": "🇰🇲",
    "flagUrl": "",
    "region": "Eastern Africa",
    "continent": "Africa",
    "capital": "Moroni",
    "latitude": -12.16666666,
    "longitude": 44.25,
    "currencies": [
      {
        "code": "KMF",
        "name": "Comorian franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      "Arabic",
      "French",
      "Comorian"
    ],
    "continents": [],
    "alpha2": "KM"
  },
  "COG": {
    "id": "COG",
    "name": "Congo",
    "numericCode": "178",
    "officialName": "Republic of the Congo",
    "flag": "🇨🇬",
    "flagUrl": "",
    "region": "Middle Africa",
    "continent": "Africa",
    "capital": "Brazzaville",
    "latitude": -1,
    "longitude": 15,
    "currencies": [
      {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      "French",
      "Kikongo",
      "Lingala"
    ],
    "continents": [],
    "alpha2": "CG"
  },
  "COK": {
    "id": "COK",
    "name": "Cook Islands",
    "numericCode": "184",
    "officialName": "Cook Islands",
    "flag": "🇨🇰",
    "flagUrl": "",
    "region": "Polynesia",
    "continent": "Oceania",
    "capital": "Avarua",
    "latitude": -21.23333333,
    "longitude": -159.76666666,
    "currencies": [
      {
        "code": "CKD",
        "name": "Cook Islands dollar",
        "symbol": "$"
      },
      {
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English",
      "Cook Islands Māori"
    ],
    "continents": [],
    "alpha2": "CK"
  },
  "CRI": {
    "id": "CRI",
    "name": "Costa Rica",
    "numericCode": "188",
    "officialName": "Republic of Costa Rica",
    "flag": "🇨🇷",
    "flagUrl": "",
    "region": "Central America",
    "continent": "Americas",
    "capital": "San José",
    "latitude": 10,
    "longitude": -84,
    "currencies": [
      {
        "code": "CRC",
        "name": "Costa Rican colón",
        "symbol": "₡"
      }
    ],
    "languages": [
      "Spanish"
    ],
    "continents": [],
    "alpha2": "CR"
  },
  "HRV": {
    "id": "HRV",
    "name": "Croatia",
    "numericCode": "191",
    "officialName": "Republic of Croatia",
    "flag": "🇭🇷",
    "flagUrl": "",
    "region": "Southeast Europe",
    "continent": "Europe",
    "capital": "Zagreb",
    "latitude": 45.16666666,
    "longitude": 15.5,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Croatian"
    ],
    "continents": [],
    "alpha2": "HR"
  },
  "CUB": {
    "id": "CUB",
    "name": "Cuba",
    "numericCode": "192",
    "officialName": "Republic of Cuba",
    "flag": "🇨🇺",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Havana",
    "latitude": 21.5,
    "longitude": -80,
    "currencies": [
      {
        "code": "CUP",
        "name": "Cuban peso",
        "symbol": "$"
      }
    ],
    "languages": [
      "Spanish"
    ],
    "continents": [],
    "alpha2": "CU"
  },
  "CUW": {
    "id": "CUW",
    "name": "Curaçao",
    "numericCode": "531",
    "officialName": "Country of Curaçao",
    "flag": "🇨🇼",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Willemstad",
    "latitude": 12.116667,
    "longitude": -68.933333,
    "currencies": [
      {
        "code": "XCG",
        "name": "Caribbean guilder",
        "symbol": "Cg"
      }
    ],
    "languages": [
      "English",
      "Dutch",
      "Papiamento"
    ],
    "continents": [],
    "alpha2": "CW"
  },
  "CYP": {
    "id": "CYP",
    "name": "Cyprus",
    "numericCode": "196",
    "officialName": "Republic of Cyprus",
    "flag": "🇨🇾",
    "flagUrl": "",
    "region": "Southern Europe",
    "continent": "Europe",
    "capital": "Nicosia",
    "latitude": 35,
    "longitude": 33,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Greek",
      "Turkish"
    ],
    "continents": [],
    "alpha2": "CY"
  },
  "CZE": {
    "id": "CZE",
    "name": "Czechia",
    "numericCode": "203",
    "officialName": "Czech Republic",
    "flag": "🇨🇿",
    "flagUrl": "",
    "region": "Central Europe",
    "continent": "Europe",
    "capital": "Prague",
    "latitude": 49.75,
    "longitude": 15.5,
    "currencies": [
      {
        "code": "CZK",
        "name": "Czech koruna",
        "symbol": "Kč"
      }
    ],
    "languages": [
      "Czech",
      "Slovak"
    ],
    "continents": [],
    "alpha2": "CZ"
  },
  "DNK": {
    "id": "DNK",
    "name": "Denmark",
    "numericCode": "208",
    "officialName": "Kingdom of Denmark",
    "flag": "🇩🇰",
    "flagUrl": "",
    "region": "Northern Europe",
    "continent": "Europe",
    "capital": "Copenhagen",
    "latitude": 56,
    "longitude": 10,
    "currencies": [
      {
        "code": "DKK",
        "name": "Danish krone",
        "symbol": "kr"
      }
    ],
    "languages": [
      "Danish"
    ],
    "continents": [],
    "alpha2": "DK"
  },
  "DJI": {
    "id": "DJI",
    "name": "Djibouti",
    "numericCode": "262",
    "officialName": "Republic of Djibouti",
    "flag": "🇩🇯",
    "flagUrl": "",
    "region": "Eastern Africa",
    "continent": "Africa",
    "capital": "Djibouti",
    "latitude": 11.5,
    "longitude": 43,
    "currencies": [
      {
        "code": "DJF",
        "name": "Djiboutian franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      "Arabic",
      "French"
    ],
    "continents": [],
    "alpha2": "DJ"
  },
  "DMA": {
    "id": "DMA",
    "name": "Dominica",
    "numericCode": "212",
    "officialName": "Commonwealth of Dominica",
    "flag": "🇩🇲",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Roseau",
    "latitude": 15.41666666,
    "longitude": -61.33333333,
    "currencies": [
      {
        "code": "XCD",
        "name": "Eastern Caribbean dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "DM"
  },
  "DOM": {
    "id": "DOM",
    "name": "Dominican Republic",
    "numericCode": "214",
    "officialName": "Dominican Republic",
    "flag": "🇩🇴",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Santo Domingo",
    "latitude": 19,
    "longitude": -70.66666666,
    "currencies": [
      {
        "code": "DOP",
        "name": "Dominican peso",
        "symbol": "$"
      }
    ],
    "languages": [
      "Spanish"
    ],
    "continents": [],
    "alpha2": "DO"
  },
  "COD": {
    "id": "COD",
    "name": "DR Congo",
    "numericCode": "180",
    "officialName": "Democratic Republic of the Congo",
    "flag": "🇨🇩",
    "flagUrl": "",
    "region": "Middle Africa",
    "continent": "Africa",
    "capital": "Kinshasa",
    "latitude": 0,
    "longitude": 25,
    "currencies": [
      {
        "code": "CDF",
        "name": "Congolese franc",
        "symbol": "FC"
      }
    ],
    "languages": [
      "French",
      "Kikongo",
      "Lingala",
      "Tshiluba",
      "Swahili"
    ],
    "continents": [],
    "alpha2": "CD"
  },
  "ECU": {
    "id": "ECU",
    "name": "Ecuador",
    "numericCode": "218",
    "officialName": "Republic of Ecuador",
    "flag": "🇪🇨",
    "flagUrl": "",
    "region": "South America",
    "continent": "Americas",
    "capital": "Quito",
    "latitude": -2,
    "longitude": -77.5,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "Spanish"
    ],
    "continents": [],
    "alpha2": "EC"
  },
  "EGY": {
    "id": "EGY",
    "name": "Egypt",
    "numericCode": "818",
    "officialName": "Arab Republic of Egypt",
    "flag": "🇪🇬",
    "flagUrl": "",
    "region": "Northern Africa",
    "continent": "Africa",
    "capital": "Cairo",
    "latitude": 27,
    "longitude": 30,
    "currencies": [
      {
        "code": "EGP",
        "name": "Egyptian pound",
        "symbol": "£"
      }
    ],
    "languages": [
      "Arabic"
    ],
    "continents": [],
    "alpha2": "EG"
  },
  "SLV": {
    "id": "SLV",
    "name": "El Salvador",
    "numericCode": "222",
    "officialName": "Republic of El Salvador",
    "flag": "🇸🇻",
    "flagUrl": "",
    "region": "Central America",
    "continent": "Americas",
    "capital": "San Salvador",
    "latitude": 13.83333333,
    "longitude": -88.91666666,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "Spanish"
    ],
    "continents": [],
    "alpha2": "SV"
  },
  "GNQ": {
    "id": "GNQ",
    "name": "Equatorial Guinea",
    "numericCode": "226",
    "officialName": "Republic of Equatorial Guinea",
    "flag": "🇬🇶",
    "flagUrl": "",
    "region": "Middle Africa",
    "continent": "Africa",
    "capital": "Ciudad de la Paz",
    "latitude": 2,
    "longitude": 10,
    "currencies": [
      {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      "French",
      "Portuguese",
      "Spanish"
    ],
    "continents": [],
    "alpha2": "GQ"
  },
  "ERI": {
    "id": "ERI",
    "name": "Eritrea",
    "numericCode": "232",
    "officialName": "State of Eritrea",
    "flag": "🇪🇷",
    "flagUrl": "",
    "region": "Eastern Africa",
    "continent": "Africa",
    "capital": "Asmara",
    "latitude": 15,
    "longitude": 39,
    "currencies": [
      {
        "code": "ERN",
        "name": "Eritrean nakfa",
        "symbol": "Nfk"
      }
    ],
    "languages": [
      "Arabic",
      "English",
      "Tigrinya"
    ],
    "continents": [],
    "alpha2": "ER"
  },
  "EST": {
    "id": "EST",
    "name": "Estonia",
    "numericCode": "233",
    "officialName": "Republic of Estonia",
    "flag": "🇪🇪",
    "flagUrl": "",
    "region": "Northern Europe",
    "continent": "Europe",
    "capital": "Tallinn",
    "latitude": 59,
    "longitude": 26,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Estonian"
    ],
    "continents": [],
    "alpha2": "EE"
  },
  "SWZ": {
    "id": "SWZ",
    "name": "Eswatini",
    "numericCode": "748",
    "officialName": "Kingdom of Eswatini",
    "flag": "🇸🇿",
    "flagUrl": "",
    "region": "Southern Africa",
    "continent": "Africa",
    "capital": "Lobamba",
    "latitude": -26.5,
    "longitude": 31.5,
    "currencies": [
      {
        "code": "SZL",
        "name": "Swazi lilangeni",
        "symbol": "L"
      },
      {
        "code": "ZAR",
        "name": "South African rand",
        "symbol": "R"
      }
    ],
    "languages": [
      "English",
      "Swazi"
    ],
    "continents": [],
    "alpha2": "SZ"
  },
  "ETH": {
    "id": "ETH",
    "name": "Ethiopia",
    "numericCode": "231",
    "officialName": "Federal Democratic Republic of Ethiopia",
    "flag": "🇪🇹",
    "flagUrl": "",
    "region": "Eastern Africa",
    "continent": "Africa",
    "capital": "Addis Ababa",
    "latitude": 8,
    "longitude": 38,
    "currencies": [
      {
        "code": "ETB",
        "name": "Ethiopian birr",
        "symbol": "Br"
      }
    ],
    "languages": [
      "Amharic"
    ],
    "continents": [],
    "alpha2": "ET"
  },
  "FLK": {
    "id": "FLK",
    "name": "Falkland Islands",
    "numericCode": "238",
    "officialName": "Falkland Islands",
    "flag": "🇫🇰",
    "flagUrl": "",
    "region": "South America",
    "continent": "Americas",
    "capital": "Stanley",
    "latitude": -51.75,
    "longitude": -59,
    "currencies": [
      {
        "code": "FKP",
        "name": "Falkland Islands pound",
        "symbol": "£"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "FK"
  },
  "FRO": {
    "id": "FRO",
    "name": "Faroe Islands",
    "numericCode": "234",
    "officialName": "Faroe Islands",
    "flag": "🇫🇴",
    "flagUrl": "",
    "region": "Northern Europe",
    "continent": "Europe",
    "capital": "Tórshavn",
    "latitude": 62,
    "longitude": -7,
    "currencies": [
      {
        "code": "DKK",
        "name": "Danish krone",
        "symbol": "kr"
      },
      {
        "code": "FOK",
        "name": "Faroese króna",
        "symbol": "kr"
      }
    ],
    "languages": [
      "Danish",
      "Faroese"
    ],
    "continents": [],
    "alpha2": "FO"
  },
  "FJI": {
    "id": "FJI",
    "name": "Fiji",
    "numericCode": "242",
    "officialName": "Republic of Fiji",
    "flag": "🇫🇯",
    "flagUrl": "",
    "region": "Melanesia",
    "continent": "Oceania",
    "capital": "Suva",
    "latitude": -18,
    "longitude": 175,
    "currencies": [
      {
        "code": "FJD",
        "name": "Fijian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English",
      "Fijian",
      "Fiji Hindi"
    ],
    "continents": [],
    "alpha2": "FJ"
  },
  "FIN": {
    "id": "FIN",
    "name": "Finland",
    "numericCode": "246",
    "officialName": "Republic of Finland",
    "flag": "🇫🇮",
    "flagUrl": "",
    "region": "Northern Europe",
    "continent": "Europe",
    "capital": "Helsinki",
    "latitude": 64,
    "longitude": 26,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Finnish",
      "Swedish"
    ],
    "continents": [],
    "alpha2": "FI"
  },
  "FRA": {
    "id": "FRA",
    "name": "France",
    "numericCode": "250",
    "officialName": "French Republic",
    "flag": "🇫🇷",
    "flagUrl": "",
    "region": "Western Europe",
    "continent": "Europe",
    "capital": "Paris",
    "latitude": 46,
    "longitude": 2,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "FR"
  },
  "GUF": {
    "id": "GUF",
    "name": "French Guiana",
    "numericCode": "254",
    "officialName": "Guiana",
    "flag": "🇬🇫",
    "flagUrl": "",
    "region": "South America",
    "continent": "Americas",
    "capital": "Cayenne",
    "latitude": 4,
    "longitude": -53,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "GF"
  },
  "PYF": {
    "id": "PYF",
    "name": "French Polynesia",
    "numericCode": "258",
    "officialName": "French Polynesia",
    "flag": "🇵🇫",
    "flagUrl": "",
    "region": "Polynesia",
    "continent": "Oceania",
    "capital": "Papeetē",
    "latitude": -15,
    "longitude": -140,
    "currencies": [
      {
        "code": "XPF",
        "name": "CFP franc",
        "symbol": "₣"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "PF"
  },
  "ATF": {
    "id": "ATF",
    "name": "French Southern and Antarctic Lands",
    "numericCode": "260",
    "officialName": "Territory of the French Southern and Antarctic Lands",
    "flag": "🇹🇫",
    "flagUrl": "",
    "region": "Antarctic",
    "continent": "Antarctic",
    "capital": "Port-aux-Français",
    "latitude": -49.25,
    "longitude": 69.167,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "TF"
  },
  "GAB": {
    "id": "GAB",
    "name": "Gabon",
    "numericCode": "266",
    "officialName": "Gabonese Republic",
    "flag": "🇬🇦",
    "flagUrl": "",
    "region": "Middle Africa",
    "continent": "Africa",
    "capital": "Libreville",
    "latitude": -1,
    "longitude": 11.75,
    "currencies": [
      {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "GA"
  },
  "GMB": {
    "id": "GMB",
    "name": "Gambia",
    "numericCode": "270",
    "officialName": "Republic of the Gambia",
    "flag": "🇬🇲",
    "flagUrl": "",
    "region": "Western Africa",
    "continent": "Africa",
    "capital": "Banjul",
    "latitude": 13.46666666,
    "longitude": -16.56666666,
    "currencies": [
      {
        "code": "GMD",
        "name": "dalasi",
        "symbol": "D"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "GM"
  },
  "GEO": {
    "id": "GEO",
    "name": "Georgia",
    "numericCode": "268",
    "officialName": "Georgia",
    "flag": "🇬🇪",
    "flagUrl": "",
    "region": "Western Asia",
    "continent": "Asia",
    "capital": "Tbilisi",
    "latitude": 42,
    "longitude": 43.5,
    "currencies": [
      {
        "code": "GEL",
        "name": "lari",
        "symbol": "₾"
      }
    ],
    "languages": [
      "Georgian"
    ],
    "continents": [],
    "alpha2": "GE"
  },
  "DEU": {
    "id": "DEU",
    "name": "Germany",
    "numericCode": "276",
    "officialName": "Federal Republic of Germany",
    "flag": "🇩🇪",
    "flagUrl": "",
    "region": "Western Europe",
    "continent": "Europe",
    "capital": "Berlin",
    "latitude": 51,
    "longitude": 9,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "German"
    ],
    "continents": [],
    "alpha2": "DE"
  },
  "GHA": {
    "id": "GHA",
    "name": "Ghana",
    "numericCode": "288",
    "officialName": "Republic of Ghana",
    "flag": "🇬🇭",
    "flagUrl": "",
    "region": "Western Africa",
    "continent": "Africa",
    "capital": "Accra",
    "latitude": 8,
    "longitude": -2,
    "currencies": [
      {
        "code": "GHS",
        "name": "Ghanaian cedi",
        "symbol": "₵"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "GH"
  },
  "GIB": {
    "id": "GIB",
    "name": "Gibraltar",
    "numericCode": "292",
    "officialName": "Gibraltar",
    "flag": "🇬🇮",
    "flagUrl": "",
    "region": "Southern Europe",
    "continent": "Europe",
    "capital": "Gibraltar",
    "latitude": 36.13333333,
    "longitude": -5.35,
    "currencies": [
      {
        "code": "GIP",
        "name": "Gibraltar pound",
        "symbol": "£"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "GI"
  },
  "GRC": {
    "id": "GRC",
    "name": "Greece",
    "numericCode": "300",
    "officialName": "Hellenic Republic",
    "flag": "🇬🇷",
    "flagUrl": "",
    "region": "Southern Europe",
    "continent": "Europe",
    "capital": "Athens",
    "latitude": 39,
    "longitude": 22,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Greek"
    ],
    "continents": [],
    "alpha2": "GR"
  },
  "GRL": {
    "id": "GRL",
    "name": "Greenland",
    "numericCode": "304",
    "officialName": "Greenland",
    "flag": "🇬🇱",
    "flagUrl": "",
    "region": "North America",
    "continent": "Americas",
    "capital": "Nuuk",
    "latitude": 72,
    "longitude": -40,
    "currencies": [
      {
        "code": "DKK",
        "name": "krone",
        "symbol": "kr."
      }
    ],
    "languages": [
      "Greenlandic"
    ],
    "continents": [],
    "alpha2": "GL"
  },
  "GRD": {
    "id": "GRD",
    "name": "Grenada",
    "numericCode": "308",
    "officialName": "Grenada",
    "flag": "🇬🇩",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "St. George's",
    "latitude": 12.11666666,
    "longitude": -61.66666666,
    "currencies": [
      {
        "code": "XCD",
        "name": "Eastern Caribbean dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "GD"
  },
  "GLP": {
    "id": "GLP",
    "name": "Guadeloupe",
    "numericCode": "312",
    "officialName": "Guadeloupe",
    "flag": "🇬🇵",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Basse-Terre",
    "latitude": 16.25,
    "longitude": -61.583333,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "GP"
  },
  "GUM": {
    "id": "GUM",
    "name": "Guam",
    "numericCode": "316",
    "officialName": "Guam",
    "flag": "🇬🇺",
    "flagUrl": "",
    "region": "Micronesia",
    "continent": "Oceania",
    "capital": "Hagåtña",
    "latitude": 13.46666666,
    "longitude": 144.78333333,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "Chamorro",
      "English",
      "Spanish"
    ],
    "continents": [],
    "alpha2": "GU"
  },
  "GTM": {
    "id": "GTM",
    "name": "Guatemala",
    "numericCode": "320",
    "officialName": "Republic of Guatemala",
    "flag": "🇬🇹",
    "flagUrl": "",
    "region": "Central America",
    "continent": "Americas",
    "capital": "Guatemala City",
    "latitude": 15.5,
    "longitude": -90.25,
    "currencies": [
      {
        "code": "GTQ",
        "name": "Guatemalan quetzal",
        "symbol": "Q"
      }
    ],
    "languages": [
      "Spanish"
    ],
    "continents": [],
    "alpha2": "GT"
  },
  "GGY": {
    "id": "GGY",
    "name": "Guernsey",
    "numericCode": "831",
    "officialName": "Bailiwick of Guernsey",
    "flag": "🇬🇬",
    "flagUrl": "",
    "region": "Northern Europe",
    "continent": "Europe",
    "capital": "St. Peter Port",
    "latitude": 49.46666666,
    "longitude": -2.58333333,
    "currencies": [
      {
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      },
      {
        "code": "GGP",
        "name": "Guernsey pound",
        "symbol": "£"
      }
    ],
    "languages": [
      "English",
      "French",
      "Guernésiais"
    ],
    "continents": [],
    "alpha2": "GG"
  },
  "GIN": {
    "id": "GIN",
    "name": "Guinea",
    "numericCode": "324",
    "officialName": "Republic of Guinea",
    "flag": "🇬🇳",
    "flagUrl": "",
    "region": "Western Africa",
    "continent": "Africa",
    "capital": "Conakry",
    "latitude": 11,
    "longitude": -10,
    "currencies": [
      {
        "code": "GNF",
        "name": "Guinean franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "GN"
  },
  "GNB": {
    "id": "GNB",
    "name": "Guinea-Bissau",
    "numericCode": "624",
    "officialName": "Republic of Guinea-Bissau",
    "flag": "🇬🇼",
    "flagUrl": "",
    "region": "Western Africa",
    "continent": "Africa",
    "capital": "Bissau",
    "latitude": 12,
    "longitude": -15,
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      "Portuguese",
      "Upper Guinea Creole"
    ],
    "continents": [],
    "alpha2": "GW"
  },
  "GUY": {
    "id": "GUY",
    "name": "Guyana",
    "numericCode": "328",
    "officialName": "Co-operative Republic of Guyana",
    "flag": "🇬🇾",
    "flagUrl": "",
    "region": "South America",
    "continent": "Americas",
    "capital": "Georgetown",
    "latitude": 5,
    "longitude": -59,
    "currencies": [
      {
        "code": "GYD",
        "name": "Guyanese dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "GY"
  },
  "HTI": {
    "id": "HTI",
    "name": "Haiti",
    "numericCode": "332",
    "officialName": "Republic of Haiti",
    "flag": "🇭🇹",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Port-au-Prince",
    "latitude": 19,
    "longitude": -72.41666666,
    "currencies": [
      {
        "code": "HTG",
        "name": "Haitian gourde",
        "symbol": "G"
      }
    ],
    "languages": [
      "French",
      "Haitian Creole"
    ],
    "continents": [],
    "alpha2": "HT"
  },
  "HMD": {
    "id": "HMD",
    "name": "Heard Island and McDonald Islands",
    "numericCode": "334",
    "officialName": "Heard Island and McDonald Islands",
    "flag": "🇭🇲",
    "flagUrl": "",
    "region": "Antarctic",
    "continent": "Antarctic",
    "capital": "",
    "latitude": -53.1,
    "longitude": 72.51666666,
    "currencies": [],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "HM"
  },
  "HND": {
    "id": "HND",
    "name": "Honduras",
    "numericCode": "340",
    "officialName": "Republic of Honduras",
    "flag": "🇭🇳",
    "flagUrl": "",
    "region": "Central America",
    "continent": "Americas",
    "capital": "Tegucigalpa",
    "latitude": 15,
    "longitude": -86.5,
    "currencies": [
      {
        "code": "HNL",
        "name": "Honduran lempira",
        "symbol": "L"
      }
    ],
    "languages": [
      "Spanish"
    ],
    "continents": [],
    "alpha2": "HN"
  },
  "HKG": {
    "id": "HKG",
    "name": "Hong Kong",
    "numericCode": "344",
    "officialName": "Hong Kong Special Administrative Region of the People's Republic of China",
    "flag": "🇭🇰",
    "flagUrl": "",
    "region": "Eastern Asia",
    "continent": "Asia",
    "capital": "City of Victoria",
    "latitude": 22.267,
    "longitude": 114.188,
    "currencies": [
      {
        "code": "HKD",
        "name": "Hong Kong dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English",
      "Chinese"
    ],
    "continents": [],
    "alpha2": "HK"
  },
  "HUN": {
    "id": "HUN",
    "name": "Hungary",
    "numericCode": "348",
    "officialName": "Hungary",
    "flag": "🇭🇺",
    "flagUrl": "",
    "region": "Central Europe",
    "continent": "Europe",
    "capital": "Budapest",
    "latitude": 47,
    "longitude": 20,
    "currencies": [
      {
        "code": "HUF",
        "name": "Hungarian forint",
        "symbol": "Ft"
      }
    ],
    "languages": [
      "Hungarian"
    ],
    "continents": [],
    "alpha2": "HU"
  },
  "ISL": {
    "id": "ISL",
    "name": "Iceland",
    "numericCode": "352",
    "officialName": "Iceland",
    "flag": "🇮🇸",
    "flagUrl": "",
    "region": "Northern Europe",
    "continent": "Europe",
    "capital": "Reykjavik",
    "latitude": 65,
    "longitude": -18,
    "currencies": [
      {
        "code": "ISK",
        "name": "Icelandic króna",
        "symbol": "kr"
      }
    ],
    "languages": [
      "Icelandic"
    ],
    "continents": [],
    "alpha2": "IS"
  },
  "IND": {
    "id": "IND",
    "name": "India",
    "numericCode": "356",
    "officialName": "Republic of India",
    "flag": "🇮🇳",
    "flagUrl": "",
    "region": "Southern Asia",
    "continent": "Asia",
    "capital": "New Delhi",
    "latitude": 20,
    "longitude": 77,
    "currencies": [
      {
        "code": "INR",
        "name": "Indian rupee",
        "symbol": "₹"
      }
    ],
    "languages": [
      "English",
      "Hindi",
      "Tamil"
    ],
    "continents": [],
    "alpha2": "IN"
  },
  "IDN": {
    "id": "IDN",
    "name": "Indonesia",
    "numericCode": "360",
    "officialName": "Republic of Indonesia",
    "flag": "🇮🇩",
    "flagUrl": "",
    "region": "South-Eastern Asia",
    "continent": "Asia",
    "capital": "Jakarta",
    "latitude": -5,
    "longitude": 120,
    "currencies": [
      {
        "code": "IDR",
        "name": "Indonesian rupiah",
        "symbol": "Rp"
      }
    ],
    "languages": [
      "Indonesian"
    ],
    "continents": [],
    "alpha2": "ID"
  },
  "IRN": {
    "id": "IRN",
    "name": "Iran",
    "numericCode": "364",
    "officialName": "Islamic Republic of Iran",
    "flag": "🇮🇷",
    "flagUrl": "",
    "region": "Southern Asia",
    "continent": "Asia",
    "capital": "Tehran",
    "latitude": 32,
    "longitude": 53,
    "currencies": [
      {
        "code": "IRR",
        "name": "Iranian rial",
        "symbol": "﷼"
      }
    ],
    "languages": [
      "Persian (Farsi)"
    ],
    "continents": [],
    "alpha2": "IR"
  },
  "IRQ": {
    "id": "IRQ",
    "name": "Iraq",
    "numericCode": "368",
    "officialName": "Republic of Iraq",
    "flag": "🇮🇶",
    "flagUrl": "",
    "region": "Western Asia",
    "continent": "Asia",
    "capital": "Baghdad",
    "latitude": 33,
    "longitude": 44,
    "currencies": [
      {
        "code": "IQD",
        "name": "Iraqi dinar",
        "symbol": "ع.د"
      }
    ],
    "languages": [
      "Arabic",
      "Aramaic",
      "Sorani"
    ],
    "continents": [],
    "alpha2": "IQ"
  },
  "IRL": {
    "id": "IRL",
    "name": "Ireland",
    "numericCode": "372",
    "officialName": "Republic of Ireland",
    "flag": "🇮🇪",
    "flagUrl": "",
    "region": "Northern Europe",
    "continent": "Europe",
    "capital": "Dublin",
    "latitude": 53,
    "longitude": -8,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "English",
      "Irish"
    ],
    "continents": [],
    "alpha2": "IE"
  },
  "IMN": {
    "id": "IMN",
    "name": "Isle of Man",
    "numericCode": "833",
    "officialName": "Isle of Man",
    "flag": "🇮🇲",
    "flagUrl": "",
    "region": "Northern Europe",
    "continent": "Europe",
    "capital": "Douglas",
    "latitude": 54.25,
    "longitude": -4.5,
    "currencies": [
      {
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      },
      {
        "code": "IMP",
        "name": "Manx pound",
        "symbol": "£"
      }
    ],
    "languages": [
      "English",
      "Manx"
    ],
    "continents": [],
    "alpha2": "IM"
  },
  "ISR": {
    "id": "ISR",
    "name": "Israel",
    "numericCode": "376",
    "officialName": "State of Israel",
    "flag": "🇮🇱",
    "flagUrl": "",
    "region": "Western Asia",
    "continent": "Asia",
    "capital": "Jerusalem",
    "latitude": 31.47,
    "longitude": 35.13,
    "currencies": [
      {
        "code": "ILS",
        "name": "Israeli new shekel",
        "symbol": "₪"
      }
    ],
    "languages": [
      "Arabic",
      "Hebrew"
    ],
    "continents": [],
    "alpha2": "IL"
  },
  "ITA": {
    "id": "ITA",
    "name": "Italy",
    "numericCode": "380",
    "officialName": "Italian Republic",
    "flag": "🇮🇹",
    "flagUrl": "",
    "region": "Southern Europe",
    "continent": "Europe",
    "capital": "Rome",
    "latitude": 42.83333333,
    "longitude": 12.83333333,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Italian"
    ],
    "continents": [],
    "alpha2": "IT"
  },
  "CIV": {
    "id": "CIV",
    "name": "Ivory Coast",
    "numericCode": "384",
    "officialName": "Republic of Côte d'Ivoire",
    "flag": "🇨🇮",
    "flagUrl": "",
    "region": "Western Africa",
    "continent": "Africa",
    "capital": "Yamoussoukro",
    "latitude": 8,
    "longitude": -5,
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "CI"
  },
  "JAM": {
    "id": "JAM",
    "name": "Jamaica",
    "numericCode": "388",
    "officialName": "Jamaica",
    "flag": "🇯🇲",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Kingston",
    "latitude": 18.25,
    "longitude": -77.5,
    "currencies": [
      {
        "code": "JMD",
        "name": "Jamaican dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English",
      "Jamaican Patois"
    ],
    "continents": [],
    "alpha2": "JM"
  },
  "JPN": {
    "id": "JPN",
    "name": "Japan",
    "numericCode": "392",
    "officialName": "Japan",
    "flag": "🇯🇵",
    "flagUrl": "",
    "region": "Eastern Asia",
    "continent": "Asia",
    "capital": "Tokyo",
    "latitude": 36,
    "longitude": 138,
    "currencies": [
      {
        "code": "JPY",
        "name": "Japanese yen",
        "symbol": "¥"
      }
    ],
    "languages": [
      "Japanese"
    ],
    "continents": [],
    "alpha2": "JP"
  },
  "JEY": {
    "id": "JEY",
    "name": "Jersey",
    "numericCode": "832",
    "officialName": "Bailiwick of Jersey",
    "flag": "🇯🇪",
    "flagUrl": "",
    "region": "Northern Europe",
    "continent": "Europe",
    "capital": "Saint Helier",
    "latitude": 49.25,
    "longitude": -2.16666666,
    "currencies": [
      {
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      },
      {
        "code": "JEP",
        "name": "Jersey pound",
        "symbol": "£"
      }
    ],
    "languages": [
      "English",
      "French",
      "Jèrriais"
    ],
    "continents": [],
    "alpha2": "JE"
  },
  "JOR": {
    "id": "JOR",
    "name": "Jordan",
    "numericCode": "400",
    "officialName": "Hashemite Kingdom of Jordan",
    "flag": "🇯🇴",
    "flagUrl": "",
    "region": "Western Asia",
    "continent": "Asia",
    "capital": "Amman",
    "latitude": 31,
    "longitude": 36,
    "currencies": [
      {
        "code": "JOD",
        "name": "Jordanian dinar",
        "symbol": "د.ا"
      }
    ],
    "languages": [
      "Arabic"
    ],
    "continents": [],
    "alpha2": "JO"
  },
  "KAZ": {
    "id": "KAZ",
    "name": "Kazakhstan",
    "numericCode": "398",
    "officialName": "Republic of Kazakhstan",
    "flag": "🇰🇿",
    "flagUrl": "",
    "region": "Central Asia",
    "continent": "Asia",
    "capital": "Astana",
    "latitude": 48,
    "longitude": 68,
    "currencies": [
      {
        "code": "KZT",
        "name": "Kazakhstani tenge",
        "symbol": "₸"
      }
    ],
    "languages": [
      "Kazakh",
      "Russian"
    ],
    "continents": [],
    "alpha2": "KZ"
  },
  "KEN": {
    "id": "KEN",
    "name": "Kenya",
    "numericCode": "404",
    "officialName": "Republic of Kenya",
    "flag": "🇰🇪",
    "flagUrl": "",
    "region": "Eastern Africa",
    "continent": "Africa",
    "capital": "Nairobi",
    "latitude": 1,
    "longitude": 38,
    "currencies": [
      {
        "code": "KES",
        "name": "Kenyan shilling",
        "symbol": "Sh"
      }
    ],
    "languages": [
      "English",
      "Swahili"
    ],
    "continents": [],
    "alpha2": "KE"
  },
  "KIR": {
    "id": "KIR",
    "name": "Kiribati",
    "numericCode": "296",
    "officialName": "Independent and Sovereign Republic of Kiribati",
    "flag": "🇰🇮",
    "flagUrl": "",
    "region": "Micronesia",
    "continent": "Oceania",
    "capital": "South Tarawa",
    "latitude": 1.41666666,
    "longitude": 173,
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      },
      {
        "code": "KID",
        "name": "Kiribati dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English",
      "Gilbertese"
    ],
    "continents": [],
    "alpha2": "KI"
  },
  "UNK": {
    "id": "UNK",
    "name": "Kosovo",
    "numericCode": "",
    "officialName": "Republic of Kosovo",
    "flag": "🇽🇰",
    "flagUrl": "",
    "region": "Southeast Europe",
    "continent": "Europe",
    "capital": "Pristina",
    "latitude": 42.666667,
    "longitude": 21.166667,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Albanian",
      "Serbian"
    ],
    "continents": [],
    "alpha2": "XK"
  },
  "KWT": {
    "id": "KWT",
    "name": "Kuwait",
    "numericCode": "414",
    "officialName": "State of Kuwait",
    "flag": "🇰🇼",
    "flagUrl": "",
    "region": "Western Asia",
    "continent": "Asia",
    "capital": "Kuwait City",
    "latitude": 29.5,
    "longitude": 45.75,
    "currencies": [
      {
        "code": "KWD",
        "name": "Kuwaiti dinar",
        "symbol": "د.ك"
      }
    ],
    "languages": [
      "Arabic"
    ],
    "continents": [],
    "alpha2": "KW"
  },
  "KGZ": {
    "id": "KGZ",
    "name": "Kyrgyzstan",
    "numericCode": "417",
    "officialName": "Kyrgyz Republic",
    "flag": "🇰🇬",
    "flagUrl": "",
    "region": "Central Asia",
    "continent": "Asia",
    "capital": "Bishkek",
    "latitude": 41,
    "longitude": 75,
    "currencies": [
      {
        "code": "KGS",
        "name": "Kyrgyzstani som",
        "symbol": "с"
      }
    ],
    "languages": [
      "Kyrgyz",
      "Russian"
    ],
    "continents": [],
    "alpha2": "KG"
  },
  "LAO": {
    "id": "LAO",
    "name": "Laos",
    "numericCode": "418",
    "officialName": "Lao People's Democratic Republic",
    "flag": "🇱🇦",
    "flagUrl": "",
    "region": "South-Eastern Asia",
    "continent": "Asia",
    "capital": "Vientiane",
    "latitude": 18,
    "longitude": 105,
    "currencies": [
      {
        "code": "LAK",
        "name": "Lao kip",
        "symbol": "₭"
      }
    ],
    "languages": [
      "Lao"
    ],
    "continents": [],
    "alpha2": "LA"
  },
  "LVA": {
    "id": "LVA",
    "name": "Latvia",
    "numericCode": "428",
    "officialName": "Republic of Latvia",
    "flag": "🇱🇻",
    "flagUrl": "",
    "region": "Northern Europe",
    "continent": "Europe",
    "capital": "Riga",
    "latitude": 57,
    "longitude": 25,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Latvian"
    ],
    "continents": [],
    "alpha2": "LV"
  },
  "LBN": {
    "id": "LBN",
    "name": "Lebanon",
    "numericCode": "422",
    "officialName": "Lebanese Republic",
    "flag": "🇱🇧",
    "flagUrl": "",
    "region": "Western Asia",
    "continent": "Asia",
    "capital": "Beirut",
    "latitude": 33.83333333,
    "longitude": 35.83333333,
    "currencies": [
      {
        "code": "LBP",
        "name": "Lebanese pound",
        "symbol": "ل.ل"
      }
    ],
    "languages": [
      "Arabic",
      "French"
    ],
    "continents": [],
    "alpha2": "LB"
  },
  "LSO": {
    "id": "LSO",
    "name": "Lesotho",
    "numericCode": "426",
    "officialName": "Kingdom of Lesotho",
    "flag": "🇱🇸",
    "flagUrl": "",
    "region": "Southern Africa",
    "continent": "Africa",
    "capital": "Maseru",
    "latitude": -29.5,
    "longitude": 28.5,
    "currencies": [
      {
        "code": "LSL",
        "name": "Lesotho loti",
        "symbol": "L"
      },
      {
        "code": "ZAR",
        "name": "South African rand",
        "symbol": "R"
      }
    ],
    "languages": [
      "English",
      "Sotho"
    ],
    "continents": [],
    "alpha2": "LS"
  },
  "LBR": {
    "id": "LBR",
    "name": "Liberia",
    "numericCode": "430",
    "officialName": "Republic of Liberia",
    "flag": "🇱🇷",
    "flagUrl": "",
    "region": "Western Africa",
    "continent": "Africa",
    "capital": "Monrovia",
    "latitude": 6.5,
    "longitude": -9.5,
    "currencies": [
      {
        "code": "LRD",
        "name": "Liberian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "LR"
  },
  "LBY": {
    "id": "LBY",
    "name": "Libya",
    "numericCode": "434",
    "officialName": "State of Libya",
    "flag": "🇱🇾",
    "flagUrl": "",
    "region": "Northern Africa",
    "continent": "Africa",
    "capital": "Tripoli",
    "latitude": 25,
    "longitude": 17,
    "currencies": [
      {
        "code": "LYD",
        "name": "Libyan dinar",
        "symbol": "ل.د"
      }
    ],
    "languages": [
      "Arabic"
    ],
    "continents": [],
    "alpha2": "LY"
  },
  "LIE": {
    "id": "LIE",
    "name": "Liechtenstein",
    "numericCode": "438",
    "officialName": "Principality of Liechtenstein",
    "flag": "🇱🇮",
    "flagUrl": "",
    "region": "Western Europe",
    "continent": "Europe",
    "capital": "Vaduz",
    "latitude": 47.26666666,
    "longitude": 9.53333333,
    "currencies": [
      {
        "code": "CHF",
        "name": "Swiss franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      "German"
    ],
    "continents": [],
    "alpha2": "LI"
  },
  "LTU": {
    "id": "LTU",
    "name": "Lithuania",
    "numericCode": "440",
    "officialName": "Republic of Lithuania",
    "flag": "🇱🇹",
    "flagUrl": "",
    "region": "Northern Europe",
    "continent": "Europe",
    "capital": "Vilnius",
    "latitude": 56,
    "longitude": 24,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Lithuanian"
    ],
    "continents": [],
    "alpha2": "LT"
  },
  "LUX": {
    "id": "LUX",
    "name": "Luxembourg",
    "numericCode": "442",
    "officialName": "Grand Duchy of Luxembourg",
    "flag": "🇱🇺",
    "flagUrl": "",
    "region": "Western Europe",
    "continent": "Europe",
    "capital": "Luxembourg",
    "latitude": 49.75,
    "longitude": 6.16666666,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "German",
      "French",
      "Luxembourgish"
    ],
    "continents": [],
    "alpha2": "LU"
  },
  "MAC": {
    "id": "MAC",
    "name": "Macau",
    "numericCode": "446",
    "officialName": "Macao Special Administrative Region of the People's Republic of China",
    "flag": "🇲🇴",
    "flagUrl": "",
    "region": "Eastern Asia",
    "continent": "Asia",
    "capital": "",
    "latitude": 22.16666666,
    "longitude": 113.55,
    "currencies": [
      {
        "code": "MOP",
        "name": "Macanese pataca",
        "symbol": "P"
      }
    ],
    "languages": [
      "Portuguese",
      "Chinese"
    ],
    "continents": [],
    "alpha2": "MO"
  },
  "MDG": {
    "id": "MDG",
    "name": "Madagascar",
    "numericCode": "450",
    "officialName": "Republic of Madagascar",
    "flag": "🇲🇬",
    "flagUrl": "",
    "region": "Eastern Africa",
    "continent": "Africa",
    "capital": "Antananarivo",
    "latitude": -20,
    "longitude": 47,
    "currencies": [
      {
        "code": "MGA",
        "name": "Malagasy ariary",
        "symbol": "Ar"
      }
    ],
    "languages": [
      "French",
      "Malagasy"
    ],
    "continents": [],
    "alpha2": "MG"
  },
  "MWI": {
    "id": "MWI",
    "name": "Malawi",
    "numericCode": "454",
    "officialName": "Republic of Malawi",
    "flag": "🇲🇼",
    "flagUrl": "",
    "region": "Eastern Africa",
    "continent": "Africa",
    "capital": "Lilongwe",
    "latitude": -13.5,
    "longitude": 34,
    "currencies": [
      {
        "code": "MWK",
        "name": "Malawian kwacha",
        "symbol": "MK"
      }
    ],
    "languages": [
      "English",
      "Chewa"
    ],
    "continents": [],
    "alpha2": "MW"
  },
  "MYS": {
    "id": "MYS",
    "name": "Malaysia",
    "numericCode": "458",
    "officialName": "Malaysia",
    "flag": "🇲🇾",
    "flagUrl": "",
    "region": "South-Eastern Asia",
    "continent": "Asia",
    "capital": "Kuala Lumpur",
    "latitude": 2.5,
    "longitude": 112.5,
    "currencies": [
      {
        "code": "MYR",
        "name": "Malaysian ringgit",
        "symbol": "RM"
      }
    ],
    "languages": [
      "English",
      "Malay"
    ],
    "continents": [],
    "alpha2": "MY"
  },
  "MDV": {
    "id": "MDV",
    "name": "Maldives",
    "numericCode": "462",
    "officialName": "Republic of the Maldives",
    "flag": "🇲🇻",
    "flagUrl": "",
    "region": "Southern Asia",
    "continent": "Asia",
    "capital": "Malé",
    "latitude": 3.25,
    "longitude": 73,
    "currencies": [
      {
        "code": "MVR",
        "name": "Maldivian rufiyaa",
        "symbol": ".ރ"
      }
    ],
    "languages": [
      "Maldivian"
    ],
    "continents": [],
    "alpha2": "MV"
  },
  "MLI": {
    "id": "MLI",
    "name": "Mali",
    "numericCode": "466",
    "officialName": "Republic of Mali",
    "flag": "🇲🇱",
    "flagUrl": "",
    "region": "Western Africa",
    "continent": "Africa",
    "capital": "Bamako",
    "latitude": 17,
    "longitude": -4,
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "ML"
  },
  "MLT": {
    "id": "MLT",
    "name": "Malta",
    "numericCode": "470",
    "officialName": "Republic of Malta",
    "flag": "🇲🇹",
    "flagUrl": "",
    "region": "Southern Europe",
    "continent": "Europe",
    "capital": "Valletta",
    "latitude": 35.83333333,
    "longitude": 14.58333333,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "English",
      "Maltese"
    ],
    "continents": [],
    "alpha2": "MT"
  },
  "MHL": {
    "id": "MHL",
    "name": "Marshall Islands",
    "numericCode": "584",
    "officialName": "Republic of the Marshall Islands",
    "flag": "🇲🇭",
    "flagUrl": "",
    "region": "Micronesia",
    "continent": "Oceania",
    "capital": "Majuro",
    "latitude": 9,
    "longitude": 168,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English",
      "Marshallese"
    ],
    "continents": [],
    "alpha2": "MH"
  },
  "MTQ": {
    "id": "MTQ",
    "name": "Martinique",
    "numericCode": "474",
    "officialName": "Martinique",
    "flag": "🇲🇶",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Fort-de-France",
    "latitude": 14.666667,
    "longitude": -61,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "MQ"
  },
  "MRT": {
    "id": "MRT",
    "name": "Mauritania",
    "numericCode": "478",
    "officialName": "Islamic Republic of Mauritania",
    "flag": "🇲🇷",
    "flagUrl": "",
    "region": "Western Africa",
    "continent": "Africa",
    "capital": "Nouakchott",
    "latitude": 20,
    "longitude": -12,
    "currencies": [
      {
        "code": "MRU",
        "name": "Mauritanian ouguiya",
        "symbol": "UM"
      }
    ],
    "languages": [
      "Arabic"
    ],
    "continents": [],
    "alpha2": "MR"
  },
  "MUS": {
    "id": "MUS",
    "name": "Mauritius",
    "numericCode": "480",
    "officialName": "Republic of Mauritius",
    "flag": "🇲🇺",
    "flagUrl": "",
    "region": "Eastern Africa",
    "continent": "Africa",
    "capital": "Port Louis",
    "latitude": -20.28333333,
    "longitude": 57.55,
    "currencies": [
      {
        "code": "MUR",
        "name": "Mauritian rupee",
        "symbol": "₨"
      }
    ],
    "languages": [
      "English",
      "French",
      "Mauritian Creole"
    ],
    "continents": [],
    "alpha2": "MU"
  },
  "MYT": {
    "id": "MYT",
    "name": "Mayotte",
    "numericCode": "175",
    "officialName": "Department of Mayotte",
    "flag": "🇾🇹",
    "flagUrl": "",
    "region": "Eastern Africa",
    "continent": "Africa",
    "capital": "Mamoudzou",
    "latitude": -12.83333333,
    "longitude": 45.16666666,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "YT"
  },
  "MEX": {
    "id": "MEX",
    "name": "Mexico",
    "numericCode": "484",
    "officialName": "United Mexican States",
    "flag": "🇲🇽",
    "flagUrl": "",
    "region": "North America",
    "continent": "Americas",
    "capital": "Mexico City",
    "latitude": 23,
    "longitude": -102,
    "currencies": [
      {
        "code": "MXN",
        "name": "Mexican peso",
        "symbol": "$"
      }
    ],
    "languages": [
      "Spanish"
    ],
    "continents": [],
    "alpha2": "MX"
  },
  "FSM": {
    "id": "FSM",
    "name": "Micronesia",
    "numericCode": "583",
    "officialName": "Federated States of Micronesia",
    "flag": "🇫🇲",
    "flagUrl": "",
    "region": "Micronesia",
    "continent": "Oceania",
    "capital": "Palikir",
    "latitude": 6.91666666,
    "longitude": 158.25,
    "currencies": [],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "FM"
  },
  "MDA": {
    "id": "MDA",
    "name": "Moldova",
    "numericCode": "498",
    "officialName": "Republic of Moldova",
    "flag": "🇲🇩",
    "flagUrl": "",
    "region": "Eastern Europe",
    "continent": "Europe",
    "capital": "Chișinău",
    "latitude": 47,
    "longitude": 29,
    "currencies": [
      {
        "code": "MDL",
        "name": "Moldovan leu",
        "symbol": "L"
      }
    ],
    "languages": [
      "Moldavian"
    ],
    "continents": [],
    "alpha2": "MD"
  },
  "MCO": {
    "id": "MCO",
    "name": "Monaco",
    "numericCode": "492",
    "officialName": "Principality of Monaco",
    "flag": "🇲🇨",
    "flagUrl": "",
    "region": "Western Europe",
    "continent": "Europe",
    "capital": "Monaco",
    "latitude": 43.73333333,
    "longitude": 7.4,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "MC"
  },
  "MNG": {
    "id": "MNG",
    "name": "Mongolia",
    "numericCode": "496",
    "officialName": "Mongolia",
    "flag": "🇲🇳",
    "flagUrl": "",
    "region": "Eastern Asia",
    "continent": "Asia",
    "capital": "Ulan Bator",
    "latitude": 46,
    "longitude": 105,
    "currencies": [
      {
        "code": "MNT",
        "name": "Mongolian tögrög",
        "symbol": "₮"
      }
    ],
    "languages": [
      "Mongolian"
    ],
    "continents": [],
    "alpha2": "MN"
  },
  "MNE": {
    "id": "MNE",
    "name": "Montenegro",
    "numericCode": "499",
    "officialName": "Montenegro",
    "flag": "🇲🇪",
    "flagUrl": "",
    "region": "Southeast Europe",
    "continent": "Europe",
    "capital": "Podgorica",
    "latitude": 42.5,
    "longitude": 19.3,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Montenegrin"
    ],
    "continents": [],
    "alpha2": "ME"
  },
  "MSR": {
    "id": "MSR",
    "name": "Montserrat",
    "numericCode": "500",
    "officialName": "Montserrat",
    "flag": "🇲🇸",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Plymouth",
    "latitude": 16.75,
    "longitude": -62.2,
    "currencies": [
      {
        "code": "XCD",
        "name": "Eastern Caribbean dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "MS"
  },
  "MAR": {
    "id": "MAR",
    "name": "Morocco",
    "numericCode": "504",
    "officialName": "Kingdom of Morocco",
    "flag": "🇲🇦",
    "flagUrl": "",
    "region": "Northern Africa",
    "continent": "Africa",
    "capital": "Rabat",
    "latitude": 32,
    "longitude": -5,
    "currencies": [
      {
        "code": "MAD",
        "name": "Moroccan dirham",
        "symbol": "د.م."
      }
    ],
    "languages": [
      "Arabic",
      "Berber"
    ],
    "continents": [],
    "alpha2": "MA"
  },
  "MOZ": {
    "id": "MOZ",
    "name": "Mozambique",
    "numericCode": "508",
    "officialName": "Republic of Mozambique",
    "flag": "🇲🇿",
    "flagUrl": "",
    "region": "Eastern Africa",
    "continent": "Africa",
    "capital": "Maputo",
    "latitude": -18.25,
    "longitude": 35,
    "currencies": [
      {
        "code": "MZN",
        "name": "Mozambican metical",
        "symbol": "MT"
      }
    ],
    "languages": [
      "Portuguese"
    ],
    "continents": [],
    "alpha2": "MZ"
  },
  "MMR": {
    "id": "MMR",
    "name": "Myanmar",
    "numericCode": "104",
    "officialName": "Republic of the Union of Myanmar",
    "flag": "🇲🇲",
    "flagUrl": "",
    "region": "South-Eastern Asia",
    "continent": "Asia",
    "capital": "Naypyidaw",
    "latitude": 22,
    "longitude": 98,
    "currencies": [
      {
        "code": "MMK",
        "name": "Burmese kyat",
        "symbol": "Ks"
      }
    ],
    "languages": [
      "Burmese"
    ],
    "continents": [],
    "alpha2": "MM"
  },
  "NAM": {
    "id": "NAM",
    "name": "Namibia",
    "numericCode": "516",
    "officialName": "Republic of Namibia",
    "flag": "🇳🇦",
    "flagUrl": "",
    "region": "Southern Africa",
    "continent": "Africa",
    "capital": "Windhoek",
    "latitude": -22,
    "longitude": 17,
    "currencies": [
      {
        "code": "NAD",
        "name": "Namibian dollar",
        "symbol": "$"
      },
      {
        "code": "ZAR",
        "name": "South African rand",
        "symbol": "R"
      }
    ],
    "languages": [
      "Afrikaans",
      "German",
      "English",
      "Herero",
      "Khoekhoe",
      "Kwangali",
      "Lozi",
      "Ndonga",
      "Tswana"
    ],
    "continents": [],
    "alpha2": "NA"
  },
  "NRU": {
    "id": "NRU",
    "name": "Nauru",
    "numericCode": "520",
    "officialName": "Republic of Nauru",
    "flag": "🇳🇷",
    "flagUrl": "",
    "region": "Micronesia",
    "continent": "Oceania",
    "capital": "Yaren",
    "latitude": -0.53333333,
    "longitude": 166.91666666,
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English",
      "Nauru"
    ],
    "continents": [],
    "alpha2": "NR"
  },
  "NPL": {
    "id": "NPL",
    "name": "Nepal",
    "numericCode": "524",
    "officialName": "Federal Democratic Republic of Nepal",
    "flag": "🇳🇵",
    "flagUrl": "",
    "region": "Southern Asia",
    "continent": "Asia",
    "capital": "Kathmandu",
    "latitude": 28,
    "longitude": 84,
    "currencies": [
      {
        "code": "NPR",
        "name": "Nepalese rupee",
        "symbol": "₨"
      }
    ],
    "languages": [
      "Nepali"
    ],
    "continents": [],
    "alpha2": "NP"
  },
  "NLD": {
    "id": "NLD",
    "name": "Netherlands",
    "numericCode": "528",
    "officialName": "Kingdom of the Netherlands",
    "flag": "🇳🇱",
    "flagUrl": "",
    "region": "Western Europe",
    "continent": "Europe",
    "capital": "Amsterdam",
    "latitude": 52.5,
    "longitude": 5.75,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Dutch"
    ],
    "continents": [],
    "alpha2": "NL"
  },
  "NCL": {
    "id": "NCL",
    "name": "New Caledonia",
    "numericCode": "540",
    "officialName": "New Caledonia",
    "flag": "🇳🇨",
    "flagUrl": "",
    "region": "Melanesia",
    "continent": "Oceania",
    "capital": "Nouméa",
    "latitude": -21.5,
    "longitude": 165.5,
    "currencies": [
      {
        "code": "XPF",
        "name": "CFP franc",
        "symbol": "₣"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "NC"
  },
  "NZL": {
    "id": "NZL",
    "name": "New Zealand",
    "numericCode": "554",
    "officialName": "New Zealand",
    "flag": "🇳🇿",
    "flagUrl": "",
    "region": "Australia and New Zealand",
    "continent": "Oceania",
    "capital": "Wellington",
    "latitude": -41,
    "longitude": 174,
    "currencies": [
      {
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English",
      "Māori",
      "New Zealand Sign Language"
    ],
    "continents": [],
    "alpha2": "NZ"
  },
  "NIC": {
    "id": "NIC",
    "name": "Nicaragua",
    "numericCode": "558",
    "officialName": "Republic of Nicaragua",
    "flag": "🇳🇮",
    "flagUrl": "",
    "region": "Central America",
    "continent": "Americas",
    "capital": "Managua",
    "latitude": 13,
    "longitude": -85,
    "currencies": [
      {
        "code": "NIO",
        "name": "Nicaraguan córdoba",
        "symbol": "C$"
      }
    ],
    "languages": [
      "Spanish"
    ],
    "continents": [],
    "alpha2": "NI"
  },
  "NER": {
    "id": "NER",
    "name": "Niger",
    "numericCode": "562",
    "officialName": "Republic of Niger",
    "flag": "🇳🇪",
    "flagUrl": "",
    "region": "Western Africa",
    "continent": "Africa",
    "capital": "Niamey",
    "latitude": 16,
    "longitude": 8,
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "NE"
  },
  "NGA": {
    "id": "NGA",
    "name": "Nigeria",
    "numericCode": "566",
    "officialName": "Federal Republic of Nigeria",
    "flag": "🇳🇬",
    "flagUrl": "",
    "region": "Western Africa",
    "continent": "Africa",
    "capital": "Abuja",
    "latitude": 10,
    "longitude": 8,
    "currencies": [
      {
        "code": "NGN",
        "name": "Nigerian naira",
        "symbol": "₦"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "NG"
  },
  "NIU": {
    "id": "NIU",
    "name": "Niue",
    "numericCode": "570",
    "officialName": "Niue",
    "flag": "🇳🇺",
    "flagUrl": "",
    "region": "Polynesia",
    "continent": "Oceania",
    "capital": "Alofi",
    "latitude": -19.03333333,
    "longitude": -169.86666666,
    "currencies": [
      {
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English",
      "Niuean"
    ],
    "continents": [],
    "alpha2": "NU"
  },
  "NFK": {
    "id": "NFK",
    "name": "Norfolk Island",
    "numericCode": "574",
    "officialName": "Territory of Norfolk Island",
    "flag": "🇳🇫",
    "flagUrl": "",
    "region": "Australia and New Zealand",
    "continent": "Oceania",
    "capital": "Kingston",
    "latitude": -29.03333333,
    "longitude": 167.95,
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English",
      "Norfuk"
    ],
    "continents": [],
    "alpha2": "NF"
  },
  "PRK": {
    "id": "PRK",
    "name": "North Korea",
    "numericCode": "408",
    "officialName": "Democratic People's Republic of Korea",
    "flag": "🇰🇵",
    "flagUrl": "",
    "region": "Eastern Asia",
    "continent": "Asia",
    "capital": "Pyongyang",
    "latitude": 40,
    "longitude": 127,
    "currencies": [
      {
        "code": "KPW",
        "name": "North Korean won",
        "symbol": "₩"
      }
    ],
    "languages": [
      "Korean"
    ],
    "continents": [],
    "alpha2": "KP"
  },
  "MKD": {
    "id": "MKD",
    "name": "North Macedonia",
    "numericCode": "807",
    "officialName": "Republic of North Macedonia",
    "flag": "🇲🇰",
    "flagUrl": "",
    "region": "Southeast Europe",
    "continent": "Europe",
    "capital": "Skopje",
    "latitude": 41.83333333,
    "longitude": 22,
    "currencies": [
      {
        "code": "MKD",
        "name": "denar",
        "symbol": "den"
      }
    ],
    "languages": [
      "Macedonian"
    ],
    "continents": [],
    "alpha2": "MK"
  },
  "MNP": {
    "id": "MNP",
    "name": "Northern Mariana Islands",
    "numericCode": "580",
    "officialName": "Commonwealth of the Northern Mariana Islands",
    "flag": "🇲🇵",
    "flagUrl": "",
    "region": "Micronesia",
    "continent": "Oceania",
    "capital": "Saipan",
    "latitude": 15.2,
    "longitude": 145.75,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "Carolinian",
      "Chamorro",
      "English"
    ],
    "continents": [],
    "alpha2": "MP"
  },
  "NOR": {
    "id": "NOR",
    "name": "Norway",
    "numericCode": "578",
    "officialName": "Kingdom of Norway",
    "flag": "🇳🇴",
    "flagUrl": "",
    "region": "Northern Europe",
    "continent": "Europe",
    "capital": "Oslo",
    "latitude": 62,
    "longitude": 10,
    "currencies": [
      {
        "code": "NOK",
        "name": "Norwegian krone",
        "symbol": "kr"
      }
    ],
    "languages": [
      "Norwegian Nynorsk",
      "Norwegian Bokmål",
      "Sami"
    ],
    "continents": [],
    "alpha2": "NO"
  },
  "OMN": {
    "id": "OMN",
    "name": "Oman",
    "numericCode": "512",
    "officialName": "Sultanate of Oman",
    "flag": "🇴🇲",
    "flagUrl": "",
    "region": "Western Asia",
    "continent": "Asia",
    "capital": "Muscat",
    "latitude": 21,
    "longitude": 57,
    "currencies": [
      {
        "code": "OMR",
        "name": "Omani rial",
        "symbol": "ر.ع."
      }
    ],
    "languages": [
      "Arabic"
    ],
    "continents": [],
    "alpha2": "OM"
  },
  "PAK": {
    "id": "PAK",
    "name": "Pakistan",
    "numericCode": "586",
    "officialName": "Islamic Republic of Pakistan",
    "flag": "🇵🇰",
    "flagUrl": "",
    "region": "Southern Asia",
    "continent": "Asia",
    "capital": "Islamabad",
    "latitude": 30,
    "longitude": 70,
    "currencies": [
      {
        "code": "PKR",
        "name": "Pakistani rupee",
        "symbol": "₨"
      }
    ],
    "languages": [
      "English",
      "Urdu"
    ],
    "continents": [],
    "alpha2": "PK"
  },
  "PLW": {
    "id": "PLW",
    "name": "Palau",
    "numericCode": "585",
    "officialName": "Republic of Palau",
    "flag": "🇵🇼",
    "flagUrl": "",
    "region": "Micronesia",
    "continent": "Oceania",
    "capital": "Ngerulmud",
    "latitude": 7.5,
    "longitude": 134.5,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English",
      "Palauan"
    ],
    "continents": [],
    "alpha2": "PW"
  },
  "PSE": {
    "id": "PSE",
    "name": "Palestine",
    "numericCode": "275",
    "officialName": "State of Palestine",
    "flag": "🇵🇸",
    "flagUrl": "",
    "region": "Western Asia",
    "continent": "Asia",
    "capital": "Ramallah",
    "latitude": 31.9,
    "longitude": 35.2,
    "currencies": [
      {
        "code": "EGP",
        "name": "Egyptian pound",
        "symbol": "E£"
      },
      {
        "code": "ILS",
        "name": "Israeli new shekel",
        "symbol": "₪"
      },
      {
        "code": "JOD",
        "name": "Jordanian dinar",
        "symbol": "JD"
      }
    ],
    "languages": [
      "Arabic"
    ],
    "continents": [],
    "alpha2": "PS"
  },
  "PAN": {
    "id": "PAN",
    "name": "Panama",
    "numericCode": "591",
    "officialName": "Republic of Panama",
    "flag": "🇵🇦",
    "flagUrl": "",
    "region": "Central America",
    "continent": "Americas",
    "capital": "Panama City",
    "latitude": 9,
    "longitude": -80,
    "currencies": [
      {
        "code": "PAB",
        "name": "Panamanian balboa",
        "symbol": "B/."
      },
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "Spanish"
    ],
    "continents": [],
    "alpha2": "PA"
  },
  "PNG": {
    "id": "PNG",
    "name": "Papua New Guinea",
    "numericCode": "598",
    "officialName": "Independent State of Papua New Guinea",
    "flag": "🇵🇬",
    "flagUrl": "",
    "region": "Melanesia",
    "continent": "Oceania",
    "capital": "Port Moresby",
    "latitude": -6,
    "longitude": 147,
    "currencies": [
      {
        "code": "PGK",
        "name": "Papua New Guinean kina",
        "symbol": "K"
      }
    ],
    "languages": [
      "English",
      "Hiri Motu",
      "Tok Pisin"
    ],
    "continents": [],
    "alpha2": "PG"
  },
  "PRY": {
    "id": "PRY",
    "name": "Paraguay",
    "numericCode": "600",
    "officialName": "Republic of Paraguay",
    "flag": "🇵🇾",
    "flagUrl": "",
    "region": "South America",
    "continent": "Americas",
    "capital": "Asunción",
    "latitude": -23,
    "longitude": -58,
    "currencies": [
      {
        "code": "PYG",
        "name": "Paraguayan guaraní",
        "symbol": "₲"
      }
    ],
    "languages": [
      "Guaraní",
      "Spanish"
    ],
    "continents": [],
    "alpha2": "PY"
  },
  "PER": {
    "id": "PER",
    "name": "Peru",
    "numericCode": "604",
    "officialName": "Republic of Peru",
    "flag": "🇵🇪",
    "flagUrl": "",
    "region": "South America",
    "continent": "Americas",
    "capital": "Lima",
    "latitude": -10,
    "longitude": -76,
    "currencies": [
      {
        "code": "PEN",
        "name": "Peruvian sol",
        "symbol": "S/."
      }
    ],
    "languages": [
      "Aymara",
      "Quechua",
      "Spanish"
    ],
    "continents": [],
    "alpha2": "PE"
  },
  "PHL": {
    "id": "PHL",
    "name": "Philippines",
    "numericCode": "608",
    "officialName": "Republic of the Philippines",
    "flag": "🇵🇭",
    "flagUrl": "",
    "region": "South-Eastern Asia",
    "continent": "Asia",
    "capital": "Manila",
    "latitude": 13,
    "longitude": 122,
    "currencies": [
      {
        "code": "PHP",
        "name": "Philippine peso",
        "symbol": "₱"
      }
    ],
    "languages": [
      "English",
      "Filipino"
    ],
    "continents": [],
    "alpha2": "PH"
  },
  "PCN": {
    "id": "PCN",
    "name": "Pitcairn Islands",
    "numericCode": "612",
    "officialName": "Pitcairn Group of Islands",
    "flag": "🇵🇳",
    "flagUrl": "",
    "region": "Polynesia",
    "continent": "Oceania",
    "capital": "Adamstown",
    "latitude": -25.06666666,
    "longitude": -130.1,
    "currencies": [
      {
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "PN"
  },
  "POL": {
    "id": "POL",
    "name": "Poland",
    "numericCode": "616",
    "officialName": "Republic of Poland",
    "flag": "🇵🇱",
    "flagUrl": "",
    "region": "Central Europe",
    "continent": "Europe",
    "capital": "Warsaw",
    "latitude": 52,
    "longitude": 20,
    "currencies": [
      {
        "code": "PLN",
        "name": "Polish złoty",
        "symbol": "zł"
      }
    ],
    "languages": [
      "Polish"
    ],
    "continents": [],
    "alpha2": "PL"
  },
  "PRT": {
    "id": "PRT",
    "name": "Portugal",
    "numericCode": "620",
    "officialName": "Portuguese Republic",
    "flag": "🇵🇹",
    "flagUrl": "",
    "region": "Southern Europe",
    "continent": "Europe",
    "capital": "Lisbon",
    "latitude": 39.5,
    "longitude": -8,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Portuguese"
    ],
    "continents": [],
    "alpha2": "PT"
  },
  "PRI": {
    "id": "PRI",
    "name": "Puerto Rico",
    "numericCode": "630",
    "officialName": "Commonwealth of Puerto Rico",
    "flag": "🇵🇷",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "San Juan",
    "latitude": 18.25,
    "longitude": -66.5,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English",
      "Spanish"
    ],
    "continents": [],
    "alpha2": "PR"
  },
  "QAT": {
    "id": "QAT",
    "name": "Qatar",
    "numericCode": "634",
    "officialName": "State of Qatar",
    "flag": "🇶🇦",
    "flagUrl": "",
    "region": "Western Asia",
    "continent": "Asia",
    "capital": "Doha",
    "latitude": 25.5,
    "longitude": 51.25,
    "currencies": [
      {
        "code": "QAR",
        "name": "Qatari riyal",
        "symbol": "ر.ق"
      }
    ],
    "languages": [
      "Arabic"
    ],
    "continents": [],
    "alpha2": "QA"
  },
  "REU": {
    "id": "REU",
    "name": "Réunion",
    "numericCode": "638",
    "officialName": "Réunion Island",
    "flag": "🇷🇪",
    "flagUrl": "",
    "region": "Eastern Africa",
    "continent": "Africa",
    "capital": "Saint-Denis",
    "latitude": -21.15,
    "longitude": 55.5,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "RE"
  },
  "ROU": {
    "id": "ROU",
    "name": "Romania",
    "numericCode": "642",
    "officialName": "Romania",
    "flag": "🇷🇴",
    "flagUrl": "",
    "region": "Southeast Europe",
    "continent": "Europe",
    "capital": "Bucharest",
    "latitude": 46,
    "longitude": 25,
    "currencies": [
      {
        "code": "RON",
        "name": "Romanian leu",
        "symbol": "lei"
      }
    ],
    "languages": [
      "Romanian"
    ],
    "continents": [],
    "alpha2": "RO"
  },
  "RUS": {
    "id": "RUS",
    "name": "Russia",
    "numericCode": "643",
    "officialName": "Russian Federation",
    "flag": "🇷🇺",
    "flagUrl": "",
    "region": "Eastern Europe",
    "continent": "Europe",
    "capital": "Moscow",
    "latitude": 60,
    "longitude": 100,
    "currencies": [
      {
        "code": "RUB",
        "name": "Russian ruble",
        "symbol": "₽"
      }
    ],
    "languages": [
      "Russian"
    ],
    "continents": [],
    "alpha2": "RU"
  },
  "RWA": {
    "id": "RWA",
    "name": "Rwanda",
    "numericCode": "646",
    "officialName": "Republic of Rwanda",
    "flag": "🇷🇼",
    "flagUrl": "",
    "region": "Eastern Africa",
    "continent": "Africa",
    "capital": "Kigali",
    "latitude": -2,
    "longitude": 30,
    "currencies": [
      {
        "code": "RWF",
        "name": "Rwandan franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      "English",
      "French",
      "Kinyarwanda"
    ],
    "continents": [],
    "alpha2": "RW"
  },
  "BLM": {
    "id": "BLM",
    "name": "Saint Barthélemy",
    "numericCode": "652",
    "officialName": "Collectivity of Saint Barthélemy",
    "flag": "🇧🇱",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Gustavia",
    "latitude": 18.5,
    "longitude": -63.41666666,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "BL"
  },
  "SHN": {
    "id": "SHN",
    "name": "Saint Helena, Ascension and Tristan da Cunha",
    "numericCode": "654",
    "officialName": "Saint Helena, Ascension and Tristan da Cunha",
    "flag": "🇸🇭",
    "flagUrl": "",
    "region": "Western Africa",
    "continent": "Africa",
    "capital": "Jamestown",
    "latitude": -15.95,
    "longitude": -5.72,
    "currencies": [
      {
        "code": "GBP",
        "name": "Pound sterling",
        "symbol": "£"
      },
      {
        "code": "SHP",
        "name": "Saint Helena pound",
        "symbol": "£"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "SH"
  },
  "KNA": {
    "id": "KNA",
    "name": "Saint Kitts and Nevis",
    "numericCode": "659",
    "officialName": "Federation of Saint Christopher and Nevis",
    "flag": "🇰🇳",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Basseterre",
    "latitude": 17.33333333,
    "longitude": -62.75,
    "currencies": [
      {
        "code": "XCD",
        "name": "Eastern Caribbean dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "KN"
  },
  "LCA": {
    "id": "LCA",
    "name": "Saint Lucia",
    "numericCode": "662",
    "officialName": "Saint Lucia",
    "flag": "🇱🇨",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Castries",
    "latitude": 13.88333333,
    "longitude": -60.96666666,
    "currencies": [
      {
        "code": "XCD",
        "name": "Eastern Caribbean dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "LC"
  },
  "MAF": {
    "id": "MAF",
    "name": "Saint Martin",
    "numericCode": "663",
    "officialName": "Saint Martin",
    "flag": "🇲🇫",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Marigot",
    "latitude": 18.08333333,
    "longitude": -63.95,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "MF"
  },
  "SPM": {
    "id": "SPM",
    "name": "Saint Pierre and Miquelon",
    "numericCode": "666",
    "officialName": "Saint Pierre and Miquelon",
    "flag": "🇵🇲",
    "flagUrl": "",
    "region": "North America",
    "continent": "Americas",
    "capital": "Saint-Pierre",
    "latitude": 46.83333333,
    "longitude": -56.33333333,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "PM"
  },
  "VCT": {
    "id": "VCT",
    "name": "Saint Vincent and the Grenadines",
    "numericCode": "670",
    "officialName": "Saint Vincent and the Grenadines",
    "flag": "🇻🇨",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Kingstown",
    "latitude": 13.25,
    "longitude": -61.2,
    "currencies": [
      {
        "code": "XCD",
        "name": "Eastern Caribbean dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "VC"
  },
  "WSM": {
    "id": "WSM",
    "name": "Samoa",
    "numericCode": "882",
    "officialName": "Independent State of Samoa",
    "flag": "🇼🇸",
    "flagUrl": "",
    "region": "Polynesia",
    "continent": "Oceania",
    "capital": "Apia",
    "latitude": -13.58333333,
    "longitude": -172.33333333,
    "currencies": [
      {
        "code": "WST",
        "name": "Samoan tālā",
        "symbol": "T"
      }
    ],
    "languages": [
      "English",
      "Samoan"
    ],
    "continents": [],
    "alpha2": "WS"
  },
  "SMR": {
    "id": "SMR",
    "name": "San Marino",
    "numericCode": "674",
    "officialName": "Most Serene Republic of San Marino",
    "flag": "🇸🇲",
    "flagUrl": "",
    "region": "Southern Europe",
    "continent": "Europe",
    "capital": "City of San Marino",
    "latitude": 43.76666666,
    "longitude": 12.41666666,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Italian"
    ],
    "continents": [],
    "alpha2": "SM"
  },
  "STP": {
    "id": "STP",
    "name": "São Tomé and Príncipe",
    "numericCode": "678",
    "officialName": "Democratic Republic of São Tomé and Príncipe",
    "flag": "🇸🇹",
    "flagUrl": "",
    "region": "Middle Africa",
    "continent": "Africa",
    "capital": "São Tomé",
    "latitude": 1,
    "longitude": 7,
    "currencies": [
      {
        "code": "STN",
        "name": "São Tomé and Príncipe dobra",
        "symbol": "Db"
      }
    ],
    "languages": [
      "Portuguese"
    ],
    "continents": [],
    "alpha2": "ST"
  },
  "SAU": {
    "id": "SAU",
    "name": "Saudi Arabia",
    "numericCode": "682",
    "officialName": "Kingdom of Saudi Arabia",
    "flag": "🇸🇦",
    "flagUrl": "",
    "region": "Western Asia",
    "continent": "Asia",
    "capital": "Riyadh",
    "latitude": 25,
    "longitude": 45,
    "currencies": [
      {
        "code": "SAR",
        "name": "Saudi riyal",
        "symbol": "ر.س"
      }
    ],
    "languages": [
      "Arabic"
    ],
    "continents": [],
    "alpha2": "SA"
  },
  "SEN": {
    "id": "SEN",
    "name": "Senegal",
    "numericCode": "686",
    "officialName": "Republic of Senegal",
    "flag": "🇸🇳",
    "flagUrl": "",
    "region": "Western Africa",
    "continent": "Africa",
    "capital": "Dakar",
    "latitude": 14,
    "longitude": -14,
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "SN"
  },
  "SRB": {
    "id": "SRB",
    "name": "Serbia",
    "numericCode": "688",
    "officialName": "Republic of Serbia",
    "flag": "🇷🇸",
    "flagUrl": "",
    "region": "Southeast Europe",
    "continent": "Europe",
    "capital": "Belgrade",
    "latitude": 44,
    "longitude": 21,
    "currencies": [
      {
        "code": "RSD",
        "name": "Serbian dinar",
        "symbol": "дин."
      }
    ],
    "languages": [
      "Serbian"
    ],
    "continents": [],
    "alpha2": "RS"
  },
  "SYC": {
    "id": "SYC",
    "name": "Seychelles",
    "numericCode": "690",
    "officialName": "Republic of Seychelles",
    "flag": "🇸🇨",
    "flagUrl": "",
    "region": "Eastern Africa",
    "continent": "Africa",
    "capital": "Victoria",
    "latitude": -4.58333333,
    "longitude": 55.66666666,
    "currencies": [
      {
        "code": "SCR",
        "name": "Seychellois rupee",
        "symbol": "₨"
      }
    ],
    "languages": [
      "Seychellois Creole",
      "English",
      "French"
    ],
    "continents": [],
    "alpha2": "SC"
  },
  "SLE": {
    "id": "SLE",
    "name": "Sierra Leone",
    "numericCode": "694",
    "officialName": "Republic of Sierra Leone",
    "flag": "🇸🇱",
    "flagUrl": "",
    "region": "Western Africa",
    "continent": "Africa",
    "capital": "Freetown",
    "latitude": 8.5,
    "longitude": -11.5,
    "currencies": [
      {
        "code": "SLE",
        "name": "Sierra Leonean leone",
        "symbol": "Le"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "SL"
  },
  "SGP": {
    "id": "SGP",
    "name": "Singapore",
    "numericCode": "702",
    "officialName": "Republic of Singapore",
    "flag": "🇸🇬",
    "flagUrl": "",
    "region": "South-Eastern Asia",
    "continent": "Asia",
    "capital": "Singapore",
    "latitude": 1.36666666,
    "longitude": 103.8,
    "currencies": [
      {
        "code": "SGD",
        "name": "Singapore dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English",
      "Malay",
      "Tamil",
      "Chinese"
    ],
    "continents": [],
    "alpha2": "SG"
  },
  "SXM": {
    "id": "SXM",
    "name": "Sint Maarten",
    "numericCode": "534",
    "officialName": "Sint Maarten",
    "flag": "🇸🇽",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Philipsburg",
    "latitude": 18.033333,
    "longitude": -63.05,
    "currencies": [
      {
        "code": "XCG",
        "name": "Caribbean guilder",
        "symbol": "Cg"
      }
    ],
    "languages": [
      "English",
      "French",
      "Dutch"
    ],
    "continents": [],
    "alpha2": "SX"
  },
  "SVK": {
    "id": "SVK",
    "name": "Slovakia",
    "numericCode": "703",
    "officialName": "Slovak Republic",
    "flag": "🇸🇰",
    "flagUrl": "",
    "region": "Central Europe",
    "continent": "Europe",
    "capital": "Bratislava",
    "latitude": 48.66666666,
    "longitude": 19.5,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Slovak"
    ],
    "continents": [],
    "alpha2": "SK"
  },
  "SVN": {
    "id": "SVN",
    "name": "Slovenia",
    "numericCode": "705",
    "officialName": "Republic of Slovenia",
    "flag": "🇸🇮",
    "flagUrl": "",
    "region": "Central Europe",
    "continent": "Europe",
    "capital": "Ljubljana",
    "latitude": 46.11666666,
    "longitude": 14.81666666,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Slovene"
    ],
    "continents": [],
    "alpha2": "SI"
  },
  "SLB": {
    "id": "SLB",
    "name": "Solomon Islands",
    "numericCode": "090",
    "officialName": "Solomon Islands",
    "flag": "🇸🇧",
    "flagUrl": "",
    "region": "Melanesia",
    "continent": "Oceania",
    "capital": "Honiara",
    "latitude": -8,
    "longitude": 159,
    "currencies": [
      {
        "code": "SBD",
        "name": "Solomon Islands dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "SB"
  },
  "SOM": {
    "id": "SOM",
    "name": "Somalia",
    "numericCode": "706",
    "officialName": "Federal Republic of Somalia",
    "flag": "🇸🇴",
    "flagUrl": "",
    "region": "Eastern Africa",
    "continent": "Africa",
    "capital": "Mogadishu",
    "latitude": 10,
    "longitude": 49,
    "currencies": [
      {
        "code": "SOS",
        "name": "Somali shilling",
        "symbol": "Sh"
      }
    ],
    "languages": [
      "Arabic",
      "Somali"
    ],
    "continents": [],
    "alpha2": "SO"
  },
  "ZAF": {
    "id": "ZAF",
    "name": "South Africa",
    "numericCode": "710",
    "officialName": "Republic of South Africa",
    "flag": "🇿🇦",
    "flagUrl": "",
    "region": "Southern Africa",
    "continent": "Africa",
    "capital": "Pretoria",
    "latitude": -29,
    "longitude": 24,
    "currencies": [
      {
        "code": "ZAR",
        "name": "South African rand",
        "symbol": "R"
      }
    ],
    "languages": [
      "Afrikaans",
      "English",
      "Southern Ndebele",
      "Northern Sotho",
      "Southern Sotho",
      "Swazi",
      "Tswana",
      "Tsonga",
      "Venda",
      "Xhosa",
      "Zulu"
    ],
    "continents": [],
    "alpha2": "ZA"
  },
  "SGS": {
    "id": "SGS",
    "name": "South Georgia",
    "numericCode": "239",
    "officialName": "South Georgia and the South Sandwich Islands",
    "flag": "🇬🇸",
    "flagUrl": "",
    "region": "Antarctic",
    "continent": "Antarctic",
    "capital": "King Edward Point",
    "latitude": -54.5,
    "longitude": -37,
    "currencies": [
      {
        "code": "SHP",
        "name": "Saint Helena pound",
        "symbol": "£"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "GS"
  },
  "KOR": {
    "id": "KOR",
    "name": "South Korea",
    "numericCode": "410",
    "officialName": "Republic of Korea",
    "flag": "🇰🇷",
    "flagUrl": "",
    "region": "Eastern Asia",
    "continent": "Asia",
    "capital": "Seoul",
    "latitude": 37,
    "longitude": 127.5,
    "currencies": [
      {
        "code": "KRW",
        "name": "South Korean won",
        "symbol": "₩"
      }
    ],
    "languages": [
      "Korean"
    ],
    "continents": [],
    "alpha2": "KR"
  },
  "SSD": {
    "id": "SSD",
    "name": "South Sudan",
    "numericCode": "728",
    "officialName": "Republic of South Sudan",
    "flag": "🇸🇸",
    "flagUrl": "",
    "region": "Middle Africa",
    "continent": "Africa",
    "capital": "Juba",
    "latitude": 7,
    "longitude": 30,
    "currencies": [
      {
        "code": "SSP",
        "name": "South Sudanese pound",
        "symbol": "£"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "SS"
  },
  "ESP": {
    "id": "ESP",
    "name": "Spain",
    "numericCode": "724",
    "officialName": "Kingdom of Spain",
    "flag": "🇪🇸",
    "flagUrl": "",
    "region": "Southern Europe",
    "continent": "Europe",
    "capital": "Madrid",
    "latitude": 40,
    "longitude": -4,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Spanish"
    ],
    "continents": [],
    "alpha2": "ES"
  },
  "LKA": {
    "id": "LKA",
    "name": "Sri Lanka",
    "numericCode": "144",
    "officialName": "Democratic Socialist Republic of Sri Lanka",
    "flag": "🇱🇰",
    "flagUrl": "",
    "region": "Southern Asia",
    "continent": "Asia",
    "capital": "Colombo",
    "latitude": 7,
    "longitude": 81,
    "currencies": [
      {
        "code": "LKR",
        "name": "Sri Lankan rupee",
        "symbol": "Rs රු"
      }
    ],
    "languages": [
      "Sinhala",
      "Tamil"
    ],
    "continents": [],
    "alpha2": "LK"
  },
  "SDN": {
    "id": "SDN",
    "name": "Sudan",
    "numericCode": "729",
    "officialName": "Republic of the Sudan",
    "flag": "🇸🇩",
    "flagUrl": "",
    "region": "Northern Africa",
    "continent": "Africa",
    "capital": "Khartoum",
    "latitude": 15,
    "longitude": 30,
    "currencies": [
      {
        "code": "SDG",
        "name": "Sudanese pound",
        "symbol": "PT"
      }
    ],
    "languages": [
      "Arabic",
      "English"
    ],
    "continents": [],
    "alpha2": "SD"
  },
  "SUR": {
    "id": "SUR",
    "name": "Suriname",
    "numericCode": "740",
    "officialName": "Republic of Suriname",
    "flag": "🇸🇷",
    "flagUrl": "",
    "region": "South America",
    "continent": "Americas",
    "capital": "Paramaribo",
    "latitude": 4,
    "longitude": -56,
    "currencies": [
      {
        "code": "SRD",
        "name": "Surinamese dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "Dutch"
    ],
    "continents": [],
    "alpha2": "SR"
  },
  "SJM": {
    "id": "SJM",
    "name": "Svalbard and Jan Mayen",
    "numericCode": "744",
    "officialName": "Svalbard og Jan Mayen",
    "flag": "🇸🇯",
    "flagUrl": "",
    "region": "Northern Europe",
    "continent": "Europe",
    "capital": "Longyearbyen",
    "latitude": 78,
    "longitude": 20,
    "currencies": [
      {
        "code": "NOK",
        "name": "krone",
        "symbol": "kr"
      }
    ],
    "languages": [
      "Norwegian"
    ],
    "continents": [],
    "alpha2": "SJ"
  },
  "SWE": {
    "id": "SWE",
    "name": "Sweden",
    "numericCode": "752",
    "officialName": "Kingdom of Sweden",
    "flag": "🇸🇪",
    "flagUrl": "",
    "region": "Northern Europe",
    "continent": "Europe",
    "capital": "Stockholm",
    "latitude": 62,
    "longitude": 15,
    "currencies": [
      {
        "code": "SEK",
        "name": "Swedish krona",
        "symbol": "kr"
      }
    ],
    "languages": [
      "Swedish"
    ],
    "continents": [],
    "alpha2": "SE"
  },
  "CHE": {
    "id": "CHE",
    "name": "Switzerland",
    "numericCode": "756",
    "officialName": "Swiss Confederation",
    "flag": "🇨🇭",
    "flagUrl": "",
    "region": "Western Europe",
    "continent": "Europe",
    "capital": "Bern",
    "latitude": 47,
    "longitude": 8,
    "currencies": [
      {
        "code": "CHF",
        "name": "Swiss franc",
        "symbol": "Fr."
      }
    ],
    "languages": [
      "French",
      "Swiss German",
      "Italian",
      "Romansh"
    ],
    "continents": [],
    "alpha2": "CH"
  },
  "SYR": {
    "id": "SYR",
    "name": "Syria",
    "numericCode": "760",
    "officialName": "Syrian Arab Republic",
    "flag": "🇸🇾",
    "flagUrl": "",
    "region": "Western Asia",
    "continent": "Asia",
    "capital": "Damascus",
    "latitude": 35,
    "longitude": 38,
    "currencies": [
      {
        "code": "SYP",
        "name": "Syrian pound",
        "symbol": "£"
      }
    ],
    "languages": [
      "Arabic"
    ],
    "continents": [],
    "alpha2": "SY"
  },
  "TWN": {
    "id": "TWN",
    "name": "Taiwan",
    "numericCode": "158",
    "officialName": "Republic of China (Taiwan)",
    "flag": "🇹🇼",
    "flagUrl": "",
    "region": "Eastern Asia",
    "continent": "Asia",
    "capital": "Taipei",
    "latitude": 23.5,
    "longitude": 121,
    "currencies": [
      {
        "code": "TWD",
        "name": "New Taiwan dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "Chinese"
    ],
    "continents": [],
    "alpha2": "TW"
  },
  "TJK": {
    "id": "TJK",
    "name": "Tajikistan",
    "numericCode": "762",
    "officialName": "Republic of Tajikistan",
    "flag": "🇹🇯",
    "flagUrl": "",
    "region": "Central Asia",
    "continent": "Asia",
    "capital": "Dushanbe",
    "latitude": 39,
    "longitude": 71,
    "currencies": [
      {
        "code": "TJS",
        "name": "Tajikistani somoni",
        "symbol": "ЅМ"
      }
    ],
    "languages": [
      "Russian",
      "Tajik"
    ],
    "continents": [],
    "alpha2": "TJ"
  },
  "TZA": {
    "id": "TZA",
    "name": "Tanzania",
    "numericCode": "834",
    "officialName": "United Republic of Tanzania",
    "flag": "🇹🇿",
    "flagUrl": "",
    "region": "Eastern Africa",
    "continent": "Africa",
    "capital": "Dodoma",
    "latitude": -6,
    "longitude": 35,
    "currencies": [
      {
        "code": "TZS",
        "name": "Tanzanian shilling",
        "symbol": "Sh"
      }
    ],
    "languages": [
      "English",
      "Swahili"
    ],
    "continents": [],
    "alpha2": "TZ"
  },
  "THA": {
    "id": "THA",
    "name": "Thailand",
    "numericCode": "764",
    "officialName": "Kingdom of Thailand",
    "flag": "🇹🇭",
    "flagUrl": "",
    "region": "South-Eastern Asia",
    "continent": "Asia",
    "capital": "Bangkok",
    "latitude": 15,
    "longitude": 100,
    "currencies": [
      {
        "code": "THB",
        "name": "Thai baht",
        "symbol": "฿"
      }
    ],
    "languages": [
      "Thai"
    ],
    "continents": [],
    "alpha2": "TH"
  },
  "TLS": {
    "id": "TLS",
    "name": "Timor-Leste",
    "numericCode": "626",
    "officialName": "Democratic Republic of Timor-Leste",
    "flag": "🇹🇱",
    "flagUrl": "",
    "region": "South-Eastern Asia",
    "continent": "Asia",
    "capital": "Dili",
    "latitude": -8.83333333,
    "longitude": 125.91666666,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "Portuguese",
      "Tetum"
    ],
    "continents": [],
    "alpha2": "TL"
  },
  "TGO": {
    "id": "TGO",
    "name": "Togo",
    "numericCode": "768",
    "officialName": "Togolese Republic",
    "flag": "🇹🇬",
    "flagUrl": "",
    "region": "Western Africa",
    "continent": "Africa",
    "capital": "Lomé",
    "latitude": 8,
    "longitude": 1.16666666,
    "currencies": [
      {
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "TG"
  },
  "TKL": {
    "id": "TKL",
    "name": "Tokelau",
    "numericCode": "772",
    "officialName": "Tokelau",
    "flag": "🇹🇰",
    "flagUrl": "",
    "region": "Polynesia",
    "continent": "Oceania",
    "capital": "Fakaofo",
    "latitude": -9,
    "longitude": -172,
    "currencies": [
      {
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English",
      "Samoan",
      "Tokelauan"
    ],
    "continents": [],
    "alpha2": "TK"
  },
  "TON": {
    "id": "TON",
    "name": "Tonga",
    "numericCode": "776",
    "officialName": "Kingdom of Tonga",
    "flag": "🇹🇴",
    "flagUrl": "",
    "region": "Polynesia",
    "continent": "Oceania",
    "capital": "Nuku'alofa",
    "latitude": -20,
    "longitude": -175,
    "currencies": [
      {
        "code": "TOP",
        "name": "Tongan paʻanga",
        "symbol": "T$"
      }
    ],
    "languages": [
      "English",
      "Tongan"
    ],
    "continents": [],
    "alpha2": "TO"
  },
  "TTO": {
    "id": "TTO",
    "name": "Trinidad and Tobago",
    "numericCode": "780",
    "officialName": "Republic of Trinidad and Tobago",
    "flag": "🇹🇹",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Port of Spain",
    "latitude": 11,
    "longitude": -61,
    "currencies": [
      {
        "code": "TTD",
        "name": "Trinidad and Tobago dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "TT"
  },
  "TUN": {
    "id": "TUN",
    "name": "Tunisia",
    "numericCode": "788",
    "officialName": "Tunisian Republic",
    "flag": "🇹🇳",
    "flagUrl": "",
    "region": "Northern Africa",
    "continent": "Africa",
    "capital": "Tunis",
    "latitude": 34,
    "longitude": 9,
    "currencies": [
      {
        "code": "TND",
        "name": "Tunisian dinar",
        "symbol": "د.ت"
      }
    ],
    "languages": [
      "Arabic"
    ],
    "continents": [],
    "alpha2": "TN"
  },
  "TKM": {
    "id": "TKM",
    "name": "Turkmenistan",
    "numericCode": "795",
    "officialName": "Turkmenistan",
    "flag": "🇹🇲",
    "flagUrl": "",
    "region": "Central Asia",
    "continent": "Asia",
    "capital": "Ashgabat",
    "latitude": 40,
    "longitude": 60,
    "currencies": [
      {
        "code": "TMT",
        "name": "Turkmenistan manat",
        "symbol": "m"
      }
    ],
    "languages": [
      "Russian",
      "Turkmen"
    ],
    "continents": [],
    "alpha2": "TM"
  },
  "TCA": {
    "id": "TCA",
    "name": "Turks and Caicos Islands",
    "numericCode": "796",
    "officialName": "Turks and Caicos Islands",
    "flag": "🇹🇨",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Cockburn Town",
    "latitude": 21.75,
    "longitude": -71.58333333,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "TC"
  },
  "TUV": {
    "id": "TUV",
    "name": "Tuvalu",
    "numericCode": "798",
    "officialName": "Tuvalu",
    "flag": "🇹🇻",
    "flagUrl": "",
    "region": "Polynesia",
    "continent": "Oceania",
    "capital": "Funafuti",
    "latitude": -8,
    "longitude": 178,
    "currencies": [
      {
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      },
      {
        "code": "TVD",
        "name": "Tuvaluan dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English",
      "Tuvaluan"
    ],
    "continents": [],
    "alpha2": "TV"
  },
  "TUR": {
    "id": "TUR",
    "name": "Türkiye",
    "numericCode": "792",
    "officialName": "Republic of Türkiye",
    "flag": "🇹🇷",
    "flagUrl": "",
    "region": "Western Asia",
    "continent": "Asia",
    "capital": "Ankara",
    "latitude": 39,
    "longitude": 35,
    "currencies": [
      {
        "code": "TRY",
        "name": "Turkish lira",
        "symbol": "₺"
      }
    ],
    "languages": [
      "Turkish"
    ],
    "continents": [],
    "alpha2": "TR"
  },
  "UGA": {
    "id": "UGA",
    "name": "Uganda",
    "numericCode": "800",
    "officialName": "Republic of Uganda",
    "flag": "🇺🇬",
    "flagUrl": "",
    "region": "Eastern Africa",
    "continent": "Africa",
    "capital": "Kampala",
    "latitude": 1,
    "longitude": 32,
    "currencies": [
      {
        "code": "UGX",
        "name": "Ugandan shilling",
        "symbol": "Sh"
      }
    ],
    "languages": [
      "English",
      "Swahili"
    ],
    "continents": [],
    "alpha2": "UG"
  },
  "UKR": {
    "id": "UKR",
    "name": "Ukraine",
    "numericCode": "804",
    "officialName": "Ukraine",
    "flag": "🇺🇦",
    "flagUrl": "",
    "region": "Eastern Europe",
    "continent": "Europe",
    "capital": "Kyiv",
    "latitude": 49,
    "longitude": 32,
    "currencies": [
      {
        "code": "UAH",
        "name": "Ukrainian hryvnia",
        "symbol": "₴"
      }
    ],
    "languages": [
      "Ukrainian"
    ],
    "continents": [],
    "alpha2": "UA"
  },
  "ARE": {
    "id": "ARE",
    "name": "United Arab Emirates",
    "numericCode": "784",
    "officialName": "United Arab Emirates",
    "flag": "🇦🇪",
    "flagUrl": "",
    "region": "Western Asia",
    "continent": "Asia",
    "capital": "Abu Dhabi",
    "latitude": 24,
    "longitude": 54,
    "currencies": [
      {
        "code": "AED",
        "name": "United Arab Emirates dirham",
        "symbol": "د.إ"
      }
    ],
    "languages": [
      "Arabic"
    ],
    "continents": [],
    "alpha2": "AE"
  },
  "GBR": {
    "id": "GBR",
    "name": "United Kingdom",
    "numericCode": "826",
    "officialName": "United Kingdom of Great Britain and Northern Ireland",
    "flag": "🇬🇧",
    "flagUrl": "",
    "region": "Northern Europe",
    "continent": "Europe",
    "capital": "London",
    "latitude": 54,
    "longitude": -2,
    "currencies": [
      {
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "GB"
  },
  "USA": {
    "id": "USA",
    "name": "United States",
    "numericCode": "840",
    "officialName": "United States of America",
    "flag": "🇺🇸",
    "flagUrl": "",
    "region": "North America",
    "continent": "Americas",
    "capital": "Washington D.C.",
    "latitude": 38,
    "longitude": -97,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "US"
  },
  "UMI": {
    "id": "UMI",
    "name": "United States Minor Outlying Islands",
    "numericCode": "581",
    "officialName": "United States Minor Outlying Islands",
    "flag": "🇺🇲",
    "flagUrl": "",
    "region": "North America",
    "continent": "Americas",
    "capital": "",
    "latitude": 19.3,
    "longitude": 166.633333,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "UM"
  },
  "VIR": {
    "id": "VIR",
    "name": "United States Virgin Islands",
    "numericCode": "850",
    "officialName": "Virgin Islands of the United States",
    "flag": "🇻🇮",
    "flagUrl": "",
    "region": "Caribbean",
    "continent": "Americas",
    "capital": "Charlotte Amalie",
    "latitude": 18.35,
    "longitude": -64.933333,
    "currencies": [
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "VI"
  },
  "URY": {
    "id": "URY",
    "name": "Uruguay",
    "numericCode": "858",
    "officialName": "Oriental Republic of Uruguay",
    "flag": "🇺🇾",
    "flagUrl": "",
    "region": "South America",
    "continent": "Americas",
    "capital": "Montevideo",
    "latitude": -33,
    "longitude": -56,
    "currencies": [
      {
        "code": "UYU",
        "name": "Uruguayan peso",
        "symbol": "$"
      }
    ],
    "languages": [
      "Spanish"
    ],
    "continents": [],
    "alpha2": "UY"
  },
  "UZB": {
    "id": "UZB",
    "name": "Uzbekistan",
    "numericCode": "860",
    "officialName": "Republic of Uzbekistan",
    "flag": "🇺🇿",
    "flagUrl": "",
    "region": "Central Asia",
    "continent": "Asia",
    "capital": "Tashkent",
    "latitude": 41,
    "longitude": 64,
    "currencies": [
      {
        "code": "UZS",
        "name": "Uzbekistani soʻm",
        "symbol": "so'm"
      }
    ],
    "languages": [
      "Russian",
      "Uzbek"
    ],
    "continents": [],
    "alpha2": "UZ"
  },
  "VUT": {
    "id": "VUT",
    "name": "Vanuatu",
    "numericCode": "548",
    "officialName": "Republic of Vanuatu",
    "flag": "🇻🇺",
    "flagUrl": "",
    "region": "Melanesia",
    "continent": "Oceania",
    "capital": "Port Vila",
    "latitude": -16,
    "longitude": 167,
    "currencies": [
      {
        "code": "VUV",
        "name": "Vanuatu vatu",
        "symbol": "Vt"
      }
    ],
    "languages": [
      "Bislama",
      "English",
      "French"
    ],
    "continents": [],
    "alpha2": "VU"
  },
  "VAT": {
    "id": "VAT",
    "name": "Vatican City",
    "numericCode": "336",
    "officialName": "Vatican City State",
    "flag": "🇻🇦",
    "flagUrl": "",
    "region": "Southern Europe",
    "continent": "Europe",
    "capital": "Vatican City",
    "latitude": 41.9,
    "longitude": 12.45,
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      "Italian",
      "Latin"
    ],
    "continents": [],
    "alpha2": "VA"
  },
  "VEN": {
    "id": "VEN",
    "name": "Venezuela",
    "numericCode": "862",
    "officialName": "Bolivarian Republic of Venezuela",
    "flag": "🇻🇪",
    "flagUrl": "",
    "region": "South America",
    "continent": "Americas",
    "capital": "Caracas",
    "latitude": 8,
    "longitude": -66,
    "currencies": [
      {
        "code": "VES",
        "name": "Venezuelan bolívar soberano",
        "symbol": "Bs.S."
      }
    ],
    "languages": [
      "Spanish"
    ],
    "continents": [],
    "alpha2": "VE"
  },
  "VNM": {
    "id": "VNM",
    "name": "Vietnam",
    "numericCode": "704",
    "officialName": "Socialist Republic of Vietnam",
    "flag": "🇻🇳",
    "flagUrl": "",
    "region": "South-Eastern Asia",
    "continent": "Asia",
    "capital": "Hanoi",
    "latitude": 16.16666666,
    "longitude": 107.83333333,
    "currencies": [
      {
        "code": "VND",
        "name": "Vietnamese đồng",
        "symbol": "₫"
      }
    ],
    "languages": [
      "Vietnamese"
    ],
    "continents": [],
    "alpha2": "VN"
  },
  "WLF": {
    "id": "WLF",
    "name": "Wallis and Futuna",
    "numericCode": "876",
    "officialName": "Territory of the Wallis and Futuna Islands",
    "flag": "🇼🇫",
    "flagUrl": "",
    "region": "Polynesia",
    "continent": "Oceania",
    "capital": "Mata-Utu",
    "latitude": -13.3,
    "longitude": -176.2,
    "currencies": [
      {
        "code": "XPF",
        "name": "CFP franc",
        "symbol": "₣"
      }
    ],
    "languages": [
      "French"
    ],
    "continents": [],
    "alpha2": "WF"
  },
  "ESH": {
    "id": "ESH",
    "name": "Western Sahara",
    "numericCode": "732",
    "officialName": "Sahrawi Arab Democratic Republic",
    "flag": "🇪🇭",
    "flagUrl": "",
    "region": "Northern Africa",
    "continent": "Africa",
    "capital": "El Aaiún",
    "latitude": 24.5,
    "longitude": -13,
    "currencies": [
      {
        "code": "DZD",
        "name": "Algerian dinar",
        "symbol": "دج"
      },
      {
        "code": "MAD",
        "name": "Moroccan dirham",
        "symbol": "DH"
      },
      {
        "code": "MRU",
        "name": "Mauritanian ouguiya",
        "symbol": "UM"
      }
    ],
    "languages": [
      "Berber",
      "Hassaniya",
      "Spanish"
    ],
    "continents": [],
    "alpha2": "EH"
  },
  "YEM": {
    "id": "YEM",
    "name": "Yemen",
    "numericCode": "887",
    "officialName": "Republic of Yemen",
    "flag": "🇾🇪",
    "flagUrl": "",
    "region": "Western Asia",
    "continent": "Asia",
    "capital": "Sana'a",
    "latitude": 15,
    "longitude": 48,
    "currencies": [
      {
        "code": "YER",
        "name": "Yemeni rial",
        "symbol": "﷼"
      }
    ],
    "languages": [
      "Arabic"
    ],
    "continents": [],
    "alpha2": "YE"
  },
  "ZMB": {
    "id": "ZMB",
    "name": "Zambia",
    "numericCode": "894",
    "officialName": "Republic of Zambia",
    "flag": "🇿🇲",
    "flagUrl": "",
    "region": "Eastern Africa",
    "continent": "Africa",
    "capital": "Lusaka",
    "latitude": -15,
    "longitude": 30,
    "currencies": [
      {
        "code": "ZMW",
        "name": "Zambian kwacha",
        "symbol": "ZK"
      }
    ],
    "languages": [
      "English"
    ],
    "continents": [],
    "alpha2": "ZM"
  },
  "ZWE": {
    "id": "ZWE",
    "name": "Zimbabwe",
    "numericCode": "716",
    "officialName": "Republic of Zimbabwe",
    "flag": "🇿🇼",
    "flagUrl": "",
    "region": "Eastern Africa",
    "continent": "Africa",
    "capital": "Harare",
    "latitude": -20,
    "longitude": 30,
    "currencies": [
      {
        "code": "BWP",
        "name": "Botswana pula",
        "symbol": "P"
      },
      {
        "code": "CNY",
        "name": "Chinese yuan",
        "symbol": "¥"
      },
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      },
      {
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      },
      {
        "code": "INR",
        "name": "Indian rupee",
        "symbol": "₹"
      },
      {
        "code": "JPY",
        "name": "Japanese yen",
        "symbol": "¥"
      },
      {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      },
      {
        "code": "ZAR",
        "name": "South African rand",
        "symbol": "Rs"
      },
      {
        "code": "ZWG",
        "name": "Zimbabwe Gold",
        "symbol": "ZiG"
      }
    ],
    "languages": [
      "Chibarwe",
      "English",
      "Kalanga",
      "Khoisan",
      "Ndau",
      "Northern Ndebele",
      "Chewa",
      "Shona",
      "Sotho",
      "Tonga",
      "Tswana",
      "Tsonga",
      "Venda",
      "Xhosa",
      "Zimbabwean Sign Language"
    ],
    "continents": [],
    "alpha2": "ZW"
  }
};
