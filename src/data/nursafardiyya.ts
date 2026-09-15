import type { LibraryItem } from "./library";

export type NursafardiyyaPractice = {
  slug: string;
  title: string;
  kicker: string;
  body: string;
  sourceNote: string;
};

export type NursafardiyyaCenter = {
  city: string;
  region: string;
  title: string;
  description: string;
  address: string;
  phones?: string[];
};

export type SilsilaNode = {
  id: string;
  name: string;
  dates: string;
  place: string;
  order: string;
  x: number;
  y: number;
  note: string;
};

export type SilsilaLink = {
  from: string;
  to: string;
  label: string;
};

export type NursafardiyyaTeacher = {
  name: string;
  honorific: string;
  role: string;
  period: string;
  place: string;
  description: string;
  highlights: string[];
  imageKey: "yasawi-mausoleum" | "nursafardiyya-emblem" | "zurmergan-manual";
  imageCaption: string;
  sourceNote: string;
};

export type QatronDirection = {
  title: string;
  description: string;
};

export type ZurmerganPrinciple = {
  title: string;
  description: string;
};

export const nursafardiyyaPractices: NursafardiyyaPractice[] = [
  {
    slug: "ilahism",
    title: "Ilahism",
    kicker: "Divine orientation",
    body: "The official Nursafardiyya materials present Ilahism as a higher language of divine perfection, moving beyond a narrow category of religion, philosophy, or tariqa into a lived discipline of transformation.",
    sourceNote: "Based on the Nursafardiyya homepage and Ilahism archive sections.",
  },
  {
    slug: "zikr-sema",
    title: "Zikr and Martial Cosmic Sema",
    kicker: "Voice, breath, movement",
    body: "The tradition preserves awakening meditation through Zikr and a martial cosmic Sema dance language. This belongs in the portal as a core practice stream, with clear archival framing and safety notes.",
    sourceNote:
      "Official brochure: Nursafardiyya's awakening meditation (Zikr) and martial cosmic (Sema) dances, 2008.",
  },
  {
    slug: "respiration",
    title: "Nursafardiyya Respiration",
    kicker: "Breath as method",
    body: "The respiration materials describe breath as a practical foundation for inner attention, spiritual energy, and disciplined embodiment.",
    sourceNote:
      "Local and official archive PDFs include Nursafardiyya respiration materials from 2006.",
  },
  {
    slug: "healing",
    title: "Ancestral Medicine and Herbal Wellness",
    kicker: "Traditional wellness",
    body: "The healing corpus includes herbal preparation guides, ancestral medicine, health-disease codes, and traditional wellness materials. The portal presents these as cultural and wellness archive materials, not as medical advice.",
    sourceNote:
      "Official archive includes the 2015 herbal preparations guide and medicine category.",
  },
  {
    slug: "martial-arts",
    title: "Zurmergan Sufi Martial Arts",
    kicker: "Embodied vigilance",
    body: "Nursafardiyya martial material connects discipline, movement, stance, and spiritual attention. It should be treated as a major visual section with book plates, posture diagrams, and historical context.",
    sourceNote:
      "Official book archive includes Zurmergan Sufi martial arts in pictures, beginning part, 2012.",
  },
  {
    slug: "qatron",
    title: "Qatron School of Perfection",
    kicker: "School and pedagogy",
    body: "Qatron appears in Nursafardiyya materials as a school of perfection and as a bridge between traditional values, pedagogy, and practical self-cultivation.",
    sourceNote:
      "Official brochure archive lists Qatron: Sufi school of perfection and related traditional-values material.",
  },
];

