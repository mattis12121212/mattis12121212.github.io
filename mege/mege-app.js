/* Médecine Générale — QCM examen. App logique (vanilla JS). */
(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const chapById = Object.fromEntries(MEGE_CHAPTERS.map(c => [c.id, c]));
  const countByChap = {};
  MEGE_QUESTIONS.forEach(q => { countByChap[q.c] = (countByChap[q.c] || 0) + 1; });

  const LETTERS = ["A", "B", "C", "D", "E", "F"];
  const BEST_KEY = "mege_best_v1";

  let session = null; // { items:[{q, order}], idx, score, answers:[] }

  /* ---------- utils ---------- */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function show(screen) {
    ["screen-start", "screen-quiz", "screen-result"].forEach(s =>
      $(s).classList.toggle("hidden", s !== screen));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function loadBest() { try { return JSON.parse(localStorage.getItem(BEST_KEY)) || {}; } catch (e) { return {}; } }
  function saveBest(b) { try { localStorage.setItem(BEST_KEY, JSON.stringify(b)); } catch (e) {} }

  /* ---------- accueil ---------- */
  function fillChapters() {
    const sel = $("chapter-select");
    let html = `<option value="__exam">🎯 Examen blanc (80 QCM, tous chapitres)</option>`;
    html += `<option value="__all">📚 Tous les chapitres mélangés</option>`;
    MEGE_CHAPTERS.forEach(c => {
      html += `<option value="${c.id}">${c.icone} ${c.nom} (${countByChap[c.id] || 0})</option>`;
    });
    sel.innerHTML = html;
    sel.value = "__exam";
    updateBankInfo();
  }
  function updateBankInfo() {
    $("bank-info").textContent = `${MEGE_QUESTIONS.length} QCM disponibles · ${MEGE_CHAPTERS.length} chapitres`;
    $("foot-count").textContent = `${MEGE_QUESTIONS.length} QCM`;
    $("topbar-stats").textContent = `${MEGE_QUESTIONS.length} QCM`;
  }
  function renderBest() {
    const best = loadBest();
    const keys = Object.keys(best);
    const box = $("bestscores");
    if (!keys.length) { box.classList.remove("show"); return; }
    let html = `<h3>🏅 Tes meilleurs scores</h3>`;
    const label = (k) => k === "__exam" ? "🎯 Examen blanc" : k === "__all" ? "📚 Tous mélangés" : ((chapById[k] && chapById[k].icone + " " + chapById[k].nom) || k);
    keys.sort((a, b) => best[b].pct - best[a].pct).forEach(k => {
      const b = best[k];
      html += `<div class="bs-row"><span class="bs-name">${label(k)}</span><span class="bs-val">${b.pct}% (${b.score}/${b.total})</span></div>`;
    });
    box.innerHTML = html;
    box.classList.add("show");
  }

  /* ---------- démarrage quiz ---------- */
  function start() {
    const choice = $("chapter-select").value;
    let count = parseInt($("count-select").value, 10);
    const shuf = $("shuffle-check").checked;

    let pool;
    if (choice === "__exam") { pool = MEGE_QUESTIONS.slice(); count = 80; }
    else if (choice === "__all") pool = MEGE_QUESTIONS.slice();
    else pool = MEGE_QUESTIONS.filter(q => q.c === choice);

    pool = shuf ? shuffle(pool) : pool.slice();
    if (count > 0) pool = pool.slice(0, count);

    session = {
      key: choice,
      idx: 0,
      score: 0,
      answers: [],
      items: pool.map(q => {
        const order = shuf ? shuffle([0, 1, 2, 3]) : [0, 1, 2, 3];
        return { q, order };
      })
    };
    show("screen-quiz");
    renderQuestion();
  }

  function renderQuestion() {
    const it = session.items[session.idx];
    const q = it.q;
    const total = session.items.length;

    $("progress-bar").style.width = `${(session.idx / total) * 100}%`;
    $("q-counter").textContent = `${session.idx + 1} / ${total}`;
    const chap = chapById[q.c];
    $("chap-tag").textContent = chap ? `${chap.icone} ${chap.nom}` : q.c;
    $("q-text").textContent = q.q;

    const optsBox = $("options");
    optsBox.innerHTML = "";
    it.order.forEach((origIdx, displayIdx) => {
      const btn = document.createElement("button");
      btn.className = "opt";
      btn.innerHTML = `<span class="key">${LETTERS[displayIdx]}</span><span>${escapeHtml(q.o[origIdx])}</span>`;
      btn.addEventListener("click", () => answer(origIdx, btn));
      optsBox.appendChild(btn);
    });

    const ex = $("explain");
    ex.classList.remove("show");
    ex.innerHTML = "";
    $("btn-next").classList.add("hidden");
  }

  function answer(chosenOrig, btn) {
    const it = session.items[session.idx];
    const q = it.q;
    const correct = chosenOrig === q.a;
    if (correct) session.score++;
    session.answers.push({ q, chosen: chosenOrig, correct });

    const btns = Array.from($("options").children);
    btns.forEach((b, displayIdx) => {
      b.disabled = true;
      const orig = it.order[displayIdx];
      if (orig === q.a) b.classList.add("correct");
      else if (orig === chosenOrig) b.classList.add("wrong");
      else b.classList.add("dim");
    });

    const ex = $("explain");
    const head = correct
      ? `<b style="color:var(--good)">✔ Correct.</b> `
      : `<b style="color:var(--bad)">✗ Faux.</b> La bonne réponse : <b style="color:var(--good)">${escapeHtml(q.o[q.a])}</b>.<br>`;
    ex.innerHTML = head + `<span>${escapeHtml(q.e)}</span>`;
    ex.classList.add("show");

    $("progress-bar").style.width = `${((session.idx + 1) / session.items.length) * 100}%`;
    $("topbar-stats").textContent = `Score : ${session.score} / ${session.answers.length}`;
    $("btn-next").classList.remove("hidden");
    $("btn-next").textContent = session.idx + 1 >= session.items.length ? "Voir le résultat →" : "Question suivante →";
    $("btn-next").focus();
  }

  function next() {
    session.idx++;
    if (session.idx >= session.items.length) return finish();
    renderQuestion();
  }

  function finish() {
    const total = session.items.length;
    const score = session.score;
    const pct = total ? Math.round((score / total) * 100) : 0;

    $("score-circle").style.setProperty("--deg", `${pct * 3.6}deg`);
    $("score-pts").textContent = `${pct}%`;
    let verdict;
    if (pct >= 85) verdict = "Excellent — niveau examen largement atteint 🎉";
    else if (pct >= 70) verdict = "Bien — tu es au-dessus du seuil de réussite.";
    else if (pct >= 50) verdict = "Passable — révise les explications ci-dessous.";
    else verdict = "À retravailler — relis la synthèse du/des chapitre(s).";
    $("score-text").textContent = `${score} / ${total} bonnes réponses — ${verdict}`;

    // best score
    const best = loadBest();
    const prev = best[session.key];
    if (!prev || pct > prev.pct) best[session.key] = { pct, score, total };
    saveBest(best);

    // review (erreurs d'abord)
    const wrong = session.answers.filter(a => !a.correct);
    const rev = $("review");
    if (!wrong.length) {
      rev.innerHTML = `<div class="rev-item rev-good">Aucune erreur, sans-faute ! 💯</div>`;
    } else {
      let html = `<div class="rev-title">Tes ${wrong.length} erreur(s) à revoir :</div>`;
      wrong.forEach(a => {
        html += `<div class="rev-item">
          <div class="rev-q">${escapeHtml(a.q.q)}</div>
          <div class="rev-bad">✗ Ta réponse : ${escapeHtml(a.q.o[a.chosen])}</div>
          <div class="rev-good">✔ Bonne réponse : ${escapeHtml(a.q.o[a.q.a])}</div>
          <div class="rev-e">${escapeHtml(a.q.e)}</div>
        </div>`;
      });
      rev.innerHTML = html;
    }
    show("screen-result");
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  /* ---------- events ---------- */
  $("btn-start").addEventListener("click", start);
  $("chapter-select").addEventListener("change", () => {
    const v = $("chapter-select").value;
    if (v === "__exam") $("count-select").value = "80";
  });
  $("btn-next").addEventListener("click", next);
  $("btn-quit").addEventListener("click", () => { show("screen-start"); renderBest(); $("topbar-stats").textContent = `${MEGE_QUESTIONS.length} QCM`; });
  $("btn-restart").addEventListener("click", () => { show("screen-start"); renderBest(); $("topbar-stats").textContent = `${MEGE_QUESTIONS.length} QCM`; });

  // init
  fillChapters();
  renderBest();
})();
