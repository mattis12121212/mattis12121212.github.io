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
};

let session = [], current = 0, answered = false;
let scoreA = [], scoreB = [], givenA = [], givenB = [];

function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}

/* ---- Accueil ---- */
function initStart(){
  const themes = [...new Set(BANK.map(q=>q.theme))].sort((a,b)=>a.localeCompare(b,'fr'));
  els.theme.innerHTML = `<option value="__all">Tous les thèmes (${BANK.length} cas)</option>` +
    themes.map(t=>{const n=BANK.filter(q=>q.theme===t).length;return `<option value="${t}">${t} (${n})</option>`}).join("");
  els.bank.textContent = `${BANK.length} cas · ${themes.length} thèmes`;
  els.foot.textContent = `${BANK.length} cas`;
  els.top.textContent = `${BANK.length} cas`;
}

function buildSession(){
  const theme = els.theme.value;
  let pool = theme==="__all" ? BANK.slice() : BANK.filter(q=>q.theme===theme);
  if(els.shuffle.checked) pool = shuffle(pool);
  let n = parseInt(els.count.value,10);
  if(n>0) pool = pool.slice(0,n);
  return pool;
}

function start(){
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
$("btn-restart").addEventListener("click",()=>show("start"));
els.gradeA.addEventListener("click",e=>{if(e.target.classList.contains("gbtn"))gradeClick(els.gradeA,e.target);});
els.gradeB.addEventListener("click",e=>{if(e.target.classList.contains("gbtn"))gradeClick(els.gradeB,e.target);});
document.addEventListener("keydown",e=>{
  if(screens.quiz.classList.contains("hidden"))return;
  if(e.key==="Enter"){
    if(!answered){ if(document.activeElement===els.ansA){els.ansB.focus();} else {reveal();} }
    else next();
  }
});
initStart();
