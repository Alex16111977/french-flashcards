/* ============================================================
   Shared helpers: sidebar chrome, TTS, toast, progress
============================================================ */

const PAGES = [
  {id:'index',     href:'index.html',     label:'Дім',         ic:'H', tint:'sand',   sec:'Огляд'},
  {id:'flashcards',href:'flashcards.html',label:'Картки',      ic:'01', tint:'blush',  sec:'Словник'},
  {id:'quiz',      href:'quiz.html',      label:'Квіз',        ic:'02', tint:'mint',   sec:'Словник'},
  {id:'phrases',   href:'phrases.html',   label:'Фрази',       ic:'03', tint:'peach',  sec:'Словник'},
  {id:'dialogues', href:'dialogues.html', label:'Діалоги',     ic:'04', tint:'sky',    sec:'Словник'},
  {id:'verbs',     href:'verbs.html',     label:'Дієслова',    ic:'05', tint:'butter', sec:'Теорія'},
  {id:'grammar',   href:'grammar.html',   label:'Граматика',   ic:'06', tint:'lilac',  sec:'Теорія'},
  {id:'datetime',  href:'datetime.html',  label:'Час і дата',  ic:'07', tint:'mint',   sec:'Теорія'},
];

function renderChrome(activeId){
  // Wrap body content in .layout if not already
  const body = document.body;
  if(!body.querySelector('.layout')){
    // Move existing .shell content into .main inside .layout
    const existing = body.querySelector('.shell');
    const layout = document.createElement('div');
    layout.className = 'layout';
    const aside = document.createElement('aside');
    aside.className = 'sidebar';
    aside.id = 'chrome-sidebar';
    const main = document.createElement('main');
    main.className = 'main';
    main.id = 'chrome-main';
    layout.appendChild(aside);
    layout.appendChild(main);
    // burger + mask
    const burger = document.createElement('button');
    burger.className='burger'; burger.id='burger'; burger.innerHTML='<span></span>';
    const mask = document.createElement('div');
    mask.className='sidebar-mask'; mask.id='sidebar-mask';
    body.appendChild(burger);
    body.appendChild(mask);
    body.appendChild(layout);
    // move children of .shell (except chrome-top/foot placeholders) into main
    if(existing){
      [...existing.children].forEach(c=>{
        if(c.id==='chrome-top' || c.id==='chrome-foot') return;
        main.appendChild(c);
      });
      existing.remove();
    }
    burger.onclick = ()=>{ aside.classList.toggle('open'); mask.classList.toggle('show'); };
    mask.onclick  = ()=>{ aside.classList.remove('open'); mask.classList.remove('show'); };
  }

  // Build sidebar
  const aside = document.getElementById('chrome-sidebar');
  const sections = {};
  PAGES.forEach(p=>{ (sections[p.sec]=sections[p.sec]||[]).push(p); });
  let html = `
    <a class="brand" href="index.html">
      <span class="logo">F</span>
      <div>
        <div class="name">Français</div>
        <div class="tag">A1—B2 · UA</div>
      </div>
    </a>`;
  for(const sec of Object.keys(sections)){
    html += `<div class="sec">${sec}</div>`;
    for(const p of sections[sec]){
      html += `<a class="navlink ${p.id===activeId?'active':''}" href="${p.href}">
        <span class="ic" style="background:var(--pastel-${p.tint});color:var(--ink)">${p.ic}</span>
        <span>${p.label}</span>
      </a>`;
    }
  }
  html += `<div class="foot">
    Прогрес зберігається локально. Озвучка — Google TTS.
  </div>`;
  aside.innerHTML = html;
}

/* TTS via Google Translate speak endpoint (works in Chrome when served) */
function speakFR(text){
  if(!text) return;
  try{
    const url = 'https://translate.google.com/translate_tts?ie=UTF-8&tl=fr&client=tw-ob&q='+encodeURIComponent(text);
    const a = new Audio(url);
    a.play().catch(()=>{
      try{
        const u = new SpeechSynthesisUtterance(text);
        u.lang='fr-FR'; speechSynthesis.speak(u);
      }catch(e){ toast('Звук недоступний'); }
    });
  }catch(e){ toast('Звук недоступний'); }
}

function toast(msg){
  let t = document.getElementById('toast');
  if(!t){ t = document.createElement('div'); t.id='toast'; t.className='toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._tm);
  t._tm = setTimeout(()=>t.classList.remove('show'), 2200);
}

/* Progress per-page, stored in localStorage */
const Progress = {
  key(page){ return 'fr.progress.'+page; },
  get(page){ try{ return JSON.parse(localStorage.getItem(this.key(page))||'{}'); }catch(e){ return {}; } },
  set(page, obj){ localStorage.setItem(this.key(page), JSON.stringify(obj)); },
  addKnown(page, fr){ const p=this.get(page); p.known=p.known||[]; if(!p.known.includes(fr)) p.known.push(fr); p.unknown=(p.unknown||[]).filter(x=>x!==fr); this.set(page,p); },
  addUnknown(page, fr){ const p=this.get(page); p.unknown=p.unknown||[]; if(!p.unknown.includes(fr)) p.unknown.push(fr); p.known=(p.known||[]).filter(x=>x!==fr); this.set(page,p); },
};

function shuffle(a){ a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]} return a; }
function pick(a){ return a[Math.floor(Math.random()*a.length)] }
function uniq(a){ return [...new Set(a)] }
