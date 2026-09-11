const services = [
  {
    id: "haircuts",
    title: {
      lv: "Griezumi",
      ru: "Стрижки",
      en: "Haircuts",
    },
    text: {
      lv: "Sieviešu un universāli griezumi pēc matu tipa un ikdienas ritma.",
      ru: "Женские и универсальные стрижки под тип волос и привычный ритм дня.",
      en: "Women’s and everyday cuts shaped to hair type and daily routine.",
    },
  },
  {
    id: "coloring",
    title: {
      lv: "Krāsošana",
      ru: "Окрашивание",
      en: "Colouring",
    },
    text: {
      lv: "Tonēšana, atjaunošana un maiga krāsas maiņa bez pārsteigumiem.",
      ru: "Тонирование, обновление цвета и спокойная смена оттенка.",
      en: "Toning, colour refresh, and a gentle change of shade.",
    },
  },
  {
    id: "styling",
    title: {
      lv: "Veidošana",
      ru: "Укладка",
      en: "Styling",
    },
    text: {
      lv: "Ikdienas un svētku ieveidojums, kas turas un izskatās dabiski.",
      ru: "Повседневная и праздничная укладка, которая держится и выглядит естественно.",
      en: "Everyday and occasion styling that holds and still looks natural.",
    },
  },
  {
    id: "mens",
    title: {
      lv: "Vīriešu griezumi",
      ru: "Мужские стрижки",
      en: "Men’s cuts",
    },
    text: {
      lv: "Klasiski un mūsdienīgi vīriešu griezumi, bārdas forma pēc vienošanās.",
      ru: "Классические и современные мужские стрижки, форма бороды по договорённости.",
      en: "Classic and contemporary men’s cuts; beard shape by arrangement.",
    },
  },
  {
    id: "kids",
    title: {
      lv: "Bērnu griezumi",
      ru: "Детские стрижки",
      en: "Children’s cuts",
    },
    text: {
      lv: "Rūpīgi griezumi bērniem mierīgā tempā, bez steigas.",
      ru: "Аккуратные детские стрижки в спокойном темпе, без спешки.",
      en: "Careful children’s cuts at an unhurried pace.",
    },
  },
];

const masters = [
  {
    id: "anna",
    name: "Anna",
    role: {
      lv: "Friziere",
      ru: "Парикмахер",
      en: "Hairdresser",
    },
    specializations: {
      lv: "Griezumi, krāsošana",
      ru: "Стрижки, окрашивание",
      en: "Haircuts, colouring",
    },
    languages: ["LV", "RU"],
    photo: "images/masters/1162835-portrait-3578054_1920.jpg",
  },
  {
    id: "elina",
    name: "Elīna",
    role: {
      lv: "Friziere",
      ru: "Парикмахер",
      en: "Hairdresser",
    },
    specializations: {
      lv: "Veidošana, krāsošana",
      ru: "Укладка, окрашивание",
      en: "Styling, colouring",
    },
    languages: ["LV", "EN"],
    photo: "images/masters/1866946-face-1252999_1920.jpg",
  },
  {
    id: "maris",
    name: "Māris",
    role: {
      lv: "Frizieris",
      ru: "Парикмахер",
      en: "Hairdresser",
    },
    specializations: {
      lv: "Vīriešu griezumi, bārda",
      ru: "Мужские стрижки, борода",
      en: "Men’s cuts, beard",
    },
    languages: ["LV", "RU"],
    photo: "images/salon/mostafa_meraji-hair-stylist-7099175_1920.jpg",
  },
];

const contacts = {
  address: "Ilūkstes iela 109, Vidzemes priekšpilsēta, Rīga, LV-1082",
  phone: "67 583 578",
  phoneHref: "tel:+37167583578",
  email: "",
  hours: {
    lv: "Precizējiet pa tālruni",
    ru: "Уточняйте по телефону",
    en: "Please call to confirm",
  },
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=24.1925%2C56.9513%2C24.2045%2C56.9574&layer=mapnik&marker=56.95435%2C24.19854",
  mapHref: "https://www.openstreetmap.org/?mlat=56.95435&mlon=24.19854#map=17/56.95435/24.19854",
  routeHref: "https://www.google.com/maps/dir/?api=1&destination=Il%C5%ABkstes+iela+109%2C+R%C4%ABga",
};

