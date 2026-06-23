/* ============================================================
   Médecine Générale (WMDS 2257) — Banque de QCM
   Format examen : 4 propositions, 1 seule réponse correcte.
   Source : synthèses de cours 2025-2026 + anciens examens 2016-2025.
   ============================================================ */
const MEGE_CHAPTERS = [
  { id: "assuetudes", nom: "Assuétudes : quel accompagnement ?", icone: "🫂" },
  { id: "pharmacien", nom: "Collaboration médecin – pharmacien", icone: "💊" },
  { id: "recherche",  nom: "La recherche en médecine générale", icone: "🔬" },
  { id: "sport",      nom: "Le MG et les plaintes liées au sport", icone: "🏃" },
  { id: "onehealth",  nom: "One Health : médecine & environnement", icone: "🌍" },
  { id: "orga",       nom: "Organisation des soins de santé", icone: "🏛️" },
  { id: "age",        nom: "Le patient âgé & la coordination des soins", icone: "🧓" },
  { id: "asile",      nom: "Soins aux demandeurs d'asile & précarité", icone: "🕊️" },
  { id: "trio",       nom: "Trio : MG – médecin du travail – médecin conseil", icone: "🤝" }
];

const MEGE_QUESTIONS = [];
function Q(chapitre, question, options, correcte, explication) {
  MEGE_QUESTIONS.push({ c: chapitre, q: question, o: options, a: correcte, e: explication });
}

// ========== ASSUÉTUDES (WMDS 2257 — D. Lamy) ==========
Q("assuetudes",
 "Une substance psychoactive est définie comme :",
 ["Une substance qui altère les processus mentaux (cognition, affect) une fois ingérée ou administrée",
  "Une substance qui crée systématiquement une dépendance physique",
  "Une substance uniquement d'origine illicite",
  "Une substance qui agit exclusivement sur le système nerveux périphérique"],
 0,
 "Substance psychoactive = substance qui, ingérée/administrée, altère les processus mentaux (fonctions cognitives, affect). La dépendance n'est pas systématique.");

Q("assuetudes",
 "Selon la classification présentée (Drugs Wheel / Snider), comment classer le cannabis ?",
 ["Dépresseur", "Stimulant", "Perturbateur / hallucinogène", "Opioïde"],
 2,
 "Les 3 grandes catégories : dépresseurs (alcool, opioïdes, BZD), stimulants (cocaïne, amphétamines, nicotine, caféine) et perturbateurs/hallucinogènes (cannabis, LSD).");

Q("assuetudes",
 "Parmi ces substances, laquelle est un STIMULANT ?",
 ["Alcool", "Benzodiazépine", "Nicotine", "Héroïne"],
 2,
 "Stimulants : cocaïne, amphétamines, nicotine, caféine. Alcool, BZD et opioïdes (héroïne) sont des dépresseurs.");

Q("assuetudes",
 "Quelle voie de consommation impose un passage hépatique (cytochrome P450) avant d'atteindre la circulation ?",
 ["Voie injectable (IV)", "Voie respiratoire (inhalation)", "Voie orale (ingestion)", "Voie nasale"],
 2,
 "La voie orale impose le premier passage hépatique. L'inhalation et l'IV donnent un effet rapide en contournant le foie.");

Q("assuetudes",
 "Le triangle d'Olivenstein décrit l'interaction de trois pôles. Lesquels ?",
 ["Produit – Individu – Environnement",
  "Médecin – Patient – Famille",
  "Tolérance – Dépendance – Sevrage",
  "Bio – Psycho – Social uniquement"],
 0,
 "Triangle d'Olivenstein : Produit, Individu, Environnement (contexte socio-familial). Outil de prévention, dépistage, diagnostic et consultation.");

Q("assuetudes",
 "Le cycle de Prochaska et Di Clemente comporte les stades suivants, SAUF :",
 ["Précontemplation", "Contemplation", "Stabilisation définitive sans rechute possible", "Action et maintien"],
 2,
 "Les stades : précontemplation, contemplation, décision, action, maintien, rechute. La rechute fait partie du processus — il n'y a pas de 'stabilisation définitive sans rechute'.");

Q("assuetudes",
 "Quelles sont les 3 attitudes fondamentales de la relation d'aide selon Carl Rogers ?",
 ["Empathie, regard positif inconditionnel, congruence",
  "Autorité, distance, neutralité",
  "Diagnostic, traitement, suivi",
  "Écoute, confrontation, persuasion"],
 0,
 "Carl Rogers : empathie, regard positif inconditionnel, congruence.");

Q("assuetudes",
 "Concernant le langage utilisé avec un patient, quelle attitude est RECOMMANDÉE ?",
 ["Utiliser des mots comme « tox » ou « alcoolique » pour être direct",
  "Utiliser un langage centré sur la personne (« personne avec un trouble de l'usage de substances »)",
  "Éviter toute terminologie diagnostique",
  "Adapter son vocabulaire uniquement en milieu spécialisé"],
 1,
 "Bannir les mots stigmatisants (tox, junkie, alcoolique, bourré). Privilégier un langage centré sur la personne : le langage est un déterminant majeur du lien.");

Q("assuetudes",
 "L'intervention brève (RPIB) selon l'OMS :",
 ["Dure 1 à 2 heures et nécessite un cadre spécialisé",
  "Dure 5 à 20 min, suit le repérage d'un usage problématique et peut être répétée",
  "Remplace l'entretien motivationnel",
  "Ne s'adresse qu'aux patients dépendants"],
 1,
 "L'intervention brève dure 5 à 20 min, suit le repérage, repose sur l'empathie, peut être répétée. L'OMS définit 4 étapes (modèle FRAMES).");

Q("assuetudes",
 "Dans l'entretien motivationnel, quelle affirmation est correcte ?",
 ["Le praticien dirige et impose les objectifs",
  "Le praticien guide plus qu'il ne dirige ; c'est le patient qui décide",
  "On ne tient pas compte du stade de changement",
  "Il vise à augmenter l'ambivalence du patient"],
 1,
 "Entretien motivationnel : le praticien guide plus qu'il ne dirige, danse plus qu'il ne lutte, écoute plus qu'il ne parle. C'est le patient qui décide. Il réduit l'ambivalence.");

Q("assuetudes",
 "Parmi ces éléments, lequel est le MOINS important pour la relation thérapeutique ?",
 ["Les mots utilisés", "L'entretien motivationnel", "Évaluer les doses consommées", "Le triangle d'Olivenstein"],
 2,
 "Piège classique : « évaluer les doses » est le moins important pour le LIEN. Les mots, l'entretien motivationnel, Olivenstein et le cercle de Di Clemente sont, eux, importants pour la relation.");

Q("assuetudes",
 "Lors d'une 1re consultation, quelle attitude COMPLIQUE l'établissement du lien ?",
 ["Aborder le sujet sans jugement",
  "Proposer d'emblée une analyse d'urines",
  "Écouter activement",
  "Restituer les résultats du repérage"],
 1,
 "À éviter en 1re consultation : proposer d'emblée une analyse d'urines et mettre en avant les qualités de la vie sans substance. Cela complique le lien.");

Q("assuetudes",
 "Concernant le lien thérapeutique, quelle action est À ÉVITER ?",
 ["Réorienter en gardant le lien et le suivi",
  "Référer directement en milieu spécialisé sans maintien du suivi",
  "Pratiquer l'écoute active",
  "Utiliser l'entretien motivationnel"],
 1,
 "Référer directement en milieu spécialisé (en se déchargeant) est à éviter : il faut garder le lien, rester en 1re ligne et réorienter en maintenant le suivi.");

Q("assuetudes",
 "Signes d'IMPRÉGNATION aux opioïdes :",
 ["Mydriase, agitation, « tout coule »",
  "Myosis, « pique du nez », diminution de la fréquence respiratoire",
  "Tachycardie, hypertension, sueurs",
  "Tremblements, hallucinations, convulsions"],
 1,
 "Imprégnation opioïde : myosis (pupille en pointe), « pique du nez », baisse de la fréquence respiratoire. Le MANQUE (sevrage) donne mydriase, agitation, « tout coule ».");

Q("assuetudes",
 "La réduction des risques (RdR) s'adresse à :",
 ["Uniquement aux patients dépendants",
  "Uniquement aux usagers en sevrage",
  "Tous les usagers (expérimentaux, récréatifs, ponctuels, abusifs ou dépendants)",
  "Uniquement aux usagers de drogues injectables"],
 2,
 "La RdR s'adresse à TOUS les usagers, sans tabou ni jugement. Elle est complémentaire de la prévention de l'usage.");

Q("assuetudes",
 "Après une prise de risque, jusqu'à quand conseille-t-on un dépistage (fenêtre sérologique) ?",
 ["Jusqu'à 24 h après", "Jusqu'à 1 semaine après", "Jusqu'à 3 mois après", "Jusqu'à 1 an après"],
 2,
 "Conseil de RdR : se faire dépister jusqu'à 3 mois après une prise de risque (fenêtre sérologique).");

Q("assuetudes",
 "La métaphore de l'Himalaya illustre le sevrage. Que signifie-t-elle concernant la rechute ?",
 ["La rechute signe l'échec définitif du projet",
  "La chute fait partie du projet (camps de base sécurisés, anticiper les rechutes)",
  "Il faut éviter toute préparation",
  "Le sevrage doit être immédiat et total"],
 1,
 "Métaphore de l'Himalaya : préparation, montée pas à pas, la chute fait partie du projet, camps de base sécurisés (cure), dernière ascension (anticiper les rechutes).");

Q("assuetudes",
 "L'alliance thérapeutique repose sur un accord portant sur :",
 ["Le seul respect des horaires de consultation",
  "Un lien de confiance, la compréhension du problème, les objectifs et les modalités",
  "La prescription d'un traitement de substitution uniquement",
  "Le contrôle régulier des analyses biologiques"],
 1,
 "Alliance thérapeutique = accord sur un lien de confiance/respect, la compréhension du problème, les objectifs et les modalités pour y arriver. Fil conducteur à entretenir.");

Q("assuetudes",
 "Le « cadre de travail » dans l'accompagnement :",
 ["Vise uniquement à sanctionner le patient",
  "Est un espace qui protège le patient ET le soignant (le refus structurant permet la rencontre)",
  "Interdit tout suivi psycho-social",
  "Doit fixer des objectifs maximalistes"],
 1,
 "Le cadre de travail protège patient et soignant (règles, mode de délivrance du R/, suivi psycho-social, objectifs réalistes, secret médical). Le refus structurant permet la rencontre plutôt que la répétition.");

Q("assuetudes",
 "Quand débuter la détection précoce d'une assuétude ?",
 ["Seulement quand le patient se plaint",
  "Au moins 1×/an, sans attendre les signes d'appel",
  "Uniquement chez les patients à risque connu",
  "Jamais en salle d'attente, c'est inapproprié"],
 1,
 "Détection précoce : au moins 1×/an, sans attendre les signes d'appel, systématiquement dans certaines situations. On peut aborder le sujet dès la salle d'attente, sans tabou.");

Q("assuetudes",
 "Quel outil est cité pour le repérage d'un usage problématique d'alcool ?",
 ["Score de Glasgow", "Questionnaire AUDIT et notion de verre standard", "Échelle de Tinetti", "Score FARES"],
 1,
 "Outils de détection : verre standard, questionnaire AUDIT, triangle d'Olivenstein, brochures.");

Q("assuetudes",
 "Dans le cas « J'ai mal à l'estomac » (femme 52 ans, vomissements de sang, γ-GT élevées), que suspecter ?",
 ["Une infection à H. pylori isolée",
  "Une consommation excessive d'alcool (support de l'entretien motivationnel)",
  "Un cancer gastrique d'emblée",
  "Une intoxication aux opioïdes"],
 1,
 "Cas du cours : γ-GT élevées + vomissements de sang → suspicion de consommation excessive d'alcool, point de départ d'un entretien motivationnel.");

Q("assuetudes",
 "Concernant les 4 étapes de l'intervention brève (OMS/FRAMES), laquelle est exacte ?",
 ["Restituer les résultats, informer, conseiller, encourager",
  "Diagnostiquer, traiter, référer, clore",
  "Sevrer, substituer, hospitaliser, suivre",
  "Interdire, contrôler, sanctionner, surveiller"],
 0,
 "Les 4 étapes : Restituer les résultats (quantifier, expliquer), Informer (risque, verre standard), Conseiller (limites, objectif de changement), Encourager (soutien, garder le lien, suivi).");

Q("assuetudes",
 "Le travail en réseau dans l'accompagnement des assuétudes :",
 ["Vise à se débarrasser du patient",
  "Repose sur l'interdépendance et la valeur ajoutée collective, en gardant le lien",
  "Exclut la 1re ligne",
  "Est réservé aux cas d'overdose"],
 1,
 "Travail en réseau : interdépendance, valeur ajoutée collective. Réorienter oui, mais en gardant le lien et le suivi.");

// ========== COLLABORATION MÉDECIN–PHARMACIEN (D. Lamy & M. Roucour) ==========
Q("pharmacien",
 "Les « soins pharmaceutiques » désignent :",
 ["La simple délivrance du médicament prescrit",
  "L'ensemble des conseils du pharmacien pour un usage effectif, sûr et efficace du médicament, afin de maintenir/améliorer la qualité de vie",
  "La fabrication industrielle des médicaments",
  "Le contrôle de la prescription par le médecin conseil"],
 1,
 "Soins pharmaceutiques = conseils pour que le patient prenne ses médicaments de manière effective, sûre et efficace, afin de conserver/améliorer sa qualité de vie.");

Q("pharmacien",
 "En quelle année la rémunération du pharmacien (médicaments remboursés) a-t-elle été dissociée du prix du médicament ?",
 ["2006", "2009", "2010", "2026"],
 2,
 "2010 : la rémunération est dissociée du prix → le pharmacien est rémunéré pour la PRESTATION de soins pharmaceutiques. (2006 : rôle inscrit dans la loi ; 2009 : AR + Guide des Bonnes Pratiques.)");

Q("pharmacien",
 "Dans la démarche QUIDAM – ANALYSE – DÉCISION – INFORMATION, l'étape « ANALYSE » correspond à :",
 ["L'identification du patient et de sa vulnérabilité",
  "La validation de la prescription (indication, CI, posologie, durée, interactions, doublons)",
  "Le choix de délivrer ou non",
  "L'explication des modalités de prise au patient"],
 1,
 "QUIDAM = qui/vulnérabilité ; ANALYSE = validation de la prescription (problème médical, indication, CI, posologie, durée, interactions, cascade, doublons) ; DÉCISION = délivrance ; INFORMATION = explications au patient.");

