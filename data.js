/* ============================================================
   French learning data — vocabulary, phrases, dialogues, grammar
   Ukrainian translations, A1 → B2
============================================================ */

// --- Vocabulary by level ---
const VOCAB = {
  A1: [
    {fr:"bonjour",ua:"добрий день",t:"Привітання",ipa:"bɔ̃.ʒuʁ"},
    {fr:"bonsoir",ua:"добрий вечір",t:"Привітання"},
    {fr:"salut",ua:"привіт",t:"Привітання"},
    {fr:"au revoir",ua:"до побачення",t:"Привітання"},
    {fr:"merci",ua:"дякую",t:"Привітання"},
    {fr:"merci beaucoup",ua:"дуже дякую",t:"Привітання"},
    {fr:"s'il vous plaît",ua:"будь ласка (Ви)",t:"Привітання"},
    {fr:"s'il te plaît",ua:"будь ласка (ти)",t:"Привітання"},
    {fr:"excusez-moi",ua:"вибачте",t:"Привітання"},
    {fr:"pardon",ua:"пробачте",t:"Привітання"},
    {fr:"oui",ua:"так",t:"Привітання"},
    {fr:"non",ua:"ні",t:"Привітання"},
    {fr:"ça va ?",ua:"як справи?",t:"Привітання"},
    {fr:"je m'appelle…",ua:"мене звати…",t:"Привітання"},
    {fr:"enchanté(e)",ua:"приємно познайомитись",t:"Привітання"},
    {fr:"bonne nuit",ua:"на добраніч",t:"Привітання"},
    {fr:"à bientôt",ua:"до зустрічі",t:"Привітання"},
    {fr:"à demain",ua:"до завтра",t:"Привітання"},
    {fr:"bienvenue",ua:"ласкаво просимо",t:"Привітання"},
    {fr:"comment allez-vous ?",ua:"як ваші справи?",t:"Привітання"},

    {fr:"un",ua:"один",t:"Числа"},{fr:"deux",ua:"два",t:"Числа"},{fr:"trois",ua:"три",t:"Числа"},
    {fr:"quatre",ua:"чотири",t:"Числа"},{fr:"cinq",ua:"п'ять",t:"Числа"},{fr:"six",ua:"шість",t:"Числа"},
    {fr:"sept",ua:"сім",t:"Числа"},{fr:"huit",ua:"вісім",t:"Числа"},{fr:"neuf",ua:"дев'ять",t:"Числа"},
    {fr:"dix",ua:"десять",t:"Числа"},{fr:"onze",ua:"одинадцять",t:"Числа"},{fr:"douze",ua:"дванадцять",t:"Числа"},
    {fr:"vingt",ua:"двадцять",t:"Числа"},{fr:"trente",ua:"тридцять",t:"Числа"},{fr:"quarante",ua:"сорок",t:"Числа"},
    {fr:"cinquante",ua:"п'ятдесят",t:"Числа"},{fr:"soixante",ua:"шістдесят",t:"Числа"},
    {fr:"soixante-dix",ua:"сімдесят",t:"Числа"},{fr:"quatre-vingts",ua:"вісімдесят",t:"Числа"},
    {fr:"quatre-vingt-dix",ua:"дев'яносто",t:"Числа"},{fr:"cent",ua:"сто",t:"Числа"},{fr:"mille",ua:"тисяча",t:"Числа"},

    {fr:"rouge",ua:"червоний",t:"Кольори"},{fr:"bleu(e)",ua:"синій",t:"Кольори"},
    {fr:"vert(e)",ua:"зелений",t:"Кольори"},{fr:"jaune",ua:"жовтий",t:"Кольори"},
    {fr:"noir(e)",ua:"чорний",t:"Кольори"},{fr:"blanc / blanche",ua:"білий",t:"Кольори"},
    {fr:"gris(e)",ua:"сірий",t:"Кольори"},{fr:"rose",ua:"рожевий",t:"Кольори"},
    {fr:"orange",ua:"помаранчевий",t:"Кольори"},{fr:"violet(te)",ua:"фіолетовий",t:"Кольори"},
    {fr:"marron",ua:"коричневий",t:"Кольори"},{fr:"doré(e)",ua:"золотий",t:"Кольори"},
    {fr:"argenté(e)",ua:"сріблястий",t:"Кольори"},

    {fr:"la mère",ua:"мати",t:"Сім'я"},{fr:"le père",ua:"батько",t:"Сім'я"},
    {fr:"le frère",ua:"брат",t:"Сім'я"},{fr:"la sœur",ua:"сестра",t:"Сім'я"},
    {fr:"le fils",ua:"син",t:"Сім'я"},{fr:"la fille",ua:"дочка",t:"Сім'я"},
    {fr:"le grand-père",ua:"дідусь",t:"Сім'я"},{fr:"la grand-mère",ua:"бабуся",t:"Сім'я"},
    {fr:"l'oncle",ua:"дядько",t:"Сім'я"},{fr:"la tante",ua:"тітка",t:"Сім'я"},
    {fr:"le cousin",ua:"двоюрідний брат",t:"Сім'я"},{fr:"la cousine",ua:"двоюрідна сестра",t:"Сім'я"},
    {fr:"les parents",ua:"батьки",t:"Сім'я"},{fr:"les enfants",ua:"діти",t:"Сім'я"},
    {fr:"le bébé",ua:"немовля",t:"Сім'я"},{fr:"le mari",ua:"чоловік",t:"Сім'я"},
    {fr:"la femme",ua:"дружина",t:"Сім'я"},

    {fr:"le pain",ua:"хліб",t:"Їжа"},{fr:"le fromage",ua:"сир",t:"Їжа"},
    {fr:"le beurre",ua:"масло",t:"Їжа"},{fr:"le lait",ua:"молоко",t:"Їжа"},
    {fr:"l'eau",ua:"вода",t:"Їжа"},{fr:"le café",ua:"кава",t:"Їжа"},
    {fr:"le thé",ua:"чай",t:"Їжа"},{fr:"le jus",ua:"сік",t:"Їжа"},
    {fr:"la viande",ua:"м'ясо",t:"Їжа"},{fr:"le poisson",ua:"риба",t:"Їжа"},
    {fr:"la pomme",ua:"яблуко",t:"Їжа"},{fr:"la tomate",ua:"помідор",t:"Їжа"},
    {fr:"le chocolat",ua:"шоколад",t:"Їжа"},{fr:"le gâteau",ua:"торт",t:"Їжа"},
    {fr:"la soupe",ua:"суп",t:"Їжа"},{fr:"le vin",ua:"вино",t:"Їжа"},
    {fr:"le sucre",ua:"цукор",t:"Їжа"},{fr:"le sel",ua:"сіль",t:"Їжа"},
    {fr:"l'œuf",ua:"яйце",t:"Їжа"},{fr:"le riz",ua:"рис",t:"Їжа"},
    {fr:"les pâtes",ua:"макарони",t:"Їжа"},{fr:"la salade",ua:"салат",t:"Їжа"},
    {fr:"la pomme de terre",ua:"картопля",t:"Їжа"},{fr:"le croissant",ua:"круасан",t:"Їжа"},

    {fr:"la chemise",ua:"сорочка",t:"Одяг"},{fr:"le pantalon",ua:"штани",t:"Одяг"},
    {fr:"la jupe",ua:"спідниця",t:"Одяг"},{fr:"la robe",ua:"сукня",t:"Одяг"},
    {fr:"le manteau",ua:"пальто",t:"Одяг"},{fr:"la veste",ua:"куртка",t:"Одяг"},
    {fr:"les chaussures",ua:"взуття",t:"Одяг"},{fr:"les chaussettes",ua:"шкарпетки",t:"Одяг"},
    {fr:"le chapeau",ua:"капелюх",t:"Одяг"},{fr:"l'écharpe",ua:"шарф",t:"Одяг"},
    {fr:"le pull",ua:"светр",t:"Одяг"},{fr:"le tee-shirt",ua:"футболка",t:"Одяг"},
    {fr:"les lunettes",ua:"окуляри",t:"Одяг"},{fr:"le sac",ua:"сумка",t:"Одяг"},
    {fr:"les gants",ua:"рукавиці",t:"Одяг"},{fr:"le jean",ua:"джинси",t:"Одяг"},

    {fr:"le bus",ua:"автобус",t:"Транспорт"},{fr:"le métro",ua:"метро",t:"Транспорт"},
    {fr:"le train",ua:"потяг",t:"Транспорт"},{fr:"l'avion",ua:"літак",t:"Транспорт"},
    {fr:"la voiture",ua:"автомобіль",t:"Транспорт"},{fr:"le taxi",ua:"таксі",t:"Транспорт"},
    {fr:"le vélo",ua:"велосипед",t:"Транспорт"},{fr:"le bateau",ua:"човен",t:"Транспорт"},
    {fr:"la gare",ua:"вокзал",t:"Транспорт"},

    {fr:"la maison",ua:"будинок",t:"Дім"},{fr:"la chambre",ua:"кімната",t:"Дім"},
    {fr:"la cuisine",ua:"кухня",t:"Дім"},{fr:"la salle de bain",ua:"ванна",t:"Дім"},
    {fr:"le salon",ua:"вітальня",t:"Дім"},{fr:"la porte",ua:"двері",t:"Дім"},
    {fr:"la fenêtre",ua:"вікно",t:"Дім"},{fr:"le mur",ua:"стіна",t:"Дім"},
    {fr:"le lit",ua:"ліжко",t:"Дім"},{fr:"la table",ua:"стіл",t:"Дім"},
    {fr:"la chaise",ua:"стілець",t:"Дім"},{fr:"le canapé",ua:"диван",t:"Дім"},

    {fr:"la tête",ua:"голова",t:"Тіло"},{fr:"les yeux",ua:"очі",t:"Тіло"},
    {fr:"le nez",ua:"ніс",t:"Тіло"},{fr:"la bouche",ua:"рот",t:"Тіло"},
    {fr:"l'oreille",ua:"вухо",t:"Тіло"},{fr:"la main",ua:"кисть",t:"Тіло"},
    {fr:"le bras",ua:"рука",t:"Тіло"},{fr:"la jambe",ua:"нога",t:"Тіло"},
    {fr:"le pied",ua:"ступня",t:"Тіло"},{fr:"le cœur",ua:"серце",t:"Тіло"},

    {fr:"grand(e)",ua:"великий",t:"Прикметники"},{fr:"petit(e)",ua:"маленький",t:"Прикметники"},
    {fr:"bon(ne)",ua:"добрий",t:"Прикметники"},{fr:"mauvais(e)",ua:"поганий",t:"Прикметники"},
    {fr:"beau / belle",ua:"красивий",t:"Прикметники"},{fr:"nouveau",ua:"новий",t:"Прикметники"},
    {fr:"vieux",ua:"старий",t:"Прикметники"},{fr:"chaud(e)",ua:"гарячий",t:"Прикметники"},
    {fr:"froid(e)",ua:"холодний",t:"Прикметники"},{fr:"facile",ua:"легкий",t:"Прикметники"},
    {fr:"difficile",ua:"складний",t:"Прикметники"},
  ],
  A2: [
    {fr:"le château",ua:"замок",t:"Дозвілля"},{fr:"le musée",ua:"музей",t:"Дозвілля"},
    {fr:"le théâtre",ua:"театр",t:"Дозвілля"},{fr:"le cinéma",ua:"кінотеатр",t:"Дозвілля"},
    {fr:"sortir",ua:"виходити",t:"Дозвілля"},{fr:"aller au concert",ua:"на концерт",t:"Дозвілля"},
    {fr:"faire une balade",ua:"прогулюватися",t:"Дозвілля"},{fr:"la randonnée",ua:"похід",t:"Дозвілля"},
    {fr:"l'escalade",ua:"скелелазіння",t:"Дозвілля"},{fr:"le bricolage",ua:"майстрування",t:"Дозвілля"},
    {fr:"les jeux vidéo",ua:"відеоігри",t:"Дозвілля"},{fr:"la peinture",ua:"живопис",t:"Дозвілля"},
    {fr:"un festival",ua:"фестиваль",t:"Дозвілля"},{fr:"un spectacle",ua:"вистава",t:"Дозвілля"},

    {fr:"naître",ua:"народитися",t:"Життя"},{fr:"grandir",ua:"рости",t:"Життя"},
    {fr:"déménager",ua:"переїжджати",t:"Життя"},{fr:"se marier",ua:"одружитися",t:"Життя"},
    {fr:"tomber amoureux",ua:"закохатися",t:"Життя"},{fr:"avoir un enfant",ua:"мати дитину",t:"Життя"},
    {fr:"rencontrer",ua:"зустріти",t:"Життя"},{fr:"se séparer",ua:"розлучитися",t:"Життя"},

    {fr:"le souvenir",ua:"спогад",t:"Спогади"},{fr:"se souvenir",ua:"пам'ятати",t:"Спогади"},
    {fr:"oublier",ua:"забувати",t:"Спогади"},{fr:"l'odeur",ua:"запах",t:"Спогади"},
    {fr:"inoubliable",ua:"незабутній",t:"Спогади"},{fr:"joyeux",ua:"радісний",t:"Спогади"},
    {fr:"triste",ua:"сумний",t:"Спогади"},

    {fr:"la plage",ua:"пляж",t:"Природа"},{fr:"le sable",ua:"пісок",t:"Природа"},
    {fr:"la côte",ua:"узбережжя",t:"Природа"},{fr:"le ciel",ua:"небо",t:"Природа"},
    {fr:"l'orage",ua:"гроза",t:"Природа"},{fr:"la pluie",ua:"дощ",t:"Природа"},
    {fr:"le soleil",ua:"сонце",t:"Природа"},{fr:"le vent",ua:"вітер",t:"Природа"},
    {fr:"le champ",ua:"поле",t:"Природа"},{fr:"le lac",ua:"озеро",t:"Природа"},
    {fr:"la montagne",ua:"гора",t:"Природа"},{fr:"la forêt",ua:"ліс",t:"Природа"},

    {fr:"l'appartement",ua:"квартира",t:"Житло"},{fr:"le balcon",ua:"балкон",t:"Житло"},
    {fr:"le jardin",ua:"сад",t:"Житло"},{fr:"le loyer",ua:"оренда",t:"Житло"},
    {fr:"le/la propriétaire",ua:"власник",t:"Житло"},{fr:"le/la locataire",ua:"орендар",t:"Житло"},
    {fr:"la douche",ua:"душ",t:"Житло"},{fr:"le four",ua:"духовка",t:"Житло"},
    {fr:"le réfrigérateur",ua:"холодильник",t:"Житло"},{fr:"l'étagère",ua:"полиця",t:"Житло"},

    {fr:"chaleureux",ua:"привітний",t:"Характер"},{fr:"curieux",ua:"допитливий",t:"Характер"},
    {fr:"fidèle",ua:"вірний",t:"Характер"},{fr:"honnête",ua:"чесний",t:"Характер"},
    {fr:"optimiste",ua:"оптимістичний",t:"Характер"},{fr:"prudent",ua:"обережний",t:"Характер"},
    {fr:"paresseux",ua:"лінивий",t:"Характер"},{fr:"têtu",ua:"впертий",t:"Характер"},
    {fr:"généreux",ua:"щедрий",t:"Характер"},{fr:"timide",ua:"сором'язливий",t:"Характер"},

    {fr:"le smartphone",ua:"смартфон",t:"Техніка"},{fr:"l'écran",ua:"екран",t:"Техніка"},
    {fr:"l'application",ua:"додаток",t:"Техніка"},{fr:"télécharger",ua:"завантажувати",t:"Техніка"},
    {fr:"le réseau social",ua:"соцмережа",t:"Техніка"},{fr:"en ligne",ua:"онлайн",t:"Техніка"},
    {fr:"l'intelligence artificielle",ua:"штучний інтелект",t:"Техніка"},

    {fr:"commander",ua:"замовляти",t:"Ресторан"},{fr:"le pourboire",ua:"чайові",t:"Ресторан"},
    {fr:"le serveur",ua:"офіціант",t:"Ресторан"},{fr:"épicé",ua:"гострий",t:"Ресторан"},
    {fr:"salé",ua:"солоний",t:"Ресторан"},{fr:"sucré",ua:"солодкий",t:"Ресторан"},
    {fr:"déguster",ua:"дегустувати",t:"Ресторан"},{fr:"la carte",ua:"меню",t:"Ресторан"},
    {fr:"l'addition",ua:"рахунок",t:"Ресторан"},{fr:"la carotte",ua:"морква",t:"Ресторан"},
    {fr:"le saumon",ua:"лосось",t:"Ресторан"},{fr:"le poulet",ua:"курятина",t:"Ресторан"},

    {fr:"l'hôtel",ua:"готель",t:"Подорож"},{fr:"le départ",ua:"відправлення",t:"Подорож"},
    {fr:"la destination",ua:"напрямок",t:"Подорож"},{fr:"l'aéroport",ua:"аеропорт",t:"Подорож"},
    {fr:"le billet",ua:"квиток",t:"Подорож"},{fr:"le vol",ua:"рейс",t:"Подорож"},
    {fr:"les bagages",ua:"багаж",t:"Подорож"},{fr:"la valise",ua:"валіза",t:"Подорож"},
    {fr:"le passeport",ua:"паспорт",t:"Подорож"},{fr:"l'excursion",ua:"екскурсія",t:"Подорож"},
    {fr:"le guide",ua:"гід",t:"Подорож"},{fr:"la carte postale",ua:"листівка",t:"Подорож"},

    {fr:"acheter",ua:"купувати",t:"Гроші"},{fr:"dépenser",ua:"витрачати",t:"Гроші"},
    {fr:"économiser",ua:"заощаджувати",t:"Гроші"},{fr:"payer",ua:"платити",t:"Гроші"},
    {fr:"cher",ua:"дорогий",t:"Гроші"},{fr:"gratuit",ua:"безкоштовний",t:"Гроші"},
    {fr:"le prix",ua:"ціна",t:"Гроші"},{fr:"la monnaie",ua:"здача",t:"Гроші"},
    {fr:"la carte bancaire",ua:"банківська картка",t:"Гроші"},

    {fr:"le chat",ua:"кіт",t:"Тварини"},{fr:"le chien",ua:"собака",t:"Тварини"},
    {fr:"le cheval",ua:"кінь",t:"Тварини"},{fr:"le poisson",ua:"риба",t:"Тварини"},
    {fr:"le serpent",ua:"змія",t:"Тварини"},{fr:"le dauphin",ua:"дельфін",t:"Тварини"},
    {fr:"la vache",ua:"корова",t:"Тварини"},{fr:"le mouton",ua:"вівця",t:"Тварини"},
    {fr:"la poule",ua:"курка",t:"Тварини"},{fr:"l'ours",ua:"ведмідь",t:"Тварини"},
    {fr:"le lapin",ua:"кролик",t:"Тварини"},{fr:"l'oiseau",ua:"птах",t:"Тварини"},
  ],
  B1: [
    {fr:"l'adolescence",ua:"підлітковий вік",t:"Стосунки"},
    {fr:"la fratrie",ua:"брати і сестри",t:"Стосунки"},
    {fr:"se fiancer",ua:"заручитися",t:"Стосунки"},
    {fr:"l'âme sœur",ua:"споріднена душа",t:"Стосунки"},
    {fr:"tomber amoureux",ua:"закохатися",t:"Стосунки"},
    {fr:"séduire",ua:"зваблювати",t:"Стосунки"},
    {fr:"la passion",ua:"пристрасть",t:"Стосунки"},
    {fr:"trahir",ua:"зрадити",t:"Стосунки"},
    {fr:"la meilleure amie",ua:"найкраща подруга",t:"Стосунки"},
    {fr:"l'entourage",ua:"оточення",t:"Стосунки"},
    {fr:"amical",ua:"дружній",t:"Стосунки"},
    {fr:"l'espoir",ua:"надія",t:"Стосунки"},

    {fr:"le spectacle",ua:"вистава",t:"Культура"},
    {fr:"le metteur en scène",ua:"режисер",t:"Культура"},
    {fr:"le comédien",ua:"актор",t:"Культура"},
    {fr:"le public",ua:"публіка",t:"Культура"},
    {fr:"applaudir",ua:"аплодувати",t:"Культура"},
    {fr:"le chef-d'œuvre",ua:"шедевр",t:"Культура"},
    {fr:"l'exposition",ua:"виставка",t:"Культура"},
    {fr:"la galerie",ua:"галерея",t:"Культура"},
    {fr:"le roman",ua:"роман",t:"Культура"},
    {fr:"la nouvelle",ua:"новела",t:"Культура"},
    {fr:"l'auteur",ua:"автор",t:"Культура"},
    {fr:"la critique",ua:"критика",t:"Культура"},

    {fr:"la francophonie",ua:"франкофонія",t:"Мова"},
    {fr:"l'accent",ua:"акцент",t:"Мова"},
    {fr:"la prononciation",ua:"вимова",t:"Мова"},
    {fr:"le vocabulaire",ua:"словник",t:"Мова"},
    {fr:"la grammaire",ua:"граматика",t:"Мова"},
    {fr:"l'expression",ua:"вислів",t:"Мова"},
    {fr:"maîtriser",ua:"опановувати",t:"Мова"},
    {fr:"couramment",ua:"вільно",t:"Мова"},

    {fr:"l'embouteillage",ua:"пробка",t:"Місто"},
    {fr:"la pollution",ua:"забруднення",t:"Місто"},
    {fr:"le transport en commun",ua:"громадський транспорт",t:"Місто"},
    {fr:"la piste cyclable",ua:"велодоріжка",t:"Місто"},
    {fr:"le trottoir",ua:"тротуар",t:"Місто"},
    {fr:"le passage piéton",ua:"перехід",t:"Місто"},
    {fr:"le quartier",ua:"район",t:"Місто"},
    {fr:"la banlieue",ua:"передмістя",t:"Місто"},
    {fr:"le centre-ville",ua:"центр",t:"Місто"},

    {fr:"réserver un hôtel",ua:"забронювати",t:"Подорож"},
    {fr:"l'itinéraire",ua:"маршрут",t:"Подорож"},
    {fr:"le dépaysement",ua:"зміна обстановки",t:"Подорож"},
    {fr:"hors des sentiers battus",ua:"поза маршрутами",t:"Подорож"},
    {fr:"l'écotourisme",ua:"екотуризм",t:"Подорож"},
    {fr:"s'émerveiller",ua:"дивуватися",t:"Подорож"},
    {fr:"flâner",ua:"прогулюватися",t:"Подорож"},
    {fr:"découvrir",ua:"відкривати",t:"Подорож"},

    {fr:"l'étudiant",ua:"студент",t:"Навчання"},
    {fr:"la licence",ua:"бакалавр",t:"Навчання"},
    {fr:"le master",ua:"магістр",t:"Навчання"},
    {fr:"la thèse",ua:"дисертація",t:"Навчання"},
    {fr:"le stage",ua:"стажування",t:"Навчання"},
    {fr:"la lettre de motivation",ua:"мотиваційний лист",t:"Навчання"},
    {fr:"réussir",ua:"досягти успіху",t:"Навчання"},
    {fr:"la bourse",ua:"стипендія",t:"Навчання"},

    {fr:"le CV",ua:"резюме",t:"Робота"},
    {fr:"l'entretien",ua:"співбесіда",t:"Робота"},
    {fr:"postuler",ua:"подати заявку",t:"Робота"},
    {fr:"embaucher",ua:"наймати",t:"Робота"},
    {fr:"le salaire",ua:"зарплата",t:"Робота"},
    {fr:"le télétravail",ua:"дистанційна робота",t:"Робота"},
    {fr:"le burn-out",ua:"вигорання",t:"Робота"},
    {fr:"la carrière",ua:"кар'єра",t:"Робота"},
    {fr:"démissionner",ua:"звільнитися",t:"Робота"},
  ],
  B2: [
    {fr:"l'enjeu",ua:"виклик",t:"Суспільство"},
    {fr:"la précarité",ua:"нестабільність",t:"Суспільство"},
    {fr:"la solidarité",ua:"солідарність",t:"Суспільство"},
    {fr:"la citoyenneté",ua:"громадянство",t:"Суспільство"},
    {fr:"la démocratie",ua:"демократія",t:"Суспільство"},
    {fr:"le gouvernement",ua:"уряд",t:"Суспільство"},
    {fr:"l'inclusion",ua:"інклюзія",t:"Суспільство"},
    {fr:"la discrimination",ua:"дискримінація",t:"Суспільство"},
    {fr:"l'émancipation",ua:"емансипація",t:"Суспільство"},
    {fr:"l'engagement",ua:"залученість",t:"Суспільство"},

    {fr:"l'empreinte carbone",ua:"вуглецевий слід",t:"Екологія"},
    {fr:"les énergies renouvelables",ua:"відновлювані енергії",t:"Екологія"},
    {fr:"la biodiversité",ua:"біорізноманіття",t:"Екологія"},
    {fr:"le réchauffement climatique",ua:"потепління",t:"Екологія"},
    {fr:"le gaspillage",ua:"марнотратство",t:"Екологія"},
    {fr:"le recyclage",ua:"переробка",t:"Екологія"},
    {fr:"la consommation responsable",ua:"свідоме споживання",t:"Екологія"},
    {fr:"préserver",ua:"зберігати",t:"Екологія"},

    {fr:"la mondialisation",ua:"глобалізація",t:"Економіка"},
    {fr:"l'inflation",ua:"інфляція",t:"Економіка"},
    {fr:"le pouvoir d'achat",ua:"купівельна спроможність",t:"Економіка"},
    {fr:"la croissance",ua:"зростання",t:"Економіка"},
    {fr:"la récession",ua:"рецесія",t:"Економіка"},
    {fr:"l'investissement",ua:"інвестиція",t:"Економіка"},
    {fr:"le marché",ua:"ринок",t:"Економіка"},
    {fr:"la fiscalité",ua:"оподаткування",t:"Економіка"},

    {fr:"l'intrigue",ua:"сюжет",t:"Література"},
    {fr:"le personnage",ua:"персонаж",t:"Література"},
    {fr:"la métaphore",ua:"метафора",t:"Література"},
    {fr:"le récit",ua:"оповідь",t:"Література"},
    {fr:"l'essai",ua:"есе",t:"Література"},
    {fr:"le style",ua:"стиль",t:"Література"},
    {fr:"la nuance",ua:"нюанс",t:"Література"},
    {fr:"l'ambiguïté",ua:"двозначність",t:"Література"},
  ],
};

