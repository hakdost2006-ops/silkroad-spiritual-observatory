import { qatronDirections } from "./nursafardiyya";
import { nursafardiyyaUzbekBooks, type NursafardiyyaUzbekBook } from "./nursafardiyya-uzbek-books";

type TranslationPriority =
  "Core English portal" | "Visual manual" | "Scholarly layer" | "Source mapping in progress";

type KnowledgeDirectionSeed = {
  id: string;
  title: string;
  designIntent: string;
  portalQuestion: string;
  translationPriority: TranslationPriority;
  bookIds: string[];
  englishModules: string[];
};

export type NursafardiyyaKnowledgeDirection = KnowledgeDirectionSeed & {
  number: number;
  qatronDescription: string;
  books: NursafardiyyaUzbekBook[];
};

const directionSeeds: KnowledgeDirectionSeed[] = [
  {
    id: "calligraphy",
    title: "Calligraphy",
    designIntent:
      "Present sacred writing as discipline: line, breath, memory, and Uzbek script culture.",
    portalQuestion: "How does written form train attention and spiritual memory?",
    translationPriority: "Source mapping in progress",
    bookIds: [],
    englishModules: ["Script gallery", "Terms and alphabets", "Historical writing notes"],
  },
  {
    id: "respiration",
    title: "Respiration",
    designIntent:
      "Build a breath room with safety framing, diagrams, terminology, and gradual translation of Nafasiyot.",
    portalQuestion: "How does breath become method, not just technique?",
    translationPriority: "Core English portal",
    bookIds: ["nafasiyoti-cyr", "nafasiyoti-lat"],
    englishModules: ["Breath glossary", "Practice taxonomy", "Safety and cultural framing"],
  },
  {
    id: "divine-philosophy",
    title: "Divine philosophy",
    designIntent:
      "Explain Ilahism and the Nursafardiyya worldview through readable English essays anchored in source books.",
    portalQuestion: "What worldview holds the school together?",
    translationPriority: "Core English portal",
    bookIds: [
      "tarixiy-nurli-yol-cyr",
      "tarixiy-nurli-yol-lat",
      "tafakkur-tarbiyasi-cyr",
      "tafakkur-tarbiyasi-lat",
      "ozlikni-anglash-cyr",
      "ozlikni-anglash-lat",
    ],
    englishModules: ["Ilahism primer", "Historical pathway", "Self-knowledge essays"],
  },
  {
    id: "poetry-literature",
    title: "Poetry and literature",
    designIntent:
      "Make poetry a living literary chamber with Uzbek originals, transliteration, and English rendering.",
    portalQuestion: "How does poetry carry remembrance and teaching?",
    translationPriority: "Scholarly layer",
    bookIds: ["sufiy-sheriyati-cyr", "sufiy-sheriyati-lat"],
    englishModules: ["Bilingual poems", "Glossary of images", "Yassaviyya literary context"],
  },
  {
    id: "secret-knowledge",
    title: "Secret knowledge and capabilities",
    designIntent:
      "Treat esoteric material carefully as tradition, vocabulary, and inner discipline rather than spectacle.",
    portalQuestion:
      "What should be named, what should be contextualized, and what should remain bounded?",
    translationPriority: "Scholarly layer",
    bookIds: [
      "ozlikni-anglash-cyr",
      "ozlikni-anglash-lat",
      "tafakkur-tarbiyasi-cyr",
      "tafakkur-tarbiyasi-lat",
    ],
    englishModules: ["Terminology notes", "Boundary language", "Teacher-student context"],
  },
  {
    id: "medicine",
    title: "Medicine",
    designIntent:
      "Create a traditional wellness archive with clear medical disclaimers, herb indexes, and historical context.",
    portalQuestion: "How can healing knowledge be preserved responsibly?",
    translationPriority: "Core English portal",
    bookIds: ["sufiy-tabobati-cyr", "sufiy-tabobati-lat", "chuqur-nazar-cyr", "chuqur-nazar-lat"],
    englishModules: ["Medicine overview", "Herb and method index", "Safety disclaimers"],
  },
  {
    id: "divine-books",
    title: "Divine books",
    designIntent:
      "Use the books themselves as sacred archive objects: provenance, editions, scripts, and reader pathways.",
    portalQuestion: "How should the archive guide a serious reader?",
    translationPriority: "Core English portal",
    bookIds: ["tarixiy-nurli-yol-cyr", "tarixiy-nurli-yol-lat"],
    englishModules: ["Reading order", "Edition notes", "Source trail"],
  },
  {
    id: "movement-system",
    title: "System of movements",
    designIntent:
      "Turn movement texts into visual learning pages with levels, diagrams, posture names, and source plates.",
    portalQuestion: "How does movement organize body, attention, and discipline?",
    translationPriority: "Visual manual",
    bookIds: [
      "haq-ul-yaqin-cyr",
      "haq-ul-yaqin-lat",
      "ilmal-yaqin-cyr",
      "ilmal-yaqin-lat",
      "aynal-yaqin-cyr",
      "aynal-yaqin-lat",
      "milliy-raqslar-cyr",
      "milliy-raqslar-lat",
    ],
    englishModules: ["Movement levels", "Posture cards", "Practice sequence index"],
  },
  {
    id: "music",
    title: "Music",
    designIntent:
      "Frame sound, rhythm, sama, and devotional attention with room for audio and future source material.",
    portalQuestion: "How do sound and rhythm support remembrance?",
    translationPriority: "Source mapping in progress",
    bookIds: ["milliy-raqslar-cyr", "milliy-raqslar-lat"],
    englishModules: ["Sama notes", "Rhythm vocabulary", "Audio archive plan"],
  },
  {
    id: "cleanliness",
    title: "Cleanliness",
    designIntent:
      "Present refinement, care, and outward-inward cleanliness through cosmetology and ethical discipline.",
    portalQuestion: "How does care of the body become care of the path?",
    translationPriority: "Scholarly layer",
    bookIds: ["asl-pardoz-cyr", "asl-pardoz-lat"],
    englishModules: ["Care vocabulary", "Cosmetology archive", "Inner-outer refinement"],
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
    designIntent:
      "Gather everyday conduct, education, self-knowledge, and Uzbek cultural values into practical essays.",
    portalQuestion: "What does a Nursafardiyya life look like day by day?",
    translationPriority: "Core English portal",
    bookIds: [
      "ozlikni-anglash-cyr",
      "ozlikni-anglash-lat",
      "tafakkur-tarbiyasi-cyr",
      "tafakkur-tarbiyasi-lat",
      "tarixiy-nurli-yol-cyr",
      "tarixiy-nurli-yol-lat",
    ],
    englishModules: ["Daily conduct", "Education and thought", "Uzbek cultural values"],
  },
  {
    id: "choreography-dance",
    title: "Choreography and dance",
    designIntent:
      "Build a visual section for national dances, martial games, symbolic movement, and anti-laziness teaching.",
    portalQuestion: "How does dance become disciplined remembrance?",
    translationPriority: "Visual manual",
    bookIds: ["milliy-raqslar-cyr", "milliy-raqslar-lat"],
    englishModules: ["Dance plates", "Movement vocabulary", "Cultural context"],
  },
  {
    id: "meditation-zikr",
    title: "Meditation and zikr",
    designIntent:
      "Create a contemplative room for remembrance, breath, inner attention, and teacher-guided practice.",
    portalQuestion: "How are breath, word, and attention joined?",
    translationPriority: "Core English portal",
    bookIds: ["nafasiyoti-cyr", "nafasiyoti-lat", "ozlikni-anglash-cyr", "ozlikni-anglash-lat"],
    englishModules: ["Zikr overview", "Breath and remembrance", "Practice boundaries"],
  },
  {
    id: "martial-arts",
    title: "Martial arts",
    designIntent:
      "Make Zurmergan a major visual knowledge room: lineage, levels, manuals, movement, and safety boundaries.",
    portalQuestion: "How does martial discipline become service and perfection?",
    translationPriority: "Visual manual",
    bookIds: [
      "zurmergan-pictures-cyr",
      "zurmergan-pictures-lat",
      "sufiy-jang-sanati-cyr",
      "sufiy-jang-sanati-lat",
      "haq-ul-yaqin-cyr",
      "haq-ul-yaqin-lat",
      "ilmal-yaqin-cyr",
      "ilmal-yaqin-lat",
      "aynal-yaqin-cyr",
      "aynal-yaqin-lat",
    ],
    englishModules: ["Zurmergan primer", "Level maps", "Illustrated practice plates"],
  },
];

const bookById = new Map(nursafardiyyaUzbekBooks.map((book) => [book.id, book]));

export const nursafardiyyaKnowledgeDirections: NursafardiyyaKnowledgeDirection[] =
  directionSeeds.map((seed, index) => {
    const qatronDirection = qatronDirections[index];
    return {
      ...seed,
      number: index + 1,
      qatronDescription: qatronDirection?.description ?? "",
      books: seed.bookIds
        .map((id) => bookById.get(id))
        .filter((book): book is NursafardiyyaUzbekBook => Boolean(book)),
    };
  });

const mappedBookIds = new Set(directionSeeds.flatMap((direction) => direction.bookIds));

export const nursafardiyyaKnowledgeStats = {
  directions: nursafardiyyaKnowledgeDirections.length,
  mappedBooks: mappedBookIds.size,
  totalBooks: nursafardiyyaUzbekBooks.length,
  directionsWithBooks: nursafardiyyaKnowledgeDirections.filter(
    (direction) => direction.books.length > 0,
  ).length,
  translationPriorities: Array.from(
    new Set(nursafardiyyaKnowledgeDirections.map((direction) => direction.translationPriority)),
  ),
};