const about = {
  photo: "images/salon/michelle-maria-beauty-salon-3277314_1920.jpg",
  paragraphs: {
    lv: [
      "El-Salons ir frizētava Rīgā, Vidzemes priekšpilsētā. Atrodamies Ilūkstes ielā 109, LV-1082 — ērti iegriezties ceļā uz mājām vai darbu, bez brauciena uz centru. Apkārt ir dzīvojamie kvartāli, tāpēc pie mums nāk kā uz savu rajona frizētavu.",
      "Salonā piedāvājam sieviešu un vīriešu griezumus, krāsošanu, veidošanu un bērnu griezumus. Meistari strādā rāmi: vispirms noskaidrojam, kas vajadzīgs, tad griežam vai krāsojam, bez liekas steigas. Ja vēlaties precizēt pakalpojumu vai laiku, zvaniet pa tālruni 67 583 578.",
      "Šis ir vietējs salons, nevis ķēde. Telpa ir gaiša un vienkārša, serviss — ierasts un saprotams. Mums svarīgi, lai mati labi izskatītos ne tikai krēslā, bet arī nākamajā dienā — parastā rajona ikdienā.",
    ],
    ru: [
      "El-Salons — парикмахерский салон в Риге, в районе Vidzemes priekšpilsēta. Мы на Ilūkstes iela 109, LV-1082: удобно зайти по пути домой или с работы, без поездки в центр. Рядом жилые кварталы, поэтому к нам приходят как в свою районную парикмахерскую.",
      "В салоне делают женские и мужские стрижки, окрашивание, укладку и детские стрижки. Мастера работают спокойно: сначала выясняем, что нужно, затем стрижём или красим, без лишней спешки. Чтобы уточнить услугу или время, позвоните по телефону 67 583 578.",
      "Это локальный салон, а не сеть. Пространство светлое и простое, сервис привычный и понятный. Нам важно, чтобы волосы хорошо выглядели не только в кресле, но и на следующий день — в обычной жизни района.",
    ],
    en: [
      "El-Salons is a hair salon in Riga, in Vidzemes priekšpilsēta. You will find us at Ilūkstes iela 109, LV-1082 — an easy stop on the way home or to work, without a trip into the centre. The streets around us are residential, so people come here as they would to a neighbourhood salon.",
      "We offer women’s and men’s cuts, colouring, styling, and children’s haircuts. Stylists work at a calm pace: first we find out what you need, then we cut or colour, without extra hurry. To check a service or a time, call 67 583 578.",
      "This is a local salon, not a chain. The space is light and simple, and the service is familiar and clear. What matters to us is that your hair looks good not only in the chair, but the next day — in ordinary neighbourhood life.",
    ],
  },
};

const why = [
  {
    id: "nearby",
    title: {
      lv: "Ērti sasniedzams",
      ru: "Удобно добраться",
      en: "Easy to reach",
    },
    text: {
      lv: "Ilūkstes iela 109, Vidzemes priekšpilsēta, LV-1082 — tuvu mājām un darbam.",
      ru: "Ilūkstes iela 109, Vidzemes priekšpilsēta, LV-1082 — рядом с домом и работой.",
      en: "Ilūkstes iela 109, Vidzemes priekšpilsēta, LV-1082 — close to home and work.",
    },
  },
  {
    id: "pace",
    title: {
      lv: "Mierīgs temps",
      ru: "Спокойный темп",
      en: "Unhurried pace",
    },
    text: {
      lv: "Bez steigas. Vispirms saruna, tad darbs pie matiem.",
      ru: "Без спешки. Сначала разговор, потом работа с волосами.",
      en: "No rush. First a conversation, then the work on your hair.",
    },
  },
  {
    id: "services",
    title: {
      lv: "Ikdienas pakalpojumi",
      ru: "Привычные услуги",
      en: "Everyday services",
    },
    text: {
      lv: "Griezumi, krāsošana, veidošana — sievietēm, vīriešiem un bērniem.",
      ru: "Стрижки, окрашивание, укладка — для женщин, мужчин и детей.",
      en: "Cuts, colour, and styling — for women, men, and children.",
    },
  },
  {
    id: "call",
    title: {
      lv: "Vienkārši sazināties",
      ru: "Легко созвониться",
      en: "Easy to call",
    },
    text: {
      lv: "Tālrunis 67 583 578 — vienosimies par laiku un vajadzīgo.",
      ru: "Телефон 67 583 578 — договоримся о времени и услуге.",
      en: "Phone 67 583 578 — we will agree a time and what you need.",
    },
  },
];

const gallery = [
  "images/gallery/guilherme-petri-PtOfbGkU3uI-unsplash.jpg",
  "images/gallery/benyamin-bohlouli-LGXN4OSQSa4-unsplash.jpg",
  "images/gallery/phantomas-hair-salon-5049289.jpg",
  "images/gallery/alexkrasovsky-beauty-salon-2521943_1920.jpg",
  "images/gallery/renee_olmsted_photography-haircut-1007891_1920.jpg",
  "images/gallery/congerdesign-hair-5473078_1920.jpg",
  "images/gallery/congerdesign-hair-5473204_1920.jpg",
  "images/gallery/7760815-hair-4657887.jpg",
  "images/gallery/acolonia-shelf-3259028_1920.jpg",
  "images/gallery/stocksnap-salon-2561845_1920.jpg",
];
