export type YasawiyyaEvidence =
  "Historical record" | "Textual tradition" | "Hagiographical memory" | "Living reception";

export type YasawiyyaJourneyChapter = {
  id: string;
  number: string;
  era: string;
  place: string;
  register: YasawiyyaEvidence;
  title: string;
  opening: string;
  paragraphs: string[];
  boundary: string;
  sources: { label: string; href?: string }[];
  visual?: "hikmet" | "mausoleum";
};

export const yasawiyyaRoute = [
  ["12th century", "A voice takes root", "Sayram · Yasi", "steppe-and-oasis"],
  ["14th century", "Communities and texts", "Turkestan · Khwarazm", "communities"],
  ["1389-1405", "The Timurid monument", "Yasi / Turkistan", "book-of-stone"],
  ["1904 & 1912", "Kazan print afterlife", "Volga-Ural", "many-afterlives"],
  ["Today", "A plural inheritance", "Central Asia · Turkic world", "many-afterlives"],
] as const;

export const yasawiyyaEvidenceKey: {
  label: YasawiyyaEvidence;
  description: string;
}[] = [
  {
    label: "Historical record",
    description: "A person, place, object, date, or institution supported by traceable evidence.",
  },
  {
    label: "Textual tradition",
    description: "A claim grounded in a named manuscript, print witness, or received corpus.",
  },
  {
    label: "Hagiographical memory",
    description:
      "A sacred account preserved by later communities, identified as such rather than rejected or literalized.",
  },
  {
    label: "Living reception",
    description: "Modern devotion, scholarship, heritage, or community self-understanding.",
  },
];