// --- Useful phrases by situation ---
const PHRASES = {
  "У ресторані": [
    {fr:"Une table pour deux, s'il vous plaît.", ua:"Столик на двох, будь ласка."},
    {fr:"La carte, s'il vous plaît.", ua:"Меню, будь ласка."},
    {fr:"Qu'est-ce que vous recommandez ?", ua:"Що ви рекомендуєте?"},
    {fr:"Je vais prendre le menu du jour.", ua:"Я візьму меню дня."},
    {fr:"Sans oignons, s'il vous plaît.", ua:"Без цибулі, будь ласка."},
    {fr:"L'addition, s'il vous plaît.", ua:"Рахунок, будь ласка."},
    {fr:"C'était délicieux.", ua:"Було смачно."},
    {fr:"Je suis allergique aux noix.", ua:"У мене алергія на горіхи."},
    {fr:"Pourriez-vous apporter de l'eau ?", ua:"Могли б принести воду?"},
    {fr:"Un café noir, s'il vous plaît.", ua:"Чорну каву, будь ласка."},
  ],
  "У місті": [
    {fr:"Où est la station de métro ?", ua:"Де станція метро?"},
    {fr:"Comment aller à la gare ?", ua:"Як дістатися вокзалу?"},
    {fr:"C'est loin d'ici ?", ua:"Це далеко звідси?"},
    {fr:"Tournez à droite.", ua:"Поверніть праворуч."},
    {fr:"Allez tout droit.", ua:"Ідіть прямо."},
    {fr:"Je suis perdu(e).", ua:"Я заблукав(ла)."},
    {fr:"Pouvez-vous m'aider ?", ua:"Ви можете мені допомогти?"},
    {fr:"À quelle heure ouvre le musée ?", ua:"О котрій відкривається музей?"},
  ],
  "У готелі": [
    {fr:"J'ai une réservation.", ua:"У мене бронь."},
    {fr:"Je voudrais une chambre double.", ua:"Я хотів(ла) б двомісну кімнату."},
    {fr:"Avec vue sur la mer, s'il vous plaît.", ua:"З видом на море, будь ласка."},
    {fr:"Le petit déjeuner est inclus ?", ua:"Сніданок входить?"},
    {fr:"À quelle heure faut-il libérer la chambre ?", ua:"О котрій виселення?"},
    {fr:"Le wifi ne marche pas.", ua:"Wi-Fi не працює."},
    {fr:"Pourriez-vous appeler un taxi ?", ua:"Можете викликати таксі?"},
  ],
  "У магазині": [
    {fr:"Combien ça coûte ?", ua:"Скільки це коштує?"},
    {fr:"C'est trop cher.", ua:"Це занадто дорого."},
    {fr:"Avez-vous ça en plus petit ?", ua:"Є менший розмір?"},
    {fr:"Je peux l'essayer ?", ua:"Можу приміряти?"},
    {fr:"Je vais réfléchir.", ua:"Я подумаю."},
    {fr:"Je le prends.", ua:"Я беру це."},
    {fr:"Vous acceptez la carte ?", ua:"Ви приймаєте картки?"},
    {fr:"Je cherche un cadeau.", ua:"Я шукаю подарунок."},
  ],
  "Знайомство": [
    {fr:"Comment tu t'appelles ?", ua:"Як тебе звати?"},
    {fr:"D'où viens-tu ?", ua:"Звідки ти?"},
    {fr:"Je viens d'Ukraine.", ua:"Я з України."},
    {fr:"Qu'est-ce que tu fais dans la vie ?", ua:"Чим ти займаєшся?"},
    {fr:"Je suis étudiant(e).", ua:"Я студент(ка)."},
    {fr:"Tu parles français ?", ua:"Ти говориш французькою?"},
    {fr:"Un peu seulement.", ua:"Лише трохи."},
    {fr:"Ravi(e) de te rencontrer.", ua:"Радий(а) зустрічі."},
  ],
  "Вираження думки": [
    {fr:"Je pense que…", ua:"Я думаю, що…"},
    {fr:"À mon avis…", ua:"На мою думку…"},
    {fr:"Je suis d'accord.", ua:"Я згоден."},
    {fr:"Je ne suis pas d'accord.", ua:"Я не згоден."},
    {fr:"Tu as raison.", ua:"Ти маєш рацію."},
    {fr:"Ça dépend.", ua:"Залежить."},
    {fr:"C'est une bonne idée.", ua:"Це гарна ідея."},
    {fr:"Je n'en suis pas sûr(e).", ua:"Я не впевнений(а)."},
  ],
  "Надзвичайні ситуації": [
    {fr:"Au secours !", ua:"Рятуйте!"},
    {fr:"Appelez la police !", ua:"Викличте поліцію!"},
    {fr:"Appelez un médecin !", ua:"Викличте лікаря!"},
    {fr:"J'ai mal ici.", ua:"У мене болить тут."},
    {fr:"Je me suis perdu(e).", ua:"Я заблукав(ла)."},
    {fr:"J'ai perdu mon passeport.", ua:"Я загубив(ла) паспорт."},
    {fr:"Où est la pharmacie ?", ua:"Де аптека?"},
  ],
};