Q("pharmacien",
 "Le Dossier Pharmaceutique Partagé (DPP) couvre :",
 ["Uniquement les médicaments sur prescription",
  "Les médicaments prescrits ou non, les compléments alimentaires (si encodés) et les préparations magistrales",
  "Uniquement les médicaments remboursés",
  "Les seuls médicaments à marge thérapeutique étroite"],
 1,
 "Le DPP couvre médicaments prescrits OU non, compléments alimentaires encodés au nom du patient et préparations magistrales. Accès soumis au consentement du patient.");

Q("pharmacien",
 "Pour qu'un patient soit remboursé dans une officine inhabituelle, le pharmacien doit :",
 ["Disposer de la carte d'identité uniquement",
  "Pouvoir accéder à ses données / avoir un lien thérapeutique (DPP avec consentement)",
  "Appeler systématiquement le médecin traitant",
  "Refuser la délivrance"],
 1,
 "Il faut l'accès au DPP avec consentement (lien thérapeutique). La carte eID donne le statut d'assurabilité (BIM/AO) et la mutuelle, mais pas l'historique pharmaceutique.");

Q("pharmacien",
 "Le pharmacien de référence :",
 ["Tient à jour le schéma de médication du patient et a accès obligatoire au DPP",
  "Remplace le médecin traitant",
  "Ne peut pas communiquer avec le médecin",
  "Est désigné par la mutuelle"],
 0,
 "Le pharmacien de référence tient à jour le schéma de médication, a accès obligatoire au DPP (avec consentement) et peut transmettre une note dans le DMI du médecin.");

Q("pharmacien",
 "Les entretiens « Bon Usage du Médicament » (BUM) ciblent actuellement quelles pathologies ?",
 ["Diabète et HTA", "Asthme et BPCO", "Dépression et anxiété", "Insuffisance cardiaque et FA"],
 1,
 "Les entretiens BUM ciblent l'asthme et la BPCO (technique d'inhalation, observance), dans une logique d'éducation thérapeutique (empowerment).");

Q("pharmacien",
 "Quel est un critère d'éligibilité au bilan / revue de médication ?",
 ["Au moins 3 médicaments aigus",
  "Au moins 5 médicaments chroniques remboursés (+ pharmacien de référence et DPP)",
  "Être âgé de plus de 75 ans",
  "Être hospitalisé"],
 1,
 "Critères : patient ambulatoire, besoin de suivi particulier, ≥ 5 médicaments chroniques remboursés, pharmacien de référence + DPP. Encodage dans un e-Form envoyé au médecin.");

Q("pharmacien",
 "Concernant la vaccination antigrippale en officine (nouveauté 2026) :",
 ["Elle est interdite aux pharmaciens",
  "Le pharmacien formé peut prescrire, délivrer et administrer le vaccin grippe aux > 11 ans, sans ordonnance préalable",
  "Elle nécessite obligatoirement une ordonnance du médecin",
  "Elle est réservée aux > 65 ans"],
 1,
 "Depuis fin 2025, la vaccination antigrippale en officine est permanente : le pharmacien formé (min. 8 h, renouvelée tous les 3 ans) peut prescrire, délivrer et administrer le vaccin grippe aux > 11 ans, sans ordonnance.");

Q("pharmacien",
 "Le sevrage des benzodiazépines (BZDA) en pharmacie :",
 ["Se fait par arrêt brutal du jour au lendemain",
  "Se fait par arrêt progressif (entre 50 et 360 jours), patient ≥ 18 ans, sous prescription du médecin",
  "Est interdit en ambulatoire",
  "Ne nécessite aucun consentement"],
 1,
 "Sevrage progressif (50 à 360 jours), patient ambulatoire ≥ 18 ans, consentement eHealth, ≥ 1 BZDA/jour depuis ≥ 3 mois, préparation magistrale sous prescription. JAMAIS d'arrêt brutal après prise prolongée.");

Q("pharmacien",
 "Une benzodiazépine prescrite de façon prolongée :",
 ["Peut être arrêtée du jour au lendemain sans risque",
  "Doit faire l'objet d'un sevrage progressif (au besoin via une BZD à longue durée d'action)",
  "Ne pose aucun problème de dépendance",
  "Peut être prescrite sans limite de durée"],
 1,
 "Piège classique : « on peut arrêter du jour au lendemain » = FAUX. Sevrage progressif, au besoin via une BZD à longue durée d'action. Prescription limitée (~28 jours).");

Q("pharmacien",
 "La cascade médicamenteuse débute lorsque :",
 ["Deux médicaments interagissent par voie pharmacocinétique",
  "Un effet indésirable d'un médicament est interprété à tort comme un nouveau problème médical → 2e médicament",
  "On prescrit plus de 6 médicaments par jour",
  "Le patient oublie une prise"],
 1,
 "Cascade médicamenteuse : un EI d'un médicament est pris à tort pour un nouveau problème, conduisant à prescrire un 2e médicament, etc. Ex. oxybutynine → constipation → laxatif.");

Q("pharmacien",
 "Quelle association illustre une CASCADE médicamenteuse (et non une simple interaction) ?",
 ["Statine + ibuprofène", "IEC + furosémide", "Oxybutynine → laxatif (pour la constipation induite)", "Statine + AINS"],
 2,
 "Oxybutynine (anticholinergique) → constipation (EI) → laxatif = cascade. Les autres sont des interactions/associations, pas des cascades.");

Q("pharmacien",
 "Une interaction PHARMACOCINÉTIQUE (PK) se définit par :",
 ["Des effets qui s'additionnent (ex. allongement du QT)",
  "Une modification de l'ADME (ex. un inhibiteur du CYP3A4 qui réduit l'élimination d'un AOD)",
  "Une réaction allergique croisée",
  "Un surdosage volontaire"],
 1,
 "PK = modification de l'absorption/distribution/métabolisme/élimination (ex. inhibiteur CYP3A4/PgP ↓ élimination d'un AOD → risque de saignement). PD = effets qui s'additionnent (ex. QT).");

Q("pharmacien",
 "La durée approximative d'une interaction pharmacocinétique est de :",
 ["1 jour", "Environ 5 × la demi-vie de l'inhibiteur", "1 semaine fixe", "Variable mais toujours < 24 h"],
 1,
 "Durée ≈ 5 × T1/2 de l'inhibiteur. Ex. l'amiodarone (T1/2 très longue, 25-100 j) interagit plusieurs mois après l'arrêt.");

Q("pharmacien",
 "Un médicament est considéré comme quasi totalement éliminé après :",
 ["2 demi-vies", "5 à 7 demi-vies", "10 demi-vies", "1 demi-vie"],
 1,
 "Demi-vie (T1/2) = temps pour que la concentration plasmatique diminue de moitié ; élimination quasi totale après 5 à 7 T1/2.");

Q("pharmacien",
 "Parmi les facteurs de risque d'allongement du QT, lequel figure dans le cours ?",
 ["Homme jeune sportif", "Hyperkaliémie", "Femme, > 65 ans, hypokaliémie/hypoMg/hypoCa, bradycardie", "Hyperthyroïdie"],
 2,
 "Facteurs de risque de QT long / torsade : femme, > 65 ans, hypoK/hypoMg/hypoCa, bradycardie, hypothyroïdie, QT long préexistant.");

Q("pharmacien",
 "Concernant la pharmacovigilance, quelle proposition est VRAIE ?",
 ["Elle sert à dénoncer le médecin qui a mal prescrit",
  "Elle peut être notifiée par le médecin, le pharmacien, l'infirmier ou le patient ; on signale même un EI déjà connu",
  "Seuls les médecins peuvent notifier",
  "On ne signale que les effets indésirables avérés"],
 1,
 "Pharmacovigilance : notifiable par médecin/pharmacien/infirmier/patient ; bases EMA/OMS alimentées par les EI suspectés ET avérés ; signaler même un EI connu. Ce n'est pas un outil de dénonciation.");

Q("pharmacien",
 "Le « triangle noir inversé » sur la notice d'un médicament signifie :",
 ["Médicament dangereux interdit", "Médicament récent (< 5 ans) sous surveillance accrue", "Médicament remboursé à 100 %", "Médicament à éviter chez la personne âgée"],
 1,
 "Le triangle noir inversé = médicament récent (< 5 ans) faisant l'objet d'une surveillance accrue.");

Q("pharmacien",
 "Quels outils sont pertinents pour la déprescription chez la personne âgée ?",
 ["Échelles Katz et Fried",
  "Start & Stopp et GheOP3S",
  "Score de Glasgow",
  "La règle « maximum 6 médicaments par jour »"],
 1,
 "Déprescription/polymédication : Start & Stopp, GheOP3S. Piège : « max 6 médicaments/jour » n'est PAS un outil (seuil arbitraire). Katz/Fried évaluent autonomie/fragilité, pas la polymédication.");

Q("pharmacien",
 "La pharmacocinétique (ADME) correspond à :",
 ["Affinité – Distribution – Métabolisme – Effet",
  "Absorption – Distribution – Métabolisme (foie) – Élimination (reins/bile)",
  "Action – Dose – Marge – Efficacité",
  "Absorption – Diffusion – Mécanisme – Excrétion neuronale"],
 1,
 "ADME = Absorption, Distribution, Métabolisme (foie), Élimination (reins/bile).");

Q("pharmacien",
 "La biodisponibilité est définie comme :",
 ["La dose totale prescrite",
  "La fraction de la dose qui atteint la circulation systémique sous forme inchangée (et sa vitesse)",
  "La quantité métabolisée par le foie",
  "La demi-vie du médicament"],
 1,
 "Biodisponibilité = fraction de la dose atteignant la circulation systémique sous forme inchangée (et sa vitesse).");

Q("pharmacien",
 "Comment formaliser au mieux une collaboration médecin–patient–pharmacien face à un patient difficile (ex. surconsommation) ?",
 ["Par un signalement à la police",
  "Par une « convention » écrite médecin–patient–pharmacien, signée par chacun",
  "Par un arrêt unilatéral de toute délivrance",
  "Par une note dans le seul dossier du médecin"],
 1,
 "Convention écrite médecin–patient–pharmacien, signée par chacun : outil thérapeutique et référence face à un comportement difficile. Autres outils : CMP, RPIB, décision partagée.");

Q("pharmacien",
 "À molécule de marge thérapeutique étroite équivalente, le pharmacien doit être particulièrement vigilant chez :",
 ["Le patient jeune en bonne santé",
  "Le patient âgé / insuffisant rénal / polymédiqué",
  "Le patient sportif",
  "Le patient ne prenant qu'un seul médicament"],
 1,
 "Index thérapeutique étroit : adaptation de dose si insuffisance rénale, vigilance aux erreurs de prise, nombreuses interactions, attention au patient âgé/IR/polymédiqué.");

Q("pharmacien",
 "Recip-e (prescription électronique) :",
 ["Est envoyée directement dans une officine précise désignée par le médecin",
  "Est récupérée par la pharmacie choisie par le patient (message non adressé, crypté)",
  "Supprime tout risque de fraude",
  "Ne transite pas par la plateforme eHealth"],
 1,
 "Recip-e : message non adressé, crypté, via eHealth ; récupéré par le prestataire CHOISI par le patient. Piège : elle n'est PAS « envoyée directement » dans une officine précise.");

Q("pharmacien",
 "Détectable via le DPP, un exemple de SURCONSOMMATION cité est :",
 ["L'abus d'antalgiques/antimigraineux entraînant des céphalées (céphalées par abus médicamenteux)",
  "La prise d'une statine le soir",
  "L'usage d'un IEC chez l'hypertendu",
  "La vaccination antigrippale"],
 0,
 "Le DPP détecte la surconsommation : céphalées par abus d'antalgiques/antimigraineux, abus de laxatifs (déshydratation, hypoK, atteinte rénale). Usage détourné possible (codéine + antihistaminique + soda).");

// ========== LA RECHERCHE EN MÉDECINE GÉNÉRALE (M. Boullé & V. Letocart) ==========
Q("recherche",
 "Selon la définition WONCA (2002), la médecine générale est :",
 ["Une simple pratique de soins sans fondements scientifiques",
  "Une discipline scientifique et universitaire à part entière, orientée vers les soins primaires",
  "Une spécialité hospitalière de 3e ligne",
  "Une branche de la santé publique uniquement"],
 1,
 "WONCA 2002 : la MG est une discipline scientifique et universitaire, avec son contenu de formation, de recherche, de pratique clinique et ses propres fondements ; spécialité clinique orientée vers les soins primaires.");

Q("recherche",
 "Quelles sont les 3 dimensions fondamentales de la MG (au-delà des compétences) ?",
 ["Diagnostique, thérapeutique, préventive",
  "Contextuelle, comportementale, scientifique",
  "Biologique, psychologique, sociale",
  "Clinique, technique, administrative"],
 1,
 "Les 3 dimensions : contextuelle (contexte de la personne/famille/communauté), comportementale (valeurs et éthique), scientifique (approche critique fondée sur la recherche).");

Q("recherche",
 "Parmi les 6 compétences fondamentales du médecin généraliste (arbre WONCA), laquelle figure ?",
 ["Gestion des soins de santé primaires",
  "Maîtrise de la chirurgie",
  "Gestion administrative hospitalière",
  "Recherche fondamentale en laboratoire"],
 0,
 "Les 6 compétences WONCA : gestion des soins primaires, soins centrés sur la personne, aptitude à la résolution de problèmes, approche globale, orientation communautaire, modèle holistique.");

Q("recherche",
 "Selon Ian McWhinney, la médecine générale se distingue car elle est la seule discipline qui :",
 ["Se définit en termes de relations (médecin-malade) et pense en termes de patients individuels",
  "S'occupe d'un seul organe",
  "Refuse l'incertitude",
  "Ne repose sur aucune métaphore"],
 0,
 "McWhinney : la MG se définit en termes de relations, pense en termes de patients individuels, repose sur une métaphore organismique, transcende le dualisme corps-esprit, opère au plus haut niveau de complexité et d'incertitude.");

Q("recherche",
 "Qui est considéré comme le « père de l'Evidence-Based Medicine » et promoteur de l'essai clinique randomisé ?",
 ["Robert Koch", "James Herrick", "Archie Cochrane", "Edgar Hope-Simpson"],
 2,
 "Archie Cochrane (médecin de camp) = père de l'EBM et promoteur de l'essai clinique randomisé.");

