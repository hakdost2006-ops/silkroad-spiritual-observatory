export type LineageEvidence =
  | "traditional-memory"
  | "early-tradition"
  | "documented"
  | "scholarly-reconstruction"
  | "modern-community";

export type LineageView = "formation" | "networks" | "afterlives";

export type LineageNode = {
  id: string;
  name: string;
  dates: string;
  place: string;
  phase: LineageView;
  summary: string;
  evidence: LineageEvidence;
  masterSlug?: string;
  sourceRefs: string[];
};

export type LineageSequence = {
  id: string;
  view: LineageView;
  eyebrow: string;
  title: string;
  description: string;
  nodes: string[];
  relationship: string;
};

export const evidenceLabels: Record<LineageEvidence, { label: string; description: string }> = {
  "traditional-memory": {
    label: "Traditional silsila",
    description: "Devotional lineage memory; not automatically direct physical discipleship.",
  },
  "early-tradition": {
    label: "Early tradition",
    description: "Formative Khwajagan or Naqshbandi report whose recension still matters.",
  },
  documented: {
    label: "Documented network",
    description: "Supported by correspondence, near-contemporary writing, or converging evidence.",
  },
  "scholarly-reconstruction": {
    label: "Scholarly reconstruction",
    description: "A modern historical synthesis made from several witnesses.",
  },
  "modern-community": {
    label: "Community account",
    description: "A living community's own description of lineage and identity.",
  },
};