// --- Dialogues ---
const DIALOGUES = [
  {
    title: "Au café — У кафе",
    level: "A1",
    turns: [
      {who:"Serveur", fr:"Bonjour, qu'est-ce que vous prenez ?", ua:"Доброго дня, що візьмете?"},
      {who:"Client",  fr:"Un café et un croissant, s'il vous plaît.", ua:"Каву і круасан, будь ласка."},
      {who:"Serveur", fr:"Sur place ou à emporter ?", ua:"Тут чи з собою?"},
      {who:"Client",  fr:"Sur place, merci.", ua:"Тут, дякую."},
      {who:"Serveur", fr:"Très bien. Ça fait quatre euros cinquante.", ua:"Добре. З вас 4,50 євро."},
      {who:"Client",  fr:"Voilà. Merci beaucoup.", ua:"Ось. Дуже дякую."},
      {who:"Serveur", fr:"Bonne journée !", ua:"Гарного дня!"},
    ]
  },
  {
    title: "À la boulangerie — У пекарні",
    level: "A1",
    turns: [
      {who:"Boulanger", fr:"Bonjour madame, vous désirez ?", ua:"Доброго дня, що бажаєте?"},
      {who:"Client",    fr:"Une baguette, s'il vous plaît.", ua:"Багет, будь ласка."},
      {who:"Boulanger", fr:"Bien cuite ou pas trop ?", ua:"Добре пропечений чи ні?"},
      {who:"Client",    fr:"Pas trop cuite, merci.", ua:"Не дуже, дякую."},
      {who:"Boulanger", fr:"Et avec ceci ?", ua:"Щось ще?"},
      {who:"Client",    fr:"Deux croissants aussi.", ua:"Два круасани теж."},
      {who:"Boulanger", fr:"Cela fera trois euros vingt.", ua:"Буде 3,20 євро."},
    ]
  },
  {
    title: "Demander son chemin — Запитати дорогу",
    level: "A2",
    turns: [
      {who:"Touriste", fr:"Excusez-moi, je cherche le Louvre.", ua:"Пробачте, шукаю Лувр."},
      {who:"Passant",  fr:"Ah, c'est tout près ! Allez tout droit.", ua:"О, це близько! Ідіть прямо."},
      {who:"Passant",  fr:"Puis tournez à gauche au feu.", ua:"Потім ліворуч на світлофорі."},
      {who:"Touriste", fr:"C'est loin à pied ?", ua:"Далеко йти?"},
      {who:"Passant",  fr:"Non, dix minutes environ.", ua:"Ні, хвилин десять."},
      {who:"Touriste", fr:"Merci beaucoup, vous êtes très aimable.", ua:"Дуже дякую, ви дуже люб'язні."},
      {who:"Passant",  fr:"Je vous en prie. Bonne visite !", ua:"Прошу. Гарного перегляду!"},
    ]
  },
  {
    title: "À l'hôtel — У готелі",
    level: "A2",
    turns: [
      {who:"Réceptionniste", fr:"Bonsoir, bienvenue à l'hôtel.", ua:"Добрий вечір, ласкаво просимо."},
      {who:"Client",         fr:"J'ai une réservation au nom de Petrenko.", ua:"У мене бронь на ім'я Петренко."},
      {who:"Réceptionniste", fr:"Très bien. Deux nuits, chambre double ?", ua:"Добре. Дві ночі, двомісна?"},
      {who:"Client",         fr:"Oui, avec petit déjeuner si possible.", ua:"Так, зі сніданком, якщо можна."},
      {who:"Réceptionniste", fr:"Le petit déjeuner est servi de sept à dix heures.", ua:"Сніданок з 7 до 10."},
      {who:"Client",         fr:"Parfait. Le wifi est gratuit ?", ua:"Чудово. Wi-Fi безкоштовний?"},
      {who:"Réceptionniste", fr:"Oui, voici le mot de passe. Votre clé, chambre 204.", ua:"Так, ось пароль. Ваш ключ, кімната 204."},
    ]
  },
  {
    title: "Chez le médecin — У лікаря",
    level: "B1",
    turns: [
      {who:"Médecin", fr:"Bonjour, qu'est-ce qui vous amène ?", ua:"Доброго дня, що привело?"},
      {who:"Patient", fr:"J'ai mal à la tête depuis trois jours.", ua:"Болить голова вже три дні."},
      {who:"Médecin", fr:"Vous avez de la fièvre ?", ua:"Температура є?"},
      {who:"Patient", fr:"Un peu, surtout le soir.", ua:"Трохи, особливо ввечері."},
      {who:"Médecin", fr:"Je vais vous examiner. Ouvrez la bouche.", ua:"Я огляну вас. Відкрийте рот."},
      {who:"Médecin", fr:"Ce n'est rien de grave. Je vous prescris un médicament.", ua:"Нічого страшного. Випишу ліки."},
      {who:"Patient", fr:"Combien de fois par jour ?", ua:"Скільки разів на день?"},
      {who:"Médecin", fr:"Trois fois, après les repas. Reposez-vous bien.", ua:"Тричі, після їжі. Відпочивайте."},
    ]
  },
  {
    title: "Entretien d'embauche — Співбесіда",
    level: "B1",
    turns: [
      {who:"Recruteur", fr:"Parlez-moi un peu de votre parcours.", ua:"Розкажіть про свій шлях."},
      {who:"Candidat",  fr:"J'ai fait mes études à Kyiv, puis un master à Lyon.", ua:"Навчався у Києві, потім магістр у Ліоні."},
      {who:"Recruteur", fr:"Qu'est-ce qui vous intéresse dans ce poste ?", ua:"Що вас цікавить у цій посаді?"},
      {who:"Candidat",  fr:"La possibilité de travailler en équipe internationale.", ua:"Можливість працювати у міжнародній команді."},
      {who:"Recruteur", fr:"Quelles sont vos qualités principales ?", ua:"Ваші головні якості?"},
      {who:"Candidat",  fr:"Je suis rigoureux et j'apprends vite.", ua:"Я акуратний і швидко навчаюся."},
      {who:"Recruteur", fr:"Avez-vous des questions ?", ua:"Маєте запитання?"},
      {who:"Candidat",  fr:"Oui, quel est le rythme habituel de l'équipe ?", ua:"Так, який звичайний ритм команди?"},
    ]
  },
];

