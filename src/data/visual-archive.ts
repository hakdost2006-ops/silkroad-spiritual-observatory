import bahauddinNaqshbandCalligraphy from "../assets/calligraphy/bahauddin-naqshband-calligraphy.png";
import ahmadYasawiHikmetManuscript from "../assets/calligraphy/ahmad-yasawi-hikmet-manuscript.jpg";

export const orderVisuals = {
  naqshbandiyya: {
    src: bahauddinNaqshbandCalligraphy,
    alt: "Arabic calligraphy of the name Bahauddin Naqshband",
    caption: "Contemporary Arabic calligraphy of Bahauddin Naqshband's name.",
    credit: "Riznaldo / Wikimedia Commons",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bahauddin2.png",
  },
  yasaviyya: {
    src: ahmadYasawiHikmetManuscript,
    alt: "Historic Chagatai-language Hikmet attributed to Ahmad Yasawi",
    caption:
      "A Chagatai-language Hikmet displayed in the Yasawi Heritage and Ancient Turkistan exhibition, Kazan.",
    credit: "Vyacheslav Kirillin / Wikimedia Commons",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Ahmad_Yasawi_hikmat,_1900s_(2024-04-02).jpg",
  },
} as const;
