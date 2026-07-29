export type YasawiStudySection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  sourceNotes: string[];
  verse?: { reference: string; note: string; href: string };
};

export const yasawiStudySections: YasawiStudySection[] = [
  {
    id: "yasi",
    eyebrow: "01 · Yasi and Sayram",
    title: "A teacher at the meeting of steppe, city, and shrine",
    paragraphs: [
      "Ahmad Yasawi belongs to the southern steppe world of Sayram and Yasi, the city now called Turkistan. Here oasis life, caravan traffic, Turkic speech, Islamic learning, and the movement of pastoral communities met without becoming a single culture. To read Yasawi only as a poet is to miss this geography; to read him only as a saint is to miss the social work of his language. He made religious instruction memorable in a Turkic poetic form that could travel by voice, memory, and gathering.",
      "The historical outline is spare. Later accounts give a rich life: Arslan Baba, the guidance of Khizr, study in Bukhara under Yusuf Hamadani, return to Yasi, and a retreat below ground after the age traditionally associated with the Prophet's death. These accounts are not trivial embellishments. They reveal how communities understood sanctity, succession, and humility. But they belong to the devotional history of Yasawi and must not be mistaken for a contemporary biography.",
    ],
    sourceNotes: [
      "Local source inventory: primary witnesses, modern editions, and scholarship in context/research/yasawi-corpus-inventory.md.",
      "Historical and hagiographical layers are distinguished following Necdet Tosun's source guide and the 2022 Uzbek editorial introduction.",
    ],
  },
  {
    id: "voice",
    eyebrow: "02 · Hikmat",
    title: "Wisdom that could be remembered aloud",
    paragraphs: [
      "A hikmat is not merely a wise saying. In the Yasawi world it is a compact spiritual poem, made to be heard, learned, recited, and carried into ordinary life. Its language is direct but never simple-minded. The poem draws the listener toward repentance, mercy for the poor, attachment to the Prophet, the discipline of worship, and an unsparing knowledge of the self.",
      "The crucial literary achievement is not that Persian and Arabic learning are abandoned. They are translated into a Turkic acoustic world. Qur'anic and hadith language, Sufi terms, ethical admonition, and the cadence of oral poetry meet on the same line. This is why the Hikmets became a school of feeling as well as doctrine: a person could remember a verse before possessing a library.",
    ],
    verse: {
      reference: "Qur'an 16:125",
      note: "The Qur'anic command to call with wisdom and beautiful counsel gives the word hikmat its ethical horizon. The Atlas uses the reference, not a borrowed English rendering.",
      href: "https://quran.com/16/125",
    },
    sourceNotes: [
      "2022 Uzbek reader, introduction, pp. 9-13: hikmat, oral circulation, language, and ethical themes.",
      "Jonathan Trapman, “Divine Wisdom / Diwani Hikmet”: textual history and the difficulty of modern translation.",
    ],
  },
  {
    id: "corpus",
    eyebrow: "03 · Dīwān-i Hikmat",
    title: "Not one untouched book, but a living corpus",
    paragraphs: [
      "The Dīwan-i Hikmat should not be presented as though a single authorial manuscript has simply reached the present. The surviving collection comes through late manuscripts and print witnesses, copying communities, reciters, editors, and later Yasawi poets. The 1904 Kazan printing in the Atlas archive is a precious historical witness, but it is not an autograph and it does not settle the attribution of every poem it contains.",
      "This complexity does not weaken the collection. It explains its reach. For centuries, hikmats were copied by hand, learned in circles of remembrance, and expanded by communities who recognised Yasawi's voice as an ethical and spiritual measure. A rigorous edition should therefore distinguish three things: poems securely anchored in early tradition, poems carried by later Yasawi lineages, and editorial attributions that remain open questions.",
    ],
    sourceNotes: [
      "Atlas witness: 1904 Kazan Dīwān-i Hikmat printing, 622 pp., identified in the local archive.",
      "2022 Uzbek reader, introduction, pp. 9-26: later poems within the Dīwān tradition and the problem of language and attribution.",
      "Trapman and Tosun: source-critical orientation for the corpus and Yasawiyya literature.",
    ],
  },
  {
    id: "faqr",
    eyebrow: "04 · Faqr and adab",
    title: "Poverty is the discipline of not making the self a lord",
    paragraphs: [
      "Yasawi's faqr is neither romantic misery nor a refusal of work. It is the stripping away of the self's claim to mastery. The seeker learns to be truthful about appetite, status, anger, and the desire to be seen. In the Hikmets, poverty becomes a moral language: one draws near to the poor, the orphaned, and the wounded because pride cannot be healed while another person's pain remains invisible.",
      "The 2022 Uzbek introduction preserves a later portrait of Yasawi dividing his day among teaching, worship, and honest craft. Whether read as historical detail or as an idealised memory, the image tells us something fundamental about Yasawi ethics: spiritual instruction is not an escape from labor, service, or social obligation. The path is tested in conduct.",
    ],
    sourceNotes: [
      "2022 Uzbek reader, introduction, pp. 7-13: ethical teaching, work, poverty, and service.",
      "Faqrnāma is associated with the Yasawi corpus but requires independent attribution work; this study does not present it as securely authored by Yasawi.",
    ],
  },
  {
    id: "practice",
    eyebrow: "05 · Remembrance",
    title: "Dhikr, companionship, and the education of attention",
    paragraphs: [
      "Later Yasawi practice is remembered through communal loud dhikr, often described as dhikr-i arra, the remembrance of the saw. Its sound is part of its social meaning: a shared voice gathers people who may not possess formal learning into a disciplined act of recollection. The point is not volume or ecstasy as display. In the language of the tradition, remembrance should make a person more truthful, more humble, and less captive to the self.",
      "The path is also inseparable from companionship. A murid receives formation through a guide, through adab, and through the slow correction of habits. The later lists of Yasawi rules should not be projected uncritically into the twelfth century, yet they show the enduring grammar of the tradition: loyalty without self-erasure, service without spectacle, secrecy without manipulation, and a life in which inward practice becomes visible as courtesy.",
    ],
    verse: {
      reference: "Qur'an 13:28",
      note: "The well-known Qur'anic association of remembrance and a heart at rest gives dhikr its orientation; no ritual prescription is made on this page.",
      href: "https://quran.com/13/28",
    },
    sourceNotes: [
      "2022 Uzbek reader, introduction, pp. 7-8: jahri dhikr, zikr-i arra, and later descriptions of Yasawi discipline.",
      "Necdet Tosun, Yasawiyya source works: later practice manuals and the need to distinguish their dates and genres.",
    ],
  },
  {
    id: "lineage",
    eyebrow: "06 · Silsila",
    title: "A lineage remembered in more than one register",
    paragraphs: [
      "Yasawi is commonly placed in a spiritual chain leading through Yusuf Hamadani, while Arslan Baba occupies an even more intimate place in devotional memory. These names do different kinds of work. The Hamadani connection locates Yasawi among the learned Sufi networks of Transoxiana and Khurasan; Arslan Baba tells a story of blessing, early formation, and intimacy with prophetic inheritance.",
      "A responsible map should show both, but not in the same visual language. Historical affiliation, later genealogical linkage, and hagiographic memory are all part of the tradition's truth, yet they are not the same kind of claim. The Atlas will mark them differently in its Silsila map so readers can see where evidence is firm, where tradition is strong, and where the sources remain late or contested.",
    ],
    sourceNotes: [
      "Local corpus inventory: proposed evidence hierarchy for historical, hagiographical, and genealogical material.",
      "Yasawi profiles in the Atlas retain Arslan Baba explicitly as a traditional account.",
    ],
  },
  {
    id: "mausoleum",
    eyebrow: "07 · Turkistan",
    title: "The mausoleum as a book of stone and memory",
    paragraphs: [
      "The tomb at Turkistan is not a neutral container for Yasawi's memory. Timur's vast late fourteenth-century mausoleum made the grave a monumental centre of pilgrimage, political imagination, craftsmanship, and sacred geography. Its scale tells us that Yasawi's authority had become more than local: the master of Yasi had become Hazrat Sultan, a point of orientation across the Turkic world.",
      "Yet the shrine should not turn the teacher into a monument alone. Pilgrimage is an act of reading through place. The visitor meets a grave, a city, a soundscape, craft, recitation, family memory, and the ongoing question of what it means to inherit a saint. The page therefore holds the Timurid building and the earlier teacher together, without allowing either to erase the other.",
    ],
    sourceNotes: [
      "UNESCO, Mausoleum of Khoja Ahmed Yasawi: monument history and World Heritage documentation.",
      "Yasawi Studies 01 / Azret Sultan: current scholarship on shrine, heritage, and the Turkistan landscape.",
    ],
  },
  {
    id: "afterlife",
    eyebrow: "08 · Afterlife",
    title: "Why Yasawi continues to speak",
    paragraphs: [
      "Yasawi's afterlife reaches from Central Asia into the Volga region, Anatolia, and the wider Turkic Muslim imagination. But influence should not be reduced to an arrow drawn from one order to another. It travels through recitation, wandering dervishes, local teachers, manuscripts, shrines, translations, family memory, and the durable desire to hear religious language in one's own tongue.",
      "For the Silk Road Sufi Atlas, Yasawi is therefore a beginning rather than a finished chapter. The task is to make the sources visible, publish translations with their witnesses named, and let the Hikmets remain poems: not slogans of heritage, not anonymous folklore, but difficult invitations to mercy, truthfulness, humility, and love of the Prophet.",
    ],
    sourceNotes: [
      "Köprülü, *Early Mystics in Turkish Literature*, read as foundational historiography rather than final authority.",
      "Atlas Yasawi corpus inventory: Russian, Uzbek, historical Turkic, and scholarly materials held in the local archive.",
    ],
  },
];

export const yasawiStudySources = [
  {
    title: "The historical Turkic witness",
    body: "The Atlas archive holds the 1904 Kazan printing of Dīwān-i Hikmat, a 622-page historical Turkic / Chagatai witness. It is the base text for witness-aware translation work, not an autograph or a guarantee of single authorship.",
  },
  {
    title: "Uzbek editorial witness",
    body: "The 2022 O'zbekiston volume, *Xoja Ahmad Yassaviy; Sulaymon Boqirg'oniy*, provides a rich Uzbek introduction and a large selection of hikmats. Its introduction explicitly warns that later Yasawi poets entered the circulating Dīwān tradition.",
  },
  {
    title: "Russian reading witness",
    body: "The local Russian *Hodzha Ahmet Jassavi. Hikmety* and related Russian collections are retained for comparative reading and reception history. Their editors and publication details must be documented before they are used as a critical base text.",
  },
  {
    title: "Source-critical scholarship",
    body: "Necdet Tosun on Yasawiyya sources; Jonathan Trapman on Dīwān-i Hikmat; the Azret Sultan Yasawi Studies volume; and Köprülü's classic study, read with its historiographical limits in view.",
  },
] as const;