// --- Grammar sheets ---
const GRAMMAR = [
  {
    id:"articles",
    title:"Артиклі — Les articles",
    level:"A1",
    intro:"У французькій є три типи артиклів: означений (le, la, les), неозначений (un, une, des) і частковий (du, de la, des).",
    tables:[
      { head:["Тип","Чол. р.","Жін. р.","Множина"],
        rows:[
          ["Означений","le livre","la table","les amis"],
          ["Неозначений","un livre","une table","des amis"],
          ["Частковий","du pain","de la confiture","des œufs"],
        ]
      }
    ],
    notes:[
      "Перед голосною: le → l' (l'ami, l'eau)",
      "Після заперечення: un/une/des → de (Je n'ai pas de pain)",
    ]
  },
  {
    id:"etre-avoir",
    title:"Être і Avoir — теперішній час",
    level:"A1",
    intro:"Два найважливіші дієслова. Вивчайте напам'ять.",
    tables:[
      { head:["Особа","être (бути)","avoir (мати)"],
        rows:[
          ["je","suis","ai"],
          ["tu","es","as"],
          ["il / elle","est","a"],
          ["nous","sommes","avons"],
          ["vous","êtes","avez"],
          ["ils / elles","sont","ont"],
        ]
      }
    ],
    notes:[
      "J'ai faim — я голодний (дослівно: я маю голод).",
      "Il est étudiant — він студент (без артикля перед професією).",
    ]
  },
  {
    id:"present",
    title:"Présent — дієслова на -er",
    level:"A1",
    intro:"Більшість французьких дієслів — І група (-er). Усі вони відмінюються однаково.",
    tables:[
      { head:["Особа","parler","манер. закінч."],
        rows:[
          ["je","parle","-e"],
          ["tu","parles","-es"],
          ["il/elle","parle","-e"],
          ["nous","parlons","-ons"],
          ["vous","parlez","-ez"],
          ["ils/elles","parlent","-ent"],
        ]
      }
    ],
    notes:[
      "Aimer, travailler, habiter, manger — усі на -er.",
      "Виняток: aller — неправильне (va, vais, vont).",
    ]
  },
  {
    id:"negation",
    title:"Заперечення — Ne … pas",
    level:"A1",
    intro:"Заперечення у французькій складається з двох частин: ne перед дієсловом і pas після.",
    tables:[
      { head:["Форма","Приклад"],
        rows:[
          ["Ствердження","Je parle français."],
          ["Заперечення","Je ne parle pas français."],
          ["Перед голосною","Je n'aime pas le café."],
        ]
      }
    ],
    notes:[
      "Інші форми: ne…jamais (ніколи), ne…rien (нічого), ne…personne (нікого), ne…plus (більше не).",
    ]
  },
  {
    id:"passe-compose",
    title:"Passé composé — минулий час",
    level:"A2",
    intro:"Основний минулий час. Формула: avoir / être + participe passé.",
    tables:[
      { head:["Група","-er","-ir","-re"],
        rows:[
          ["Participe","parlé","fini","vendu"],
        ]
      },
      { head:["З avoir","","","",""],
        rows:[
          ["j'ai parlé","tu as parlé","il a parlé","nous avons parlé","vous avez parlé"],
        ]
      }
    ],
    notes:[
      "Більшість дієслів з avoir.",
      "З être: aller, venir, monter, descendre, naître, mourir, entrer, sortir, partir, retourner, rester, tomber, devenir, revenir, passer.",
      "З être participe узгоджується з підметом: elle est allée, ils sont allés.",
    ]
  },
  {
    id:"imparfait",
    title:"Imparfait — тривала дія в минулому",
    level:"B1",
    intro:"Описує тривалі, звичні чи паралельні дії в минулому.",
    tables:[
      { head:["Особа","Закінчення","parler"],
        rows:[
          ["je","-ais","parlais"],
          ["tu","-ais","parlais"],
          ["il/elle","-ait","parlait"],
          ["nous","-ions","parlions"],
          ["vous","-iez","parliez"],
          ["ils/elles","-aient","parlaient"],
        ]
      }
    ],
    notes:[
      "Основа: 1 ос. мн. теперішнього без -ons (nous parlons → parl-).",
      "Виняток: être → j'étais, tu étais…",
      "Квант, коли, опис → imparfait; раптова дія → passé composé.",
    ]
  },
  {
    id:"futur",
    title:"Futur simple — майбутній час",
    level:"B1",
    intro:"Формуємо від інфінітива + закінчення.",
    tables:[
      { head:["Особа","Закінч.","parler"],
        rows:[
          ["je","-ai","parlerai"],
          ["tu","-as","parleras"],
          ["il/elle","-a","parlera"],
          ["nous","-ons","parlerons"],
          ["vous","-ez","parlerez"],
          ["ils/elles","-ont","parleront"],
        ]
      }
    ],
    notes:[
      "Неправильні: être → serai, avoir → aurai, aller → irai, faire → ferai, venir → viendrai.",
      "Futur proche (простіше): aller + infinitif — Je vais partir.",
    ]
  },
  {
    id:"conditionnel",
    title:"Conditionnel — умовний спосіб",
    level:"B1",
    intro:"Ввічливість, мрія, гіпотеза. Форма: основа futur + закінчення imparfait.",
    tables:[
      { head:["Особа","parler"],
        rows:[
          ["je","parlerais"],
          ["tu","parlerais"],
          ["il/elle","parlerait"],
          ["nous","parlerions"],
          ["vous","parleriez"],
          ["ils/elles","parleraient"],
        ]
      }
    ],
    notes:[
      "Ввічливо: Je voudrais un café.",
      "Мрія: J'aimerais voyager en Asie.",
      "Si + imparfait, conditionnel: Si j'avais du temps, je lirais plus.",
    ]
  },
  {
    id:"subjonctif",
    title:"Subjonctif — умовний",
    level:"B2",
    intro:"Вживається після виразів емоції, необхідності, сумніву, бажання.",
    tables:[
      { head:["Особа","parler"],
        rows:[
          ["que je","parle"],
          ["que tu","parles"],
          ["qu'il/elle","parle"],
          ["que nous","parlions"],
          ["que vous","parliez"],
          ["qu'ils/elles","parlent"],
        ]
      }
    ],
    notes:[
      "Il faut que tu partes.",
      "Je veux que tu viennes.",
      "Bien que ce soit difficile…",
    ]
  },
  {
    id:"pronoms",
    title:"Займенники",
    level:"A2",
    intro:"Особові, COD, COI — основа французької.",
    tables:[
      { head:["Особа","Особ.","COD","COI"],
        rows:[
          ["1 од.","je","me","me"],
          ["2 од.","tu","te","te"],
          ["3 од.","il/elle","le/la","lui"],
          ["1 мн.","nous","nous","nous"],
          ["2 мн.","vous","vous","vous"],
          ["3 мн.","ils/elles","les","leur"],
        ]
      }
    ],
    notes:[
      "Je le vois = Я його бачу.",
      "Je lui parle = Я з ним говорю.",
      "Порядок при двох займенниках: me/te/se/nous/vous → le/la/les → lui/leur → y → en.",
    ]
  },
];

