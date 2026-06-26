/* ============================================================
   Édito B1 (3e édition) — content extracted from the
   Livre de l'élève (Manuel) + Cahier d'activités.
   Trilingual: Українська · English · Deutsch + IPA.

   Four decks:
     EDITO_WORDS    — vocabulary cards (fr+ipa  /  ua·en·de)
     EDITO_EXPR     — expressions, idioms, interjections
     EDITO_GRAMMAR  — grammar by topic, per unit
     EDITO_VERBS    — verbs in all B1 tenses, trilingual
============================================================ */

/* Unit titles (Édito B1, 3e éd.) */
const EDITO_UNITS = {
  1:  "Les uns et les autres",
  2:  "Vivre ensemble sur la Terre",
  3:  "Cultivons les arts",
  4:  "La francophonie jusque dans l'assiette",
  5:  "Mondes urbains",
  6:  "En route !",
  7:  "Apprendre… encore et toujours !",
  8:  "Mieux consommer !",
  9:  "Mieux-être au travail",
  10: "Du neuf dans les loisirs",
  11: "(Se) mettre en scène",
  12: "Être citoyen(ne)",
};

/* The full B1 tense set we present on each verb card */
const EDITO_TENSES = [
  "présent",
  "passé composé",
  "imparfait",
  "plus-que-parfait",
  "futur simple",
  "futur proche",
  "conditionnel présent",
  "subjonctif présent",
  "impératif",
];

/* ------------------------------------------------------------
   Conjugation engine.
   Feed it the forms that are genuinely irregular (présent,
   participle, auxiliary, futur stem) and it derives the rest
   with standard rules. Any tense can be overridden explicitly.
------------------------------------------------------------ */
const SUBJ = (s)=>[s,s,s,s,s,s]; // helper placeholder
function vowelStart(w){ return /^[aeiouéèêhâîyA]/.test(w); }
function je(form){ return (vowelStart(form)?"j'":"je ")+form; }

function conjugate(o){
  // o: {pres:[6], pp, aux:'avoir'|'être', futStem, subj?:[6], imp?:[3],
  //     impf?:[6], pronominal?:bool, agree?:bool}
  const aux = o.aux || "avoir";
  const pp  = o.pp;
  const pres = o.pres;

  // imparfait: derive from nous-présent (drop -ons) unless overridden
  let impf = o.impf;
  if(!impf){
    const base = pres[3].replace(/^nous\s+/,"").replace(/ons$/,"");
    // -ger / -cer keep e/ç before a/o but NOT before the i-endings (-ions/-iez)
    let ivb = base;
    if(base.endsWith("ge")) ivb = base.slice(0,-1);
    else if(base.endsWith("ç")) ivb = base.slice(0,-1)+"c";
    impf = [
      je(base+"ais"), `tu ${base}ais`, `il ${base}ait`,
      `nous ${ivb}ions`, `vous ${ivb}iez`, `ils ${base}aient`,
    ];
  }

  // futur simple
  const fe = ["ai","as","a","ons","ez","ont"];
  const futur = o.futStem
    ? [ je(o.futStem+"ai"), `tu ${o.futStem}as`, `il ${o.futStem}a`,
        `nous ${o.futStem}ons`, `vous ${o.futStem}ez`, `ils ${o.futStem}ont` ]
    : null;

  // conditionnel présent (futur stem + imparfait endings)
  const cond = o.futStem
    ? [ je(o.futStem+"ais"), `tu ${o.futStem}ais`, `il ${o.futStem}ait`,
        `nous ${o.futStem}ions`, `vous ${o.futStem}iez`, `ils ${o.futStem}aient` ]
    : null;

  // auxiliaries (présent / imparfait) for compound tenses
  const AVOIR_P = ["ai","as","a","avons","avez","ont"];
  const ETRE_P  = ["suis","es","est","sommes","êtes","sont"];
  const AVOIR_I = ["avais","avais","avait","avions","aviez","avaient"];
  const ETRE_I  = ["étais","étais","était","étions","étiez","étaient"];
  const PRON    = ["me ","te ","se ","nous ","vous ","se "];
  const subjPron= ["je","tu","il","nous","vous","ils"];

  // crude plural/feminine agreement of participle for être-verbs (il=m.sg)
  const agr = (aux==="être") ? ["","","","s","s","s"] : ["","","","","",""];
  const leads = ["je","tu","il","nous","vous","ils"];
  function compound(auxArr){
    return auxArr.map((a,i)=>{
      const ppf = pp + agr[i];
      if(i===0 && vowelStart(a)) return `j'${a} ${ppf}`;
      return `${leads[i]} ${a} ${ppf}`;
    });
  }

  const passeC = compound(aux==="être"?ETRE_P:AVOIR_P);
  const pqp    = compound(aux==="être"?ETRE_I:AVOIR_I);

  // futur proche: aller (présent) + infinitif
  const ALLER = ["vais","vas","va","allons","allez","vont"];
  const inf = o.inf;
  const futProche = ALLER.map((a,i)=>{
    const lead = ["je","tu","il","nous","vous","ils"][i];
    return `${lead} ${a} ${inf}`;
  });

  // subjonctif présent
  let subj = o.subj;
  if(!subj){
    const ilsStem = pres[5].replace(/^ils\s+/,"").replace(/ent$/,"");
    let nousStem  = pres[3].replace(/^nous\s+/,"").replace(/ons$/,"");
    if(nousStem.endsWith("ge")) nousStem = nousStem.slice(0,-1);
    else if(nousStem.endsWith("ç")) nousStem = nousStem.slice(0,-1)+"c";
    subj = [
      `que ${je(ilsStem+"e")}`, `que tu ${ilsStem}es`, `qu'il ${ilsStem}e`,
      `que nous ${nousStem}ions`, `que vous ${nousStem}iez`, `qu'ils ${ilsStem}ent`,
    ];
  } else {
    subj = subj.slice();
  }

  // impératif (tu, nous, vous) — from présent unless overridden
  let imp = o.imp;
  if(!imp){
    let tu = pres[1].replace(/^tu\s+/,"");
    if(/es$/.test(tu) && o.inf.endsWith("er")) tu = tu.replace(/s$/,""); // -er drops final s
    imp = [ tu, pres[3].replace(/^nous\s+/,""), pres[4].replace(/^vous\s+/,"") ];
  }

  return {
    "présent": pres,
    "passé composé": passeC,
    "imparfait": impf,
    "plus-que-parfait": pqp,
    "futur simple": futur,
    "futur proche": futProche,
    "conditionnel présent": cond,
    "subjonctif présent": subj,
    "impératif": imp,
  };
}