export const nursafardiyyaCenters: NursafardiyyaCenter[] = [
  {
    city: "Kibray / Tashkent",
    region: "Tashkent region",
    title: "Nursafardiyya Medicine",
    description:
      "Pharmacy of medicinal herbs and cosmetics; listed as the main Nursafardiyya medicine center.",
    address:
      "Republic of Uzbekistan, Tashkent city, Kibray district, Nurafshon mahalla, Temiryulchilar-2 street, 1st alleyway, house 1A.",
    phones: ["+998 71 502 11 78", "+998 95 875 11 78"],
  },
  {
    city: "Sayhun",
    region: "Sirdarya region",
    title: "Nursafardiyya Wellness Center",
    description: "Wellness center using oriental medicine methods.",
    address:
      "Republic of Uzbekistan, Sirdariya region, Sayhunabad district, Sayhun town, A. Navoi street, house 65.",
    phones: ["+998 90 933 96 55", "+998 91 503 09 93"],
  },
  {
    city: "Bukhara",
    region: "Bukhara region",
    title: "Nursafardiyya Bukhara Branch",
    description: "Wellness center using oriental medicine methods.",
    address:
      "Republic of Uzbekistan, Bukhara city, Shayhan locality, Gazli highway, near Karvan Bazaar and Olim Ota pilaw center.",
    phones: ["+998 95 604 28 84", "+998 95 600 10 13"],
  },
  {
    city: "Fergana",
    region: "Fergana region",
    title: "Nursafardiyya Ancestral Medicine",
    description: "Ancestral medicine branch listed by the official site.",
    address:
      "Republic of Uzbekistan, Fergana city, Ahunbabaev block, A. Kadiriy street, house 114, apt. 1.",
    phones: ["+998 95 404 19 80"],
  },
];

export const nursafardiyyaTeachers: NursafardiyyaTeacher[] = [
  {
    name: "Hoja Ahmad Yassaviy",
    honorific: "Hazrat-i Turkistan",
    role: "First spiritual reference for the Nursafardiyya lineage story",
    period: "1093-1166",
    place: "Sayram / Yasi, Turkistan",
    description:
      "Ahmad Yassaviy stands first in this Nursafardiyya portal because the Qatron booklet says Sufi Tabib began his path through the Yassaviya way of spiritual perfection and regarded Yassaviy as a spiritual teacher. For the atlas, this makes the Yassaviyya current the direct lineage bridge into Nursafardiyya. Yassaviy is also a founding figure of Turkic Sufi poetry and communal remembrance; his legacy anchors the portal in Central Asian language, place, and devotional practice rather than in a generic Sufi genealogy.",
    highlights: [
      "Earliest and primary lineage reference for this page.",
      "Associated with Turkic hikmat poetry, remembrance, and the sacred geography of Yasi/Turkistan.",
      "Presented here through his mausoleum and living pilgrimage memory, not through an invented portrait.",
    ],
    imageKey: "yasawi-mausoleum",
    imageCaption:
      "Mausoleum of Khoja Ahmad Yassaviy in Turkistan, used as a verified heritage image rather than a speculative portrait.",
    sourceNote:
      "Qatron: Sufiy School of Perfection, 2007; Mausoleum of Khoja Ahmed Yasawi reference image via Wikimedia.",
  },
  {
    name: "Safarboy Kushkarov",
    honorific: "Sufi Tabib / Sheikh Sufi Nursafardiy",
    role: "Founder-teacher of the modern Nursafardiyya teaching",
    period: "Late 20th century to contemporary Nursafardiyya memory",
    place: "Jizzak, Tashkent, Kibray",
    description:
      "Safarboy Kushkarov is presented in the Qatron materials as the modern organizing teacher behind Nursafardiyya. The booklet describes his early life in the Jizzak region, his training in languages, his healing work with herbs, massage, pulse-reading, prayer, and internal breathing, and his return to Uzbekistan in the early 1990s after work abroad. He founded Yassaviy Turkiston and later related centers, then gathered Nursafardiyya into a practical school of medicine, movement, respiration, calligraphy, martial arts, choreography, cosmetology, and national tradition.",
    highlights: [
      "Founder of the modern Nursafardiyya teaching structure represented in this portal.",
      "Linked by the Qatron text to ancestral medicine, martial discipline, breathwork, and Uzbek cultural values.",
      "Presented through official Nursafardiyya visual identity until a verified portrait is supplied.",
    ],
    imageKey: "nursafardiyya-emblem",
    imageCaption:
      "Official Nursafardiyya emblem used as the visual marker for Sufi Tabib until a verified portrait is available.",
    sourceNote:
      "Qatron: Sufiy School of Perfection, 2007; Murshid-Murid Relationship in Nursafardiyya, 2006.",
  },
  {
    name: "Ulugbek Kushkarov",
    honorific: "Ulug zor sufiy",
    role: "Author and transmitter of the Zurmergan martial arts manual",
    period: "2012 publication",
    place: "Tashkent",
    description:
      "Ulugbek Kushkarov is credited on the 2012 illustrated Zurmergan manual. That manual frames Zurmergan as a Sufi martial art that should be studied with a master because the movement details, respiration system, power-center work, and combat application differ from ordinary martial systems. In the portal, he belongs inside the Zurmergan transmission section: not as a decorative biographical note, but as the named author through whom this martial stream becomes legible in text, image, and training sequence.",
    highlights: [
      "Named author of the official Zurmergan illustrated manual.",
      "Connects martial movement, breath, internal power, and master-guided study.",
      "Presented through the Nursafardiyya visual system until a verified portrait or manual cover image is approved.",
    ],
    imageKey: "zurmergan-manual",
    imageCaption:
      "Zurmergan visual marker based on the official Nursafardiyya archive and martial-arts manual context.",
    sourceNote: "Zurmergan Sufiy Martial Arts in Pictures. Beginning Part, 2012.",
  },
];