Q("recherche",
 "Edgar Hope-Simpson, généraliste, a contribué à la science par :",
 ["La découverte de l'anémie falciforme",
  "L'étude de la nature du zona via un suivi longitudinal de 16 ans (épidémiologie clinique)",
  "La naissance de la microbiologie clinique",
  "Le premier essai randomisé"],
 1,
 "Hope-Simpson : nature du zona, cohorte/suivi longitudinal de 16 ans → épidémiologie clinique. (Koch = microbiologie ; Herrick = anémie falciforme ; Cochrane = essai randomisé.)");

Q("recherche",
 "La méthode expérimentale (hypothético-déductive) débute par :",
 ["Une conclusion", "Une observation", "Une expérience", "Une hypothèse"],
 1,
 "Les 8 étapes : Observation → Problème → Hypothèse → Conséquence → Expérience → Résultat → Interprétation → Conclusion.");

Q("recherche",
 "L'approche épistémologique POSITIVISTE correspond à :",
 ["La recherche qualitative (construction du sens)",
  "La recherche quantitative (réalité décrite par des propriétés mesurables, variables quantifiables)",
  "Une absence de méthode",
  "La seule analyse documentaire"],
 1,
 "Positiviste = la réalité est décrite par des propriétés mesurables → recherche quantitative. Interprétatif = compréhension par les constructions sociales → recherche qualitative.");

Q("recherche",
 "Concernant l'association statistique et la causalité :",
 ["Une association statistique implique toujours un lien de cause à effet",
  "Une association statistique n'implique pas un lien de cause à effet",
  "La causalité ne s'évalue jamais",
  "Toute corrélation est causale en MG"],
 1,
 "Attention : une association statistique n'implique PAS un lien de cause à effet.");

Q("recherche",
 "Quelle est la différence entre étude de COHORTE et étude CAS-TÉMOINS ?",
 ["La cohorte part de l'exposition et suit la survenue (prospective) ; le cas-témoins part de la maladie et regarde l'exposition (souvent rétrospective)",
  "Elles sont identiques",
  "La cohorte est toujours rétrospective",
  "Le cas-témoins est une étude interventionnelle"],
 0,
 "Cohorte : part de l'exposition → suit la survenue (prospectif). Cas-témoins : part de la maladie → regarde l'exposition (souvent rétrospectif). Toutes deux sont analytiques.");

Q("recherche",
 "Quel type d'étude se situe au sommet du niveau de preuve ?",
 ["L'étude de cas",
  "La revue systématique / méta-analyse (recherche secondaire)",
  "L'opinion d'expert",
  "L'étude transversale"],
 1,
 "Revue systématique / méta-analyse = recherche secondaire, au sommet du niveau de preuve.");

Q("recherche",
 "L'essai clinique randomisé appartient à la catégorie des études :",
 ["Qualitatives", "Quantitatives descriptives", "Quantitatives analytiques", "Quantitatives interventionnelles"],
 3,
 "L'ECR (conventionnel, adaptatif, pragmatique) est une étude quantitative INTERVENTIONNELLE.");

Q("recherche",
 "Lequel de ces outils sert à formuler une question de recherche ?",
 ["ADME", "PICO (Population, Intervention, Comparateur, Outcome)", "FRAMES", "ICPC-3"],
 1,
 "Pour formuler la question de recherche : QQOQCCP et PICO (Population, Intervention, Comparateur, Outcome).");

Q("recherche",
 "La méthode Delphi et le groupe nominal sont des méthodes :",
 ["Qualitatives pures", "Semi-quantitatives", "Interventionnelles", "Médico-économiques"],
 1,
 "Delphi et groupe nominal = méthodes semi-quantitatives.");

Q("recherche",
 "Le « carré de White » illustre que :",
 ["La majorité des problèmes de santé se gèrent en ambulatoire / 1re ligne, alors que les moyens de recherche n'y sont pas proportionnels",
  "La majorité des soins sont hospitaliers",
  "La recherche en MG est inutile",
  "Tous les patients consultent un spécialiste"],
 0,
 "Carré de White : la plupart des problèmes de santé se gèrent en ambulatoire/1re ligne, mais les moyens de recherche y sont sous-proportionnés.");

Q("recherche",
 "L'ICPC-3 est :",
 ["La Classification Internationale des Maladies (CIM)",
  "Une classification des soins primaires centrée sur le patient (soutenue par la WONCA)",
  "Un score de fragilité",
  "Un outil de pharmacovigilance"],
 1,
 "ICPC-3 (International Classification of Primary Care, WONCA) : nomenclature centrée sur le patient, adaptée à la consultation de MG, distincte de la CIM.");

Q("recherche",
 "La prévention QUATERNAIRE (M. Jamoulle, 1995) consiste à :",
 ["Vacciner la population",
  "Identifier un patient à risque de surmédicalisation et le protéger d'interventions invasives inutiles",
  "Dépister précocement les cancers",
  "Réadapter après une maladie"],
 1,
 "Prévention quaternaire = identifier un patient/population à risque de SURMÉDICALISATION, le protéger d'interventions invasives et proposer des soins éthiquement acceptables. Ex. éviter un scanner pour une lombalgie sans red flags.");

Q("recherche",
 "Un exemple de prévention quaternaire est :",
 ["Prescrire un scanner pour toute lombalgie",
  "Déprescrire chez la personne âgée / éviter un dépistage non ciblé",
  "Augmenter le nombre de consultations",
  "Multiplier les examens de routine"],
 1,
 "Exemples : éviter un scanner pour une lombalgie commune sans red flags, déprescrire chez la personne âgée, éviter un dépistage non ciblé. La prévention quaternaire lutte contre la surmédicalisation.");

Q("recherche",
 "Parmi les critères d'un dépistage utile, lequel figure ?",
 ["Maladie rare et bénigne",
  "Maladie fréquente et grave, avec traitement d'efficacité démontrée disponible",
  "Test coûteux et invasif obligatoire",
  "Absence de phase latente détectable"],
 1,
 "Critères : maladie fréquente ET grave, traitement efficace disponible, moyens de diagnostic/traitement disponibles, coût acceptable, test acceptable/fiable, phase latente détectable.");

Q("recherche",
 "Les trois orientations de la recherche en MG sont :",
 ["Recherche EN, PAR et SUR la médecine générale",
  "Recherche fondamentale, clinique et translationnelle",
  "Recherche publique, privée et mixte",
  "Recherche locale, nationale et internationale"],
 0,
 "Trois orientations : recherche EN médecine générale, PAR les médecins généralistes, et SUR la médecine générale.");

Q("recherche",
 "L'Observatoire de la médecine générale permet :",
 ["Le contrôle des prescriptions par l'INAMI",
  "Le recueil informatisé et longitudinal des données d'exercice (portrait quantitatif/qualitatif)",
  "La gestion des pensions des médecins",
  "L'accréditation des hôpitaux"],
 1,
 "Observatoire de la MG : recueil informatisé et longitudinal des données d'exercice → portrait quantitatif/qualitatif et théorisation de l'exercice.");

Q("recherche",
 "Quel jalon historique de la MG en Belgique est correct ?",
 ["1952 : création de l'INAMI",
  "1968 : création de la Société Scientifique de Médecine Générale (SSMG)",
  "2009 : interdiction de la recherche en MG",
  "2018 : suppression du Collège de Médecine Générale"],
 1,
 "1968 : SSMG. 1952 : College of General Practitioners (UK). Depuis 2009 : intégration académique (CAMG). 2018 : Collège de Médecine Générale.");

Q("recherche",
 "Le « point-of-care testing » désigne :",
 ["Un test réalisé uniquement en laboratoire hospitalier",
  "Des technologies de test ambulatoires intégrées au trajet de soins",
  "Un type de méta-analyse",
  "Une classification des maladies"],
 1,
 "Point-of-care testing : technologies ambulatoires intégrées au trajet de soins (test au plus près du patient).");

Q("recherche",
 "Parmi les impacts concrets de la recherche en MG (Rev Med Suisse 2025), lequel est cité ?",
 ["Le TIF bisannuel est non inférieur à la coloscopie pour le dépistage du cancer colorectal",
  "La coloscopie annuelle obligatoire pour tous",
  "L'aspirine systématiquement supérieure au clopidogrel",
  "Les bêtabloquants obligatoires après tout IDM"],
 0,
 "Exemples cités : TIF bisannuel non inférieur à la coloscopie ; clopidogrel > aspirine en prévention secondaire ; bêtabloquants après IDM sans bénéfice établi si FEVG préservée.");

// ========== LE MG ET LES PLAINTES LIÉES AU SPORT (Y. Fathallah & J.-M. Feron) ==========
Q("sport",
 "Concernant le dépistage cardiaque systématique du jeune sportif asymptomatique (< 35 ans) :",
 ["Il est recommandé chez tous les sportifs",
  "Il n'est pas recommandé : la balance bénéfice-risque est négative avant 35 ans (KCE)",
  "Il repose sur un ECG d'effort annuel obligatoire",
  "Il réduit nettement la mortalité"],
 1,
 "KCE 2015 : pas de dépistage cardiaque systématique chez le jeune sportif asymptomatique (< 35 ans), balance bénéfice-risque négative. Ni l'interrogatoire + examen, ni l'ECG de repos ne sont assez sensibles/spécifiques.");

Q("sport",
 "La mort subite cardiaque touche surtout :",
 ["Les jeunes sportifs de moins de 20 ans",
  "Des sujets d'âge mûr déjà cardiaques (le plus souvent un infarctus)",
  "Les femmes de moins de 35 ans",
  "Les enfants asthmatiques"],
 1,
 "La mort subite cardiaque (~10 000/an en Belgique) touche surtout des sujets d'âge mûr déjà cardiaques. Chez le jeune sportif < 35 ans elle est très rare (≤ 10/million/an).");

Q("sport",
 "Le dépistage cardiaque systématique du jeune sportif génère :",
 ["Aucun faux positif", "Beaucoup de faux positifs (5-30 %) → examens et traitements superflus", "Une réduction de la morbidité", "Uniquement des bénéfices"],
 1,
 "Un tel dépistage génère 5-30 % de faux positifs → examens et traitements superflus, parfois risqués.");

Q("sport",
 "Chez un patient de ≥ 40-50 ans souhaitant reprendre le sport, la conduite recommandée est :",
 ["Aucune évaluation",
  "Évaluation globale du risque cardiovasculaire (SCORE2) ; bilan si symptômes ou risque élevé",
  "ECG d'effort systématique pour tous",
  "Interdiction du sport"],
 1,
 "≥ 40-50 ans : évaluer le risque CV (SCORE2). Si faible et asymptomatique → rassurer ; si symptômes ou risque élevé → bilan cardiaque. Attention particulière à la reprise après 40 ans.");

Q("sport",
 "Le concept « Exercise as medicine » signifie que l'activité physique :",
 ["N'a d'effet que sur le poids",
  "A un effet prouvé dans de nombreuses maladies chroniques (~26) et est une thérapeutique à part entière",
  "Est dangereuse après 50 ans",
  "Ne remplace jamais aucun traitement"],
 1,
 "« Exercise as medicine » : effet prouvé dans ~26 maladies chroniques. Après 50 ans, lutte contre sarcopénie, presbyataxie, isolement, baisse de VO2 max.");

Q("sport",
 "Chez un patient atteint de cancer, l'activité physique :",
 ["Doit être évitée (repos systématique)",
  "Réduit la fatigue liée au cancer, la mortalité et la récidive (effet dose-réponse)",
  "Augmente le risque de récidive",
  "N'a aucun effet démontré"],
 1,
 "L'AP réduit la fatigue, le risque de certains cancers (sein, côlon, endomètre : −20 à 30 %), la mortalité et la récidive (−30 à 40 % : sein, côlon, prostate).");

Q("sport",
 "Parmi les contre-indications à l'activité physique chez le patient cancéreux, laquelle est correcte ?",
 ["Hémoglobine > 12 g/dl", "Neutropénie sévère < 500/mm³", "Plaquettes > 100 000/mm³", "Température 37 °C"],
 1,
 "CI : neutropénie sévère (< 500/mm³), anémie (Hb < 9,5 g/dl), thrombopénie (< 20 000/mm³), fièvre > 38 °C, métastases osseuses. Reporter de 24 h après signes infectieux.");

Q("sport",
 "Chez le diabétique, avant un effort, si la glycémie capillaire est < 6-8 mmol/L (≈ 109-145 mg/dl), il faut :",
 ["Faire l'effort sans précaution",
  "Prendre ≥ 15 g de glucides",
  "Reporter systématiquement l'effort",
  "Injecter de l'insuline"],
 1,
 "< 6-8 mmol/L → prendre ≥ 15 g de glucides ; 8-14 mmol/L → OK ; > 15 mmol/L → vérifier l'absence de cétonurie. On diminue aussi l'insuline (50-75 %) couvrant la période.");

Q("sport",
 "Quelle est une contre-indication à l'effort chez le diabétique ?",
 ["Glycémie à 150 mg/dl",
  "Hyperglycémie > 250 mg/dl avec cétonurie (ou > 300 sans), ou glycémie < 127 mg/dl",
  "HbA1c à 7 %",
  "Tension artérielle normale"],
 1,
 "CI : reporter si hyperglycémie > 250 mg/dl + cétonurie (ou > 300 sans) ou glycémie < 127 mg/dl. Prudence si HTA non contrôlée, rétinopathie proliférative, neuropathie.");

Q("sport",
 "Un enfant asthmatique souhaite s'inscrire dans un club sportif. Que conseiller ?",
 ["Lui interdire le sport",
  "L'autoriser : l'AP améliore le contrôle de l'asthme, la qualité de vie et la fonction pulmonaire",
  "Limiter le sport à 10 min/semaine",
  "Exiger un bilan cardiaque annuel"],
 1,
 "L'asthme n'est pas une CI au sport : l'AP améliore le contrôle de l'asthme, la qualité de vie et la fonction pulmonaire. Aucune étude ne montre d'aggravation.");

Q("sport",
 "L'activité physique régulière sur les infections respiratoires :",
 ["Les augmente toujours",
  "Les réduit (−40 %), mais attention à la « courbe en J » (l'excès d'intensité affaiblit l'immunité)",
  "N'a aucun effet",
  "Doit être évitée en cas d'infections fréquentes"],
 1,
 "L'AP régulière réduit les infections respiratoires (−40 %), mais la « courbe en J » montre qu'un excès d'intensité affaiblit l'immunité.");

