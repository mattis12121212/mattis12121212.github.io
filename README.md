# Quiz Dermato 🩺

Application QCM locale : une image dermatologique s'affiche → tu choisis le diagnostic → feedback immédiat + explication tirée du cours.

## Lancer le site

**Option 1 — le plus simple :** double-clique sur `index.html` (il s'ouvre dans ton navigateur).

**Option 2 — petit serveur local** (recommandé, évite tout souci de cache) :

```powershell
cd "C:\Users\matti\OneDrive\Bureau\dermato\site"
python -m http.server 8765
```

Puis ouvre http://localhost:8765 dans ton navigateur.

## Contenu

- **37 questions**, 9 thèmes (viroses, bactériennes, mycoses/parasites, inflammatoires, bulleuses, connectivites, tumeurs, annexes/pigmentation, granulomateuses/neutrophiliques).
- Filtre par thème, choix du nombre de questions, mélange aléatoire.
- Raccourcis clavier : `A/B/C/D` (ou `1/2/3/4`) pour répondre, `Entrée` pour passer.
- Score + récapitulatif en fin de partie.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | structure de la page |
| `style.css` | mise en forme |
| `app.js` | logique du quiz |
| `questions.js` | **banque de questions** (à éditer pour ajouter du contenu) |
| `images/` | images cliniques (DermNet) |

## Ajouter / modifier une question

Édite `questions.js`. Chaque entrée :

```js
{
  img: "psoriasis.jpg",        // fichier présent dans images/
  theme: "Inflammatoires",
  question: "Énoncé…",
  options: ["Bonne réponse", "Distracteur", "Distracteur", "Distracteur"],
  answer: 0,                    // index (0-3) de la bonne réponse dans options
  explanation: "Rappel clinique / tuyau."
}
```

> Les images proviennent de [DermNet NZ](https://dermnetnz.org/) et sont utilisées ici à des fins d'**étude personnelle**. Ne pas redistribuer publiquement sans vérifier leur licence.