// --- Time/date data ---
const DAYS = [
  {fr:"lundi",ua:"понеділок"},{fr:"mardi",ua:"вівторок"},{fr:"mercredi",ua:"середа"},
  {fr:"jeudi",ua:"четвер"},{fr:"vendredi",ua:"п'ятниця"},{fr:"samedi",ua:"субота"},
  {fr:"dimanche",ua:"неділя"}
];
const MONTHS = [
  {fr:"janvier",ua:"січень"},{fr:"février",ua:"лютий"},{fr:"mars",ua:"березень"},
  {fr:"avril",ua:"квітень"},{fr:"mai",ua:"травень"},{fr:"juin",ua:"червень"},
  {fr:"juillet",ua:"липень"},{fr:"août",ua:"серпень"},{fr:"septembre",ua:"вересень"},
  {fr:"octobre",ua:"жовтень"},{fr:"novembre",ua:"листопад"},{fr:"décembre",ua:"грудень"}
];
const SEASONS = [
  {fr:"le printemps",ua:"весна"},{fr:"l'été",ua:"літо"},
  {fr:"l'automne",ua:"осінь"},{fr:"l'hiver",ua:"зима"}
];
const TIME_EXP = [
  {fr:"Il est une heure.",ua:"Перша година."},
  {fr:"Il est deux heures et quart.",ua:"Друга п'ятнадцять."},
  {fr:"Il est trois heures et demie.",ua:"Пів на четверту."},
  {fr:"Il est quatre heures moins le quart.",ua:"За чверть четверта."},
  {fr:"Il est midi.",ua:"Полудень."},
  {fr:"Il est minuit.",ua:"Опівніч."},
  {fr:"À quelle heure ?",ua:"О котрій годині?"},
  {fr:"Quel jour sommes-nous ?",ua:"Який сьогодні день?"},
  {fr:"Quelle est la date ?",ua:"Яке число?"},
];