Q("sport",
 "Pour prévenir les blessures de surcharge, l'augmentation de la charge d'entraînement doit être limitée à :",
 ["< 50 % par semaine", "< 10 % par semaine (ratio charge aiguë:chronique 0,8-1,3)", "Aucune limite", "< 30 % par jour"],
 1,
 "Gestion de la charge : limiter l'augmentation à < 10 %/semaine (ou ratio charge aiguë:chronique entre 0,8 et 1,3). Facteur de risque majeur et modifiable.");

Q("sport",
 "Le « syndrome de l'essuie-glace » (bandelette ilio-tibiale) se caractérise par :",
 ["Une douleur antérieure du genou dans les escaliers",
  "Une douleur de la face LATÉRALE du genou à l'effort (pathologie du coureur, diagnostic clinique)",
  "Une douleur du tendon d'Achille",
  "Une instabilité de cheville"],
 1,
 "Syndrome de l'essuie-glace : douleur face LATÉRALE du genou à l'effort, pathologie du coureur, diagnostic clinique, traitement conservateur.");

Q("sport",
 "Le syndrome fémoropatellaire se manifeste par :",
 ["Une douleur ANTÉRIEURE du genou (escaliers, squats), fréquent chez l'adolescente",
  "Une douleur latérale du genou",
  "Une rougeur et un épanchement aigus",
  "Une douleur nocturne du mollet"],
 0,
 "Syndrome fémoropatellaire : douleur antérieure du genou (escaliers, squats), fréquent chez l'adolescente ; imagerie peu utile ; rééducation / renforcement du quadriceps.");

Q("sport",
 "Pour la gonarthrose du sportif (stades légers-modérés), le cours cite comme options :",
 ["Le repos strict et l'arrêt définitif du sport",
  "L'exercice thérapeutique, la viscosupplémentation (acide hyaluronique) et le PRP",
  "Une prothèse d'emblée",
  "Des corticoïdes oraux au long cours"],
 1,
 "Gonarthrose du sportif : exercice thérapeutique (prévient la dégénérescence, réduit la douleur) ; stades légers-modérés : viscosupplémentation (acide hyaluronique) et PRP (plasma riche en plaquettes).");

Q("sport",
 "Concernant l'entorse de cheville récidivante, la rééducation repose surtout sur :",
 ["L'immobilisation prolongée",
  "La proprioception, la force et la coordination (la récupération proprioceptive est plus lente que la consolidation ligamentaire)",
  "Le seul renforcement du quadriceps",
  "L'arrêt définitif du sport"],
 1,
 "Entorse de cheville : rééducation par proprioception, force, coordination. La récupération proprioceptive est plus lente que la consolidation ligamentaire → d'où les récidives.");

Q("sport",
 "La maladie d'Osgood-Schlatter (apophysite) :",
 ["Touche surtout l'adulte de plus de 50 ans",
  "Est une maladie de surmenage de l'enfant sportif ; repos sportif sélectif 3-6 mois, reprise sur l'absence de douleur",
  "Nécessite une chirurgie systématique",
  "Se traite par corticoïdes"],
 1,
 "Osgood-Schlatter : apophysite de l'enfant sportif (fille ~11 ans, garçon ~13 ans), maladie de surmenage ; repos sportif sélectif 3-6 mois ; reprise sur l'ABSENCE de douleur (pas sur l'imagerie).");

Q("sport",
 "Chez l'adolescent qui « ne sait pas courir », la cause la plus fréquente de dyspnée d'effort est :",
 ["L'asthme d'effort", "Le déconditionnement", "Une cardiopathie", "Une anémie sévère"],
 1,
 "Causes par fréquence : déconditionnement, anxiété, asthme d'effort, obstruction laryngée induite par l'effort.");

Q("sport",
 "Quel outil sert à évaluer le niveau d'activité physique et doit figurer dans le DMI (AR 2024) ?",
 ["Le GPAQ (Global Physical Activity Questionnaire, OMS)",
  "Le score de Tinetti",
  "Le questionnaire AUDIT",
  "L'échelle de Katz"],
 0,
 "GPAQ (OMS), auto-administrable, 3 niveaux (faible, modéré = reco minimales, élevé). Le niveau d'AP doit figurer dans le DMI (AR du 25/05/2024).");

Q("sport",
 "L'Agence Mondiale Antidopage (AMA/WADA), créée en 1999 :",
 ["Est financée à 100 % par le CIO",
  "Coordonne la lutte antidopage (financée 50 % CIO, 50 % États) ; l'ONAD applique le Code localement",
  "Délivre directement les AUT",
  "Ne publie pas de liste d'interdictions"],
 1,
 "AMA/WADA (1999) coordonne la lutte antidopage, financée 50 % CIO / 50 % États. La liste des interdictions est mise à jour annuellement (1er janvier). L'ONAD applique le Code localement.");

Q("sport",
 "Les glucocorticoïdes (corticoïdes) sont, en dopage :",
 ["Interdits en permanence (S5)",
  "Interdits en compétition (S9) ; une infiltration est possible si réalisée > 3 jours avant la compétition",
  "Toujours autorisés",
  "Des bêta-2 agonistes"],
 1,
 "Glucocorticoïdes = S9, interdits EN COMPÉTITION. Une infiltration est possible si réalisée > 3 jours avant la compétition (sinon AUT).");

Q("sport",
 "Le salbutamol (Ventolin) inhalé chez un coureur amateur :",
 ["Est totalement interdit",
  "Est autorisé sous seuil (jusqu'à ~2 bouffées toutes les 6 h, ≈ 4×/24 h)",
  "Nécessite toujours une AUT",
  "Est un anabolisant interdit en permanence"],
 1,
 "Le salbutamol inhalé est autorisé SOUS SEUIL : jusqu'à 2 bouffées/6 h (~4×/24 h, ≈ 1600 µg/24 h). Au-delà → contrôle positif.");

Q("sport",
 "L'acétazolamide (Diamox), demandé contre le mal aigu des montagnes chez un sportif, est :",
 ["Autorisé sans restriction",
  "Interdit en permanence (S5, diurétique/agent masquant) → nécessite une AUT",
  "Un stimulant interdit seulement en compétition",
  "Un glucocorticoïde"],
 1,
 "L'acétazolamide est S5 (diurétique/agent masquant), INTERDIT EN PERMANENCE → il faut une AUT.");

Q("sport",
 "Le dopage correspond à combien de types de violations possibles ?",
 ["Une seule (présence d'une substance)",
  "11 violations (usage, contrôles manqués, possession, trafic, complicité...)",
  "3 violations",
  "Aucune depuis 2020"],
 1,
 "Le dopage = 11 violations possibles (pas seulement la présence) : usage, soustraction au contrôle, contrôles manqués, falsification, possession, trafic, administration, complicité, association, représailles. Depuis 2020, le sport « libre » peut aussi être contrôlé.");

Q("sport",
 "Que peut attester un certificat de non-contre-indication au sport ?",
 ["L'absence de tout risque cardiaque",
  "« Pas de contre-indication apparente à la pratique d'un sport » (sans garantir l'absence de tout risque)",
  "L'aptitude au haut niveau",
  "La nécessité d'un ECG systématique"],
 1,
 "Le médecin atteste « pas de contre-indication apparente à la pratique d'un sport » : il ne garantit pas l'absence de tout risque, et il n'y a pas d'ECG systématique chez le jeune asymptomatique.");

// ========== ONE HEALTH : MÉDECINE & ENVIRONNEMENT (de Rouffignac, Verstraete, Breda) ==========
Q("onehealth",
 "Décider d'une prescription, selon le cours, c'est mettre en balance :",
 ["Uniquement l'efficacité du médicament",
  "Le coût, les préférences du patient, l'empreinte carbone, l'écotoxicité, l'éthique, le grade de reco, les interactions et les alternatives",
  "Seulement le prix pour la sécurité sociale",
  "Uniquement les interactions médicamenteuses"],
 1,
 "Une prescription engage bien plus que l'efficacité : coût (patient + sécurité sociale), préférences, empreinte carbone, écotoxicité, éthique, grade, interactions, alternatives (médicamenteuses ou non).");

Q("onehealth",
 "Imposer un dispositif « moins polluant » sans tenir compte du patient peut :",
 ["Améliorer systématiquement l'adhérence",
  "Nuire (culpabilité, mauvaise utilisation, baisse de compliance, exacerbations)",
  "Être sans conséquence",
  "Supprimer toute exacerbation"],
 1,
 "Aucun type d'inhalateur ne favorise clairement l'adhérence (~1/3 non adhérents). Imposer un dispositif peut nuire → privilégier la décision partagée, pas le paternalisme.");

Q("onehealth",
 "Le secteur de la santé représente environ quelle part de l'empreinte carbone nationale ?",
 ["~2 %", "~8 %", "~25 %", "~50 %"],
 1,
 "Le secteur de la santé ≈ 8 % de l'empreinte carbone nationale (chiffre Shift Project 2021, probablement sous-estimé).");

Q("onehealth",
 "Quel est le 1er poste d'émissions de gaz à effet de serre du secteur de la santé ?",
 ["Les transports des patients",
  "L'achat des médicaments et dispositifs médicaux (~54 %)",
  "Le chauffage des hôpitaux",
  "L'alimentation"],
 1,
 "Plus de 85 % d'émissions indirectes ; l'achat des médicaments et dispositifs médicaux représente ~54 % des GES = 1er poste.");

Q("onehealth",
 "Concernant les inhalateurs DPI (poudre sèche) vs pMDI (aérosols-doseurs) :",
 ["Le DPI est moins efficace que le pMDI",
  "Le DPI est aussi efficace que le pMDI mais moins polluant (à éviter chez l'enfant < 5 ans ou si capacité inspiratoire fortement diminuée)",
  "Le pMDI est moins polluant",
  "Le DPI est interdit en Belgique"],
 1,
 "Efficacité DPI = pMDI (fond et exacerbations) ; le DPI est moins polluant, mais à éviter chez l'enfant < 5 ans ou si la capacité inspiratoire est fortement diminuée (CBIP). Remplacer un pMDI par un DPI ≈ devenir végétarien (~−420 kgCO2/an).");

Q("onehealth",
 "Quelles classes de médicaments sont les plus à risque pour l'environnement (écotoxicité) ?",
 ["Vitamines et minéraux",
  "Hormones, antalgiques, antibiotiques, anticancéreux, antidépresseurs",
  "Sérums physiologiques",
  "Pansements"],
 1,
 "Classes à risque : hormones, antalgiques, antibiotiques, anticancéreux, antidépresseurs ; effets même à très faibles concentrations. Les stations d'épuration ne filtrent pas ces micropolluants.");

Q("onehealth",
 "Que signifie le score PBT en écotoxicité ?",
 ["Pharmacocinétique – Biodisponibilité – Toxicité",
  "Persistance – Bioaccumulation – Toxicité",
  "Prévention – Bénéfice – Traitement",
  "Pollution – Biologie – Tératogénicité"],
 1,
 "Outils d'écotoxicité : score PBT (Persistance, Bioaccumulation, Toxicité) / HAZARD.");

Q("onehealth",
 "Les 3 piliers du développement durable (« 3 P ») sont :",
 ["People, Planet, Profit",
  "Prevention, Patient, Practice",
  "Power, Politics, Profit",
  "People, Pharma, Planet"],
 0,
 "Développement durable = 3 P : People, Planet, Profit. De la RSE (responsabilité sociale des entreprises) à la RSS (responsabilité sociale en santé).");

Q("onehealth",
 "La « théorie du Donut » (K. Raworth) décrit :",
 ["Un modèle de financement hospitalier",
  "Un espace « sûr et juste » entre un plancher social et un plafond environnemental",
  "Une classification des médicaments",
  "Une échelle de fragilité"],
 1,
 "Théorie du Donut (Raworth) : un espace sûr et juste entre un plancher social et un plafond environnemental.");

Q("onehealth",
 "Selon la Commission Lancet (2015), lutter contre le changement climatique pourrait être :",
 ["Sans rapport avec la santé",
  "« La plus grande opportunité du 21e siècle pour la santé mondiale »",
  "Une menace pour la médecine",
  "Réservé aux pays riches"],
 1,
 "Commission Lancet (2015) : lutter contre le changement climatique pourrait être « la plus grande opportunité du 21e siècle pour la santé mondiale ».");

Q("onehealth",
 "Les « 4R » de l'action en santé durable, par ordre de PRIORITÉ, sont :",
 ["Recycler – Réduire – Remplacer – Repenser",
  "Réduire – Remplacer – Recycler (et Repenser)",
  "Remplacer – Recycler – Réduire",
  "Repenser – Recycler – Remplacer – Réduire"],
 1,
 "Les 4R par ordre de priorité : Réduire (prioritaire : agir sur les besoins/demandes/réponses) – Remplacer – Recycler (et Repenser).");

Q("onehealth",
 "À molécule équivalente, en termes de santé durable, on préférera :",
 ["Le diclofénac (plus écotoxique)",
  "L'ibuprofène plutôt que le diclofénac (moins écotoxique)",
  "L'option la moins chère uniquement",
  "Le médicament le plus récent"],
 1,
 "À molécule équivalente, préférer l'option la moins nocive pour l'environnement : ex. ibuprofène plutôt que diclofénac (plus écotoxique).");

Q("onehealth",
 "La déprescription de médicaments inutiles (surtout chez la personne âgée) :",
 ["Augmente l'empreinte carbone",
  "Rejoint la prévention quaternaire et la sobriété",
  "Est contre-indiquée en santé durable",
  "Concerne uniquement les antibiotiques"],
 1,
 "La déprescription rejoint la prévention quaternaire et la sobriété : « un soin qui ne consomme pas est un soin qui n'existe pas », en gardant l'adéquation.");

Q("onehealth",
 "Le gaz propulseur HFA-152a (innovation pour inhalateurs) :",
 ["A un pouvoir de réchauffement 10-30× MOINDRE que les propulseurs actuels",
  "Est 10× plus polluant",
  "Est interdit",
  "N'a aucun intérêt environnemental"],
 0,
 "HFA-152a : nouveau gaz propulseur au pouvoir de réchauffement 10-30× moindre.");

Q("onehealth",
 "Pour une simple IVRS (rhume), une « ordonnance de confort » (~53 €) équivaut environ à :",
 ["~5 kg de CO2", "~53 kg de CO2 (≈ 10 L de diesel)", "~500 kg de CO2", "Aucune émission"],
 1,
 "IVRS : ordonnance de confort ≈ 53 € ≈ 53 kg CO2 ≈ 10 L de diesel. Alternatives : boissons chaudes, miel, paracétamol au besoin, sérum physiologique.");