export const naqshbandiLineageNodes: LineageNode[] = [
  {
    id: "prophetic-ancestry",
    name: "Prophetic and Companion ancestry",
    dates: "7th century",
    place: "Mecca, Medina, and the early Islamic world",
    phase: "formation",
    summary:
      "Naqshbandi silsilas begin with the Prophet Muhammad and usually pass through Abu Bakr; the Atlas presents this as sacred lineage memory, not a modern institutional chart.",
    evidence: "traditional-memory",
    sourceRefs: ["W07"],
  },
  {
    id: "eastern-chain",
    name: "The eastern contemplative chain",
    dates: "8th-11th centuries",
    place: "Khurasan and the Iranian east",
    phase: "formation",
    summary:
      "Later lineages remember figures including Ja'far al-Sadiq, Bayazid Bistami, Abu al-Hasan Kharaqani, and Abu Ali Farmadi as the spiritual ancestry of the Khwajagan.",
    evidence: "traditional-memory",
    sourceRefs: ["W07", "R01"],
  },
  {
    id: "yusuf-hamadani",
    name: "Yusuf Hamadani",
    dates: "1048/49-1140",
    place: "Merv and Transoxiana",
    phase: "formation",
    summary:
      "A scholar and ascetic remembered as a hinge between Khurasani teaching and the later Yasawi and Khwajagan inheritances.",
    evidence: "early-tradition",
    masterSlug: "yusuf-hamadani",
    sourceRefs: ["W07", "DWS"],
  },
  {
    id: "abd-al-khaliq",
    name: "Abd al-Khaliq Ghijduwani",
    dates: "12th-early 13th century; chronology disputed",
    place: "Ghijduwan, Bukhara oasis",
    phase: "formation",
    summary:
      "Remembered as the formative Khwajagan teacher of silent remembrance and the first cluster of disciplined principles.",
    evidence: "early-tradition",
    masterSlug: "abd-al-khaliq-ghujdawani",
    sourceRefs: ["W07", "R01", "DWS"],
  },
  {
    id: "arif-riwgari",
    name: "Arif Riwgari",
    dates: "12th-13th century",
    place: "Rewgar, Bukhara region",
    phase: "formation",
    summary:
      "A less documented master whose place in the chain is preserved chiefly through later Khwajagan biographical tradition.",
    evidence: "early-tradition",
    masterSlug: "arif-riwgari",
    sourceRefs: ["W07", "R01"],
  },
  {
    id: "mahmud-faghnawi",
    name: "Mahmud Anjir Faghnawi",
    dates: "13th century; traditional chronology",
    place: "Faghnawi, Bukhara region",
    phase: "formation",
    summary:
      "Remembered as a potter and teacher in the Bukhara oasis; later sources debate audible and silent remembrance around his legacy.",
    evidence: "early-tradition",
    masterSlug: "mahmud-faghnawi",
    sourceRefs: ["W07", "R01"],
  },
  {
    id: "ali-ramitani",
    name: "Ali Ramitani",
    dates: "13th-early 14th century; chronology disputed",
    place: "Ramitan and Khwarazm",
    phase: "formation",
    summary:
      "Known as Azizan, he stands in later memory at a point where the Bukhara chain also moved through Khwarazmian space.",
    evidence: "early-tradition",
    masterSlug: "azizan-ali-ramitani",
    sourceRefs: ["W07", "R01"],
  },
  {
    id: "baba-samasi",
    name: "Muhammad Baba Samasi",
    dates: "d. 1354",
    place: "Samas, Bukhara oasis",
    phase: "formation",
    summary:
      "Later biographies place him immediately before Amir Kulal and connect him with the young Baha al-Din through a remembered prediction.",
    evidence: "early-tradition",
    masterSlug: "muhammad-baba-samasi",
    sourceRefs: ["W07", "R01"],
  },
  {
    id: "amir-kulal",
    name: "Sayyid Amir Kulal",
    dates: "d. 1370",
    place: "Sukhar, Bukhara oasis",
    phase: "formation",
    summary:
      "Baha al-Din's principal human teacher in early Naqshbandi memory, linking village companionship, craft, and spiritual formation.",
    evidence: "early-tradition",
    masterSlug: "sayyid-amir-kulal",
    sourceRefs: ["W07", "R01", "T08"],
  },
  {
    id: "baha-al-din",
    name: "Baha al-Din Naqshband",
    dates: "1318-1389",
    place: "Qasr-i Arifan, Bukhara",
    phase: "networks",
    summary:
      "The eponymous master around whom an older Khwajagan inheritance became a durable devotional and social formation.",
    evidence: "early-tradition",
    masterSlug: "bahauddin-naqshband",
    sourceRefs: ["W07", "P98", "R01", "T08"],
  },
  {
    id: "ala-al-din-attar",
    name: "Ala al-Din Attar",
    dates: "d. 1400",
    place: "Bukhara and Chaghaniyan",
    phase: "networks",
    summary:
      "A son-in-law and leading successor whose circle carried one major line beyond Baha al-Din's death.",
    evidence: "early-tradition",
    sourceRefs: ["W07", "P98", "R01"],
  },
  {
    id: "muhammad-parsa",
    name: "Muhammad Parsa",
    dates: "d. 1420",
    place: "Bukhara, Balkh, and the pilgrimage roads",
    phase: "networks",
    summary:
      "A scholar, author, and disciple whose writings helped turn remembered teaching into a textual tradition.",
    evidence: "early-tradition",
    sourceRefs: ["W07", "P98", "FK"],
  },
  {
    id: "yaqub-charkhi",
    name: "Yaqub Charkhi",
    dates: "d. 1447",
    place: "Charkh, Hisar, and Transoxiana",
    phase: "networks",
    summary:
      "A commentator and teacher whose line became central to the later formation around Ubayd Allah Ahrar.",
    evidence: "early-tradition",
    masterSlug: "yaqub-charkhi",
    sourceRefs: ["W07", "P98", "R01"],
  },
  {
    id: "nizam-khamush",
    name: "Nizam al-Din Khamush",
    dates: "15th century; chronology under review",
    place: "Samarkand and the Herat teaching current",
    phase: "networks",
    summary:
      "A transmitter through Attar whose line helped connect the early Naqshbandi circles with Timurid Herat.",
    evidence: "scholarly-reconstruction",
    sourceRefs: ["W07", "P98"],
  },
  {
    id: "sad-kashghari",
    name: "Sa'd al-Din Kashghari",
    dates: "d. 1456",
    place: "Herat",
    phase: "networks",
    summary:
      "A Herat master whose companionship shaped Jami's Sufi formation and the literary memory of the order.",
    evidence: "documented",
    sourceRefs: ["W07", "JAMI"],
  },
  {
    id: "ubayd-allah-ahrar",
    name: "Ubayd Allah Ahrar",
    dates: "1404-1490",
    place: "Tashkent and Samarkand",
    phase: "networks",
    summary:
      "A major Timurid master whose letters show spiritual authority working through mediation, property, patronage, and public responsibility.",
    evidence: "documented",
    masterSlug: "khwaja-ahrar",
    sourceRefs: ["W07", "GU02", "P98"],
  },
  {
    id: "jami",
    name: "Abd al-Rahman Jami",
    dates: "1414-1492",
    place: "Herat",
    phase: "networks",
    summary:
      "Poet, scholar, and biographer whose work made Naqshbandi memory part of the Persian literary world.",
    evidence: "documented",
    masterSlug: "abd-al-rahman-jami",
    sourceRefs: ["W07", "JAMI"],
  },
  {
    id: "muhammad-qazi",
    name: "Muhammad Qazi",
    dates: "d. 1515/16",
    place: "Samarkand and Transoxiana",
    phase: "afterlives",
    summary:
      "A leading successor of Ahrar whose network became a bridge into the sixteenth-century Dahbid formation.",
    evidence: "scholarly-reconstruction",
    sourceRefs: ["W07", "R01"],
  },
  {
    id: "makhdum-azam",
    name: "Ahmad Kasani, Makhdum-i A'zam",
    dates: "1461/62-1542/43",
    place: "Kasansay, Ferghana, and Dahbid",
    phase: "afterlives",
    summary:
      "A prolific Central Asian master whose descendants and deputies shaped several later Dahbidi and East Turkistan lines.",
    evidence: "scholarly-reconstruction",
    sourceRefs: ["W07"],
  },
  {
    id: "mujaddidi-bridge",
    name: "Central Asian transmission to India",
    dates: "15th-16th centuries",
    place: "Transoxiana, Kabul, and North India",
    phase: "afterlives",
    summary:
      "The current Atlas compresses several intervening masters here until the primary chain and letter evidence are fully mapped.",
    evidence: "scholarly-reconstruction",
    sourceRefs: ["W07", "B98", "F71"],
  },
  {
    id: "baqi-billah",
    name: "Baqi Billah",
    dates: "1564-1603",
    place: "Kabul and Delhi",
    phase: "afterlives",
    summary:
      "A Central Asian-trained master in Delhi whose teaching prepared the formation later called the Mujaddidiyya.",
    evidence: "documented",
    sourceRefs: ["W07", "B98", "F71"],
  },
  {
    id: "ahmad-sirhindi",
    name: "Ahmad Sirhindi",
    dates: "1564-1624",
    place: "Sirhind, Mughal India",
    phase: "afterlives",
    summary:
      "Known as the Renewer of the Second Millennium, he gave the Indian Naqshbandiyya a powerful theological and epistolary form.",
    evidence: "documented",
    sourceRefs: ["W07", "B98", "F71"],
  },
  {
    id: "later-mujaddidi",
    name: "Later Mujaddidi networks",
    dates: "17th-19th centuries",
    place: "India, Afghanistan, Central Asia, and China",
    phase: "afterlives",
    summary:
      "Descendants and deputies carried Mujaddidi authority across courts, towns, frontier regions, and scholarly families; this is a network, not a single road.",
    evidence: "scholarly-reconstruction",
    sourceRefs: ["Z21", "B98", "W07"],
  },
  {
    id: "khalid-baghdadi",
    name: "Khalid al-Baghdadi",
    dates: "1779-1827",
    place: "Delhi, Baghdad, and Damascus",
    phase: "afterlives",
    summary:
      "A disciple of Shah Ghulam Ali whose Khalidiyya became a major westward expansion of Mujaddidi inheritance.",
    evidence: "documented",
    sourceRefs: ["W07", "B98"],
  },
  {
    id: "golden-sufi-center",
    name: "Golden Sufi Center",
    dates: "Contemporary community",
    place: "Europe and North America",
    phase: "afterlives",
    summary:
      "A contemporary community that presents its work as a Naqshbandiyya-Mujaddidiyya continuation through Irina Tweedie and Llewellyn Vaughan-Lee.",
    evidence: "modern-community",
    sourceRefs: ["GSC"],
  },
];