// --- Verbs: most important ~30 conjugated ---
function erConj(verb, participe){
  const stem = verb.slice(0,-2);
  return {
    présent:[`je ${stem}e`,`tu ${stem}es`,`il ${stem}e`,`nous ${stem}ons`,`vous ${stem}ez`,`ils ${stem}ent`],
    "passé composé":[`j'ai ${participe||stem+'é'}`,`tu as ${participe||stem+'é'}`,`il a ${participe||stem+'é'}`,`nous avons ${participe||stem+'é'}`,`vous avez ${participe||stem+'é'}`,`ils ont ${participe||stem+'é'}`],
    imparfait:[`je ${stem}ais`,`tu ${stem}ais`,`il ${stem}ait`,`nous ${stem}ions`,`vous ${stem}iez`,`ils ${stem}aient`],
    futur:[`je ${stem}erai`,`tu ${stem}eras`,`il ${stem}era`,`nous ${stem}erons`,`vous ${stem}erez`,`ils ${stem}eront`],
  };
}

const VERBS = [
  {fr:"être",ua:"бути",level:"A1",conj:{
    présent:["je suis","tu es","il est","nous sommes","vous êtes","ils sont"],
    "passé composé":["j'ai été","tu as été","il a été","nous avons été","vous avez été","ils ont été"],
    imparfait:["j'étais","tu étais","il était","nous étions","vous étiez","ils étaient"],
    futur:["je serai","tu seras","il sera","nous serons","vous serez","ils seront"],
  },example:"Je suis étudiant."},
  {fr:"avoir",ua:"мати",level:"A1",conj:{
    présent:["j'ai","tu as","il a","nous avons","vous avez","ils ont"],
    "passé composé":["j'ai eu","tu as eu","il a eu","nous avons eu","vous avez eu","ils ont eu"],
    imparfait:["j'avais","tu avais","il avait","nous avions","vous aviez","ils avaient"],
    futur:["j'aurai","tu auras","il aura","nous aurons","vous aurez","ils auront"],
  },example:"J'ai deux sœurs."},
  {fr:"aller",ua:"йти, їхати",level:"A1",conj:{
    présent:["je vais","tu vas","il va","nous allons","vous allez","ils vont"],
    "passé composé":["je suis allé","tu es allé","il est allé","nous sommes allés","vous êtes allés","ils sont allés"],
    imparfait:["j'allais","tu allais","il allait","nous allions","vous alliez","ils allaient"],
    futur:["j'irai","tu iras","il ira","nous irons","vous irez","ils iront"],
  },example:"Je vais à Paris."},
  {fr:"faire",ua:"робити",level:"A1",conj:{
    présent:["je fais","tu fais","il fait","nous faisons","vous faites","ils font"],
    "passé composé":["j'ai fait","tu as fait","il a fait","nous avons fait","vous avez fait","ils ont fait"],
    imparfait:["je faisais","tu faisais","il faisait","nous faisions","vous faisiez","ils faisaient"],
    futur:["je ferai","tu feras","il fera","nous ferons","vous ferez","ils feront"],
  },example:"Je fais du sport."},
  {fr:"parler",ua:"говорити",level:"A1",conj:erConj("parler","parlé"),example:"Je parle français."},
  {fr:"aimer",ua:"любити",level:"A1",conj:erConj("aimer","aimé"),example:"J'aime le café."},
  {fr:"habiter",ua:"жити",level:"A1",conj:erConj("habiter","habité"),example:"J'habite à Lviv."},
  {fr:"travailler",ua:"працювати",level:"A1",conj:erConj("travailler","travaillé"),example:"Je travaille le lundi."},
  {fr:"manger",ua:"їсти",level:"A1",conj:{
    présent:["je mange","tu manges","il mange","nous mangeons","vous mangez","ils mangent"],
    "passé composé":["j'ai mangé","tu as mangé","il a mangé","nous avons mangé","vous avez mangé","ils ont mangé"],
    imparfait:["je mangeais","tu mangeais","il mangeait","nous mangions","vous mangiez","ils mangeaient"],
    futur:["je mangerai","tu mangeras","il mangera","nous mangerons","vous mangerez","ils mangeront"],
  },example:"Je mange une pomme."},
  {fr:"venir",ua:"приходити",level:"A1",conj:{
    présent:["je viens","tu viens","il vient","nous venons","vous venez","ils viennent"],
    "passé composé":["je suis venu","tu es venu","il est venu","nous sommes venus","vous êtes venus","ils sont venus"],
    imparfait:["je venais","tu venais","il venait","nous venions","vous veniez","ils venaient"],
    futur:["je viendrai","tu viendras","il viendra","nous viendrons","vous viendrez","ils viendront"],
  },example:"Je viens de Kyiv."},
  {fr:"voir",ua:"бачити",level:"A2",conj:{
    présent:["je vois","tu vois","il voit","nous voyons","vous voyez","ils voient"],
    "passé composé":["j'ai vu","tu as vu","il a vu","nous avons vu","vous avez vu","ils ont vu"],
    imparfait:["je voyais","tu voyais","il voyait","nous voyions","vous voyiez","ils voyaient"],
    futur:["je verrai","tu verras","il verra","nous verrons","vous verrez","ils verront"],
  },example:"Je vois la tour Eiffel."},
  {fr:"savoir",ua:"знати",level:"A2",conj:{
    présent:["je sais","tu sais","il sait","nous savons","vous savez","ils savent"],
    "passé composé":["j'ai su","tu as su","il a su","nous avons su","vous avez su","ils ont su"],
    imparfait:["je savais","tu savais","il savait","nous savions","vous saviez","ils savaient"],
    futur:["je saurai","tu sauras","il saura","nous saurons","vous saurez","ils sauront"],
  },example:"Je sais nager."},
  {fr:"pouvoir",ua:"могти",level:"A2",conj:{
    présent:["je peux","tu peux","il peut","nous pouvons","vous pouvez","ils peuvent"],
    "passé composé":["j'ai pu","tu as pu","il a pu","nous avons pu","vous avez pu","ils ont pu"],
    imparfait:["je pouvais","tu pouvais","il pouvait","nous pouvions","vous pouviez","ils pouvaient"],
    futur:["je pourrai","tu pourras","il pourra","nous pourrons","vous pourrez","ils pourront"],
  },example:"Je peux t'aider."},
  {fr:"vouloir",ua:"хотіти",level:"A2",conj:{
    présent:["je veux","tu veux","il veut","nous voulons","vous voulez","ils veulent"],
    "passé composé":["j'ai voulu","tu as voulu","il a voulu","nous avons voulu","vous avez voulu","ils ont voulu"],
    imparfait:["je voulais","tu voulais","il voulait","nous voulions","vous vouliez","ils voulaient"],
    futur:["je voudrai","tu voudras","il voudra","nous voudrons","vous voudrez","ils voudront"],
  },example:"Je veux un café."},
  {fr:"devoir",ua:"мусити",level:"A2",conj:{
    présent:["je dois","tu dois","il doit","nous devons","vous devez","ils doivent"],
    "passé composé":["j'ai dû","tu as dû","il a dû","nous avons dû","vous avez dû","ils ont dû"],
    imparfait:["je devais","tu devais","il devait","nous devions","vous deviez","ils devaient"],
    futur:["je devrai","tu devras","il devra","nous devrons","vous devrez","ils devront"],
  },example:"Je dois partir."},
  {fr:"prendre",ua:"брати",level:"A2",conj:{
    présent:["je prends","tu prends","il prend","nous prenons","vous prenez","ils prennent"],
    "passé composé":["j'ai pris","tu as pris","il a pris","nous avons pris","vous avez pris","ils ont pris"],
    imparfait:["je prenais","tu prenais","il prenait","nous prenions","vous preniez","ils prenaient"],
    futur:["je prendrai","tu prendras","il prendra","nous prendrons","vous prendrez","ils prendront"],
  },example:"Je prends le métro."},
  {fr:"mettre",ua:"класти",level:"A2",conj:{
    présent:["je mets","tu mets","il met","nous mettons","vous mettez","ils mettent"],
    "passé composé":["j'ai mis","tu as mis","il a mis","nous avons mis","vous avez mis","ils ont mis"],
    imparfait:["je mettais","tu mettais","il mettait","nous mettions","vous mettiez","ils mettaient"],
    futur:["je mettrai","tu mettras","il mettra","nous mettrons","vous mettrez","ils mettront"],
  },example:"Je mets la table."},
  {fr:"dire",ua:"казати",level:"A2",conj:{
    présent:["je dis","tu dis","il dit","nous disons","vous dites","ils disent"],
    "passé composé":["j'ai dit","tu as dit","il a dit","nous avons dit","vous avez dit","ils ont dit"],
    imparfait:["je disais","tu disais","il disait","nous disions","vous disiez","ils disaient"],
    futur:["je dirai","tu diras","il dira","nous dirons","vous direz","ils diront"],
  },example:"Je dis la vérité."},
  {fr:"finir",ua:"закінчувати",level:"A2",conj:{
    présent:["je finis","tu finis","il finit","nous finissons","vous finissez","ils finissent"],
    "passé composé":["j'ai fini","tu as fini","il a fini","nous avons fini","vous avez fini","ils ont fini"],
    imparfait:["je finissais","tu finissais","il finissait","nous finissions","vous finissiez","ils finissaient"],
    futur:["je finirai","tu finiras","il finira","nous finirons","vous finirez","ils finiront"],
  },example:"Je finis mon travail."},
  {fr:"choisir",ua:"вибирати",level:"A2",conj:{
    présent:["je choisis","tu choisis","il choisit","nous choisissons","vous choisissez","ils choisissent"],
    "passé composé":["j'ai choisi","tu as choisi","il a choisi","nous avons choisi","vous avez choisi","ils ont choisi"],
    imparfait:["je choisissais","tu choisissais","il choisissait","nous choisissions","vous choisissiez","ils choisissaient"],
    futur:["je choisirai","tu choisiras","il choisira","nous choisirons","vous choisirez","ils choisiront"],
  },example:"Je choisis ce livre."},
  {fr:"lire",ua:"читати",level:"B1",conj:{
    présent:["je lis","tu lis","il lit","nous lisons","vous lisez","ils lisent"],
    "passé composé":["j'ai lu","tu as lu","il a lu","nous avons lu","vous avez lu","ils ont lu"],
    imparfait:["je lisais","tu lisais","il lisait","nous lisions","vous lisiez","ils lisaient"],
    futur:["je lirai","tu liras","il lira","nous lirons","vous lirez","ils liront"],
  },example:"Je lis un roman."},
  {fr:"écrire",ua:"писати",level:"B1",conj:{
    présent:["j'écris","tu écris","il écrit","nous écrivons","vous écrivez","ils écrivent"],
    "passé composé":["j'ai écrit","tu as écrit","il a écrit","nous avons écrit","vous avez écrit","ils ont écrit"],
    imparfait:["j'écrivais","tu écrivais","il écrivait","nous écrivions","vous écriviez","ils écrivaient"],
    futur:["j'écrirai","tu écriras","il écrira","nous écrirons","vous écrirez","ils écriront"],
  },example:"J'écris une lettre."},
  {fr:"connaître",ua:"знати (когось)",level:"B1",conj:{
    présent:["je connais","tu connais","il connaît","nous connaissons","vous connaissez","ils connaissent"],
    "passé composé":["j'ai connu","tu as connu","il a connu","nous avons connu","vous avez connu","ils ont connu"],
    imparfait:["je connaissais","tu connaissais","il connaissait","nous connaissions","vous connaissiez","ils connaissaient"],
    futur:["je connaîtrai","tu connaîtras","il connaîtra","nous connaîtrons","vous connaîtrez","ils connaîtront"],
  },example:"Je connais Paris."},
  {fr:"partir",ua:"їхати, виїжджати",level:"A2",conj:{
    présent:["je pars","tu pars","il part","nous partons","vous partez","ils partent"],
    "passé composé":["je suis parti","tu es parti","il est parti","nous sommes partis","vous êtes partis","ils sont partis"],
    imparfait:["je partais","tu partais","il partait","nous partions","vous partiez","ils partaient"],
    futur:["je partirai","tu partiras","il partira","nous partirons","vous partirez","ils partiront"],
  },example:"Je pars demain."},
  {fr:"dormir",ua:"спати",level:"A2",conj:{
    présent:["je dors","tu dors","il dort","nous dormons","vous dormez","ils dorment"],
    "passé composé":["j'ai dormi","tu as dormi","il a dormi","nous avons dormi","vous avez dormi","ils ont dormi"],
    imparfait:["je dormais","tu dormais","il dormait","nous dormions","vous dormiez","ils dormaient"],
    futur:["je dormirai","tu dormiras","il dormira","nous dormirons","vous dormirez","ils dormiront"],
  },example:"Je dors huit heures."},
];