/* ---- Builders for regular patterns -------------------------- */

// Regular -ER (handles -ger / -cer spelling at nous, and é/è stem changes
// via the optional `pres1`/`futStem` overrides for tricky verbs).
function erVerb(inf, o){
  o = o || {};
  const st = inf.slice(0,-2);
  let nous = st+"ons";
  if(inf.endsWith("ger")) nous = st+"eons";      // mangeons, partageons
  else if(inf.endsWith("cer")) nous = st.slice(0,-1)+"çons"; // commençons
  const pres = o.pres || [
    je(st+"e"), `tu ${st}es`, `il ${st}e`,
    `nous ${nous}`, `vous ${st}ez`, `ils ${st}ent`,
  ];
  return conjugate({
    inf, aux:o.aux||"avoir", pp:o.pp||(st+"é"),
    futStem:o.futStem||inf, pres, subj:o.subj, imp:o.imp, impf:o.impf, agree:o.agree,
  });
}

// Regular -IR (finir-type, with -iss-)
function irVerb(inf, o){
  o = o || {};
  const st = inf.slice(0,-2);
  const pres = [
    je(st+"is"), `tu ${st}is`, `il ${st}it`,
    `nous ${st}issons`, `vous ${st}issez`, `ils ${st}issent`,
  ];
  return conjugate({
    inf, aux:o.aux||"avoir", pp:o.pp||(st+"i"),
    futStem:o.futStem||inf, pres, subj:o.subj, imp:o.imp, impf:o.impf, agree:o.agree,
  });
}

// Regular -RE (vendre/répondre-type)
function reVerb(inf, o){
  o = o || {};
  const st = inf.slice(0,-2);
  const pres = [
    je(st+"s"), `tu ${st}s`, `il ${st}`,
    `nous ${st}ons`, `vous ${st}ez`, `ils ${st}ent`,
  ];
  return conjugate({
    inf, aux:o.aux||"avoir", pp:o.pp||(st+"u"),
    futStem:o.futStem||inf.slice(0,-1), pres, subj:o.subj, imp:o.imp, impf:o.impf, agree:o.agree,
  });
}

// Fully irregular: pass the genuinely irregular forms, derive the rest.
function irrVerb(inf, o){ return conjugate(Object.assign({inf}, o)); }

/* ============================================================
   CONTENT  (filled per unit; Units 1–3 = template)
============================================================ */

const EDITO_WORDS = [];      // {fr, ipa, ua, en, de, unit, theme}
const EDITO_EXPR  = [];      // {fr, ua, en, de, unit}
const EDITO_GRAMMAR = [];    // {unit, fr, ua, note, tables?, notes?}
const EDITO_VERBS = [];      // {fr, ua, en, de, unit, conj, example}

/* Content is appended from edito-content.js so this engine file
   stays stable while data grows. */
