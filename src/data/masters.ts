export type Master = {
  slug: string;
  name: string;
  variants?: string[];
  dates: string;
  region: string;
  order: string; // order slug
  teachers?: string[];
  students?: string[];
  teachings: string[];
  works: string[];
  shrine?: string; // site slug
  impact: string;
  sources: string;
};

export const masters: Master[] = [
  {
    slug: "ahmad-yasawi",
    name: "Aḥmad Yasawī",
    variants: ["Khwāja Aḥmad Yasawī", "Hazrat Sultan"],
    dates: "c. 1093 – 1166 CE",
    region: "Yasi (Turkistan), Kazakh steppe",
    order: "yasaviyya",
    teachers: ["Yūsuf Hamadānī", "Arslan Bāb"],
    students: [],
    teachings: [
      "Vernacular Turkic mystical poetry",
      "The loud dhikr and the underground chilla",
      "Uncompromising renunciation of worldly rank",
    ],
    works: ["Dīwān-i Ḥikmat"],
    shrine: "turkistan",
    impact:
      "Founding father of Turkic Sufism. His shrine at Yasi, rebuilt by Amīr Timūr, is a pilgrimage centre for the Turkic world.",
    sources: "Devin DeWeese, Islamization and Native Religion in the Golden Horde.",
  },
  {
    slug: "najm-al-din-kubra",
    name: "Najm al-Dīn Kubrā",
    variants: ["Shaykh-i Walītarāsh"],
    dates: "1145 – 1221 CE",
    region: "Khwarazm (Kunya-Urgench)",
    order: "kubrawiyya",
    teachings: [
      "The science of coloured lights",
      "Ten principles of the mystical path",
      "Vision as verified knowledge",
    ],
    works: ["Fawāʾiḥ al-Jamāl wa Fawātiḥ al-Jalāl", "al-Uṣūl al-ʿAshara"],
    shrine: "kunya-urgench",
    impact:
      "Founder of the Kubrawī order and martyr of the Mongol conquest of Khwarazm. His disciples spread across Persia, India and Kashmir.",
    sources: "Henry Corbin, The Man of Light in Iranian Sufism.",
  },
  {
    slug: "yusuf-hamadani",
    name: "Yūsuf Hamadānī",
    dates: "1048 – 1140 CE",
    region: "Merv, Bukhara",
    order: "khwajagan",
    students: ["ahmad-yasawi", "abd-al-khaliq-ghujdawani"],
    teachings: ["Silent remembrance", "Interior discipline of the Khwājagān"],
    works: ["Rutbat al-Ḥayāt"],
    shrine: "merv",
    impact:
      "The great teacher from whom both the Yasavī and Naqshbandī currents of the Khwājagān flow.",
    sources: "Classical Khwājagān sources; Rashaḥāt ʿAyn al-Ḥayāt.",
  },
  {
    slug: "abd-al-khaliq-ghujdawani",
    name: "ʿAbd al-Khāliq Ghujdawānī",
    dates: "d. 1179 CE",
    region: "Ghujduwan, near Bukhara",
    order: "khwajagan",
    teachers: ["yusuf-hamadani"],
    teachings: [
      "The eight sacred principles of the Khwājagān",
      "Silent dhikr of the heart",
      "Yad kard, bāz gasht, nigāh dāsht, yād dāsht",
    ],
    works: ["Waṣiyyat-nāma", "Risāla"],
    shrine: "ghujduwan",
    impact:
      "Codifier of the Khwājagān method later inherited and expanded by the Naqshbandiyya.",
    sources: "Rashaḥāt ʿAyn al-Ḥayāt.",
  },
  {
    slug: "bahauddin-naqshband",
    name: "Bahāʾ al-Dīn Naqshband",
    dates: "1318 – 1389 CE",
    region: "Qasr-i ʿĀrifān, near Bukhara",
    order: "naqshbandiyya",
    teachings: [
      "The eleven principles of the path",
      "Silent, engraved dhikr",
      "Solitude in the crowd",
    ],
    works: ["Aurād of Bahāʾ al-Dīn"],
    shrine: "qasr-e-arifan",
    impact:
      "Eponym of the Naqshbandī order and one of the most influential Sufi masters of the Islamic east.",
    sources: "Rashaḥāt ʿAyn al-Ḥayāt; Anīs al-Ṭālibīn.",
  },
  {
    slug: "khwaja-ahrar",
    name: "Khwāja ʿUbaydullāh Aḥrār",
    dates: "1404 – 1490 CE",
    region: "Samarkand",
    order: "naqshbandiyya",
    teachings: [
      "The path as public service",
      "Silent dhikr and vigilance",
      "Political intercession as spiritual duty",
    ],
    works: ["Fiqarāt", "Volume of letters"],
    shrine: "samarkand",
    impact:
      "Timurid-era master whose social and political influence extended from Herat to Kashgar.",
    sources: "Rashaḥāt ʿAyn al-Ḥayāt; Jo-Ann Gross, The Waqf Documents of Khwāja ʿUbayd Allāh Aḥrār.",
  },
  {
    slug: "sayf-al-din-bakharzi",
    name: "Sayf al-Dīn Bākharzī",
    dates: "1190 – 1261 CE",
    region: "Bukhara",
    order: "kubrawiyya",
    teachers: ["najm-al-din-kubra"],
    teachings: ["Kubrawī contemplative discipline"],
    works: ["Wāqiʿāt"],
    shrine: "bukhara",
    impact: "Chief disciple of Najm al-Dīn Kubrā and pivotal figure of Bukharan Sufism.",
    sources: "Devin DeWeese, various studies on the Kubrawiyya.",
  },
  {
    slug: "ali-hamadani",
    name: "Mīr Sayyid ʿAlī Hamadānī",
    dates: "1314 – 1384 CE",
    region: "Hamadan, Khuttalan, Kashmir",
    order: "kubrawiyya",
    teachings: [
      "Kubrawī visionary path",
      "Adab and ethics of governance",
      "Islamisation of Kashmir",
    ],
    works: ["Dhakhīrat al-Mulūk", "Awrād-i Fatḥiyya"],
    shrine: "khuttalan",
    impact:
      "Transmitter of Kubrawī Sufism to Kashmir; formative figure in Kashmiri Islamic civilisation.",
    sources: "Habibullah Cheema; Kashmiri chronicles.",
  },
];

export const getMaster = (slug: string) => masters.find((m) => m.slug === slug);