export type Order = {
  slug: string;
  name: string;
  altNames?: string[];
  founder: string;
  founded: string;
  region: string;
  tagline: string;
  overview: string;
  teachings: string[];
  practices: string[];
  texts: { title: string; author?: string }[];
  masters: string[]; // master slugs
  sites: string[]; // site slugs
  related: string[]; // order slugs
  legacy: string;
  notes: string;
};

export const orders: Order[] = [
  {
    slug: "kubrawiyya",
    name: "Kubrawiyya",
    altNames: ["Kubravi", "Kubrawi"],
    founder: "Najm al-Dīn Kubrā",
    founded: "c. 1200 CE — Khwarazm",
    region: "Khwarazm, Persia, Central Asia, Kashmir, India, China",
    tagline: "A Khwarazmian path whose descendants crossed the Silk Roads",
    overview:
      "The Kubrawiyya grew from Najm al-Dīn Kubrā's teaching house in Khwarazm, but its life cannot be contained within one founder or city. The Mongol destruction of 1221 turned the lineage into roads: toward Bukhara and the Turkic steppe, through Persia and Simnan, and onward with ʿAlī Hamadānī into Badakhshan and Kashmir. Its descendants later included the Nurbakhshiyya and Dhahabiyya, while its texts and sacred geographies continued to shape Sufi memory from India to China.",
    teachings: [
      "The science of luminous visions (photisms)",
      "Suhbat with the shaykh as mirror of the soul",
      "Purification through the ten principles of the path",
    ],
    practices: [
      "Silent and vocal dhikr",
      "Forty-day retreat (chilla)",
      "Contemplation of coloured lights",
    ],
    texts: [
      { title: "Fawāʾiḥ al-Jamāl wa Fawātiḥ al-Jalāl", author: "Najm al-Dīn Kubrā" },
      { title: "Miṣbāḥ al-Hidāya", author: "ʿIzz al-Dīn Kāshānī" },
    ],
    masters: ["najm-al-din-kubra", "sayf-al-din-bakharzi", "ali-hamadani"],
    sites: ["kunya-urgench", "bukhara"],
    related: ["nurbakhshiyya", "khwajagan"],
    legacy:
      "The Kubrawī inheritance survived both through named descendant lineages and through a wider afterlife of visionary psychology, retreat discipline, Persian spiritual anthropology, shrines, manuscripts, and regional memory.",
    notes:
      "Ibn ʿArabī referred to Najm al-Dīn Kubrā as the 'shaykh who fashions saints'. His martyrdom at the hands of the Mongols (1221) is preserved in the collective memory of Central Asia.",
  },
  {
    slug: "yasaviyya",
    name: "Yasaviyya",
    altNames: ["Yassavi", "Yasawi"],
    founder: "Aḥmad Yasawī",
    founded: "12th c. CE — Turkistan (Yasi)",
    region: "Turkistan, Fergana, Volga, Anatolia",
    tagline: "The Turkic path of the loud dhikr and the wandering dervish",
    overview:
      "The Yasaviyya emerged from the Turkic steppe under Khwāja Aḥmad Yasawī of Yasi (modern Turkistan). It is celebrated for its vernacular Ḥikam poetry and its role in the Islamisation of the Turkic peoples of Inner Asia.",
    teachings: [
      "The pedagogy of the ḥikma (wise verse)",
      "Detachment from the world (zuhd)",
      "Turkic vernacular transmission of Sufi doctrine",
    ],
    practices: [
      "Loud dhikr of the saw (dhikr-i arra)",
      "Sacred wandering (safar)",
      "Underground chilla-khāna retreat",
    ],
    texts: [{ title: "Dīwān-i Ḥikmat", author: "Aḥmad Yasawī" }],
    masters: ["ahmad-yasawi", "yusuf-hamadani"],
    sites: ["turkistan", "sayram"],
    related: ["khwajagan", "bektashiyya"],
    legacy:
      "The Yasaviyya's influence radiated through the Bektashī order of Anatolia and remains a foundational memory of Turkic Sufism honoured today across Kazakhstan, Uzbekistan and Turkey.",
    notes:
      "The immense mausoleum built by Timur at Yasi (Turkistan) remains one of the greatest architectural expressions of a Sufi shrine.",
  },
  {
    slug: "khwajagan",
    name: "Khwājagān",
    altNames: ["The Masters"],
    founder: "ʿAbd al-Khāliq Ghujdawānī",
    founded: "12th c. CE — Bukhara",
    region: "Bukhara, Ghujduwan, Transoxiana",
    tagline: "The path of the masters and the eight sacred sayings",
    overview:
      "The Khwājagān — 'the Masters' — names the medieval Central Asian field of teachers later remembered as the ancestry of the Naqshbandiyya. Eight sacred sayings are traditionally associated with ʿAbd al-Khāliq Ghujdawānī; three further principles are connected with Bahāʾ al-Dīn Naqshband in the later Naqshbandi formulation.",
    teachings: [
      "Silent remembrance of the heart (dhikr-i khafī)",
      "The eight sacred sayings (kalimāt qudsiyya), later expanded to eleven principles",
      "Solitude in the crowd (khalwat dar anjuman)",
    ],
    practices: ["Silent dhikr", "Ṣuḥbat with the shaykh", "Vigilance over the breath"],
    texts: [{ title: "Kalimāt-i Qudsiyya" }, { title: "Risāla of ʿAbd al-Khāliq Ghujdawānī" }],
    masters: ["yusuf-hamadani", "abd-al-khaliq-ghujdawani", "bahauddin-naqshband"],
    sites: ["ghujduwan", "bukhara"],
    related: ["naqshbandiyya", "yasaviyya"],
    legacy:
      "From the Khwājagān sprang the Naqshbandī sensibility that would define Central Asian, Mughal and Ottoman Sufism.",
    notes:
      "Yūsuf Hamadānī is regarded as the pivot shared between the Yasavī and Naqshbandī branches of the Khwājagān.",
  },
  {
    slug: "naqshbandiyya",
    name: "Naqshbandiyya",
    founder: "Bahāʾ al-Dīn Naqshband",
    founded: "14th c. CE — Bukhara",
    region: "Bukhara, Transoxiana, India, Ottoman lands",
    tagline: "The path of the silent engraved remembrance",
    overview:
      "The Naqshbandiyya crystallised the Khwājagān inheritance under Khwāja Bahāʾ al-Dīn Naqshband. Its distinctive silent dhikr, sober adherence to the Prophetic Sunna, and integration with public life made it the most widespread order of the Islamic east.",
    teachings: [
      "Silent dhikr engraved in the heart",
      "The eleven principles (kalimāt qudsiyya)",
      "Sobriety, sharīʿa and companionship of the shaykh",
    ],
    practices: [
      "Silent dhikr",
      "Rābiṭa (bond with the shaykh)",
      "Muraqaba (vigilant contemplation)",
    ],
    texts: [
      { title: "Rashaḥāt ʿAyn al-Ḥayāt", author: "Fakhr al-Dīn Kāshifī" },
      { title: "Maktūbāt", author: "Aḥmad Sirhindī" },
    ],
    masters: ["bahauddin-naqshband", "khwaja-ahrar"],
    sites: ["bukhara", "qasr-e-arifan"],
    related: ["khwajagan", "mujaddidiyya"],
    legacy:
      "Through the Mujaddidī reform of Aḥmad Sirhindī the Naqshbandiyya entered Mughal India; through Khwāja Aḥrār it shaped the political and cultural life of Timurid Transoxiana.",
    notes:
      "The tomb of Bahāʾ al-Dīn Naqshband at Qasr-i ʿĀrifān outside Bukhara remains one of the most visited Sufi shrines in Central Asia.",
  },
  {
    slug: "mujaddidiyya",
    name: "Mujaddidiyya",
    founder: "Aḥmad Sirhindī",
    founded: "17th c. CE — Sirhind, Punjab",
    region: "Mughal India, Ottoman lands, Central Asia",
    tagline: "The Naqshbandī renewal of the second millennium",
    overview:
      "A Naqshbandī reform branch founded by Imām Rabbānī Aḥmad Sirhindī, the Mujaddidiyya reasserted classical Sunnī orthodoxy in Mughal India while refining Naqshbandī contemplative doctrine into the science of the laṭāʾif.",
    teachings: [
      "The subtle centres (laṭāʾif) of the heart",
      "Waḥdat al-shuhūd (unity of witnessing)",
      "Renewal of the Prophetic Sunna",
    ],
    practices: ["Silent dhikr through the laṭāʾif", "Muraqaba", "Suhba"],
    texts: [{ title: "Maktūbāt-i Imām Rabbānī", author: "Aḥmad Sirhindī" }],
    masters: [],
    sites: [],
    related: ["naqshbandiyya"],
    legacy: "Foundational for Naqshbandī expansion into the Ottoman Mediterranean and Kurdistan.",
    notes: "The Maktūbāt remain a central reference of later Naqshbandī spirituality.",
  },
  {
    slug: "nurbakhshiyya",
    name: "Nūrbakhshiyya",
    founder: "Muḥammad Nūrbakhsh",
    founded: "15th c. CE — Khurasan",
    region: "Khurasan, Kashmir, Baltistan",
    tagline: "A Kubrawī offshoot of the Nūr al-Muḥammadī",
    overview:
      "A Kubrawī branch centred on the messianic teaching of Muḥammad Nūrbakhsh, whose spiritual imprint endures particularly in Baltistan and parts of Kashmir.",
    teachings: ["Mystical Mahdism", "The Muhammadan Light", "Kubrawī contemplative discipline"],
    practices: ["Dhikr", "Chilla"],
    texts: [{ title: "Risālat al-Hudā", author: "Muḥammad Nūrbakhsh" }],
    masters: [],
    sites: [],
    related: ["kubrawiyya"],
    legacy: "Living Nūrbakhshī communities persist today in Baltistan.",
    notes: "",
  },
  {
    slug: "bektashiyya",
    name: "Bektashiyya",
    founder: "Ḥājjī Bektāsh Walī",
    founded: "13th c. CE — Anatolia",
    region: "Anatolia, Balkans",
    tagline: "The Anatolian daughter of the Yasavī steppe",
    overview:
      "Traditionally traced to Ḥājjī Bektāsh Walī, whose lineage draws from Aḥmad Yasawī's Turkic dervishes. Central to Ottoman Janissary spirituality and to Alevi-Bektashi culture today.",
    teachings: ["Love of the Ahl al-Bayt", "Interior sharīʿa", "Poetic transmission"],
    practices: ["Cem ritual", "Semah", "Communal meal (sofra)"],
    texts: [{ title: "Makālāt", author: "Ḥājjī Bektāsh Walī" }],
    masters: [],
    sites: [],
    related: ["yasaviyya"],
    legacy: "Deep influence on Anatolian and Balkan spiritual culture.",
    notes: "",
  },
  {
    slug: "chishtiyya",
    name: "Chishtiyya",
    founder: "Muʿīn al-Dīn Chishtī",
    founded: "12th c. CE — Chisht, Afghanistan",
    region: "Khurasan, India",
    tagline: "Samāʿ, hospitality, and love as method",
    overview:
      "Rooted in Chisht near Herat, the Chishtiyya became the most beloved Sufi order of the Indian subcontinent. Its Central Asian roots connect it to the wider Khurasani spiritual world.",
    teachings: ["Universal love", "Service to creation", "Music as remembrance"],
    practices: ["Samāʿ (spiritual audition)", "Langar (open kitchen)", "Dhikr"],
    texts: [{ title: "Fawāʾid al-Fuʾād", author: "Amīr Ḥasan Sijzī" }],
    masters: [],
    sites: [],
    related: ["kubrawiyya"],
    legacy: "Defining spiritual culture of the Indian subcontinent.",
    notes: "",
  },
  {
    slug: "nursafardiyya",
    name: "Nursafardiyya",
    altNames: ["Nur Safar Way"],
    founder: "Contemporary Uzbek transmission",
    founded: "Living tradition — Uzbekistan",
    region: "Uzbekistan and diaspora",
    tagline: "A living Central Asian path of healing, martial arts and Zikr",
    overview:
      "Nursafardiyya is a contemporary Uzbek Sufi tradition whose own materials locate its direct spiritual reference in Ahmad Yasawī and the Yasawiyya path. It integrates Zikr and Sema, traditional healing, Sufi martial arts, breathwork, sacred letters and herbal medicine within a coherent living pedagogy.",
    teachings: [
      "Integral practice of body, breath and heart",
      "Sacred letters and their inner correspondences",
      "Adab (spiritual courtesy) as ground of the path",
    ],
    practices: [
      "Zikr and Sema",
      "Sufi martial arts",
      "Breathwork (nafas)",
      "Traditional wellness and herbal support",
    ],
    texts: [{ title: "Archival practice manuals (in preparation)" }],
    masters: [],
    sites: ["nursafardiyya-centers"],
    related: ["yasaviyya"],
    legacy:
      "An active carrier of Uzbek Sufi memory into the twenty-first century, presented as spiritual practice and traditional wellness rather than medical treatment.",
    notes:
      "Materials in the Nursafardiyya section are shared as archival, devotional and wellness resources. Nothing here is medical advice.",
  },
];

export const featuredOrderSlugs = [
  "kubrawiyya",
  "yasaviyya",
  "khwajagan",
  "naqshbandiyya",
  "nursafardiyya",
];

export const getOrder = (slug: string) => orders.find((o) => o.slug === slug);
