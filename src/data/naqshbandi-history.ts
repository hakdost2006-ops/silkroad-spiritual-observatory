import type { LineageEvidence, LineageView } from "./naqshbandi-lineage";

export type NaqshbandiSource = {
  id: string;
  title: string;
  author: string;
  layer: string;
  use: string;
  href: string;
  linkLabel: string;
};

export const naqshbandiSources: NaqshbandiSource[] = [
  {
    id: "W07",
    title: "The Naqshbandiyya",
    author: "Itzchak Weismann, 2007",
    layer: "Historical scholarship",
    use: "Formation, institutional change and the comparison of regional branches; especially chapter 2 for the early network.",
    href: "https://www.routledge.com/The-Naqshbandiyya-Orthodoxy-and-Activism-in-a-Worldwide-Sufi-Tradition/Weismann/p/book/9780415409780",
    linkLabel: "Publisher",
  },
  {
    id: "P98",
    title: "Doctrine and Organization",
    author: "Jürgen Paul, 1998",
    layer: "Historical scholarship",
    use: "The first generations after Baha al-Din: disciples, disciplines and the making of a social formation.",
    href: "https://ci.nii.ac.jp/ncid/BA4013919X?l=en",
    linkLabel: "Library catalogue",
  },
  {
    id: "DWS",
    title: "Succession Protocols and the Early Khwajagani Schism",
    author: "Devin DeWeese, 2011",
    layer: "Textual history",
    use: "Two redactions of Maslak al-arifin and the competing memories behind later succession. Journal of Islamic Studies 22/1, pp. 1-35.",
    href: "https://doi.org/10.1093/jis/etq082",
    linkLabel: "Journal record",
  },
  {
    id: "R01",
    title: "Rashahat ayn al-hayat",
    author: "Ali ibn Husayn Safi, early 16th century",
    layer: "Hagiographical tradition",
    use: "A mature treasury of Khwajagan lives. Holland's 2001 English version is an indirect discovery witness; this link identifies a Persian manuscript, Or Ms 243.",
    href: "https://archives.collections.ed.ac.uk/repositories/2/archival_objects/221360",
    linkLabel: "Manuscript catalogue",
  },
  {
    id: "GU02",
    title: "The Letters of Khwaja Ubayd Allah Ahrar and His Associates",
    author: "Jo-Ann Gross and Asom Urunbaev, 2002",
    layer: "Documentary edition",
    use: "Persian correspondence, translation and facsimiles illuminate mediation, patronage and the Timurid social world.",
    href: "https://books.google.com/books?id=vvD7EAAAQBAJ",
    linkLabel: "Book record",
  },
  {
    id: "T08",
    title: "Baha al-Din Naqshband: biography and sources",
    author: "Hamid Algar, Encyclopaedia Iranica",
    layer: "Scholarly reference",
    use: "Public biographical control, read alongside Necdet Tosun's 2008 biography in our research library; early reports remain layered with hagiography.",
    href: "https://www.iranicaonline.org/articles/baha-al-din-naqsband-kaja-mohammad-b/",
    linkLabel: "Read reference",
  },
  {
    id: "JAMI",
    title: "Jami and Sufism",
    author: "Hamid Algar, Encyclopaedia Iranica",
    layer: "Scholarly reference",
    use: "Kashghari's role, Jami's affiliation, biographical writing and the literary transmission of Khwajagan teaching.",
    href: "https://www.iranicaonline.org/articles/jami-ii/",
    linkLabel: "Read reference",
  },
  {
    id: "FK",
    title: "Fasl al-khitab",
    author: "Muhammad Parsa",
    layer: "Primary textual corpus",
    use: "A major compilation of Sufi learning. Private translation and manuscript comparison are in progress; this catalogue route does not offer an Atlas edition.",
    href: "https://search.worldcat.org/search?q=Fasl+al-khitab+Parsa",
    linkLabel: "Find editions",
  },
  {
    id: "B98",
    title: "Sufi Heirs of the Prophet",
    author: "Arthur F. Buehler, 1998",
    layer: "Historical scholarship",
    use: "The evolution of spiritual authority and mediation in the Indian Naqshbandiyya.",
    href: "https://search.worldcat.org/search?q=isbn%3A9781570032011",
    linkLabel: "Library catalogue",
  },
  {
    id: "F71",
    title: "Shaykh Ahmad Sirhindi",
    author: "Yohanan Friedmann, 1971",
    layer: "Historical scholarship",
    use: "Sirhindi's thought and changing reception; read with the Persian Maktubat rather than treating any modern summary as the letters themselves.",
    href: "https://search.worldcat.org/search?q=Shaykh+Ahmad+Sirhindi+Friedmann",
    linkLabel: "Library catalogue",
  },
  {
    id: "Z21",
    title: "Hidden Caliphate",
    author: "Waleed Ziad, 2021",
    layer: "Regional scholarship",
    use: "Later Mujaddidi networks across Central Asia, Afghanistan and South Asia, including the routes back across the Oxus.",
    href: "https://www.hup.harvard.edu/books/9780674248816",
    linkLabel: "Publisher",
  },
  {
    id: "LG05",
    title: "A Culture of Sufism",
    author: "Dina Le Gall, 2005",
    layer: "Regional scholarship",
    use: "Ottoman Naqshbandi worlds, 1450-1700: mobility, texts and adaptable institutions before the Khalidi expansion.",
    href: "https://sunypress.edu/Books/A/A-Culture-of-Sufism",
    linkLabel: "Publisher",
  },
  {
    id: "TH24",
    title: "The Naqshbandiyya Mujaddidiyya in China",
    author: "Rian Thum, 2024",
    layer: "Regional scholarship",
    use: "Distinct movements of lineage, texts and practice through Eastern Turkistan and Chinese Muslim communities. Open access, CC BY 4.0.",
    href: "https://doi.org/10.1017/S1356186322000773",
    linkLabel: "Read open article",
  },
  {
    id: "ANIS",
    title: "Anis al-talibin: the textual problem",
    author: "Hamid Algar, Encyclopaedia Iranica",
    layer: "Source guide",
    use: "The long and short forms of Baha al-Din's early biographical tradition and their attribution history.",
    href: "https://www.iranicaonline.org/articles/anis-al-talebin/",
    linkLabel: "Read source guide",
  },
  {
    id: "KAS",
    title: "Ahmad Kasani",
    author: "Joseph Fletcher, Encyclopaedia Iranica",
    layer: "Scholarly reference",
    use: "Dahbid, Muhammad Qazi, saintly descendants and the transformation of Central Asian authority in Eastern Turkistan.",
    href: "https://www.iranicaonline.org/articles/ahmad-kasani/",
    linkLabel: "Read reference",
  },
  {
    id: "CHARKHI",
    title: "Mawlana Yaqub Charkhi",
    author: "Hamid Algar, Encyclopaedia Iranica",
    layer: "Scholarly reference",
    use: "A biographical and bibliographic control for Charkhi's Qur'anic writing and his place in early Naqshbandi transmission.",
    href: "https://www.iranicaonline.org/articles/carki-mawlana-yaqub-b/",
    linkLabel: "Read reference",
  },
  {
    id: "GSC",
    title: "Naqshbandiyya-Mujaddidiyya Golden Chain",
    author: "The Golden Sufi Center",
    layer: "Modern community account",
    use: "The Center's own account of continuity, including Irina Tweedie and the Vaughan-Lee family; a living testimony with its own historical setting.",
    href: "https://goldensufi.org/about/naqshbandiyya-mujaddidiyya-golden-chain/",
    linkLabel: "Official community",
  },
  {
    id: "ISF",
    title: "The Way of the Sufi",
    author: "Idries Shah Foundation",
    layer: "Modern reception",
    use: "An official book route for twentieth-century English-language presentation and teaching stories; not a primary witness for medieval succession.",
    href: "https://idriesshahfoundation.org/books/the-way-of-the-sufi/",
    linkLabel: "Official book page",
  },
];

