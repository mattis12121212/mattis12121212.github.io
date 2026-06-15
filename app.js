/* ============================================================
   Dermato — Entraînement format examen (réponses ouvertes a/b)
   Données : questions.js → const BANK = [{img,dx,theme,descr,qb,ab,pearl}]
   ============================================================ */
const $ = (id) => document.getElementById(id);
const screens = { start:$("screen-start"), quiz:$("screen-quiz"), result:$("screen-result") };
const els = {
  theme:$("theme-select"), count:$("count-select"), shuffle:$("shuffle-check"),
  bank:$("bank-info"), top:$("topbar-stats"), foot:$("foot-count"),
  bar:$("progress-bar"), counter:$("q-counter"),
  img:$("q-image"), descr:$("q-descr"),
  ansA:$("ans-a"), revealA:$("reveal-a"), solA:$("sol-a"), gradeA:$("grade-a"),
  qb:$("qb-text"), ansB:$("ans-b"), revealB:$("reveal-b"), solB:$("sol-b"),
  pearl:$("pearl-b"), gradeB:$("grade-b"),
  btnReveal:$("btn-reveal"), btnNext:$("btn-next"),
  scoreCircle:$("score-circle"), scorePts:$("score-pts"), scoreText:$("score-text"),
  review:$("review"),
  pseudo:$("pseudo-input"), lbStart:$("lb-list-start"), lbResult:$("lb-list-result"), lbClear:$("lb-clear"),
};

let session = [], current = 0, answered = false;
let scoreA = [], scoreB = [], givenA = [], givenB = [];
let lastEntryId = null;

/* ---- Classement PARTAGÉ (kvdb.io, visible par tous) + repli local ----
   Chaque score = une clé unique s_<id> dans le bucket → pas d'écrasement.
   Affichage = scores du serveur fusionnés avec mes scores locaux (latence ~2 s). */
const PS_KEY = "dermato_pseudo", MINE_KEY = "dermato_mine_v1";
const LB_BUCKET = "Rvoz2uRrTnRiKJf6cy6xpo";
const LB_BASE = `https://kvdb.io/${LB_BUCKET}`;
const myIds = new Set();

function mineLoad(){ try{ return JSON.parse(localStorage.getItem(MINE_KEY)) || []; }catch(e){ return []; } }
function mineSave(a){ try{ localStorage.setItem(MINE_KEY, JSON.stringify(a)); }catch(e){} }
function lbRank(arr){ return arr.slice().sort((a,b)=> b.pct-a.pct || b.pts-a.pts || a.date-b.date); }
function fmtDate(ts){ const d=new Date(ts); return `${String(d.getDate()).padStart(2,"0")}/${String(d.getMonth()+1).padStart(2,"0")}`; }

async function lbFetchServer(){
  try{
    const r = await fetch(`${LB_BASE}/?format=json&values=true&prefix=s_`, {cache:"no-store"});
    if(!r.ok) return [];
    const rows = await r.json();
    return rows.map(([k,v])=>{ try{ const o=JSON.parse(v); o._k=k; return o; }catch(e){ return null; } }).filter(Boolean);
  }catch(e){ return []; }
}
function mergeEntries(server){
  const mine = mineLoad();
  const byId = {};
  for(const e of server){ if(e && e.id) byId[e.id]=e; }
  for(const e of mine){ if(e && e.id && !byId[e.id]) byId[e.id]=e; } // mes scores récents pas encore indexés
  return Object.values(byId);
}
async function lbSubmit(entry){
  const mine = mineLoad(); mine.push(entry); mineSave(mine); myIds.add(entry.id);
  try{
    await fetch(`${LB_BASE}/s_${entry.id}`, {method:"POST", headers:{"Content-Type":"text/plain"}, body:JSON.stringify(entry)});
  }catch(e){ /* repli local déjà fait */ }
}
async function renderLB(el){
  if(!el) return;
  el.innerHTML = `<li class="lb-empty">Chargement du classement…</li>`;
  const ranked = lbRank(mergeEntries(await lbFetchServer())).slice(0,20);
  if(!ranked.length){ el.innerHTML = `<li class="lb-empty">Aucun score pour l'instant — sois le premier !</li>`; return; }
  el.innerHTML = ranked.map((e,i)=>{
    const me = (e.id && (myIds.has(e.id) || e.id===lastEntryId)) ? " me" : "";
    const medal = i===0?"🥇":i===1?"🥈":i===2?"🥉":`${i+1}.`;
    return `<li class="lb-row${me}"><span class="lb-rank">${medal}</span>`+
      `<span class="lb-name">${escapeHtml(e.pseudo||"Anonyme")}</span>`+
      `<span class="lb-score">${e.pts}/${e.max} · ${e.pct}%</span>`+
      `<span class="lb-meta">${e.n} cas · ${fmtDate(e.date)}</span></li>`;
  }).join("");
}