export const qatronDirections: QatronDirection[] = [
  {
    title: "Calligraphy",
    description:
      "Sacred writing and historical script as a discipline of attention, form, and cultural memory.",
  },
  {
    title: "Respiration",
    description:
      "Breathwork as a practical system, including main, purposeful, and meditation respiration.",
  },
  {
    title: "Divine philosophy",
    description: "The conceptual language of Ilahism, Sufi worldview, and the path of perfection.",
  },
  {
    title: "Poetry and literature",
    description:
      "A Yassaviyya-inflected literary inheritance where poetry carries remembrance and teaching.",
  },
  {
    title: "Secret knowledge and capabilities",
    description:
      "A guarded field of esoteric training presented in the archive as inner capacity and spiritual discipline.",
  },
  {
    title: "Medicine",
    description:
      "Traditional wellness, herbs, massage, pulse-reading, prayer, and ancestral medicine materials.",
  },
  {
    title: "Divine books",
    description:
      "Study of texts and revealed wisdom as part of the Nursafardiyya educational frame.",
  },
  {
    title: "System of movements",
    description: "Beautiful Sufi movements, gymnastics, posture, and embodied preparation.",
  },
  {
    title: "Music",
    description: "Sama, sound, and states of devotional attention as framed in the Qatron program.",
  },
  {
    title: "Cleanliness",
    description:
      "External care and internal refinement, including what the archive calls Sufi cosmetology.",
  },
  {
    title: "Lifestyle",
    description: "Daily conduct, discipline, service, and ethical formation for the student.",
  },
  {
    title: "Choreography and dance",
    description:
      "Movement, dance, and symbolic messages as a means of attention and anti-laziness.",
  },
  {
    title: "Meditation and zikr",
    description:
      "Remembrance, devotional words, breath, and movement as an integrated practice stream.",
  },
  {
    title: "Martial arts",
    description:
      "Zurmergan and Sufi martial training as a path of balance, vigilance, service, and perfection.",
  },
];

