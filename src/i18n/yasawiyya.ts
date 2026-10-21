import type { TranslatedLocale } from "./locale";

type ChapterTranslation = {
  title: string;
  opening: string;
  paragraphs: string[];
  boundary: string;
  era: string;
  place: string;
};

export const yasawiyyaTranslations: Record<TranslatedLocale, ChapterTranslation[]> = {
  uz: [
    {
      title: "Dasht voha bilan tutashgan joy",
      era: "XII asr",
      place: "Sayram · Yasi",
      opening:
        "Yassaviya tutashuv hududida shakllandi: islom tamaddunining chekkasida emas, balki uning tillari, xalqlari va turmush shakllari yangidan tus olayotgan maskanlardan birida.",
      paragraphs: [
        "Ahmad Yassaviyning Yasi — bugungi Turkiston shahri — bilan va uning nomi ostida yetib kelgan turkiy diniy-ma’rifiy meros bilan aloqasi ishonchli asosga ega. Sayram, Yasi, O‘tror va Xorazm tomon yo‘llar karvon shaharlari, obod vohalar, ko‘chmanchi jamoalar, olimlar, hunarmandlar va qiroat ahli olamini tashkil etgan. Yassaviyning ahamiyati qisman shu olamlarning uchrashuvida namoyon bo‘ladi. Diniy tarbiya turkiy she’riy ovoz orqali eshitilib, darsxona chegarasidan tashqarida ham xotirada yashay olgan.",
        "Uning hayotining tarixiy konturi ixlos va e’tiqod xotirasida saqlangan siymosiga qaraganda ancha siyrak. Vafoti odatda hijriy 562 / milodiy 1166–1167-yillarga nisbat beriladi. Aniq tug‘ilgan sana, bolalik voqealari, safarlar va ustozlarining ketma-ketligi asosan keyingi manbalardan kelib chiqadi. Mas’uliyatli tarjimai hol bu rivoyatlarni chetga surmaydi; har birining qanday manba ekanini o‘quvchiga ko‘rsatadi.",
      ],
      boundary:
        "Maskan, diniy-ma’rifiy meros va keyingi davrlardagi nufuz yaxshi asoslangan. Bolalikning batafsil xronologiyasi zamondosh tarjimai hol emas, keyingi an’anaga mansub.",
    },
    {
      title: "Ustozlar orqali yodga olingan ustoz",
      era: "Tarbiyaning xotiradagi tarixi",
      place: "O‘tror · Buxoro · Yasi",
      opening:
        "Keyingi xotirada Yassaviy yonida ikki nom turadi, lekin ularning o‘rni bir xil emas: Arslon Bobo muqaddas rivoyatning yaqinligini, Yusuf Hamadoniy esa silsilaning tuzilishini ifodalaydi.",
      paragraphs: [
        "Arslon Bobo ilk barakani yetkazgan zot va yosh Ahmadning birinchi yo‘l ko‘rsatuvchisi sifatida yodga olinadi. Mashhur rivoyatlar Yassaviyni payg‘ambarlik davri va O‘trorning muqaddas geografiyasi bilan bog‘laydi. Ularning tarixiy ketma-ketligini zamondosh dalillar bilan belgilab bo‘lmaydi. Biroq bu rivoyatlarning davomiyligi yassaviy jamoalari ma’naviy uzatishni qanday tasavvur qilganini ochadi: omonat, xizmat va ta’lim berilishidan oldin qabul qilingan meros sifatida.",
        "Yusuf Hamadoniy bilan aloqa eng keng qabul qilingan silsila rivoyatiga aylandi va Yassaviyni Xuroson hamda Movarounnahrning ilmli tasavvuf tarmoqlariga joylashtirdi. Manbalar boshqa nisbatlarni ham saqlaydi. Shuning uchun Atlas Hamadoniyni kuchli keyingi silsila xotirasi sifatida ko‘rsatadi; bu Yassaviya va Xojagon yagona muassasa bo‘lganini isbotlamaydi. Ularning tarixlari uchrashadi, raqobatlashadi va bir-birini qayta talqin qiladi, ammo bitta tariqatga qo‘shilib ketmaydi.",
      ],
      boundary:
        "Arslon Bobo avvalo manoqib xotirasiga mansub. Hamadoniy bilan aloqa keng qabul qilingan keyingi silsila da’vosidir; u bahssiz zamondosh ustozlik qaydi emas.",
    },
    {
      title: "Bitta kitob emas, hikmatlar daryosi",
      era: "Qo‘lyozma va bosma orqali uzatish",
      place: "Markaziy Osiyo · Sankt-Peterburg · Qozon",
      opening:
        "«Devoni hikmat» Yassaviyning adabiy merosi markazida turadi, ammo u bizgacha ustozning o‘z qo‘lidan ko‘chirilgan, o‘zgarmagan yagona kitob sifatida yetib kelmagan.",
      paragraphs: [
        "Qozog‘iston Qo‘lyozmalar milliy markazi bayon qilgan 2006-yilgi katalog Yassaviyga nisbat berilgan 1 026 xil hikmatni o‘z ichiga olgan 175 majmua qo‘lyozmani tavsiflaydi. Ularning tartibi va tarkibi turlicha. Alohida tadqiqot Sankt-Peterburgdagi ommaviy yoki tanqidiy nashrlarga yetarlicha ta’sir ko‘rsatmagan yigirma uch nusxani aniqlagan. Bu sonlar 1 026 she’rning muallifi Yassaviy ekanini isbotlamaydi. Ular xotira, qiroat, ko‘chirish va nisbat berish maktabining ko‘lamini ko‘rsatadi.",
        "Hikmat muayyan nusxaga, keyinroq qabul qilingan Yassaviy korpusiga, maktab doirasida ijod qilgan shoirga yoki zamonaviy tahririy nisbatga tegishli bo‘lishi mumkin. Qozonning 1904 va 1912-yilgi nashrlari bu merosning davomiyligi uchun qimmatli dalildir, lekin ularning hech biri dastxat yoki uzil-kesil aniqlangan asl matn emas. Atlasdagi har bir tarjimada tayanch nusxa ko‘rsatiladi; diplomatik ko‘chirma, o‘qish uchun tayyorlangan matn, so‘zma-so‘z tarjima, adabiy tarjima va sharh alohida saqlanishi kerak.",
      ],
      boundary:
        "Qo‘lyozmalar soni va nomlangan bosma nusxalar fondga oid tekshirilgan ma’lumotlardir. Har bir hikmatning muallifligi alohida tekshirilishi lozim.",
    },
    {
      title: "Qaytish, zikr va xizmat yo‘li",
      era: "Ta’lim merosi",
      place: "Hikmatlar korpusi · keyingi yassaviy nasr",
      opening:
        "She’riyat tarbiya sifatida o‘qilganda eng ravshan so‘zlaydi: Alloh huzurida istak, xulq, xotira va mas’uliyatning qayta shakllanishi sifatida.",
      paragraphs: [
        "Hikmatlar korpusi va keyingi yassaviy nasrda bir necha harakat takrorlanadi: tavba — g‘aflatdan samimiy qaytish; faqr — nafsning o‘ziga ahamiyat talab qilishidan ozodlik; zikr — diqqatni jamlovchi eslash; odob va xizmat — ichki da’volar xulqda sinovdan o‘tadigan maydon; Payg‘ambarga bog‘lanish; va qalb ma’rifati bilan qo‘shilgan muhabbat. Keyingi asarlar yo‘lni shariat, tariqat, ma’rifat va haqiqatning to‘rtlik tuzilishi orqali tartiblaydi.",
        "Ilk nasriy arxiv beqiyos ahamiyatga ega. So‘fi Muhammad Donishmandning «Mir’at al-qulub»i, Ishoq Xojaning XIV asr o‘rtalariga oid, bir tahrirda «Hadiqat al-’arifin» deb atalgan tarixi hamda keyingi «Ta’lim al-Dhakirin» va Haziniyning «Jawahir al-Abrar»i maktabning o‘zini qanday tushuntirganini saqlaydi. Ularning qo‘lyozmalari Yassaviydan keyingi davrga tegishli; ayrim matnlarning bir necha tahriri bor. Ular rivojlanishni yoritadi, ammo yo‘qolgan dastxat o‘rnida ko‘rsatilmasligi kerak.",
        "«Zikr-i arra» nomi bilan ma’lum ovozli zikr keyingi manbalarda hujjatlashtirilgan yassaviy amaliyotga mansub. Bu yerda u tarixiy jihatdan tavsiflanadi, nazoratsiz mashq sifatida o‘rgatilmaydi. Xilvat, ro‘za, nafas intizomi va murshidga itoatga ham shu chegara tatbiq etiladi.",
      ],
      boundary:
        "Takrorlanuvchi axloqiy mavzular nomlangan matn an’analariga tayangan umumlashtirish sifatida e’lon qilinishi mumkin. Marosim tafsilotlari tarixiy tavsif bo‘lib qoladi; ular onlayn bay’at yoki amaliy ko‘rsatma emas.",
    },
    {
      title: "Dalillari teng bo‘lmagan to‘rt vorislik yo‘li",
      era: "XII–XIV asrlar",
      place: "O‘tror · Xorazm · Toshkent · Qoziqurt",
      opening:
        "Keyingi manbalar to‘rt yetakchi vorisni yodga oladi, lekin nasab, ustozlik vorisligi, she’riyat, ziyoratgoh xotirasi va muassasa tarixini bir xil chiziq bilan chizib bo‘lmaydi.",
      paragraphs: [
        "Mansur Ota Arslon Bobo xonadoni orqali oilaviy va ilk vorislik xotirasini olib keladi. Said Ota Atoiya hamda Xorazm va dashtning islomlashuv rivoyatlariga yo‘l ochadi. So‘fi Muhammad Donishmand «Mir’at al-qulub» orqali O‘tror yaqinidagi matniy va ta’limiy tarmoqqa asos bo‘ladi. Hakim Ota — Sulaymon Boqirg‘oniy — yassaviy merosni Xorazm turkiy she’riyati va keyingi Zangi Ota xotirasi bilan bog‘laydi.",
        "Bu yo‘llardan boshqa doiralar ham chiqadi: Suksuk Ota, keyingi Ibrohim Ota, Ismoil Ota, Ishoq Xoja, Zangi Ota, Anbar Ona va Ota vorislari. O‘xshash ismlar jiddiy manbashunoslik xavfidir. Ilk Said Otani keyingi Sayyid Ota bilan, Yassaviyning otasi Ibrohim Otani Donishmand vorislari qatoridagi Ibrohim bilan bildirmasdan birlashtirish mumkin emas. Ziyoratgoh joylashuvi tirik xotirani hujjatlashtirishi mumkin, ammo unga bog‘langan har bir tarjimai hol da’vosini isbotlamaydi.",
      ],
      boundary:
        "To‘rt voris ro‘yxati keyingi yassaviy adabiyotda yaxshi mustahkamlangan. Alohida tarjimai hollar va qabrlarning nisbatlari tekshirilganlik darajasi jihatidan keskin farq qiladi.",
    },
    {
      title: "Yagona idora emas, jamoalar",
      era: "Temuriylar va ulardan keyingi davr",
      place: "Movarounnahr · dasht yo‘laklari",
      opening:
        "Keyingi Yassaviyani bitta markaz, bitta arxiv va bahssiz yagona zanjirga ega zamonaviy tashkilot sifatida tasavvur qilish uni tushunishni qiyinlashtiradi.",
      paragraphs: [
        "Temuriylar davrida yassaviy shayxlar mansublik, muqaddas nasab, homiylik, qiroat va ziyoratgoh tarmoqlari orqali butun ko‘chmanchi yoki o‘troq jamoalarni bog‘lay olgan. Oilaviy xonadonlar, sayyor ustozlar, mahalliy xonaqohlar, she’riy xotira va mintaqaviy ittifoqlar merosni turlicha saqlagan. Natijada doimiy yagona ma’muriy mashina emas, ijtimoiy maydon yuzaga kelgan.",
        "Bu Xojagon va keyingi Naqshbandiya bilan munosabatni ham aniqlashtiradi. An’analar o‘zaro aloqada bo‘lgan, raqobatlashgan, keyingi silsilalarda ayrim shaxslarni umumiy deb bilgan va ba’zan bir-birining xotirasini o‘zlashtirgan. Keyingi naqshbandiy rivoyatlar yassaviy siymolarni o‘z tarixiga kiritishi, yassaviy jamoalar esa naqshbandiy ustozlar bilan aloqaga kirishishi mumkin edi. Aloqa aynanlik degani emas; ta’sir ham muassasaviy vorislikni avtomatik isbotlamaydi.",
      ],
      boundary:
        "Jamoaviy mansublik modeli tarixiy manbalarga tayangan zamonaviy ilmiy qayta tiklashdir. U an’ananing yagona o‘z-o‘zini tavsifi emas, talqin sifatida beriladi.",
    },
    {
      title: "Temuriylarning tosh kitobi",
      era: "1389–1405",
      place: "Yasi / Turkiston",
      opening:
        "Yassaviy vafotidan ikki asrdan ko‘proq vaqt o‘tgach, Amir Temur uning xotirasiga Turkiston ufqini o‘zgartiradigan darajada ulkan me’moriy qiyofa berdi.",
      paragraphs: [
        "UNESCO hozirgi majmua qurilishini 1389–1405-yillarga belgilaydi va u kichikroq maqbara o‘rnida barpo etilganini qayd qiladi. Tugallanmagan bino katta markaziy zal atrofida joylashgan o‘ttiz besh xonani, yig‘in, marosim, mehmondorchilik, dafn va xizmat uchun joylarni o‘z ichiga oladi. Uning ko‘lami Yassaviyning nufuzi vaqt davomida qanday oshganini ko‘rsatadi; u Temuriylar obidasini XII asr guvohiga aylantirmaydi.",
        "Maqbarani arxiv sifatida o‘qish ma’qul: hukmdor homiyligi, me’moriy izlanish, ziyorat, bitik, ta’mir, muhofaza va jamoaviy xotira arxivi sifatida. Qabr muqaddas geografiyaga barqarorlik berdi; har bir keyingi avlod esa shu geografiyani yangidan talqin qildi.",
      ],
      boundary:
        "Qurilish sanalari, oldingi qabr o‘rnida barpo etilishi va me’moriy reja UNESCO orqali tekshirilgan. E’tiqodiy ma’nolar qabul va talqin sifatida ko‘rsatiladi.",
    },
    {
      title: "Davrlardan oshib yashagan ovoz",
      era: "Qozon nashrlaridan bugungacha",
      place: "Volga–Ural · Qozog‘iston · O‘zbekiston · turkiy dunyo",
      opening:
        "Yassaviyning ta’siri meros ko‘cha olgani uchun davom etdi: qo‘lyozma, bosma kitob, qiroat, ziyoratgoh, ilm, oilaviy xotira va yangi tarjimalar orqali.",
      paragraphs: [
        "Qozon bosma madaniyati hikmat an’anasiga Volga–Ural olamida yangi tarqalish imkonini berdi. Zamonaviy o‘zbek, qozoq, rus va turk nashrlari turli tahririy qarorlar qabul qildi; ilmiy tadqiqotlar esa har qanday ommaviy kitobdan kengroq qo‘lyozma maydonini ochdi. Milliy meros muassasalari va tirik e’tiqod jamoalari bugun bir nom atrofida uchrashadi, ammo unga doim bir xil savollarni bermaydi.",
        "Anadolu va undan tashqaridagi ta’sir da’volari mahalliy silsila da’volari kabi ehtiyotkorlikni talab qiladi. Umumiy turkiy diniy lug‘at, keyingi nasab, sayyor darvesh hikoyasi va muassasaviy zanjir aloqaning turli shakllaridir. Atlas har bir yo‘lni kuzatadi, o‘xshashlikni vorislikka aylantirmaydi. Uning vazifasi sof aslni muzlatib qo‘yish emas, uzatish tarixini yetarlicha ochiq ko‘rsatishdir: shunda ehtirom va tanqidiy o‘qish bir-birini chuqurlashtiradi.",
      ],
      boundary:
        "Bugungi jamoa bayonlari hozirgi o‘zlikni anglash uchun ishonchli dalildir. Markaziy Osiyodan tashqaridagi tarixiy vorislik har bir da’vo bo‘yicha mustaqil asoslanishi kerak.",
    },
  ],
  ru: [
    {
      title: "Там, где степь встретилась с оазисом",
      era: "XII век",
      place: "Сайрам · Ясы",
      opening:
        "Ясавийя зародилась на пересечении миров: не на краю исламской цивилизации, а в одном из мест, где заново складывались её языки, народы и уклады жизни.",
      paragraphs: [
        "Ахмад Ясави достоверно связан с Ясы, нынешним Туркестаном, и с тюркским духовным наследием, передававшимся под его именем. Сайрам, Ясы, Отрар и дороги к Хорезму составляли мир караванных городов, возделанных оазисов, подвижных общин, учёных, ремесленников и чтецов. Значение Ясави отчасти заключено в этой встрече миров. Религиозное воспитание могло звучать тюркским поэтическим голосом и сохраняться в памяти за пределами учебного круга.",
        "Исторический очерк его жизни гораздо скромнее образа, сохранённого благочестием. Его смерть обычно относят к 562 году хиджры / 1166–1167 годам. Точные даты рождения, детские эпизоды, путешествия и последовательность наставников известны преимущественно из поздних источников. Ответственная биография не отбрасывает эти рассказы, а показывает читателю, к какому виду свидетельств относится каждый из них.",
      ],
      boundary:
        "Место, духовное наследие и позднейший авторитет хорошо установлены. Подробная хронология детства принадлежит поздней традиции, а не современной Ясави биографии.",
    },
    {
      title: "Наставник в памяти о его учителях",
      era: "Память о духовном становлении",
      place: "Отрар · Бухара · Ясы",
      opening:
        "В поздней памяти рядом с Ясави стоят два имени, но стоят по-разному: Арслан Баба несёт близость священного рассказа, Юсуф Хамадани — строй духовной преемственности.",
      paragraphs: [
        "Арслана Бабу помнят как носителя раннего благословения и первого наставника юного Ахмада. Знаменитые рассказы связывают Ясави со временем Пророка и священной географией Отрара. Их хронологию нельзя установить по свидетельствам современников. Однако устойчивость этих рассказов раскрывает, как ясавийские общины представляли духовную передачу: как доверие, служение и наследие, которое сначала принимают и лишь затем передают через наставление.",
        "Связь с Юсуфом Хамадани стала наиболее распространённым рассказом о преемственности и помещает Ясави в образованные суфийские сети Хорасана и Мавераннахра. Источники сохраняют и конкурирующие версии принадлежности. Поэтому Атлас представляет Хамадани как важную фигуру поздней памяти о силсиле, а не как доказательство того, что Ясавийя и Хваджаган были одной институцией. Их истории встречаются, соперничают и переосмысляют друг друга, не сливаясь в единый орден.",
      ],
      boundary:
        "Арслан Баба принадлежит прежде всего агиографической памяти. Связь с Хамадани — широко принятая поздняя версия силсилы, а не бесспорное свидетельство современников об ученичестве.",
    },
    {
      title: "Не одна книга, а река хикматов",
      era: "Рукописная и печатная передача",
      place: "Центральная Азия · Санкт-Петербург · Казань",
      opening:
        "«Диван-и хикмат» находится в центре литературного наследия Ясави, но дошёл до нас не как единая нетронутая книга, переписанная с автографа наставника.",
      paragraphs: [
        "Каталог 2006 года, описанный Национальным центром рукописей Казахстана, включает 175 составных рукописей с 1 026 различными хикматами, приписываемыми Ясави. Их порядок и состав различаются. Отдельное исследование выявило двадцать три петербургские копии, недостаточно учтённые популярными и критическими изданиями. Эти числа не доказывают существование 1 026 авторских стихотворений. Они показывают масштаб школы памяти, декламации, переписывания и атрибуции.",
        "Хикмат может принадлежать определённому рукописному свидетелю, позднему принятому корпусу Ясави, поэту его школы или современной редакционной атрибуции. Казанские издания 1904 и 1912 годов — драгоценные свидетельства этой дальнейшей жизни, но ни одно не является автографом или окончательно установленным оригиналом. Каждый перевод Атласа будет называть свою текстовую основу и различать дипломатическую транскрипцию, подготовленный текст, близкий перевод, литературный перевод и комментарий.",
      ],
      boundary:
        "Количество рукописей и названные печатные свидетели — проверенные сведения о коллекциях. Авторство каждого отдельного хикмата остаётся самостоятельным вопросом.",
    },
    {
      title: "Путь возвращения, поминания и служения",
      era: "Наследие наставления",
      place: "Корпус хикматов · поздняя ясавийская проза",
      opening:
        "Поэзия говорит яснее всего, когда её читают как духовное воспитание: преобразование желания, поведения, памяти и ответственности перед Богом.",
      paragraphs: [
        "В корпусе хикматов и поздней ясавийской прозе повторяются несколько движений: тауба — честное возвращение из забытья; факр — свобода от притязания собственного «я» на значимость; зикр — поминание, собирающее внимание; адаб и служение, проверяющие внутренние притязания поведением; привязанность к Пророку; любовь, соединённая с познанием сердца. Поздние сочинения организуют путь через четыре понятия: шариат, тарикат, ма‘рифа и хакика.",
        "Ранний прозаический архив незаменим. «Мир’ат ал-кулуб» Суфи Мухаммада Данишманда, история Исхак Хваджи середины XIV века, известная в одной редакции как «Хадикат ал-‘арифин», и поздние сочинения, включая «Та‘лим ал-закирин» и «Джавахир ал-абрар» Хазини, сохраняют то, как школа объясняла себя. Их рукописи позднее Ясави, а некоторые тексты имеют несколько редакций. Они освещают развитие; их нельзя выдавать за утраченный автограф.",
        "Голосовое поминание, известное как зикр-и арра, принадлежит поздней документированной ясавийской практике. Здесь оно описывается исторически, а не преподаётся как упражнение без наставника. Та же граница относится к уединению, посту, дисциплине дыхания и послушанию духовному руководителю.",
      ],
      boundary:
        "Повторяющиеся этические темы можно публиковать как синтез названных текстовых традиций. Ритуальные подробности остаются историческим описанием, а не онлайн-посвящением или практическим наставлением.",
    },
    {
      title: "Четыре пути преемственности с неравными свидетельствами",
      era: "XII–XIV века",
      place: "Отрар · Хорезм · Ташкент · Казыгурт",
      opening:
        "Поздние источники помнят четырёх ведущих преемников, но родство, передача наставничества, поэзия, память святынь и история институций не должны обозначаться одной и той же линией.",
      paragraphs: [
        "Мансур Ата несёт семейную память и память ранней преемственности через дом Арслана Бабы. Саид Ата открывает путь к Ата’ийе и рассказам об исламизации Хорезма и степи. Суфи Мухаммад Данишманд закрепляет текстовую и наставническую ветвь близ Отрара через «Мир’ат ал-кулуб». Хаким Ата, также известный как Сулейман Бакыргани, соединяет ясавийское наследие с хорезмской тюркской поэзией и поздней памятью о Занги Ата.",
        "Из этих путей возникают дальнейшие круги: Суксук Ата, поздний Ибрахим Ата, Исмаил Ата, Исхак Хваджа, Занги Ата, Анбар Ана и преемники Ата. Сходные имена создают серьёзную источниковедческую опасность. Раннего Саида Ата нельзя незаметно объединять с поздним Саййидом Ата; отца Ясави Ибрахима Ата — с Ибрахимом из линии преемников Данишманда. Местоположение святыни может документировать живую память, не доказывая каждое связанное с ней биографическое утверждение.",
      ],
      boundary:
        "Список четырёх преемников хорошо закреплён в поздней ясавийской литературе. Степень изученности отдельных биографий и идентификаций гробниц существенно различается.",
    },
    {
      title: "Общины вместо единой бюрократии",
      era: "Тимуридский и посттимуридский мир",
      place: "Мавераннахр · степные коридоры",
      opening:
        "Позднюю Ясавийю особенно легко понять неверно, если вообразить её современной организацией с одной штаб-квартирой, одним архивом и одной бесспорной цепью.",
      paragraphs: [
        "В эпоху Тимуридов ясавийские шейхи могли объединять целые подвижные или оседлые общины через принадлежность, священную генеалогию, покровительство, декламацию и сети святынь. Семейные дома, странствующие наставники, местные обители, поэтическая память и региональные союзы сохраняли наследие по-разному. Возникало социальное поле, а не постоянный единый административный механизм.",
        "Это проясняет и отношения с Хваджаган и поздней Накшбандийей. Традиции взаимодействовали, соперничали, разделяли отдельные фигуры в ретроспективных силсилах и порой усваивали память друг друга. Поздние накшбандийские рассказы могли включать ясавийских деятелей; ясавийские общины могли обращаться к накшбандийским наставникам. Связь не означает тождества, а влияние само по себе не устанавливает институционального происхождения.",
      ],
      boundary:
        "Модель общинной принадлежности — современная научная реконструкция по историческим источникам. Она представлена как интерпретация, а не как единственное самоописание традиции.",
    },
    {
      title: "Тимуридская книга из камня",
      era: "1389–1405",
      place: "Ясы / Туркестан",
      opening:
        "Более чем через два века после смерти Ясави Тимур придал его памяти архитектурное тело, достаточно величественное, чтобы изменить горизонт Туркестана.",
      paragraphs: [
        "ЮНЕСКО датирует нынешний комплекс 1389–1405 годами и отмечает, что он заменил меньший мавзолей. Незавершённое здание содержит тридцать пять помещений вокруг большого центрального зала, включая пространства для собраний, обрядов, гостеприимства, погребения и служения. Его масштаб раскрывает, как со временем вырос авторитет Ясави; он не превращает тимуридский памятник в свидетельство XII века.",
        "Мавзолей лучше читать как архив: царского покровительства, архитектурного поиска, паломничества, надписей, ремонта, охраны и общественной памяти. Гробница придала священной географии долговечность, а каждое следующее поколение заново истолковывало эту географию.",
      ],
      boundary:
        "Даты строительства, замена более ранней гробницы и архитектурный план проверены по ЮНЕСКО. Духовные значения обозначены как восприятие и интерпретация.",
    },
    {
      title: "Голос, продолжающий жить во многих мирах",
      era: "От казанских изданий до настоящего",
      place: "Волго-Уральский регион · Казахстан · Узбекистан · тюркский мир",
      opening:
        "Влияние Ясави продолжалось потому, что наследие могло перемещаться: в рукописях, печатных книгах, декламации, святынях, исследованиях, семейной памяти и новых переводах.",
      paragraphs: [
        "Казанская печатная культура дала традиции хикматов новое распространение в Волго-Уральском мире. Современные узбекские, казахские, русские и турецкие издания принимали различные редакционные решения, а исследователи открывали рукописное поле, гораздо более обширное, чем любой популярный том. Учреждения национального наследия и живые духовные общины сегодня встречаются вокруг одного имени, хотя обращаются к нему не всегда с одинаковыми вопросами.",
        "Утверждения о влиянии в Анатолии и за её пределами требуют той же дисциплины, что и местные утверждения о силсиле. Общий тюркский духовный словарь, поздняя генеалогия, рассказ о странствующем дервише и институциональная цепь — разные виды связи. Атлас следует за каждым путём, не превращая сходство в происхождение. Его задача — сделать историю передачи достаточно видимой, чтобы почтение и критическое чтение могли углублять друг друга, а не закрепить неподвижный образ чистого первоначала.",
      ],
      boundary:
        "Современные рассказы общин надёжно свидетельствуют об их нынешнем самопонимании. Историческое происхождение за пределами Центральной Азии требует самостоятельного подтверждения каждого конкретного утверждения.",
    },
  ],
};

export const evidenceLabels = {
  uz: {
    "Historical record": "Tarixiy dalil",
    "Textual tradition": "Matn an’anasi",
    "Hagiographical memory": "Manoqib xotirasi",
    "Living reception": "Bugungi qabul",
  },
  ru: {
    "Historical record": "Историческое свидетельство",
    "Textual tradition": "Текстовая традиция",
    "Hagiographical memory": "Агиографическая память",
    "Living reception": "Современное восприятие",
  },
};
