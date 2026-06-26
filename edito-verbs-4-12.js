/* ============================================================
   Édito B1 — Verbs from Units 4–12 (full B1 tenses, trilingual)
   Flatten of raw words/expr/grammar (Units 4–12) happens here too.
============================================================ */

/* ---- flatten Units 4–12 raw content into the card arrays ---- */
[ (typeof EDITO_RAW2!=='undefined'?EDITO_RAW2:[]),
  (typeof EDITO_RAW3!=='undefined'?EDITO_RAW3:[]),
  (typeof EDITO_RAW4!=='undefined'?EDITO_RAW4:[]) ].forEach(arr=>arr.forEach(u=>{
  (u.words||[]).forEach(w=>EDITO_WORDS.push(Object.assign({unit:u.unit},w)));
  (u.expressions||[]).forEach(e=>EDITO_EXPR.push(Object.assign({unit:u.unit},e)));
  (u.grammar||[]).forEach(g=>EDITO_GRAMMAR.push(Object.assign({unit:u.unit},g)));
}));

/* ---- verbs ---- */
EDITO_VERBS.push(
// U4
{unit:4,fr:"déménager",ua:"переїжджати",en:"to move (house)",de:"umziehen",example:"Ils déménagent à Lyon.",conj:erVerb("déménager")},
{unit:4,fr:"progresser",ua:"прогресувати",en:"to progress",de:"Fortschritte machen",example:"Tu progresses vite en français.",conj:erVerb("progresser")},
{unit:4,fr:"déguster",ua:"смакувати, дегустувати",en:"to savour, taste",de:"genießen, verkosten",example:"Nous dégustons un bon plat.",conj:erVerb("déguster")},
{unit:4,fr:"consommer",ua:"споживати",en:"to consume",de:"konsumieren",example:"On consomme moins de viande.",conj:erVerb("consommer")},
{unit:4,fr:"promouvoir",ua:"просувати",en:"to promote",de:"fördern",example:"L'OIF promeut la langue française.",
 conj:irrVerb("promouvoir",{aux:"avoir",pp:"promu",futStem:"promouvr",
   pres:["je promeus","tu promeus","il promeut","nous promouvons","vous promouvez","ils promeuvent"]})},
{unit:4,fr:"s'expatrier",ua:"емігрувати",en:"to move abroad",de:"auswandern",example:"Elle s'expatrie au Canada.",conj:erVerb("expatrier")},
// U5
{unit:5,fr:"intervenir",ua:"втручатися, прибувати",en:"to intervene",de:"eingreifen",example:"La police est intervenue rapidement.",
 conj:irrVerb("intervenir",{aux:"être",pp:"intervenu",futStem:"interviendr",agree:true,
   pres:["j'interviens","tu interviens","il intervient","nous intervenons","vous intervenez","ils interviennent"]})},
{unit:5,fr:"alerter",ua:"сповіщати, попереджати",en:"to alert",de:"alarmieren",example:"Un témoin a alerté les secours.",conj:erVerb("alerter")},
{unit:5,fr:"endommager",ua:"пошкоджувати",en:"to damage",de:"beschädigen",example:"La tempête a endommagé le toit.",conj:erVerb("endommager")},
{unit:5,fr:"verbaliser",ua:"штрафувати",en:"to fine",de:"ein Bußgeld verhängen",example:"L'agent verbalise les voitures mal garées.",conj:erVerb("verbaliser")},
{unit:5,fr:"construire",ua:"будувати",en:"to build",de:"bauen",example:"On construit un nouveau quartier.",
 conj:irrVerb("construire",{aux:"avoir",pp:"construit",futStem:"construir",
   pres:["je construis","tu construis","il construit","nous construisons","vous construisez","ils construisent"]})},
// U6
{unit:6,fr:"parcourir",ua:"долати, проїздити",en:"to travel, cover",de:"zurücklegen",example:"Nous avons parcouru 500 km.",
 conj:irrVerb("parcourir",{aux:"avoir",pp:"parcouru",futStem:"parcourr",
   pres:["je parcours","tu parcours","il parcourt","nous parcourons","vous parcourez","ils parcourent"]})},
{unit:6,fr:"découvrir",ua:"відкривати",en:"to discover",de:"entdecken",example:"Ils découvrent de nouveaux paysages.",
 conj:irrVerb("découvrir",{aux:"avoir",pp:"découvert",futStem:"découvrir",
   pres:["je découvre","tu découvres","il découvre","nous découvrons","vous découvrez","ils découvrent"],
   imp:["découvre","découvrons","découvrez"]})},
{unit:6,fr:"flâner",ua:"прогулюватися, тинятися",en:"to stroll",de:"schlendern",example:"J'aime flâner dans les ruelles.",conj:erVerb("flâner")},
{unit:6,fr:"contempler",ua:"споглядати",en:"to contemplate",de:"betrachten",example:"Ils contemplent le coucher de soleil.",conj:erVerb("contempler")},
{unit:6,fr:"préserver",ua:"зберігати, охороняти",en:"to preserve",de:"schützen, bewahren",example:"Préservons ces sites naturels.",conj:erVerb("préserver")},
{unit:6,fr:"planifier",ua:"планувати",en:"to plan",de:"planen",example:"Je planifie mon voyage à l'avance.",conj:erVerb("planifier")},
{unit:6,fr:"venir",ua:"приходити, приїжджати",en:"to come",de:"kommen",example:"Je viens de Kyiv.",
 conj:irrVerb("venir",{aux:"être",pp:"venu",futStem:"viendr",agree:true,
   pres:["je viens","tu viens","il vient","nous venons","vous venez","ils viennent"]})},
// U7
{unit:7,fr:"acquérir",ua:"набувати, здобувати",en:"to acquire",de:"erwerben",example:"On acquiert de l'expérience.",
 conj:irrVerb("acquérir",{aux:"avoir",pp:"acquis",futStem:"acquerr",
   pres:["j'acquiers","tu acquiers","il acquiert","nous acquérons","vous acquérez","ils acquièrent"]})},
{unit:7,fr:"écrire",ua:"писати",en:"to write",de:"schreiben",example:"J'écris une lettre de motivation.",
 conj:irrVerb("écrire",{aux:"avoir",pp:"écrit",futStem:"écrir",
   pres:["j'écris","tu écris","il écrit","nous écrivons","vous écrivez","ils écrivent"]})},
{unit:7,fr:"suivre",ua:"слідувати; відвідувати (курс)",en:"to follow",de:"folgen; besuchen",example:"Je suis une formation en ligne.",
 conj:irrVerb("suivre",{aux:"avoir",pp:"suivi",futStem:"suivr",
   pres:["je suis","tu suis","il suit","nous suivons","vous suivez","ils suivent"]})},
{unit:7,fr:"poursuivre",ua:"продовжувати",en:"to pursue, continue",de:"fortsetzen",example:"Elle poursuit ses études.",
 conj:irrVerb("poursuivre",{aux:"avoir",pp:"poursuivi",futStem:"poursuivr",
   pres:["je poursuis","tu poursuis","il poursuit","nous poursuivons","vous poursuivez","ils poursuivent"]})},
{unit:7,fr:"réussir",ua:"досягати успіху, складати",en:"to succeed, pass",de:"gelingen, bestehen",example:"Il réussit son concours.",conj:irVerb("réussir")},
{unit:7,fr:"choisir",ua:"вибирати",en:"to choose",de:"wählen",example:"Je choisis une filière.",conj:irVerb("choisir")},
{unit:7,fr:"mémoriser",ua:"запам'ятовувати",en:"to memorize",de:"sich einprägen",example:"On mémorise mieux en répétant.",conj:erVerb("mémoriser")},
{unit:7,fr:"candidater",ua:"подавати заявку",en:"to apply",de:"sich bewerben",example:"Je candidate à ce master.",conj:erVerb("candidater")},
// U8
{unit:8,fr:"dépenser",ua:"витрачати",en:"to spend",de:"ausgeben",example:"Il dépense trop d'argent.",conj:erVerb("dépenser")},
{unit:8,fr:"noter",ua:"оцінювати, занотовувати",en:"to rate, note",de:"bewerten, notieren",example:"Les clients notent le vendeur.",conj:erVerb("noter")},
{unit:8,fr:"émettre",ua:"випускати, виділяти",en:"to emit",de:"ausstoßen",example:"Le numérique émet du CO2.",
 conj:irrVerb("émettre",{aux:"avoir",pp:"émis",futStem:"émettr",
   pres:["j'émets","tu émets","il émet","nous émettons","vous émettez","ils émettent"]})},
{unit:8,fr:"réduire",ua:"зменшувати",en:"to reduce",de:"verringern",example:"Réduisons notre impact.",
 conj:irrVerb("réduire",{aux:"avoir",pp:"réduit",futStem:"réduir",
   pres:["je réduis","tu réduis","il réduit","nous réduisons","vous réduisez","ils réduisent"]})},
{unit:8,fr:"revendre",ua:"перепродавати",en:"to resell",de:"weiterverkaufen",example:"Il revend ses vieux objets.",conj:reVerb("revendre")},
{unit:8,fr:"prolonger",ua:"продовжувати (термін)",en:"to extend, prolong",de:"verlängern",example:"On prolonge la durée de vie des objets.",conj:erVerb("prolonger")},
{unit:8,fr:"nettoyer",ua:"чистити, прибирати",en:"to clean",de:"reinigen",example:"Je nettoie mes données numériques.",
 conj:irrVerb("nettoyer",{aux:"avoir",pp:"nettoyé",futStem:"nettoier",
   pres:["je nettoie","tu nettoies","il nettoie","nous nettoyons","vous nettoyez","ils nettoient"]})},
// U9
{unit:9,fr:"exercer",ua:"займатися, виконувати",en:"to practise (a job)",de:"ausüben",example:"Elle exerce un métier de rêve.",conj:erVerb("exercer")},
{unit:9,fr:"envoyer",ua:"надсилати",en:"to send",de:"schicken",example:"J'envoie mon CV.",
 conj:irrVerb("envoyer",{aux:"avoir",pp:"envoyé",futStem:"enverr",
   pres:["j'envoie","tu envoies","il envoie","nous envoyons","vous envoyez","ils envoient"]})},
{unit:9,fr:"embaucher",ua:"наймати",en:"to hire",de:"einstellen",example:"L'entreprise embauche des jeunes.",conj:erVerb("embaucher")},
{unit:9,fr:"générer",ua:"породжувати, генерувати",en:"to generate",de:"erzeugen",example:"Le travail génère du stress.",
 conj:erVerb("générer",{
   pres:["je génère","tu génères","il génère","nous générons","vous générez","ils génèrent"]})},
{unit:9,fr:"se déconnecter",ua:"відключатися",en:"to disconnect",de:"sich abschalten",example:"Le soir, je me déconnecte.",conj:erVerb("déconnecter")},
{unit:9,fr:"soutenir",ua:"підтримувати",en:"to support",de:"unterstützen",example:"Ils soutiennent leurs collègues.",
 conj:irrVerb("soutenir",{aux:"avoir",pp:"soutenu",futStem:"soutiendr",
   pres:["je soutiens","tu soutiens","il soutient","nous soutenons","vous soutenez","ils soutiennent"]})},
// U10
{unit:10,fr:"s'entraîner",ua:"тренуватися",en:"to train",de:"trainieren",example:"Les athlètes s'entraînent chaque jour.",conj:erVerb("entraîner")},
{unit:10,fr:"améliorer",ua:"покращувати",en:"to improve",de:"verbessern",example:"Il améliore ses performances.",conj:erVerb("améliorer")},
{unit:10,fr:"développer",ua:"розвивати",en:"to develop",de:"entwickeln",example:"On développe de nouvelles technologies.",conj:erVerb("développer")},
{unit:10,fr:"financer",ua:"фінансувати",en:"to fund",de:"finanzieren",example:"Les mécènes financent le projet.",conj:erVerb("financer")},
{unit:10,fr:"innover",ua:"впроваджувати нове",en:"to innovate",de:"innovieren",example:"Cette entreprise innove sans cesse.",conj:erVerb("innover")},
{unit:10,fr:"transformer",ua:"перетворювати",en:"to transform",de:"verwandeln",example:"Le numérique transforme nos loisirs.",conj:erVerb("transformer")},
{unit:10,fr:"évoluer",ua:"розвиватися, змінюватися",en:"to evolve",de:"sich entwickeln",example:"Les usages évoluent vite.",conj:erVerb("évoluer")},
// U11
{unit:11,fr:"cacher",ua:"приховувати",en:"to hide",de:"verstecken",example:"Un filtre cache les défauts.",conj:erVerb("cacher")},
{unit:11,fr:"s'exprimer",ua:"виражати себе",en:"to express oneself",de:"sich ausdrücken",example:"L'artiste s'exprime par la photo.",conj:erVerb("exprimer")},
{unit:11,fr:"expérimenter",ua:"експериментувати",en:"to experiment",de:"experimentieren",example:"Elle expérimente de nouvelles techniques.",conj:erVerb("expérimenter")},
{unit:11,fr:"encourager",ua:"заохочувати",en:"to encourage",de:"ermutigen",example:"Il encourage les jeunes artistes.",conj:erVerb("encourager")},
{unit:11,fr:"recommander",ua:"рекомендувати",en:"to recommend",de:"empfehlen",example:"Je te recommande ce livre.",conj:erVerb("recommander")},
{unit:11,fr:"surmonter",ua:"долати, переборювати",en:"to overcome",de:"überwinden",example:"Elle surmonte ses complexes.",conj:erVerb("surmonter")},
// U12
{unit:12,fr:"agir",ua:"діяти",en:"to act",de:"handeln",example:"Les bénévoles agissent ensemble.",conj:irVerb("agir")},
{unit:12,fr:"accueillir",ua:"приймати, зустрічати",en:"to welcome",de:"aufnehmen",example:"L'association accueille les réfugiés.",
 conj:irrVerb("accueillir",{aux:"avoir",pp:"accueilli",futStem:"accueiller",
   pres:["j'accueille","tu accueilles","il accueille","nous accueillons","vous accueillez","ils accueillent"],
   imp:["accueille","accueillons","accueillez"]})},
{unit:12,fr:"défendre",ua:"захищати, відстоювати",en:"to defend",de:"verteidigen",example:"Ils défendent une cause juste.",conj:reVerb("défendre")},
{unit:12,fr:"accompagner",ua:"супроводжувати",en:"to accompany, support",de:"begleiten",example:"On accompagne les personnes isolées.",conj:erVerb("accompagner")},
{unit:12,fr:"motiver",ua:"мотивувати",en:"to motivate",de:"motivieren",example:"Le coach motive son équipe.",conj:erVerb("motiver")},
{unit:12,fr:"oser",ua:"наважуватися",en:"to dare",de:"wagen",example:"Ose prendre ta place !",conj:erVerb("oser")},
{unit:12,fr:"contribuer",ua:"робити внесок",en:"to contribute",de:"beitragen",example:"Chacun contribue à la vie sociale.",conj:erVerb("contribuer")},
{unit:12,fr:"souffrir",ua:"страждати",en:"to suffer",de:"leiden",example:"Il a souffert de discrimination.",
 conj:irrVerb("souffrir",{aux:"avoir",pp:"souffert",futStem:"souffrir",
   pres:["je souffre","tu souffres","il souffre","nous souffrons","vous souffrez","ils souffrent"],
   imp:["souffre","souffrons","souffrez"]})},
);