function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}

/* ---- Accueil ---- */
function initStart(){
  const themes = [...new Set(BANK.map(q=>q.theme))].sort((a,b)=>a.localeCompare(b,'fr'));
  const nimg = imgCount(BANK);
  els.theme.innerHTML = `<option value="__all">Tous les thèmes (${nimg} photos)</option>` +
    themes.map(t=>{const n=imgCount(BANK.filter(q=>q.theme===t));return `<option value="${t}">${t} (${n})</option>`}).join("");
  els.bank.textContent = `${nimg} photos · ${themes.length} thèmes · ${BANK.length} variantes`;
  els.foot.textContent = `${nimg} photos du cours`;
  els.top.textContent = `${nimg} photos`;
}
function imgCount(list){return new Set(list.map(q=>q.img)).size;}

function buildSession(){
  const theme = els.theme.value;
  let pool = theme==="__all" ? BANK.slice() : BANK.filter(q=>q.theme===theme);
  // une seule variante (sous-question) par image, tirée au hasard → images distinctes par session
  const byImg = {};
  for(const q of pool){ (byImg[q.img] = byImg[q.img] || []).push(q); }
  let items = Object.values(byImg).map(v => v.length>1 ? v[Math.floor(Math.random()*v.length)] : v[0]);
  if(els.shuffle.checked) items = shuffle(items);
  let n = parseInt(els.count.value,10);
  if(n>0) items = items.slice(0,n);
  return items;
}

function start(){
  const ps = (els.pseudo.value||"").trim();
  try{ localStorage.setItem(PS_KEY, ps); }catch(e){}
  session = buildSession();
  if(!session.length){alert("Aucun cas pour ce thème.");return;}
  current=0; scoreA=[]; scoreB=[]; givenA=[]; givenB=[];
  show("quiz"); renderQuestion();
}

function show(name){for(const k in screens)screens[k].classList.toggle("hidden",k!==name);window.scrollTo(0,0);}

/* ---- Question ---- */
function renderQuestion(){
  const q = session[current];
  answered=false;
  els.bar.style.width = `${(current/session.length)*100}%`;
  els.counter.textContent = `Cas ${current+1}/${session.length}`;
  els.img.src = `images/${q.img}`;
  els.descr.textContent = q.descr || "Décrivez la lésion et proposez un diagnostic.";
  els.ansA.value=""; els.ansB.value="";
  els.qb.textContent = q.qb || "Un élément clé de prise en charge ?";
  els.solA.textContent = q.dx;
  els.solB.textContent = q.ab || "—";
  els.pearl.textContent = q.pearl ? `💡 ${q.pearl}` : "";
  els.revealA.classList.remove("show"); els.revealB.classList.remove("show");
  resetGrades();
  els.btnReveal.classList.remove("hidden");
  els.btnNext.classList.add("hidden");
  els.ansA.focus();
}

function resetGrades(){
  [...els.gradeA.querySelectorAll(".gbtn"),...els.gradeB.querySelectorAll(".gbtn")]
    .forEach(b=>b.classList.remove("sel","sel0"));
}

/* auto-suggestion de note pour aider l'auto-évaluation */
function norm(s){return (s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9 ]/g,"").trim();}
function looksRight(user,sol){
  user=norm(user); sol=norm(sol);
  if(!user) return false;
  if(user===sol) return true;
  // mots significatifs du solveur présents
  const u=new Set(user.split(/\s+/));
  const key=sol.split(/\s+/).filter(w=>w.length>3);
  if(key.length && key.every(w=>u.has(w))) return true;
  if(sol.length>4 && (user.includes(sol)||sol.includes(user))) return true;
  return false;
}