export const zurmerganPrinciples: ZurmerganPrinciple[] = [
  {
    title: "Study with a master",
    description:
      "The official Zurmergan manual states that the system is intended for study with a Sufi martial arts master because it combines detailed movement, respiration, power-center work, and combat application.",
  },
  {
    title: "Movement, breath, inner power",
    description:
      "The Murshid-Murid booklet summarizes the martial stream as thought, breath, and movement becoming one inner spiritual power.",
  },
  {
    title: "Eight warrior qualities",
    description:
      "The Nursafardiyya octagon is explained through power, mastery, speed, cleverness, inner power, bravery, attentiveness, and strength.",
  },
  {
    title: "Service before spectacle",
    description:
      "Qatron frames Sufi martial art as more than fighting: its essence is service, balance, and movement toward perfection.",
  },
];

export const nursafardiyyaArchive: LibraryItem[] = [
  {
    id: "nursafardiyya-atem-ubungen",
    title: "Nursafardiyya Atem-Ubungen",
    author: "Nursafardiyya archive",
    order: "nursafardiyya",
    language: "English",
    century: "21st",
    format: "PDF",
    topic: "Breathwork",
    description:
      "Official book archive item on Nursafardiyya breathing exercises, created in 2006.",
    tags: ["nursafardiyya", "breath", "respiration"],
    source: "Official Nursafardiyya file archive.",
    href: "https://nursafardiyya.com/en/file-archive/books/",
  },
  {
    id: "nursafardiyya-respiration",
    title: "Nursafardiyya Respiration",
    author: "Nursafardiyya archive",
    order: "nursafardiyya",
    language: "English",
    century: "21st",
    format: "PDF",
    topic: "Breathwork",
    description: "A 2006 Nursafardiyya respiration text listed in the official archive.",
    tags: ["nursafardiyya", "nafas", "breathwork"],
    source: "Official Nursafardiyya book archive.",
    href: "https://nursafardiyya.com/en/file-archive/books/",
  },
  {
    id: "zurmergan-beginning",
    title: "Zurmergan Sufi Martial Arts in Pictures. Beginning Part",
    author: "Nursafardiyya archive",
    order: "nursafardiyya",
    language: "English",
    century: "21st",
    format: "PDF",
    topic: "Martial arts",
    description: "A 2012 illustrated text on Zurmergan, the Nursafardiyya martial arts stream.",
    tags: ["zurmergan", "martial arts", "movement"],
    source: "Official Nursafardiyya book archive.",
    href: "https://nursafardiyya.com/en/file-archive/books/",
  },
  {
    id: "zikr-sema-dances",
    title: "Nursafardiyya's Awakening Meditation (Zikr) and Martial Cosmic (Sema) Dances",
    author: "Nursafardiyya archive",
    order: "nursafardiyya",
    language: "English",
    century: "21st",
    format: "Brochure",
    topic: "Zikr and Sema",
    description: "A 2008 brochure on awakening meditation, Zikr, and martial cosmic Sema dances.",
    tags: ["zikr", "sema", "movement", "martial"],
    source: "Official Nursafardiyya brochure archive.",
    href: "https://nursafardiyya.com/en/351/",
  },
  {
    id: "sufism-in-nursafardiyya",
    title: "Sufism in the Eyes of Nursafardiyya",
    author: "Nursafardiyya archive",
    order: "nursafardiyya",
    language: "English",
    century: "21st",
    format: "Brochure",
    topic: "Sufism",
    description: "A 2006 brochure explaining how Nursafardiyya frames Sufism inside its teaching.",
    tags: ["sufism", "teaching", "nursafardiyya"],
    source: "Official Nursafardiyya brochure archive.",
    href: "https://nursafardiyya.com/en/file-archive/brochures/",
  },
  {
    id: "qatron-school",
    title: "Qatron. Sufi School of Perfection",
    author: "Nursafardiyya archive",
    order: "nursafardiyya",
    language: "English",
    century: "21st",
    format: "Brochure",
    topic: "School",
    description: "A 2007 brochure introducing Qatron as a Sufi school of perfection.",
    tags: ["qatron", "school", "perfection"],
    source: "Official Nursafardiyya brochure archive.",
    href: "https://nursafardiyya.com/en/file-archive/brochures/",
  },
  {
    id: "murshid-murid",
    title: "Murshid-Murid Relationship in Nursafardiyya",
    author: "Nursafardiyya archive",
    order: "nursafardiyya",
    language: "English",
    century: "21st",
    format: "Brochure",
    topic: "Lineage",
    description: "A 2006 brochure on the teacher-student relationship in Nursafardiyya.",
    tags: ["murshid", "murid", "lineage"],
    source: "Official Nursafardiyya brochure archive.",
    href: "https://nursafardiyya.com/en/file-archive/brochures/",
  },
  {
    id: "nursafardiyya-society",
    title: "Nursafardiyya and the Society",
    author: "Nursafardiyya archive",
    order: "nursafardiyya",
    language: "English",
    century: "21st",
    format: "Brochure",
    topic: "Society",
    description: "A 2007 brochure on the social role and public presence of Nursafardiyya.",
    tags: ["society", "ethics", "uzbekistan"],
    source: "Official Nursafardiyya brochure archive.",
    href: "https://nursafardiyya.com/en/file-archive/brochures/",
  },
  {
    id: "herbal-preparations",
    title:
      "A Practical Guide of the Use of Medical Herbal Preparations in the Nursafardiyya Medicine",
    author: "Nursafardiyya archive",
    order: "nursafardiyya",
    language: "English",
    century: "21st",
    format: "Brochure",
    topic: "Herbal wellness",
    description:
      "A 2015 guide to herbal preparations in Nursafardiyya medicine, presented here as traditional wellness archive material.",
    tags: ["herbs", "wellness", "ancestral medicine"],
    source: "Official Nursafardiyya medicine archive.",
    href: "https://nursafardiyya.com/en/345/",
  },
  {
    id: "nursafardiyya-essence",
    title: "Nursafardiyya Essence",
    author: "Nursafardiyya archive",
    order: "nursafardiyya",
    language: "English",
    century: "21st",
    format: "Brochure",
    topic: "Doctrine",
    description: "A 2007 brochure on the essence and orientation of the Nursafardiyya teaching.",
    tags: ["essence", "ilahism", "teaching"],
    source: "Official Nursafardiyya brochure archive.",
    href: "https://nursafardiyya.com/en/file-archive/brochures/",
  },
  {
    id: "divine-philosophy",
    title: "The Divine Philosophy of Nursafardiyya",
    author: "Nursafardiyya archive",
    order: "nursafardiyya",
    language: "English",
    century: "21st",
    format: "Brochure",
    topic: "Ilahism",
    description: "A 2005 brochure on the divine philosophy articulated by Nursafardiyya.",
    tags: ["ilahism", "philosophy", "divine"],
    source: "Official Nursafardiyya brochure archive.",
    href: "https://nursafardiyya.com/en/file-archive/brochures/",
  },
  {
    id: "truth-about-nursafardiy",
    title: "The Truth About Nursafardiy. Book I",
    author: "Nursafardiyya archive",
    order: "nursafardiyya",
    language: "English",
    century: "21st",
    format: "Brochure",
    topic: "Doctrine",
    description: "A 2005 archive text listed in the official Nursafardiyya brochure library.",
    tags: ["doctrine", "ilahism", "archive"],
    source: "Official Nursafardiyya brochure archive.",
    href: "https://nursafardiyya.com/en/file-archive/brochures/",
  },
  {
    id: "fourteen-steps",
    title: "14 Steps Towards Perfection",
    author: "Nursafardiyya archive",
    order: "nursafardiyya",
    language: "English",
    century: "21st",
    format: "Brochure",
    topic: "Practice",
    description: "A 2005 archive item on stages of perfection in Nursafardiyya.",
    tags: ["perfection", "practice", "stages"],
    source: "Official Nursafardiyya brochure archive.",
    href: "https://nursafardiyya.com/en/file-archive/brochures/",
  },
  {
    id: "health-disease-code",
    title: "Health-Disease (HS) Code",
    author: "Nursafardiyya archive",
    order: "nursafardiyya",
    language: "English",
    century: "21st",
    format: "Article",
    topic: "Wellness codes",
    description: "A 2024 archive item listed under Nursafardiyya healing materials.",
    tags: ["health-disease", "codes", "wellness"],
    source: "Official Nursafardiyya site.",
    href: "https://nursafardiyya.com/en/",
  },
  {
    id: "information-cell-code",
    title: "Information Cell-Code",
    author: "Nursafardiyya archive",
    order: "nursafardiyya",
    language: "English",
    century: "21st",
    format: "Article",
    topic: "Wellness codes",
    description: "A 2024 archive item listed in Nursafardiyya healing materials.",
    tags: ["cell-code", "information", "wellness"],
    source: "Official Nursafardiyya site.",
    href: "https://nursafardiyya.com/en/",
  },
];

