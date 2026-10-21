import kubraMausoleumExterior from "../assets/kubra/kunya-urgench-kubra-mausoleum-exterior.jpg";

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
  biography: string[];
  contributions: string[];
  tomb: {
    name: string;
    location: string;
    geography: string;
  };
  image?: {
    src: string;
    alt: string;
    credit: string;
    sourceUrl: string;
    license: string;
  };
  evidence: string;
  impact: string;
  sources: string;
};

export const masters: Master[] = [
  {
    slug: "ahmad-yasawi",
    name: "Aḥmad Yasawī",
    variants: ["Khwāja Aḥmad Yasawī", "Hazrat Sultan"],
    dates: "d. 1166 CE (traditional chronology)",
    region: "Sayram, Yesi (Turkistan), Bukhara",
    order: "yasaviyya",
    teachers: ["Yūsuf Hamadānī", "Arslan Bāb (traditional account)"],
    students: ["sufi-muhammad-danishmand", "hakim-ata"],
    teachings: [
      "Vernacular Turkic mystical poetry",
      "The loud dhikr and the underground chilla",
      "Uncompromising renunciation of worldly rank",
    ],
    works: ["Dīwān-i Ḥikmat"],
    shrine: "turkistan",
    biography: [
      "Aḥmad Yasawī is remembered as a formative teacher of Turkic Sufism. Later tradition places his early life in Sayram and his mature teaching in Yasi, now Turkistan, on the caravan and steppe routes of southern Kazakhstan.",
      "His name is inseparable from the Dīwān-i Ḥikmat, a corpus of Turkic wisdom poems whose textual history is complex and whose surviving manuscripts are later. The poems made devotional language and ethical instruction available beyond Persian- and Arabic-reading scholarly circles.",
    ],
    contributions: [
      "Gave Turkic mystical poetry an enduring devotional authority.",
      "Became the central remembered master of the Yasawiyya tradition.",
      "Made Yasi/Turkistan a major pilgrimage landscape for the Turkic Muslim world.",
    ],
    tomb: {
      name: "Mausoleum of Khoja Ahmed Yasawi",
      location: "Turkistan (historical Yasi), Turkistan Region, Kazakhstan",
      geography:
        "Southern Kazakh steppe, at the meeting point of oasis, caravan, and nomadic routes.",
    },
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Mausoleum_of_Khoja_Ahmed_Yasawi_in_Hazrat-e_Turkestan%2C_Kazakhstan.jpg",
      alt: "Mausoleum of Khoja Ahmed Yasawi in Turkistan",
      credit: "Petar Milošević / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Mausoleum_of_Khoja_Ahmed_Yasawi_in_Hazrat-e_Turkestan,_Kazakhstan.jpg",
      license: "CC BY-SA 4.0",
    },
    evidence:
      "The shrine and broad cultural influence are securely documented; early-life details, dates, and the Arslan Bāb connection combine historical evidence with later devotional tradition.",
    impact:
      "Foundational Turkic Sufi figure and the central master of the Yasawiyya tradition. His shrine at Yasi, rebuilt by Amīr Timūr, is a pilgrimage centre for the Turkic world.",
    sources:
      "UNESCO, Mausoleum of Khoja Ahmed Yasawi; Yasawiyya manuscript traditions; modern scholarship on Turkic Sufism.",
  },
  {
    slug: "arslan-baba",
    name: "Arslan Bāb",
    variants: ["Arystan Bab", "Arslān Bābā"],
    dates: "Traditional figure; historical dates unresolved",
    region: "Otrar oasis, southern Kazakhstan",
    order: "yasaviyya",
    students: ["ahmad-yasawi"],
    teachings: [
      "Sacred trust expressed through service",
      "Prophetic inheritance in Yasawi devotional memory",
      "Formation of the young seeker through companionship",
    ],
    works: ["No securely established independent corpus"],
    biography: [
      "Arslan Baba stands at the threshold of Aḥmad Yasawī's sacred biography. In the best-known devotional account, he carries a trust associated with the Prophet and transmits it to the young Yasawī. This story does not function like a modern dated biography: it expresses how Yasawi communities understood blessing, fidelity, and the passage of spiritual responsibility across generations.",
      "His remembered landscape lies near Otrar, one of the great meeting places of oasis and steppe. The mausoleum identified with him became an enduring station of pilgrimage, often visited before the shrine of Yasawī at Turkistan. The ritual geography is historically real even where the earliest layers of the master's life remain beyond documentary recovery.",
    ],
    contributions: [
      "Embodies the intimate, hagiographical beginning of Yasawi formation.",
      "Links the Yasawi story to Otrar's sacred and caravan geography.",
      "Anchors a pilgrimage relationship between the Arystan Bab mausoleum and Turkistan.",
    ],
    tomb: {
      name: "Arystan Bab Mausoleum",
      location: "Talapty, Otyrar District, Turkistan Region, Kazakhstan",
      geography:
        "The Otrar oasis on the middle Syr Darya, southeast of the medieval city and along the pilgrimage road toward Turkistan.",
    },
    image: {
      src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Aristanbab.jpg",
      alt: "Arystan Bab Mausoleum in the Otrar oasis",
      credit: "Салиха / Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Aristanbab.jpg",
      license: "CC0 1.0",
    },
    evidence:
      "The mausoleum and living pilgrimage tradition are well documented. Arslan Baba's role as Yasawi's first teacher belongs primarily to later hagiographical memory and cannot be reconstructed as a contemporary teacher record.",
    impact:
      "A foundational figure of Yasawi sacred memory whose shrine binds the Otrar oasis to the pilgrimage landscape of Turkistan.",
    sources:
      "Yasawi hagiographical traditions; TDV İslâm Ansiklopedisi, ‘Yeseviyye’; Wikimedia Commons documentation for the Arystan Bab Mausoleum.",
  },
  {
    slug: "sufi-muhammad-danishmand",
    name: "Ṣūfī Muḥammad Dānishmand",
    variants: ["Sufi Muhammad Danishmand", "Muhammad Danishmand Zarniqi"],
    dates: "12th-13th century; chronology uncertain",
    region: "Otrar region / Transoxiana",
    order: "yasaviyya",
    teachers: ["ahmad-yasawi"],
    teachings: [
      "The heart as the field of spiritual knowledge",
      "Yasawi formation transmitted through prose instruction",
      "Companionship, remembrance, and ethical discipline",
    ],
    works: ["Mirʾāt al-qulūb (Mirror of Hearts), attributed"],
    biography: [
      "Later Yasawi sources remember Ṣūfī Muḥammad Dānishmand among the four principal successors of Aḥmad Yasawī. His importance is textual as well as genealogical: the Mirʾāt al-qulūb attributed to his circle preserves an early prose vocabulary through which the tradition explained the heart, the path, and the responsibilities of discipleship.",
      "The surviving manuscripts are later than the people they describe, and the work's redaction history still requires direct collation. Dānishmand should therefore be approached as the centre of an early teaching memory rather than as the author of a modern critical edition whose every line can be securely dated to him.",
    ],
    contributions: [
      "Represents the prose-teaching road among the remembered Yasawi successors.",
      "Anchors the Mirʾāt al-qulūb tradition and its language of the heart.",
      "Connects early Yasawi memory to later manuscript communities in Central Asia.",
    ],
    tomb: {
      name: "Tomb tradition unresolved",
      location: "Associated in later tradition with the Otrar region",
      geography:
        "The middle Syr Darya corridor between Otrar, Sayram, and Turkistan; an exact, independently verified burial site has not yet been established for the Atlas.",
    },
    evidence:
      "His place in the four-successor list and the Mirʾāt al-qulūb tradition are well represented in later Yasawi sources. Dates, authorship layers, and tomb identification remain unresolved.",
    impact:
      "A crucial early textual memory of the Yasawiyya, carrying its teaching from oral companionship into a prose archive of the heart.",
    sources:
      "Ahmet T. Karamustafa, survey of early Yasawi sources; Nadirhan Hasan, manuscript studies; TDV İslâm Ansiklopedisi, ‘Yeseviyye’.",
  },
  {
    slug: "hakim-ata",
    name: "Ḥakīm Ata",
    variants: ["Sulaymān Bāqirghānī", "Sulaymon Boqirgʻoniy", "Hakim Süleyman Ata"],
    dates: "12th century; d. 582/1186 is a late traditional date",
    region: "Khwarazm and the lower Amu Darya / Aral region",
    order: "yasaviyya",
    teachers: ["ahmad-yasawi"],
    students: ["zangi-ata"],
    teachings: [
      "Turkic wisdom poetry as ethical and devotional formation",
      "Repentance, mortality, prophetic love, and remembrance",
      "The Yasawi inheritance translated into the religious landscape of Khwarazm",
    ],
    works: [
      "Bāqirghān Kitābı (later collected corpus)",
      "Ākhir Zamān Kitābı, attributed",
      "Ḥażrat-i Maryam Kitābı, attributed",
      "Miʿrājnāma, attributed",
      "Ḥakīm Ata Kitābı (later anonymous hagiography about him)",
    ],
    biography: [
      "Ḥakīm Ata, remembered by the name Sulaymān Bāqirghānī, is the most substantial poetic presence among the early successors of Aḥmad Yasawī. Later tradition sends him from Yasawī's circle toward Khwarazm, where his name becomes attached to Baqirgan, the lower Amu Darya, and a Turkic devotional corpus that speaks in the language of repentance, death, prophetic story, and the testing of the self.",
      "His historical profile is not simple. The prose Ḥakīm Ata Kitābı is a later hagiography, not an autobiography, and the familiar death date 582/1186 appears too late to be treated as secure. Yet the poetry attributed to him is not merely an echo of Yasawī: the surviving record gives Ḥakīm Ata an early and distinct place in the history of Turkic Sufi expression.",
      "By the later eighteenth century, poems under his name circulated in the Bāqirghān Kitābı. Modern editions gather this layered inheritance, but they cannot turn every poem into a personal autograph. The right way to read the corpus is double: as witness to a powerful Khwarazmian devotional voice and as a book formed through centuries of recitation, copying, selection, and print.",
      "His remembered road continues through Zangi Ata and the sacred landscape near Tashkent. That succession matters less as a bureaucratic chart than as a history of communities carrying Yasawi language into new places. In this afterlife, Ḥakīm Ata becomes a bridge: from Yasi to Khwarazm, from the individual master to a corpus, and from an early school to later shrine-centred memory.",
    ],
    contributions: [
      "Extended Turkic Sufi poetry into the Khwarazmian and lower Amu Darya world.",
      "Became the central remembered authorial presence of the Bāqirghān Kitābı.",
      "Linked Yasawi succession memory to Zangi Ata and the Tashkent region.",
      "Preserved eschatological, Marian, and ascension narratives in a Turkic devotional register.",
    ],
    tomb: {
      name: "Ḥakīm Ata shrine tradition at Baqirgan",
      location: "Traditionally near Qonghirat, Karakalpakstan, Uzbekistan",
      geography:
        "The lower Amu Darya and southern Aral landscape, historically joined to Khwarazm; the exact modern identification and condition of the shrine require field verification.",
    },
    evidence:
      "His poetic and saintly afterlife is substantial, but chronology, the limits of the personal corpus, and details of the succession narrative depend on later manuscripts and hagiography. The standard death date should not be presented as secure.",
    impact:
      "The great Khwarazmian poetic successor of Yasawī, through whom Turkic hikmet became a regional archive of spiritual instruction, sacred history, and communal memory.",
    sources:
      "Devin DeWeese, Encyclopaedia Iranica, ‘Ḥakim Atā’; the 2022 Uzbek Latin Yasawī-Boqirgʻoniy edition prepared by Sayfiddin Rafiddinov and Nodirxon Hasan (private research copy); 1907 public-domain Bāqirghān Kitābı; TDV İslâm Ansiklopedisi, ‘Yeseviyye’.",
  },
  {
    slug: "zangi-ata",
    name: "Zangī Ata",
    variants: ["Zangi Ota", "Ay Khoja (reported name)"],
    dates: "13th century in tradition; exact chronology disputed",
    region: "Tashkent oasis",
    order: "yasaviyya",
    teachers: ["hakim-ata"],
    teachings: [
      "Humility and service in ordinary life",
      "Companionship across the social world of the oasis",
      "Transmission of the Yasawi inheritance toward Tashkent",
    ],
    works: ["One poem attributed in later manuscript witnesses"],
    biography: [
      "Zangī Ata is remembered as the master who carried the line of Ḥakīm Ata into the Tashkent oasis. Later narratives place him close to pastoral and working life and make his outward humility part of his spiritual authority. These stories are precious evidence of how Central Asian communities imagined sanctity, though they are not contemporary documentary biography.",
      "The chronology is especially unstable. A reported death date of 656/1258 does not sit comfortably beside narratives connecting his successors to later conversion episodes. The Atlas therefore keeps the succession memory while refusing to force all of its stories onto a single modern timeline.",
    ],
    contributions: [
      "Anchored a major Yasawi successor memory in the Tashkent oasis.",
      "Became the centre of a continuing shrine complex shared with Anbar Ana.",
      "Formed the remembered circle of Uzun Hasan Ata, Sayyid Ata, Sadr Ata, and Badr Ata.",
    ],
    tomb: {
      name: "Zangi Ata Mausoleum Complex",
      location: "Zangiata District, Tashkent Region, Uzbekistan",
      geography:
        "Southwest of Tashkent in the Chirchiq oasis, where settled agriculture, caravan movement, and the approaches to the western Tian Shan meet.",
    },
    image: {
      src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mausoleum_Zangiata_15-12.JPG",
      alt: "Zangi Ata Mausoleum in the Tashkent region",
      credit: "Bobyrr / Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Mausoleum_Zangiata_15-12.JPG",
      license: "CC BY-SA 4.0",
    },
    evidence:
      "The shrine and later successor tradition are well documented. Biographical dates, ancestry, and conversion narratives conflict across later sources and remain explicitly provisional.",
    impact:
      "A major shrine-centred successor of the Yasawi tradition whose memory placed the path firmly in the spiritual geography of Tashkent.",
    sources:
      "TDV İslâm Ansiklopedisi, ‘Zengi Ata’ and ‘Yeseviyye’; later Yasawi hagiography; Wikimedia Commons documentation for the Zangi Ata complex.",
  },
  {
    slug: "anbar-ana",
    name: "Anbar Ana",
    variants: ["Ambar Bibi", "Anbar Bibi"],
    dates: "Medieval saintly figure; chronology unresolved",
    region: "Khwarazm and Tashkent in later tradition",
    order: "yasaviyya",
    teachings: [
      "Women's sacred authority in Yasawi devotional memory",
      "Care, kinship, and endurance within a saintly household",
      "Pilgrimage memory carried through a shared shrine landscape",
    ],
    works: ["No securely established textual corpus"],
    biography: [
      "Anbar Ana survives at the meeting point of women's sacred history, household memory, and pilgrimage. Later accounts connect her first with Ḥakīm Ata and then with Zangī Ata, but the details belong to hagiographical narrative and vary across retellings.",
      "Her mausoleum within the Zangi Ata complex makes her presence more than a footnote to male succession. It asks how women carried hospitality, devotion, memory, and authority through Sufi households even when formal written genealogies gave them little space.",
    ],
    contributions: [
      "Preserves a named female presence within the early Yasawi sacred genealogy.",
      "Makes household, kinship, and women's devotional memory visible in the lineage story.",
      "Shares the living pilgrimage landscape of the Zangi Ata complex.",
    ],
    tomb: {
      name: "Anbar Ana Mausoleum",
      location: "Zangi Ata complex, Tashkent Region, Uzbekistan",
      geography:
        "The Tashkent oasis southwest of the modern city, within the same sacred complex as Zangi Ata.",
    },
    evidence:
      "The shrine and continuing devotional memory are visible. Details of her life, marriages, dates, and exact relation to the successor chain depend on later hagiographical sources.",
    impact:
      "A rare named woman in the remembered Yasawi lineage whose shrine keeps female sacred memory present in the public geography of the tradition.",
    sources:
      "Later Ḥakīm Ata and Zangi Ata hagiographical traditions; Uzbek heritage descriptions of the Zangi Ata complex; modern studies of Yasawi sacred genealogy.",
  },
  {
    slug: "ismail-ata",
    name: "Ismāʿīl Ata",
    variants: ["Ismail Ata Qazighurti"],
    dates: "13th-14th century; dates uncertain",
    region: "Kazygurt / southern Kazakhstan and Transoxiana",
    order: "yasaviyya",
    teachers: ["Ibrāhīm Ata of the Dānishmand successor line"],
    students: ["ishaq-khwaja"],
    teachings: [
      "Formation through travel, study, and authorization",
      "Continuation of the Dānishmand-Suksuk Ata branch",
      "Regional teaching between Transoxiana and Kazygurt",
    ],
    works: ["No securely established independent corpus"],
    biography: [
      "Ismāʿīl Ata belongs to a less familiar but important Yasawi road. Later sources place him in a succession running from Ṣūfī Muḥammad Dānishmand through Suksuk Ata and a later Ibrāhīm Ata. They remember study in Khwarazm, Bukhara, and Samarkand, authorization in Khujand, and teaching in the Kazygurt landscape.",
      "The repeated names in Yasawi genealogy create real danger: this Ibrāhīm Ata should not be silently identified with Aḥmad Yasawī's father. Ismāʿīl Ata's value lies precisely in showing that the order spread through regional teaching families whose archives are thinner than the monumental memory of Turkistan.",
    ],
    contributions: [
      "Carried a Dānishmand-linked successor branch into the Kazygurt region.",
      "Connected several centres of learning across Transoxiana in later lineage memory.",
      "Prepared the textual-historical road associated with his son Ishaq Khwaja.",
    ],
    tomb: {
      name: "Ismail Ata shrine tradition",
      location: "Associated with the Kazygurt area, Turkistan Region, Kazakhstan",
      geography:
        "The foothills south of Shymkent, between the Tashkent oasis and the routes toward Sayram and the western Tian Shan.",
    },
    evidence:
      "The lineage route is preserved in later Yasawi sources, while exact dates, travel sequence, and shrine identification need direct manuscript and field confirmation.",
    impact:
      "A regional successor whose remembered journeys reveal the Yasawiyya as a network of study, authorization, family transmission, and local teaching.",
    sources:
      "TDV İslâm Ansiklopedisi, ‘Yeseviyye’; Nadirhan Hasan on Yasawi manuscripts; later Hadiqat al-ʿārifīn traditions.",
  },
  {
    slug: "ishaq-khwaja",
    name: "Isḥāq Khwāja",
    variants: ["Ishaq Khoja"],
    dates: "Mid-14th century literary activity; exact dates uncertain",
    region: "Kazygurt / Transoxiana",
    order: "yasaviyya",
    teachers: ["ismail-ata"],
    teachings: [
      "Remembering a lineage through written history",
      "Sufi genealogy as ethical and communal instruction",
      "Preservation of early Yasawi narratives in later redaction",
    ],
    works: ["Ḥadīqat al-ʿārifīn, associated tradition and recensions"],
    biography: [
      "Isḥāq Khwāja is remembered as the son and successor of Ismāʿīl Ata and as a key figure behind the historical tradition commonly called Ḥadīqat al-ʿārifīn, the Garden of the Knowers. In him, succession becomes archival labour: names, teachings, and sacred memories are arranged so a community can understand where it came from.",
      "The text survives through later manuscripts and more than one recension, so its voice cannot be handled as an untouched fourteenth-century autograph. Even so, it remains indispensable for studying how Yasawi communities narrated their own beginnings before much later syntheses took shape.",
    ],
    contributions: [
      "Preserved one of the most important historical memories of early Yasawi succession.",
      "Joined family transmission to the making of a written communal archive.",
      "Offers a source-critical bridge between saintly genealogy and institutional history.",
    ],
    tomb: {
      name: "Burial place not securely identified",
      location: "Associated with the Ismail Ata / Kazygurt teaching landscape",
      geography:
        "Southern Kazakhstan and the wider Transoxianan corridor; the Atlas has not yet verified an exact tomb attribution.",
    },
    evidence:
      "His association with the Ḥadīqat al-ʿārifīn tradition is important but textually layered. Recensions, authorship, dates, and burial location require further manuscript control.",
    impact:
      "A keeper of Yasawi historical memory whose associated text helps reveal how the tradition transformed oral lineage into a written account of origins.",
    sources:
      "Ahmet T. Karamustafa, early Yasawi primary-source survey; Nadirhan Hasan, manuscript studies; TDV İslâm Ansiklopedisi, ‘Yeseviyye’.",
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
    works: [
      "Fawāʾiḥ al-Jamāl wa Fawātiḥ al-Jalāl",
      "al-Uṣūl al-ʿAshara (The Ten Principles)",
      "Ādāb al-Murīdīn",
      "Risālat al-Sāʾir al-Ḥāʾir",
      "Risāla ilā al-Ḥāʾim al-Khāʾif",
    ],
    shrine: "kunya-urgench",
    biography: [
      "Najm al-Dīn Kubrā taught in Khwarazm at the beginning of the thirteenth century, when Kunya-Urgench was a major urban and intellectual centre. His teaching circle became known for disciplined attention to visionary experience and the inner states of the seeker.",
      "Later accounts portray his death during the Mongol destruction of Khwarazm in 1221. Whatever the shaping force of that memory, his writings and students made the Kubrawiyya one of Central Asia's most consequential Sufi networks.",
    ],
    contributions: [
      "Articulated a sophisticated vocabulary of visionary experience, light, and spiritual perception.",
      "Authored influential practical treatises, including the Ten Principles.",
      "Trained disciples who carried Kubrawi teaching across Iran, Central Asia, South Asia, and Kashmir.",
    ],
    tomb: {
      name: "Mausoleum of Najm al-Din Kubra",
      location: "Kunya-Urgench, Dashoguz Region, Turkmenistan",
      geography:
        "Lower Amu Darya / historic Khwarazm oasis, near the old Silk Road city of Gurganj.",
    },
    image: {
      src: kubraMausoleumExterior,
      alt: "Exterior of the Mausoleum of Najm al-Din Kubra at Kunya-Urgench",
      credit: "Roland Lin / UNESCO / Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kunya-Urgench-130377.jpg",
      license: "CC BY-SA 3.0 IGO",
    },
    evidence:
      "His works, teaching, and order are well attested. The precise circumstances of his death draw on later historical and hagiographical accounts.",
    impact:
      "Founder of the Kubrawī order and martyr of the Mongol conquest of Khwarazm. His disciples spread across Persia, India and Kashmir.",
    sources:
      "Encyclopaedia Iranica, “Kobrawiya”; UNESCO nomination dossier for Kunya-Urgench; Kubra's surviving treatises.",
  },
  {
    slug: "yusuf-hamadani",
    name: "Yūsuf Hamadānī",
    dates: "1048/49 – 1140 CE",
    region: "Merv, Bukhara",
    order: "khwajagan",
    students: ["ahmad-yasawi", "abd-al-khaliq-ghujdawani"],
    teachings: ["Silent remembrance", "Interior discipline of the Khwājagān"],
    works: ["Rutbat al-Ḥayāt"],
    shrine: "merv",
    biography: [
      "Yūsuf Hamadānī was a scholar and ascetic teacher whose career linked western Iranian learning with the cities of Khurasan and Transoxiana. He died in 1140 and was buried at Merv, then one of the great cities of the eastern Islamic world.",
      "Later Khwajagan biographies identify both Aḥmad Yasawī and ʿAbd al-Khāliq Ghujdawānī among his successors. This makes Hamadānī an important historical hinge, although later lineage schemes should not be read as a modern administrative chart.",
    ],
    contributions: [
      "Connected scholarly, ascetic, and urban Sufi practice across Khurasan and Transoxiana.",
      "Became a shared reference point in later Yasawi, Khwajagan, and Naqshbandi memories.",
      "Left a model of disciplined companionship and interior remembrance.",
    ],
    tomb: {
      name: "Shrine of Yusuf Hamadani",
      location: "Ancient Merv, Mary Region, Turkmenistan",
      geography: "Murghab River oasis in historic Khurasan, west of the Amu Darya corridor.",
    },
    evidence:
      "His dates, Merv burial, and importance are well documented; named succession lists depend on later biographical sources.",
    impact:
      "An important early Khwajagan teacher whose later biographical traditions name both Yasawi and Ghijduwani among his successors.",
    sources:
      "Hamid Algar, Encyclopaedia Iranica, “Abu Yaʿqub Hamadani”; later Khwajagan biographical sources.",
  },
  {
    slug: "abd-al-khaliq-ghujdawani",
    name: "ʿAbd al-Khāliq Ghujdawānī",
    dates: "12th century; later chronology disputed",
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
    biography: [
      "ʿAbd al-Khāliq Ghujdawānī is the saint most closely associated with Ghijduwan, northwest of Bukhara. His historical biography is comparatively sparse; later Khwajagan and Naqshbandi literature gave his teaching an especially central place.",
      "The well-known set of principles attributed to him became a vocabulary for silent remembrance, vigilance, movement, and social presence. The formulation should be approached as a living inherited teaching rather than as a verbatim record from the twelfth century.",
    ],
    contributions: [
      "Serves as the key remembered master of the Khwajagan method.",
      "Associated with silent dhikr and the principles later transmitted by the Naqshbandiyya.",
      "Anchored Ghijduwan as a major shrine town in the Bukhara oasis.",
    ],
    tomb: {
      name: "Mausoleum of Abd al-Khaliq Ghijduwani",
      location: "Ghijduwan, Bukhara Region, Uzbekistan",
      geography:
        "Zarafshan River oasis, northwest of Bukhara, in the settled heartland of Transoxiana.",
    },
    evidence:
      "The shrine and later teaching legacy are clear; dates, authorship, and the exact sequence of principles are disputed or depend on later sources.",
    impact:
      "A formative proto-Naqshbandi authority whose teachings were incorporated into later Khwajagan and Naqshbandi memory.",
    sources:
      "Later Khwajagan and Naqshbandi hagiography; modern studies of Khwajagan memory and silsila formation.",
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
    biography: [
      "Bahāʾ al-Dīn Naqshband was born near Bukhara and became the eponymous master of the Naqshbandiyya. His principal teacher was Amīr Kulāl, while later accounts also remember encounters with Yasawi teachers and the inherited Khwajagan path.",
      "His reputation grew through companions, shrine culture, and the literary work of later disciples. The designation of the earlier masters as one continuous Naqshbandi order is retrospective; the site presents that continuity as a tradition of memory, not as an unbroken institutional fact.",
    ],
    contributions: [
      "Gave the Naqshbandiyya its enduring name and central devotional model.",
      "Popularised a form of sober, socially engaged practice centred on silent remembrance.",
      "Established Qasr-i Arifan as one of Central Asia's most important pilgrimage complexes.",
    ],
    tomb: {
      name: "Bahauddin Naqshband Memorial Complex",
      location: "Qasr-i Arifan, about 10 km northeast of Bukhara, Uzbekistan",
      geography:
        "Bukhara oasis on the lower Zarafshan plain, a long-standing corridor between Iran, Khurasan, and Transoxiana.",
    },
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/62/Bahauddin_Naqshband_Memorial_Complex._Bukhara.jpg",
      alt: "Bahauddin Naqshband Memorial Complex near Bukhara",
      credit: "Umid1108 / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Bahauddin_Naqshband_Memorial_Complex._Bukhara.jpg",
      license: "CC BY-SA 4.0",
    },
    evidence:
      "His life and circle are strongly documented in early Naqshbandi sources; ancestry and portions of the retrospective Khwajagan genealogy require caution.",
    impact:
      "Eponym of the Naqshbandī order and one of the most influential Sufi masters of the Islamic east.",
    sources:
      "Encyclopaedia Iranica, “Baha-al-Din Naqshband”; Anīs al-Ṭālibīn; Rashaḥāt ʿAyn al-Ḥayāt.",
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
    biography: [
      "Khwāja ʿUbaydullāh Aḥrār emerged from the Tashkent region and made Samarkand a centre of Naqshbandi teaching, patronage, and public life. He was not only a spiritual teacher: landholding, endowments, correspondence, and mediation connected his household to the politics of the Timurid world.",
      "His career shows how a Sufi master could act in markets, courts, and rural estates while insisting on service to the community. It is a major case study in the social history of Central Asian Sufism.",
    ],
    contributions: [
      "Built a powerful Timurid-era network of disciples, endowments, and correspondence.",
      "Made public service and political mediation central to a Naqshbandi ideal of responsibility.",
      "Extended the order's influence across Transoxiana and toward the eastern Silk Road.",
    ],
    tomb: {
      name: "Khwaja Ahrar Memorial Complex",
      location: "Samarkand, Uzbekistan",
      geography:
        "Zarafshan valley crossroads, in the former Timurid capital linking Bukhara, the Ferghana Valley, and routes to China.",
    },
    evidence:
      "His career is documented by rich hagiographical, documentary, and historical material, including waqf records; accounts of supernatural intervention belong to devotional literature.",
    impact:
      "Timurid-era master whose social and political influence extended from Herat to Kashgar.",
    sources:
      "Jo-Ann Gross, The Waqf Documents of Khwāja ʿUbayd Allāh Aḥrār; Rashaḥāt ʿAyn al-Ḥayāt; Timurid-era sources.",
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
    biography: [
      "Sayf al-Dīn Bākharzī was a leading disciple of Najm al-Dīn Kubrā who established himself in Bukhara. In the Mongol and post-Mongol period, his khanaqah became a durable centre of teaching and patronage on the eastern edge of the city.",
      "His remembered authority demonstrates that the Kubrawiyya did not disappear with Khwarazm: it was reshaped through urban institutions, disciples, and shrine complexes across Central Asia.",
    ],
    contributions: [
      "Carried Kubrawi teaching from Khwarazm into the Bukhara oasis.",
      "Founded a hereditary spiritual household with regional influence.",
      "Helped secure a post-conquest urban future for Kubrawi Sufism.",
    ],
    tomb: {
      name: "Mausoleum of Sayf al-Din Bakharzi",
      location: "Fathabad, east of historic Bukhara, Uzbekistan",
      geography: "Bukhara oasis, on the western approaches to the Transoxianan urban network.",
    },
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Panel_from_Tomb-marker_for_Sayf_al-Din_Bakharzi%2C_Bukhara%2C_Uzbekistan%2C_1300-1400_AD%2C_carved%2C_painted%2C_and_gilded_teak_-_Victoria_and_Albert_Museum_-_London%2C_England_-_DSC04958.jpg",
      alt: "Historic tomb-marker panel for Sayf al-Din Bakharzi",
      credit: "Daderot / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Panel_from_Tomb-marker_for_Sayf_al-Din_Bakharzi,_Bukhara,_Uzbekistan,_1300-1400_AD,_carved,_painted,_and_gilded_teak_-_Victoria_and_Albert_Museum_-_London,_England_-_DSC04958.jpg",
      license: "CC0",
    },
    evidence:
      "His role as a Kubrawi disciple and the Fathabad shrine are well established; exact biographical details vary among sources.",
    impact: "Chief disciple of Najm al-Dīn Kubrā and pivotal figure of Bukharan Sufism.",
    sources:
      "Encyclopaedia Iranica, “Iran: Mongol and Timurid Periods”; studies of the Kubrawiyya; Bukhara architectural surveys.",
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
    biography: [
      "Mīr Sayyid ʿAlī Hamadānī was a Persianate scholar, traveller, and Kubrawi master whose journeys connected Iran, Central Asia, and Kashmir. His writings address mystical practice, ethics, futuwwa, and the responsibilities of rulers.",
      "His long afterlife in Kashmir rests on teaching, preaching, travel, and a widely recited litany. The precise scale and nature of his role in Kashmir's Islamisation is debated and should not be reduced to a single heroic narrative.",
    ],
    contributions: [
      "Expanded the Kubrawi literary and devotional legacy through a large Persian corpus.",
      "Connected Central Asian and Kashmiri religious cultures through travel, teaching, and litanies.",
      "Authored ethical counsel for rulers that joined spiritual formation to public responsibility.",
    ],
    tomb: {
      name: "Mausoleum of Mir Sayyid Ali Hamadani",
      location: "Kulob, Khatlon Region, Tajikistan",
      geography:
        "Upper Amu Darya / southern Tajik foothills, within historic Khuttalan on routes between Badakhshan, Balkh, and Kashmir.",
    },
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Kulob%2CAliHamadhani.jpg",
      alt: "Mausoleum of Sayyid Ali Hamadani in Kulob",
      credit: "Bertramz / Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kulob,AliHamadhani.jpg",
      license: "CC BY-SA 3.0",
    },
    evidence:
      "His writings and Kubrawi lineage are securely attested; accounts of his travels and religious impact in Kashmir vary between chronicles, scholarship, and devotional memory.",
    impact:
      "Transmitter of Kubrawī Sufism to Kashmir; formative figure in Kashmiri Islamic civilisation.",
    sources:
      "Encyclopaedia Iranica, “Kobrawiya II”; Hamadani's own writings; Kashmiri chronicles and modern scholarship.",
  },
  {
    slug: "arif-riwgari",
    name: "Khwāja ʿĀrif Rīwgarī",
    variants: ["Arif Riwgari", "Arif Riwakri"],
    dates: "13th century; dates uncertain",
    region: "Riwgar (Shofirkon), Bukhara oasis",
    order: "khwajagan",
    teachers: ["abd-al-khaliq-ghujdawani"],
    students: ["mahmud-faghnawi"],
    teachings: ["Companionship and attentive service", "Discretion in spiritual instruction"],
    works: ["No securely attributed independent work"],
    biography: [
      "Khwāja ʿĀrif Rīwgarī belongs to the remembered bridge between ʿAbd al-Khāliq Ghijduwānī and the later Khwajagan teachers of the Bukhara oasis. His name lives less through a large written corpus than through the intimate grammar of transmission: keeping company with a guide, tending the heart, and carrying instruction into ordinary work.",
      "Bennett presents him as one of the quiet custodians of the path. Historical evidence is thinner than for later figures, so the Atlas lets the shrine tradition speak while resisting the temptation to turn a remembered presence into a fully documented biography.",
    ],
    contributions: [
      "Preserved the Khwajagan teaching current in the Bukhara oasis.",
      "Appears in later Naqshbandi memory as the teacher of Mahmud Faghnawi.",
      "Embodies the Khwajagan ideal of practice carried through companionship rather than spectacle.",
    ],
    tomb: {
      name: "Mausoleum of Khwaja Muhammad Arif Riwgari",
      location: "Riwgar / Shofirkon district, Bukhara Region, Uzbekistan",
      geography:
        "Northern Bukhara oasis, among villages linked by irrigation, craft, and pilgrimage routes.",
    },
    evidence:
      "This profile rests mainly on later Khwajagan-Naqshbandi genealogies and local shrine memory; dates and detailed life events need continued source verification.",
    impact:
      "A remembered keeper of the Khwajagan current between Ghijduwan and the later Bukhara masters.",
    sources:
      "Later Naqshbandi silsila literature; Bennett, The Masters of Wisdom; Uzbek cultural-route documentation.",
  },
  {
    slug: "mahmud-faghnawi",
    name: "Khwāja Maḥmūd Faghnawī",
    variants: ["Mahmud Anjir Faghnawi"],
    dates: "d. c. 1315; traditional chronology",
    region: "Faghnah, Bukhara oasis",
    order: "khwajagan",
    teachers: ["arif-riwgari"],
    students: ["azizan-ali-ramitani"],
    teachings: ["Remembrance within communal life", "Service, work, and the gathering"],
    works: ["No securely attributed independent work"],
    biography: [
      "Maḥmūd Faghnawī is remembered in the Khwajagan succession as a village-based teacher whose path did not retreat from the world. In later accounts, the sound of collective remembrance and the labor of daily life meet in his teaching: the workshop, field, and gathering become places where attention can ripen.",
      "The stories around his name are spare and concentrated. They ask the reader to see spiritual life not as escape, but as a manner of being present among people without becoming captive to the noise of the crowd.",
    ],
    contributions: [
      "Carried the Khwajagan current through the Bukhara oasis in the late thirteenth and early fourteenth centuries.",
      "Remembered as a link between Arif Riwgari and Ali Ramitani.",
      "Associated in later tradition with a communal, work-attentive form of remembrance.",
    ],
    tomb: {
      name: "Shrine tradition of Khwaja Mahmud Faghnawi",
      location: "Faghnah / Bukhara Region, Uzbekistan",
      geography:
        "The cultivated Bukhara oasis, where rural settlement and the city’s religious institutions formed one shared world.",
    },
    evidence:
      "The succession role is well established in later Naqshbandi tradition, but the surviving evidence for biography, tomb details, and the attribution of specific practices remains limited.",
    impact: "A quiet yet essential succession figure in the Khwajagan memory of Bukhara.",
    sources:
      "Later Naqshbandi silsila sources; Oxford Research Encyclopedia, “The Medieval Khwajagan and the Early Naqshbandiyya”; Bennett.",
  },
  {
    slug: "azizan-ali-ramitani",
    name: "ʿAlī Rāmitānī",
    variants: ["Azizan Ali Ramitani", "Khwaja Azizan"],
    dates: "d. early 14th century; chronology varies",
    region: "Ramitān, near Bukhara",
    order: "khwajagan",
    teachers: ["mahmud-faghnawi"],
    students: ["muhammad-baba-samasi"],
    teachings: ["Breadth of heart in ordinary life", "The master as a keeper of adab"],
    works: ["Sayings preserved in later collections"],
    biography: [
      "Known affectionately as Khwāja ʿAzīzān, ʿAlī Rāmitānī stands in later memory as a master of breadth: strong enough to guide a circle, restrained enough to let the heart of each seeker unfold in its own season. Ramitan, a settlement near Bukhara, becomes in his story a spiritual geography of craft, work, and inward refinement.",
      "His portrait in Bennett is warm and moral rather than archival. The deeper lesson is not a catalogue of miracles, but adab: the disciplined courtesy by which knowledge becomes merciful in the presence of other people.",
    ],
    contributions: [
      "Gave the later Khwajagan memory one of its most beloved teacher figures.",
      "Linked the Faghnawi and Baba Samasi generations in traditional succession lists.",
      "Expressed an ethic of inner work that remained rooted in communal responsibility.",
    ],
    tomb: {
      name: "Shrine tradition of Khwaja Azizan Ali Ramitani",
      location: "Ramitān, Bukhara Region, Uzbekistan",
      geography:
        "Bukhara’s northern agricultural plain, on routes between the oasis villages and the old city.",
    },
    evidence:
      "The master’s place in later silsila lists is strong; precise dates, anecdotes, and shrine history vary among devotional and local accounts.",
    impact:
      "A major remembered Khwajagan teacher whose language of adab still shapes the later Naqshbandi imagination.",
    sources: "Later Naqshbandi hagiographies and silsila lists; Bennett; regional shrine accounts.",
  },
  {
    slug: "muhammad-baba-samasi",
    name: "Muḥammad Bābā Samāsī",
    variants: ["Baba Samasi", "Muhammad Baba Sammasi"],
    dates: "d. 1354 CE; traditional chronology",
    region: "Samās, Bukhara oasis",
    order: "khwajagan",
    teachers: ["azizan-ali-ramitani"],
    students: ["sayyid-amir-kulal"],
    teachings: ["Recognition of spiritual capacity", "Companionship and trust"],
    works: ["Sayings preserved through disciples"],
    biography: [
      "Muḥammad Bābā Samāsī belongs to the late Khwajagan world of small settlements around Bukhara, where a master’s authority was felt through the shape of a gathering, the care offered to visitors, and the rare ability to recognize a seeker before that seeker recognized himself.",
      "Later Naqshbandi narratives place him at the threshold of Baha al-Din Naqshband’s story. The Atlas holds this as a lineage memory: spiritually meaningful, historically important, and still in need of careful distinction between early evidence and later retelling.",
    ],
    contributions: [
      "Linked Ali Ramitani to Amir Kulal in the remembered Khwajagan succession.",
      "Became a key figure in later accounts of the spiritual preparation for Baha al-Din Naqshband.",
      "Sustained a village-centred culture of companionship and ethical formation.",
    ],
    tomb: {
      name: "Shrine tradition of Muhammad Baba Samasi",
      location: "Samas / Bukhara Region, Uzbekistan",
      geography:
        "Bukhara oasis, where village shrines form a devotional circuit around the historic city.",
    },
    evidence:
      "His succession role is central in later Naqshbandi memory; precise biographical detail and physical shrine documentation require further archival work.",
    impact:
      "A threshold master in the remembered passage from the Khwajagan to the Naqshbandi world.",
    sources:
      "Later Naqshbandi hagiography and silsila literature; Bennett; regional pilgrimage accounts.",
  },
  {
    slug: "sayyid-amir-kulal",
    name: "Sayyid Amīr Kulāl",
    variants: ["Amir Kulal", "Amir Kulyal"],
    dates: "c. 1281–1370 CE; traditional chronology",
    region: "Sukhar, near Bukhara",
    order: "khwajagan",
    teachers: ["muhammad-baba-samasi"],
    students: ["bahauddin-naqshband"],
    teachings: ["Training through service", "Adab, endurance, and companionship"],
    works: ["Teachings preserved in later Naqshbandi literature"],
    biography: [
      "Sayyid Amīr Kulāl is one of the most tangible presences in the Khwajagan landscape. His shrine near Bukhara remains a place where spiritual memory, craft, and pilgrimage meet. Later accounts present him as the principal human teacher of Baha al-Din Naqshband, shaping the future master through companionship, discipline, and a life close to ordinary people.",
      "This is a master whose language is practical: the heart is formed through service, steadiness, and fidelity to adab. In that sense, his legacy is not only a link in a chain; it is a proposal for how authority should feel in human life.",
    ],
    contributions: [
      "Served as Baha al-Din Naqshband’s principal teacher in early Naqshbandi sources.",
      "Carried the Khwajagan ethic of service and companionship into the late fourteenth century.",
      "Anchored a continuing shrine and pilgrimage tradition near Bukhara.",
    ],
    tomb: {
      name: "Mausoleum of Sayyid Amir Kulal",
      location: "Sukhar / Yangikhayat, about 25 km north of Bukhara, Uzbekistan",
      geography:
        "Northern Bukhara oasis, in a rural landscape of artisan villages, canals, and pilgrimage routes.",
    },
    evidence:
      "His relationship with Baha al-Din is strongly represented in early Naqshbandi tradition; exact dates and individual anecdotes should be read with their hagiographical context.",
    impact:
      "The great teacher at the threshold of the Naqshbandiyya, still encountered through a living Bukhara shrine landscape.",
    sources:
      "Encyclopaedia Iranica, “Baha-al-Din Naqshband”; early Naqshbandi hagiography; Uzbek heritage documentation for the Amir Kulal mausoleum.",
  },
  {
    slug: "yaqub-charkhi",
    name: "Yaʿqūb Charkhī",
    variants: ["Mawlana Yaqub Charkhi"],
    dates: "d. 1447 CE",
    region: "Charkh, Logar; Herat and Transoxiana",
    order: "naqshbandiyya",
    teachers: ["bahauddin-naqshband"],
    students: ["khwaja-ahrar"],
    teachings: ["Qur'anic commentary and inward remembrance", "A bridge between Bukhara and Herat"],
    works: ["Tafsīr-i Charkhī", "Risāla on dhikr"],
    biography: [
      "Yaʿqūb Charkhī carried the Naqshbandi current from the Bukhara world into the Persianate courts and scholarly circles of Herat. He was a teacher, commentator, and careful interpreter of the path, giving written shape to a tradition often carried through intimate speech and companionship.",
      "For a modern reader, his importance is that of a bridge: he shows how an inward discipline entered the world of Qur'anic commentary, literature, and public learning without losing its attention to the heart.",
    ],
    contributions: [
      "Wrote influential works on Qur'anic interpretation and remembrance.",
      "Extended Naqshbandi teaching into Herat’s Timurid intellectual world.",
      "Stands in later tradition as an important teacher of Khwaja Ahrar.",
    ],
    tomb: {
      name: "Tomb tradition of Mawlana Yaqub Charkhi",
      location: "Hisar / Dushanbe region, Tajikistan",
      geography:
        "The commonly reported burial tradition lies west of Dushanbe in the Hisar region. Charkh in Afghanistan is associated with his name and origin, not treated here as his verified burial place.",
    },
    evidence:
      "His writings and late Naqshbandi significance are well known. The Hisar-area burial attribution is retained without exact coordinates until repository and local heritage evidence can be collated.",
    impact:
      "A literary and scholarly transmitter who gave the early Naqshbandi teaching a durable Persian textual form.",
    sources:
      "Yaqub Charkhi's surviving writings; later Naqshbandi sources; studies of Timurid Herat and early Naqshbandiyya.",
  },
  {
    slug: "abd-al-rahman-jami",
    name: "ʿAbd al-Raḥmān Jāmī",
    variants: ["Nur al-Din Abd al-Rahman Jami", "Mawlana Jami"],
    dates: "1414–1492 CE",
    region: "Jam, Samarqand, Herat",
    order: "naqshbandiyya",
    teachers: ["Saʿd al-Dīn Kāshgharī"],
    teachings: ["Poetry as spiritual education", "Friendship, learning, and the path of love"],
    works: ["Nafaḥāt al-Uns", "Lawāʾiḥ", "Haft Awrang"],
    biography: [
      "ʿAbd al-Raḥmān Jāmī was the great poet-scholar of Timurid Herat and one of the most eloquent interpreters of Sufi inheritance in Persian. His work gathers biography, metaphysics, Qur'anic learning, lyric poetry, and the intimacy of spiritual friendship into a single literary world.",
      "His Naqshbandi affiliation gave him a living discipline behind the page. In Jami, the Khwajagan legacy becomes audible in poetry: learned but not cold, refined but still turned toward the transformation of the reader’s heart.",
    ],
    contributions: [
      "Created one of the great literary syntheses of Persian Sufism.",
      "Preserved biographies and memories of earlier Sufi masters in Nafaḥāt al-Uns.",
      "Gave the Naqshbandi world an enduring voice in the Timurid cultural sphere.",
    ],
    tomb: {
      name: "Tomb of Abd al-Rahman Jami",
      location: "Northwest of Herat, Afghanistan",
      geography:
        "Herat oasis, a major Timurid centre at the meeting of Khurasan, Central Asia, and the Iranian plateau.",
    },
    image: {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jami%20Tomb.JPG",
      alt: "Tomb of Abd al-Rahman Jami near Herat",
      credit: "Hariva / Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Jami_Tomb.JPG",
      license: "CC BY-SA 4.0",
    },
    evidence:
      "Jami's life, writings, and role in Timurid Herat are richly documented. The spiritual genealogy is presented here as a Naqshbandi tradition supported by later sources.",
    impact:
      "The poet and historian of Sufi memory whose work made Central Asian spiritual culture legible far beyond its own cities.",
    sources:
      "Jami's own works; Timurid biographical sources; modern scholarship on Persian literature and Naqshbandiyya.",
  },
];

export const getMaster = (slug: string) => masters.find((m) => m.slug === slug);
