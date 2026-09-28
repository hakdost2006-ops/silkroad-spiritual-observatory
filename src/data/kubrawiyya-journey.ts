export type KubrawiyyaJourneyChapter = {
  id: string;
  number: string;
  era: string;
  place: string;
  title: string;
  opening: string;
  paragraphs: string[];
  evidence: string;
  sourceNotes: { label: string; href?: string }[];
  visual: "illustration" | "portal" | "bakharzi" | "hamadani" | "none";
};

export const kubrawiyyaJourney: KubrawiyyaJourneyChapter[] = [
  {
    id: "before-the-name",
    number: "01",
    era: "Before c. 1200",
    place: "Egypt · Khuzistan · Anatolia · Khwarazm",
    title: "Before the order had a name",
    opening:
      "The Kubrawiyya began as a journey before it became a lineage: a young scholar from Khwarazm crossing the eastern Islamic world in search of teachers who could turn learning into transformation.",
    paragraphs: [
      "Najm al-Din Kubra did not invent his path from nothing. The early accounts differ over the order of his training, but they agree on three masters: Ruzbihan Misri, Isma'il Qasri, and 'Ammar Yasir al-Bidlisi. Kubra names Bidlisi in his own writing and remembers the severity of retreat under him. When he counted the days remaining in seclusion, the master corrected him: a seeker already measuring the road back to ordinary life had inwardly left the retreat.",
      "Because Kubra received his principal initiatic cloak from Bidlisi, the school's ancestry can be described as Suhrawardi-rooted. Yet an ancestry is not a prison. Kubra returned east to Khwarazm, far from his teachers' circles, and gathered their disciplines into a new spiritual language: remembrance as fire, the testing of visions, the education of desire, and an unusually exact attention to the lights and forms appearing within the seeker. Geography and spiritual emphasis gradually made a distinct house from an inherited path.",
    ],
    evidence:
      "The three teachers are common to the principal early accounts, but their sequence is disputed. Kubra's own reference gives 'Ammar Yasir al-Bidlisi special weight.",
    sourceNotes: [
      {
        label: "Hamid Algar, ‘Kobrawiya i. The Eponym,’ Encyclopaedia Iranica",
        href: "https://www.iranicaonline.org/articles/kobrawiya-i-the-eponym/",
      },
      { label: "Najm al-Din Kubra, Fawa'ih al-jamal, controlled Atlas working translation" },
    ],
    visual: "illustration",
  },
  {
    id: "khwarazmian-house",
    number: "02",
    era: "c. 1200-1221",
    place: "Gurganj · Khwarazm",
    title: "The house in Khwarazm",
    opening:
      "In Gurganj, one of the great cities of the lower Amu Darya, the traveller became a teacher and the teacher became the centre of a many-sided circle.",
    paragraphs: [
      "Later memory calls Kubra the shaykh who formed saints. The phrase is best understood as pedagogy, not spiritual manufacture. His disciples were taught to distrust intensity without truthfulness. A vision might be a mercy, a temptation, a residue of habit, or several things at once. The guide helped the seeker read experience through scripture, conduct, patience, and its fruit in the heart.",
      "The books made this formation portable. The Ten Principles compressed the path into repentance, renunciation, reliance, contentment, retreat, remembrance, complete turning, patience, watchfulness, and satisfaction. Adab al-Suluk placed the inward journey beside the hazards of travel through the world. Fawa'ih al-Jamal recorded a vast imaginal landscape while insisting that light was not self-interpreting. Arabic maxims, Persian recastings, manuals of conduct, and visionary testimony carried different rooms of the same house.",
      "Around Kubra gathered figures who would never become a single uniform succession: Majd al-Din Baghdadi, Sa'd al-Din Hamuyi, Najm al-Din Daya Razi, Razi al-Din 'Ali Lala, Sayf al-Din Bakharzi, Baba Kamal Jandi, and others. They learned from more than one master and later communities remembered different relations as decisive. The first Kubrawiyya was therefore less a centralized corporation than a family of formative circles.",
    ],
    evidence:
      "The founder corpus is directly controlled in the Atlas archive. Lists of disciples are historical reconstructions, while later silsilas give those relationships a more linear form.",
    sourceNotes: [
      {
        label: "Marijan Molé, ‘Traités mineurs de Najm al-Din Kubra,’ Annales islamologiques 4",
        href: "https://doi.org/10.3406/anisl.1963.895",
      },
      {
        label: "Atlas Kubrawi corpus: al-Usul, al-Ha'im, al-Sa'ir, Adab al-Suluk, and Fawa'ih",
      },
    ],
    visual: "none",
  },
  {
    id: "broken-city",
    number: "03",
    era: "1221",
    place: "The Mongol conquest of Khwarazm",
    title: "The city broke and the lineage became roads",
    opening:
      "The catastrophe that destroyed Kubra's city also scattered his school across the map.",
    paragraphs: [
      "Kubra's death is remembered during the Mongol assault on Khwarazm in 618/1221. Later narratives made that death a final image of fidelity: the old master remaining with the people of the city rather than seeking safety elsewhere. The details belong partly to hagiographic memory, but the rupture itself is historical. Khwarazm's institutions were devastated, and disciples who had already traveled west or east became bearers of an inheritance without its first home.",
      "This is the moment when the biography of one master becomes the biography of an order. Daya carried a Persian language of the path into Anatolia and Iran. Hamuyi and his descendants entered learned and courtly worlds farther west. 'Ali Lala became an ancestor of the Iranian line that would reach Simnani. Bakharzi established a durable house in Bukhara. Jandi worked among Turkic communities along the Syr Darya frontier. Dispersal did not produce one replica of Khwarazm; it produced several regional futures.",
    ],
    evidence:
      "The conquest and dispersal are secure. The dramatic details of Kubra's martyrdom are preserved through later historical and devotional narration and should be read as sacred memory as well as biography.",
    sourceNotes: [
      {
        label: "Hamid Algar, ‘Kobrawiya i. The Eponym,’ Encyclopaedia Iranica",
        href: "https://www.iranicaonline.org/articles/kobrawiya-i-the-eponym/",
      },
      { label: "Devin DeWeese, ‘The Eclipse of the Kubraviyah in Central Asia’" },
    ],
    visual: "portal",
  },
  {
    id: "three-roads",
    number: "04",
    era: "13th-15th centuries",
    place: "Bukhara · Jand · Iran",
    title: "Three roads carried the house onward",
    opening:
      "After Khwarazm, the order survived by becoming different things in different places: an endowed institution, a Turkic frontier lineage, and a Persian school of spiritual interpretation.",
    paragraphs: [
      "In Bukhara, Sayf al-Din Bakharzi gave Kubrawi authority walls, kitchens, land, students, and a tomb. Patronage connected with Sorqoqtani supported a college and endowment. By 1333, when Ibn Battuta stayed with Bakharzi's descendants, the khanqah was prosperous. Waqf documents record villages, fields, and gardens sustaining the complex. The school had become a social body capable of feeding guests, training students, and surviving its first shaykh.",
      "Along the Syr Darya, Baba Kamal Jandi's line entered a Turkic world. Several generations later it reached Abu al-Wafa Khwarazmi and Husayn Khwarazmi, whose Kashf al-Huda was dedicated to Abu al-Khayr Khan. This fragile manuscript trail matters because it prevents the Kubrawiyya from appearing only as a Persian literary tradition. One of its Central Asian afterlives spoke to the steppe and wrote in a Turkic language.",
      "Westward, the line through 'Ali Lala, Ahmad Jurbani, Nur al-Din Isfarayini, and 'Ala al-Dawla Simnani developed an increasingly articulated Persian spiritual anthropology. Simnani's teachings should not simply be placed in Kubra's mouth: they are a creative descendant, not a frozen repetition. Through correspondence, retreat discipline, Qur'anic interpretation, and the language of the subtle centres, the inherited science of perception entered a new intellectual age.",
    ],
    evidence:
      "Bukhara is supported by endowment records and travel testimony. The Jandi line depends on thinner, later material and is presented with greater caution. The Iranian line has a substantial textual record.",
    sourceNotes: [
      {
        label: "Devin DeWeese, Studies on Sufism in Central Asia, studies I and III",
      },
      {
        label: "‘Bukhara iii. After the Mongol Invasion,’ Encyclopaedia Iranica",
        href: "https://www.iranicaonline.org/articles/bukhara-iii/",
      },
      {
        label: "Hamid Algar, ‘Kobrawiya ii. The Order,’ Encyclopaedia Iranica",
        href: "https://www.iranicaonline.org/articles/kobrawiya-ii-the-order/",
      },
    ],
    visual: "bakharzi",
  },
  {
    id: "eastern-flowering",
    number: "05",
    era: "14th-15th centuries",
    place: "Hamadan · Badakhshan · Khuttalan · Kashmir",
    title: "The eastern flowering of 'Ali Hamadani",
    opening:
      "With Mir Sayyid 'Ali Hamadani, the Kubrawi inheritance crossed mountains and became a regional civilization of teaching, travel, writing, and remembrance.",
    paragraphs: [
      "Hamadani received formation through disciples of Simnani, especially Mahmud Mazdaqani and 'Ali Dusti. He spent years traveling, collecting authorizations and entering Sufi circles across the Islamic world. Later he moved east through Badakhshan and Khuttalan and became deeply associated with Kashmir. The road matters as much as the destination: Hamadani joined Iranian learning, Central Asian sacred geography, and a Kashmiri future.",
      "His influence continued through people and places. Ja'far Badakhshi became his biographer. His son Mir Muhammad Hamadani returned to Kashmir. Khanqahs in Khuttalan and Srinagar anchored a community, while writings and litanies carried a Persianate ethical and devotional world. His body was taken to Kulob, where the shrine remains a great sacred centre; in Kashmir, Shah-i Hamadan became a name woven into institutions, memory, and everyday devotion.",
      "The story must still resist a single heroic conversion narrative. Kashmir already possessed a complex religious and political history, and early and late accounts do not always agree on Hamadani's journeys or the scale of his entourage. His importance is not diminished by precision. It becomes clearer: he was a catalytic master whose followers, texts, and institutions helped give Islam and Persian learning a durable regional form.",
    ],
    evidence:
      "Hamadani's writings and Kubrawi affiliation are secure. Numbers of companions, exact itineraries, and sweeping conversion claims vary across hagiography and later historical memory.",
    sourceNotes: [
      {
        label: "Gerhard Böwering, ‘Ali Hamadani,’ Encyclopaedia Iranica",
        href: "https://www.iranicaonline.org/articles/ali-b-32/",
      },
      { label: "Devin DeWeese, ‘Sayyid Ali Hamadani and Kubrawi Hagiographical Traditions’" },
    ],
    visual: "hamadani",
  },
  {
    id: "descendants",
    number: "06",
    era: "15th century onward",
    place: "Iran · Kashmir · India · China",
    title: "The descendants did not all keep the family name",
    opening:
      "A spiritual lineage can remain alive by branching, changing language, or entering another institutional identity.",
    paragraphs: [
      "Hamadani's transmission generated a Hamadaniyya memory in Kashmir and the highlands to its north. Through his disciple Ishaq Khuttalani, the line divided again: the followers of Muhammad Nurbakhsh formed the Nurbakhshiyya, while the followers of 'Abd Allah Barzishabadi became associated with the Dhahabiyya. These were not merely new labels on an unchanged institution. Each branch developed its own doctrinal, communal, and political history.",
      "Other routes widened the family resemblance. Ashraf Jahangir Simnani carried a Simnani-connected inheritance into India, where descendants are sometimes treated as the Ashrafiyya. Later sources also associate 'Abd Allah Shattari with Hamadani, though that relation should be presented as a reported initiatic connection rather than a simple claim that the Shattariyya was institutionally born from the Kubrawiyya. A Bukhara line connected with Bakharzi also became a spiritual ancestor of the Indian Firdawsiyya.",
      "Farther east, Kubrawi teaching entered China, where texts connected with the tradition were translated and communities used Chinese forms of the order's name. This eastern history remains less visible in popular accounts, but it reveals the full Silk Road scale of the inheritance: from Khwarazm not only toward Persia and Kashmir, but into the Chinese Muslim world.",
    ],
    evidence:
      "Nurbakhshiyya, Dhahabiyya, Hamadaniyya, and the Bakharzi-Firdawsi connection are lineage histories. Ashrafi and Shattari relations require more qualified language. Chinese Kubrawi transmission is documented but needs its own future study.",
    sourceNotes: [
      {
        label: "Hamid Algar, ‘Kobrawiya ii. The Order,’ Encyclopaedia Iranica",
        href: "https://www.iranicaonline.org/articles/kobrawiya-ii-the-order/",
      },
      {
        label: "Gerhard Böwering, ‘Ali Hamadani,’ Encyclopaedia Iranica",
        href: "https://www.iranicaonline.org/articles/ali-b-32/",
      },
    ],
    visual: "none",
  },
  {
    id: "afterlife",
    number: "07",
    era: "16th century to the present",
    place: "Central Asia and its connected worlds",
    title: "Eclipse without extinction",
    opening:
      "By the time the Kubrawiyya faded as a visible Central Asian institution, it had already entered too many books, shrines, and successor communities simply to disappear.",
    paragraphs: [
      "By the end of the sixteenth century, the Naqshbandiyya had largely displaced the Kubrawiyya as a named order in its Central Asian homeland. That eclipse was real. The continued visitation of Kubra's tomb does not prove an uninterrupted Kubrawi chain, and later Naqshbandi or Yasawi devotion at the shrine should not be relabeled as Kubrawi practice.",
      "Yet an institution can end while an inheritance remains active in other vessels. Kubra's writings continued to teach the discernment of inward experience. Simnani's developments shaped Persian Sufi psychology. Hamadani's descendants carried the memory into Kashmir, Badakhshan, and later branches. Bukhara retained the tomb and household of Bakharzi. Kunya-Urgench held the founder in sacred geography even when another order shaped the living networks around it.",
      "The Kubrawiyya's biography therefore has no single final date. Its corporate life narrowed; its descendants diverged; its vocabulary traveled; its saints were remembered by communities that no longer bore its name. The order survived not as one unbroken institution everywhere, but as a constellation of texts, practices, places, families, and acts of remembrance.",
    ],
    evidence:
      "Institutional succession, devotional afterlife, and intellectual influence are kept separate. The Atlas does not treat every later practice of light, retreat, or shrine visitation as Kubrawi without a demonstrable channel.",
    sourceNotes: [
      { label: "Devin DeWeese, ‘The Eclipse of the Kubraviyah in Central Asia’" },
      {
        label: "Daniel Beben, ‘After the Eclipse,’ in From the Khan's Oven",
        href: "https://doi.org/10.1163/9789004471177_007",
      },
    ],
    visual: "none",
  },
];