Q("onehealth",
 "Que recouvre l'idée de concepts « emboîtés » en santé environnementale ?",
 ["One Health, santé planétaire, santé globale, santé publique — l'environnement et la santé sont interdépendants",
  "Une hiérarchie des spécialités médicales",
  "Les niveaux de soins (1re, 2e, 3e ligne)",
  "Les régimes de sécurité sociale"],
 0,
 "Concepts emboîtés : One Health, santé planétaire, santé globale, santé publique. L'environnement et la santé sont interdépendants.");

Q("onehealth",
 "Les « discours de l'inaction » regroupent des arguments-types tels que :",
 ["« On est là pour soigner », « on manque de temps/argent », « on a toujours fait comme ça »",
  "Des recommandations de bonne pratique",
  "Des protocoles de déprescription",
  "Les critères de Fried"],
 0,
 "11 arguments-types de l'inaction : « on est là pour soigner », « on manque de temps/argent », « on a toujours fait comme ça »... → à connaître pour s'en méfier.");

Q("onehealth",
 "Concernant l'antibiorésistance :",
 ["C'est un problème mineur et localisé",
  "C'est un enjeu mondial majeur (prévisions du Lancet à l'horizon 2050), se propageant jusque dans des zones reculées",
  "Elle ne concerne pas la santé environnementale",
  "Elle disparaît avec de nouveaux antibiotiques"],
 1,
 "Antibiorésistance : enjeu mondial majeur (prévisions du Lancet à l'horizon 2050), propagation jusque dans des zones reculées.");

Q("onehealth",
 "Pourquoi des médicaments se retrouvent-ils dans l'eau (écotoxicité) ?",
 ["Uniquement par fabrication industrielle",
  "Gaspillage : conditionnements trop grands, faible adhérence, péremption courte ; les STEP ne filtrent pas ces micropolluants",
  "Parce qu'ils sont biodégradables",
  "Cela n'arrive jamais"],
 1,
 "Gaspillage (conditionnements trop grands, faible adhérence, péremption courte) ; les stations d'épuration (STEP) ne filtrent pas ces micropolluants. ~14 % des médicaments vendus finissent à la poubelle.");

Q("onehealth",
 "L'EBP (Evidence-Based Practice) appliquée à l'environnement signifie surtout :",
 ["Multiplier les prescriptions",
  "Proposer des alternatives non médicamenteuses quand c'est possible (autonomisation du patient)",
  "Ignorer les recommandations",
  "Prescrire le médicament le plus cher"],
 1,
 "Proposer des alternatives non médicamenteuses quand c'est possible (autonomisation du patient) — l'EBP vaut aussi pour l'environnement. Suivre les recommandations, penser les durées, oser la déprescription.");

// ========== ORGANISATION DES SOINS DE SANTÉ (V. Letocart & F. Roucoux) ==========
Q("orga",
 "Le modèle belge de protection sociale est :",
 ["Uniquement assurantiel (Bismarck)",
  "Uniquement assistanciel (Beveridge)",
  "Mixte, à dominante assurantielle (Bismarck)",
  "Mixte, à dominante assistancielle (Beveridge)"],
 2,
 "La Belgique = système MIXTE à dominante BISMARCKIENNE (cotisations liées au travail), avec une forte composante beveridgienne (soins pour tous, aides sociales).");

Q("orga",
 "Le modèle de BISMARCK (assurance) se caractérise par :",
 ["Un financement par l'impôt général et une couverture universelle",
  "Un financement par cotisations sociales liées au travail, des droits liés aux cotisations",
  "Une gestion publique centralisée par l'État",
  "Une logique uniquement redistributive"],
 1,
 "Bismarck = cotisations sociales (liées au travail), caisses autonomes + régulation de l'État, droits liés au travail, logique contributive. Beveridge = impôt, universel, redistributif.");

Q("orga",
 "Le modèle de BEVERIDGE (assistance) repose sur :",
 ["Des cotisations liées au travail",
  "Un financement par l'impôt général et une couverture universelle (citoyenneté/résidence)",
  "Des caisses autonomes contributives",
  "Une couverture limitée aux travailleurs"],
 1,
 "Beveridge (R-U, 2e GM) : financement par l'impôt, droit universel (citoyenneté/résidence), logique uniforme et redistributive, toute la population.");

Q("orga",
 "Quelle affirmation sur les modèles Bismarck/Beveridge est FAUSSE ?",
 ["Bismarck = cotisations liées au travail",
  "Beveridge = couverture universelle financée par l'impôt",
  "Bismarck = couverture universelle ; Beveridge = assurantiel",
  "La Belgique est un système mixte"],
 2,
 "Inversion classique : « Bismarck = universel, Beveridge = assurantiel » est FAUX (c'est l'inverse).");

Q("orga",
 "En 1944, le Pacte social crée :",
 ["L'INAMI",
  "L'ONSS (organisme unique de perception et de redistribution des cotisations)",
  "FEDRIS",
  "Les mutuelles"],
 1,
 "28/12/1944 — Pacte social : création de l'ONSS, organisme unique de perception et de redistribution des cotisations (système obligatoire pour les salariés).");

Q("orga",
 "L'INAMI a été créé en 1964 (loi Leburton) suite à :",
 ["La fusion des mutuelles",
  "La séparation des soins de santé des autres branches de la sécurité sociale",
  "La 6e réforme de l'État",
  "La création de FEDRIS"],
 1,
 "1964 (loi Leburton) : séparation des soins de santé des autres branches → création de l'INAMI. 1967 : régime des indépendants.");

Q("orga",
 "Combien de branches compte la sécurité sociale belge ?",
 ["5", "6", "7", "10"],
 2,
 "7 branches : pensions (SFP), chômage (ONEM), accidents du travail (FEDRIS), maladies professionnelles (FEDRIS), prestations familiales (régions), soins de santé & invalidité (INAMI), vacances annuelles (ONVA).");

Q("orga",
 "FEDRIS est l'organisme compétent pour :",
 ["Les pensions",
  "Les accidents du travail et les maladies professionnelles",
  "Le chômage",
  "Les soins de santé"],
 1,
 "FEDRIS = fusion (2017) du Fonds des accidents du travail + Fonds des maladies professionnelles.");

Q("orga",
 "L'indépendant N'A PAS droit à :",
 ["La pension (SFP)",
  "Les soins de santé (INAMI)",
  "Le chômage, les vacances annuelles payées et la couverture accidents/maladies prof. (FEDRIS)",
  "Les allocations familiales"],
 2,
 "L'indépendant n'a PAS droit au chômage, aux vacances annuelles ni à FEDRIS. Il a droit : pension (SFP), soins & indemnités (INAMI), allocations familiales, maternité. Indemnité dès le 8e jour (montant fixe).");

Q("orga",
 "Le « principe de répartition » de la sécurité sociale signifie :",
 ["Chacun épargne pour sa propre retraite (capitalisation)",
  "Les cotisations des actifs financent directement les prestations des bénéficiaires actuels (solidarité intergénérationnelle)",
  "L'État paie l'intégralité des prestations",
  "Les mutuelles capitalisent les cotisations"],
 1,
 "Répartition : les cotisations des actifs financent directement les prestations des bénéficiaires actuels (solidarité intergénérationnelle), à l'opposé de la capitalisation.");

Q("orga",
 "Laquelle de ces prestations N'EST PAS une aide sociale (régime résiduaire) ?",
 ["RIS (revenu d'intégration sociale)", "GRAPA", "Allocation de chômage", "Allocations aux personnes handicapées"],
 2,
 "L'allocation de chômage est une BRANCHE de la sécurité sociale (ONEM), pas une aide sociale. Aide sociale = RIS, GRAPA, allocations handicapés, prestations familiales garanties.");

Q("orga",
 "Qui contribue le PLUS au financement de la sécurité sociale ?",
 ["Les impôts", "Les cotisations sociales (employeurs + travailleurs)", "La TVA", "Les dotations de l'État"],
 1,
 "Les cotisations sociales (employeurs + travailleurs) ~57,5 % = source principale. Dotations de l'État ~19,5 %, financement alternatif (TVA + précompte) ~18 %.");

Q("orga",
 "Quelle est la branche la PLUS coûteuse de la sécurité sociale ?",
 ["La maladie (soins de santé)",
  "Les pensions (vieillesse)",
  "Le chômage",
  "L'invalidité"],
 1,
 "1er poste de dépense = les pensions (vieillesse) ~42 %, devant la maladie ~29 %. Piège : on cite souvent l'INAMI/maladie, mais ce sont les pensions.");

Q("orga",
 "Vieillesse + maladie + invalidité représentent ensemble environ :",
 ["~30 % des dépenses", "~50 % des dépenses", "~80 % des dépenses", "~95 % des dépenses"],
 2,
 "Vieillesse (~42 %) + maladie (~29 %) + invalidité (~10 %) = ~80 % des dépenses de la sécurité sociale.");

Q("orga",
 "Depuis la 6e réforme de l'État (2014), la PRÉVENTION est une compétence :",
 ["Du fédéral (INAMI)", "Des Communautés (AViQ, COCOM/COCOF...)", "Des Régions", "Des mutuelles"],
 1,
 "La prévention est une compétence des COMMUNAUTÉS (AViQ, COCOM/COCOF, Agentschap Zorg en Gezondheid), pas du fédéral.");

Q("orga",
 "L'INAMI est placé sous l'autorité de :",
 ["La Région", "La Communauté", "Le Ministre (fédéral) des Affaires sociales et de la Santé", "Les mutuelles"],
 2,
 "L'INAMI est sous l'autorité du Ministre fédéral des Affaires sociales et de la Santé.");

Q("orga",
 "Quel service de l'INAMI se charge du REMBOURSEMENT des médicaments ?",
 ["Les Indemnités", "Le service Soins de santé", "L'Évaluation et contrôle médicaux (SECM)", "La CAAMI"],
 1,
 "Le service « Soins de santé » de l'INAMI assure le remboursement des soins et médicaments (via les mutuelles). Les Indemnités gèrent incapacité/invalidité/congés.");

Q("orga",
 "Le rôle des mutuelles (organismes assureurs) est de :",
 ["Collecter les cotisations sociales",
  "Rembourser les soins et verser les indemnités, informer/accompagner, représenter les patients",
  "Gérer les pensions",
  "Dispenser elles-mêmes les soins"],
 1,
 "Mutuelles = rembourser les soins, payer les indemnités, informer/accompagner, proposer une assurance complémentaire, représenter les patients. PAS collecter les cotisations, ni gérer pensions/dispenser les soins.");

Q("orga",
 "Un médecin « conventionné » est un médecin qui :",
 ["Travaille obligatoirement toute sa carrière sous accord",
  "Adhère à l'accord médico-mutualiste (respecte les tarifs convenus) et reçoit un avantage social INAMI",
  "Pratique des tarifs entièrement libres",
  "Est employé par la mutuelle"],
 1,
 "Conventionné = adhère à l'accord médico-mutualiste (tarifs convenus). S'il ne refuse pas l'accord, il l'est automatiquement. Reçoit un statut social (~6 000 €/an). Il reste conventionné tant qu'il ne se déconventionne pas.");

Q("orga",
 "Le « ticket modérateur » désigne :",
 ["La part de l'honoraire remboursée par la mutuelle",
  "La part de l'honoraire à charge du patient",
  "Le supplément d'honoraire du médecin non conventionné",
  "Le forfait d'hospitalisation"],
 1,
 "Ticket modérateur = part de l'honoraire à charge du patient ; le reste = intervention de l'organisme assureur. Dépend de la prestation, du statut (BIM) et de la qualification.");

Q("orga",
 "Qui est BÉNÉFICIAIRE DE L'INTERVENTION MAJORÉE (BIM) D'OFFICE ?",
 ["Tout pensionné", "Le bénéficiaire du RIS, de la GRAPA, un MENA, un orphelin", "Tout chômeur", "Toute famille monoparentale"],
 1,
 "BIM d'office : RIS, GRAPA, revenu pour personne handicapée, MENA, orphelins, enfant handicapé > 66 %. Les chômeurs/pensionnés/familles monoparentales sont BIM SUR DEMANDE (si revenus < plafond).");

Q("orga",
 "Quels avantages procure le statut BIM ?",
 ["Aucun avantage de remboursement",
  "Meilleur remboursement des soins/médicaments et tiers payant obligatoire en consultation",
  "La gratuité totale de tous les soins",
  "Une pension majorée"],
 1,
 "BIM : ticket modérateur réduit, meilleur remboursement, tiers payant (social) obligatoire en consultation. Depuis 2025/2026, suppléments d'honoraires interdits pour les BIM.");

Q("orga",
 "Le Maximum à Facturer (MAF) :",
 ["Est réservé aux BIM",
  "Protège le ménage : quand les tickets modérateurs dépassent un seuil annuel, la mutuelle prend en charge 100 % jusqu'au 31/12",
  "Est géré par le CPAS",
  "Concerne uniquement les hospitalisations"],
 1,
 "MAF : protège le MÉNAGE (pas réservé aux BIM), géré par la mutuelle. 4 types : revenus, statut social (BIM = 450 €), enfants < 19 ans (650 €), maladie chronique (seuils −100 €).");

Q("orga",
 "Le statut « affection chronique » est notamment accordé si :",
 ["Le patient a plus de 65 ans",
  "Les dépenses de santé totales dépassent 400 €/trimestre durant ≥ 8 trimestres consécutifs",
  "Le patient est hospitalisé une fois",
  "Le patient est BIM"],
 1,
 "Affection chronique : dépenses > 400 €/trimestre durant ≥ 8 trimestres consécutifs (OU forfait maladie chronique, OU maladie rare + critère de dépenses). Effet : MAF facilité (seuil −100 €).");

Q("orga",
 "Le médicament de catégorie A est remboursé :",
 ["À ~75 %", "Totalement (importance vitale, ex. insuline)", "Pas du tout", "Au forfait"],
 1,
 "Catégorie A = remboursement total (importance vitale, ex. insuline). B ~75 % ; C/Cs/Cx partiel décroissant ; Fa/Fb forfait ; D = aucun remboursement (somnifères).");

Q("orga",
 "Le tiers payant (généralisé depuis 2022) implique que :",
 ["Le patient avance la totalité puis se fait rembourser",
  "Le patient ne paie que sa part (ticket modérateur), le reste est facturé directement à la mutuelle",
  "La mutuelle paie le médecin une fois par an",
  "Le médecin renonce à tout honoraire"],
 1,
 "Tiers payant : le patient ne paie que le ticket modérateur (+ éventuel supplément) ; le reste va directement à la mutuelle. Implique d'être en ordre de mutuelle. Obligatoire pour les BIM en consultation.");