export const naqshbandiLineageSequences: LineageSequence[] = [
  {
    id: "remembered-ancestry",
    view: "formation",
    eyebrow: "Sacred memory",
    title: "Before the Khwajagan name",
    description:
      "The silsila places the Bukhara path within Islam's Prophetic and eastern contemplative inheritance. These links carry devotional authority even where direct historical contact cannot be tested.",
    nodes: ["prophetic-ancestry", "eastern-chain", "yusuf-hamadani"],
    relationship: "Remembered spiritual ancestry",
  },
  {
    id: "khwajagan-formation",
    view: "formation",
    eyebrow: "Bukhara oasis",
    title: "The Khwajagan chain",
    description:
      "A village-and-city constellation remembered through companionship, craft, remembrance, and disciplined presence. The missing early Persian witnesses remain the decisive research gate.",
    nodes: [
      "abd-al-khaliq",
      "arif-riwgari",
      "mahmud-faghnawi",
      "ali-ramitani",
      "baba-samasi",
      "amir-kulal",
      "baha-al-din",
    ],
    relationship: "Formative teaching chain in early tradition",
  },
  {
    id: "first-generation",
    view: "networks",
    eyebrow: "After 1389",
    title: "One master, several living circles",
    description:
      "Baha al-Din's legacy did not pass through only one administrative successor. Attar, Parsa, Charkhi, and other companions carried distinct but overlapping forms of teaching, writing, and service.",
    nodes: ["baha-al-din", "ala-al-din-attar", "muhammad-parsa", "yaqub-charkhi"],
    relationship: "Companionship, teaching, and first-generation succession",
  },
  {
    id: "timurid-expansion",
    view: "networks",
    eyebrow: "Timurid world",
    title: "Samarkand, Herat, and public life",
    description:
      "Two especially influential currents appear here: Charkhi's line to Ahrar, and the Herat line through Kashghari into Jami's literary world.",
    nodes: ["yaqub-charkhi", "ubayd-allah-ahrar"],
    relationship: "Documented and reconstructed teaching networks",
  },
  {
    id: "herat-network",
    view: "networks",
    eyebrow: "Herat",
    title: "A literary and contemplative circle",
    description:
      "The Herat line is distinguished from Ahrar's Samarkand network: Attar, Khamush, Kashghari, and Jami belong to a separate teaching and literary current.",
    nodes: ["ala-al-din-attar", "nizam-khamush", "sad-kashghari", "jami"],
    relationship: "Teaching and literary affiliation",
  },
  {
    id: "dahbid-branch",
    view: "afterlives",
    eyebrow: "Central Asian continuation",
    title: "From Ahrar to Dahbid",
    description:
      "Ahrar's network continued through Muhammad Qazi into the prolific teaching world of Ahmad Kasani. Its later lines reached Ferghana, Kashgar, and competing East Turkistan formations.",
    nodes: ["ubayd-allah-ahrar", "muhammad-qazi", "makhdum-azam"],
    relationship: "Branch transmission; primary corpus still under acquisition",
  },
  {
    id: "mujaddidi-khalidi",
    view: "afterlives",
    eyebrow: "Transregional renewal",
    title: "Mujaddidi and Khalidi roads",
    description:
      "The path moved through Central Asian, Afghan, and Indian networks before Baqi Billah and Ahmad Sirhindi. Later Mujaddidi lines returned north and travelled west through Khalid al-Baghdadi.",
    nodes: [
      "mujaddidi-bridge",
      "baqi-billah",
      "ahmad-sirhindi",
      "later-mujaddidi",
      "khalid-baghdadi",
    ],
    relationship: "Later branch transmission with compressed intermediaries",
  },
  {
    id: "modern-reception",
    view: "afterlives",
    eyebrow: "Living reception",
    title: "A contemporary Naqshbandiyya-Mujaddidiyya expression",
    description:
      "The Golden Sufi Center belongs in the Atlas as a modern community's account of continuity. Its teachings and books are studied on their own terms, without projecting them unchanged back into medieval Bukhara.",
    nodes: ["golden-sufi-center"],
    relationship: "Modern community account",
  },
];