export const yasawiyyaJourney: YasawiyyaJourneyChapter[] = [
  {
    id: "steppe-and-oasis",
    number: "01",
    era: "Twelfth century",
    place: "Sayram · Yasi",
    register: "Historical record",
    title: "Where the steppe met the oasis",
    opening:
      "The Yasawiyya begins in a borderland: not at the edge of Islamic civilization, but at one of the places where its languages, peoples, and forms of life were being remade.",
    paragraphs: [
      "Ahmad Yasawi is securely associated with Yasi, the city now called Turkistan, and with a Turkic devotional inheritance carried under his name. Sayram, Yasi, Otrar, and the roads toward Khwarazm formed a world of caravan towns, cultivated oases, mobile communities, scholars, craftsmen, and reciters. Yasawi's importance lies partly in this meeting of worlds. Religious formation could be heard in a Turkic poetic voice and remembered beyond the classroom.",
      "The outline of his life is much thinner than the life preserved in devotion. His death is conventionally placed in 562/1166-67. Precise birth dates, childhood episodes, journeys, and the order of his teachers come chiefly from later sources. A responsible biography does not discard those accounts; it lets readers see what kind of witness each one is.",
    ],
    boundary:
      "The place, devotional inheritance, and later authority are well established. Detailed childhood chronology remains later tradition rather than contemporary biography.",
    sources: [
      {
        label: "Necdet Tosun, ‘Yeseviyye,’ TDV İslâm Ansiklopedisi",
        href: "https://islamansiklopedisi.org.tr/yeseviyye",
      },
      {
        label: "UNESCO, Mausoleum of Khoja Ahmed Yasawi",
        href: "https://whc.unesco.org/en/list/1103/",
      },
    ],
  },
  {
    id: "remembered-teachers",
    number: "02",
    era: "Formation remembered",
    place: "Otrar · Bukhara · Yasi",
    register: "Hagiographical memory",
    title: "A teacher remembered through teachers",
    opening:
      "Two names stand beside Yasawi in later memory, but they do not stand there in the same way: Arslan Baba bears the intimacy of sacred story; Yusuf Hamadani bears the architecture of lineage.",
    paragraphs: [
      "Arslan Baba is remembered as the bearer of an early blessing and the first guide of the young Ahmad. The famous stories join Yasawi to prophetic time and to the sacred geography of Otrar. Their historical chronology cannot be established from contemporary evidence, yet their endurance reveals how Yasawi communities imagined transmission: as trust, service, and an inheritance received before it was taught.",
      "The connection to Yusuf Hamadani became the most widely accepted lineage account and situates Yasawi within the learned Sufi networks of Khurasan and Mawarannahr. Sources also preserve competing affiliations. The Atlas therefore presents Hamadani as a powerful later lineage memory, not as proof that the Yasawiyya and Khwajagan were one institution. Their histories meet, compete, and reinterpret one another without collapsing into a single order.",
    ],
    boundary:
      "Arslan Baba belongs primarily to hagiographical memory. The Hamadani link is a widely received later silsila claim, not an uncontested contemporary teacher record.",
    sources: [
      {
        label: "Necdet Tosun, ‘Yeseviyye,’ including competing teacher reports",
        href: "https://islamansiklopedisi.org.tr/yeseviyye",
      },
      {
        label: "Devin DeWeese, ‘The Masha'ikh-i Turk and the Khojagan,’ DOI record",
        href: "https://doi.org/10.1093/jis/7.2.180",
      },
    ],
  },
  {
    id: "many-hikmets",
    number: "03",
    era: "Manuscript and print transmission",
    place: "Central Asia · St Petersburg · Kazan",
    register: "Textual tradition",
    title: "Not one book, but a river of hikmets",
    opening:
      "The Dīwān-i Hikmat is the center of Yasawi's literary afterlife, but it did not reach us as a single untouched book copied from the master's hand.",
    paragraphs: [
      "A 2006 catalogue summarized by Kazakhstan's National Center of Manuscripts describes 175 composite manuscripts containing 1,026 different hikmets attributed to Yasawi. Their order and contents vary. A separate survey identified twenty-three copies in St Petersburg that had not adequately shaped popular or critical editions. These numbers do not prove 1,026 authorial poems. They show the scale of a school of memory, recitation, copying, and attribution.",
      "A hikmet may belong to an identifiable witness, to a later received Yasawi corpus, to a poet writing within the school, or to a modern editorial attribution. The 1904 and 1912 Kazan printings are precious evidence for that afterlife, but neither is an autograph or a definitive original. Every Atlas translation will name the witness behind it and keep diplomatic text, reading text, literal translation, literary translation, and commentary distinct.",
    ],
    boundary:
      "The manuscript counts and named print witnesses are verified collection facts. Authorship of an individual hikmet remains a poem-by-poem question.",
    sources: [
      {
        label: "National Center of Manuscripts and Rare Books, Yasawi collection note",
        href: "https://manuscript.kz/en/manuscripts/",
      },
      {
        label: "1904 Kazan Book of Wisdom witness",
        href: "https://commons.wikimedia.org/wiki/File:Book_of_Wisdom_WDL6935.pdf",
      },
      {
        label: "Vusale Musali, St Petersburg Dīwān-i Hikmat copies",
        href: "https://www.acarindex.com/turk-kulturu-ve-haci-bektas-veli-arastirma-dergisi/st-petersburg-dogu-yazmalari-enstitusunde-bulunan-divan-i-hikmet-nushalari-354892",
      },
    ],
    visual: "hikmet",
  },
  {
    id: "path-of-formation",
    number: "04",
    era: "Teaching inheritance",
    place: "Hikmet corpus · later Yasawi prose",
    register: "Textual tradition",
    title: "A path of return, remembrance, and service",
    opening:
      "The poetry speaks most clearly when it is read as formation: the reshaping of desire, conduct, memory, and responsibility before God.",
    paragraphs: [
      "Across the hikmet corpus and later Yasawi prose, several movements recur: tawba, the honest return from forgetfulness; faqr, freedom from the self's claim to importance; dhikr, remembrance that gathers attention; adab and service, through which inner claims are tested in conduct; attachment to the Prophet; and love joined to knowledge of the heart. Later works organize the path through the fourfold grammar of shari'a, tariqa, ma'rifa, and haqiqa.",
      "The early prose archive is indispensable. Sufi Muhammad Danishmand's Mir'at al-qulub, Ishaq Khwaja's mid-fourteenth-century history known in one recension as Hadiqat al-'arifin, and later works such as Ta'lim al-Dhakirin and Hazini's Jawahir al-Abrar preserve the school explaining itself. Their manuscripts are later than Yasawi, and some texts have multiple redactions. They illuminate development; they should not be made to impersonate a lost autograph.",
      "The vocal remembrance known as dhikr-i arra belongs to later documented Yasawi practice. Here it is described historically, not taught as an unsupervised exercise. The same boundary applies to retreat, fasting, breath discipline, and obedience to a guide.",
    ],
    boundary:
      "Recurring ethical themes are publishable as a synthesis of named textual traditions. Ritual detail remains historical description, not online initiation or instruction.",
    sources: [
      {
        label: "Ahmet T. Karamustafa, primary-source survey of the early Yasawi tradition",
        href: "https://isamveri.org/pdfdrg/D164588/2005/2005_KARAMUSTAFAAT.pdf",
      },
      {
        label:
          "Nadirhan Hasan, ‘Notes about Some Manuscripts Devoted to the Sufi Order of Yassawiyya’",
        href: "https://isamveri.org/pdfdrg/G00007/2017_2/2017_2_HASANN.pdf",
      },
    ],
  },
  {
    id: "successor-roads",
    number: "05",
    era: "Twelfth-fourteenth centuries",
    place: "Otrar · Khwarazm · Tashkent · Kazygurt",
    register: "Hagiographical memory",
    title: "Four successor roads, unequal in evidence",
    opening:
      "Later sources remember four leading successors, but family descent, teaching succession, poetry, shrine memory, and institutional history must not be drawn with the same line.",
    paragraphs: [
      "Mansur Ata carries family and early succession memory through the house of Arslan Baba. Said Ata opens onto the Ata'iya and the Islamization narratives of Khwarazm and the steppe. Sufi Muhammad Danishmand anchors a textual and teaching branch near Otrar through Mir'at al-qulub. Hakim Ata, also known as Sulayman Baqirgani, joins the Yasawi inheritance to Khwarazmian Turkic poetry and to later memory of Zangi Ata.",
      "From these roads emerge further circles: Suksuk Ata, a later Ibrahim Ata, Ismail Ata, Ishaq Khwaja, Zangi Ata, Anbar Ana, and the Ata successors. Similar names are a serious source hazard. The earlier Said Ata must not be silently merged with a later Sayyid Ata; Yasawi's father Ibrahim Ata must not be merged with the Ibrahim of Danishmand's successor line. Shrine location can document living memory without proving every biographical claim attached to it.",
    ],
    boundary:
      "The fourfold successor list is well established in later Yasawi literature. Individual biographies and tomb identifications vary sharply in readiness.",
    sources: [
      {
        label: "Encyclopaedia Iranica, ‘Hakim Ata’",
        href: "https://www.iranicaonline.org/articles/hakim-ata/",
      },
      {
        label: "Encyclopaedia Iranica, ‘Ata'iya Order’",
        href: "https://www.iranicaonline.org/articles/ataiya-order-a-branch-of-the-yasaviya-sufi-brotherhood-especially-active-in-karazm-from-the-8th-14th-century/",
      },
      {
        label: "Necdet Tosun, ‘Yeseviyye’",
        href: "https://islamansiklopedisi.org.tr/yeseviyye",
      },
    ],
  },
  {
    id: "communities",
    number: "06",
    era: "Timurid and post-Timurid worlds",
    place: "Mawarannahr · steppe corridors",
    register: "Historical record",
    title: "Communities, not a single bureaucracy",
    opening:
      "The later Yasawiyya is easiest to misunderstand when it is imagined as a modern organization with one headquarters, one archive, and one uncontested chain.",
    paragraphs: [
      "In the Timurid era, Yasawi shaykhs could bind entire mobile or settled communities through affiliation, sacred genealogy, patronage, recitation, and shrine networks. Family houses, travelling teachers, local lodges, poetic memory, and regional alliances could preserve the inheritance differently. The result was a social field rather than one permanent administrative machine.",
      "This also clarifies the relationship with the Khwajagan and later Naqshbandiyya. The traditions interacted, competed, shared figures in retrospective lineage, and sometimes absorbed one another's memory. Later Naqshbandi narratives could subsume Yasawi figures; Yasawi communities could engage Naqshbandi teachers. Relation does not equal identity, and influence does not automatically establish institutional descent.",
    ],
    boundary:
      "The communal-affiliation model is a modern scholarly reconstruction from historical sources. It is presented as interpretation, not as the tradition's own single self-description.",
    sources: [
      {
        label: "Devin DeWeese, ‘Yasavi Shaykhs in the Timurid Era’",
        href: "https://isamveri.org/pdfdkm/01/DKM011071.pdf",
      },
      {
        label: "Devin DeWeese, ‘The Masha'ikh-i Turk and the Khojagan,’ DOI record",
        href: "https://doi.org/10.1093/jis/7.2.180",
      },
    ],
  },
  {
    id: "book-of-stone",
    number: "07",
    era: "1389-1405",
    place: "Yasi / Turkistan",
    register: "Historical record",
    title: "The Timurid book of stone",
    opening:
      "More than two centuries after Yasawi's death, Timur gave his memory an architectural body vast enough to reshape the horizon of Turkistan.",
    paragraphs: [
      "UNESCO dates the present complex to 1389-1405 and records that it replaced a smaller mausoleum. The unfinished building contains thirty-five rooms organized around the great central hall, with spaces for assembly, ritual, hospitality, burial, and service. Its scale reveals how Yasawi's authority had grown across time; it does not turn the Timurid monument into a twelfth-century witness.",
      "The mausoleum is best read as an archive: of royal patronage, architectural experiment, pilgrimage, inscription, repair, conservation, and public memory. The tomb made sacred geography durable, while every later generation also interpreted that geography anew.",
    ],
    boundary:
      "The construction dates, replacement of an earlier tomb, and architectural plan are verified through UNESCO. Devotional meanings are identified as reception and interpretation.",
    sources: [
      {
        label: "UNESCO World Heritage Centre, Mausoleum of Khoja Ahmed Yasawi",
        href: "https://whc.unesco.org/en/list/1103/",
      },
    ],
    visual: "mausoleum",
  },
  {
    id: "many-afterlives",
    number: "08",
    era: "Kazan print to the present",
    place: "Volga-Ural · Kazakhstan · Uzbekistan · wider Turkic world",
    register: "Living reception",
    title: "A voice with many afterlives",
    opening:
      "Yasawi's reach continued because the inheritance could move: in manuscripts, printed books, recitation, shrines, scholarship, family memory, and new acts of translation.",
    paragraphs: [
      "Kazan print culture gave the hikmet tradition new circulation in the Volga-Ural world. Modern Uzbek, Kazakh, Russian, and Turkish editions made different editorial choices, while scholarship exposed a manuscript field far larger than any popular volume. National heritage institutions and living devotional communities now meet around the same name, though they do not always ask the same questions of it.",
      "Claims of influence in Anatolia and beyond require the same discipline as lineage claims at home. A shared Turkic devotional vocabulary, a later genealogy, a wandering-dervish story, and an institutional chain are different kinds of connection. The Atlas follows each path without turning resemblance into descent. Its task is not to freeze a pure original, but to make the history of transmission visible enough that reverence and critical reading can deepen one another.",
    ],
    boundary:
      "Modern community accounts are reliable evidence for present self-understanding. Historical descent beyond Central Asia remains claim-specific and must be independently supported.",
    sources: [
      {
        label: "1904 Kazan Book of Wisdom witness",
        href: "https://commons.wikimedia.org/wiki/File:Book_of_Wisdom_WDL6935.pdf",
      },
      {
        label: "1912 Kazan Book of Wisdom witness",
        href: "https://commons.wikimedia.org/wiki/File:Book_of_Wisdom_WDL6937.pdf",
      },
      {
        label: "UNESCO Memory of the World nomination for the Yasawi manuscript collection",
        href: "https://media.unesco.org/sites/default/files/webform/mow001/collection_of_the_manuscripts_of_khoja_ahmed_yasawi.pdf",
      },
    ],
  },
];

