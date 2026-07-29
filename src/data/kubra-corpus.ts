export type KubraWork = {
  title: string;
  transliteration: string;
  archiveLabel?: string;
  form: string;
  focus: string;
  description: string;
  status: "Securely attested" | "Title mapping under review";
};

export const kubraWorks: KubraWork[] = [
  {
    title: "Fawāʾiḥ al-Jamāl wa Fawātiḥ al-Jalāl",
    transliteration: "The Fragrances of Beauty and the Openings of Majesty",
    archiveLabel: "Fragrances of Beauty and Openings of Majesty",
    form: "Visionary treatise",
    focus: "Inner lights, images, and the discernment of spiritual states",
    description:
      "Kubra's best-known work is a disciplined reading of inner experience. Colours, forms, celestial signs, fear, beauty, and light are treated as signs requiring interpretation, never as spiritual trophies to be pursued.",
    status: "Securely attested",
  },
  {
    title: "al-Uṣūl al-ʿAshara",
    transliteration: "The Ten Principles",
    archiveLabel: "Treatise on the Path to God",
    form: "Practical manual",
    focus: "Voluntary death, ethical transformation, and the ordered path",
    description:
      "A concise map of transformation through repentance, renunciation, trust, contentment, retreat, remembrance, turning to God, patience, watchfulness, and acceptance of the divine decree.",
    status: "Securely attested",
  },
  {
    title: "Ādāb al-Murīdīn",
    transliteration: "The Courtesies of the Seekers",
    form: "Ethical guidance",
    focus: "The conduct of the disciple and the discipline of companionship",
    description:
      "A work of Sufi adab: the path is carried through manners, responsibility, humility, and the patient education of desire, rather than through extraordinary experiences alone.",
    status: "Securely attested",
  },
  {
    title: "Risāla ilā al-Ḥāʾim al-Khāʾif min Lawmat al-Lāʾim",
    transliteration: "Epistle to the Wandering, Fearful One Who Fears Blame",
    archiveLabel: "The Perplexed Seeker",
    form: "Short epistle",
    focus: "Fear, bewilderment, and steadfastness under blame",
    description:
      "A compact counsel for the seeker caught between longing, fear, and the pressure of public judgement. The archive's English label is useful, but the Arabic title remains the safer cataloguing anchor.",
    status: "Securely attested",
  },
  {
    title: "Risālat al-Sāʾir al-Ḥāʾir ilā al-Sātir al-Wāḥid al-Mājid",
    transliteration: "Epistle of the Perplexed Traveller to the Veiled, One, Glorious",
    archiveLabel: "Path of the Seekers",
    form: "Short epistle",
    focus: "The seeker's movement through bewilderment toward God",
    description:
      "This work belongs to Kubra's compact teaching texts. Its language of travelling and bewilderment offers a counterweight to simplistic ideas of linear spiritual progress.",
    status: "Securely attested",
  },
  {
    title: "Kitāb Ādāb al-Sulūk ilā Ḥaḍrat Mālik al-Mulk wa Mālik al-Mulūk",
    transliteration: "The Courtesies of Journeying to the Presence of the King of Dominion",
    form: "Treatise on the path",
    focus: "Conduct on the journey to God",
    description:
      "A treatise centred on adab in sulūk: spiritual travel is understood as a re-formation of conduct before it is a language of private feeling.",
    status: "Securely attested",
  },
  {
    title: "Ādāb al-Ṣūfiyya",
    transliteration: "The Courtesies of the Sufis",
    archiveLabel: "Commentary on the Treatise of Spiritual Knowledge",
    form: "Ethical treatise",
    focus: "Sufi manners and formation",
    description:
      "The local archive preserves a related English-labelled document. Its exact relation to this Arabic title, and whether it is a translation, commentary, or parallel witness, should be settled during manuscript collation.",
    status: "Title mapping under review",
  },
];

export const kubraPrinciples = [
  ["01", "Repentance", "A chosen return to God rather than a merely forced return at death."],
  ["02", "Renunciation", "Loosening the hold of possession, status, and appetite on the heart."],
  ["03", "Trust", "Entrusting oneself to God without turning passivity into a virtue."],
  ["04", "Contentment", "Reducing the demands through which the self tries to rule."],
  ["05", "Seclusion", "Making protected space for the heart to become truthful."],
  [
    "06",
    "Constant remembrance",
    "Sustaining dhikr until attention is gathered rather than scattered.",
  ],
  ["07", "Turning toward God", "Giving the whole direction of one's being to the divine presence."],
  ["08", "Patience", "Remaining faithful through the labour of remaking the self."],
  ["09", "Watchfulness", "Keeping the heart awake before divine grace and one's own intention."],
  ["10", "Satisfaction", "Receiving the divine decree without the ego's habitual objection."],
] as const;

export const kubraPhilosophy = [
  {
    title: "The path is a voluntary death",
    body: "The Ten Principles repeatedly compare the seeker’s work to dying before death: not a rejection of life, but the unmaking of the ego’s claim to be the centre of life.",
  },
  {
    title: "Light requires discernment",
    body: "Kubra’s coloured lights are not a spectacle or a diagnosis. Inner images are to be tested through worship, ethical conduct, guidance, and sobriety.",
  },
  {
    title: "Adab carries knowledge",
    body: "For Kubra, spiritual knowledge cannot be separated from how one speaks, receives correction, keeps company, and bears responsibility for another person.",
  },
  {
    title: "Bewilderment is not failure",
    body: "His shorter epistles make room for the perplexed traveller. The path may deepen through fear, unknowing, and the loss of easy certainty.",
  },
] as const;

export const kubraCorpusNote =
  "The Atlas distinguishes titles established in scholarly bibliographies from practical archive labels. Local files are being collated against Arabic and Persian witnesses before they are presented as complete critical editions or direct English translations.";