Q("orga",
 "L'INCAPACITÉ de travail (incapacité primaire) suppose une perte de capacité de gain d'au moins :",
 ["33 %", "50 %", "66 %", "80 %"],
 2,
 "Incapacité de travail = incapacité d'effectuer son travail pour raison de santé, avec une perte de capacité de gain ≥ 66 %. L'incapacité n'est PAS la maladie : on peut être malade et apte.");

Q("orga",
 "L'INVALIDITÉ correspond à une incapacité de travail qui dure :",
 ["Plus de 3 mois", "Plus de 6 mois", "Plus de 12 mois (1 an)", "Plus de 2 ans"],
 2,
 "Invalidité = incapacité de travail > 12 mois (1 an), contrôlée par le Conseil médical de l'invalidité (INAMI). Ne pas confondre avec 3 ou 6 mois.");

Q("orga",
 "Quelle distinction entre invalidité et handicap est correcte ?",
 ["Invalidité et handicap sont synonymes",
  "Invalidité = perte de capacité de gain (travail) ; handicap = impact sur les activités de la vie quotidienne",
  "Le handicap dure toujours plus d'un an",
  "L'invalidité concerne uniquement la vie quotidienne"],
 1,
 "Invalidité ≠ handicap. Invalidité = perte de capacité de gain (travail) ; handicap = impact sur les activités de la vie quotidienne. On peut être handicapé et apte au travail.");

Q("orga",
 "Le certificat médical destiné à la MUTUELLE (médecin conseil) :",
 ["Ne porte jamais de diagnostic",
  "Porte le diagnostic",
  "Est interdit",
  "Est rédigé par l'employeur"],
 1,
 "Certificat à la mutuelle (médecin conseil) = AVEC diagnostic. Certificat à l'employeur = SANS diagnostic (secret médical).");

Q("orga",
 "Durant les 6 premiers mois d'incapacité, l'évaluation se fait par rapport :",
 ["À tous les métiers possibles",
  "Au métier habituel (de référence)",
  "Au métier le mieux rémunéré",
  "À aucun métier"],
 1,
 "6 premiers mois : évaluation par rapport au métier habituel. Au-delà : tous les métiers que l'assuré pourrait exercer (Loi 14/07/1994, art. 100§1).");

Q("orga",
 "Concernant la reprise du travail des malades de longue durée (réforme 2026) :",
 ["Aucune évaluation n'est prévue",
  "L'évaluation du potentiel de travail par la médecine du travail est obligatoire dès 8 semaines d'incapacité",
  "La reprise est interdite avant 1 an",
  "Seul le médecin conseil intervient"],
 1,
 "Réforme 2026 : évaluation du potentiel de travail dès 8 semaines, responsabilisation des acteurs, certificat Mult-eMediatt dès 14 j, communication via la plateforme TRIO. Logique : d'abord réintégrer, ensuite indemniser.");

Q("orga",
 "Les soins de 1re ligne représentent quelle part des contacts et quel rôle ?",
 ["< 10 %, approche par maladie",
  "> 90 % des contacts ; porte d'entrée, centrée sur le patient, filtre vers la 2e ligne",
  "100 % des soins hospitaliers",
  "Très peu de contacts, soins très spécialisés"],
 1,
 "1re ligne : > 90 % des contacts, porte d'entrée, approche globale, centrée sur le patient. « Axée sur la maladie » = FAUX pour la 1re ligne (c'est la 2e/3e).");

Q("orga",
 "Les « 6 C » de Starfield (soins de 1re ligne) incluent :",
 ["Coût, Contrôle, Conformité",
  "Premier Contact, soins Centrés sur la personne, Continuité, services Complets, Communauté, Coordination",
  "Chirurgie, Cancérologie, Cardiologie",
  "Concurrence, Capitalisation, Convention"],
 1,
 "6 C de Starfield : premier Contact, soins Centrés sur la personne, Continuité, services Complets, Communauté, Coordination.");

Q("orga",
 "L'objectif des réseaux hospitaliers loco-régionaux (2020) est de :",
 ["Diminuer la concurrence entre hôpitaux",
  "Coordonner l'offre de soins d'une région en regroupant les compétences",
  "Réduire l'accessibilité aux soins",
  "Fusionner tous les hôpitaux"],
 1,
 "Réseaux loco-régionaux : coordonner l'offre de soins d'une région (regrouper les compétences). « Soins de proximité là où c'est possible, soins spécialisés là où c'est nécessaire ». Réseau ≠ fusion.");

Q("orga",
 "Concernant le financement de la médecine générale au FORFAIT (capitation), un AVANTAGE est :",
 ["Le risque de surconsommation",
  "Plus de prévention/dépistage, moins d'examens inutiles, meilleur suivi des chroniques",
  "La sélection des patients",
  "Le libre choix garanti du prestataire pour tous"],
 1,
 "Forfait — avantages : moins de consultations inutiles, plus de prévention, moins de prescriptions/examens, meilleur suivi des chroniques, moins de burn-out. Inconvénients : surconsommation, pas de libre choix, sélection des patients.");

Q("orga",
 "Le « New deal » (depuis 2024) en médecine générale est :",
 ["Un financement 100 % à l'acte",
  "Un modèle mixte ~50/50 acte/forfait + primes, valorisant le travail hors contact",
  "Une suppression du forfait",
  "Un financement uniquement par l'État"],
 1,
 "New deal : modèle mixte ~50/50 acte/forfait + primes ; valorise le travail hors contact (dossiers, coordination) et la délégation de tâches ; préserve la liberté du patient.");

Q("orga",
 "Concernant la plateforme eHealth, quelle proposition est VRAIE ?",
 ["Elle sert aux échanges avec la mutuelle et les assurances privées",
  "Elle permet l'échange sécurisé d'informations entre prestataires de soins ayant un lien thérapeutique",
  "Elle est accessible au médecin du travail sans condition",
  "Elle remplace le dossier médical"],
 1,
 "Plateforme eHealth = échange sécurisé entre prestataires ayant un lien thérapeutique. Piège : elle NE sert PAS aux échanges avec la mutuelle, l'assurance privée, ni le médecin conseil/de contrôle.");

Q("orga",
 "Quel système permet de vérifier l'ASSURABILITÉ d'un patient en médecine générale ?",
 ["eHealth", "MyCareNet", "Recip-e", "Hub"],
 1,
 "MyCareNet = lien avec les mutuelles : vérifier l'assurabilité (BIM/AO), DMG, chapitre IV, facturation du tiers payant.");

Q("orga",
 "Le SUMEHR est :",
 ["Un dossier médical complet",
  "Le résumé minimal de données médicales nécessaires à la continuité des soins (une « photographie »)",
  "Une prescription électronique",
  "Un certificat d'incapacité"],
 1,
 "SUMEHR (Summarized Electronic Health Record) = quantité minimale de données pour la continuité des soins. Généré par le DMI, exportable sur le coffre-fort régional. Ce n'est PAS un dossier complet.");

Q("orga",
 "Le SUMEHR NE contient PAS :",
 ["Les allergies et la médication active",
  "Les antécédents et la vaccination",
  "Les honoraires du médecin, le nombre d'IVG ou l'orientation sexuelle",
  "La personne de contact"],
 2,
 "Le SUMEHR ne contient PAS (pièges) : honoraires, nombre de partenaires sexuels, nombre d'IVG, orientation sexuelle, appartenance religieuse. Il contient : administratif, risques/allergies, vaccination, antécédents, médication active...");

Q("orga",
 "Pour accéder aux documents partagés d'un patient, quelles sont les 3 conditions CUMULATIVES ?",
 ["Certificat eHealth + lien thérapeutique + consentement du patient",
  "Carte eID + mutuelle + ordonnance",
  "DMG + BIM + tiers payant",
  "Recip-e + MyCareNet + VIDIS"],
 0,
 "3 conditions cumulatives : (1) certificat eHealth, (2) lien thérapeutique (continuité des soins, durée limitée), (3) consentement du patient (un seul, valable partout en Belgique).");

Q("orga",
 "Qui N'A PAS accès au dossier de santé partagé du patient (pas de lien thérapeutique de soins) ?",
 ["Le médecin généraliste traitant",
  "Le médecin du travail, le médecin conseil de la mutuelle, le médecin d'assurance/de contrôle",
  "L'infirmier à domicile",
  "Le pharmacien de référence"],
 1,
 "N'ont PAS accès : médecin du travail, médecin conseil, médecin d'assurance, médecin de contrôle (pas de lien thérapeutique de soins). Le patient peut aussi exclure nommément un prestataire.");

Q("orga",
 "Recip-e est :",
 ["La prescription électronique (message non adressé, crypté, via eHealth), récupérée par le prestataire choisi par le patient",
  "Un certificat d'incapacité",
  "Le schéma de médication partagé",
  "L'outil de vérification de l'assurabilité"],
 0,
 "Recip-e : prescription électronique (ASBL, depuis 2014), message non adressé crypté via eHealth, statut de source authentique, récupérée par le prestataire choisi par le patient.");

Q("orga",
 "Pour partager / mettre à jour le SCHÉMA DE MÉDICATION, quel outil est utilisé ?",
 ["Mult-eMediatt", "VIDIS (intègre Vitalink, Recip-e, DPP)", "MyCareNet", "B-IHR"],
 1,
 "VIDIS : intégration des sources de médication (Vitalink, Recip-e, Dossier Pharmaceutique Partagé) → schéma de médication partagé.");

Q("orga",
 "Pour envoyer un certificat d'incapacité à la mutuelle (dès 14 jours), le MG utilise :",
 ["Recip-e", "Mult-eMediatt", "VIDIS", "MetaHub"],
 1,
 "Mult-eMediatt = certificat électronique d'incapacité de travail (MG → mutuelle), obligatoire dès 14 jours (réforme 2026).");

Q("orga",
 "Parmi les enjeux/défis du système de santé belge, lequel est cité ?",
 ["La diminution des maladies chroniques",
  "Le vieillissement de la population et la multimorbidité",
  "L'excès de personnel soignant",
  "La baisse des coûts technologiques"],
 1,
 "Enjeux : vieillissement, maladies chroniques/multimorbidité, hausse des coûts, pénurie de personnel, isolement social, inégalités sociales, santé mentale, enjeux écologiques.");

Q("orga",
 "Selon l'étude KCE (2022), quelle caractéristique du système belge est VRAIE ?",
 ["L'accès aux différents niveaux de soins est limité et hiérarchisé",
  "Le financement est majoritairement à l'acte, l'approche par maladie, les pouvoirs morcelés ; l'accès aux niveaux est LIBRE",
  "Le système est parfaitement adapté au vieillissement",
  "Tout est financé au forfait"],
 1,
 "KCE 2022 : accès LIBRE à tous les niveaux, hospitalocentrisme, approche par maladie, financement majoritairement à l'acte, pouvoirs morcelés — peu adapté au vieillissement/multimorbidité.");

Q("orga",
 "Le Budget des Moyens Financiers (BMF) des hôpitaux finance :",
 ["Les honoraires médicaux uniquement",
  "L'infrastructure et le fonctionnement (calculé via les APR-DRG), payé via les mutuelles",
  "Les médicaments uniquement",
  "Les pensions du personnel"],
 1,
 "BMF (~36 %) : infrastructure et fonctionnement, calculé via les APR-DRG (groupes homogènes de malades), payé via les mutuelles. Honoraires ~41 %, produits pharma ~17 %, forfaits/conventions ~4 %.");

Q("orga",
 "L'Aide Médicale Urgente (AMU) pour les personnes sans titre de séjour est octroyée par :",
 ["L'INAMI", "FEDASIL", "Le CPAS", "La mutuelle"],
 2,
 "Sans titre de séjour : Aide Médicale Urgente (AMU) via le CPAS. Demandeurs d'asile : FEDASIL.");

Q("orga",
 "Le Dossier Médical Global (DMG) chez le MG :",
 ["Augmente le ticket modérateur",
  "Réduit le ticket modérateur et donne droit à un forfait annuel au MG",
  "Est réservé aux hospitalisations",
  "Empêche l'envoi chez le spécialiste"],
 1,
 "DMG chez le MG de référence : réduit le ticket modérateur + forfait annuel (38 €, 71 € si malade chronique 30-85 ans). L'envoi chez le spécialiste par le MG gestionnaire réduit aussi le ticket modérateur.");

// ========== LE PATIENT ÂGÉ & LA COORDINATION DES SOINS (D. Lamy & ASD Bruxelles) ==========
Q("age",
 "La FRAGILITÉ chez la personne âgée se définit comme :",
 ["Un synonyme de l'âge avancé",
  "Une diminution des capacités physiologiques de réserve, altérant l'adaptation au stress (processus réversible)",
  "Une dépendance définitive",
  "Une polypathologie"],
 1,
 "Fragilité = diminution des réserves physiologiques, altérant l'adaptation au stress. C'est un marqueur de risque et un processus RÉVERSIBLE si repéré. Elle ≠ âge, ≠ polypathologie, ≠ dépendance.");

Q("age",
 "Les 5 critères de Fried (phénotype de fragilité) incluent :",
 ["Perte de poids involontaire, épuisement, vitesse de marche ralentie, baisse de force, sédentarité",
  "HTA, diabète, dyslipidémie, obésité, tabac",
  "Troubles cognitifs, dépression, dénutrition, chutes, incontinence",
  "Âge, polypathologie, polymédication, isolement, dépendance"],
 0,
 "Critères de Fried : perte de poids involontaire (> 5 %/an), épuisement ressenti, vitesse de marche ralentie, baisse de force musculaire, activité physique réduite (sédentarité).");

Q("age",
 "Lequel de ces critères de Fried est INCORRECT (piège classique) ?",
 ["Perte de poids", "Sédentarité", "Vitesse de marche ACCÉLÉRÉE", "Épuisement / fatigue"],
 2,
 "Piège : c'est une vitesse de marche RALENTIE (et non accélérée) et une activité physique RÉDUITE.");

Q("age",
 "Selon les critères de Fried, combien de critères définissent un patient FRAGILE ?",
 ["0 critère", "1 critère", "1-2 critères", "≥ 3 critères"],
 3,
 "0 = robuste ; 1-2 = pré-fragile ; ≥ 3 = fragile.");