export type NaqshbandiChapter = {
  id: string;
  period: string;
  place: string;
  title: string;
  paragraphs: string[];
  evidence: LineageEvidence;
  sourceRefs: string[];
  question: string;
};

export const naqshbandiChapters: NaqshbandiChapter[] = [
  {
    id: "before-the-name",
    period: "12th-14th centuries",
    place: "Khurasan / the Bukhara oasis",
    title: "Before there was an order, there were companions",
    paragraphs: [
      "The story begins in a landscape of movement: teachers travelling between Khurasan and Transoxiana, scholars at the mosque, artisans at their work, and small circles in which companionship carried a teaching that a book alone could not contain. Yusuf Hamadani belongs to this earlier world. Later Yasawi and Khwajagan genealogies both remember him; each inherited that memory in its own way.",
      "Around Abd al-Khaliq Ghijduwani, the Khwajagan came to remember an inward discipline joined to ordinary life. The familiar Bukhara succession names Riwgari, Faghnawi, Ramitani, Samasi and Amir Kulal. Yet the older record is less tidy than the later chain. DeWeese's study of Maslak al-arifin uncovers competing succession protocols and two redactions whose differences matter. The field contained argument as well as continuity.",
      "For a Sufi reader, this need not empty the lineage of meaning. It asks us to hear two things together: the community's fidelity to its masters and the historical work through which that fidelity became a shared story. Silent and audible remembrance, local circles and claims to authority were part of a living conversation.",
    ],
    evidence: "scholarly-reconstruction",
    sourceRefs: ["DWS", "W07", "R01"],
    question:
      "The earliest Persian witnesses are still being collated; the familiar silsila is not a complete record of every early Khwajagan circle.",
  },
  {
    id: "bukhara-center",
    period: "1318-1389",
    place: "Qasr-i Arifan / Bukhara",
    title: "Baha al-Din gives the inheritance a center",
    paragraphs: [
      "Baha al-Din Naqshband grew within this remembered Bukhara constellation. Amir Kulal is his principal human teacher in the early tradition; accounts of Samasi's recognition and of guidance from the long-dead Ghijduwani belong to other modes of sacred memory. Uwaysi instruction names a spiritual relationship across time, and deserves to be described in that language.",
      "Silent remembrance became a defining feature of the line associated with Baha al-Din. Its significance was more than the absence of sound: later teaching joined inward attention to companionship, livelihood and service. The ideal of being inwardly present amid society offered a way of imagining holiness close to the life of a village and a city.",
      "His tomb at Qasr-i Arifan remains a geographical center of that memory. The living complex is also a later architectural and devotional history; its present buildings should not all be imagined as the setting of his own lifetime. Anis al-talibin and Parsa's Qudsiyya bring us closer to the early voices, but their recensions and editorial histories still need careful comparison.",
    ],
    evidence: "early-tradition",
    sourceRefs: ["T08", "ANIS", "P98"],
    question:
      "Human companionship, visionary transmission and later interpretations of the name Naqshband remain distinct evidence layers.",
  },
  {
    id: "first-circles",
    period: "After 1389",
    place: "Bukhara / Chaghaniyan / Hisar",
    title: "An inheritance with several voices",
    paragraphs: [
      "After Baha al-Din's death, the path continued in several circles. Ala al-Din Attar, his son-in-law, held a leading place; Muhammad Parsa gave the inheritance a learned textual voice; Yaqub Charkhi joined commentary and teaching. Through Attar, Khamush stands in the current that eventually reached Herat. Their lives resist the image of one office handed mechanically from one holder to the next.",
      "Parsa is especially important for an Atlas built around books. Qudsiyya preserves and arranges words associated with Baha al-Din, while Fasl al-khitab gathers a wider world of Sufi learning. Such writing does not simply record an institution already complete. It participates in making the inheritance intelligible: relating remembered speech to scripture, earlier authorities and the questions of disciples.",
      "Jürgen Paul's study of the first generations helps us see doctrine and organization together. A method of remembrance, a teacher's authority and a circle's social arrangements developed in relation to one another. The named Naqshbandiyya emerged through this work of teaching, selection and consolidation.",
    ],
    evidence: "scholarly-reconstruction",
    sourceRefs: ["P98", "W07", "FK"],
    question:
      "The map branches after Baha al-Din; it does not make Parsa, Attar, Charkhi and Khamush consecutive links in one chain.",
  },
  {
    id: "ahrar-world",
    period: "15th century",
    place: "Tashkent / Samarkand / the Timurid world",
    title: "Ahrar and the responsibilities of public life",
    paragraphs: [
      "With Ubayd Allah Ahrar, the story enters the fields, markets and courts of the Timurid world. His formation is associated with Charkhi; his mature authority reached through disciples, households, estates, endowments and correspondence. Samarkand became a center from which relationships could extend far beyond the immediate gathering of companions.",
      "The letters make this world tangible. They show requests, protection, mediation and negotiation, allowing us to examine spiritual authority in the details of social life. A hagiography tells us how sanctity was remembered; a letter shows an intervention made for a particular person in a particular situation. Both matter, but they answer different questions.",
      "The deeper question is how service should inhabit power. Ahrar's prominence cannot be reduced to a sermon about wealth or converted into a story of flawless political influence. His public activity needs to be read with property, patronage and the interests of those around him. This is where the history of an inward path becomes the history of a social body.",
    ],
    evidence: "documented",
    sourceRefs: ["GU02", "P98", "W07"],
    question:
      "Letters document particular relationships and interventions; they do not independently establish every hagiographical claim about Ahrar.",
  },
  {
    id: "herat-and-dahbid",
    period: "15th-16th centuries",
    place: "Herat / Ferghana / Dahbid",
    title: "Poetry, books and the branching of sacred families",
    paragraphs: [
      "Herat carried another kind of expansion. Through Sa'd al-Din Kashghari, Jami entered a living Naqshbandi milieu; through his writing, the path entered a vast Persian literary conversation. Biography, poetry and short works on Khwajagan teaching brought remembered companionship into the reader's world. Literary transmission could travel where a teacher's household could not.",
      "In Central Asia, Ahrar's inheritance continued through Muhammad Qazi to Ahmad Kasani, revered as Makhdum-i A'zam. Dahbid near Samarkand became a center of learning, property and saintly memory. Kasani's descendants carried the family's authority into Eastern Turkistan, where Afaqi and Ishaqi formations acquired their own histories. Teaching succession and hereditary descent now intersected without becoming the same thing.",
      "This is the point at which the Atlas opens outward. A text copied in a distant town, a disciple authorized to teach, a son inheriting a saintly household and a community adopting a practice are four different movements. Following each on its own terms reveals a richer history than drawing one continuous line across the continent.",
    ],
    evidence: "scholarly-reconstruction",
    sourceRefs: ["JAMI", "KAS", "W07", "TH24"],
    question:
      "The Dahbid corpus and descendant lineages remain a research priority; regional transmission is shown as a process rather than a fully collated chain.",
  },
];