export const yasawiyyaSuccessorRoads = [
  {
    name: "Mansur Ata",
    route: "Family and early succession memory",
    geography: "Arslan Baba's remembered house · Otrar region",
    readiness: "Developing profile",
    caution: "Independent biographical evidence remains sparse.",
  },
  {
    name: "Said Ata",
    route: "Ata'iya and steppe memory",
    geography: "Khwarazm · steppe corridors",
    readiness: "Branch history ready",
    caution: "Do not merge him automatically with the later Sayyid Ata.",
  },
  {
    name: "Sufi Muhammad Danishmand",
    route: "Prose teaching and textual transmission",
    geography: "Otrar region · later manuscript networks",
    readiness: "High once a direct witness is secured",
    caution: "Mir'at al-qulub survives in later copies requiring collation.",
  },
  {
    name: "Hakim Ata / Sulayman Baqirgani",
    route: "Poetry and the Khwarazmian road",
    geography: "Khwarazm-Aral region · Zangi Ata memory",
    readiness: "Source-labeled profile ready",
    caution: "The commonly printed 582/1186 death date is a late report.",
  },
] as const;

export const yasawiyyaPublicSources = [
  {
    kind: "Institutional catalogue",
    title: "National Center of Manuscripts and Rare Books",
    note: "Collection-level evidence for 175 composite manuscripts and 1,026 attributed hikmets; the count establishes plurality, not individual authorship.",
    href: "https://manuscript.kz/en/manuscripts/",
  },
  {
    kind: "Architecture and heritage",
    title: "UNESCO World Heritage Centre",
    note: "Official chronology and description of the 1389-1405 Timurid mausoleum complex at Turkistan.",
    href: "https://whc.unesco.org/en/list/1103/",
  },
  {
    kind: "Primary-source survey",
    title: "Ahmet T. Karamustafa",
    note: "A manuscript-grounded map of early Yasawi prose and a corrective to inherited linear histories.",
    href: "https://isamveri.org/pdfdrg/D164588/2005/2005_KARAMUSTAFAAT.pdf",
  },
  {
    kind: "Manuscript scholarship",
    title: "Nadirhan Hasan",
    note: "A source hierarchy for Mir'at al-qulub, Hadiqat al-'arifin, later manuals, and Uzbek holdings.",
    href: "https://isamveri.org/pdfdrg/G00007/2017_2/2017_2_HASANN.pdf",
  },
  {
    kind: "Scholarly encyclopedia",
    title: "TDV İslâm Ansiklopedisi: Yeseviyye",
    note: "A careful synthesis of the order, successors, source works, and competing teacher reports.",
    href: "https://islamansiklopedisi.org.tr/yeseviyye",
  },
  {
    kind: "Branch history",
    title: "Encyclopaedia Iranica: Hakim Ata and the Ata'iya",
    note: "Source-critical profiles for the Khwarazmian poetic and institutional afterlives of the Yasawi tradition.",
    href: "https://www.iranicaonline.org/articles/hakim-ata/",
  },
] as const;