// ===== EXTRA CONTENT — appended =====

// Extra vocabulary
VOCAB.A1.push(
  {fr:"aujourd'hui",ua:"сьогодні",t:"Час"},{fr:"hier",ua:"вчора",t:"Час"},{fr:"demain",ua:"завтра",t:"Час"},
  {fr:"maintenant",ua:"зараз",t:"Час"},{fr:"tôt",ua:"рано",t:"Час"},{fr:"tard",ua:"пізно",t:"Час"},
  {fr:"souvent",ua:"часто",t:"Час"},{fr:"toujours",ua:"завжди",t:"Час"},{fr:"jamais",ua:"ніколи",t:"Час"},
  {fr:"ici",ua:"тут",t:"Місце"},{fr:"là-bas",ua:"там",t:"Місце"},{fr:"à droite",ua:"праворуч",t:"Місце"},
  {fr:"à gauche",ua:"ліворуч",t:"Місце"},{fr:"en face",ua:"навпроти",t:"Місце"},
  {fr:"devant",ua:"перед",t:"Місце"},{fr:"derrière",ua:"за",t:"Місце"},{fr:"entre",ua:"між",t:"Місце"},
  {fr:"sur",ua:"на",t:"Місце"},{fr:"sous",ua:"під",t:"Місце"},{fr:"dans",ua:"у",t:"Місце"},
);
VOCAB.A2.push(
  {fr:"le boulanger",ua:"пекар",t:"Професії"},{fr:"le médecin",ua:"лікар",t:"Професії"},
  {fr:"le professeur",ua:"викладач",t:"Професії"},{fr:"l'ingénieur",ua:"інженер",t:"Професії"},
  {fr:"l'architecte",ua:"архітектор",t:"Професії"},{fr:"l'avocat",ua:"адвокат",t:"Професії"},
  {fr:"le journaliste",ua:"журналіст",t:"Професії"},{fr:"le cuisinier",ua:"кухар",t:"Професії"},
  {fr:"le pompier",ua:"пожежник",t:"Професії"},{fr:"le musicien",ua:"музикант",t:"Професії"},
  {fr:"le peintre",ua:"художник",t:"Професії"},{fr:"le vendeur",ua:"продавець",t:"Професії"},
  {fr:"la fièvre",ua:"температура",t:"Здоров'я"},{fr:"la toux",ua:"кашель",t:"Здоров'я"},
  {fr:"le rhume",ua:"нежить",t:"Здоров'я"},{fr:"le mal de tête",ua:"головний біль",t:"Здоров'я"},
  {fr:"le médicament",ua:"ліки",t:"Здоров'я"},{fr:"l'ordonnance",ua:"рецепт",t:"Здоров'я"},
  {fr:"la pharmacie",ua:"аптека",t:"Здоров'я"},{fr:"l'hôpital",ua:"лікарня",t:"Здоров'я"},
  {fr:"tousser",ua:"кашляти",t:"Здоров'я"},{fr:"guérir",ua:"одужати",t:"Здоров'я"},
  {fr:"la santé",ua:"здоров'я",t:"Здоров'я"},{fr:"se reposer",ua:"відпочивати",t:"Здоров'я"},
);
VOCAB.B1.push(
  {fr:"la rédaction",ua:"редакція, твір",t:"Медіа"},{fr:"la presse",ua:"преса",t:"Медіа"},
  {fr:"le journaliste",ua:"журналіст",t:"Медіа"},{fr:"l'article",ua:"стаття",t:"Медіа"},
  {fr:"l'interview",ua:"інтерв'ю",t:"Медіа"},{fr:"le reportage",ua:"репортаж",t:"Медіа"},
  {fr:"les actualités",ua:"новини",t:"Медіа"},{fr:"diffuser",ua:"транслювати",t:"Медіа"},
  {fr:"censurer",ua:"цензурувати",t:"Медіа"},{fr:"la désinformation",ua:"дезінформація",t:"Медіа"},
  {fr:"la rumeur",ua:"чутка",t:"Медіа"},{fr:"le témoignage",ua:"свідчення",t:"Медіа"},
  {fr:"la conviction",ua:"переконання",t:"Погляди"},{fr:"le préjugé",ua:"упередження",t:"Погляди"},
  {fr:"la tolérance",ua:"толерантність",t:"Погляди"},{fr:"l'intolérance",ua:"нетерпимість",t:"Погляди"},
  {fr:"critiquer",ua:"критикувати",t:"Погляди"},{fr:"débattre",ua:"обговорювати",t:"Погляди"},
  {fr:"convaincre",ua:"переконати",t:"Погляди"},{fr:"douter",ua:"сумніватися",t:"Погляди"},
  {fr:"affirmer",ua:"стверджувати",t:"Погляди"},{fr:"nier",ua:"заперечувати",t:"Погляди"},
  {fr:"la méfiance",ua:"недовіра",t:"Погляди"},{fr:"la confiance",ua:"довіра",t:"Погляди"},
);
VOCAB.B2.push(
  {fr:"la résilience",ua:"стійкість",t:"Психологія"},{fr:"l'anxiété",ua:"тривога",t:"Психологія"},
  {fr:"la dépression",ua:"депресія",t:"Психологія"},{fr:"le burn-out",ua:"вигорання",t:"Психологія"},
  {fr:"la méditation",ua:"медитація",t:"Психологія"},{fr:"l'introspection",ua:"самоаналіз",t:"Психологія"},
  {fr:"l'épanouissement",ua:"розквіт",t:"Психологія"},{fr:"le bien-être",ua:"добробут",t:"Психологія"},
  {fr:"l'estime de soi",ua:"самооцінка",t:"Психологія"},{fr:"surmonter",ua:"долати",t:"Психологія"},
  {fr:"la géopolitique",ua:"геополітика",t:"Політика"},{fr:"le conflit",ua:"конфлікт",t:"Політика"},
  {fr:"les négociations",ua:"перемовини",t:"Політика"},{fr:"l'accord",ua:"угода",t:"Політика"},
  {fr:"la souveraineté",ua:"суверенітет",t:"Політика"},{fr:"la diplomatie",ua:"дипломатія",t:"Політика"},
  {fr:"l'alliance",ua:"союз",t:"Політика"},{fr:"la sanction",ua:"санкція",t:"Політика"},
  {fr:"le traité",ua:"договір",t:"Політика"},{fr:"l'ingérence",ua:"втручання",t:"Політика"},
  {fr:"la réforme",ua:"реформа",t:"Політика"},{fr:"le scrutin",ua:"голосування",t:"Політика"},
);