export const silsilaNodes: SilsilaNode[] = [
  {
    id: "ahmad-yasawi",
    name: "Ahmad Yasawi",
    dates: "c. 1093-1166",
    place: "Yasi / Turkistan",
    order: "Yasaviyya",
    x: 36,
    y: 30,
    note: "Founder of the Turkic Sufi poetic and communal dhikr current.",
  },
  {
    id: "yusuf-hamadani",
    name: "Yusuf Hamadani",
    dates: "1048-1140",
    place: "Merv / Bukhara",
    order: "Khwajagan seed",
    x: 18,
    y: 52,
    note: "A bridge master whose students shaped the Yasaviyya and Khwajagan-Naqshbandi streams.",
  },
  {
    id: "ghujdawani",
    name: "Abd al-Khaliq Ghujdawani",
    dates: "d. 1179",
    place: "Ghujduwan",
    order: "Khwajagan",
    x: 39,
    y: 62,
    note: "Codifier of the Khwajagan principles inherited by the Naqshbandiyya.",
  },
  {
    id: "najm-kubra",
    name: "Najm al-Din Kubra",
    dates: "1145-1221",
    place: "Khwarazm",
    order: "Kubrawiyya",
    x: 50,
    y: 48,
    note: "Founder of the Kubrawiyya, known for visionary discipline and colored lights.",
  },
  {
    id: "bahauddin",
    name: "Bahauddin Naqshband",
    dates: "1318-1389",
    place: "Bukhara",
    order: "Naqshbandiyya",
    x: 62,
    y: 66,
    note: "Eponym of the Naqshbandi path of silent engraved remembrance.",
  },
  {
    id: "khwaja-ahrar",
    name: "Khwaja Ahrar",
    dates: "1404-1490",
    place: "Samarkand",
    order: "Naqshbandiyya",
    x: 76,
    y: 59,
    note: "Timurid-era master of social ethics, waqf, and public influence.",
  },
  {
    id: "nursafardiyya",
    name: "Nursafardiyya",
    dates: "Contemporary",
    place: "Uzbekistan",
    order: "Contemporary Sufi school",
    x: 84,
    y: 36,
    note: "A living Uzbek tradition presenting Ilahism, Zikr, Sema, breath, healing, and martial arts.",
  },
];

export const silsilaLinks: SilsilaLink[] = [
  { from: "ahmad-yasawi", to: "nursafardiyya", label: "Yassaviyya living practice context" },
  { from: "yusuf-hamadani", to: "ahmad-yasawi", label: "Yasavi stream" },
  { from: "yusuf-hamadani", to: "ghujdawani", label: "Khwajagan stream" },
  { from: "ghujdawani", to: "bahauddin", label: "silent dhikr inheritance" },
  { from: "bahauddin", to: "khwaja-ahrar", label: "Naqshbandi social flowering" },
];