export type NaqshbandiProfile = {
  paragraphs: string[];
  contribution: string;
  texts: string;
  tomb: string;
  uncertainty: string;
};

export const naqshbandiProfiles: Record<string, NaqshbandiProfile> = {
  "prophetic-ancestry": {
    paragraphs: [
      "The silsila locates the path within the transmission of Islamic spiritual authority. In many Naqshbandi chains, Abu Bakr has a central place after the Prophet Muhammad. The chain is a confession of belonging as well as a genealogy: it remembers whose presence and example a community understands itself to carry.",
    ],
    contribution: "Prophetic and Companion memory gives the later path its sacred horizon.",
    texts: "Later shajara and silsila literature; versions differ between communities.",
    tomb: "This aggregate represents remembered ancestry, not a single burial place.",
    uncertainty:
      "The diagram does not treat every later ancestral link as verified face-to-face discipleship.",
  },
  "eastern-chain": {
    paragraphs: [
      "Later Naqshbandi histories gather eastern Sufi authorities such as Bayazid Bistami, Kharaqani and Farmadi into their spiritual ancestry. These figures belonged to distinct times and places. Their inclusion shows how a later tradition remembered an inheritance of inward knowledge rather than the uninterrupted administration of one institution.",
    ],
    contribution: "A remembered connection to Khurasani and Iranian Sufi authority.",
    texts: "Later biographical collections and lineage recensions.",
    tomb: "The figures have separate local memories and shrine traditions; no single site is implied.",
    uncertainty:
      "Some links are spiritual or retrospective; intermediate names vary with the recension.",
  },
  "yusuf-hamadani": {
    paragraphs: [
      "Hamadani connects the history to an earlier world of learning and travel between western Iran, Baghdad, Merv and Transoxiana. Later Yasawi and Khwajagan communities both placed him within their ancestry. His significance is therefore larger than the role of a single precursor in a later Naqshbandi chart.",
    ],
    contribution:
      "A Khurasan-Transoxiana bridge remembered by more than one Central Asian tradition.",
    texts:
      "Rutbat al-hayat and other attributed teachings require individual authorship and witness checks.",
    tomb: "Burial memory is associated with Merv in present-day Turkmenistan; exact site identification remains under review.",
    uncertainty:
      "Later accounts of appointed successors are not used here as contemporary appointment records.",
  },
  "abd-al-khaliq": {
    paragraphs: [
      "Ghijduwani became the formative authority around whom later Khwajagan accounts organized their way of remembrance. His remembered teachings joined inward recollection to companionship and disciplined attention. Yet the early field also preserved competing claims to succession, making the history of his inheritance more varied than the standard chain suggests.",
    ],
    contribution:
      "A central authority for the later Khwajagan practice vocabulary and succession memory.",
    texts:
      "Attributed sayings, maqamat and the Maslak al-arifin source problem; eight principles are traditionally connected with him.",
    tomb: "The shrine complex in Ghijduvan anchors continuing Bukhara-oasis memory; its architecture has a later history.",
    uncertainty:
      "Death dates, attributed writings and the earliest witnesses for the principles remain disputed or uncollated.",
  },
  "arif-riwgari": {
    paragraphs: [
      "Riwgari's place is clearest in the teaching memory of the Bukhara succession. The later biographical tradition remembers him as a bearer of Ghijduwani's inheritance. His historical outline is thinner than his devotional importance, and that difference deserves to remain visible: a community can remember a master deeply while preserving little independent contemporary biography.",
    ],
    contribution: "Continuity of local Khwajagan companionship in later succession memory.",
    texts:
      "Maqamat and Rashahat passages require direct Persian comparison; no independent book is securely assigned here.",
    tomb: "A shrine associated with Riwgari survives in the Shofirkon area of the Bukhara region; exact site coordinates are withheld.",
    uncertainty:
      "Precise life dates, independent authorship and individual sayings need controlled witnesses.",
  },
  "mahmud-faghnawi": {
    paragraphs: [
      "Faghnawi belongs to the village and artisan world remembered by the Khwajagan. Later accounts associate his circle with audible remembrance. This is a useful reminder that the formation of the tradition cannot be narrated as one identical silent method transmitted without disagreement from the beginning.",
    ],
    contribution:
      "His remembered circle preserves diversity in the early language and sound of remembrance.",
    texts: "Biographical notices and teaching anecdotes in later Khwajagan literature.",
    tomb: "Local pilgrimage memory places his shrine in the Vabkent area of the Bukhara oasis; an official site record is still needed.",
    uncertainty:
      "Exact dates, occupation and the circumstances of audible dhikr remain source-qualified traditions.",
  },
  "ali-ramitani": {
    paragraphs: [
      "Ali Ramitani, often called Azizan, broadens the remembered geography beyond a single Bukharan village. His association with Ramitan and Khwarazm gives the succession a history of movement. Sayings and stories attributed to him connect craft, work and companionship, but their devotional force should be read with their later textual setting.",
    ],
    contribution: "A remembered transmitter linking the Bukhara oasis with Khwarazm.",
    texts: "Attributed sayings, letters and maqamat in later collections; no autograph is claimed.",
    tomb: "Ramitan and Khwarazm carry overlapping local memories; this page does not resolve competing burial identifications.",
    uncertainty:
      "Chronology, the corpus of attributed sayings and shrine geography need comparative verification.",
  },
  "baba-samasi": {
    paragraphs: [
      "Samasi appears in the Baha al-Din tradition as a teacher whose recognition anticipates the future master's vocation. His remembered entrustment of the young Baha al-Din to Amir Kulal gives the lineage a story of care across generations. Prediction and recognition are hagiographical forms, carrying the community's understanding of spiritual discernment.",
    ],
    contribution:
      "An important figure in Baha al-Din's remembered formation and the teacher-to-teacher continuity of care.",
    texts:
      "Recognition narratives in Anis and Rashahat traditions, read alongside their recensions.",
    tomb: "Samas in the Ramitan area is the local shrine association; exact coordinates remain unverified here.",
    uncertainty:
      "The prediction narrative is presented as sacred biography; the traditional death date is qualified.",
  },
  "amir-kulal": {
    paragraphs: [
      "Amir Kulal is the principal human teacher in Baha al-Din's formative biography. Their remembered relationship gives the path a concrete center in companionship and discipline. Later narratives about the difference between audible and silent remembrance place teacher and disciple within a living debate, rather than reducing their relationship to a name between two arrows.",
    ],
    contribution: "Baha al-Din's formation through human teaching, service and companionship.",
    texts:
      "Early Baha al-Din reports and later Kulal biographies; individual anecdotes need textual collation.",
    tomb: "The Amir Kulal shrine is associated with Sukhar in the Bukhara oasis; its present complex is a later devotional setting.",
    uncertainty:
      "The teacher relationship has strong convergence; exact chronology and individual marvels remain qualified.",
  },
  "baha-al-din": {
    paragraphs: [
      "The eponymous master became a gathering point for an older Khwajagan inheritance. Silent remembrance, companionship and service give the early tradition its characteristic vocabulary. His significance also lies in what happened after his death: disciples and authors made his remembered words a durable center for several circles.",
    ],
    contribution:
      "A defining model of inward remembrance joined to ordinary social life; the later order bears his name.",
    texts:
      "Anis al-talibin, Parsa's Qudsiyya and subsequent biographical collections preserve his teaching; none is treated as a simple autograph corpus.",
    tomb: "Qasr-i Arifan near Bukhara, Uzbekistan. The memorial complex remains a major center of pilgrimage.",
    uncertainty:
      "Samasi's recognition, Uwaysi guidance and later explanations of the sobriquet are distinguished from ordinary historical contact.",
  },
  "ala-al-din-attar": {
    paragraphs: [
      "Attar was Baha al-Din's son-in-law and a leading successor. Family connection and teaching authority intersect in his place within the first generation. His circle is essential to understanding how the inheritance continued in several directions: succession after 1389 involved overlapping relationships, not a single exclusive administrative appointment.",
    ],
    contribution: "A major successor circle and an important connection in Charkhi's formation.",
    texts: "Teachings and biography preserved in early Naqshbandi and later Rashahat traditions.",
    tomb: "Bukhara and Chaghaniyan frame his biography; a precise tomb identification is not asserted here.",
    uncertainty:
      "The order of successor claims and details of authorization require recension-level comparison.",
  },
  "muhammad-parsa": {
    paragraphs: [
      "Parsa brought remembered companionship into the world of learned writing. His works link the early Naqshbandi circle with scripture and a broad Sufi archive. They help explain how a path was made transmissible beyond the physical presence of its teacher, while preserving the questions and selections of an author.",
    ],
    contribution:
      "Early textual consolidation and the integration of Khwajagan teaching into wider Islamic learning.",
    texts:
      "Risala-yi Qudsiyya; Fasl al-khitab. Our private Fasl translation remains under manuscript and editorial review.",
    tomb: "He died on pilgrimage in Medina; exact burial identification is not established by this page.",
    uncertainty:
      "Fasl al-khitab is not interchangeable with Qudsiyya, and private working translations are not released as editions.",
  },
  "yaqub-charkhi": {
    paragraphs: [
      "Charkhi carried the path through Persian Qur'anic commentary and instructional writing. His formation involved Baha al-Din and Attar; his teaching relationship with Ahrar became consequential for the later Samarkand network. The map makes those relationships visible without treating the written and social inheritance as a single chain of offices.",
    ],
    contribution: "Qur'anic interpretation and the teaching bridge to Ubayd Allah Ahrar.",
    texts: "Tafsir-i Charkhi and Risala-yi Unsiyya; controlled editions remain a priority.",
    tomb: "His burial is commonly associated with the Hisar/Dushanbe region of present-day Tajikistan. Charkh in Afghanistan is his place-name association, not a verified tomb location on this page.",
    uncertainty:
      "A repository and local heritage dossier is needed before publishing exact burial coordinates.",
  },
  "nizam-khamush": {
    paragraphs: [
      "Khamush belongs to the less visible transmission routes after Baha al-Din. Weismann places him among Attar's successors and in the teaching current leading toward Kashghari and Herat. A map centered only on Ahrar would miss the path by which Naqshbandi companionship entered Jami's world.",
    ],
    contribution: "The current through Attar connecting the early inheritance with Herat.",
    texts: "Early and later biographical notices interpreted through Paul and Weismann.",
    tomb: "Samarkand and the Herat teaching current frame his significance; a secure burial site is not assigned.",
    uncertainty:
      "Biography, chronology and individual transmission details require primary-text control.",
  },
  "sad-kashghari": {
    paragraphs: [
      "Kashghari made Herat a place of Naqshbandi companionship and became Jami's spiritual teacher. His significance is felt through the intellectual and literary circle formed around him. Herat thus appears as a local center of creativity, carrying the inheritance into new relationships rather than merely receiving an unchanged institution.",
    ],
    contribution: "Jami's initiation and a contemplative circle in Timurid Herat.",
    texts: "Jami's writings and biographical accounts preserve his place in the tradition.",
    tomb: "Herat carries his burial and local devotional memory; exact site coordinates are not published here.",
    uncertainty:
      "Individual sayings and detailed teaching episodes require direct primary passages.",
  },
  "ubayd-allah-ahrar": {
    paragraphs: [
      "Ahrar's authority reached through land, households, letters and political mediation. Those relationships belonged to his Sufi life, and their practical consequences can be studied through contemporary documentary material. The picture is both spiritual and historical: service must be examined in particular interventions and interests, not simply celebrated as a slogan.",
    ],
    contribution:
      "A durable Samarkand network linking discipleship, patronage and public responsibility.",
    texts:
      "Letters edited by Gross and Urunbaev; treatises including Fiqarat require separate textual control; hagiographies and waqf records add different evidence.",
    tomb: "The Khwaja Ahrar complex in Samarkand, Uzbekistan, anchors his continuing shrine memory.",
    uncertainty:
      "Correspondence supports specific relationships; it does not settle every successor claim or miracle narrative.",
  },
  jami: {
    paragraphs: [
      "Jami entered the path through Kashghari and gave its memory a remarkable literary reach. His biographical and instructional writing joined the Naqshbandi circle to a larger Persian Sufi world. A reader may encounter companionship through a life story or a poem long after the original circle has vanished.",
    ],
    contribution:
      "The literary and biographical transmission of Khwajagan teaching across the Persianate world.",
    texts:
      "Nafahat al-uns, Sar-rishta-yi tariq-i Khwajagan and writings preserving Parsa's sayings; critical editions are needed for close quotation.",
    tomb: "His tomb is associated with Herat, Afghanistan; local memory and the site's changing condition require separate documentation.",
    uncertainty:
      "Kashghari is his principal initiator in this map; Charkhi is not substituted as that teacher.",
  },
  "muhammad-qazi": {
    paragraphs: [
      "Qazi forms a bridge between Ahrar's mature network and Kasani's later Central Asian formation. The transition matters because a saintly household and its disciples did not preserve influence through one mechanism alone. Teaching relationships, local patronage and remembered authorization need to be examined together.",
    ],
    contribution: "The Ahrari-to-Dahbid transmission associated with Ahmad Kasani.",
    texts: "Biographical and succession material in the later Central Asian tradition.",
    tomb: "Transoxiana is the secure regional frame; a precise burial site remains unassigned.",
    uncertainty:
      "Individual appointments and the complete branch chain require a dedicated source packet.",
  },
  "makhdum-azam": {
    paragraphs: [
      "Ahmad Kasani, known as Makhdum-i A'zam, made Dahbid a major center of Central Asian authority. His teaching and descendants connected learned writing, land and saintly kinship. In Eastern Turkistan, hereditary lines developed distinct institutional and political histories. The map therefore distinguishes the father's teaching from his descendants' later careers.",
    ],
    contribution:
      "The Dahbid formation and an influential saintly family whose afterlives reached Eastern Turkistan.",
    texts:
      "A substantial attributed treatise corpus awaits an edition and manuscript census before individual texts are used for teaching.",
    tomb: "Dahbid near Samarkand is the established burial association; the shrine's later history needs its own account.",
    uncertainty:
      "Dates are given as 1461/62-1542/43; the Afaqi and Ishaqi descendant histories are not collapsed into one succession.",
  },
  "mujaddidi-bridge": {
    paragraphs: [
      "Several intervening teachers and routes stand between the Central Asian circles and Baqi Billah in Delhi. This open bridge acknowledges that movement without inventing a fully collated chain. A compressed historical corridor is useful only when readers can see what has been compressed.",
    ],
    contribution: "Central Asian and Afghan transmission into the Mughal Indian setting.",
    texts:
      "Branch histories, biographical accounts and correspondence require a named-witness concordance.",
    tomb: "A geographical process across Transoxiana, Kabul and North India; no single tomb is implied.",
    uncertainty: "This is deliberately an open bridge, not a direct Ahrar-to-Baqi Billah arrow.",
  },
  "baqi-billah": {
    paragraphs: [
      "Baqi Billah established a teaching circle in Delhi after formation within Central Asian networks. His short life there had a large afterlife through Ahmad Sirhindi and other disciples. Migration did not carry a path into an empty landscape: Mughal India already contained learned communities, Sufi affiliations and questions that changed its expression.",
    ],
    contribution:
      "A formative Delhi circle and the immediate teaching relationship behind Sirhindi's Naqshbandi formation.",
    texts: "Letters, treatises and early biographies need controlled Persian witnesses.",
    tomb: "A tomb associated with him survives in Delhi; precise visitor information is outside this historical map.",
    uncertainty:
      "His complete Central Asian teacher chain remains compressed pending primary collation.",
  },
  "ahmad-sirhindi": {
    paragraphs: [
      "Sirhindi gave the inheritance a powerful epistolary and theological voice. His reputation as the Renewer of the Second Millennium became the name of a distinctive Mujaddidi formation. The letters address particular people and spiritual questions; their teachings should be read in sequence and context rather than reduced to one doctrine or a universal account of all Naqshbandi history.",
    ],
    contribution:
      "Mujaddidi renewal, extensive correspondence and a durable vocabulary of spiritual authority.",
    texts:
      "Maktubat, read with Friedmann and Buehler; direct Persian letter-level control remains necessary.",
    tomb: "Rauza Sharif at Sirhind, present-day Punjab, India, is the central burial association.",
    uncertainty:
      "Mujaddidi formulations are branch-specific; modern translations introduce terminological choices requiring review.",
  },
  "later-mujaddidi": {
    paragraphs: [
      "Later Mujaddidi networks crossed the Indus and Oxus through families, deputies, pilgrimage and scholarly travel. Ziad's regional study brings Afghanistan and Central Asia back into a history often told mainly from India. A return north could be as consequential as an initial movement south.",
    ],
    contribution: "Transregional authority linking towns, frontier regions and learned households.",
    texts:
      "Letters, local biographies and genealogies; Ziad, Buehler and regional manuscript studies.",
    tomb: "A network of communities and burial places, not one master or shrine.",
    uncertainty:
      "No complete seventeenth-to-nineteenth-century chain is implied by this aggregate.",
  },
  "khalid-baghdadi": {
    paragraphs: [
      "Khalid studied in Delhi with Shah Ghulam Ali and carried a Mujaddidi inheritance into western Asia. His deputies helped establish a distinctive Khalidi expansion in Kurdish and Ottoman settings. This later renewal must be placed beside the much earlier Ottoman Naqshbandi presence, rather than used as its beginning.",
    ],
    contribution:
      "A major nineteenth-century westward expansion through a network of authorized deputies.",
    texts:
      "Letters, branch writings and Ottoman/Kurdish scholarship; branch practices require their own context.",
    tomb: "His burial is associated with Damascus, Syria; current site access is not assessed here.",
    uncertainty:
      "Shah Ghulam Ali is named in the relationship note; intervening Mujaddidi generations remain compressed.",
  },
  "golden-sufi-center": {
    paragraphs: [
      "The Center publishes a Naqshbandiyya-Mujaddidiyya chain linking South Asian teachers with Irina Tweedie and the Vaughan-Lee family. Its books and accounts belong to the history of a contemporary community. They show one way an inheritance has been interpreted for modern readers and gatherings, with its own language of the heart and spiritual companionship.",
    ],
    contribution: "A living account of continuity, translation and contemporary presentation.",
    texts:
      "Official Golden Chain, books and articles; use the community's own website for its material.",
    tomb: "A contemporary community across several countries; no single shrine location is assigned.",
    uncertainty:
      "The community's published genealogy is identified as self-description, not independent proof for earlier medieval links.",
  },
};