Q("age",
 "Le dépistage de la fragilité :",
 ["N'est fiable que s'il est réalisé par un médecin",
  "Est systématique dès 70 ans (hors maladie grave) et peut être initié par tout soignant",
  "Ne doit jamais être systématique",
  "Concerne uniquement les > 85 ans"],
 1,
 "Dépistage de la fragilité : systématique dès 70 ans (hors maladie grave), à l'initiative de TOUT soignant (pas réservé au médecin). Il prédit la perte d'autonomie, les chutes, l'institutionnalisation à 3 ans.");

Q("age",
 "Quelle échelle évalue l'AUTONOMIE (activités de la vie quotidienne) et sert de référence pour la dépendance (INAMI) ?",
 ["MNA", "Katz", "MMSE", "Tinetti"],
 1,
 "Katz = autonomie (AVQ), référence pour la dépendance (INAMI). MNA = nutrition, MMSE = cognition, Tinetti = équilibre/marche.");

Q("age",
 "Quelle échelle évalue la NUTRITION chez la personne âgée ?",
 ["MMSE", "MNA (Mini Nutritional Assessment)", "GDS", "Timed Up & Go"],
 1,
 "MNA (Mini Nutritional Assessment) = dépistage de la dénutrition.");

Q("age",
 "Parmi ces échelles, laquelle est un INTRUS (sans rapport avec la personne âgée) ?",
 ["Katz", "MMSE", "Finegan", "Tinetti"],
 2,
 "Intrus classique : « Finegan » (score de sevrage du nouveau-né). Valides chez la personne âgée : Katz, MNA, MMSE, Tinetti, Timed Up & Go.");

Q("age",
 "Le test « Timed Up & Go » est considéré comme normal en dessous de :",
 ["5 secondes", "14 secondes", "30 secondes", "60 secondes"],
 1,
 "Timed Up & Go : normal < 14 s ; au-delà, risque de chute accru. Tinetti < 20/28 = risque de chute accru.");

Q("age",
 "Un trouble de la marche chez la personne âgée multiplie le risque de chute par :",
 ["1,5", "2", "3", "5"],
 2,
 "Un trouble de la marche multiplie par 3 le risque de chute. Vitesse de marche normale > 70 ans ≈ 1 m/s.");

Q("age",
 "À partir de combien de médicaments parle-t-on de POLYMÉDICATION nécessitant une attention particulière ?",
 ["3 médicaments", "6 médicaments différents par jour", "10 médicaments", "Dès 2 médicaments"],
 1,
 "Polymédication : attention particulière à partir de 6 médicaments différents par jour. Révision régulière (prescrits ET OTC), indication de la durée.");

Q("age",
 "Le nombre de médicaments est un facteur pronostique car il est associé à :",
 ["Une amélioration de l'autonomie",
  "Un risque accru de passage aux urgences, de perte d'autonomie et de morbi-mortalité",
  "Une meilleure adhérence",
  "Aucune conséquence"],
 1,
 "Le nombre de médicaments est un facteur pronostique : passage aux urgences, perte d'autonomie, hausse de la morbi-mortalité. Conséquences : mauvaise adhérence, baisse de l'alimentation.");

Q("age",
 "Quels outils sont utiles face à la polymédication ?",
 ["START & STOPP, GheOP3S, conseils pluridisciplinaires",
  "La règle « maximum 6 médicaments par jour »",
  "Les échelles Katz et Fried",
  "Le score de Glasgow"],
 0,
 "Outils : START & STOPP, GheOP3S, conseils pluridisciplinaires (CMP), réconciliation médicamenteuse. Piège : « max 6/jour » n'est PAS un outil. Katz/Fried évaluent autonomie/fragilité.");

Q("age",
 "Les benzodiazépines chez la personne âgée :",
 ["Diminuent le risque de chute",
  "Augmentent le risque de chute",
  "N'ont aucun effet sur les chutes",
  "Sont recommandées pour la marche"],
 1,
 "Les benzodiazépines AUGMENTENT le risque de chute chez la personne âgée.");

Q("age",
 "Concernant la polymédication, à quoi faut-il être attentif (interactions) ?",
 ["Au jus de pamplemousse (inhibe le CYP3A4), à l'alcool et aux OTC non déclarés",
  "Uniquement aux médicaments prescrits",
  "Aux seuls antibiotiques",
  "À rien de particulier"],
 0,
 "Attention à l'alcool, aux OTC et au jus de pamplemousse (inhibe le CYP3A4/CYP450) → interactions et toxicité.");

Q("age",
 "Quels acteurs interviennent à domicile autour de la personne âgée (hormis médecin/kiné/infirmier) ?",
 ["Assistant social, aide familiale, aide ménagère, ergothérapeute, livraison de repas, aidant proche",
  "Pharmacien hospitalier et radiologue",
  "Médecin du travail et médecin conseil",
  "Chirurgien et anesthésiste"],
 0,
 "À domicile : assistant social, aide familiale, aide ménagère, ergothérapeute (adaptation), livraison de repas, aidant proche/garde-malade, + domotique et matériel paramédical.");

Q("age",
 "Pour la transition hôpital → domicile, quel outil de communication structurée est cité ?",
 ["FRAMES", "SBAR (Situation, Background, Assessment, Recommendation)", "PICO", "FARES"],
 1,
 "Transition hôpital → domicile : réconciliation médicamenteuse + outil SBAR (Situation, Background, Assessment, Recommendation).");

Q("age",
 "Dans le trajet d'aides et de soins (ASD Bruxelles), la coordinatrice est :",
 ["Un simple relais administratif",
  "La personne de référence (analyse des besoins, contacts, plan de soutien, réévaluation à +3 mois)",
  "Le médecin traitant",
  "L'aidant proche"],
 1,
 "La coordinatrice = personne de référence : analyse des besoins, contact avec les services, plan de soutien, réévaluation à +3 mois.");

Q("age",
 "Le PICT (Palliative Care Indicators Tool) sert à :",
 ["Évaluer la nutrition",
  "Identifier le patient palliatif",
  "Mesurer la force musculaire",
  "Dépister la dénutrition"],
 1,
 "PICT (Fédération des soins palliatifs) = outil d'identification du patient palliatif.");

Q("age",
 "Le PICT combine 3 éléments. Lequel en fait partie ?",
 ["La « question surprise » (seriez-vous surpris que le patient décède dans les 6-12 mois ?)",
  "Le score de Glasgow",
  "Le test Timed Up & Go",
  "Le questionnaire AUDIT"],
 0,
 "PICT = 1) question surprise (décès dans 6-12 mois ?), 2) > 2 indicateurs de fragilité, 3) au moins un critère d'incurabilité d'une affection potentiellement mortelle.");

Q("age",
 "Si un patient est identifié comme palliatif via le PICT, il faut :",
 ["Cesser tout soin",
  "Définir un plan de soins et un ACP (Advanced Care Planning) en concertation interdisciplinaire",
  "Hospitaliser systématiquement",
  "Attendre l'aggravation"],
 1,
 "Patient palliatif identifié → définir un plan de soins et un ACP (Advanced Care Planning), en concertation interdisciplinaire.");

Q("age",
 "Dans l'évaluation de la personne âgée, qu'est-ce qui n'est PAS primordial (piège) ?",
 ["La prévention des chutes",
  "La nutrition",
  "L'horaire du lever et du coucher",
  "L'isolement social et le soutien aux aidants"],
 2,
 "Piège : l'horaire du lever/coucher n'est pas primordial. Les priorités : prévention des chutes, nutrition, isolement social, soutien aux aidants.");

Q("age",
 "La prévalence de la fragilité est d'environ :",
 ["1 % des > 65 ans",
  "10-20 % des > 65 ans à domicile, ~50 % des > 85 ans",
  "100 % des > 70 ans",
  "5 % des > 85 ans"],
 1,
 "Prévalence : ~10-20 % des > 65 ans à domicile, ~50 % des > 85 ans.");

Q("age",
 "Les interventions multimodales chez la personne âgée fragile comprennent :",
 ["Uniquement des médicaments",
  "Activité physique adaptée, nutrition, réduction de la polymédication, mise en place du réseau",
  "L'hospitalisation systématique",
  "L'arrêt de toute activité physique"],
 1,
 "Interventions multimodales : AP adaptée (vs sédentarité/sarcopénie), nutrition, réduction/optimisation de la polymédication, mise en place du réseau (environnement, aides).");

// ========== SOINS AUX DEMANDEURS D'ASILE & PRÉCARITÉ (Kathrada, Dumontier, Feron) ==========
Q("asile",
 "Quel organisme s'occupe de l'ENREGISTREMENT de la demande de protection internationale ?",
 ["Le CGRA", "L'Office des étrangers (OE)", "FEDASIL", "Le CCE"],
 1,
 "Office des étrangers (OE) = enregistrement de la demande. CGRA = examen/décision. CCE = recours. FEDASIL = accueil.");

Q("asile",
 "Quel organisme EXAMINE la demande d'asile et prend la décision (reconnaissance du statut) ?",
 ["L'Office des étrangers", "Le CGRA", "FEDASIL", "Le CPAS"],
 1,
 "CGRA (Commissariat général aux réfugiés et apatrides) = examine la demande et prend la décision.");

Q("asile",
 "FEDASIL est chargé de :",
 ["La décision sur la demande d'asile",
  "L'organisation de l'accueil et de l'aide matérielle des demandeurs d'asile",
  "L'enregistrement de la demande",
  "Les recours juridiques"],
 1,
 "FEDASIL = organise l'accueil et l'aide matérielle (loi Accueil 2017 : hébergement, repas, accompagnement, droit au travail après 4 mois).");

Q("asile",
 "L'Aide Médicale Urgente (AMU) :",
 ["Se limite aux situations d'urgence vitale",
  "Couvre les soins curatifs ET préventifs et le suivi, pour les personnes en séjour irrégulier",
  "Concerne les demandeurs d'asile (qui ont un titre de séjour)",
  "Est octroyée par la mutuelle"],
 1,
 "AMU = aide sociale du CPAS pour les personnes en SÉJOUR IRRÉGULIER. Malgré son nom, elle couvre le curatif ET le préventif et le suivi (pas seulement l'urgence).");

Q("asile",
 "Quelles sont les 3 conditions d'octroi de l'AMU ?",
 ["Territorialité, enquête sociale (indigence), certificat médical d'AMU",
  "Titre de séjour, mutuelle, ordonnance",
  "Nationalité, domicile, emploi",
  "Âge, revenus, nationalité belge"],
 0,
 "3 conditions : territorialité (réside sur la commune), enquête sociale établissant l'indigence, et un certificat médical d'AMU.");

Q("asile",
 "Quelle distinction entre demandeur d'asile et personne en séjour irrégulier est correcte ?",
 ["Ils relèvent du même dispositif",
  "Le demandeur d'asile a un titre de séjour (FEDASIL) ; la personne en séjour irrégulier relève de l'AMU (CPAS)",
  "Le demandeur d'asile relève de l'AMU",
  "La personne en séjour irrégulier relève de FEDASIL"],
 1,
 "Le demandeur d'asile / réfugié a un titre de séjour et relève de FEDASIL. La personne en séjour irrégulier relève de l'AMU (CPAS).");

Q("asile",
 "La régularisation « 9ter » concerne :",
 ["La raison humanitaire", "La raison médicale", "L'asile politique", "Le regroupement familial"],
 1,
 "9ter = régularisation pour raison MÉDICALE ; 9bis = pour raison humanitaire. (≠ asile.)");

Q("asile",
 "La PRÉCARITÉ se définit comme :",
 ["Un synonyme de pauvreté (norme monétaire)",
  "L'absence d'une ou plusieurs sécurités (emploi, revenus, logement, liens) ; notion subjective, processus",
  "Une maladie chronique",
  "Un statut administratif"],
 1,
 "Précarité = absence d'une ou plusieurs sécurités permettant d'assumer ses responsabilités et de jouir de ses droits. Notion subjective, processus de précarisation. « La précarité ne touche pas que les pauvres » (≠ pauvreté monétaire).");

Q("asile",
 "Chez un patient d'origine (sub)africaine présentant des douleurs digestives + perte de poids, que rechercher à la biologie ?",
 ["Une hypertriglycéridémie",
  "Une ÉOSINOPHILIE (parasitose : schistosomiase, strongyloïdose)",
  "Une légère augmentation des γ-GT",
  "Une hyperglycémie"],
 1,
 "Origine (sub)africaine + douleurs digestives + perte de poids → rechercher une ÉOSINOPHILIE (parasitose : schistosomiase, strongyloïdose).");

Q("asile",
 "Concernant la tuberculose chez les demandeurs d'asile :",
 ["Aucun dépistage n'est nécessaire",
  "Dépistage systématique chez tous (FARES, score ≥ 4 → Rx thorax)",
  "Dépistage uniquement si toux > 3 mois",
  "Dépistage réservé aux symptomatiques"],
 1,
 "Tuberculose : dépistage systématique chez TOUS les demandeurs d'asile (FARES, score ≥ 4 → Rx thorax). En centre d'accueil, risque surtout de TB (et de rougeole).");

Q("asile",
 "Concernant le VIH chez les demandeurs d'asile, le message « I = I » signifie :",
 ["Immunité = Infection",
  "Charge virale Indétectable = virus Intransmissible",
  "Isolement = Information",
  "Infection = Incurable"],
 1,
 "I = I : charge virale Indétectable = virus Intransmissible. Référer en centre de référence.");

Q("asile",
 "Concernant le risque infectieux en centre d'accueil (Fedasil/Croix-Rouge), quelle proposition est VRAIE ?",
 ["Le risque de rougeole est inexistant",
  "Le risque de tuberculose y est très fréquent, et les lésions physiques de torture peuvent perdurer des années",
  "La vaccination RRO n'est jamais nécessaire",
  "Aucun dépistage n'y est utile"],
 1,
 "En centre d'accueil : risque de rougeole et SURTOUT de tuberculose. Les lésions physiques de torture peuvent perdurer des années. (Re)vaccination RRO systématique chez tous les DA.");

Q("asile",
 "Le traitement de la schistosomiase (bilharziose) repose sur :",
 ["L'ivermectine", "Le praziquantel", "La metformine", "Un antibiotique"],
 1,
 "Schistosomiase → praziquantel. Strongyloïdose → ivermectine (attention si immunodépression).");

Q("asile",
 "Concernant le malaria/paludisme chez le primo-arrivant :",
 ["Dépistage systématique de tous",
  "Pas de dépistage systématique ; si suspecté → goutte épaisse (gold standard) ou test rapide",
  "Traitement empirique systématique",
  "Vaccination obligatoire"],
 1,
 "Malaria : pas de dépistage systématique ; si suspectée → goutte épaisse (gold standard) ou test rapide.");