function reveal(){
  if(answered) return;
  answered=true;
  els.revealA.classList.add("show");
  els.revealB.classList.add("show");
  els.btnReveal.classList.add("hidden");
  els.btnNext.classList.remove("hidden");
  givenA[current]=els.ansA.value.trim();
  givenB[current]=els.ansB.value.trim();
  // pré-sélection indicative (modifiable)
  const q=session[current];
  if(looksRight(givenA[current],q.dx)) preselect(els.gradeA,"2"); else if(givenA[current]) preselect(els.gradeA,"1");
  if(looksRight(givenB[current],q.ab)) preselect(els.gradeB,"1");
  els.btnNext.focus();
}
function preselect(box,pts){
  const b=box.querySelector(`.gbtn[data-pts="${pts}"]`); if(b) gradeClick(box,b);
}

function gradeClick(box,btn){
  box.querySelectorAll(".gbtn").forEach(b=>b.classList.remove("sel","sel0"));
  btn.classList.add(btn.dataset.pts==="0"?"sel0":"sel");
  const pts=parseInt(btn.dataset.pts,10);
  if(box===els.gradeA) scoreA[current]=pts; else scoreB[current]=pts;
}

function next(){
  // défaut si non noté
  if(scoreA[current]==null) scoreA[current]=0;
  if(scoreB[current]==null) scoreB[current]=0;
  current++;
  if(current>=session.length) finish();
  else renderQuestion();
}

/* ---- Résultat ---- */
function finish(){
  const tot = session.reduce((s,_,i)=>s+(scoreA[i]||0)+(scoreB[i]||0),0);
  const max = session.length*3;
  const pct = Math.round(tot/max*100);
  els.scoreCircle.style.setProperty("--deg",`${pct*3.6}deg`);
  els.scorePts.textContent = `${tot}/${max}`;
  els.scoreText.textContent = `${pct}% · ${session.length} cas (a:2 pts + b:1 pt)`;
  // enregistrer au classement
  const pseudo = ((els.pseudo.value||"").trim()) || "Anonyme";
  lastEntryId = "e"+Date.now()+Math.floor(Math.random()*100000);
  lbSubmit({ id:lastEntryId, pseudo, pts:tot, max, pct, n:session.length, date:Date.now() });
  renderLB(els.lbResult);
  els.review.innerHTML = session.map((q,i)=>{
    const sa=scoreA[i]||0, sb=scoreB[i]||0;
    return `<div class="rev-item">
      <img src="images/${q.img}" alt="">
      <div class="rev-body">
        <div class="rev-dx">${q.dx}</div>
        <div class="muted">a (${sa}/2) : ${escapeHtml(givenA[i]||"—")}</div>
        <div class="muted">b (${sb}/1) : ${escapeHtml(givenB[i]||"—")} <span style="color:var(--good)">→ ${escapeHtml(q.ab||"")}</span></div>
      </div>
      <div class="rev-tot">${sa+sb}/3</div>
    </div>`;
  }).join("");
  show("result");
}
function escapeHtml(s){return (s||"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}

/* ---- Événements ---- */
$("btn-start").addEventListener("click",start);
els.btnReveal.addEventListener("click",reveal);
els.btnNext.addEventListener("click",next);
$("btn-restart").addEventListener("click",()=>{ renderLB(els.lbStart); show("start"); });
els.gradeA.addEventListener("click",e=>{if(e.target.classList.contains("gbtn"))gradeClick(els.gradeA,e.target);});
els.gradeB.addEventListener("click",e=>{if(e.target.classList.contains("gbtn"))gradeClick(els.gradeB,e.target);});
els.lbClear.addEventListener("click",()=>{ renderLB(els.lbStart); });
document.addEventListener("keydown",e=>{
  if(screens.quiz.classList.contains("hidden"))return;
  if(e.key==="Enter"){
    if(!answered){ if(document.activeElement===els.ansA){els.ansB.focus();} else {reveal();} }
    else next();
  }
});
// init : pseudo mémorisé + classement
try{ els.pseudo.value = localStorage.getItem(PS_KEY) || ""; }catch(e){}
initStart();
renderLB(els.lbStart);
