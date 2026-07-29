import { nursafardiyyaArchive } from "./nursafardiyya";
import { khwajaganLibrary } from "./khwajagan-library";

export type LibraryItem = {
  id: string;
  title: string;
  author: string;
  translator?: string;
  order: string; // order slug or "general"
  language: "Arabic" | "Persian" | "Turkic" | "English" | "Russian" | "Uzbek";
  century: string;
  format: "PDF" | "EPUB" | "Manuscript" | "Article" | "Brochure" | "Video" | "Audio";
  topic: string;
  description: string;
  tags: string[];
  source: string;
  href?: string;
};

export const library: LibraryItem[] = [
  {
    id: "fawaih-al-jamal",
    title: "Fawāʾiḥ al-Jamāl wa Fawātiḥ al-Jalāl",
    author: "Najm al-Dīn Kubrā",
    order: "kubrawiyya",
    language: "Arabic",
    century: "13th",
    format: "PDF",
    topic: "Mystical psychology",
    description:
      "Foundational Kubrawī treatise on visionary states, coloured lights, and the discipline of the seeker.",
    tags: ["najm-al-din-kubra", "visions", "photisms", "chilla"],
    source: "Archival scan; scholarly edition of Meier (1957).",
  },
  {
    id: "kubra-ten-principles",
    title: "al-Uṣūl al-ʿAshara (The Ten Principles)",
    author: "Najm al-Dīn Kubrā",
    translator: "Archive English draft",
    order: "kubrawiyya",
    language: "English",
    century: "13th / modern draft",
    format: "EPUB",
    topic: "Practice",
    description:
      "English working translation from the Atlas corpus, structured around repentance, renunciation, trust, retreat, remembrance, watchfulness, and riḍā.",
    tags: ["najm-al-din-kubra", "principles", "practice", "translation"],
    source:
      "Atlas translation corpus; awaiting editorial collation with Arabic and Persian witnesses.",
  },
  {
    id: "kubra-minor-treatises",
    title: "Kubra's Short Treatises: Seeker, Traveller, and Adab",
    author: "Najm al-Dīn Kubrā",
    order: "kubrawiyya",
    language: "Arabic",
    century: "13th",
    format: "Manuscript",
    topic: "Practice",
    description:
      "Catalog record for the short epistles on bewilderment, travel, and Sufi conduct represented in the Atlas archive and in scholarly editions.",
    tags: ["najm-al-din-kubra", "adab", "suluk", "manuscript"],
    source:
      "Atlas primary-source archive; compare the scholarly edition of Kubra's minor treatises.",
  },
  {
    id: "diwan-i-hikmat",
    title: "Dīwān-i Ḥikmat",
    author: "Aḥmad Yasawī",
    translator: "various",
    order: "yasaviyya",
    language: "Turkic",
    century: "12th",
    format: "PDF",
    topic: "Poetry",
    description:
      "The wisdom-poems of Khwāja Aḥmad Yasawī, foundational monument of Turkic Sufi literature.",
    tags: ["hikma", "poetry", "turkic"],
    source: "Kazakh critical editions; UNESCO memory-of-the-world project.",
  },
  {
    id: "rashahat",
    title: "Rashaḥāt ʿAyn al-Ḥayāt",
    author: "Fakhr al-Dīn Kāshifī",
    order: "naqshbandiyya",
    language: "Persian",
    century: "16th",
    format: "PDF",
    topic: "Hagiography",
    description:
      "Definitive early Naqshbandī hagiography, transmitting the sayings of the Khwājagān and Bahāʾ al-Dīn.",
    tags: ["hagiography", "khwajagan", "silsila"],
    source: "Persian lithograph editions.",
  },
  {
    id: "maktubat-sirhindi",
    title: "Maktūbāt-i Imām Rabbānī",
    author: "Aḥmad Sirhindī",
    order: "mujaddidiyya",
    language: "Persian",
    century: "17th",
    format: "PDF",
    topic: "Doctrine",
    description:
      "Letters of the Mujaddid of the Second Millennium — pillar of later Naqshbandī doctrine.",
    tags: ["mujaddidiyya", "letters", "doctrine"],
    source: "Karachi and Lahore editions.",
  },
  {
    id: "kalimat-qudsiyya",
    title: "Kalimāt-i Qudsiyya (Eight Sacred Sayings)",
    author: "ʿAbd al-Khāliq Ghujdawānī",
    order: "khwajagan",
    language: "Persian",
    century: "12th",
    format: "PDF",
    topic: "Method",
    description:
      "Compact codification of the eight Khwājagān principles which structure silent dhikr and vigilance.",
    tags: ["principles", "silent-dhikr"],
    source: "Composite scholarly editions.",
  },
  {
    id: "awrad-fathiyya",
    title: "Awrād-i Fatḥiyya",
    author: "Mīr Sayyid ʿAlī Hamadānī",
    order: "kubrawiyya",
    language: "Arabic",
    century: "14th",
    format: "PDF",
    topic: "Litany",
    description:
      "Daily litany of the Kubrawī tradition, widely recited across Kashmir and Central Asia.",
    tags: ["awrad", "litany", "kashmir"],
    source: "Kashmiri manuscript tradition.",
  },
  {
    id: "man-of-light",
    title: "The Man of Light in Iranian Sufism",
    author: "Henry Corbin",
    translator: "Nancy Pearson",
    order: "kubrawiyya",
    language: "English",
    century: "20th",
    format: "EPUB",
    topic: "Scholarship",
    description:
      "Corbin's classic phenomenological study of Kubrawī visionary experience, essential for readers of Najm al-Dīn Kubrā.",
    tags: ["scholarship", "photisms"],
    source: "Omega Publications.",
  },
  {
    id: "islamization-golden-horde",
    title: "Islamization and Native Religion in the Golden Horde",
    author: "Devin DeWeese",
    order: "yasaviyya",
    language: "English",
    century: "20th",
    format: "PDF",
    topic: "Scholarship",
    description:
      "Landmark study of the Yasavī tradition and the Islamisation of the Turkic peoples of Inner Asia.",
    tags: ["scholarship", "yasavi", "history"],
    source: "Penn State University Press.",
  },
  {
    id: "waqf-ahrar",
    title: "The Waqf Documents of Khwāja ʿUbayd Allāh Aḥrār",
    author: "Jo-Ann Gross",
    order: "naqshbandiyya",
    language: "English",
    century: "20th",
    format: "Article",
    topic: "Scholarship",
    description:
      "Analysis of the endowments through which Khwāja Aḥrār organised Timurid religious life.",
    tags: ["scholarship", "waqf", "timurid"],
    source: "Journal articles and monograph.",
  },
  {
    id: "nursafar-practice-primer",
    title: "Nursafardiyya — Practice Primer (Archival Draft)",
    author: "Nursafardiyya archive",
    order: "nursafardiyya",
    language: "Uzbek",
    century: "21st",
    format: "PDF",
    topic: "Practice",
    description:
      "Working archival primer on Zikr, Sema, breathwork and the ethical ground of Nursafardiyya practice.",
    tags: ["nursafardiyya", "practice", "zikr"],
    source: "Nursafardiyya centres, Uzbekistan.",
  },
  {
    id: "sacred-letters-notes",
    title: "Sacred Letters — Introductory Notes",
    author: "Nursafardiyya archive",
    order: "nursafardiyya",
    language: "English",
    century: "21st",
    format: "Article",
    topic: "Sacred letters",
    description:
      "Introductory notes on the contemplative use of Arabic letters in the Nursafardiyya tradition.",
    tags: ["nursafardiyya", "letters"],
    source: "Community archive.",
  },
  {
    id: "herbal-wellness-notes",
    title: "Traditional Herbal Wellness — Field Notes",
    author: "Nursafardiyya archive",
    order: "nursafardiyya",
    language: "Uzbek",
    century: "21st",
    format: "PDF",
    topic: "Wellness",
    description:
      "Archival field notes on traditional herbal wellness practices. Not medical advice.",
    tags: ["wellness", "herbs"],
    source: "Community archive.",
  },
  {
    id: "sema-recording",
    title: "Zikr and Sema — Field Recording",
    author: "Nursafardiyya archive",
    order: "nursafardiyya",
    language: "Uzbek",
    century: "21st",
    format: "Audio",
    topic: "Practice",
    description: "Field recording of a Zikr and Sema gathering, preserved as archival audio.",
    tags: ["audio", "sema", "zikr"],
    source: "Community archive.",
  },
  {
    id: "atlas-of-shrines",
    title: "An Atlas of Central Asian Shrines",
    author: "Archive editors",
    order: "general",
    language: "English",
    century: "21st",
    format: "PDF",
    topic: "Sacred geography",
    description:
      "Visual survey of the principal ziyāra sites of Central Asia, cross-referenced by order and lineage.",
    tags: ["shrines", "geography"],
    source: "This archive.",
  },
];

library.push(...nursafardiyyaArchive);
library.push(...khwajaganLibrary);

export const libraryFilters = {
  order: [
    "all",
    "kubrawiyya",
    "yasaviyya",
    "khwajagan",
    "naqshbandiyya",
    "mujaddidiyya",
    "nursafardiyya",
    "general",
  ] as const,
  language: ["all", "Arabic", "Persian", "Turkic", "English", "Russian", "Uzbek"] as const,
  century: ["all", "12th", "13th", "14th", "16th", "17th", "20th", "21st"] as const,
  format: ["all", "PDF", "EPUB", "Manuscript", "Article", "Brochure", "Video", "Audio"] as const,
};