export type NaqshbandiRelationship = {
  from: string;
  to: string;
  kind: string;
  evidence: LineageEvidence;
  note: string;
  sourceRefs: string[];
};
const earlyLinks = [
  "yusuf-hamadani",
  "abd-al-khaliq",
  "arif-riwgari",
  "mahmud-faghnawi",
  "ali-ramitani",
  "baba-samasi",
  "amir-kulal",
  "baha-al-din",
];
export const naqshbandiRelationships: NaqshbandiRelationship[] = [
  {
    from: "prophetic-ancestry",
    to: "eastern-chain",
    kind: "Remembered ancestry",
    evidence: "traditional-memory",
    note: "A compressed devotional genealogy; no universal sequence or direct meeting is claimed.",
    sourceRefs: ["W07", "R01"],
  },
  {
    from: "eastern-chain",
    to: "yusuf-hamadani",
    kind: "Remembered ancestry",
    evidence: "traditional-memory",
    note: "Later lineages locate Hamadani within an eastern Sufi inheritance.",
    sourceRefs: ["W07", "R01"],
  },
  ...earlyLinks.slice(1).map((to, index) => ({
    from: earlyLinks[index],
    to,
    kind: "Remembered teaching succession",
    evidence: "early-tradition" as const,
    note: "The standard Khwajagan succession in formative and later tradition; early redactions and collateral circles remain under study.",
    sourceRefs: ["W07", "R01", "DWS"],
  })),
  ...["ala-al-din-attar", "muhammad-parsa", "yaqub-charkhi"].map((to) => ({
    from: "baha-al-din",
    to,
    kind: "First-generation teaching circle",
    evidence: "early-tradition" as const,
    note: "A branch from Baha al-Din's circle, not a consecutive administrative successor. Charkhi also received formation through Attar.",
    sourceRefs: ["P98", "W07"],
  })),
  {
    from: "ala-al-din-attar",
    to: "nizam-khamush",
    kind: "Teaching and succession",
    evidence: "scholarly-reconstruction",
    note: "Weismann, chapter 2, printed pp. 30-32, places Khamush among Attar's successors; he is not drawn as Baha al-Din's immediate successor.",
    sourceRefs: ["W07", "P98"],
  },
  {
    from: "ala-al-din-attar",
    to: "yaqub-charkhi",
    kind: "Teaching and formation",
    evidence: "early-tradition",
    note: "Charkhi's formation also involved Attar; the direct Baha al-Din relation does not erase this second connection.",
    sourceRefs: ["P98", "CHARKHI"],
  },
  {
    from: "yaqub-charkhi",
    to: "ubayd-allah-ahrar",
    kind: "Teacher and disciple",
    evidence: "early-tradition",
    note: "Ahrar's teaching relationship with Charkhi, distinguished from the documentary evidence for his later public network.",
    sourceRefs: ["W07", "CHARKHI"],
  },
  {
    from: "nizam-khamush",
    to: "sad-kashghari",
    kind: "Herat teaching current",
    evidence: "scholarly-reconstruction",
    note: "The Herat line reconstructed from the biographical tradition.",
    sourceRefs: ["P98", "W07"],
  },
  {
    from: "sad-kashghari",
    to: "jami",
    kind: "Initiation and companionship",
    evidence: "documented",
    note: "Kashghari is Jami's principal Naqshbandi teacher, not Ahrar or Charkhi in a flattened sequence.",
    sourceRefs: ["JAMI", "W07"],
  },
  {
    from: "ubayd-allah-ahrar",
    to: "muhammad-qazi",
    kind: "Branch transmission",
    evidence: "scholarly-reconstruction",
    note: "Ahrari succession memory; authorization details require a primary packet.",
    sourceRefs: ["W07", "KAS"],
  },
  {
    from: "muhammad-qazi",
    to: "makhdum-azam",
    kind: "Teacher and disciple",
    evidence: "scholarly-reconstruction",
    note: "Qazi's formation of Kasani precedes the later Dahbid and descendant histories.",
    sourceRefs: ["KAS", "W07"],
  },
  {
    from: "mujaddidi-bridge",
    to: "baqi-billah",
    kind: "Compressed regional transmission",
    evidence: "scholarly-reconstruction",
    note: "Several intervening teachers remain open; this is not a direct connection from Dahbid.",
    sourceRefs: ["W07", "B98", "F71"],
  },
  {
    from: "baqi-billah",
    to: "ahmad-sirhindi",
    kind: "Teacher and disciple",
    evidence: "documented",
    note: "Sirhindi's formation in Baqi Billah's Delhi circle.",
    sourceRefs: ["F71", "B98"],
  },
  {
    from: "ahmad-sirhindi",
    to: "later-mujaddidi",
    kind: "Several generations of branch transmission",
    evidence: "scholarly-reconstruction",
    note: "An aggregate for descendants, deputies and regional networks, not one direct successor.",
    sourceRefs: ["Z21", "B98"],
  },
  {
    from: "later-mujaddidi",
    to: "khalid-baghdadi",
    kind: "Transmission through Shah Ghulam Ali",
    evidence: "scholarly-reconstruction",
    note: "Khalid's immediate teacher was Shah Ghulam Ali in Delhi; earlier generations are compressed here.",
    sourceRefs: ["W07", "B98"],
  },
];

