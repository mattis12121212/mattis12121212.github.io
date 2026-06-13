/* ============================================================
   Quiz Dermato — logique de l'application
   ============================================================ */

// ---- Éléments du DOM ----
const $ = (id) => document.getElementById(id);
const screens = {
  start:  $("screen-start"),
  quiz:   $("screen-quiz"),
  result: $("screen-result"),
};

const els = {
  themeSelect:  $("theme-select"),
  countSelect:  $("count-select"),
  shuffleCheck: $("shuffle-check"),
  bankInfo:     $("bank-info"),
  topStats:     $("topbar-stats"),

  progressBar:  $("progress-bar"),
  qCounter:     $("q-counter"),
  qTheme:       $("q-theme"),
  qImage:       $("q-image"),
  qText:        $("q-text"),
  qOptions:     $("q-options"),
  feedback:     $("feedback"),
  feedbackTitle:$("feedback-title"),
  feedbackText: $("feedback-text"),
  btnNext:      $("btn-next"),

  scoreCircle:  $("score-circle"),
  scorePct:     $("score-pct"),
  scoreText:    $("score-text"),
  review:       $("review"),
};

const KEYS = ["A", "B", "C", "D", "E", "F"];

// ---- État ----
let session = [];      // questions de la partie en cours (avec options mélangées)
let current = 0;       // index de la question courante
let answers = [];      // réponses données (index choisi)
let answered = false;  // la question courante a-t-elle été répondue ?

// ---- Utilitaires ----
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.add("hidden"));
  screens[name].classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---- Initialisation de l'écran d'accueil ----
function initStart() {
  const themes = Array.from(new Set(QUIZ.map((q) => q.theme))).sort();
  els.themeSelect.innerHTML =
    `<option value="__all">Tous les thèmes (${QUIZ.length})</option>` +
    themes
      .map((t) => {
        const n = QUIZ.filter((q) => q.theme === t).length;
        return `<option value="${t}">${t} (${n})</option>`;
      })
      .join("");
  els.bankInfo.textContent = `Banque : ${QUIZ.length} questions, ${themes.length} thèmes.`;
}

// ---- Démarrer une partie ----
function startQuiz() {
  const theme = els.themeSelect.value;
  let pool = theme === "__all" ? QUIZ.slice() : QUIZ.filter((q) => q.theme === theme);

  if (els.shuffleCheck.checked) pool = shuffle(pool);

  const count = parseInt(els.countSelect.value, 10);
  if (count > 0) pool = pool.slice(0, count);

  // Pour chaque question, on mélange l'ordre des options tout en gardant la bonne réponse.
  session = pool.map((q) => {
    const opts = q.options.map((text, i) => ({ text, correct: i === q.answer }));
    const shuffledOpts = els.shuffleCheck.checked ? shuffle(opts) : opts;
    return { ...q, shuffledOpts };
  });

  current = 0;
  answers = new Array(session.length).fill(null);
  showScreen("quiz");
  renderQuestion();
}

// ---- Affichage d'une question ----
function renderQuestion() {
  answered = false;
  const q = session[current];

  els.progressBar.style.width = `${(current / session.length) * 100}%`;
  els.qCounter.textContent = `Question ${current + 1} / ${session.length}`;
  els.qTheme.textContent = q.theme;
  els.qImage.src = `images/${q.img}`;
  els.qImage.alt = "Image clinique — " + q.theme;
  els.qText.textContent = q.question;

  els.feedback.className = "feedback hidden";
  els.btnNext.classList.add("hidden");

  els.qOptions.innerHTML = "";
  q.shuffledOpts.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerHTML = `<span class="key">${KEYS[i]}</span><span>${opt.text}</span>`;
    btn.addEventListener("click", () => selectOption(i));
    els.qOptions.appendChild(btn);
  });

  updateTopStats();
}

// ---- Sélection d'une réponse ----
function selectOption(i) {
  if (answered) return;
  answered = true;

  const q = session[current];
  const opts = q.shuffledOpts;
  const chosen = opts[i];
  const correctIdx = opts.findIndex((o) => o.correct);
  answers[current] = chosen.correct;

  const buttons = els.qOptions.querySelectorAll(".option");
  buttons.forEach((b, idx) => {
    b.disabled = true;
    if (idx === correctIdx) b.classList.add("correct");
    if (idx === i && !chosen.correct) b.classList.add("wrong");
  });

  els.feedback.classList.remove("hidden");
  if (chosen.correct) {
    els.feedback.className = "feedback ok";
    els.feedbackTitle.textContent = "✅ Bonne réponse !";
  } else {
    els.feedback.className = "feedback no";
    els.feedbackTitle.textContent = `❌ Faux — réponse : ${opts[correctIdx].text}`;
  }
  els.feedbackText.textContent = q.explanation;

  els.btnNext.textContent = current === session.length - 1 ? "Voir le résultat →" : "Suivant →";
  els.btnNext.classList.remove("hidden");
  updateTopStats();
}

// ---- Question suivante / fin ----
function nextQuestion() {
  if (current < session.length - 1) {
    current++;
    renderQuestion();
  } else {
    showResult();
  }
}

// ---- Stats en haut ----
function updateTopStats() {
  const done = answers.filter((a) => a !== null).length;
  const good = answers.filter((a) => a === true).length;
  els.topStats.textContent = `Score : ${good} / ${done}`;
}

// ---- Écran de résultat ----
function showResult() {
  els.progressBar.style.width = "100%";
  const good = answers.filter((a) => a === true).length;
  const total = session.length;
  const pct = Math.round((good / total) * 100);

  els.scoreCircle.style.setProperty("--p", `${pct}%`);
  els.scorePct.textContent = `${pct}%`;

  let msg;
  if (pct >= 80) msg = "Excellent — tu maîtrises la reconnaissance photo 👏";
  else if (pct >= 60) msg = "Bien — quelques pièges à revoir.";
  else if (pct >= 40) msg = "À consolider — relis les diagnostics ratés ci-dessous.";
  else msg = "Reprends la synthèse puis recommence 💪";
  els.scoreText.textContent = `${good} / ${total} bonnes réponses. ${msg}`;

  els.review.innerHTML = session
    .map((q, i) => {
      const ok = answers[i] === true;
      return `<div class="review-item ${ok ? "ok" : "no"}">
        <span class="mark">${ok ? "✅" : "❌"}</span>
        <span><strong>${q.options[q.answer]}</strong> — ${q.theme}</span>
      </div>`;
    })
    .join("");

  showScreen("result");
}

// ---- Événements ----
$("btn-start").addEventListener("click", startQuiz);
els.btnNext.addEventListener("click", nextQuestion);
$("btn-quit").addEventListener("click", () => showScreen("start"));
$("btn-home").addEventListener("click", () => showScreen("start"));
$("btn-retry").addEventListener("click", startQuiz);

// Raccourcis clavier : A/B/C/D ou 1/2/3/4 pour répondre, Entrée = suivant
document.addEventListener("keydown", (e) => {
  if (!screens.quiz.classList.contains("hidden")) {
    const map = { a: 0, b: 1, c: 2, d: 3, 1: 0, 2: 1, 3: 2, 4: 3 };
    const k = e.key.toLowerCase();
    if (!answered && k in map) {
      const btns = els.qOptions.querySelectorAll(".option");
      if (map[k] < btns.length) btns[map[k]].click();
    } else if (answered && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      els.btnNext.click();
    }
  }
});

// ---- Go ----
initStart();
updateTopStats();