export const naqshbandiLineageSources = [
  ["W07", "Itzchak Weismann, The Naqshbandiyya (2007)", "Historical synthesis and lineage tables"],
  ["P98", "Jürgen Paul, Doctrine and Organization (1998)", "First generations after Baha al-Din"],
  [
    "R01",
    "Ali Safi, Rashahat / Beads of Dew (2001 translation)",
    "Discovery witness; Persian control still required",
  ],
  ["GU02", "Gross and Urunbaev, The Letters of Khwaja Ahrar (2002)", "Documentary Timurid network"],
  ["DWS", "Devin DeWeese, studies on Central Asian Sufism", "Formation and memory criticism"],
  [
    "T08",
    "Necdet Tosun, Bahauddin Naqshband (2008 English translation)",
    "Book-length biography and source guide",
  ],
  ["JAMI", "Jami's Naqshbandi and hagiographical writings", "Herat literary and teaching network"],
  ["FK", "Muhammad Parsa, Fasl al-Khitab", "Primary text; Atlas translation in progress"],
  ["B98", "Arthur Buehler, Sufi Heirs of the Prophet (1998)", "Indian Naqshbandi authority"],
  ["F71", "Yohanan Friedmann, Shaykh Ahmad Sirhindi (1971)", "Sirhindi's thought and reception"],
  ["Z21", "Waleed Ziad, Hidden Caliphate (2021)", "Later Central and South Asian networks"],
  ["B06", "Arthur Buehler, Mawlana Khalid and Shah Ghulam Ali (2006)", "Khalidi transmission"],
  ["GSC", "Golden Sufi Center, published Golden Chain", "Modern community account"],
] as const;

export function getLineageNode(id: string) {
  return naqshbandiLineageNodes.find((node) => node.id === id);
}