export const kubrawiyyaBranches = [
  {
    name: "Hamadaniyya",
    route: "Simnani line → 'Ali Hamadani → Khuttalan and Kashmir",
    kind: "Direct regional continuation",
    note: "A Kubrawi inheritance carried through Hamadani's family, disciples, khanqahs, writings, and shrine memory.",
  },
  {
    name: "Nurbakhshiyya",
    route: "'Ali Hamadani → Ishaq Khuttalani → Muhammad Nurbakhsh",
    kind: "Descendant branch",
    note: "A major post-Hamadani formation with its own doctrinal and political history in Iran and adjacent regions.",
  },
  {
    name: "Dhahabiyya",
    route: "'Ali Hamadani → Ishaq Khuttalani → 'Abd Allah Barzishabadi",
    kind: "Descendant branch",
    note: "An Iranian branch associated with the other side of the succession after Ishaq Khuttalani.",
  },
  {
    name: "Ashrafiyya",
    route: "Simnani's world → Ashraf Jahangir Simnani → India",
    kind: "Related suborder tradition",
    note: "Often treated as a suborder descending through a Kubrawi-Simnani environment; its precise institutional relation deserves separate study.",
  },
  {
    name: "Firdawsiyya",
    route: "Sayf al-Din Bakharzi's transmission → India",
    kind: "Spiritual descendant",
    note: "The Indian line remembered through Bakharzi, distinct from the hereditary Bukharan household that continued around his shrine.",
  },
  {
    name: "Shattari connection",
    route: "Later report linking 'Abd Allah Shattari with 'Ali Hamadani",
    kind: "Reported initiatic connection",
    note: "Presented as a later lineage report, not as proof that the Shattariyya was simply a Kubrawi branch.",
  },
] as const;