Q("asile",
 "Face à un patient présentant un possible PTSD, la précaution majeure est de :",
 ["Demander tous les détails du traumatisme pour bien documenter",
  "Ne pas demander de détails pour ne pas le réexposer à un stress ; le laisser dire ce qu'il veut, à son rythme",
  "Éviter tout abord du sujet psychique",
  "Référer immédiatement sans écouter"],
 1,
 "PTSD : NE PAS demander de détails (risque de réexposition) ; laisser la personne dire ce qu'elle veut, à son rythme. Travail pluridisciplinaire (psy, médiateur culturel, interprète).");

Q("asile",
 "Le rapport médical circonstancié (asbl Constats) :",
 ["Garantit la véracité du récit",
  "Établit le degré de COMPATIBILITÉ entre le récit et les séquelles (élément de preuve), selon le Protocole d'Istanbul",
  "Pose un diagnostic psychiatrique définitif",
  "Remplace la décision du CGRA"],
 1,
 "Le rapport médical (Constats, 2009) établit le degré de compatibilité entre le récit et les séquelles. Méthodologie : Protocole d'Istanbul (ONU). Rédigé au conditionnel ; incohérences ≠ mensonge.");

Q("asile",
 "Dans la rédaction d'un « Constat », le rapport est rédigé :",
 ["À l'affirmatif et en langage médical technique",
  "Au conditionnel (« il raconte que... »), en langage non médical accessible",
  "Uniquement en latin",
  "Sans aucune conclusion"],
 1,
 "Rédaction au conditionnel, langage non médical accessible ; conclusions = type de séquelles, compatibilité avec les faits, précautions pour l'audition CGRA. La torture altère la mémoire et la notion de temps.");

Q("asile",
 "Une fillette non excisée originaire d'un pays à haute prévalence de MGF :",
 ["Ne peut bénéficier d'aucune protection",
  "Peut être reconnue réfugiée sur base d'un certificat médical de non-excision, à ré-attester tous les 3 ans",
  "Doit être excisée pour des raisons culturelles",
  "Relève uniquement de l'AMU"],
 1,
 "Certificat médical de non-excision → reconnaissance possible comme réfugiée, à ré-attester tous les 3 ans (médecins formés par le GAMS ; centres CeMAViE, UZ Gent).");

Q("asile",
 "Une mission parfois essentielle du MG face à un primo-arrivant est de :",
 ["Multiplier les examens",
  "DÉMÉDICALISER : revoir des « diagnostics » et traitements posés au pays d'origine",
  "Confirmer tous les diagnostics étrangers",
  "Prescrire les mêmes traitements qu'au pays"],
 1,
 "Mission parfois essentielle : démédicaliser. Ex. Ahmad : « trouble thyroïdien » sous L-thyroxine = hyperthyroïdie iatrogène ; « trouble glycémique » sous metformine = glycémie/HbA1c normales.");

Q("asile",
 "Le bilan de santé du primo-arrivant ASYMPTOMATIQUE comprend notamment :",
 ["Aucun examen complémentaire",
  "Radio thorax, biologie, dépistage IST (VIH, hépatites B/C, syphilis), sérologies parasitaires selon l'origine",
  "Uniquement un examen dentaire",
  "Une coloscopie systématique"],
 1,
 "Bilan : anamnèse (trajet, vaccins, violences, PTSD), examen clinique, Rx thorax, biologie, IST (HIV, hépatites B/C, syphilis), sérologies schistosomiase/strongyloïdose selon l'origine.");

Q("asile",
 "L'accès aux soins est garanti par quel fondement ?",
 ["Une simple recommandation médicale",
  "Un droit (Constitution, art. 23)",
  "Le seul bon vouloir du médecin",
  "Une assurance privée obligatoire"],
 1,
 "L'accès aux soins est un DROIT (Constitution, art. 23). Le rôle du MG : soigner, dépister, accompagner et attester sans juger.");

Q("asile",
 "Face aux publics précarisés, l'attitude recommandée est :",
 ["Le jugement et la sélection",
  "Le non-jugement, une vision globale, l'approche pluridisciplinaire et le travail en réseau",
  "L'isolement du patient",
  "La standardisation des soins"],
 1,
 "Agir : non-jugement, vision globale, approche pluridisciplinaire, santé communautaire, éducation thérapeutique, travail en réseau (Médecins du Monde, CPAS, maisons médicales) pour ne pas s'épuiser.");

// ========== TRIO : MG – MÉDECIN DU TRAVAIL – MÉDECIN CONSEIL (S. Ruppol & D. Lamy) ==========
Q("trio",
 "Le médecin du TRAVAIL a pour mission d'évaluer :",
 ["L'état d'incapacité (perte de capacité de gain)",
  "L'aptitude à exécuter un travail (médecine de prévention)",
  "L'existence et la durée de l'incapacité (absentéisme)",
  "Le diagnostic des maladies aiguës"],
 1,
 "Médecin du travail = évalue l'APTITUDE (médecine de PRÉVENTION). Il ne contrôle pas l'absentéisme (médecin contrôle) ni n'évalue l'incapacité (médecin conseil).");

Q("trio",
 "Le médecin CONSEIL (mutuelle) a pour mission d'évaluer :",
 ["L'aptitude au poste de travail",
  "L'état d'incapacité",
  "L'absentéisme",
  "Les risques professionnels"],
 1,
 "Médecin conseil (mutuelle) = évalue l'INCAPACITÉ. Il peut proposer la reprise du travail, contacter le médecin du travail, et est tenu au secret vis-à-vis de l'employeur.");

Q("trio",
 "Le médecin de CONTRÔLE a pour mission de :",
 ["Évaluer l'aptitude",
  "Contrôler l'existence et la durée de l'incapacité (absentéisme), payé par l'employeur",
  "Évaluer l'incapacité pour la mutuelle",
  "Prodiguer des soins"],
 1,
 "Médecin contrôle = vérifie l'existence/durée de l'incapacité (absentéisme), payé par l'employeur. Recours en cas de litige = médecin-arbitre.");

Q("trio",
 "Parmi les rôles du médecin du travail, lequel est FAUX ?",
 ["Analyse et évaluation des risques professionnels",
  "Surveillance de la santé et maintien au travail (poste adapté)",
  "Contrôle de l'absentéisme et prestation de soins curatifs",
  "Membre du CPPT, avis et conseils"],
 2,
 "FAUSSES propositions classiques : « contrôle de l'absentéisme », « évalue les ITT », « prodigue des soins curatifs », « travaille seul ». Le médecin du travail fait de la PRÉVENTION.");

Q("trio",
 "L'évaluation de l'APTITUDE consiste à vérifier que :",
 ["Le travailleur est le meilleur candidat pour le poste",
  "Les risques du travail ne majorent pas la santé du travailleur, ET que sa santé ne majore pas les risques (pour lui/autrui)",
  "Le travailleur n'a aucune maladie",
  "Le travailleur peut faire n'importe quel poste"],
 1,
 "Aptitude : (1) les risques du travail ne majorent pas les problèmes de santé du travailleur, et (2) l'état de santé du travailleur ne majore pas les risques (pour lui ou pour autrui).");

Q("trio",
 "Le cadre légal de la médecine du travail repose sur :",
 ["Le Code du Bien-Être au Travail (loi du 4 août 1996 ; AR du 28 mai 2003)",
  "La loi Leburton de 1964",
  "Le Pacte social de 1944",
  "La loi sur les mutuelles de 1894"],
 0,
 "Cadre légal : Code du Bien-Être au Travail (loi du 4 août 1996 ; AR du 28 mai 2003 sur la surveillance de la santé des travailleurs).");

Q("trio",
 "La notion de RISQUE professionnel se définit comme :",
 ["Danger × Exposition → Dommage (la prévention agit sur l'exposition)",
  "Danger + Maladie",
  "Exposition seule",
  "Dommage × Gravité"],
 0,
 "Risque = Danger × Exposition (quantité, fréquence, durée, distance) → Dommage. La prévention agit sur l'EXPOSITION.");

Q("trio",
 "La VISITE DE REPRISE est obligatoire :",
 ["Dans tous les cas, dès le 1er jour de reprise",
  "Dans les 10 jours ouvrables de la reprise, si l'incapacité a duré ≥ 4 semaines",
  "Uniquement à la demande de l'employeur",
  "Après 6 mois d'incapacité"],
 1,
 "Visite de reprise : obligatoire dans les 10 jours ouvrables de la reprise si l'incapacité a duré ≥ 4 semaines. Le travailleur ne reprend pas « du jour au lendemain » sans cette visite.");

Q("trio",
 "La VISITE DE PRÉ-REPRISE :",
 ["Est obligatoire après toute incapacité",
  "Est facultative, à l'initiative du travailleur, pendant l'arrêt (pour anticiper la reprise)",
  "Est décidée par l'employeur",
  "Remplace la visite de reprise"],
 1,
 "Visite de pré-reprise : facultative, à l'initiative du TRAVAILLEUR, pendant l'arrêt, pour anticiper la reprise.");

Q("trio",
 "Dans le trajet de réintégration, le médecin du travail dispose de combien de jours pour sa décision ?",
 ["10 jours", "49 jours", "63 jours", "6 mois"],
 1,
 "Le médecin du travail dispose de 49 jours pour sa décision ; l'employeur répond en 63 jours (inaptitude temporaire) ou 6 mois (inaptitude définitive).");

Q("trio",
 "L'évaluation de l'inaptitude définitive (EID) est possible :",
 ["Dès le 1er jour d'incapacité",
  "Après 6 mois d'ITT continue ; si refus d'un travail adapté → rupture pour force majeure médicale",
  "Après 1 mois",
  "Jamais"],
 1,
 "EID : possible après 6 mois d'ITT continue ; si inaptitude définitive + refus d'un travail adapté → rupture pour force majeure médicale (dissociée de l'ITT depuis le 01/10/2022).");

Q("trio",
 "Concernant la protection de la maternité :",
 ["La travailleuse reçoit un certificat d'incapacité",
  "En cas de risque : mutation vers un poste sans exposition ou écartement ; indemnité de la mutuelle (~78 % du brut)",
  "L'employeur paie 100 % du salaire",
  "Aucune protection n'est prévue"],
 1,
 "Maternité : mutation ou écartement (inaptitude temporaire) ; PAS de certificat d'incapacité mais une attestation ; indemnité de la mutuelle (~78 % du brut). Allaitement : écartement possible jusqu'aux 5 mois de l'enfant.");

Q("trio",
 "La plateforme TRIO (INAMI) permet :",
 ["De contrôler l'absentéisme des travailleurs",
  "D'identifier et mettre en contact direct et sécurisé le médecin traitant, le médecin conseil et le médecin du travail, avec l'accord du patient",
  "De gérer les pensions",
  "De rembourser les médicaments"],
 1,
 "TRIO (INAMI) : avec l'accord préalable du patient, met en contact médecin traitant – médecin conseil – médecin du travail (+ coordinateurs retour au travail, conseillers en prévention).");

Q("trio",
 "Hors plateforme TRIO, le médecin du travail :",
 ["A un accès direct au Réseau Santé (RSW...)",
  "N'a pas accès au Réseau Santé car il n'a pas de lien thérapeutique avec le patient",
  "Peut consulter le dossier médical sans condition",
  "Remplace le médecin traitant"],
 1,
 "Le médecin du travail n'a pas de lien thérapeutique → pas d'accès direct au réseau de santé (sauf via TRIO, avec consentement).");

Q("trio",
 "Pourquoi le médecin généraliste s'adresse-t-il au médecin du travail ?",
 ["Pour faire contrôler l'absentéisme du patient",
  "Pour adapter le poste, préparer la reprise, signaler un risque professionnel (en respectant le secret médical)",
  "Pour obtenir un diagnostic",
  "Pour prescrire un traitement"],
 1,
 "Le MG s'adresse au médecin du travail pour adapter le poste, préparer la reprise, signaler un risque professionnel — en respectant le secret médical (le certificat à l'employeur ne porte jamais de diagnostic).");

Q("trio",
 "Le recours contre une décision du médecin de contrôle se fait auprès de :",
 ["La Direction régionale du Contrôle du Bien-Être",
  "Le Tribunal du travail",
  "Le médecin-arbitre",
  "Le CGRA"],
 2,
 "Recours : médecin du travail → Direction régionale du Contrôle du Bien-Être ; médecin conseil → Tribunal du travail ; médecin contrôle → médecin-arbitre.");

Q("trio",
 "La formation du médecin du travail est :",
 ["Un master de base de 5 ans",
  "Un master de spécialisation (4 ans) en médecine du travail + stages",
  "Une formation de 8 heures",
  "Identique à celle du pharmacien"],
 1,
 "Médecin du travail : master de spécialisation (4 ans) en médecine du travail + stages. Médecine de prévention, à l'interface santé / monde socio-économique.");

Q("trio",
 "Le médecin du travail exerce dans le cadre d'un :",
 ["Hôpital universitaire uniquement",
  "SEPP (service externe) ou SIPP (service interne) de prévention et de protection au travail",
  "CPAS",
  "Cabinet de mutuelle"],
 1,
 "Le médecin du travail travaille en SEPP (service externe) ou SIPP (service interne) de prévention et de protection au travail, avec une équipe (infirmiers, conseillers en prévention).");

Q("trio",
 "En cas d'examen d'embauche concluant à une inaptitude (poste à risque) :",
 ["Le candidat dispose d'un recours",
  "Il n'y a pas de recours possible",
  "L'employeur doit l'engager quand même",
  "Le médecin conseil tranche"],
 1,
 "Examen d'embauche (postes à risque) : si inapte à l'embauche → pas de recours. (Contrairement à d'autres décisions du médecin du travail.)");

Q("trio",
 "Le certificat destiné à l'EMPLOYEUR :",
 ["Porte toujours le diagnostic",
  "Ne porte jamais de diagnostic",
  "Est rédigé par le médecin du travail",
  "Est envoyé à la mutuelle"],
 1,
 "Le certificat à l'employeur ne porte JAMAIS de diagnostic (secret médical). Seul le certificat à la mutuelle (médecin conseil) comporte le diagnostic.");

Q("trio",
 "En cas d'absence aux rendez-vous du trajet de réintégration, le travailleur s'expose à :",
 ["Aucune conséquence",
  "Une sanction sur les indemnités de la mutuelle",
  "Une amende pénale",
  "Une radiation définitive"],
 1,
 "En cas d'absence aux rendez-vous du trajet de réintégration → sanction sur les indemnités de la mutuelle.");
