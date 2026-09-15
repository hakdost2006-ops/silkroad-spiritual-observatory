export type Site = {
  slug: string;
  name: string;
  city: string;
  country: string;
  founded: string;
  orders: string[];
  masters: string[];
  description: string;
  // approximate map position on a 100x100 canvas (x from west, y from north)
  x: number;
  y: number;
};

export const sites: Site[] = [
  {
    slug: "bukhara",
    name: "Bukhara — Bahāʾ al-Dīn Complex",
    city: "Bukhara",
    country: "Uzbekistan",
    founded: "14th century",
    orders: ["naqshbandiyya", "khwajagan", "kubrawiyya"],
    masters: ["bahauddin-naqshband", "sayf-al-din-bakharzi"],
    description:
      "The spiritual capital of the Naqshbandī world, ringed by the great madrasas of Bukhara and the shrine complex of Bahāʾ al-Dīn at Qasr-i ʿĀrifān.",
    x: 52,
    y: 60,
  },
  {
    slug: "qasr-e-arifan",
    name: "Qasr-i ʿĀrifān",
    city: "Near Bukhara",
    country: "Uzbekistan",
    founded: "14th century",
    orders: ["naqshbandiyya"],
    masters: ["bahauddin-naqshband"],
    description:
      "The shrine of Khwāja Bahāʾ al-Dīn Naqshband, principal ziyāra of the Naqshbandiyya.",
    x: 53,
    y: 60,
  },
  {
    slug: "samarkand",
    name: "Samarkand",
    city: "Samarkand",
    country: "Uzbekistan",
    founded: "Timurid era and earlier",
    orders: ["naqshbandiyya"],
    masters: ["khwaja-ahrar"],
    description:
      "Timurid capital, home to Khwāja Aḥrār and the Shāh-i Zinda necropolis of saints. The Registan crystallises the visual grammar of Central Asian Islam.",
    x: 58,
    y: 63,
  },
  {
    slug: "turkistan",
    name: "Turkistan (Yasi)",
    city: "Turkistan",
    country: "Kazakhstan",
    founded: "12th c.; shrine 14th c. (Timur)",
    orders: ["yasaviyya"],
    masters: ["ahmad-yasawi"],
    description:
      "Site of the vast mausoleum of Aḥmad Yasawī commissioned by Amīr Timūr — the most iconic Yasavī monument on the steppe.",
    x: 58,
    y: 42,
  },
  {
    slug: "sayram",
    name: "Sayram",
    city: "Sayram",
    country: "Kazakhstan",
    founded: "Ancient",
    orders: ["yasaviyya"],
    masters: ["ahmad-yasawi"],
    description: "Birthplace of Aḥmad Yasawī, of ancient sacred lineage on the Kazakh steppe.",
    x: 60,
    y: 40,
  },
  {
    slug: "kunya-urgench",
    name: "Kunya-Urgench",
    city: "Kunya-Urgench",
    country: "Turkmenistan",
    founded: "12th–13th c.",
    orders: ["kubrawiyya"],
    masters: ["najm-al-din-kubra"],
    description:
      "Medieval Khwarazmian capital and shrine city of Najm al-Dīn Kubrā, martyred here in 1221.",
    x: 40,
    y: 45,
  },
  {
    slug: "merv",
    name: "Merv",
    city: "Merv",
    country: "Turkmenistan",
    founded: "Ancient / 11th–12th c.",
    orders: ["khwajagan"],
    masters: ["yusuf-hamadani"],
    description:
      "Once one of the largest cities in the medieval world; site of the shrine of Yūsuf Hamadānī.",
    x: 42,
    y: 55,
  },
  {
    slug: "ghujduwan",
    name: "Ghujduwan",
    city: "Ghujduwan",
    country: "Uzbekistan",
    founded: "12th c.",
    orders: ["khwajagan", "naqshbandiyya"],
    masters: ["abd-al-khaliq-ghujdawani"],
    description: "Shrine of ʿAbd al-Khāliq Ghujdawānī, cradle of the Khwājagān method.",
    x: 54,
    y: 60,
  },
  {
    slug: "khiva",
    name: "Khiva (Khwarazm)",
    city: "Khiva",
    country: "Uzbekistan",
    founded: "Medieval to early modern",
    orders: ["kubrawiyya", "naqshbandiyya"],
    masters: [],
    description:
      "Walled oasis city of the Khwarazm khanate, layered with madrasas, minarets and the memory of Kubrawī Sufism.",
    x: 44,
    y: 50,
  },
  {
    slug: "khuttalan",
    name: "Khuttalan",
    city: "Kulob region",
    country: "Tajikistan",
    founded: "14th c.",
    orders: ["kubrawiyya"],
    masters: ["ali-hamadani"],
    description: "Resting place of Mīr Sayyid ʿAlī Hamadānī, apostle of Islam to Kashmir.",
    x: 60,
    y: 68,
  },
  {
    slug: "balkh",
    name: "Balkh",
    city: "Balkh",
    country: "Afghanistan",
    founded: "Ancient",
    orders: ["khwajagan", "chishtiyya"],
    masters: [],
    description:
      "'Mother of cities', early hearth of Khurasani Sufism and birthplace of Rūmī's family.",
    x: 55,
    y: 75,
  },
  {
    slug: "kashgar",
    name: "Kashgar",
    city: "Kashgar",
    country: "East Turkistan (Xinjiang)",
    founded: "Silk Road era",
    orders: ["naqshbandiyya"],
    masters: [],
    description: "Easternmost node of Naqshbandī Central Asia; shrine of the Afāq Khwājas.",
    x: 78,
    y: 55,
  },
  {
    slug: "fergana",
    name: "Fergana Valley",
    city: "Fergana",
    country: "Uzbekistan / Kyrgyzstan",
    founded: "Ancient",
    orders: ["naqshbandiyya", "yasaviyya"],
    masters: [],
    description: "Fertile valley of saints, poets, and enduring Sufi transmission.",
    x: 68,
    y: 55,
  },
  {
    slug: "nursafardiyya-centers",
    name: "Nursafardiyya Centres",
    city: "Various",
    country: "Uzbekistan",
    founded: "Contemporary",
    orders: ["nursafardiyya"],
    masters: [],
    description:
      "Contemporary Uzbek centres of the Nursafardiyya living tradition of practice, healing and study.",
    x: 54,
    y: 62,
  },
];

export const getSite = (slug: string) => sites.find((s) => s.slug === slug);