export const kubrawiyyaRoute = [
  ["Before 1200", "The teachers", "Egypt and the western Islamic world"],
  ["c. 1200", "The house", "Gurganj in Khwarazm"],
  ["1221", "The dispersal", "Bukhara, Jand, Iran"],
  ["13th-14th c.", "The Persian development", "Isfarayin and Simnan"],
  ["14th-15th c.", "The eastern flowering", "Badakhshan, Khuttalan, Kashmir"],
  ["15th c. onward", "The branches", "Iran, India, Kashmir, China"],
] as const;

export const kubrawiyyaPublicSources = [
  {
    title: "The founder",
    citation: "Hamid Algar, ‘Kobrawiya i. The Eponym,’ Encyclopaedia Iranica.",
    href: "https://www.iranicaonline.org/articles/kobrawiya-i-the-eponym/",
  },
  {
    title: "The order and its branches",
    citation: "Hamid Algar, ‘Kobrawiya ii. The Order,’ Encyclopaedia Iranica.",
    href: "https://www.iranicaonline.org/articles/kobrawiya-ii-the-order/",
  },
  {
    title: "The Central Asian institutional history",
    citation:
      "Devin DeWeese, Studies on Sufism in Central Asia, especially the studies of eclipse, Jand, Hamadani, and 'Ali Lala.",
  },
  {
    title: "The life after eclipse",
    citation:
      "Daniel Beben, ‘After the Eclipse: Shaykh Khalilullah Badakhshani and the Legacy of the Kubraviyah in Central Asia.’",
    href: "https://doi.org/10.1163/9789004471177_007",
  },
  {
    title: "The founder's shorter works",
    citation:
      "Marijan Molé, ‘Traités mineurs de Najm al-Din Kubra,’ Annales islamologiques 4 (1963): 1-78.",
    href: "https://doi.org/10.3406/anisl.1963.895",
  },
] as const;