export const naqshbandiViewIntroductions: Record<LineageView, string> = {
  formation:
    "The familiar succession is shown as a remembered Khwajagan inheritance. It preserves a community's continuity while early Persian witnesses reveal other circles and contested succession.",
  networks:
    "After Baha al-Din, companions form several circles. Ahrar's Samarkand network and the Kashghari-Jami line in Herat are separate currents; their placement beside one another does not imply a direct succession between them.",
  afterlives:
    "Dahbid, Mujaddidi and Khalidi formations are distinct historical developments. Open bridges compress missing intermediaries. The Golden Sufi Center appears in its own modern-community layer.",
};

export const naqshbandiRegions = [
  {
    id: "central-asia",
    place: "Central Asia & Afghanistan",
    period: "16th-19th centuries",
    title: "The roads return north",
    evidence: "scholarly-reconstruction" as const,
    relation: "Teaching networks / saintly households",
    paragraphs: [
      "Dahbid's descendants and deputies made new centers, while later Mujaddidi networks crossed Afghanistan and returned toward the Oxus. These were movements through households, scholarly routes, pilgrimage and political boundaries. The history continues well beyond the founding masters of Bukhara.",
      "Ziad's work helps restore this northern geography to the story. A regional network can preserve several authorities and routes at once; a single India-to-Central-Asia arrow would conceal that movement.",
    ],
    sourceRefs: ["Z21", "KAS", "W07"],
  },
  {
    id: "persianate",
    place: "Herat & the Persianate world",
    period: "15th century onward",
    title: "The page travels with the path",
    evidence: "documented" as const,
    relation: "Teaching / literary and textual influence",
    paragraphs: [
      "Jami's place in Herat shows how Persian writing became a vehicle of transmission. A biographical collection preserved a master for readers who would never meet his companions; poetry and instructional prose made the vocabulary of inward life available across a broad literary world.",
      "A manuscript's movement is not proof that every reader belonged to the order. Literary influence and institutional affiliation remain separate questions, even when they meet in the same person.",
    ],
    sourceRefs: ["JAMI", "P98", "W07"],
  },
  {
    id: "india",
    place: "Mughal India",
    period: "Late 16th-17th centuries",
    title: "Delhi, Sirhind and the language of renewal",
    evidence: "documented" as const,
    relation: "Branch formation / correspondence",
    paragraphs: [
      "Baqi Billah's Delhi circle prepared the setting for Ahmad Sirhindi's Mujaddidi renewal. The Maktubat became a far-reaching medium of spiritual counsel and theological reflection. Letters moved between particular correspondents before they became a widely read corpus.",
      "This development belongs within Mughal India's already rich Islamic and Sufi worlds. It is a major Naqshbandi afterlife with its own questions of authority, law and spiritual experience; it does not define every earlier or later branch.",
    ],
    sourceRefs: ["F71", "B98", "W07"],
  },
  {
    id: "ottoman",
    place: "Ottoman & Kurdish worlds",
    period: "15th-19th centuries",
    title: "Several arrivals, a later Khalidi flowering",
    evidence: "scholarly-reconstruction" as const,
    relation: "Localized institutions / authorized deputies",
    paragraphs: [
      "Naqshbandi teachers reached Ottoman lands centuries before Khalid al-Baghdadi. Le Gall's study of 1450-1700 follows an adaptable culture of travel, texts and institutions. That earlier presence deserves its own historical space.",
      "The nineteenth-century Khalidiyya developed through Khalid's formation with Shah Ghulam Ali and a wide deputy network. Ottoman and Kurdish settings shaped its reach. Earlier Naqshbandi arrivals and later Khalidi renewal are related histories, but their institutions and circumstances differ.",
    ],
    sourceRefs: ["LG05", "W07"],
  },
  {
    id: "china",
    place: "Eastern Turkistan & China",
    period: "17th-20th centuries",
    title: "Continuity with more than one name",
    evidence: "scholarly-reconstruction" as const,
    relation: "Hereditary descent / teaching / textual adoption",
    paragraphs: [
      "Kasani's descendants entered the saintly and political histories of Eastern Turkistan in distinct Afaqi and Ishaqi formations. Later transmission also moved through pilgrimage and Persian or Chaghatay writing into Chinese Muslim settings.",
      "Rian Thum's study traces Mujaddidi connections among communities with different names and languages. A genealogy, a copied text and a shared discipline may each carry a part of the inheritance. The presence of a Naqshbandi text alone does not establish one institutional lineage for all Hui, Uyghur, Salar or Dongxiang communities.",
    ],
    sourceRefs: ["KAS", "TH24", "W07"],
  },
  {
    id: "modern",
    place: "Modern global reception",
    period: "20th century-present",
    title: "New languages for an inherited path",
    evidence: "modern-community" as const,
    relation: "Community self-description / publishing and reception",
    paragraphs: [
      "The Golden Sufi Center presents a Naqshbandiyya-Mujaddidiyya continuity through South Asian teachers, Irina Tweedie and the Vaughan-Lee family. Its published chain, books and community accounts allow readers to understand that contemporary expression on its own terms.",
      "Idries Shah's English-language books belong to a different modern history of presentation and reception. Their teaching stories have introduced many readers to Sufi ideas. The Atlas does not use their modern language, or a living community's genealogy, as a substitute for early Persian evidence.",
    ],
    sourceRefs: ["GSC", "ISF", "W07"],
  },
];