// Extra phrases
PHRASES["У транспорті"] = [
  {fr:"Un billet pour Lyon, s'il vous plaît.",ua:"Один квиток до Ліона, будь ласка."},
  {fr:"Aller-retour ou aller simple ?",ua:"Туди-назад чи в один бік?"},
  {fr:"Aller-retour, s'il vous plaît.",ua:"Туди-назад, будь ласка."},
  {fr:"À quelle heure part le prochain train ?",ua:"О котрій наступний потяг?"},
  {fr:"Le train a combien de minutes de retard ?",ua:"На скільки запізнюється потяг?"},
  {fr:"De quel quai part le train ?",ua:"З якої платформи?"},
  {fr:"Cette place est libre ?",ua:"Це місце вільне?"},
  {fr:"Pouvez-vous m'appeler un taxi ?",ua:"Викличте мені таксі."},
];
PHRASES["На роботі"] = [
  {fr:"Je travaille dans une entreprise informatique.",ua:"Я працюю в ІТ-компанії."},
  {fr:"J'ai une réunion à dix heures.",ua:"У мене зустріч о 10."},
  {fr:"Pouvez-vous m'envoyer le document ?",ua:"Можете надіслати документ?"},
  {fr:"Je m'occupe de ce dossier.",ua:"Я займаюся цією справою."},
  {fr:"On se recale demain ?",ua:"Перенесемо на завтра?"},
  {fr:"Je suis en télétravail aujourd'hui.",ua:"Я сьогодні на дистанційці."},
  {fr:"C'est urgent.",ua:"Це терміново."},
  {fr:"Je te tiens au courant.",ua:"Я тримаю тебе в курсі."},
];
PHRASES["Погода"] = [
  {fr:"Quel temps fait-il ?",ua:"Яка погода?"},
  {fr:"Il fait beau.",ua:"Гарна погода."},
  {fr:"Il fait mauvais.",ua:"Погана погода."},
  {fr:"Il pleut.",ua:"Йде дощ."},
  {fr:"Il neige.",ua:"Йде сніг."},
  {fr:"Il fait chaud.",ua:"Тепло."},
  {fr:"Il fait froid.",ua:"Холодно."},
  {fr:"Il y a du vent.",ua:"Вітряно."},
  {fr:"Il y a du brouillard.",ua:"Туман."},
];
PHRASES["Час і розклад"] = [
  {fr:"À quelle heure on se voit ?",ua:"О котрій зустрінемось?"},
  {fr:"Disons à dix-neuf heures.",ua:"Скажімо, о 19:00."},
  {fr:"Je serai en retard.",ua:"Я запізнюся."},
  {fr:"J'arrive dans cinq minutes.",ua:"Буду за 5 хвилин."},
  {fr:"On peut reporter ?",ua:"Можна перенести?"},
  {fr:"Ça te va ?",ua:"Тобі підходить?"},
  {fr:"C'est parfait pour moi.",ua:"Мені ідеально."},
];

// Extra dialogues
DIALOGUES.push(
  {title:"À la pharmacie — В аптеці", level:"A2", turns:[
    {who:"Pharmacien", fr:"Bonjour, je peux vous aider ?", ua:"Доброго дня, чим допомогти?"},
    {who:"Client",     fr:"J'ai mal à la gorge depuis deux jours.", ua:"Два дні болить горло."},
    {who:"Pharmacien", fr:"Avez-vous de la fièvre ?", ua:"Є температура?"},
    {who:"Client",     fr:"Un peu, trente-sept huit.", ua:"Трохи, 37,8."},
    {who:"Pharmacien", fr:"Je vous conseille ces pastilles et ce sirop.", ua:"Раджу ці пастилки і сироп."},
    {who:"Client",     fr:"Ça coûte combien ?", ua:"Скільки коштує?"},
    {who:"Pharmacien", fr:"Douze euros quatre-vingts. Si ça empire, consultez un médecin.", ua:"12,80 €. Якщо погіршиться — до лікаря."},
  ]},
  {title:"À la gare — На вокзалі", level:"A2", turns:[
    {who:"Voyageur",    fr:"Bonjour, un aller-retour pour Bordeaux, s'il vous plaît.", ua:"Туди-назад до Бордо, будь ласка."},
    {who:"Guichetier",  fr:"Pour quelle date ?", ua:"На яку дату?"},
    {who:"Voyageur",    fr:"Demain matin, si possible.", ua:"Завтра вранці."},
    {who:"Guichetier",  fr:"Il y a un TGV à sept heures vingt.", ua:"Є TGV о 7:20."},
    {who:"Voyageur",    fr:"Parfait. Il arrive à quelle heure ?", ua:"Коли прибуває?"},
    {who:"Guichetier",  fr:"À dix heures cinquante. Ça fera quatre-vingt-neuf euros.", ua:"О 10:50. З вас 89 €."},
    {who:"Voyageur",    fr:"Voici ma carte.", ua:"Ось моя картка."},
  ]},
  {title:"Au marché — На ринку", level:"A1", turns:[
    {who:"Vendeur", fr:"Bonjour, qu'est-ce qu'il vous faut ?", ua:"Доброго дня, що треба?"},
    {who:"Client",  fr:"Un kilo de tomates et une salade.", ua:"Кіло помідорів і один салат."},
    {who:"Vendeur", fr:"Voilà. Avec ceci ?", ua:"Ось. Щось ще?"},
    {who:"Client",  fr:"Deux cents grammes de fromage, s'il vous plaît.", ua:"200 г сиру, будь ласка."},
    {who:"Vendeur", fr:"Ça fera huit euros cinquante.", ua:"8,50 €."},
    {who:"Client",  fr:"Merci, bonne journée !", ua:"Дякую, гарного дня!"},
  ]},
  {title:"Location d'appartement — Оренда квартири", level:"B1", turns:[
    {who:"Propriétaire", fr:"L'appartement fait quarante-cinq mètres carrés.", ua:"Квартира — 45 м²."},
    {who:"Locataire",    fr:"Le loyer est de combien, charges comprises ?", ua:"Скільки оренда з комуналкою?"},
    {who:"Propriétaire", fr:"Sept cent cinquante euros par mois.", ua:"750 € на місяць."},
    {who:"Locataire",    fr:"Il faut une caution ?", ua:"Потрібна застава?"},
    {who:"Propriétaire", fr:"Oui, deux mois de loyer.", ua:"Так, два місяці оренди."},
    {who:"Locataire",    fr:"Quand puis-je emménager ?", ua:"Коли можна заселитися?"},
    {who:"Propriétaire", fr:"Dès le premier du mois prochain.", ua:"З першого числа наступного місяця."},
  ]},
);

// Flat list of ALL words with level
function allWords(){
  const a=[];
  for(const lvl of ['A1','A2','B1','B2']){
    for(const w of (VOCAB[lvl]||[])) a.push({...w, level:lvl});
  }
  return a;
}
