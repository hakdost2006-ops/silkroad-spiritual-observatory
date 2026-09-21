import { nursafardiyyaKnowledgeDirections } from "./nursafardiyya-knowledge";
import { nursafardiyyaUzbekBooks, type NursafardiyyaUzbekBook } from "./nursafardiyya-uzbek-books";

export type TranslationStatus =
  | "Selected for translation"
  | "Source preparation"
  | "Editorial brief ready"
  | "Opening chapter translated"
  | "Glossary in development"
  | "English overview in development"
  | "Editorial review";

export type TranslationPriority = "Phase 1" | "Phase 2" | "Phase 3" | "Phase 4";

export type TranslationProject = {
  slug: string;
  title: string;
  englishTitle: string;
  focus: string;
  priority: TranslationPriority;
  status: TranslationStatus;
  rationale: string;
  websiteRole: string;
  sourceBookIds: string[];
  directionIds: string[];
  glossarySeeds: string[];
  translationPlan: string[];
  publicModules: string[];
};

const bookById = new Map(nursafardiyyaUzbekBooks.map((book) => [book.id, book]));
const directionById = new Map(
  nursafardiyyaKnowledgeDirections.map((direction) => [direction.id, direction]),
);

export const translationProjects: TranslationProject[] = [
  {
    slug: "nursafardiyya-nafasiyoti",
    title: "Nursafardiyya nafasiyoti",
    englishTitle: "Nursafardiyya Respiration",
    focus: "Breath, zikr, attention, and embodied method",
    priority: "Phase 1",
    status: "Selected for translation",
    rationale:
      "Respiration should become the first English foundation because breath connects zikr, meditation, healing, movement, and Zurmergan martial discipline.",
    websiteRole:
      "This pilot book will define the portal's vocabulary for breathwork and become the model for every later translated book page.",
    sourceBookIds: ["nafasiyoti-lat", "nafasiyoti-cyr"],
    directionIds: ["respiration", "meditation-zikr"],
    glossarySeeds: ["nafas", "zikr", "tafakkur", "ruhiy quvvat", "ichki e'tibor"],
    translationPlan: [
      "Extract text from the Latin Uzbek and Cyrillic Uzbek PDFs.",
      "Create a chapter-level English summary before attempting polished translation.",
      "Build a breath glossary with Uzbek, transliteration, literal meaning, and portal-safe English usage.",
      "Translate the opening section as the pilot excerpt.",
      "Review safety language so the page presents cultural and spiritual material responsibly.",
    ],
    publicModules: [
      "Book overview",
      "Breath glossary",
      "Chapter map",
      "Selected English excerpts",
      "Practice boundaries",
    ],
  },
  {
    slug: "sufiy-tabobati",
    title: "So'fiy tabobati",
    englishTitle: "Sufi Medicine",
    focus: "Traditional wellness, healing vocabulary, herbs, and cultural medicine",
    priority: "Phase 2",
    status: "Opening chapter translated",
    rationale:
      "Medicine should follow respiration because it is one of Nursafardiyya's most active public fields and needs careful English framing.",
    websiteRole:
      "This book will anchor the Sufi Medicine section with cultural context, glossary, and clear non-medical-advice boundaries.",
    sourceBookIds: ["sufiy-tabobati-lat", "sufiy-tabobati-cyr"],
    directionIds: ["medicine", "cleanliness", "lifestyle"],
    glossarySeeds: ["tabobat", "shifo", "dorivor o'tlar", "mijoz", "sog'liq"],
    translationPlan: [
      "Use the prepared Latin Uzbek text as the primary source and the Cyrillic Uzbek edition as a cross-check.",
      "Translate the cultural, historical, and philosophical chapters before practical wellness material.",
      "Build a safety-reviewed glossary for healing terms.",
      "Publish a public overview before translating procedural passages in full.",
      "Send all diagnosis, remedy, herbal, and disease-treatment claims through medical and editorial review before publication.",
    ],
    publicModules: [
      "Medicine overview",
      "Healing glossary",
      "Herbal and wellness index",
      "Cultural context",
      "Safety notes",
    ],
  },
  {
    slug: "nursafardiyya-sufiy-jang-sanati",
    title: "Nursafardiyya so'fiy jang san'ati",
    englishTitle: "Nursafardiyya Sufi Martial Art",
    focus: "Zurmergan, movement, discipline, service, and embodied vigilance",
    priority: "Phase 3",
    status: "Source preparation",
    rationale:
      "The martial arts book should follow breathing and medicine so Zurmergan can be explained through breath, discipline, ethics, and safety.",
    websiteRole:
      "This book will become the main English gateway into Zurmergan before the illustrated manual and movement levels are translated.",
    sourceBookIds: ["sufiy-jang-sanati-lat", "sufiy-jang-sanati-cyr"],
    directionIds: ["martial-arts", "movement-system", "choreography-dance"],
    glossarySeeds: ["jang san'ati", "Zo'rmergan", "harakat", "quvvat", "ustoz"],
    translationPlan: [
      "Extract the Latin and Cyrillic Uzbek editions.",
      "Identify teacher, practice, safety, and movement vocabulary.",
      "Create a Zurmergan glossary shared with the illustrated manual.",
      "Translate the introduction and any historical framing first.",
      "Move technical movement material into visual cards after editorial review.",
    ],
    publicModules: [
      "Zurmergan primer",
      "Movement glossary",
      "Lineage and teacher notes",
      "Safety boundaries",
      "Visual practice cards",
    ],
  },
  {
    slug: "zurmergan-illustrated-introduction",
    title: "So'fiyona Zo'rmergan jang san'atlari rasmlarda. Kirish qismi",
    englishTitle: "Zurmergan Sufi Martial Arts in Pictures",
    focus: "Illustrated movement, visual plates, posture vocabulary, and training sequence",
    priority: "Phase 4",
    status: "English overview in development",
    rationale:
      "The illustrated Zurmergan book is visually powerful, but it should come after the core martial vocabulary is established.",
    websiteRole:
      "This book can become the first richly visual translation module with image plates, captions, and careful practice boundaries.",
    sourceBookIds: ["zurmergan-pictures-lat", "zurmergan-pictures-cyr"],
    directionIds: ["martial-arts", "movement-system", "choreography-dance"],
    glossarySeeds: ["rasmlar", "kirish", "holat", "nafas", "harakat tizimi"],
    translationPlan: [
      "Inventory pages, captions, and visual plates.",
      "Translate captions and section headings before full prose.",
      "Build a visual glossary of postures and movement terms.",
      "Connect plates to the main Zurmergan primer.",
      "Publish only contextual and educational material until practice notes are reviewed.",
    ],
    publicModules: [
      "Plate inventory",
      "Caption translations",
      "Visual glossary",
      "Movement sequence map",
      "Practice boundaries",
    ],
  },
];

export function getTranslationProject(slug: string) {
  return translationProjects.find((project) => project.slug === slug);
}

export function getProjectBooks(project: TranslationProject): NursafardiyyaUzbekBook[] {
  return project.sourceBookIds
    .map((id) => bookById.get(id))
    .filter((book): book is NursafardiyyaUzbekBook => Boolean(book));
}

export function getProjectDirections(project: TranslationProject) {
  return project.directionIds
    .map((id) => directionById.get(id))
    .filter((direction): direction is NonNullable<ReturnType<typeof directionById.get>> =>
      Boolean(direction),
    );
}

export const translationPipeline = [
  "Source edition",
  "Text preparation",
  "Uzbek collation",
  "Terminology glossary",
  "English overview",
  "Literary translation",
  "Editorial review",
  "Public reading page",
];