export const naqshbandiSourceMethod = [
  {
    title: "Maslak al-arifin",
    layer: "Early Khwajagan memory",
    text: "The two redactions are central to understanding a contested inheritance. DeWeese's reconstruction reveals a factional setting that the standard later chain can conceal. A direct Persian comparison remains open.",
    refs: ["DWS"],
  },
  {
    title: "Anis al-talibin",
    layer: "Early sacred biography",
    text: "Long and short forms preserve Baha al-Din's biographical tradition. Attribution and recension affect how a report is read; a familiar anecdote cannot simply be assigned one early date without identifying its witness.",
    refs: ["ANIS", "T08"],
  },
  {
    title: "Qudsiyya & Fasl al-khitab",
    layer: "Parsa's textual work",
    text: "Qudsiyya gathers words associated with Baha al-Din. Fasl al-khitab is a broader compilation of Sufi learning. They serve different purposes. Our private Fasl translation is undergoing manuscript comparison, not offered here as a public edition.",
    refs: ["FK", "P98"],
  },
  {
    title: "Rashahat ayn al-hayat",
    layer: "Mature order memory",
    text: "Safi's early-sixteenth-century collection preserves lives, sayings and succession. Holland's English version was mediated through Turkish and consulted Persian; it is a discovery witness until controlled Persian collation is complete.",
    refs: ["R01", "W07"],
  },
  {
    title: "Ahrar's letters",
    layer: "Documentary relationships",
    text: "Letters illuminate specific requests, mediation and patronage. Gross and Urunbaev's edition provides Persian, translation and facsimiles. These documents can test a social claim without becoming proof for every later saintly story.",
    refs: ["GU02"],
  },
  {
    title: "Regional scholarship & living accounts",
    layer: "Changing historical settings",
    text: "Paul, Weismann, Le Gall, Buehler, Friedmann, Ziad and Thum help distinguish local formations. Modern community accounts tell us how a living group understands itself; independent history asks a different set of questions.",
    refs: ["P98", "LG05", "Z21", "TH24", "GSC"],
  },
];

export const naqshbandiPrinciples = [
  ["Hush dar dam", "Awareness of breath"],
  ["Nazar bar qadam", "Attention to the step"],
  ["Safar dar watan", "Journey within the homeland"],
  ["Khalwat dar anjuman", "Solitude amid the gathering"],
  ["Yad kard", "Remembrance"],
  ["Baz gasht", "Returning"],
  ["Nigah dasht", "Watchfulness"],
  ["Yad dasht", "Abiding recollection"],
  ["Wuquf-i zamani", "Awareness of time"],
  ["Wuquf-i adadi", "Awareness of number"],
  ["Wuquf-i qalbi", "Awareness of the heart"],
] as const;
