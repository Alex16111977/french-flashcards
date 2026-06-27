/* ============================================================
   Édito B1 — Spaced repetition (Leitner) + daily streak.
   localStorage-based, per-deck. Pure add-on: does not touch
   the existing Progress system (both can run together).
============================================================ */

const DAY = 86400000;

const SRS = {
  key(deck){ return 'edito.srs.'+deck; },
  load(deck){ try{ return JSON.parse(localStorage.getItem(this.key(deck))||'{}'); }catch(e){ return {}; } },
  save(deck, d){ localStorage.setItem(this.key(deck), JSON.stringify(d)); },

  // Leitner boxes → next interval after a correct answer
  INTERVALS: [10*60*1000, 1*DAY, 3*DAY, 7*DAY, 16*DAY, 35*DAY],

  /* grade: 'good' (knew it) advances the box; 'hard' (forgot) resets to box 0 */
  review(deck, k, grade){
    const d = this.load(deck), now = Date.now();
    let c = d[k] || {box:0, reps:0};
    c.box  = grade==='good' ? Math.min(c.box+1, this.INTERVALS.length-1) : 0;
    c.reps = (c.reps||0)+1;
    c.last = now;
    c.due  = now + this.INTERVALS[c.box];
    d[k] = c; this.save(deck, d);
    Streak.mark();
    return c;
  },

  isDue(deck, k){ const c = this.load(deck)[k]; return !c || c.due <= Date.now(); },
  // cards already seen and now due for review
  dueKeys(deck, keys){ const d = this.load(deck), now = Date.now();
    return keys.filter(k => d[k] && d[k].due <= now); },
  // never-studied cards
  newKeys(deck, keys){ const d = this.load(deck); return keys.filter(k => !d[k]); },

  /* a study queue: all due reviews first, then up to `newLimit` fresh cards */
  queue(deck, keys, newLimit){
    const due = this.dueKeys(deck, keys);
    const fresh = this.newKeys(deck, keys).slice(0, newLimit==null?20:newLimit);
    return due.concat(fresh);
  },

  stats(deck, keys){
    const d = this.load(deck), now = Date.now();
    let seen=0, due=0, learned=0;
    keys.forEach(k=>{ const c=d[k]; if(c){ seen++; if(c.due<=now) due++; if(c.box>=3) learned++; } });
    return { total:keys.length, seen, due, learned, fresh:keys.length-seen };
  },
};

/* ---- daily streak ---- */
const Streak = {
  KEY:'edito.streak',
  load(){ try{ return JSON.parse(localStorage.getItem(this.KEY)||'{}'); }catch(e){ return {}; } },
  save(o){ localStorage.setItem(this.KEY, JSON.stringify(o)); },
  today(){ const d=new Date(); return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(); },
  yesterday(){ const d=new Date(Date.now()-DAY); return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(); },

  /* call once per reviewed card */
  mark(){
    const s = this.load(), t = this.today();
    if(s.last === t){ s.today = (s.today||0)+1; }
    else { s.streak = (s.last===this.yesterday()) ? (s.streak||0)+1 : 1; s.last = t; s.today = 1; }
    s.totalReviews = (s.totalReviews||0)+1;
    this.save(s); return s;
  },
  /* current streak, accounting for a missed day */
  current(){ const s=this.load(); if(!s.last) return 0;
    return (s.last===this.today()||s.last===this.yesterday()) ? (s.streak||0) : 0; },
  todayCount(){ const s=this.load(); return s.last===this.today() ? (s.today||0) : 0; },
};
