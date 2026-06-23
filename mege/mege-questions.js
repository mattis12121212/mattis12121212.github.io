/* ============================================================
   Médecine Générale (WMDS 2257) — Banque de QCM (niveau examen difficile)
   Format : 4 propositions plausibles, 1 seule réponse correcte.
   Conçu pour piéger : chiffres proches, faits vrais mais hors-sujet,
   négations, vignettes cliniques.
   ============================================================ */
const MEGE_CHAPTERS = [
  { id: "assuetudes", nom: "Assuétudes : quel accompagnement ?", icone: "🫂" },
  { id: "pharmacien", nom: "Collaboration médecin – pharmacien", icone: "💊" },
  { id: "recherche",  nom: "La recherche en médecine générale", icone: "🔬" },
  { id: "sport",      nom: "Le MG et les plaintes liées au sport", icone: "🏃" },
  { id: "onehealth",  nom: "One Health : médecine & environnement", icone: "🌍" },
  { id: "orga",       nom: "Organisation des soins de santé", icone: "🏛️" },
  { id: "esante",     nom: "e-Santé (mises en situation)", icone: "💻" },
  { id: "age",        nom: "Le patient âgé & la coordination des soins", icone: "🧓" },
  { id: "asile",      nom: "Soins aux demandeurs d'asile & précarité", icone: "🕊️" },
  { id: "trio",       nom: "Trio : MG – médecin du travail – médecin conseil", icone: "🤝" }
];

const MEGE_QUESTIONS = [];
function Q(chapitre, question, options, correcte, explication) {
  MEGE_QUESTIONS.push({ c: chapitre, q: question, o: options, a: correcte, e: explication });
}

// ========== ASSUÉTUDES — niveau difficile ==========
Q("assuetudes",
 "Parmi ces déterminants de la qualité de l'accompagnement, lequel le cours désigne comme le facteur dont dépend AVANT TOUT le résultat thérapeutique ?",
 ["La technique utilisée par le soignant",
  "La qualité de la relation et les facteurs extra-thérapeutiques",
  "Le type de substance consommée",
  "La sévérité de la dépendance à l'inclusion"],
 1,
 "Le cours insiste : la qualité de l'accompagnement dépend d'abord de la qualité de la relation et des facteurs extra-thérapeutiques (puis des attentes/motivations, et enfin de la technique). La technique vient en dernier.");

Q("assuetudes",
 "Une patiente de 52 ans (douleurs épigastriques, γ-GT élevées) revient pour la 1re fois aborder sa consommation d'alcool. Parmi ces attitudes, laquelle est À PROSCRIRE car elle nuit au lien ?",
 ["Quantifier la consommation et restituer les résultats",
  "Mettre en avant les qualités d'une vie sans alcool",
  "Adopter une écoute active sans jugement",
  "Reconnaître l'ambivalence de la patiente"],
 1,
 "Pièges de 1re consultation : vanter la vie sans substance et proposer d'emblée une analyse d'urines compliquent le lien. Quantifier/restituer, l'écoute active et le respect de l'ambivalence sont, eux, recommandés.");

Q("assuetudes",
 "Le triangle d'Olivenstein (Produit – Individu – Environnement) est présenté comme un outil de toutes ces fonctions SAUF une. Laquelle ?",
 ["Prévention", "Dépistage", "Réduction des risques infectieux", "Diagnostic et consultation"],
 2,
 "Olivenstein est un outil de prévention, dépistage, diagnostic et consultation. La réduction des risques est un cadre distinct (prévention des dommages liés à l'usage), pas une fonction du triangle.");

Q("assuetudes",
 "Concernant l'imprégnation et le manque aux opioïdes, quelle association signe-pupille est CORRECTE ?",
 ["Imprégnation → mydriase ; manque → myosis",
  "Imprégnation → myosis ; manque → mydriase",
  "Imprégnation et manque → myosis",
  "Imprégnation et manque → mydriase"],
 1,
 "Imprégnation opioïde = myosis (+ « pique du nez », ↓ FR). Manque = mydriase (+ agitation, « tout coule »). C'est l'inversion myosis/mydriase qui est piégée.");

Q("assuetudes",
 "Dans le modèle des stades de changement (Prochaska & Di Clemente), un patient qui reconnaît un problème mais hésite encore à agir se situe au stade de :",
 ["Précontemplation", "Contemplation", "Action", "Maintien"],
 1,
 "Contemplation = le patient envisage le changement mais reste ambivalent (≠ précontemplation, où le problème n'est pas reconnu ; ≠ action, où il modifie son comportement).");

Q("assuetudes",
 "L'intervention brève (RPIB) selon l'OMS. Laquelle de ces affirmations est FAUSSE ?",
 ["Elle dure de 5 à 20 minutes et peut être répétée",
  "Elle fait suite au repérage d'un usage problématique",
  "Elle s'organise selon 4 étapes (modèle FRAMES)",
  "Elle ne s'adresse qu'aux patients déjà dépendants"],
 3,
 "FAUX : l'intervention brève vise justement les usages problématiques AVANT la dépendance installée. Les 3 autres propositions sont exactes (5-20 min, répétable, après repérage, 4 étapes FRAMES).");

Q("assuetudes",
 "Dans l'entretien motivationnel, le « discours-changement » désigne :",
 ["Les arguments du patient en faveur du statu quo",
  "Les propos du patient qui expriment sa propre motivation à changer",
  "Les conseils directifs donnés par le soignant",
  "La reformulation systématique par le médecin"],
 1,
 "Le discours-changement = les propos par lesquels le patient exprime lui-même sa motivation au changement (à faire émerger et renforcer), par opposition au discours-maintien (en faveur du statu quo).");

Q("assuetudes",
 "Quel terme privilégier pour respecter un langage « centré sur la personne » ?",
 ["« Toxicomane »",
  "« Personne avec un trouble de l'usage de substances »",
  "« Alcoolique »",
  "« Usager dépendant »"],
 1,
 "Langage centré sur la personne : « personne avec un trouble de l'usage de substances ». À bannir : tox, junkie, alcoolique, bourré — termes qui stigmatisent et figent l'identité dans la maladie.");

Q("assuetudes",
 "Concernant la réduction des risques (RdR), une seule affirmation est EXACTE :",
 ["Elle s'oppose à la prévention de l'usage",
  "Elle est réservée aux usagers dépendants",
  "Elle s'adresse à tous les usagers et est complémentaire de la prévention de l'usage",
  "Elle impose l'abstinence comme objectif préalable"],
 2,
 "La RdR s'adresse à TOUS les usagers (expérimentaux à dépendants), sans jugement, et complète (ne s'oppose pas à) la prévention de l'usage. Elle ne pose pas l'abstinence comme préalable.");

Q("assuetudes",
 "Un usager demande conseil avant une consommation festive. Quel conseil de RdR est INCORRECT ?",
 ["Tester de petites quantités et éviter les mélanges",
  "Manger et boire (eau) avant et pendant",
  "Privilégier la consommation seul pour limiter l'influence du groupe",
  "Utiliser du matériel neuf et prévoir le 112 / une SCMR"],
 2,
 "Conseil clé : rester ACCOMPAGNÉ (jamais seul) pour pouvoir réagir en cas de problème. Les autres conseils (petites quantités, manger/boire, matériel neuf, 112/SCMR) sont corrects.");

Q("assuetudes",
 "La métaphore de l'Himalaya (sevrage) transmet surtout l'idée que :",
 ["Le sevrage doit être total et immédiat pour réussir",
  "La rechute (« la chute ») fait partie intégrante du projet et doit être anticipée",
  "Seul un milieu spécialisé permet le sevrage",
  "La préparation est secondaire si la motivation est forte"],
 1,
 "Himalaya : préparation, montée pas à pas, camps de base (cure), et surtout la chute fait partie du projet → anticiper les rechutes plutôt que les vivre comme un échec.");

Q("assuetudes",
 "Quelle substance appartient à la même catégorie pharmacologique que l'alcool selon la classification du cours ?",
 ["La cocaïne", "Les benzodiazépines", "Le cannabis", "Les amphétamines"],
 1,
 "Alcool et benzodiazépines sont des DÉPRESSEURS (avec les opioïdes). Cocaïne/amphétamines = stimulants ; cannabis = perturbateur/hallucinogène.");

Q("assuetudes",
 "Le « cadre de travail » est défini comme l'espace qui protège patient et soignant. Le cours souligne qu'un refus posé par le soignant :",
 ["Rompt nécessairement l'alliance thérapeutique",
  "Est structurant et permet la rencontre plutôt que la répétition",
  "Doit être évité pour ne pas frustrer le patient",
  "Relève uniquement du milieu spécialisé"],
 1,
 "Le refus structurant fait partie du cadre : il protège la relation et permet la rencontre, au lieu de rejouer la répétition (passage à l'acte, demande sans limite).");

Q("assuetudes",
 "Parmi ces propositions concernant le LIEN thérapeutique, laquelle est la moins favorable à son maintien ?",
 ["Pratiquer l'entretien motivationnel",
  "Référer directement et définitivement en milieu spécialisé",
  "Soigner les mots employés",
  "Mobiliser le cercle de Di Clemente"],
 1,
 "Référer directement en se déchargeant nuit au lien : il faut garder le lien, rester en 1re ligne et réorienter en maintenant le suivi. Les 3 autres soutiennent la relation.");

Q("assuetudes",
 "Les 4 étapes de l'intervention brève sont, dans l'ordre :",
 ["Conseiller – informer – restituer – encourager",
  "Restituer les résultats – informer – conseiller – encourager",
  "Informer – restituer – encourager – conseiller",
  "Restituer – encourager – informer – conseiller"],
 1,
 "Ordre OMS/FRAMES : Restituer les résultats → Informer (risques, verre standard) → Conseiller (objectif de changement) → Encourager (soutien, suivi).");

Q("assuetudes",
 "Une seule de ces attitudes définit correctement l'entretien motivationnel :",
 ["Confronter le patient à ses contradictions",
  "Guider plus que diriger, et laisser le patient décider",
  "Prescrire un objectif d'abstinence précis",
  "Donner un maximum d'informations pour convaincre"],
 1,
 "Entretien motivationnel : guider > diriger, danser > lutter, écouter > parler ; c'est le patient qui décide. La confrontation et la persuasion directive sont contre-productives.");

Q("assuetudes",
 "Concernant la détection précoce des assuétudes, quelle proposition est FAUSSE ?",
 ["Elle se fait au moins une fois par an, sans attendre les signes d'appel",
  "Elle peut s'amorcer dès la salle d'attente",
  "Elle doit être réservée aux situations où le patient l'évoque spontanément",
  "Elle s'appuie sur des outils comme le verre standard et l'AUDIT"],
 2,
 "FAUX : il ne faut PAS attendre que le patient évoque le sujet. La détection est proactive (≥ 1×/an, dès la salle d'attente), avec verre standard, AUDIT, Olivenstein.");

Q("assuetudes",
 "Le travail en réseau dans l'accompagnement repose sur l'idée d'interdépendance. Quelle conséquence pratique en découle ?",
 ["On transfère la responsabilité au service spécialisé",
  "On réoriente tout en conservant le lien et le suivi",
  "On évite de multiplier les intervenants",
  "On confie la coordination au seul patient"],
 1,
 "Réseau = interdépendance et valeur ajoutée collective : réorienter oui, mais en gardant le lien et le suivi (pas de transfert de responsabilité ni de désengagement).");

Q("assuetudes",
 "Les attitudes rogériennes fondamentales sont l'empathie, la congruence et :",
 ["La neutralité bienveillante", "Le regard positif inconditionnel", "La distance thérapeutique", "L'interprétation"],
 1,
 "Carl Rogers : empathie, congruence et regard positif inconditionnel. La « neutralité » et la « distance » relèvent d'autres cadres.");

Q("assuetudes",
 "Concernant les modes de consommation et leur pharmacocinétique, quelle proposition est EXACTE ?",
 ["La voie orale donne l'effet le plus rapide",
  "La voie injectable contourne le premier passage hépatique",
  "La voie respiratoire impose un passage hépatique avant la circulation",
  "La voie nasale est toujours plus lente que la voie orale"],
 1,
 "La voie IV contourne le foie → effet immédiat. La voie orale impose le 1er passage hépatique (effet plus lent) ; l'inhalation passe directement dans le sang.");

Q("assuetudes",
 "L'alliance thérapeutique suppose un accord sur plusieurs éléments. Lequel n'en fait PAS partie ?",
 ["Un lien de confiance et de respect",
  "Une compréhension partagée du problème",
  "Le résultat d'une analyse d'urines à chaque visite",
  "Les objectifs et les modalités pour y parvenir"],
 2,
 "L'alliance porte sur le lien de confiance, la compréhension du problème, les objectifs et les modalités. L'analyse d'urines systématique n'en est pas une composante (et est même un piège du lien).");

Q("assuetudes",
 "Quelques repères épidémiologiques belges. Laquelle de ces données correspond au cours ?",
 ["~50 % de fumeurs en Belgique",
  "~27 % de fumeurs, davantage à Bruxelles",
  "Usage de cannabis maximal chez les > 50 ans",
  "~10 % de consommation de drogues illicites dures sur 12 mois"],
 1,
 "Repères du cours : ~27 % de fumeurs (plus à Bruxelles) ; cannabis maximal chez les 25-34 ans ; autres drogues illicites ~1,5 % sur 12 mois.");
// ========== COLLABORATION MÉDECIN–PHARMACIEN — niveau difficile ==========
Q("pharmacien",
 "Patiente de 70 ans sous amiodarone, rivaroxaban, périndopril et rosuvastatine. On lui prescrit de la clarithromycine. Quelle est l'analyse la plus complète ?",
 ["Interaction purement pharmacodynamique (addition sur le QT)",
  "Interaction purement pharmacocinétique (↓ élimination du rivaroxaban)",
  "Interaction PD (QT) ET PK (↓ élimination du rivaroxaban → saignement)",
  "Aucune interaction cliniquement significative"],
 2,
 "Amiodarone + clarithromycine allongent toutes deux le QT (PD, addition) ET inhibent le CYP3A4/PgP → ↓ élimination du rivaroxaban (PK) → risque hémorragique. Les deux mécanismes coexistent.");

Q("pharmacien",
 "Dans le cas précédent, l'amiodarone ayant une demi-vie de 25 à 100 jours, son effet inhibiteur sur le rivaroxaban :",
 ["Disparaît immédiatement à l'arrêt",
  "Persiste environ 24-48 h",
  "Persiste plusieurs mois (≈ 5 × T½)",
  "Ne dépend pas de la demi-vie"],
 2,
 "La durée d'une interaction PK ≈ 5 × T½ de l'inhibiteur. Avec une T½ de 25-100 j, l'amiodarone interagit encore PLUSIEURS MOIS après son arrêt → vigilance prolongée.");

Q("pharmacien",
 "Laquelle de ces associations constitue une véritable CASCADE médicamenteuse ?",
 ["IEC + furosémide",
  "Statine + ibuprofène",
  "Oxybutynine puis laxatif (pour la constipation induite)",
  "Sertraline + métoclopramide"],
 2,
 "Cascade = un EI pris pour un nouveau problème → 2e médicament. Oxybutynine (anticholinergique) → constipation → laxatif. Les autres sont des interactions ou associations, pas des cascades.");

Q("pharmacien",
 "Concernant le rythme d'élimination d'un médicament, quelle affirmation est CORRECTE ?",
 ["Il est quasi totalement éliminé après 2 demi-vies",
  "Il est quasi totalement éliminé après 5 à 7 demi-vies",
  "La demi-vie est le temps nécessaire à son élimination complète",
  "La biodisponibilité détermine sa demi-vie"],
 1,
 "Élimination quasi totale après 5 à 7 T½. La T½ = temps pour réduire la concentration de moitié (pas l'élimination complète). Biodisponibilité ≠ demi-vie.");

Q("pharmacien",
 "Un patient présente des céphalées chroniques quotidiennes. Le DPP révèle une consommation importante d'antimigraineux. Le mécanisme le plus probable est :",
 ["Une interaction pharmacocinétique",
  "Une céphalée par abus médicamenteux (surconsommation)",
  "Une cascade médicamenteuse",
  "Un effet de tolérance pharmacodynamique isolé"],
 1,
 "Le DPP détecte la surconsommation : céphalées par abus d'antalgiques/antimigraineux. Distinct d'une cascade (EI → 2e médicament) et d'une interaction.");

Q("pharmacien",
 "Quel patient est éligible à un BILAN DE MÉDICATION en officine ?",
 ["Patient hospitalisé sous 8 médicaments",
  "Patient ambulatoire prenant ≥ 5 médicaments chroniques remboursés, avec pharmacien de référence",
  "Tout patient de plus de 65 ans",
  "Patient prenant 3 médicaments aigus depuis 1 semaine"],
 1,
 "Critères : patient AMBULATOIRE, suivi particulier, ≥ 5 médicaments CHRONIQUES REMBOURSÉS, pharmacien de référence + DPP. Résultat encodé dans un e-Form envoyé au médecin.");

Q("pharmacien",
 "Concernant la vaccination antigrippale en officine (cadre 2026), quelle proposition est FAUSSE ?",
 ["Le pharmacien formé peut l'administrer aux > 11 ans sans ordonnance",
  "La formation dure au minimum 8 heures et se renouvelle tous les 3 ans",
  "Le pharmacien peut administrer de l'adrénaline en cas de choc anaphylactique",
  "Elle reste limitée à une campagne saisonnière temporaire"],
 3,
 "FAUX : depuis fin 2025, la vaccination grippe en officine est PERMANENTE (loi fédérale). Les 3 autres sont exactes (> 11 ans sans ordonnance, formation 8 h/3 ans, adrénaline si choc).");

Q("pharmacien",
 "Un patient sous benzodiazépine depuis 8 mois souhaite arrêter. Quelle conduite est correcte ?",
 ["Arrêt immédiat, sans risque après ce délai",
  "Arrêt progressif, au besoin via une BZD à longue durée d'action",
  "Doublement de la dose avant l'arrêt",
  "Relais systématique par un Z-drug au long cours"],
 1,
 "Jamais d'arrêt brutal après une prise prolongée : sevrage PROGRESSIF (50 à 360 j), au besoin via une BZD à longue durée d'action. Piège classique : « on peut arrêter du jour au lendemain » = FAUX.");

Q("pharmacien",
 "Quel outil/dispositif est pertinent pour la déprescription chez la personne âgée polymédiquée ?",
 ["L'échelle de Katz",
  "La règle « maximum 6 médicaments par jour »",
  "Les critères START & STOPP et GheOP3S",
  "Le score de Fried"],
 2,
 "Déprescription : START & STOPP, GheOP3S, conseils pluridisciplinaires. Piège : « max 6/jour » n'est PAS un outil. Katz (autonomie) et Fried (fragilité) n'évaluent pas la polymédication.");

Q("pharmacien",
 "Concernant la pharmacovigilance, une seule proposition est FAUSSE :",
 ["Elle peut être notifiée par le patient lui-même",
  "On signale aussi un effet indésirable déjà connu",
  "Elle ne sert qu'à signaler des effets indésirables avérés (jamais suspectés)",
  "Le triangle noir inversé désigne un médicament récent sous surveillance"],
 2,
 "FAUX : les bases EMA/OMS sont alimentées par les EI suspectés ET avérés. Notifiable par médecin/pharmacien/infirmier/patient ; on signale même un EI connu. Triangle noir = médicament < 5 ans surveillé.");

Q("pharmacien",
 "Quels facteurs de risque d'allongement du QT figurent dans le cours ?",
 ["Homme jeune, hyperkaliémie, tachycardie",
  "Femme, > 65 ans, hypokaliémie, bradycardie, hypothyroïdie",
  "Hyperthyroïdie, hypermagnésémie, exercice physique",
  "Âge < 40 ans, hypercalcémie, fièvre"],
 1,
 "QT long / torsade : femme, > 65 ans, hypoK/hypoMg/hypoCa, bradycardie, hypothyroïdie, QT long préexistant. Attention quand 2 médicaments « liste 1 » sont associés.");

Q("pharmacien",
 "La rémunération du pharmacien pour les médicaments remboursés a été dissociée du prix du médicament en 2010. Que signifie ce changement ?",
 ["Le pharmacien gagne plus sur les médicaments chers",
  "Le pharmacien est rémunéré pour la prestation de soins pharmaceutiques, pas selon le prix",
  "Le médicament est devenu gratuit",
  "La marge est désormais proportionnelle au prix"],
 1,
 "2010 : rémunération dissociée du prix → le pharmacien est payé pour la PRESTATION de soins pharmaceutiques (conseil, sécurité), indépendamment du prix du médicament.");

Q("pharmacien",
 "Dans la démarche QUIDAM – ANALYSE – DÉCISION – INFORMATION, à quelle étape vérifie-t-on indication, contre-indications, posologie, interactions et doublons ?",
 ["QUIDAM", "ANALYSE", "DÉCISION", "INFORMATION"],
 1,
 "ANALYSE = validation de la prescription (indication, CI, posologie/modalités, durée, interactions, cascade, doublons). QUIDAM = identifier patient/vulnérabilité ; DÉCISION = délivrer ou non ; INFORMATION = expliquer.");

Q("pharmacien",
 "Le Dossier Pharmaceutique Partagé (DPP). Quelle proposition est EXACTE ?",
 ["Il ne couvre que les médicaments remboursés sur prescription",
  "Il couvre médicaments (prescrits ou non), compléments encodés et magistrales, sous consentement",
  "Il est accessible sans le consentement du patient",
  "Il remplace le schéma de médication du pharmacien de référence"],
 1,
 "Le DPP couvre médicaments prescrits OU non, compléments encodés au nom du patient et magistrales ; accès soumis au CONSENTEMENT. Il aide à détecter doublons, cascades, surconsommation.");

Q("pharmacien",
 "Une « interaction pharmacodynamique » se distingue d'une interaction pharmacocinétique car :",
 ["Elle modifie l'absorption ou le métabolisme du médicament",
  "Elle correspond à des effets qui s'additionnent (ex. allongement du QT)",
  "Elle dure environ 5 × la demi-vie de l'inhibiteur",
  "Elle concerne uniquement les inhibiteurs du CYP3A4"],
 1,
 "PD = effets qui s'additionnent (ex. 2 médicaments allongeant le QT). PK = modification de l'ADME (absorption, métabolisme, élimination) — c'est elle qui dure ≈ 5 × T½ de l'inhibiteur.");

Q("pharmacien",
 "Un index thérapeutique étroit (ex. AOD, certains anticoagulants) impose une vigilance particulière chez :",
 ["Le sujet jeune sans comorbidité",
  "Le patient âgé, insuffisant rénal ou polymédiqué",
  "Le patient prenant un seul médicament",
  "Le sportif de haut niveau"],
 1,
 "Index étroit : adapter la dose si insuffisance rénale, surveiller les erreurs de prise et les nombreuses interactions — surtout chez le patient âgé / IR / polymédiqué.");

Q("pharmacien",
 "Concernant Recip-e (prescription électronique), une seule affirmation est VRAIE :",
 ["Elle est envoyée directement dans l'officine désignée par le médecin",
  "C'est un message non adressé, crypté, récupéré par le prestataire choisi par le patient",
  "Elle supprime tout risque de fraude",
  "Elle transite par MyCareNet et non par eHealth"],
 1,
 "Recip-e : message NON adressé, crypté, via eHealth ; récupéré par la pharmacie CHOISIE par le patient. Elle n'est pas « envoyée » dans une officine précise et ne supprime pas tout risque de fraude.");

Q("pharmacien",
 "Un patient présente un usage détourné associant codéine, antihistaminique et soda. Cette pratique vise :",
 ["Un effet stimulant et anorexigène",
  "Un effet euphorisant/sédatif",
  "Un effet antalgique pur",
  "Une amélioration des performances sportives"],
 1,
 "Usage détourné cité : codéine (paracodine) + antihistaminique + soda → effet euphorisant/sédatif. Le DPP aide à repérer ce type de surconsommation/détournement.");

Q("pharmacien",
 "Le « pharmacien de référence » a notamment pour mission de :",
 ["Délivrer sans accéder au DPP",
  "Tenir à jour le schéma de médication, avec accès obligatoire au DPP",
  "Remplacer le médecin pour le renouvellement des chroniques",
  "Gérer la facturation du tiers payant à la place de la mutuelle"],
 1,
 "Le pharmacien de référence tient à jour le schéma de médication et a accès OBLIGATOIRE au DPP (avec consentement) ; il peut transmettre une note dans le DMI du médecin.");

Q("pharmacien",
 "Les entretiens BUM (Bon Usage du Médicament) ciblent actuellement :",
 ["Le diabète et l'hypertension",
  "L'asthme et la BPCO (technique d'inhalation, observance)",
  "L'anticoagulation et la FA",
  "La dépression et l'anxiété"],
 1,
 "BUM : asthme et BPCO, centrés sur la technique d'inhalation et l'observance, dans une logique d'éducation thérapeutique (empowerment).");

Q("pharmacien",
 "À la sortie d'hôpital, une voisine récupère une prescription d'énoxaparine 120 mg pour un patient mince et âgé. Le réflexe pharmaceutique attendu est :",
 ["Délivrer sans vérification, la prescription faisant foi",
  "Vérifier l'adéquation de la dose au poids et à l'indication, et au besoin contacter le médecin",
  "Refuser toute délivrance par principe",
  "Diviser la dose de sa propre initiative"],
 1,
 "Réflexe : vérifier la dose selon le poids et l'indication (énoxaparine 120 chez un patient mince = drapeau) → contacter/proposer au médecin. Ni délivrance aveugle, ni modification unilatérale.");

Q("pharmacien",
 "L'interprofessionnalité médecin–pharmacien est présentée comme :",
 ["Une relation de concurrence à réguler",
  "Une complémentarité au sein de la 1re ligne, centrée sur le patient",
  "Une subordination du pharmacien au médecin",
  "Un dispositif réservé au milieu hospitalier"],
 1,
 "La pharmacie est un maillon de la 1re ligne : complémentarité (pas concurrence), objectifs centrés patient, cadre éthique et légal (attention au RGPD pour les échanges).");

Q("pharmacien",
 "Pour gérer un patient au comportement difficile (ex. surconsommation), l'outil de collaboration le plus adapté est :",
 ["Une note unilatérale dans le dossier du médecin",
  "Une convention écrite médecin–patient–pharmacien, signée par chacun",
  "Le signalement systématique à la mutuelle",
  "La limitation à 6 médicaments par jour"],
 1,
 "La convention écrite tripartite (médecin–patient–pharmacien), signée, sert d'outil thérapeutique et de référence face à un comportement difficile.");
// ========== LA RECHERCHE EN MÉDECINE GÉNÉRALE — niveau difficile ==========
Q("recherche",
 "On souhaite étudier si l'exposition à un pesticide augmente l'incidence d'un cancer rare. On part de sujets exposés et non exposés, suivis dans le temps. Quel type d'étude ?",
 ["Étude cas-témoins", "Étude de cohorte", "Étude transversale", "Essai contrôlé randomisé"],
 1,
 "Partir de l'EXPOSITION et suivre la survenue = cohorte (prospective). Le cas-témoins partirait de la maladie (cas vs témoins) pour regarder l'exposition en arrière.");

Q("recherche",
 "Pour une maladie RARE, quel devis est le plus efficient car il part des malades pour rechercher l'exposition ?",
 ["Étude de cohorte prospective", "Étude cas-témoins", "Essai randomisé", "Étude écologique"],
 1,
 "Pour une maladie rare, le cas-témoins est efficient : on part des cas (malades) et de témoins, puis on recherche rétrospectivement l'exposition. Une cohorte exigerait un suivi énorme pour observer assez de cas.");

Q("recherche",
 "Classez par niveau de preuve CROISSANT :",
 ["Méta-analyse < cohorte < série de cas",
  "Série de cas < cohorte < méta-analyse / revue systématique",
  "Cohorte < série de cas < méta-analyse",
  "Revue systématique < cohorte < essai randomisé"],
 1,
 "Niveau de preuve croissant : série de cas (descriptif) < études analytiques (cohorte) < recherche secondaire (revue systématique / méta-analyse), au sommet.");

Q("recherche",
 "La prévention QUATERNAIRE (M. Jamoulle) vise à protéger le patient :",
 ["Du sous-diagnostic et du retard de prise en charge",
  "De la surmédicalisation et des interventions invasives inutiles",
  "Des maladies transmissibles par la vaccination",
  "Des complications d'une maladie déjà installée"],
 1,
 "Prévention quaternaire = lutter contre la surmédicalisation/le surdiagnostic. À ne pas confondre : primaire (éviter la maladie), secondaire (dépistage), tertiaire (limiter les complications).");

Q("recherche",
 "Lequel de ces gestes relève de la prévention QUATERNAIRE ?",
 ["Réaliser une coloscopie de dépistage à 55 ans",
  "Éviter un scanner pour une lombalgie commune sans red flags",
  "Vacciner contre la grippe un patient BPCO",
  "Prescrire une statine en prévention secondaire"],
 1,
 "Éviter un examen inutile (scanner pour lombalgie banale) = prévention quaternaire. Le dépistage (coloscopie) = secondaire ; la vaccination = primaire ; la statine post-IDM = prévention/traitement, pas quaternaire.");

Q("recherche",
 "Une association statistique forte entre deux variables :",
 ["Démontre nécessairement un lien de causalité",
  "N'implique pas à elle seule un lien de cause à effet",
  "Exclut tout facteur de confusion",
  "Suffit à valider une hypothèse interventionnelle"],
 1,
 "Une association n'implique pas la causalité (facteurs de confusion, biais, hasard possibles). Établir la causalité nécessite d'autres critères et idéalement une démarche expérimentale.");

Q("recherche",
 "Selon le « carré de White », quel constat sous-tend l'intérêt de la recherche EN médecine générale ?",
 ["La majorité des problèmes se règlent à l'hôpital",
  "La majorité des problèmes se gèrent en 1re ligne, mais les moyens de recherche y sont sous-proportionnés",
  "Les soins primaires ne se prêtent pas à la recherche",
  "Tous les patients consultent au moins un spécialiste par an"],
 1,
 "Carré de White : l'essentiel des problèmes de santé se gère en ambulatoire/1re ligne, alors que les moyens de recherche se concentrent à l'hôpital → déséquilibre que la recherche en MG cherche à corriger.");

Q("recherche",
 "L'approche épistémologique INTERPRÉTATIVE débouche typiquement sur :",
 ["Une recherche quantitative à variables mesurables",
  "Une recherche qualitative axée sur la construction du sens",
  "Un essai randomisé",
  "Une méta-analyse"],
 1,
 "Interprétatif → la réalité se comprend via les constructions sociales (sens, contexte) → recherche QUALITATIVE. Le positivisme (propriétés mesurables) débouche, lui, sur le quantitatif.");

Q("recherche",
 "Parmi ces médecins « curieux », lequel est associé à l'épidémiologie clinique via un suivi longitudinal de 16 ans sur le zona ?",
 ["Robert Koch", "James Herrick", "Edgar Hope-Simpson", "Archie Cochrane"],
 2,
 "Hope-Simpson → zona, cohorte de 16 ans (épidémiologie clinique). Koch → microbiologie ; Herrick → anémie falciforme (recherche clinique) ; Cochrane → essai randomisé / EBM.");

Q("recherche",
 "Le sigle PICO, utilisé pour formuler une question de recherche, signifie :",
 ["Patient – Intervention – Comparateur – Outcome",
  "Population – Incidence – Cohorte – Observation",
  "Problème – Item – Critère – Objectif",
  "Prévalence – Intervention – Coût – Outcome"],
 0,
 "PICO = Population, Intervention, Comparateur, Outcome (résultat). Avec QQOQCCP, c'est un outil de structuration de la question de recherche.");

Q("recherche",
 "L'ICPC-3 se distingue de la CIM (Classification Internationale des Maladies) car :",
 ["Elle classe uniquement les causes de décès",
  "Elle est centrée sur le patient et adaptée à la consultation de 1re ligne",
  "Elle est réservée au codage hospitalier",
  "Elle ne concerne que la recherche fondamentale"],
 1,
 "ICPC-3 (soutenue par la WONCA) : nomenclature centrée sur le PATIENT et le motif de consultation, adaptée aux soins primaires — distincte de la CIM, centrée sur la maladie.");

Q("recherche",
 "La méthode Delphi et la technique du groupe nominal sont classées parmi les méthodes :",
 ["Qualitatives pures", "Quantitatives analytiques", "Semi-quantitatives", "Médico-économiques"],
 2,
 "Delphi et groupe nominal = méthodes SEMI-quantitatives (recherche de consensus structuré).");

Q("recherche",
 "Parmi les critères de validité d'un programme de dépistage, lequel est INDISPENSABLE ?",
 ["La maladie doit être rare pour limiter les coûts",
  "Un traitement d'efficacité démontrée doit être disponible",
  "Le test doit être invasif pour être fiable",
  "La maladie ne doit pas avoir de phase latente détectable"],
 1,
 "Un dépistage utile suppose : maladie fréquente ET grave, TRAITEMENT EFFICACE disponible, test acceptable/fiable, coût acceptable, phase latente détectable. Dépister sans traitement efficace est inutile, voire nuisible.");

Q("recherche",
 "La définition WONCA (2002) de la médecine générale insiste sur le fait qu'elle est :",
 ["Une sur-spécialité d'organe",
  "Une discipline scientifique et universitaire avec ses propres fondements",
  "Une pratique sans contenu de recherche propre",
  "Une activité strictement administrative de tri"],
 1,
 "WONCA 2002 : discipline scientifique ET universitaire, avec son contenu de formation, de recherche, de pratique clinique et ses fondements propres ; spécialité clinique orientée soins primaires.");

Q("recherche",
 "Les 3 dimensions fondamentales de la MG (au-delà des compétences) sont :",
 ["Préventive, curative, palliative",
  "Contextuelle, comportementale, scientifique",
  "Diagnostique, thérapeutique, relationnelle",
  "Biologique, psychologique, sociale"],
 1,
 "Trois dimensions : CONTEXTUELLE (personne/famille/communauté/culture), COMPORTEMENTALE (valeurs, éthique), SCIENTIFIQUE (approche critique fondée sur la recherche).");

Q("recherche",
 "Selon Ian McWhinney, une caractéristique propre de la MG est qu'elle :",
 ["Se définit par un organe ou une technique",
  "Se définit en termes de relations et pense en termes de patients individuels",
  "Cherche à éliminer toute incertitude",
  "Refuse la métaphore organismique"],
 1,
 "McWhinney : seule discipline se définissant en termes de relations (médecin-malade), pensant en patients individuels, reposant sur une métaphore organismique, transcendant le dualisme corps-esprit, au plus haut niveau de complexité et d'incertitude.");

Q("recherche",
 "La méthode expérimentale (hypothético-déductive) s'ordonne ainsi :",
 ["Hypothèse → observation → conclusion → expérience",
  "Observation → problème → hypothèse → … → conclusion",
  "Expérience → hypothèse → observation → résultat",
  "Conclusion → hypothèse → observation → problème"],
 1,
 "Ordre : Observation → Problème → Hypothèse → Conséquence → Expérience → Résultat → Interprétation → Conclusion. Elle part toujours de l'observation, jamais de la conclusion.");

Q("recherche",
 "Les 6 compétences fondamentales de l'« arbre WONCA » comprennent toutes celles-ci SAUF :",
 ["Gestion des soins de santé primaires",
  "Soins centrés sur la personne",
  "Maîtrise des actes de chirurgie spécialisée",
  "Approche globale et orientation communautaire"],
 2,
 "Les 6 compétences : soins primaires, centrés personne, résolution de problèmes, approche globale, orientation communautaire, modèle holistique. La chirurgie spécialisée n'en fait pas partie.");

Q("recherche",
 "Les trois orientations possibles de la recherche en MG sont la recherche :",
 ["Avant, pendant et après les soins",
  "EN, PAR et SUR la médecine générale",
  "Locale, nationale et internationale",
  "Fondamentale, clinique et translationnelle"],
 1,
 "Recherche EN médecine générale, PAR les médecins généralistes, SUR la médecine générale.");

Q("recherche",
 "Un essai clinique randomisé pragmatique se classe parmi les études :",
 ["Qualitatives", "Descriptives", "Analytiques observationnelles", "Interventionnelles"],
 3,
 "L'ECR (conventionnel, adaptatif ou pragmatique) est une étude INTERVENTIONNELLE (le chercheur attribue l'intervention), distincte des études observationnelles (cohorte, cas-témoins).");

Q("recherche",
 "Concernant l'histoire de la MG en Belgique, quelle affirmation est EXACTE ?",
 ["L'INAMI a été créé par la SSMG en 1968",
  "La SSMG (Société Scientifique de Médecine Générale) date de 1968",
  "La spécialisation de la MG a favorisé sa recherche dès 1952",
  "Le Collège de Médecine Générale a été dissous en 2018"],
 1,
 "1968 : SSMG. La spécialisation (AR 1983) a longtemps RETARDÉ la recherche ; intégration académique depuis 2009 ; Collège de MG créé (pas dissous) en 2018.");

Q("recherche",
 "Parmi ces résultats issus de la recherche en MG (Rev Med Suisse 2025), lequel est correct ?",
 ["La coloscopie est largement supérieure au test immunologique fécal (TIF)",
  "Le TIF bisannuel est non inférieur à la coloscopie pour le dépistage colorectal",
  "L'aspirine surpasse le clopidogrel en prévention secondaire",
  "Les bêtabloquants sont bénéfiques après tout IDM, même à FEVG préservée"],
 1,
 "Résultats cités : TIF bisannuel NON INFÉRIEUR à la coloscopie ; clopidogrel > aspirine en prévention secondaire ; bêtabloquants post-IDM sans bénéfice établi si FEVG préservée.");
// ========== LE MG ET LES PLAINTES LIÉES AU SPORT — niveau difficile ==========
Q("sport",
 "Un homme de 24 ans, asymptomatique, veut courir un semi-marathon et demande un « bilan cardiaque complet ». Que recommande le cours (KCE) ?",
 ["Un ECG de repos systématique",
  "Une épreuve d'effort annuelle",
  "Pas de dépistage cardiaque systématique : rechercher seulement des symptômes d'alarme",
  "Une échocardiographie de référence"],
 2,
 "< 35 ans asymptomatique : pas de dépistage systématique (balance bénéfice-risque négative, 5-30 % de faux positifs). On recherche uniquement des symptômes d'alarme (douleur thoracique d'effort, syncope, palpitations).");

Q("sport",
 "Concernant la mort subite cardiaque, quelle affirmation est EXACTE ?",
 ["Elle est plus fréquente chez le jeune sportif que chez l'adulte d'âge mûr",
  "Chez le jeune (< 35 ans), elle est très rare et touche davantage les garçons",
  "Elle est principalement due à des cardiopathies congénitales chez l'adulte",
  "Son incidence chez le jeune justifie un ECG de masse"],
 1,
 "La mort subite est surtout le fait d'adultes d'âge mûr déjà cardiaques (souvent IDM). Chez le jeune < 35 ans elle est très rare (≤ 10/million/an), ~10× plus chez les garçons — sans justifier un dépistage de masse.");

Q("sport",
 "Un homme de 52 ans, sédentaire, veut reprendre le footing. SCORE2 à risque faible, asymptomatique. Conduite la plus adaptée :",
 ["Réaliser d'emblée une épreuve d'effort",
  "Le rassurer et l'encourager à reprendre une activité physique progressive",
  "Lui interdire la course en raison de l'âge",
  "Exiger une coronarographie préalable"],
 1,
 "≥ 40-50 ans : évaluer le risque CV (SCORE2). Si FAIBLE et asymptomatique → rassurer et encourager l'AP progressive. Bilan cardiaque réservé aux symptomatiques ou à risque élevé.");

Q("sport",
 "Chez un patient diabétique de type 1, avant un effort, une glycémie capillaire de 5 mmol/L (~90 mg/dl) impose de :",
 ["Faire l'effort sans précaution",
  "Prendre au moins 15 g de glucides avant de débuter",
  "Injecter de l'insuline rapide",
  "Reporter définitivement toute activité physique"],
 1,
 "Avant l'effort : < 6-8 mmol/L → prendre ≥ 15 g de glucides ; 8-14 mmol/L → OK ; > 15 mmol/L → vérifier la cétonurie. À 5 mmol/L, risque d'hypoglycémie → glucides d'abord.");

Q("sport",
 "Toujours chez le diabétique, laquelle de ces situations CONTRE-INDIQUE l'effort (à reporter) ?",
 ["Glycémie à 180 mg/dl sans cétonurie",
  "Glycémie > 250 mg/dl AVEC cétonurie",
  "HbA1c à 7,5 %",
  "Pratique d'un sport d'endurance"],
 1,
 "CI : reporter si hyperglycémie > 250 mg/dl + cétonurie (ou > 300 sans), ou glycémie < 127 mg/dl. Une glycémie de 180 sans cétonurie n'est pas une CI ; l'endurance est même recommandée.");

Q("sport",
 "Parmi ces seuils, lequel constitue une CONTRE-INDICATION à l'activité physique chez un patient en cours de chimiothérapie ?",
 ["Hémoglobine à 11 g/dl",
  "Plaquettes à 80 000/mm³",
  "Neutrophiles < 500/mm³ (neutropénie sévère)",
  "Température à 37,5 °C"],
 2,
 "CI : neutropénie < 500/mm³, anémie Hb < 9,5 g/dl, thrombopénie < 20 000/mm³, fièvre > 38 °C, métastases osseuses. Les valeurs proposées (Hb 11, plaq 80 000, 37,5 °C) restent au-dessus des seuils.");

Q("sport",
 "Un coureur enchaîne les tendinopathies. Le facteur de risque MODIFIABLE majeur, selon le cours, est :",
 ["La morphologie des membres inférieurs",
  "La mauvaise gestion de la charge d'entraînement",
  "L'âge du coureur",
  "Le type de chaussures uniquement"],
 1,
 "La gestion de la charge est le facteur de risque majeur ET modifiable. Règle : augmentation < 10 %/semaine (ratio charge aiguë:chronique 0,8-1,3) + renforcement hanche/core.");

Q("sport",
 "Une adolescente se plaint de douleurs ANTÉRIEURES du genou en montant les escaliers, sans épanchement. Diagnostic le plus probable :",
 ["Syndrome de l'essuie-glace (bandelette ilio-tibiale)",
  "Syndrome fémoropatellaire",
  "Maladie d'Osgood-Schlatter",
  "Gonarthrose débutante"],
 1,
 "Douleur ANTÉRIEURE (escaliers, squats) chez l'adolescente = syndrome fémoropatellaire (imagerie peu utile, rééducation/quadriceps). L'essuie-glace donne une douleur LATÉRALE ; Osgood-Schlatter siège sur la tubérosité tibiale.");

Q("sport",
 "Un coureur a une douleur de la face LATÉRALE du genou apparaissant à l'effort et cédant au repos. Le diagnostic évoqué est :",
 ["Syndrome fémoropatellaire",
  "Syndrome de l'essuie-glace (bandelette ilio-tibiale)",
  "Entorse du ligament latéral interne",
  "Apophysite tibiale"],
 1,
 "Douleur LATÉRALE du genou à l'effort chez le coureur = syndrome de l'essuie-glace (friction de la bandelette ilio-tibiale) ; diagnostic clinique, traitement conservateur.");

Q("sport",
 "La maladie d'Osgood-Schlatter. Laquelle de ces propositions est FAUSSE ?",
 ["C'est une apophysite de surmenage de l'enfant sportif",
  "La reprise se décide sur la disparition de la douleur, pas sur l'imagerie",
  "Le repos sportif sélectif dure typiquement 3 à 6 mois",
  "Elle nécessite une chirurgie dans la majorité des cas"],
 3,
 "FAUX : le traitement est conservateur (repos sélectif 3-6 mois, reprise sur l'absence de douleur). La chirurgie n'est pas la règle.");

Q("sport",
 "Chez un adolescent déconditionné qui « ne sait pas courir », l'ordre de fréquence des causes de dyspnée d'effort est :",
 ["Asthme > déconditionnement > anxiété",
  "Déconditionnement > anxiété > asthme d'effort > obstruction laryngée",
  "Obstruction laryngée > asthme > déconditionnement",
  "Cardiopathie > asthme > anxiété"],
 1,
 "Par fréquence : déconditionnement > anxiété > asthme d'effort > obstruction laryngée induite par l'effort. L'asthme n'est pas la 1re cause.");

Q("sport",
 "Pour la gonarthrose du sportif (stade léger à modéré), quelle option n'est PAS proposée par le cours ?",
 ["Exercice thérapeutique",
  "Viscosupplémentation (acide hyaluronique)",
  "PRP (plasma riche en plaquettes)",
  "Prothèse totale du genou d'emblée"],
 3,
 "Stades légers-modérés : exercice thérapeutique, viscosupplémentation, PRP. La prothèse d'emblée n'est pas indiquée à ce stade.");

Q("sport",
 "En matière de dopage, les glucocorticoïdes (classe S9). Quelle affirmation est EXACTE ?",
 ["Ils sont interdits en permanence (en et hors compétition)",
  "Ils sont interdits en compétition ; une infiltration > 3 jours avant est possible",
  "Ils sont toujours autorisés par voie injectable",
  "Ils figurent parmi les agents masquants (S5)"],
 1,
 "Glucocorticoïdes = S9, interdits EN COMPÉTITION (oral/IV/IM/rectal). Une infiltration réalisée > 3 jours avant la compétition est possible (sinon AUT). Ce ne sont pas des agents masquants.");

Q("sport",
 "Un étudiant prépare les 20 km de Bruxelles et utilise du salbutamol inhalé. Quelle est la règle antidopage ?",
 ["Interdit en toute circonstance",
  "Autorisé sous seuil (≈ 2 bouffées/6 h, soit ~4×/24 h)",
  "Autorisé uniquement avec une AUT préalable",
  "Considéré comme un anabolisant (S1)"],
 1,
 "Le salbutamol inhalé est autorisé SOUS SEUIL (≈ 1600 µg/24 h, soit ~2 bouffées toutes les 6 h). Au-delà → contrôle positif. C'est un bêta-2 agoniste (S3), pas un anabolisant.");

Q("sport",
 "Un marathonien demande de l'acétazolamide (Diamox) pour un trek en altitude. Sur le plan antidopage :",
 ["Autorisé, car non performant",
  "Interdit en permanence (S5, diurétique/agent masquant) → AUT nécessaire",
  "Interdit seulement en compétition (S9)",
  "Autorisé sous seuil comme le salbutamol"],
 1,
 "L'acétazolamide est un diurétique/agent masquant (S5), INTERDIT EN PERMANENCE → AUT obligatoire même pour un usage médical (mal aigu des montagnes).");

Q("sport",
 "Classez correctement : substances interdites EN PERMANENCE (et hors compétition) :",
 ["Stimulants (S6) et narcotiques (S7)",
  "Anabolisants (S1), hormones peptidiques (S2), diurétiques/masquants (S5)",
  "Cannabinoïdes (S8) et glucocorticoïdes (S9)",
  "Bêta-bloquants (P1) dans tous les sports"],
 1,
 "Interdits en permanence : S1 anabolisants, S2 hormones (EPO, GH), S3 bêta-2, S4 modulateurs, S5 diurétiques/masquants. Interdits EN COMPÉTITION en plus : S6 stimulants, S7 narcotiques, S8 cannabinoïdes, S9 glucocorticoïdes.");

Q("sport",
 "Le concept « Exercise as medicine ». Quelle proposition est FAUSSE ?",
 ["L'AP a un effet prouvé dans de nombreuses maladies chroniques (~26)",
  "Chez le cancéreux, l'AP réduit la fatigue, la mortalité et la récidive",
  "Le repos systématique est préférable après un cancer",
  "Après 50 ans, l'AP lutte contre la sarcopénie et la baisse de VO2 max"],
 2,
 "FAUX : loin du repos systématique, l'AP est une thérapeutique (réduit fatigue/mortalité/récidive). Les 3 autres propositions sont exactes.");

Q("sport",
 "Le dopage, au sens du Code mondial antidopage, recouvre :",
 ["Uniquement la présence d'une substance interdite",
  "11 types de violations (usage, possession, trafic, contrôles manqués, complicité…)",
  "Seulement les sports de compétition officiels",
  "Exclusivement les substances injectables"],
 1,
 "11 violations possibles (pas seulement la présence) : usage, soustraction au contrôle, contrôles manqués, falsification, possession, trafic, administration, complicité, association, représailles. Depuis 2020, le sport « libre » peut aussi être contrôlé.");

Q("sport",
 "Un certificat de non-contre-indication au sport atteste exactement :",
 ["L'absence de tout risque cardiaque",
  "L'aptitude au sport de haut niveau",
  "L'absence de contre-indication APPARENTE à la pratique d'un sport",
  "La nécessité d'un ECG de contrôle annuel"],
 2,
 "Le certificat atteste « pas de contre-indication APPARENTE » : il ne garantit pas l'absence de tout risque et n'implique pas d'ECG systématique chez le jeune asymptomatique.");

Q("sport",
 "Pour évaluer et tracer le niveau d'activité physique (obligatoire dans le DMI selon l'AR 2024), on utilise :",
 ["Le test de Tinetti", "Le GPAQ (OMS)", "Le questionnaire AUDIT", "Le score SCORE2"],
 1,
 "GPAQ (Global Physical Activity Questionnaire, OMS) : auto-administrable, 3 niveaux (faible/modéré/élevé). Le niveau d'AP doit figurer dans le DMI (AR du 25/05/2024).");

Q("sport",
 "Un enfant asthmatique bien contrôlé veut faire du football. Le conseil correct est :",
 ["Le déconseiller pour éviter les crises",
  "L'autoriser : l'AP améliore le contrôle de l'asthme et la fonction pulmonaire",
  "Le limiter aux sports aquatiques uniquement",
  "Exiger un test d'effort préalable"],
 1,
 "L'asthme n'est pas une CI : l'AP améliore le contrôle, la qualité de vie et la fonction pulmonaire (aucune étude ne montre d'aggravation). L'effort modéré régulier réduit même les infections respiratoires (−40 %).");

Q("sport",
 "Concernant l'AMA/WADA, quelle affirmation est EXACTE ?",
 ["Elle est financée à 100 % par le CIO",
  "Elle est financée à parts égales par le CIO et les États ; l'ONAD applique le Code localement",
  "Elle délivre directement les AUT aux athlètes",
  "Elle ne met à jour sa liste que tous les 5 ans"],
 1,
 "AMA/WADA (1999) : financée 50 % CIO / 50 % États. Liste mise à jour ANNUELLEMENT (1er janvier). L'AUT se demande à l'ONAD (qui applique le Code localement).");
// ========== ONE HEALTH : MÉDECINE & ENVIRONNEMENT — niveau difficile ==========
Q("onehealth",
 "Dans le secteur de la santé, quel poste représente la plus grande part des émissions de gaz à effet de serre ?",
 ["Le chauffage et l'énergie des bâtiments hospitaliers",
  "Les déplacements des patients et du personnel",
  "L'achat des médicaments et dispositifs médicaux (~54 %)",
  "La gestion des déchets de soins"],
 2,
 "Plus de 85 % des émissions sont indirectes ; l'achat de médicaments et dispositifs médicaux pèse ~54 % des GES = 1er poste. Le secteur santé ≈ 8 % de l'empreinte nationale.");

Q("onehealth",
 "Un patient asthmatique adhérent et bien équilibré sous pMDI. Au nom de l'écologie, faut-il le passer à un DPI ?",
 ["Oui, systématiquement, car le DPI pollue moins",
  "Pas de façon imposée : décision partagée, car imposer un dispositif peut nuire à l'observance",
  "Non, le DPI est moins efficace que le pMDI",
  "Oui, mais uniquement chez l'enfant de moins de 5 ans"],
 1,
 "DPI = pMDI en efficacité et pollue moins, MAIS aucun dispositif ne garantit l'adhérence : imposer un changement peut nuire (mauvaise utilisation, exacerbations). On privilégie la décision partagée. DPI à éviter < 5 ans / faible capacité inspiratoire.");

Q("onehealth",
 "Les « 4R » de la santé durable, par ordre de PRIORITÉ décroissante :",
 ["Recycler > Réduire > Remplacer",
  "Réduire > Remplacer > Recycler (et Repenser)",
  "Remplacer > Réduire > Recycler",
  "Repenser > Recycler > Réduire > Remplacer"],
 1,
 "Ordre de priorité : RÉDUIRE (agir sur besoins/demandes/réponses) en premier, puis Remplacer, puis Recycler (et Repenser). Réduire prime sur recycler.");

Q("onehealth",
 "À indication équivalente, en termes de santé durable, on préférera prescrire :",
 ["Le diclofénac plutôt que l'ibuprofène",
  "L'ibuprofène plutôt que le diclofénac (moins écotoxique)",
  "Le médicament le plus récent",
  "Le médicament au plus grand conditionnement"],
 1,
 "À molécule équivalente, choisir l'option la moins nocive pour l'environnement : l'ibuprofène est moins écotoxique que le diclofénac. Question type « conséquences en santé durable ».");

Q("onehealth",
 "Quelles classes de médicaments sont citées comme les plus à risque pour l'environnement ?",
 ["Vitamines, minéraux, probiotiques",
  "Hormones, antibiotiques, anticancéreux, antidépresseurs, antalgiques",
  "Sérums physiologiques et pansements",
  "Vaccins exclusivement"],
 1,
 "Classes à risque : hormones, antalgiques, antibiotiques, anticancéreux, antidépresseurs — actifs même à très faibles concentrations. Les stations d'épuration ne filtrent pas ces micropolluants.");

Q("onehealth",
 "Le score PBT utilisé en écotoxicité évalue :",
 ["Pharmacocinétique, Biodisponibilité, Toxicité",
  "Persistance, Bioaccumulation, Toxicité",
  "Prévention, Bénéfice, Traitement",
  "Pollution, Biodégradabilité, Tératogénicité"],
 1,
 "PBT = Persistance, Bioaccumulation, Toxicité (avec l'indice HAZARD) : outils d'évaluation de l'écotoxicité d'un médicament.");

Q("onehealth",
 "La théorie du « Donut » (K. Raworth) propose :",
 ["Un modèle de tarification des soins",
  "Un espace sûr et juste entre un plancher social et un plafond environnemental",
  "Une classification des médicaments par remboursement",
  "Une échelle de fragilité du patient âgé"],
 1,
 "Donut de Raworth : opérer dans un espace « sûr et juste », au-dessus d'un plancher social et en-dessous d'un plafond environnemental.");

Q("onehealth",
 "Les « 3 P » du développement durable sont :",
 ["Patient, Prévention, Profit",
  "People, Planet, Profit",
  "Public, Privé, Partenariat",
  "Prévention, Promotion, Protection"],
 1,
 "Développement durable = 3 P : People, Planet, Profit. On passe de la RSE (responsabilité sociale des entreprises) à la RSS (responsabilité sociale en santé).");

Q("onehealth",
 "Selon la Commission Lancet (2015), agir sur le changement climatique constitue :",
 ["Une contrainte qui nuit à la santé mondiale",
  "La plus grande opportunité du 21e siècle pour la santé mondiale",
  "Un enjeu sans lien avec la pratique médicale",
  "Une priorité réservée aux pays à faibles revenus"],
 1,
 "Commission Lancet 2015 : lutter contre le changement climatique = « la plus grande opportunité du 21e siècle pour la santé mondiale ».");

Q("onehealth",
 "Le nouveau gaz propulseur HFA-152a pour inhalateurs :",
 ["Possède un pouvoir de réchauffement 10 à 30× MOINDRE",
  "Possède un pouvoir de réchauffement 10× supérieur",
  "Est interdit en Europe",
  "N'a aucun impact sur l'empreinte carbone du dispositif"],
 0,
 "HFA-152a : pouvoir de réchauffement 10 à 30× moindre que les propulseurs actuels → réduit l'empreinte des pMDI.");

Q("onehealth",
 "Pourquoi des résidus médicamenteux se retrouvent-ils dans les eaux de surface ?",
 ["Parce que les stations d'épuration les éliminent volontairement",
  "Par gaspillage (gros conditionnements, faible adhérence) et car les STEP ne filtrent pas ces micropolluants",
  "Uniquement à cause des rejets industriels",
  "Parce qu'ils sont entièrement biodégradables"],
 1,
 "Gaspillage (conditionnements trop grands, faible adhérence, péremptions) + les STEP ne filtrent pas ces micropolluants → présence dans l'eau. ~14 % des médicaments vendus finissent à la poubelle.");

Q("onehealth",
 "Décider d'une prescription, selon le cours, c'est mettre en balance plusieurs enjeux. Lequel n'est PAS cité ?",
 ["Le coût pour le patient et la sécurité sociale",
  "L'empreinte carbone et l'écotoxicité",
  "Le nombre de patients de la patientèle du médecin",
  "Les préférences du patient et les alternatives non médicamenteuses"],
 2,
 "Enjeux d'une prescription : coût, préférences, empreinte carbone, écotoxicité, éthique, grade de reco, interactions, alternatives. La taille de la patientèle n'en fait pas partie.");

Q("onehealth",
 "Pour une simple IVRS, une « ordonnance de confort » d'environ 53 € correspond à un coût carbone de l'ordre de :",
 ["~5 kg de CO2", "~53 kg de CO2 (≈ 10 L de diesel)", "~530 kg de CO2", "Négligeable"],
 1,
 "≈ 53 € ≈ 53 kg CO2 ≈ 10 L de diesel. Alternatives sobres : boissons chaudes, miel, paracétamol au besoin, sérum physiologique.");

Q("onehealth",
 "La déprescription de médicaments inutiles chez la personne âgée s'inscrit dans :",
 ["La prévention primaire",
  "La prévention quaternaire et la sobriété",
  "Le surdiagnostic organisé",
  "Une logique de précaution maximaliste"],
 1,
 "Déprescrire l'inutile rejoint la prévention quaternaire (éviter la surmédicalisation) et la sobriété : « un soin qui ne consomme pas est un soin qui n'existe pas », en gardant l'adéquation.");

Q("onehealth",
 "L'EBP (Evidence-Based Practice) appliquée à l'environnement implique surtout de :",
 ["Multiplier les prescriptions de précaution",
  "Proposer des alternatives non médicamenteuses quand c'est possible",
  "Ignorer les recommandations pour aller plus vite",
  "Choisir toujours le médicament le plus récent"],
 1,
 "L'EBP vaut aussi pour l'environnement : suivre les recommandations, penser les durées de traitement, oser la déprescription, proposer des alternatives non médicamenteuses (autonomisation du patient).");

Q("onehealth",
 "Les « discours de l'inaction » regroupent des arguments-types. Lequel en est un exemple ?",
 ["« Les recommandations imposent de déprescrire »",
  "« On est là pour soigner, pas pour s'occuper du climat »",
  "« Le score PBT évalue la toxicité »",
  "« La décision partagée respecte le patient »"],
 1,
 "Parmi les 11 arguments-types de l'inaction : « on est là pour soigner », « on manque de temps/d'argent », « on a toujours fait comme ça »… → à reconnaître pour s'en méfier.");

Q("onehealth",
 "Concernant l'antibiorésistance, quelle affirmation est EXACTE ?",
 ["C'est un problème localisé aux hôpitaux",
  "C'est un enjeu mondial majeur, avec des prévisions du Lancet à l'horizon 2050",
  "Elle se résoudra par la mise sur le marché de nouveaux antibiotiques",
  "Elle ne concerne pas la santé environnementale"],
 1,
 "Antibiorésistance = enjeu MONDIAL majeur (prévisions Lancet 2050), se propageant jusque dans des zones reculées ; étroitement lié au One Health et à l'écotoxicité.");

Q("onehealth",
 "Les concepts « emboîtés » de la santé environnementale comprennent :",
 ["Soins primaires, secondaires, tertiaires",
  "One Health, santé planétaire, santé globale, santé publique",
  "Prévention primaire à quaternaire",
  "Bismarck, Beveridge, mixte"],
 1,
 "Concepts emboîtés : One Health, santé planétaire, santé globale, santé publique — traduisant l'interdépendance entre environnement et santé.");

Q("onehealth",
 "Concernant le profil des dispositifs d'inhalation en Belgique, quelle donnée correspond au cours ?",
 ["~90 % de pMDI, comme au Royaume-Uni",
  "~45 % de pMDI, davantage qu'en Suède (~10 %)",
  "~5 % de pMDI, comme la moyenne européenne",
  "Aucun usage de SMI (soft mist)"],
 1,
 "En Belgique ~45 % de pMDI (vs Suède ~10 %, R-U ~70 %). Répartition : pMDI ~45 %, DPI ~50 %, SMI ~5 %.");

Q("onehealth",
 "Remplacer un pMDI (2 inhalations/jour) par un DPI équivalent permet une réduction d'émissions comparable à :",
 ["Renoncer à un vol long-courrier par an",
  "Devenir végétarien (~−420 kgCO2/an)",
  "Couvrir 1 000 km en voiture en moins",
  "Éteindre les lumières d'un cabinet"],
 1,
 "Le cours compare ce changement à devenir végétarien (~−420 kgCO2/an) — illustrant le poids carbone des pMDI (gaz propulseurs fluorés).");
// ========== ORGANISATION DES SOINS — niveau difficile — Partie A ==========
Q("orga",
 "Concernant les modèles de protection sociale, quelle affirmation est EXACTE ?",
 ["Bismarck = couverture universelle financée par l'impôt",
  "Beveridge = droits proportionnels aux cotisations de travail",
  "Bismarck = cotisations liées au travail ; Beveridge = universel financé par l'impôt",
  "La Belgique applique un modèle Beveridge pur"],
 2,
 "Bismarck = cotisations liées au travail, droits contributifs. Beveridge = impôt, couverture universelle. L'inversion est le piège classique. La Belgique = mixte à dominante bismarckienne.");

Q("orga",
 "Le système belge est qualifié de :",
 ["Uniquement assurantiel",
  "Uniquement assistanciel",
  "Mixte, à dominante assurantielle (Bismarck)",
  "Mixte, à dominante assistancielle (Beveridge)"],
 2,
 "Belgique = système MIXTE à dominante ASSURANTIELLE (Bismarck) : socle de cotisations liées au travail, avec une forte composante beveridgienne ajoutée (soins pour tous, aides sociales).");

Q("orga",
 "Un travailleur INDÉPENDANT tombe malade. À quelle prestation N'a-t-il PAS droit ?",
 ["Indemnités d'incapacité (mutuelle), dès le 8e jour",
  "Soins de santé (INAMI)",
  "Allocation de chômage",
  "Allocations familiales et pension (SFP)"],
 2,
 "L'indépendant n'a PAS droit au chômage, aux vacances annuelles, ni à FEDRIS (accidents/maladies prof.). Il a droit : pension (SFP), soins & indemnités (INAMI, dès le 8e jour, montant fixe), allocations familiales, maternité.");

Q("orga",
 "Parmi ces dispositifs, lequel N'EST PAS une aide sociale (régime résiduaire) ?",
 ["La GRAPA", "Le RIS", "L'allocation de chômage", "Les allocations aux personnes handicapées"],
 2,
 "L'allocation de chômage est une BRANCHE de la sécurité sociale (ONEM), pas une aide sociale. Aides sociales : RIS, GRAPA, allocations handicapés, prestations familiales garanties (financées par l'État, non contributives).");

Q("orga",
 "Qui finance la PLUS GRANDE part de la sécurité sociale belge ?",
 ["Les dotations de l'État",
  "Les cotisations sociales (employeurs + travailleurs)",
  "La TVA et le précompte mobilier (financement alternatif)",
  "Les tickets modérateurs des patients"],
 1,
 "Cotisations sociales ~57,5 % = source principale. Dotations de l'État ~19,5 %, financement alternatif (TVA + précompte) ~18 %, autres ~5 %.");

Q("orga",
 "Quel est le 1er poste de DÉPENSES de la sécurité sociale ?",
 ["Les soins de santé (maladie)",
  "Les pensions (vieillesse)",
  "Les indemnités d'invalidité",
  "Les allocations de chômage"],
 1,
 "1er poste = pensions/vieillesse (~42 %), devant la maladie (~29 %) et l'invalidité (~10 %). Piège : on cite souvent l'INAMI/maladie, mais ce sont les pensions.");

Q("orga",
 "Le « principe de répartition » signifie que :",
 ["Chaque assuré capitalise pour sa propre retraite",
  "Les cotisations des actifs financent directement les prestations des bénéficiaires actuels",
  "L'État rembourse a posteriori chaque dépense",
  "Les mutuelles placent les cotisations sur les marchés"],
 1,
 "Répartition = solidarité intergénérationnelle : les actifs financent les bénéficiaires d'aujourd'hui. La capitalisation (épargne pour soi) en est l'opposé.");

Q("orga",
 "FEDRIS est issu en 2017 de la fusion de deux fonds. Lesquels ?",
 ["Pensions et chômage",
  "Accidents du travail et maladies professionnelles",
  "Soins de santé et invalidité",
  "Allocations familiales et vacances annuelles"],
 1,
 "FEDRIS = fusion (2017) du Fonds des accidents du travail + Fonds des maladies professionnelles.");

Q("orga",
 "Depuis la 6e réforme de l'État (2014), la PRÉVENTION relève de quel niveau de pouvoir ?",
 ["Le fédéral (INAMI)",
  "Les Communautés (AViQ, COCOM/COCOF, Agentschap Zorg en Gezondheid)",
  "Les Régions",
  "Les provinces"],
 1,
 "La prévention/promotion de la santé est une compétence des COMMUNAUTÉS. Le fédéral garde la sécurité sociale et le financement des soins ; les Régions, les infrastructures/planification.");

Q("orga",
 "L'INAMI est placé sous l'autorité de :",
 ["La Communauté française",
  "Le Ministre fédéral des Affaires sociales et de la Santé",
  "La Région wallonne",
  "Les unions de mutuelles"],
 1,
 "L'INAMI dépend du Ministre FÉDÉRAL des Affaires sociales et de la Santé.");

Q("orga",
 "Quel service de l'INAMI assure le REMBOURSEMENT des soins et médicaments ?",
 ["Le service Indemnités",
  "Le service Soins de santé",
  "Le Service d'évaluation et de contrôle médicaux (SECM)",
  "Le Contrôle administratif"],
 1,
 "Le service Soins de santé rembourse soins et médicaments (via les mutuelles). Indemnités = incapacité/invalidité/congés ; SECM = contrôle des prestataires ; Contrôle administratif = contrôle des mutuelles.");

Q("orga",
 "Parmi ces missions, laquelle N'EST PAS celle d'une mutuelle ?",
 ["Rembourser les soins et verser les indemnités",
  "Informer et accompagner les affiliés",
  "Collecter les cotisations sociales des travailleurs",
  "Représenter les patients"],
 2,
 "La mutuelle ne collecte PAS les cotisations (c'est l'ONSS) et ne dispense pas les soins. Elle rembourse, verse les indemnités, informe/accompagne, propose une complémentaire, représente les patients.");

Q("orga",
 "Un médecin qui ne refuse pas l'accord médico-mutualiste :",
 ["Est non conventionné par défaut",
  "Est automatiquement conventionné et respecte les tarifs convenus",
  "Doit le rester obligatoirement toute sa carrière",
  "Ne perçoit aucun avantage social"],
 1,
 "S'il ne refuse pas l'accord, le médecin est AUTOMATIQUEMENT conventionné (tarifs convenus) et perçoit un statut social INAMI (~6 000 €/an). Il reste conventionné tant qu'il ne se déconventionne pas (≠ obligation à vie).");

Q("orga",
 "Le « ticket modérateur » désigne :",
 ["La part remboursée par la mutuelle",
  "La part de l'honoraire restant à charge du patient",
  "Le supplément d'honoraire d'un médecin non conventionné",
  "Le forfait journalier d'hospitalisation"],
 1,
 "Ticket modérateur = part à charge du patient (le reste = intervention de l'organisme assureur). Il dépend de la prestation, du statut (BIM) et de la qualification du prestataire.");

Q("orga",
 "Qui est bénéficiaire de l'intervention majorée (BIM) D'OFFICE (sans examen de revenus) ?",
 ["Tout pensionné",
  "Le bénéficiaire du RIS ou de la GRAPA, un MENA, un orphelin",
  "Tout chômeur de longue durée",
  "Toute famille monoparentale"],
 1,
 "BIM d'office (« avantages ») : RIS, GRAPA, revenu pour personne handicapée, MENA, orphelins, enfant handicapé > 66 %. Chômeurs/pensionnés/familles monoparentales = BIM SUR DEMANDE (selon revenus).");

Q("orga",
 "Le Maximum à Facturer (MAF). Quelle affirmation est EXACTE ?",
 ["Il est réservé aux BIM",
  "Il protège le ménage : au-delà d'un seuil de tickets modérateurs, la mutuelle rembourse 100 % jusqu'au 31/12",
  "Il est géré par le CPAS",
  "Il s'applique uniquement aux frais d'hospitalisation"],
 1,
 "MAF : protège le MÉNAGE (pas réservé aux BIM), géré par la mutuelle. 4 types : revenus, statut social (BIM, plafond 450 €), enfants < 19 ans (650 €), maladie chronique (seuils −100 €).");

Q("orga",
 "Le statut « affection chronique » s'obtient notamment si les dépenses de santé dépassent :",
 ["200 €/trimestre durant 4 trimestres",
  "400 €/trimestre durant ≥ 8 trimestres consécutifs",
  "1 000 €/an une seule année",
  "650 € sur l'année (plafond enfants)"],
 1,
 "Affection chronique : dépenses > 400 €/trimestre durant ≥ 8 trimestres consécutifs (OU forfait maladie chronique, OU maladie rare + critère de dépenses). Effet : MAF facilité (seuil abaissé de 100 €).");

Q("orga",
 "Concernant le remboursement des médicaments, quelle association catégorie/exemple est CORRECTE ?",
 ["Catégorie A = aucun remboursement",
  "Catégorie A = remboursement total (ex. insuline)",
  "Catégorie D = remboursement total",
  "Catégorie B = remboursement intégral garanti"],
 1,
 "A = total (importance vitale, ex. insuline) ; B ~75 % ; C/Cs/Cx partiel décroissant (Cx = contraceptifs) ; Fa/Fb = forfait ; D = AUCUN remboursement (ex. somnifères).");

Q("orga",
 "Le tiers payant (généralisé depuis 2022). Laquelle de ces propositions est FAUSSE ?",
 ["Le patient ne paie que le ticket modérateur (+ éventuel supplément)",
  "Le reste est facturé directement à la mutuelle",
  "Il implique d'être en ordre de mutuelle",
  "Il est interdit pour les bénéficiaires de l'intervention majorée"],
 3,
 "FAUX : le tiers payant SOCIAL est au contraire OBLIGATOIRE pour les BIM en consultation. Les 3 autres propositions sont exactes.");

Q("orga",
 "Le Dossier Médical Global (DMG) chez le médecin généraliste :",
 ["Augmente le ticket modérateur du patient",
  "Réduit le ticket modérateur et ouvre un forfait annuel au MG",
  "Est géré par la mutuelle sans intervention du MG",
  "Empêche tout envoi vers un spécialiste"],
 1,
 "DMG : réduit le ticket modérateur du patient + forfait annuel au MG (38 €, 71 € si malade chronique 30-85 ans). L'envoi chez le spécialiste par le MG gestionnaire réduit aussi le ticket modérateur.");

Q("orga",
 "Combien de branches compte la sécurité sociale belge, et laquelle est gérée par les Régions ?",
 ["7 branches ; les prestations familiales (depuis 2019)",
  "5 branches ; les pensions",
  "7 branches ; les soins de santé",
  "6 branches ; le chômage"],
 0,
 "7 branches. Les prestations familiales sont passées aux entités fédérées (Régions) en 2019. Pensions (SFP), chômage (ONEM), AT et MP (FEDRIS), soins & invalidité (INAMI), vacances annuelles (ONVA).");

Q("orga",
 "Le Pacte social du 28/12/1944 a créé :",
 ["L'INAMI",
  "L'ONSS, organisme unique de perception et de redistribution des cotisations",
  "Les premières mutuelles",
  "FEDRIS"],
 1,
 "Pacte social (1944) → ONSS (perception/redistribution des cotisations). L'INAMI date de 1964 (loi Leburton, séparation des soins de santé).");
// ========== ORGANISATION DES SOINS — niveau difficile — Partie B ==========
Q("orga",
 "Un salarié est en incapacité depuis 14 mois. Sur le plan administratif, il se trouve en :",
 ["Incapacité primaire",
  "Invalidité (incapacité > 12 mois, contrôle par le Conseil médical de l'invalidité)",
  "Mi-temps médical d'office",
  "Préavis pour force majeure médicale"],
 1,
 "Invalidité = incapacité de travail > 12 mois (1 an), contrôlée par le Conseil médical de l'invalidité (INAMI). Avant 1 an : incapacité primaire. Ne pas confondre avec 3 ou 6 mois.");

Q("orga",
 "L'incapacité de travail (incapacité primaire) suppose une perte de capacité de gain d'au moins :",
 ["33 %", "50 %", "66 %", "80 %"],
 2,
 "Perte de capacité de gain ≥ 66 %. L'incapacité n'est ni la maladie ni un diagnostic : on peut être malade et apte. Les 6 premiers mois, l'évaluation se fait par rapport au métier habituel.");

Q("orga",
 "Quelle distinction entre INVALIDITÉ et HANDICAP est correcte ?",
 ["Ce sont des synonymes",
  "Invalidité = perte de capacité de gain ; handicap = impact sur les activités de la vie quotidienne",
  "Le handicap suppose toujours une incapacité > 1 an",
  "L'invalidité ne concerne que la vie quotidienne"],
 1,
 "Invalidité ≠ handicap. Invalidité = perte de capacité de GAIN (travail) ; handicap = impact sur les activités de la vie quotidienne. On peut être handicapé et apte au travail.");

Q("orga",
 "Concernant les certificats d'incapacité, quelle affirmation est EXACTE ?",
 ["Le certificat à l'employeur porte le diagnostic",
  "Le certificat à la mutuelle (médecin conseil) porte le diagnostic",
  "Aucun certificat ne comporte de diagnostic",
  "Les deux certificats sont identiques"],
 1,
 "Certificat à la MUTUELLE (médecin conseil) = AVEC diagnostic. Certificat à l'EMPLOYEUR = SANS diagnostic (secret médical).");

Q("orga",
 "Un CHÔMEUR est mis en incapacité de travail. Que doit-il faire ?",
 ["Continuer à émarger au chômage sans démarche",
  "Adresser un certificat à la mutuelle ; il passe des indemnités de chômage à celles de la mutuelle",
  "Prévenir uniquement son ancien employeur",
  "Demander d'emblée le statut d'invalidité"],
 1,
 "Le chômeur en incapacité envoie un certificat à la mutuelle (et ne prévient l'ONEM que si un travail est proposé). Il bascule des indemnités de chômage vers celles de la mutuelle.");

Q("orga",
 "Réforme du retour au travail (2026). À partir de quel délai d'incapacité l'évaluation du potentiel de travail par la médecine du travail devient-elle obligatoire ?",
 ["Dès 14 jours", "Dès 4 semaines", "Dès 8 semaines", "Dès 6 mois"],
 2,
 "Dès 8 SEMAINES d'incapacité : évaluation obligatoire du potentiel de travail (sous peine d'amendes pour l'employeur). À 14 jours, c'est le certificat Mult-eMediatt à la mutuelle qui devient obligatoire.");

Q("orga",
 "Les soins de 1re ligne. Quelle affirmation est FAUSSE ?",
 ["Ils représentent > 90 % des contacts",
  "Ils constituent la porte d'entrée et assurent la continuité",
  "Ils sont centrés sur la maladie (approche par organe)",
  "Ils filtrent l'accès vers la 2e ligne"],
 2,
 "FAUX pour la 1re ligne : c'est la 2e/3e ligne qui est « axée sur la maladie ». La 1re ligne est centrée sur la PERSONNE (approche globale), porte d'entrée, > 90 % des contacts, continuité.");

Q("orga",
 "Les « 6 C » de Starfield caractérisant la 1re ligne incluent toutes ces dimensions SAUF :",
 ["Premier Contact et Continuité",
  "Coordination et services Complets",
  "Concurrence et Capitalisation",
  "Communauté et soins Centrés sur la personne"],
 2,
 "6 C de Starfield : premier Contact, Centrés personne, Continuité, Complets, Communauté, Coordination. « Concurrence » et « capitalisation » n'en font pas partie.");

Q("orga",
 "L'objectif des réseaux hospitaliers loco-régionaux (depuis 2020) est de :",
 ["Fusionner les hôpitaux en une seule entité",
  "Coordonner l'offre de soins d'une région en regroupant les compétences",
  "Réduire l'accessibilité pour limiter les coûts",
  "Supprimer la concurrence entre prestataires"],
 1,
 "Réseaux loco-régionaux : COORDONNER l'offre régionale (« proximité quand c'est possible, spécialisé quand c'est nécessaire »). Réseau ≠ fusion ; le but n'est ni de réduire l'accès ni d'éliminer la concurrence.");

Q("orga",
 "Concernant le financement de la MG au FORFAIT (capitation), quelle proposition est un INCONVÉNIENT/risque ?",
 ["Davantage de prévention et de dépistage",
  "Moins de prescriptions et d'examens inutiles",
  "Risque de sélection des patients (exclusion des cas lourds)",
  "Meilleur suivi des patients chroniques"],
 2,
 "Risques du forfait : surconsommation, pas de libre choix du prestataire, SÉLECTION des patients (exclusion des cas lourds), renvoi rapide vers la 2e ligne. Les 3 autres sont des avantages.");

Q("orga",
 "Le « New deal » en médecine générale (depuis 2024) correspond à :",
 ["Un financement 100 % à l'acte",
  "Un financement 100 % au forfait",
  "Un modèle mixte (~50/50 acte/forfait) + primes, valorisant le travail hors contact",
  "Une suppression de la liberté de choix du patient"],
 2,
 "New deal : modèle MIXTE ~50/50 acte/forfait + primes ; valorise le travail hors contact (dossiers, coordination) et la délégation de tâches ; préserve la liberté du patient.");

Q("esante",
 "La plateforme eHealth permet :",
 ["Les échanges entre le médecin et la mutuelle pour le contrôle",
  "L'échange sécurisé entre prestataires de soins ayant un lien thérapeutique",
  "L'accès du médecin du travail au dossier de soins",
  "Le transfert de données vers les assurances privées"],
 1,
 "Plateforme eHealth = échange sécurisé entre PRESTATAIRES DE SOINS ayant un lien thérapeutique. Elle ne sert PAS aux échanges avec la mutuelle, l'assurance privée, ni le médecin conseil/de contrôle.");

Q("esante",
 "Un médecin reçoit une nouvelle patiente et veut vérifier son assurabilité (BIM/AO) et son DMG. Quel outil ?",
 ["Recip-e", "MyCareNet", "Le hub régional (Vitalink…)", "VIDIS"],
 1,
 "MyCareNet = lien avec les mutuelles : vérifier l'assurabilité (BIM/AO), DMG, chapitre IV, facturer le tiers payant. Recip-e = prescription ; hub = documents partagés ; VIDIS = schéma de médication.");

Q("esante",
 "Le SUMEHR. Laquelle de ces données n'y figure PAS ?",
 ["Les allergies et la médication active",
  "Les antécédents et la vaccination",
  "Le nombre d'IVG et l'orientation sexuelle",
  "La personne de contact et les volontés du patient"],
 2,
 "Le SUMEHR (résumé minimal pour la continuité des soins) ne contient PAS : honoraires, nombre de partenaires/IVG, orientation sexuelle, appartenance religieuse. Il contient allergies, médication active, antécédents, vaccination, personne de contact, volontés.");

Q("esante",
 "Pour accéder aux documents de santé partagés d'un patient, il faut réunir 3 conditions cumulatives. Lesquelles ?",
 ["Carte eID + mutuelle + ordonnance",
  "Certificat eHealth + lien thérapeutique + consentement du patient",
  "DMG + tiers payant + BIM",
  "Recip-e + MyCareNet + SUMEHR"],
 1,
 "3 conditions cumulatives : (1) certificat eHealth (prestataire reconnu, logiciel agréé), (2) lien thérapeutique (continuité, durée limitée), (3) consentement du patient (un seul, valable partout).");

Q("esante",
 "Lors d'un trajet de réintégration, le médecin du travail veut consulter le dossier de santé du patient. En dehors de TRIO :",
 ["Il y a accès comme tout médecin",
  "Il n'a pas accès (pas de lien thérapeutique de soins)",
  "Il y accède avec la seule carte eID",
  "Il y accède via MyCareNet"],
 1,
 "Le médecin du travail n'a PAS de lien thérapeutique de soins → pas d'accès au réseau de santé, SAUF via la plateforme TRIO (avec consentement). Idem médecin conseil/assurance/contrôle.");

Q("esante",
 "Pour partager et tenir à jour le schéma de médication d'un patient, l'outil est :",
 ["Mult-eMediatt", "VIDIS", "MyCareNet", "Recip-e"],
 1,
 "VIDIS intègre les sources de médication (Vitalink, Recip-e, Dossier Pharmaceutique Partagé) → schéma de médication partagé. Mult-eMediatt = certificat d'incapacité ; Recip-e = prescription.");

Q("orga",
 "Le Budget des Moyens Financiers (BMF) des hôpitaux finance principalement :",
 ["Les honoraires médicaux",
  "L'infrastructure et le fonctionnement, calculés via les APR-DRG, payés via les mutuelles",
  "Les médicaments dispensés",
  "Les pensions du personnel hospitalier"],
 1,
 "BMF (~36 % du financement hospitalier) : infrastructure et fonctionnement, calculé via les APR-DRG (groupes homogènes de malades), payé via les mutuelles. Honoraires ~41 %, pharma ~17 %, forfaits/conventions ~4 %.");

Q("orga",
 "Selon l'étude KCE (2022), laquelle de ces caractéristiques du système belge est FAUSSE ?",
 ["Financement majoritairement à l'acte",
  "Approche par maladie et hospitalocentrisme",
  "Pouvoirs morcelés entre fédéral et entités fédérées",
  "Accès aux différents niveaux de soins limité et fortement hiérarchisé"],
 3,
 "FAUSSE : l'accès aux différents niveaux est au contraire LIBRE (non limité). Le KCE relève le financement à l'acte, l'approche par maladie, l'hospitalocentrisme et le morcellement des pouvoirs.");

Q("orga",
 "Un patient sans titre de séjour, sans ressources, a besoin de soins. Quel dispositif et quel organisme ?",
 ["FEDASIL, qui organise l'accueil",
  "L'Aide Médicale Urgente (AMU), octroyée par le CPAS",
  "L'INAMI via la mutuelle",
  "La CAAMI, mutuelle publique"],
 1,
 "Séjour irrégulier → AMU via le CPAS (couvre curatif ET préventif). Les demandeurs d'asile (avec titre de séjour) relèvent de FEDASIL.");

Q("esante",
 "Pour envoyer un certificat électronique d'incapacité à la mutuelle (obligatoire dès 14 jours en 2026), le MG utilise :",
 ["Recip-e", "Mult-eMediatt", "MetaHub", "B-IHR"],
 1,
 "Mult-eMediatt = certificat électronique d'incapacité de travail (MG → mutuelle), obligatoire dès 14 jours (réforme 2026 ; durée prescrite max 3 mois renouvelable).");

Q("orga",
 "Parmi ces affirmations sur la gouvernance des soins, laquelle est EXACTE ?",
 ["Les Régions gèrent la sécurité sociale",
  "Les Communautés gèrent la prévention et la promotion de la santé",
  "Le fédéral agrée les hôpitaux et planifie l'offre",
  "Les mutuelles fixent la nomenclature"],
 1,
 "Communautés = les personnes (prévention, promotion, 1re ligne, santé mentale de 1re ligne). Fédéral = sécurité sociale/financement. Régions = territoires (agrément hôpitaux/MRS, planification). La nomenclature relève de l'INAMI.");

Q("esante",
 "Recip-e est une prescription électronique qui :",
 ["Est adressée directement à une officine désignée par le médecin",
  "Est un message non adressé, crypté via eHealth, récupéré par le prestataire choisi par le patient",
  "Contient le diagnostic du patient",
  "Sert à vérifier l'assurabilité"],
 1,
 "Recip-e : message NON adressé, crypté, via eHealth, à statut de source authentique ; récupéré par la pharmacie CHOISIE par le patient. Elle ne contient pas le diagnostic et ne vérifie pas l'assurabilité (= MyCareNet).");
// ========== LE PATIENT ÂGÉ & COORDINATION — niveau difficile ==========
Q("age",
 "Concernant la fragilité de la personne âgée, quelle affirmation est EXACTE ?",
 ["C'est un synonyme de la dépendance",
  "C'est un état irréversible lié à l'âge",
  "C'est un processus réversible si repéré, distinct de l'âge, de la polypathologie et de la dépendance",
  "Elle se confond avec la polypathologie"],
 2,
 "Fragilité = diminution des réserves physiologiques altérant l'adaptation au stress ; marqueur de risque RÉVERSIBLE si repéré. Elle ≠ âge, ≠ polypathologie, ≠ dépendance.");

Q("age",
 "Lequel de ces items NE fait PAS partie des 5 critères de Fried ?",
 ["Perte de poids involontaire",
  "Vitesse de marche ralentie",
  "Troubles cognitifs (MMSE abaissé)",
  "Épuisement ressenti"],
 2,
 "Critères de Fried : perte de poids involontaire, épuisement, vitesse de marche ralentie, baisse de force, sédentarité. Les troubles cognitifs (MMSE) n'en font PAS partie (autre échelle).");

Q("age",
 "Un patient présente 2 critères de Fried. Comment le classer ?",
 ["Robuste", "Pré-fragile", "Fragile", "Dépendant"],
 1,
 "0 critère = robuste ; 1-2 = PRÉ-FRAGILE ; ≥ 3 = fragile. Avec 2 critères → pré-fragile.");

Q("age",
 "Concernant le dépistage de la fragilité, quelle proposition est FAUSSE ?",
 ["Il est systématique dès 70 ans (hors maladie grave)",
  "Il peut être initié par tout soignant, pas seulement le médecin",
  "Il n'est fiable que s'il est réalisé par un médecin",
  "Il prédit perte d'autonomie, chutes et institutionnalisation à 3 ans"],
 2,
 "FAUX (piège récurrent) : le dépistage n'est PAS réservé au médecin — tout soignant peut l'initier. Systématique dès 70 ans, il prédit perte d'autonomie/chutes/institutionnalisation à 3 ans.");

Q("age",
 "Quelle échelle est l'INTRUS (sans rapport avec l'évaluation gériatrique) ?",
 ["MNA (nutrition)", "MMSE (cognition)", "Finegan", "Tinetti (équilibre/marche)"],
 2,
 "Intrus : Finegan = score de sevrage du NOUVEAU-NÉ. Valides chez la personne âgée : Katz, MNA, MMSE, Tinetti, Timed Up & Go, (mini-)GDS.");

Q("age",
 "Quelle échelle est la référence INAMI pour évaluer la dépendance (autonomie dans les actes de la vie quotidienne) ?",
 ["MMSE", "Katz", "GDS", "MNA"],
 1,
 "Katz = autonomie (AVQ), référence pour la dépendance (INAMI). MMSE = cognition ; GDS = dépression ; MNA = nutrition.");

Q("age",
 "Un patient met 20 secondes au test « Timed Up & Go ». Quelle interprétation ?",
 ["Normal, aucun risque",
  "Au-delà de 14 s : risque de chute accru",
  "Normal car < 28",
  "Score de dépression élevé"],
 1,
 "Timed Up & Go : normal < 14 s ; 20 s = au-delà du seuil → risque de chute accru. (Le /28 et le seuil < 20 concernent l'échelle de TINETTI.)");

Q("age",
 "À partir de combien de médicaments le cours fixe-t-il le seuil de vigilance « polymédication » ?",
 ["3", "6 médicaments différents par jour", "10", "Dès 2"],
 1,
 "Polymédication : attention particulière à partir de 6 médicaments différents/jour. Le nombre est un facteur pronostique (urgences, perte d'autonomie, morbi-mortalité).");

Q("age",
 "Quel outil est pertinent face à la polymédication, et lequel ne l'est PAS ?",
 ["START & STOPP est pertinent ; « max 6 médicaments/jour » ne l'est pas",
  "« Max 6 médicaments/jour » est l'outil de référence",
  "L'échelle de Katz mesure la polymédication",
  "Le score de Fried quantifie le nombre de médicaments"],
 0,
 "Outils utiles : START & STOPP, GheOP3S, révision pluridisciplinaire. « Max 6/jour » n'est PAS un outil (seuil arbitraire). Katz/Fried évaluent autonomie/fragilité, pas la polymédication.");

Q("age",
 "Chez la personne âgée, quelle classe médicamenteuse augmente nettement le risque de chute ?",
 ["Les IEC", "Les benzodiazépines", "Les statines", "Les antihistaminiques de 2e génération"],
 1,
 "Les benzodiazépines augmentent le risque de chute chez la personne âgée (sédation, troubles de l'équilibre, allongement des temps de réaction).");

Q("age",
 "Un patient âgé prend chaque matin un jus de pamplemousse. Quel est le risque pharmacologique ?",
 ["Aucun, c'est inoffensif",
  "Inhibition du CYP3A4 → surdosage de certains médicaments",
  "Induction enzymatique → sous-dosage",
  "Interaction uniquement avec les antibiotiques"],
 1,
 "Le jus de pamplemousse inhibe le CYP3A4 → ↑ concentrations de nombreux médicaments (risque de surdosage). À surveiller avec l'alcool et les OTC non déclarés.");

Q("age",
 "Pour la transition hôpital → domicile, quel outil de communication structurée est recommandé ?",
 ["FRAMES", "SBAR (Situation, Background, Assessment, Recommendation)", "PICO", "AUDIT"],
 1,
 "SBAR (Situation, Background, Assessment, Recommendation) structure la communication interprofessionnelle, avec la réconciliation médicamenteuse, lors de la transition hôpital → domicile.");

Q("age",
 "Le PICT (Palliative Care Indicators Tool) combine 3 éléments. Lequel en fait partie ?",
 ["Un score MMSE < 18",
  "La « question surprise » : seriez-vous surpris que le patient décède dans les 6-12 mois ?",
  "Un Timed Up & Go > 14 s",
  "Un score de Fried ≥ 3"],
 1,
 "PICT = (1) question surprise (décès dans 6-12 mois ?), (2) > 2 indicateurs de fragilité, (3) ≥ 1 critère d'incurabilité d'une affection potentiellement mortelle.");

Q("age",
 "Une fois un patient identifié comme palliatif par le PICT, la démarche est de :",
 ["Cesser tout traitement",
  "Définir un plan de soins et un ACP (Advanced Care Planning) en concertation interdisciplinaire",
  "Hospitaliser sans délai en unité spécialisée",
  "Attendre l'aggravation avant d'agir"],
 1,
 "Patient palliatif identifié → établir un plan de soins et un Advanced Care Planning (ACP), en concertation interdisciplinaire (anticipation).");

Q("age",
 "Dans le trajet d'aides et de soins (ASD Bruxelles), le rôle de la coordinatrice est :",
 ["D'assurer elle-même les soins infirmiers",
  "D'être la personne de référence : analyse des besoins, contacts, plan de soutien, réévaluation à +3 mois",
  "De remplacer le médecin traitant",
  "De financer les aides"],
 1,
 "La coordinatrice = personne de RÉFÉRENCE : analyse des besoins, contact avec les services, plan de soutien, réévaluation à +3 mois. Elle coordonne (ne dispense pas) les soins.");

Q("age",
 "Lors d'un retour à domicile coordonné, les délais d'intervention suivent une logique. Lequel est correct ?",
 ["L'aménagement lourd du domicile est mis en place dès J+1",
  "Les soins infirmiers et les repas démarrent dès J+1 ; l'aménagement et le gros matériel plus tard (> J+9)",
  "Tout est mis en place simultanément à la sortie",
  "La kinésithérapie est toujours prioritaire sur les soins infirmiers"],
 1,
 "Délais : rapide (J+1 : infirmier, repas, transport, coordination) ; intermédiaire (J+2 à J+9 : télévigilance, kiné, aides) ; long (> J+9 : aménagement, gros matériel).");

Q("age",
 "Dans l'évaluation de la personne âgée, quel élément n'est PAS prioritaire (piège classique) ?",
 ["La prévention des chutes",
  "L'état nutritionnel",
  "L'horaire habituel du lever et du coucher",
  "L'isolement social et le soutien aux aidants"],
 2,
 "Piège : l'horaire du lever/coucher n'est pas une priorité. Priorités : prévention des chutes, nutrition, isolement social, soutien aux aidants.");

Q("age",
 "Quels acteurs interviennent à domicile autour de la personne âgée, EN PLUS du médecin, du kiné et de l'infirmier ?",
 ["Médecin du travail, médecin conseil, médecin contrôle",
  "Assistant social, aide familiale, aide ménagère, ergothérapeute, livraison de repas, aidant proche",
  "Chirurgien, radiologue, anesthésiste",
  "Pharmacien hospitalier et biologiste"],
 1,
 "Équipe de services à domicile : assistant social, aide familiale, aide ménagère, ergothérapeute (adaptation), repas, aidant proche/garde-malade, + domotique et matériel paramédical.");

Q("age",
 "Un trouble de la marche chez la personne âgée multiplie le risque de chute par environ :",
 ["1,5", "2", "3", "10"],
 2,
 "Un trouble de la marche multiplie par ~3 le risque de chute. La vitesse de marche normale après 70 ans ≈ 1 m/s.");

Q("age",
 "La prévalence de la fragilité est d'environ :",
 ["1 % des > 65 ans",
  "10-20 % des > 65 ans à domicile et ~50 % des > 85 ans",
  "100 % des > 70 ans",
  "Identique à tous les âges"],
 1,
 "Prévalence : ~10-20 % des > 65 ans à domicile, ~50 % des > 85 ans. La fragilité augmente nettement avec l'âge sans s'y réduire.");

Q("age",
 "Les interventions multimodales chez la personne âgée fragile comprennent toutes celles-ci SAUF :",
 ["L'activité physique adaptée",
  "L'optimisation/réduction de la polymédication",
  "L'hospitalisation systématique préventive",
  "La prise en charge nutritionnelle et la mise en place du réseau"],
 2,
 "Interventions : AP adaptée, nutrition, réduction de la polymédication, mise en place du réseau. L'hospitalisation systématique n'en fait pas partie (et expose même la personne âgée à des risques).");

Q("age",
 "Concernant la polymédication, le nombre de médicaments est considéré comme :",
 ["Sans valeur pronostique",
  "Un facteur pronostique (urgences, perte d'autonomie, morbi-mortalité)",
  "Un simple indicateur de bonne prise en charge",
  "Bénéfique au-delà de 6 molécules"],
 1,
 "Le nombre de médicaments est un FACTEUR PRONOSTIQUE : plus il est élevé, plus le risque de passage aux urgences, de perte d'autonomie et de morbi-mortalité augmente.");
// ========== SOINS AUX DEMANDEURS D'ASILE & PRÉCARITÉ — niveau difficile ==========
Q("asile",
 "Associez correctement acteur et rôle dans la procédure d'asile :",
 ["Office des étrangers = décision sur la demande",
  "CGRA = enregistrement de la demande",
  "Office des étrangers = enregistrement ; CGRA = examen et décision",
  "FEDASIL = instance de recours"],
 2,
 "Office des étrangers = ENREGISTREMENT. CGRA = examen et DÉCISION. CCE = recours. FEDASIL = accueil/aide matérielle. Le piège inverse enregistrement et décision.");

Q("asile",
 "Un homme en SÉJOUR IRRÉGULIER, sans ressources, consulte pour un suivi de diabète. Quel dispositif couvre ses soins ?",
 ["FEDASIL", "L'Aide Médicale Urgente (AMU) via le CPAS", "L'INAMI via une mutuelle", "Aucun, faute de titre de séjour"],
 1,
 "Séjour irrégulier → AMU (CPAS). Malgré son nom, l'AMU couvre le curatif ET le préventif et le SUIVI (pas seulement l'urgence). FEDASIL concerne les demandeurs d'asile (qui ont un titre de séjour).");

Q("asile",
 "L'Aide Médicale Urgente (AMU). Quelle affirmation est FAUSSE ?",
 ["Elle couvre les soins préventifs et le suivi, pas seulement l'urgence",
  "Elle s'adresse aux personnes en séjour irrégulier sans moyens",
  "Elle est limitée aux seules situations vitales aiguës",
  "Elle nécessite territorialité, enquête sociale (indigence) et certificat médical"],
 2,
 "FAUX : malgré son nom, l'AMU ne se limite PAS à l'urgence (curatif + préventif + suivi, ambulatoire et résidentiel). Les 3 autres propositions sont exactes.");

Q("asile",
 "Quelles sont les 3 conditions d'octroi de l'AMU ?",
 ["Titre de séjour, mutuelle, ordonnance médicale",
  "Territorialité, enquête sociale établissant l'indigence, certificat médical d'AMU",
  "Nationalité belge, domicile fixe, emploi déclaré",
  "Inscription à FEDASIL, RIS, carte eID"],
 1,
 "3 conditions : territorialité (réside sur la commune), enquête sociale (indigence), certificat médical d'AMU.");

Q("asile",
 "Régularisation : associez correctement.",
 ["9bis = raison médicale ; 9ter = raison humanitaire",
  "9ter = raison médicale ; 9bis = raison humanitaire",
  "9bis et 9ter concernent toutes deux l'asile politique",
  "9ter = regroupement familial"],
 1,
 "9ter = régularisation pour raison MÉDICALE ; 9bis = raison HUMANITAIRE. Distinct de la procédure d'asile (CGRA).");

Q("asile",
 "La PRÉCARITÉ se définit, selon le cours, comme :",
 ["Un seuil monétaire de pauvreté",
  "L'absence d'une ou plusieurs sécurités (emploi, revenus, logement, liens) — notion subjective et processus",
  "Un statut administratif de séjour",
  "Une maladie chronique évolutive"],
 1,
 "Précarité = absence d'une ou plusieurs sécurités permettant d'assumer ses responsabilités/droits ; notion subjective, processus. « La précarité ne touche pas que les pauvres » (≠ pauvreté, définie par une norme monétaire).");

Q("asile",
 "Patient de 34 ans, originaire d'Afrique centrale, douleurs abdominales depuis 3 mois et légère perte de poids, sans autre signe d'alarme. Que rechercher en priorité à la biologie ?",
 ["Une hypertriglycéridémie",
  "Une éosinophilie (parasitose : schistosomiase, strongyloïdose)",
  "Une légère élévation des γ-GT",
  "Une hyperglycémie"],
 1,
 "Origine subsaharienne + symptômes digestifs + perte de poids → rechercher une ÉOSINOPHILIE évoquant une parasitose (schistosomiase → praziquantel ; strongyloïdose → ivermectine). Question d'examen classique.");

Q("asile",
 "Le traitement de la strongyloïdose (anguillulose) repose sur :",
 ["Le praziquantel", "L'ivermectine (prudence si immunodépression)", "Un antibiotique bêta-lactame", "La metformine"],
 1,
 "Strongyloïdose → ivermectine (attention en cas d'immunodépression : risque de forme disséminée). La schistosomiase, elle, se traite par praziquantel.");

Q("asile",
 "Concernant le dépistage de la tuberculose chez les demandeurs d'asile, quelle proposition est EXACTE ?",
 ["Réservé aux patients symptomatiques",
  "Systématique chez tous (score FARES ≥ 4 → radiographie thoracique)",
  "Réalisé uniquement après 6 mois de séjour",
  "Inutile en centre d'accueil"],
 1,
 "TB : dépistage SYSTÉMATIQUE chez tous les DA (FARES, score ≥ 4 → Rx thorax). En centre d'accueil (Fedasil/Croix-Rouge), le risque de TB est élevé.");

Q("asile",
 "Concernant le risque infectieux en centre d'accueil, laquelle de ces affirmations du cours est VRAIE ?",
 ["La rougeole y est exceptionnelle",
  "Le risque de tuberculose y est très fréquent ; les lésions de torture peuvent perdurer des années",
  "La vaccination RRO est contre-indiquée",
  "Le dépistage IST y est inutile"],
 1,
 "En centre d'accueil : risque de rougeole et SURTOUT de tuberculose. Les lésions physiques de torture peuvent perdurer des années. (Re)vaccination RRO systématique chez tous les DA.");

Q("asile",
 "Le message « I = I » utilisé pour le VIH signifie :",
 ["Immunodépression = Infection",
  "Charge virale Indétectable = virus Intransmissible",
  "Isolement = Indication",
  "Incurable = Irréversible"],
 1,
 "I = I : charge virale Indétectable = virus Intransmissible (sous traitement efficace). Référer en centre de référence.");

Q("asile",
 "Face à un patient potentiellement victime de torture (suspicion de PTSD), l'attitude correcte est de :",
 ["Recueillir tous les détails du traumatisme pour étayer le dossier",
  "Ne pas demander de détails afin d'éviter une réexposition ; laisser dire à son rythme",
  "Éviter complètement le sujet psychique",
  "Adresser d'emblée sans aucune écoute"],
 1,
 "PTSD : NE PAS demander de détails (risque de réexposition traumatique) ; laisser la personne s'exprimer à son rythme. Travail pluridisciplinaire (psychologue, psychiatre, médiateur culturel, interprète).");

Q("asile",
 "Le rapport médical circonstancié (asbl Constats). Quelle affirmation est EXACTE ?",
 ["Il prouve la véracité du récit du demandeur",
  "Il établit le degré de compatibilité entre le récit et les séquelles, selon le Protocole d'Istanbul",
  "Il remplace la décision du CGRA",
  "Il doit être rédigé à l'affirmatif et en jargon médical"],
 1,
 "Le rapport (Constats, 2009) établit la COMPATIBILITÉ entre récit et séquelles (élément de preuve), selon le Protocole d'Istanbul. Rédaction au CONDITIONNEL, langage accessible. Les incohérences ≠ mensonge (la torture altère la mémoire).");

Q("asile",
 "Une fillette non excisée, originaire d'un pays à haute prévalence de MGF :",
 ["Ne peut prétendre à aucune protection",
  "Peut être reconnue réfugiée sur base d'un certificat de non-excision, à ré-attester tous les 3 ans",
  "Doit subir l'excision pour des motifs culturels",
  "Relève uniquement de l'AMU"],
 1,
 "Un certificat médical de non-excision peut fonder une reconnaissance comme réfugiée, à RÉ-attester tous les 3 ans (souvent mal vécu → précautions). Médecins formés par le GAMS ; centres CeMAViE, UZ Gent.");

Q("asile",
 "Un primo-arrivant arrive avec un « diagnostic de trouble thyroïdien » sous L-thyroxine, mais un bilan normal. Quelle mission essentielle du MG cela illustre-t-il ?",
 ["Confirmer le traitement antérieur",
  "Démédicaliser : revoir les diagnostics et traitements posés au pays d'origine",
  "Augmenter la dose par sécurité",
  "Référer systématiquement à l'endocrinologue"],
 1,
 "Mission parfois essentielle : DÉMÉDICALISER (cas Ahmad : hyperthyroïdie iatrogène sous L-thyroxine, « diabète » sous metformine avec HbA1c normale). Revoir les diagnostics/traitements étrangers.");

Q("asile",
 "Concernant le paludisme (malaria) chez le primo-arrivant, quelle conduite est correcte ?",
 ["Dépistage systématique de tous les arrivants",
  "Pas de dépistage systématique ; si suspicion → goutte épaisse (gold standard) ou test rapide",
  "Traitement présomptif systématique",
  "Vaccination obligatoire à l'arrivée"],
 1,
 "Malaria : pas de dépistage systématique ; en cas de suspicion clinique → goutte épaisse (gold standard) ou test rapide.");

Q("asile",
 "Le bilan de santé du primo-arrivant ASYMPTOMATIQUE comprend notamment :",
 ["Aucun examen complémentaire",
  "Rx thorax, biologie, dépistage IST (VIH, hépatites B/C, syphilis), sérologies parasitaires selon l'origine",
  "Une coloscopie de dépistage",
  "Un scanner thoraco-abdominal systématique"],
 1,
 "Bilan : anamnèse (trajet, vaccins, violences, PTSD), examen clinique, Rx thorax, biologie, IST (VIH, hépatites B/C, syphilis), sérologies schistosomiase/strongyloïdose selon l'origine.");

Q("asile",
 "L'accès aux soins des personnes précaires/en demande de protection repose sur :",
 ["Une simple tolérance administrative",
  "Un droit fondamental (Constitution, art. 23)",
  "Le seul bon vouloir du médecin",
  "Une assurance privée obligatoire"],
 1,
 "L'accès aux soins est un DROIT (Constitution, art. 23). Rôle du MG : soigner, dépister, accompagner et attester sans juger.");

Q("asile",
 "Face aux publics précarisés, quelle posture est recommandée pour le soignant (et pour éviter l'épuisement) ?",
 ["Standardiser les soins et limiter le temps",
  "Non-jugement, vision globale, approche pluridisciplinaire et travail en réseau",
  "Sélectionner les patients selon leur statut",
  "Travailler seul pour gagner du temps"],
 1,
 "Agir : non-jugement, vision globale, pluridisciplinarité, santé communautaire, éducation thérapeutique, travail en RÉSEAU (Médecins du Monde, CPAS, maisons médicales) pour ne pas s'épuiser.");

Q("asile",
 "Distinguez correctement demandeur d'asile et personne en séjour irrégulier :",
 ["Le demandeur d'asile relève de l'AMU",
  "Le demandeur d'asile a un titre de séjour (FEDASIL) ; la personne en séjour irrégulier relève de l'AMU (CPAS)",
  "Les deux relèvent de FEDASIL",
  "Les deux relèvent de l'AMU"],
 1,
 "Demandeur d'asile / réfugié = titre de séjour, accueil par FEDASIL. Personne en séjour irrégulier = pas de titre → AMU (CPAS). Distinction-clé du cours.");

Q("asile",
 "L'aide matérielle de la loi Accueil (2017) comprend notamment, et de façon notable :",
 ["L'interdiction de travailler durant toute la procédure",
  "Le droit au travail après 4 mois, en plus de l'hébergement, des repas et de l'accompagnement",
  "Une allocation de chômage",
  "L'accès automatique à la nationalité"],
 1,
 "Aide matérielle (loi 2017) : hébergement, repas, habillement, accompagnement social/médical/psy, aide juridique, interprétariat, scolarité, allocations, et DROIT AU TRAVAIL après 4 mois.");

Q("asile",
 "Les motifs de consultation « atypiques » des primo-arrivants imposent d'être attentif à :",
 ["Une simulation systématique",
  "Des somatisations exprimant une souffrance psychique (plaintes imagées/culturellement codées)",
  "Une pathologie purement organique uniquement",
  "Un refus de soins de principe"],
 1,
 "Plaintes atypiques (imagées, culturellement codées) → attention aux SOMATISATIONS pouvant traduire une souffrance psychique. Ne pas réduire d'emblée à de l'organique ni à de la simulation.");
// ========== TRIO : MG – MÉDECIN DU TRAVAIL – MÉDECIN CONSEIL — niveau difficile ==========
Q("trio",
 "Associez correctement médecin et mission :",
 ["Médecin du travail = évalue l'incapacité ; médecin conseil = évalue l'aptitude",
  "Médecin du travail = évalue l'aptitude ; médecin conseil = évalue l'incapacité ; médecin contrôle = vérifie l'absentéisme",
  "Médecin contrôle = évalue l'aptitude au poste",
  "Médecin conseil = contrôle l'absentéisme pour l'employeur"],
 1,
 "Médecin du TRAVAIL = aptitude (prévention). Médecin CONSEIL (mutuelle) = incapacité. Médecin CONTRÔLE (payé par l'employeur) = existence/durée de l'incapacité (absentéisme). Distinction-clé.");

Q("trio",
 "Parmi les rôles du médecin du travail, lequel est FAUX (piège classique) ?",
 ["Analyse des risques professionnels et visite des postes",
  "Surveillance de la santé et proposition de poste adapté",
  "Contrôle de l'absentéisme et prestation de soins curatifs",
  "Participation au CPPT et au retour au travail"],
 2,
 "FAUX : le médecin du travail fait de la PRÉVENTION — il ne contrôle pas l'absentéisme (médecin contrôle), n'évalue pas l'incapacité (médecin conseil) et ne prodigue pas de soins curatifs.");

Q("trio",
 "L'évaluation de l'aptitude consiste à vérifier deux choses. Lesquelles ?",
 ["Que le candidat est le meilleur pour le poste, et qu'il accepte les conditions",
  "Que les risques du travail ne majorent pas la santé, ET que la santé ne majore pas les risques (pour lui/autrui)",
  "Que le travailleur n'a aucune maladie chronique",
  "Que l'employeur respecte le salaire minimum"],
 1,
 "Aptitude : (1) les risques du travail ne majorent pas les problèmes de santé du travailleur, et (2) l'état de santé du travailleur ne majore pas les risques (pour lui-même ou autrui).");

Q("trio",
 "Un travailleur reprend après 5 semaines d'incapacité. Quelle obligation s'applique ?",
 ["Aucune visite n'est requise",
  "Une visite de reprise dans les 10 jours ouvrables suivant la reprise",
  "Une visite de pré-reprise obligatoire avant le retour",
  "Une visite d'embauche"],
 1,
 "Visite de reprise OBLIGATOIRE dans les 10 jours ouvrables si l'incapacité a duré ≥ 4 semaines (ici 5). Le travailleur ne reprend pas « du jour au lendemain » sans cette visite.");

Q("trio",
 "La visite de PRÉ-REPRISE se distingue de la visite de reprise car elle :",
 ["Est obligatoire après toute incapacité ≥ 4 semaines",
  "Est facultative et à l'initiative du travailleur, pendant l'arrêt",
  "Est décidée par l'employeur après la reprise",
  "Remplace l'examen d'embauche"],
 1,
 "Pré-reprise : FACULTATIVE, à l'initiative du TRAVAILLEUR, PENDANT l'arrêt, pour anticiper la reprise. La reprise, elle, est obligatoire dans les 10 j si l'arrêt ≥ 4 semaines.");

Q("trio",
 "Dans le trajet de réintégration, quel délai correspond au médecin du travail pour rendre sa décision ?",
 ["10 jours", "49 jours", "63 jours", "6 mois"],
 1,
 "Le médecin du travail dispose de 49 jours. L'EMPLOYEUR répond en 63 jours (inaptitude temporaire) ou 6 mois (inaptitude définitive). Piège : ces chiffres voisins se confondent facilement.");

Q("trio",
 "L'évaluation de l'inaptitude définitive (EID) est possible :",
 ["Dès le 1er jour d'incapacité",
  "Après 6 mois d'ITT continue ; en cas de refus d'un travail adapté → rupture pour force majeure médicale",
  "Après 49 jours",
  "Seulement après 1 an"],
 1,
 "EID possible après 6 mois d'ITT continue. Si inaptitude définitive + refus d'un travail adapté → rupture pour force majeure médicale (dissociée de l'ITT depuis le 01/10/2022).");

Q("trio",
 "Concernant la protection de la maternité, quelle affirmation est EXACTE ?",
 ["La travailleuse reçoit un certificat d'incapacité",
  "En cas de risque : mutation de poste ou écartement ; indemnité de la mutuelle (~78 % du brut)",
  "C'est l'employeur qui indemnise à 100 %",
  "L'allaitement n'ouvre aucune protection"],
 1,
 "Maternité : mutation vers un poste sans exposition OU écartement (inaptitude temporaire) — PAS de certificat d'incapacité mais une attestation ; indemnité de la mutuelle (~78 % du brut). Allaitement : écartement possible jusqu'aux 5 mois de l'enfant.");

Q("trio",
 "La plateforme TRIO (INAMI) sert à :",
 ["Contrôler l'absentéisme des salariés",
  "Mettre en contact sécurisé médecin traitant, médecin conseil et médecin du travail, avec l'accord du patient",
  "Gérer le paiement des indemnités",
  "Remplacer le réseau de santé régional"],
 1,
 "TRIO : avec l'accord PRÉALABLE du patient, identifie et met en contact direct et sécurisé médecin traitant – médecin conseil – médecin du travail (+ coordinateurs retour au travail, conseillers en prévention).");

Q("trio",
 "Pourquoi le médecin du travail n'a-t-il pas d'accès direct au réseau de santé (RSW…) ?",
 ["Parce qu'il n'est pas médecin",
  "Parce qu'il n'a pas de lien thérapeutique avec le patient (sauf via TRIO, avec consentement)",
  "Parce qu'il est payé par la mutuelle",
  "Parce que la loi le lui interdit définitivement"],
 1,
 "Le médecin du travail n'a pas de LIEN THÉRAPEUTIQUE de soins → pas d'accès direct au réseau de santé, sauf via la plateforme TRIO (avec consentement du patient).");

Q("trio",
 "Le recours contre une décision est mal attribué dans une de ces propositions. Laquelle ?",
 ["Médecin du travail → Direction régionale du Contrôle du Bien-Être",
  "Médecin conseil → Tribunal du travail",
  "Médecin contrôle → médecin-arbitre",
  "Médecin du travail → médecin-arbitre"],
 3,
 "FAUX : le recours contre le médecin du travail se fait auprès de la Direction régionale du Contrôle du Bien-Être (pas le médecin-arbitre, qui concerne le médecin CONTRÔLE). Conseil → Tribunal du travail.");

Q("trio",
 "Le cadre légal de la médecine du travail repose sur :",
 ["La loi Leburton de 1964",
  "Le Code du Bien-Être au Travail (loi du 4 août 1996 ; AR du 28 mai 2003)",
  "Le Pacte social de 1944",
  "La loi sur les mutuelles de 1894"],
 1,
 "Médecine du travail : Code du Bien-Être au Travail (loi du 4 août 1996 ; AR du 28 mai 2003 sur la surveillance de la santé des travailleurs). La loi Leburton/1964 concerne l'INAMI.");

Q("trio",
 "La notion de risque professionnel se modélise comme :",
 ["Danger + Maladie = Risque",
  "Danger × Exposition → Dommage (la prévention agit sur l'exposition)",
  "Exposition seule = Dommage",
  "Risque = Gravité × Diagnostic"],
 1,
 "Risque = Danger × Exposition (quantité, fréquence, durée, distance) → Dommage. La prévention agit prioritairement sur l'EXPOSITION.");

Q("trio",
 "Le médecin du travail exerce dans le cadre d'un :",
 ["Cabinet de mutuelle",
  "SEPP (service externe) ou SIPP (service interne) de prévention et de protection au travail",
  "Service hospitalier universitaire",
  "CPAS"],
 1,
 "Le médecin du travail travaille en SEPP (externe) ou SIPP (interne), avec une équipe (infirmiers, conseillers en prévention : ergonomie, psychosocial, sécurité, hygiène).");

Q("trio",
 "Le médecin CONSEIL de la mutuelle peut légitimement :",
 ["Communiquer le diagnostic à l'employeur",
  "Proposer la reprise du travail et contacter le médecin du travail, tout en respectant le secret vis-à-vis de l'employeur",
  "Contrôler l'absentéisme pour le compte de l'employeur",
  "Délivrer un certificat sans diagnostic à la mutuelle"],
 1,
 "Le médecin conseil peut examiner le patient, proposer la reprise, contacter le médecin du travail — mais reste tenu au SECRET vis-à-vis de l'employeur. Le certificat à la mutuelle comporte, lui, le diagnostic.");

Q("trio",
 "Le certificat remis à l'EMPLOYEUR :",
 ["Comporte toujours le diagnostic",
  "Ne comporte jamais de diagnostic (secret médical)",
  "Est établi par le médecin du travail",
  "Est transmis à la mutuelle"],
 1,
 "Le certificat à l'employeur ne porte JAMAIS de diagnostic (secret médical) — seul le certificat à la mutuelle (médecin conseil) le mentionne.");

Q("trio",
 "Un candidat est déclaré inapte lors de l'examen d'EMBAUCHE pour un poste à risque. Quelle suite ?",
 ["Il dispose d'un droit de recours",
  "Il n'existe pas de recours possible dans ce cas",
  "L'employeur doit l'engager malgré tout",
  "Le médecin conseil réexamine la décision"],
 1,
 "Examen d'embauche (poste à risque) : si inapte à l'embauche → PAS de recours (contrairement à d'autres décisions du médecin du travail).");

Q("trio",
 "En cas d'absence répétée aux rendez-vous du trajet de réintégration, le travailleur s'expose à :",
 ["Aucune conséquence",
  "Une sanction sur les indemnités de la mutuelle",
  "Une peine d'emprisonnement",
  "Une radiation de la mutuelle à vie"],
 1,
 "Absence aux rendez-vous du trajet de réintégration → sanction sur les INDEMNITÉS de la mutuelle.");

Q("trio",
 "La formation du médecin du travail est :",
 ["Un master de base de 7 ans",
  "Un master de spécialisation de 4 ans en médecine du travail, avec stages",
  "Une formation continue de 8 heures",
  "Un certificat délivré par la mutuelle"],
 1,
 "Médecin du travail : master de spécialisation (4 ans) + stages. Médecine de prévention, à l'interface santé / monde socio-économique (curatif ≠ préventif).");

Q("trio",
 "Pourquoi un médecin généraliste s'adresse-t-il au médecin du travail ?",
 ["Pour faire contrôler l'absentéisme de son patient",
  "Pour adapter le poste, préparer la reprise et signaler un risque professionnel — dans le respect du secret",
  "Pour obtenir un avis diagnostique",
  "Pour prescrire un traitement adapté au poste"],
 1,
 "Le MG s'adresse au médecin du travail pour ADAPTER LE POSTE, préparer la reprise, signaler un risque professionnel — toujours en respectant le secret médical (le certificat à l'employeur ne porte pas de diagnostic).");

Q("trio",
 "Une travailleuse de laboratoire enceinte est exposée à des risques. La conduite du médecin du travail est :",
 ["Délivrer un certificat d'incapacité de travail",
  "Mutation de poste ou écartement, avec indemnité de la mutuelle (~78 % du brut)",
  "Maintien au poste avec surveillance renforcée",
  "Renvoi vers le médecin conseil pour invalidité"],
 1,
 "Maternité avec risque : mutation vers un poste sans exposition ou écartement (attestation, pas un certificat d'incapacité) ; indemnité couverte par la mutuelle (~78 % du brut).");

Q("trio",
 "Quel examen de santé est correctement décrit ?",
 ["Visite de reprise : facultative, à l'initiative du travailleur",
  "Consultation spontanée : à la demande du travailleur",
  "Examen périodique : uniquement à l'embauche",
  "Pré-reprise : obligatoire dans les 10 jours après la reprise"],
 1,
 "Consultation spontanée = à la demande du travailleur. Reprise = obligatoire (10 j, si arrêt ≥ 4 sem.) ; pré-reprise = facultative pendant l'arrêt ; périodique = surveillance régulière selon le profil de risque.");
// ========== "LAQUELLE EST FAUSSE" — ASSUÉTUDES ==========
Q("assuetudes",
 "Concernant la classification des substances psychoactives, laquelle de ces affirmations est FAUSSE ?",
 ["Les benzodiazépines sont des dépresseurs du système nerveux central",
  "La nicotine et la caféine sont des stimulants",
  "Le cannabis est classé parmi les perturbateurs/hallucinogènes",
  "La cocaïne est un dépresseur"],
 3,
 "FAUX : la cocaïne est un STIMULANT (avec amphétamines, nicotine, caféine). Dépresseurs = alcool, opioïdes, benzodiazépines ; perturbateurs = cannabis, LSD.");

Q("assuetudes",
 "À propos des voies de consommation, laquelle est FAUSSE ?",
 ["La voie injectable contourne le premier passage hépatique",
  "La voie orale impose un passage hépatique avant la circulation",
  "La voie respiratoire (inhalation) donne un effet plus lent que la voie orale",
  "La voie muqueuse comprend les voies nasale et jugale"],
 2,
 "FAUX : l'inhalation passe directement dans le sang → effet RAPIDE (plus rapide que la voie orale, ralentie par le 1er passage hépatique).");

Q("assuetudes",
 "À propos des outils conceptuels du cours, laquelle est FAUSSE ?",
 ["Le triangle d'Olivenstein associe Produit, Individu et Environnement",
  "Le triangle d'Olivenstein décrit les stades du changement",
  "Le cycle de Prochaska et Di Clemente inclut la rechute",
  "Le triangle d'Olivenstein est un outil de prévention et de dépistage"],
 1,
 "FAUX : ce sont le cercle de Prochaska & Di Clemente qui décrit les STADES DU CHANGEMENT. Olivenstein = interaction Produit/Individu/Environnement (prévention, dépistage, diagnostic, consultation).");

Q("assuetudes",
 "Concernant l'intervention brève (RPIB), laquelle est FAUSSE ?",
 ["Elle dure de 5 à 20 minutes et peut être répétée",
  "Elle précède le repérage d'un usage problématique",
  "L'OMS en définit 4 étapes (modèle FRAMES)",
  "Elle repose sur l'empathie"],
 1,
 "FAUX : l'intervention brève SUIT le repérage (elle ne le précède pas) d'un usage problématique.");

Q("assuetudes",
 "À propos de l'entretien motivationnel, laquelle est FAUSSE ?",
 ["Le praticien guide plus qu'il ne dirige",
  "Il vise à augmenter l'ambivalence du patient",
  "C'est le patient qui décide",
  "Le discours-changement exprime la motivation propre du patient"],
 1,
 "FAUX : l'entretien motivationnel vise à RÉDUIRE l'ambivalence (pas à l'augmenter), en faisant émerger le discours-changement.");

Q("assuetudes",
 "Concernant les opioïdes, laquelle est FAUSSE ?",
 ["L'imprégnation se traduit par un myosis",
  "Le manque s'accompagne d'une mydriase et d'une agitation",
  "L'imprégnation diminue la fréquence respiratoire",
  "L'imprégnation provoque une mydriase"],
 3,
 "FAUX : l'imprégnation donne un MYOSIS (pupille en pointe). La mydriase signe le MANQUE (sevrage).");

Q("assuetudes",
 "À propos de la réduction des risques (RdR), laquelle est FAUSSE ?",
 ["Elle s'adresse à tous les usagers, des expérimentaux aux dépendants",
  "Elle est complémentaire de la prévention de l'usage",
  "Elle exige l'abstinence comme préalable",
  "Elle conseille un dépistage jusqu'à 3 mois après une prise de risque"],
 2,
 "FAUX : la RdR ne pose PAS l'abstinence comme préalable ; elle part de l'expérience de la personne, sans jugement.");

Q("assuetudes",
 "Concernant le langage et le lien thérapeutique, laquelle est FAUSSE ?",
 ["Le langage employé peut stigmatiser le patient",
  "On préfère « personne avec un trouble de l'usage de substances »",
  "Évaluer les doses est l'élément le plus important pour la relation",
  "Les mots utilisés figurent parmi les éléments importants du lien"],
 2,
 "FAUX : « évaluer les doses » est au contraire le MOINS important pour la relation (piège récurrent). Les mots, l'entretien motivationnel, Olivenstein et Di Clemente comptent davantage.");

Q("assuetudes",
 "Lors d'une première consultation, laquelle de ces attitudes est mal décrite (proposition FAUSSE) ?",
 ["Proposer d'emblée une analyse d'urines facilite le lien",
  "Vanter la vie sans substance peut compliquer le lien",
  "Référer directement en milieu spécialisé sans suivi est à éviter",
  "On aborde le sujet sans tabou ni jugement"],
 0,
 "FAUX : proposer d'emblée une analyse d'urines COMPLIQUE le lien (tout comme vanter la vie sans substance).");

Q("assuetudes",
 "À propos de l'alliance thérapeutique et du cadre, laquelle est FAUSSE ?",
 ["L'alliance thérapeutique est un fil conducteur à entretenir continuellement",
  "Le cadre de travail protège le patient et le soignant",
  "Une fois établie, l'alliance thérapeutique ne nécessite plus d'entretien",
  "Les attitudes de Rogers sont empathie, congruence et regard positif inconditionnel"],
 2,
 "FAUX : l'alliance n'est jamais acquise une fois pour toutes — c'est un fil conducteur à entretenir CONTINUELLEMENT.");

// ========== "LAQUELLE EST FAUSSE" — PHARMACIEN ==========
Q("pharmacien",
 "Concernant l'évolution du rôle du pharmacien, laquelle est FAUSSE ?",
 ["Le rôle de prestataire de soins pharmaceutiques est inscrit dans la loi en 2006",
  "En 2010, la rémunération (médicaments remboursés) est dissociée du prix",
  "Le pharmacien est rémunéré pour la prestation de soins pharmaceutiques",
  "La rémunération du pharmacien reste proportionnelle au prix du médicament"],
 3,
 "FAUX : depuis 2010, la rémunération est justement DISSOCIÉE du prix → le pharmacien est payé pour la prestation de soins, pas selon le prix.");

Q("pharmacien",
 "À propos du Dossier Pharmaceutique Partagé (DPP), laquelle est FAUSSE ?",
 ["Il couvre les médicaments prescrits ou non",
  "Il inclut les compléments encodés et les préparations magistrales",
  "Son accès ne requiert pas le consentement du patient",
  "Il aide à détecter doublons, cascades et surconsommation"],
 2,
 "FAUX : l'accès au DPP est soumis au CONSENTEMENT du patient.");

Q("pharmacien",
 "Concernant le bilan / la revue de médication, laquelle est FAUSSE ?",
 ["Il concerne un patient ambulatoire",
  "Il requiert au moins 5 médicaments chroniques remboursés",
  "Le résultat est encodé dans un e-Form envoyé au médecin",
  "Il requiert au moins 3 médicaments aigus"],
 3,
 "FAUX : le critère est ≥ 5 médicaments CHRONIQUES remboursés (pas 3 aigus), avec pharmacien de référence et DPP.");

Q("pharmacien",
 "À propos de la vaccination antigrippale en officine (2026), laquelle est FAUSSE ?",
 ["Le pharmacien formé peut vacciner les personnes de plus de 11 ans",
  "La formation dure au moins 8 heures, renouvelée tous les 3 ans",
  "Une ordonnance préalable du médecin reste obligatoire",
  "Le pharmacien peut administrer de l'adrénaline en cas de choc anaphylactique"],
 2,
 "FAUX : le pharmacien formé peut prescrire, délivrer et administrer le vaccin grippe SANS ordonnance préalable (loi fédérale fin 2025, vaccination permanente).");

Q("pharmacien",
 "Concernant le sevrage des benzodiazépines, laquelle est FAUSSE ?",
 ["L'arrêt est progressif, entre 50 et 360 jours",
  "Le patient doit être âgé d'au moins 18 ans",
  "Après une prise prolongée, l'arrêt brutal est sans danger",
  "La préparation magistrale est réalisée à l'officine, sous prescription"],
 2,
 "FAUX : jamais d'arrêt brutal après une prise prolongée → sevrage PROGRESSIF, au besoin via une BZD à longue durée d'action.");

Q("pharmacien",
 "À propos de la pharmacocinétique, laquelle est FAUSSE ?",
 ["Un médicament est quasi totalement éliminé après 5 à 7 demi-vies",
  "La demi-vie est le temps pour réduire la concentration plasmatique de moitié",
  "Une interaction pharmacocinétique dure environ 5 × la demi-vie de l'inhibiteur",
  "L'amiodarone, à demi-vie courte, n'interagit que quelques heures après l'arrêt"],
 3,
 "FAUX : l'amiodarone a une demi-vie TRÈS LONGUE (25-100 j) → elle interagit encore plusieurs MOIS après son arrêt (≈ 5 × T½).");

Q("pharmacien",
 "Concernant les interactions et l'allongement du QT, laquelle est FAUSSE ?",
 ["Une interaction PD correspond à des effets qui s'additionnent (ex. QT)",
  "Une interaction PK modifie l'absorption, le métabolisme ou l'élimination",
  "L'hyperkaliémie est un facteur de risque d'allongement du QT",
  "Femme, > 65 ans et bradycardie sont des facteurs de risque de QT long"],
 2,
 "FAUX : c'est l'HYPOkaliémie (et hypoMg/hypoCa) qui favorise l'allongement du QT, pas l'hyperkaliémie.");

Q("pharmacien",
 "À propos de la pharmacovigilance, laquelle est FAUSSE ?",
 ["Elle peut être notifiée par le patient lui-même",
  "Les bases sont alimentées par les effets indésirables suspectés et avérés",
  "On ne signale que les effets indésirables encore inconnus",
  "Le triangle noir inversé désigne un médicament récent (< 5 ans) surveillé"],
 2,
 "FAUX : on signale aussi un effet indésirable DÉJÀ CONNU. La pharmacovigilance n'est pas un outil de dénonciation.");

Q("pharmacien",
 "Concernant la cascade médicamenteuse et la déprescription, laquelle est FAUSSE ?",
 ["Une cascade débute quand un effet indésirable est pris pour un nouveau problème",
  "Oxybutynine → constipation → laxatif illustre une cascade",
  "Start & Stopp et GheOP3S sont des outils de déprescription",
  "« Maximum 6 médicaments par jour » est l'outil de référence de déprescription"],
 3,
 "FAUX : « max 6 médicaments/jour » n'est PAS un outil (seuil arbitraire). Les outils sont Start & Stopp, GheOP3S, la révision pluridisciplinaire.");

Q("pharmacien",
 "À propos de Recip-e et des entretiens BUM, laquelle est FAUSSE ?",
 ["Recip-e est un message non adressé, crypté, via eHealth",
  "Recip-e est récupérée par la pharmacie choisie par le patient",
  "Les entretiens BUM ciblent l'asthme et la BPCO",
  "Recip-e est envoyée directement dans une officine désignée par le médecin"],
 3,
 "FAUX : Recip-e n'est PAS « envoyée » dans une officine précise — c'est un message non adressé, récupéré par la pharmacie choisie par le patient.");

// ========== "LAQUELLE EST FAUSSE" — RECHERCHE ==========
Q("recherche",
 "Concernant la définition WONCA de la médecine générale, laquelle est FAUSSE ?",
 ["La MG est une discipline scientifique et universitaire (WONCA 2002)",
  "Ses trois dimensions sont contextuelle, comportementale et scientifique",
  "Elle est orientée vers les soins primaires",
  "Elle se définit comme une sur-spécialité d'organe"],
 3,
 "FAUX : la MG ne se définit PAS par un organe — c'est une discipline de soins primaires, centrée sur la personne et les relations (McWhinney).");

Q("recherche",
 "À propos des « généralistes curieux », laquelle est FAUSSE ?",
 ["Archie Cochrane est le père de l'Evidence-Based Medicine",
  "James Herrick a décrit l'anémie falciforme",
  "Robert Koch est à l'origine de la microbiologie clinique",
  "Edgar Hope-Simpson a réalisé le premier essai clinique randomisé"],
 3,
 "FAUX : c'est Archie Cochrane qui a promu l'essai randomisé. Hope-Simpson a étudié la nature du zona (cohorte de 16 ans, épidémiologie clinique).");

Q("recherche",
 "Concernant les études analytiques, laquelle est FAUSSE ?",
 ["La cohorte part de l'exposition et suit la survenue",
  "La cohorte est généralement prospective",
  "Le cas-témoins part de l'exposition pour observer ensuite la maladie",
  "Le cas-témoins est souvent rétrospectif"],
 2,
 "FAUX : le cas-témoins part de la MALADIE (cas vs témoins) pour rechercher l'exposition en arrière. C'est la cohorte qui part de l'exposition.");

Q("recherche",
 "À propos du niveau de preuve et des types d'études, laquelle est FAUSSE ?",
 ["La revue systématique / méta-analyse est au sommet du niveau de preuve",
  "L'essai randomisé est une étude interventionnelle",
  "La méthode Delphi est une méthode semi-quantitative",
  "L'étude de cas a un niveau de preuve supérieur à la méta-analyse"],
 3,
 "FAUX : l'étude de cas est tout en bas du niveau de preuve ; la revue systématique / méta-analyse est au sommet.");

Q("recherche",
 "Concernant l'épistémologie, laquelle est FAUSSE ?",
 ["L'approche positiviste débouche sur la recherche quantitative",
  "L'approche interprétative débouche sur la recherche qualitative",
  "Une association statistique implique nécessairement un lien de causalité",
  "La méthode expérimentale part de l'observation"],
 2,
 "FAUX : une association statistique n'implique PAS la causalité (biais, confusion, hasard possibles).");

Q("recherche",
 "À propos de la prévention quaternaire, laquelle est FAUSSE ?",
 ["Elle a été proposée par Marc Jamoulle",
  "Elle vise à lutter contre la surmédicalisation",
  "Éviter un scanner pour une lombalgie sans red flags en est un exemple",
  "Elle correspond au dépistage organisé des cancers"],
 3,
 "FAUX : le dépistage organisé relève de la prévention SECONDAIRE. La quaternaire lutte contre la surmédicalisation/le surdiagnostic.");

Q("recherche",
 "Concernant les outils et classifications, laquelle est FAUSSE ?",
 ["PICO structure la question de recherche",
  "L'ICPC-3 est centrée sur le patient et adaptée aux soins primaires",
  "L'ICPC-3 est identique à la Classification Internationale des Maladies (CIM)",
  "QQOQCCP aide aussi à formuler la question de recherche"],
 2,
 "FAUX : l'ICPC-3 est DISTINCTE de la CIM — elle est centrée sur le patient et le motif de consultation (soins primaires), tandis que la CIM est centrée sur la maladie.");

Q("recherche",
 "À propos des critères de validité d'un dépistage, laquelle est FAUSSE ?",
 ["La maladie doit être fréquente et grave",
  "Un traitement d'efficacité démontrée doit être disponible",
  "Le test doit être acceptable et fiable",
  "La maladie doit être rare pour limiter les coûts"],
 3,
 "FAUX : un dépistage utile vise une maladie FRÉQUENTE et grave (pas rare), avec traitement efficace et test fiable.");

Q("recherche",
 "Concernant l'histoire de la MG en Belgique, laquelle est FAUSSE ?",
 ["La SSMG (Société Scientifique de Médecine Générale) date de 1968",
  "L'intégration au monde académique date de 2009 (CAMG)",
  "La spécialisation de la MG a accéléré sa recherche dès 1952",
  "Le Collège de Médecine Générale a été créé en 2018"],
 2,
 "FAUX : le mouvement de spécialisation a au contraire longtemps RETARDÉ la recherche en MG.");

Q("recherche",
 "Concernant les 6 compétences de l'arbre WONCA, laquelle est FAUSSE ?",
 ["La gestion des soins de santé primaires en fait partie",
  "Les soins centrés sur la personne en font partie",
  "La maîtrise de la chirurgie spécialisée en fait partie",
  "L'orientation communautaire et l'approche globale en font partie"],
 2,
 "FAUX : la chirurgie spécialisée ne fait pas partie des 6 compétences (soins primaires, centrés personne, résolution de problèmes, approche globale, orientation communautaire, modèle holistique).");
// ========== "LAQUELLE EST FAUSSE" — SPORT ==========
Q("sport",
 "Concernant le dépistage cardiaque du jeune sportif, laquelle est FAUSSE ?",
 ["Chez le jeune < 35 ans asymptomatique, pas de dépistage systématique",
  "Le dépistage de masse génère 5 à 30 % de faux positifs",
  "L'ECG de repos est suffisamment sensible et spécifique pour dépister",
  "On recherche toujours les symptômes d'alarme"],
 2,
 "FAUX : ni l'interrogatoire + examen, ni l'ECG de repos ne sont assez sensibles/spécifiques (d'où l'absence de dépistage systématique, KCE).");

Q("sport",
 "À propos de la mort subite cardiaque, laquelle est FAUSSE ?",
 ["Elle touche surtout des adultes d'âge mûr déjà cardiaques",
  "Chez le jeune sportif, elle est très rare (≤ 10/million/an)",
  "Elle est plus fréquente chez les filles que chez les garçons",
  "Chez l'adulte, elle est le plus souvent liée à un infarctus"],
 2,
 "FAUX : chez le jeune, le risque est environ 10× plus élevé chez les GARÇONS.");

Q("sport",
 "Concernant l'activité physique et le cancer, laquelle est FAUSSE ?",
 ["L'AP réduit la fatigue liée au cancer",
  "Une neutropénie sévère (< 500/mm³) contre-indique l'effort",
  "Le repos systématique est recommandé pendant un cancer",
  "L'AP réduit la mortalité et le risque de récidive"],
 2,
 "FAUX : loin du repos systématique, l'AP est une thérapeutique (réduit fatigue, mortalité, récidive). CI : neutropénie < 500, Hb < 9,5, plaquettes < 20 000, fièvre > 38 °C.");

Q("sport",
 "Chez le diabétique, à propos de l'activité physique, laquelle est FAUSSE ?",
 ["Avant l'effort, une glycémie < 6-8 mmol/L impose ≥ 15 g de glucides",
  "Une hyperglycémie > 250 mg/dl avec cétonurie contre-indique l'effort",
  "On augmente l'insuline couvrant la période d'effort",
  "Les sports d'endurance sont privilégiés"],
 2,
 "FAUX : on DIMINUE l'insuline (de l'ordre de 50 à 75 %) couvrant la période d'effort, si la glycémie est correcte.");

Q("sport",
 "Concernant les pathologies du sport, laquelle est FAUSSE ?",
 ["L'augmentation de la charge d'entraînement doit rester < 10 %/semaine",
  "Le syndrome de l'essuie-glace donne une douleur de la face latérale du genou",
  "Le syndrome fémoropatellaire donne une douleur postérieure du genou",
  "Osgood-Schlatter impose un repos sportif sélectif de 3 à 6 mois"],
 2,
 "FAUX : le syndrome fémoropatellaire donne une douleur ANTÉRIEURE du genou (escaliers, squats), pas postérieure.");

Q("sport",
 "À propos du dopage et des médicaments, laquelle est FAUSSE ?",
 ["Les glucocorticoïdes (S9) sont interdits en compétition",
  "Le salbutamol inhalé est autorisé sous seuil",
  "L'acétazolamide (Diamox) est autorisé sans restriction",
  "Une infiltration de corticoïde est possible > 3 jours avant la compétition"],
 2,
 "FAUX : l'acétazolamide (Diamox) est un diurétique/agent masquant (S5), INTERDIT EN PERMANENCE → une AUT est nécessaire.");

Q("sport",
 "Concernant l'AMA et le dopage, laquelle est FAUSSE ?",
 ["L'AMA a été créée en 1999",
  "La liste des interdictions est mise à jour chaque 1er janvier",
  "Le dopage se limite à la présence d'une substance interdite",
  "Depuis 2020, le sport « libre » peut aussi être contrôlé"],
 2,
 "FAUX : le dopage recouvre 11 types de violations (usage, possession, trafic, contrôles manqués, complicité…), pas seulement la présence d'une substance.");

Q("sport",
 "À propos de l'activité physique comme thérapeutique, laquelle est FAUSSE ?",
 ["L'asthme n'est pas une contre-indication au sport",
  "L'AP régulière réduit les infections respiratoires (−40 %)",
  "Un excès d'intensité peut affaiblir l'immunité (courbe en J)",
  "Le sport aggrave systématiquement l'asthme de l'enfant"],
 3,
 "FAUX : le sport n'aggrave pas l'asthme — l'AP améliore le contrôle, la qualité de vie et la fonction pulmonaire.");

Q("sport",
 "Concernant le bilan cardiaque selon l'âge, laquelle est FAUSSE ?",
 ["≥ 40-50 ans : on évalue le risque cardiovasculaire (SCORE2)",
  "Si le risque est faible et le patient asymptomatique → rassurer",
  "Un ECG d'effort systématique est requis chez tout jeune sportif",
  "On est particulièrement attentif à la reprise du sport après 40 ans"],
 2,
 "FAUX : pas d'ECG d'effort systématique chez le jeune asymptomatique (balance bénéfice-risque négative).");

Q("sport",
 "À propos de l'évaluation de l'AP et du certificat, laquelle est FAUSSE ?",
 ["Le GPAQ (OMS) évalue le niveau d'activité physique",
  "Le niveau d'AP doit figurer dans le DMI (AR 2024)",
  "Le certificat atteste l'absence de tout risque cardiaque",
  "Le GPAQ distingue 3 niveaux (faible, modéré, élevé)"],
 2,
 "FAUX : le certificat atteste seulement « pas de contre-indication APPARENTE » — il ne garantit pas l'absence de tout risque.");

// ========== "LAQUELLE EST FAUSSE" — ONE HEALTH ==========
Q("onehealth",
 "Concernant l'empreinte carbone de la santé, laquelle est FAUSSE ?",
 ["Le secteur de la santé pèse environ 8 % de l'empreinte nationale",
  "Les médicaments et dispositifs médicaux pèsent environ 54 % des GES",
  "Plus de 85 % des émissions sont indirectes",
  "Le chauffage des bâtiments est le 1er poste d'émissions du secteur"],
 3,
 "FAUX : le 1er poste est l'achat de MÉDICAMENTS et DISPOSITIFS (~54 %), pas le chauffage.");

Q("onehealth",
 "À propos des inhalateurs, laquelle est FAUSSE ?",
 ["Le DPI est aussi efficace que le pMDI",
  "Le DPI est moins polluant que le pMDI",
  "Le DPI est recommandé en première intention chez l'enfant de moins de 5 ans",
  "Le DPI est à éviter si la capacité inspiratoire est fortement diminuée"],
 2,
 "FAUX : le DPI est à ÉVITER chez l'enfant < 5 ans (et si capacité inspiratoire fortement réduite) — il exige un débit inspiratoire suffisant.");

Q("onehealth",
 "Concernant les 4R de la santé durable, laquelle est FAUSSE ?",
 ["Réduire est la priorité absolue",
  "L'ordre de priorité est Réduire > Remplacer > Recycler",
  "Recycler prime sur Réduire",
  "« Repenser » fait partie de la démarche"],
 2,
 "FAUX : RÉDUIRE prime (agir sur les besoins/demandes/réponses) ; recycler vient en dernier.");

Q("onehealth",
 "À propos de l'écotoxicité, laquelle est FAUSSE ?",
 ["Hormones et antibiotiques sont des classes à risque pour l'environnement",
  "Les stations d'épuration filtrent efficacement ces micropolluants",
  "Le score PBT évalue Persistance, Bioaccumulation, Toxicité",
  "Anticancéreux et antidépresseurs sont également à risque"],
 1,
 "FAUX : les stations d'épuration NE filtrent PAS ces micropolluants → ils se retrouvent dans l'eau (~50 t de médicaments dans le lac Léman).");

Q("onehealth",
 "Concernant la prescription durable, laquelle est FAUSSE ?",
 ["À indication égale, on préfère l'ibuprofène au diclofénac",
  "Le diclofénac est plus écotoxique que l'ibuprofène",
  "La déprescription rejoint la prévention quaternaire",
  "Le diclofénac est moins écotoxique que l'ibuprofène"],
 3,
 "FAUX : le diclofénac est PLUS écotoxique que l'ibuprofène → on préfère l'ibuprofène à indication équivalente.");

Q("onehealth",
 "À propos des cadres éthiques, laquelle est FAUSSE ?",
 ["Les 3 P sont People, Planet, Profit",
  "La théorie du Donut situe un espace « sûr et juste »",
  "La Commission Lancet 2015 considère le climat comme une menace sans lien avec la santé",
  "On passe de la RSE (entreprises) à la RSS (santé)"],
 2,
 "FAUX : la Commission Lancet 2015 voit la lutte contre le changement climatique comme « la plus grande OPPORTUNITÉ du 21e siècle pour la santé mondiale ».");

Q("onehealth",
 "Concernant la décision de prescription, laquelle est FAUSSE ?",
 ["Elle met en balance coût, préférences et empreinte carbone",
  "Imposer un dispositif moins polluant peut nuire à l'observance",
  "La décision partagée est préférée au paternalisme",
  "Le seul critère pertinent est l'efficacité du médicament"],
 3,
 "FAUX : l'efficacité n'est PAS le seul critère — on intègre coût, préférences, empreinte, écotoxicité, éthique, interactions, alternatives.");

Q("onehealth",
 "À propos des innovations et du gaspillage, laquelle est FAUSSE ?",
 ["Le HFA-152a a un pouvoir de réchauffement 10 à 30× moindre",
  "Environ 14 % des médicaments vendus finissent à la poubelle",
  "Le HFA-152a est 10× plus polluant que les propulseurs actuels",
  "Remplacer un pMDI par un DPI réduit fortement les émissions"],
 2,
 "FAUX : le HFA-152a est MOINS polluant (pouvoir de réchauffement 10-30× moindre), c'est une innovation favorable.");

Q("onehealth",
 "Concernant l'antibiorésistance, laquelle est FAUSSE ?",
 ["C'est un enjeu mondial majeur",
  "Le Lancet projette ses effets à l'horizon 2050",
  "Elle ne concerne pas la santé environnementale",
  "Elle se propage jusque dans des zones reculées"],
 2,
 "FAUX : l'antibiorésistance est au cœur du One Health et de l'écotoxicité — elle concerne directement la santé environnementale.");

Q("onehealth",
 "À propos du profil des dispositifs d'inhalation, laquelle est FAUSSE ?",
 ["En Belgique, environ 45 % de pMDI",
  "En Suède, environ 10 % de pMDI",
  "Au Royaume-Uni, environ 70 % de pMDI",
  "En Belgique, les pMDI ne représentent qu'environ 5 %"],
 3,
 "FAUX : en Belgique les pMDI représentent ~45 % (les ~5 % correspondent aux SMI / soft mist).");
// ========== "LAQUELLE EST FAUSSE" — ORGANISATION DES SOINS ==========
Q("orga",
 "Concernant l'incapacité et l'invalidité, laquelle est FAUSSE ?",
 ["L'incapacité primaire suppose une perte de capacité de gain ≥ 66 %",
  "L'invalidité correspond à une incapacité de plus de 12 mois",
  "L'invalidité est contrôlée par le Conseil médical de l'invalidité (INAMI)",
  "L'invalidité débute après 6 mois d'incapacité"],
 3,
 "FAUX : l'invalidité débute après 12 MOIS (1 an), pas 6 mois. Les 6 premiers mois, l'évaluation se fait par rapport au métier habituel.");

Q("orga",
 "À propos des certificats d'incapacité, laquelle est FAUSSE ?",
 ["Le certificat à la mutuelle (médecin conseil) comporte le diagnostic",
  "Le certificat à l'employeur ne comporte pas de diagnostic",
  "Le certificat à l'employeur comporte le diagnostic",
  "Durant les 6 premiers mois, on évalue par rapport au métier habituel"],
 2,
 "FAUX : le certificat à l'EMPLOYEUR ne porte JAMAIS de diagnostic (secret médical). Seul celui à la mutuelle le mentionne.");

Q("orga",
 "Concernant la réforme du retour au travail (2026), laquelle est FAUSSE ?",
 ["Le certificat électronique (Mult-eMediatt) à la mutuelle est obligatoire dès 14 jours",
  "L'évaluation du potentiel de travail par la médecine du travail est obligatoire dès 8 semaines d'incapacité",
  "La durée d'incapacité prescrite par le MG est de 3 mois maximum, renouvelable",
  "L'évaluation du potentiel de travail devient obligatoire dès 6 mois d'incapacité"],
 3,
 "FAUX : l'évaluation du potentiel de travail est obligatoire dès 8 SEMAINES (≈ 2 mois), pas 6 mois.");

Q("orga",
 "À propos des délais d'envoi du certificat à la mutuelle, laquelle est FAUSSE ?",
 ["Indépendant ou chômeur : 7 jours",
  "Ouvrier : 14 jours",
  "Employé : 28 jours",
  "Employé : 7 jours"],
 3,
 "FAUX : l'employé dispose de 28 jours (pas 7). 7 j = indépendant/chômeur ; 14 j = ouvrier ; 28 j = employé.");

Q("orga",
 "Concernant les modèles de sécurité sociale, laquelle est FAUSSE ?",
 ["La Belgique est un système mixte à dominante assurantielle",
  "Bismarck = cotisations liées au travail",
  "Beveridge = financement par l'impôt et couverture universelle",
  "Beveridge = droits proportionnels aux cotisations versées"],
 3,
 "FAUX : les droits proportionnels aux cotisations caractérisent BISMARCK. Beveridge = universel, redistributif, financé par l'impôt.");

Q("orga",
 "À propos des branches et de l'aide sociale, laquelle est FAUSSE ?",
 ["La sécurité sociale compte 7 branches",
  "L'allocation de chômage est une aide sociale (régime résiduaire)",
  "RIS, GRAPA et allocations aux personnes handicapées sont des aides sociales",
  "Les prestations familiales relèvent des entités fédérées depuis 2019"],
 1,
 "FAUX : l'allocation de chômage est une BRANCHE de la sécurité sociale (ONEM), pas une aide sociale.");

Q("orga",
 "Concernant le financement et les dépenses, laquelle est FAUSSE ?",
 ["Les cotisations sociales sont la principale source de financement (~57,5 %)",
  "Les pensions sont le 1er poste de dépenses (~42 %)",
  "La maladie (soins de santé) est le 1er poste de dépenses, devant les pensions",
  "Vieillesse + maladie + invalidité représentent ~80 % des dépenses"],
 2,
 "FAUX : le 1er poste de dépenses, ce sont les PENSIONS (~42 %), devant la maladie (~29 %).");

Q("orga",
 "À propos du BIM et du MAF, laquelle est FAUSSE ?",
 ["Le MAF « statut social » (BIM) a un plafond de 450 €",
  "Le MAF « enfants < 19 ans » a un plafond de 650 €",
  "Le statut d'affection chronique suppose > 400 €/trimestre durant ≥ 8 trimestres",
  "Le MAF « enfants < 19 ans » a un plafond de 450 €"],
 3,
 "FAUX : le MAF « enfants < 19 ans » a un plafond de 650 € (le 450 € correspond au MAF « statut social » / BIM).");

Q("esante",
 "Concernant la e-Santé, laquelle est FAUSSE ?",
 ["La plateforme eHealth relie les prestataires ayant un lien thérapeutique",
  "Le médecin du travail accède au réseau de santé sans condition",
  "MyCareNet sert à vérifier l'assurabilité du patient",
  "Recip-e est un message non adressé, crypté, via eHealth"],
 1,
 "FAUX : le médecin du travail n'a PAS de lien thérapeutique → pas d'accès au réseau de santé (sauf via TRIO, avec consentement).");

Q("orga",
 "À propos du financement hospitalier et de la 1re ligne, laquelle est FAUSSE ?",
 ["Le BMF couvre l'infrastructure et le fonctionnement (~36 %)",
  "Les honoraires médicaux représentent ~41 % du financement hospitalier",
  "La 1re ligne représente plus de 90 % des contacts",
  "La 1re ligne est centrée sur la maladie (approche par organe)"],
 3,
 "FAUX : la 1re ligne est centrée sur la PERSONNE (approche globale). C'est la 2e/3e ligne qui est « axée sur la maladie ».");

// ========== DATES & SEUILS — ORGANISATION DES SOINS ==========
Q("orga",
 "À partir de quelle durée d'incapacité l'évaluation du potentiel de travail (par la médecine du travail) devient-elle obligatoire dans la réforme 2026 ?",
 ["Dès 14 jours", "Dès 4 semaines", "Dès 8 semaines", "Dès 6 mois"],
 2,
 "Dès 8 SEMAINES d'incapacité, l'évaluation du potentiel de travail est obligatoire (sous peine d'amendes pour l'employeur). À ne pas confondre avec les 14 jours (certificat à la mutuelle).");

Q("orga",
 "À partir de combien de jours le médecin généraliste doit-il transmettre le certificat électronique d'incapacité (Mult-eMediatt) à la mutuelle (2026) ?",
 ["7 jours", "10 jours", "14 jours", "28 jours"],
 2,
 "Dès 14 jours : certificat électronique Mult-eMediatt obligatoire vers la mutuelle. (7/14/28 j = délais d'envoi classiques selon le statut indépendant/ouvrier/employé.)");

Q("orga",
 "Quelle est la durée maximale d'incapacité que le MG peut prescrire en une fois (réforme 2026) ?",
 ["1 mois", "3 mois, renouvelable par 3 mois", "6 mois", "1 an"],
 1,
 "La durée d'incapacité prescrite est de 3 mois MAXIMUM, renouvelable par périodes de 3 mois.");

Q("orga",
 "À partir de quelle durée parle-t-on d'INVALIDITÉ (et non plus d'incapacité primaire) ?",
 ["3 mois", "6 mois", "12 mois (1 an)", "24 mois"],
 2,
 "Invalidité = incapacité de travail de plus de 12 mois (1 an), contrôlée par le Conseil médical de l'invalidité (INAMI).");

Q("orga",
 "Un EMPLOYÉ dispose de combien de jours pour envoyer son certificat d'incapacité à la mutuelle ?",
 ["7 jours", "14 jours", "21 jours", "28 jours"],
 3,
 "Employé = 28 jours. (Indépendant/chômeur = 7 j ; ouvrier = 14 j.) Discrimination de dates fréquente à l'examen.");

Q("orga",
 "À partir de quel jour l'indépendant en incapacité perçoit-il son indemnité (montant fixe) ?",
 ["Dès le 1er jour", "Dès le 8e jour", "Dès le 15e jour", "Après 1 mois"],
 1,
 "L'indépendant est indemnisé par la mutuelle dès le 8e jour, par un montant fixe (sans lien avec les revenus). L'ouvrier subit une dégressivité après 7 j ; le salarié ~60 % après le mois de salaire garanti.");

Q("orga",
 "Depuis quelle date les suppléments d'honoraires sont-ils interdits pour les BIM « revenus » ?",
 ["01/01/2024", "01/01/2025", "01/01/2026", "Ils restent autorisés"],
 2,
 "Suppléments interdits pour les BIM « avantages » depuis le 01/01/2025, et pour les BIM « revenus » depuis le 01/01/2026.");

Q("orga",
 "À partir de combien de lits un hôpital GÉNÉRAL doit-il disposer (avec accueil 24h/24 et au moins un médecin sur place) ?",
 ["50 lits", "100 lits", "150 lits", "250 lits"],
 2,
 "Hôpital général : minimum 150 lits, accueil 24h/24, au moins un médecin sur place.");

Q("orga",
 "Le statut « affection chronique » suppose des dépenses de santé dépassant un seuil sur plusieurs trimestres. Lequel ?",
 ["> 200 €/trimestre durant 4 trimestres",
  "> 400 €/trimestre durant ≥ 8 trimestres consécutifs",
  "> 650 €/trimestre durant 2 trimestres",
  "> 1 000 €/an, une seule fois"],
 1,
 "Affection chronique : dépenses > 400 €/trimestre durant ≥ 8 trimestres consécutifs (effet : MAF facilité, seuil abaissé de 100 €).");

Q("orga",
 "Quel est le montant du forfait annuel du DMG versé au MG pour un patient standard ?",
 ["38 € (71 € si malade chronique de 30-85 ans)", "80 €", "150 €", "450 €"],
 0,
 "Forfait DMG : 38 € (71 € si malade chronique 30-85 ans). Le ~80 € correspond au forfait de suivi d'un trajet de soins ; 450 € au MAF statut social.");
// ========== "LAQUELLE EST FAUSSE" — PATIENT ÂGÉ ==========
Q("age",
 "Concernant la fragilité, laquelle est FAUSSE ?",
 ["C'est un processus réversible si repéré",
  "Elle se confond avec la dépendance",
  "Elle altère l'adaptation au stress (baisse des réserves)",
  "Elle est distincte de la polypathologie"],
 1,
 "FAUX : la fragilité est DISTINCTE de la dépendance (et de l'âge, et de la polypathologie). C'est un état de risque réversible.");

Q("age",
 "À propos des critères de Fried, laquelle est FAUSSE ?",
 ["La perte de poids involontaire est un critère",
  "La vitesse de marche ralentie est un critère",
  "La vitesse de marche accélérée est un critère",
  "La sédentarité est un critère"],
 2,
 "FAUX : c'est la vitesse de marche RALENTIE (pas accélérée). Les 5 critères : perte de poids, épuisement, marche ralentie, baisse de force, sédentarité.");

Q("age",
 "Concernant les états de fragilité (Fried), laquelle est FAUSSE ?",
 ["0 critère = robuste",
  "1-2 critères = pré-fragile",
  "≥ 3 critères = fragile",
  "5 critères = robuste"],
 3,
 "FAUX : plus le nombre de critères est élevé, plus le patient est fragile. 5 critères = très fragile (et non robuste).");

Q("age",
 "À propos du dépistage de la fragilité, laquelle est FAUSSE ?",
 ["Il est systématique dès 70 ans (hors maladie grave)",
  "Il peut être initié par tout soignant",
  "Il n'est fiable que s'il est réalisé par un médecin",
  "Il prédit chutes et institutionnalisation à 3 ans"],
 2,
 "FAUX (piège récurrent) : le dépistage n'est PAS réservé au médecin — tout soignant peut l'initier.");

Q("age",
 "Concernant les échelles gériatriques, laquelle est FAUSSE ?",
 ["Katz évalue l'autonomie (activités de la vie quotidienne)",
  "MNA évalue l'état nutritionnel",
  "MMSE évalue la cognition",
  "Finegan est une échelle gériatrique validée"],
 3,
 "FAUX : « Finegan » est un score de sevrage du NOUVEAU-NÉ (intrus). Échelles valides : Katz, MNA, MMSE, Tinetti, Timed Up & Go, GDS.");

Q("age",
 "À propos des seuils des tests, laquelle est FAUSSE ?",
 ["Le Timed Up & Go est normal en dessous de 14 s",
  "Un Tinetti < 20/28 indique un risque de chute accru",
  "Un trouble de la marche multiplie par 3 le risque de chute",
  "Le Timed Up & Go est normal en dessous de 30 s"],
 3,
 "FAUX : le Timed Up & Go est normal < 14 s (et non < 30 s) ; au-delà, le risque de chute augmente.");

Q("age",
 "Concernant la polymédication, laquelle est FAUSSE ?",
 ["Le seuil de vigilance est de 6 médicaments par jour",
  "Le nombre de médicaments est un facteur pronostique",
  "Start & Stopp est un outil de révision médicamenteuse",
  "« Maximum 6 médicaments par jour » est un outil validé de déprescription"],
 3,
 "FAUX : « max 6/jour » est un simple SEUIL, pas un outil. Les outils sont Start & Stopp, GheOP3S, la révision pluridisciplinaire.");

Q("age",
 "À propos des médicaments et interactions chez la personne âgée, laquelle est FAUSSE ?",
 ["Les benzodiazépines augmentent le risque de chute",
  "Le jus de pamplemousse inhibe le CYP3A4",
  "Les benzodiazépines diminuent le risque de chute",
  "Il faut surveiller l'alcool et les OTC non déclarés"],
 2,
 "FAUX : les benzodiazépines AUGMENTENT le risque de chute (sédation, troubles de l'équilibre).");

Q("age",
 "Concernant le PICT, laquelle est FAUSSE ?",
 ["Le PICT identifie le patient palliatif",
  "Il inclut la « question surprise » (décès dans 6-12 mois ?)",
  "Il combine indicateurs de fragilité et critère d'incurabilité",
  "Le PICT évalue l'état nutritionnel du patient"],
 3,
 "FAUX : le PICT n'évalue pas la nutrition (c'est le MNA). Il identifie le patient palliatif via 3 éléments (question surprise + fragilité + incurabilité).");

Q("age",
 "À propos de la coordination des soins, laquelle est FAUSSE ?",
 ["La coordinatrice (ASD) est la personne de référence",
  "L'outil SBAR structure la communication hôpital-domicile",
  "Les soins infirmiers démarrent souvent dès J+1 au retour à domicile",
  "L'horaire du lever et du coucher est l'élément prioritaire de l'évaluation"],
 3,
 "FAUX (piège classique) : l'horaire du lever/coucher n'est PAS prioritaire. Priorités : chutes, nutrition, isolement social, soutien aux aidants.");

// ========== "LAQUELLE EST FAUSSE" — DEMANDEURS D'ASILE & PRÉCARITÉ ==========
Q("asile",
 "Concernant les acteurs de la procédure d'asile, laquelle est FAUSSE ?",
 ["L'Office des étrangers enregistre la demande",
  "Le CGRA examine la demande et prend la décision",
  "FEDASIL organise l'accueil et l'aide matérielle",
  "L'Office des étrangers prend la décision finale sur la protection"],
 3,
 "FAUX : la décision revient au CGRA (recours = CCE). L'Office des étrangers ne fait qu'ENREGISTRER la demande.");

Q("asile",
 "À propos de l'Aide Médicale Urgente (AMU), laquelle est FAUSSE ?",
 ["Elle est octroyée par le CPAS",
  "Elle concerne les personnes en séjour irrégulier",
  "Elle couvre uniquement les urgences vitales",
  "Elle couvre aussi les soins préventifs et le suivi"],
 2,
 "FAUX : malgré son nom, l'AMU ne se limite PAS à l'urgence — elle couvre le curatif, le préventif et le suivi.");

Q("asile",
 "Concernant les conditions d'octroi de l'AMU, laquelle est FAUSSE ?",
 ["La territorialité (résider sur la commune)",
  "Une enquête sociale établissant l'indigence",
  "Un certificat médical d'AMU",
  "La possession d'un titre de séjour valide"],
 3,
 "FAUX : l'AMU vise justement les personnes SANS titre de séjour. Les 3 conditions sont territorialité, enquête sociale (indigence) et certificat médical.");

Q("asile",
 "À propos de la régularisation, laquelle est FAUSSE ?",
 ["Le 9ter concerne la raison médicale",
  "Le 9bis concerne la raison humanitaire",
  "Le 9ter concerne la raison humanitaire",
  "La régularisation est distincte de la procédure d'asile"],
 2,
 "FAUX : 9ter = raison MÉDICALE ; 9bis = raison humanitaire. La proposition inverse le 9ter.");

Q("asile",
 "Concernant la précarité, laquelle est FAUSSE ?",
 ["C'est l'absence d'une ou plusieurs sécurités (emploi, revenus, logement, liens)",
  "C'est une notion subjective et un processus",
  "Précarité et pauvreté sont synonymes",
  "« La précarité ne touche pas que les pauvres »"],
 2,
 "FAUX : la précarité n'est PAS la pauvreté (définie, elle, par une norme monétaire). C'est une notion subjective, un processus de précarisation.");

Q("asile",
 "À propos des parasitoses, laquelle est FAUSSE ?",
 ["Origine subsaharienne + symptômes digestifs → rechercher une éosinophilie",
  "La schistosomiase se traite par praziquantel",
  "La strongyloïdose se traite par ivermectine",
  "La schistosomiase se traite par ivermectine"],
 3,
 "FAUX : la schistosomiase → PRAZIQUANTEL. C'est la strongyloïdose qui se traite par ivermectine.");

Q("asile",
 "Concernant les pathologies infectieuses chez les demandeurs d'asile, laquelle est FAUSSE ?",
 ["La tuberculose fait l'objet d'un dépistage systématique (FARES)",
  "Pour le VIH : I = I (Indétectable = Intransmissible)",
  "La (re)vaccination RRO contre la rougeole est systématique",
  "Le paludisme fait l'objet d'un dépistage systématique de tous les arrivants"],
 3,
 "FAUX : pas de dépistage systématique du paludisme ; en cas de suspicion → goutte épaisse (gold standard) ou test rapide.");

Q("asile",
 "Face à un patient présentant un possible PTSD, laquelle est FAUSSE ?",
 ["On ne demande pas de détails pour éviter une réexposition",
  "Les lésions physiques de torture peuvent perdurer des années",
  "Il faut exiger un récit détaillé et chronologique des faits",
  "La prise en charge est pluridisciplinaire"],
 2,
 "FAUX : on NE force PAS le récit (risque de réexposition traumatique) ; on laisse la personne dire ce qu'elle veut, à son rythme.");

Q("asile",
 "À propos du rapport médical circonstancié (Constats), laquelle est FAUSSE ?",
 ["Il établit la compatibilité entre le récit et les séquelles",
  "Il suit le Protocole d'Istanbul",
  "Il est rédigé au conditionnel",
  "Il prouve la véracité du récit du demandeur"],
 3,
 "FAUX : le rapport établit un degré de COMPATIBILITÉ (élément de preuve), il ne « prouve » pas la véracité ; les incohérences ≠ mensonge (la torture altère la mémoire).");

Q("asile",
 "Concernant les MGF et la démédicalisation, laquelle est FAUSSE ?",
 ["Un certificat de non-excision peut fonder une reconnaissance comme réfugiée",
  "Ce certificat est à ré-attester tous les 3 ans",
  "Démédicaliser des diagnostics posés au pays peut être une mission essentielle",
  "Le certificat de non-excision est délivré une seule fois, définitivement"],
 3,
 "FAUX : le certificat de non-excision est à RÉ-attester tous les 3 ans (médecins formés par le GAMS).");

// ========== "LAQUELLE EST FAUSSE" — TRIO (MG / TRAVAIL / CONSEIL) ==========
Q("trio",
 "Concernant les trois médecins, laquelle est FAUSSE ?",
 ["Le médecin du travail évalue l'aptitude",
  "Le médecin conseil évalue l'incapacité",
  "Le médecin de contrôle vérifie l'absentéisme",
  "Le médecin du travail contrôle l'absentéisme"],
 3,
 "FAUX : le contrôle de l'absentéisme est le rôle du médecin de CONTRÔLE (payé par l'employeur), pas du médecin du travail (prévention/aptitude).");

Q("trio",
 "À propos de l'aptitude et du cadre légal, laquelle est FAUSSE ?",
 ["L'aptitude vérifie que les risques du travail ne majorent pas la santé",
  "Et que l'état de santé ne majore pas les risques (pour lui ou autrui)",
  "Le cadre légal est le Code du Bien-Être au Travail (1996)",
  "Le médecin du travail prodigue des soins curatifs"],
 3,
 "FAUX : le médecin du travail fait de la PRÉVENTION — il ne prodigue pas de soins curatifs.");

Q("trio",
 "Concernant la visite de reprise, laquelle est FAUSSE ?",
 ["Elle est obligatoire si l'incapacité a duré ≥ 4 semaines",
  "Elle a lieu dans les 10 jours ouvrables suivant la reprise",
  "La visite de pré-reprise est facultative, à l'initiative du travailleur",
  "La visite de reprise est obligatoire dès une semaine d'arrêt"],
 3,
 "FAUX : la visite de reprise n'est obligatoire que si l'incapacité a duré ≥ 4 SEMAINES (et dans les 10 jours ouvrables de la reprise).");

Q("trio",
 "À propos des délais de la réintégration, laquelle est FAUSSE ?",
 ["Le médecin du travail dispose de 49 jours pour sa décision",
  "L'employeur répond en 63 jours en cas d'inaptitude temporaire",
  "L'évaluation de l'inaptitude définitive est possible après 6 mois d'ITT",
  "Le médecin du travail dispose de 6 mois pour sa décision"],
 3,
 "FAUX : le médecin du travail dispose de 49 JOURS (pas 6 mois). L'employeur, lui, répond en 63 jours (temporaire) ou 6 mois (définitive).");

Q("trio",
 "Concernant la protection de la maternité, laquelle est FAUSSE ?",
 ["En cas de risque : mutation de poste ou écartement",
  "L'indemnité est versée par la mutuelle (~78 % du brut)",
  "L'écartement pour allaitement est possible jusqu'aux 5 mois de l'enfant",
  "La travailleuse reçoit un certificat d'incapacité de travail"],
 3,
 "FAUX : la maternité donne lieu à une ATTESTATION (mutation/écartement), pas à un certificat d'incapacité de travail.");

Q("trio",
 "À propos de la plateforme TRIO, laquelle est FAUSSE ?",
 ["Elle relie médecin traitant, médecin conseil et médecin du travail",
  "Elle requiert l'accord préalable du patient",
  "Le médecin du travail a un lien thérapeutique avec le patient",
  "Hors TRIO, le médecin du travail n'accède pas au réseau de santé"],
 2,
 "FAUX : le médecin du travail n'a PAS de lien thérapeutique → pas d'accès direct au réseau de santé (sauf via TRIO, avec consentement).");

Q("trio",
 "Concernant les voies de recours, laquelle est FAUSSE ?",
 ["Médecin du travail → Direction régionale du Contrôle du Bien-Être",
  "Médecin conseil → Tribunal du travail",
  "Médecin de contrôle → médecin-arbitre",
  "Médecin du travail → médecin-arbitre"],
 3,
 "FAUX : le recours contre le médecin du travail va à la Direction régionale du Contrôle du Bien-Être. Le médecin-arbitre concerne le médecin de CONTRÔLE.");

Q("trio",
 "À propos de l'embauche, de la formation et du cadre d'exercice, laquelle est FAUSSE ?",
 ["Si inapte à l'embauche (poste à risque) → pas de recours",
  "La formation du médecin du travail dure 4 ans (spécialisation)",
  "Le médecin du travail exerce en SEPP ou SIPP",
  "Le médecin du travail est employé et payé par la mutuelle"],
 3,
 "FAUX : le médecin du travail relève d'un SEPP (externe) ou SIPP (interne), pas de la mutuelle (qui emploie le médecin conseil).");

Q("trio",
 "Concernant le secret et les certificats, laquelle est FAUSSE ?",
 ["Le certificat à l'employeur ne porte jamais de diagnostic",
  "Le médecin conseil est tenu au secret vis-à-vis de l'employeur",
  "Le médecin conseil peut proposer la reprise et contacter le médecin du travail",
  "Le certificat à l'employeur comporte le diagnostic"],
 3,
 "FAUX : le certificat à l'employeur ne comporte JAMAIS de diagnostic (secret médical).");

Q("trio",
 "À propos du risque professionnel et des sanctions, laquelle est FAUSSE ?",
 ["Risque = Danger × Exposition → Dommage",
  "La prévention agit prioritairement sur l'exposition",
  "L'absence aux rendez-vous de réintégration entraîne une sanction sur les indemnités",
  "Le médecin du travail évalue l'état d'incapacité pour le compte de la mutuelle"],
 3,
 "FAUX : évaluer l'incapacité pour la mutuelle est le rôle du médecin CONSEIL, pas du médecin du travail (qui évalue l'aptitude).");
// ========== LISTES (intrus / fait partie) — ASSUÉTUDES ==========
Q("assuetudes",
 "La qualité de l'accompagnement dépend de plusieurs facteurs. Lequel NE figure PAS parmi eux ?",
 ["La qualité de la relation",
  "Les facteurs extra-thérapeutiques",
  "Les attentes et motivations du patient",
  "Le coût du traitement de substitution"],
 3,
 "Les 4 déterminants : qualité de la relation, facteurs extra-thérapeutiques, attentes/motivations du patient, technique utilisée. Le coût n'en fait pas partie.");

Q("assuetudes",
 "Parmi ces attitudes, laquelle N'EST PAS une attitude fondamentale de Carl Rogers ?",
 ["L'empathie", "Le regard positif inconditionnel", "La congruence", "La neutralité distante"],
 3,
 "Rogers : empathie, regard positif inconditionnel, congruence. La « neutralité distante » est l'intrus (elle s'oppose même à l'empathie).");

Q("assuetudes",
 "Lequel de ces éléments est le MOINS important pour la relation thérapeutique (donc l'intrus parmi les leviers du lien) ?",
 ["Les mots utilisés", "L'entretien motivationnel", "Le triangle d'Olivenstein", "Évaluer précisément les doses consommées"],
 3,
 "Évaluer les doses est le moins important pour le LIEN (intrus). Les mots, l'entretien motivationnel, Olivenstein et Di Clemente sont les leviers de la relation.");

Q("assuetudes",
 "Laquelle de ces propositions EST l'une des 4 étapes de l'intervention brève (OMS) ?",
 ["Restituer les résultats", "Hospitaliser le patient", "Poser un diagnostic psychiatrique", "Sevrer immédiatement"],
 0,
 "Les 4 étapes : Restituer les résultats, Informer, Conseiller, Encourager. Les 3 autres n'en font pas partie.");

Q("assuetudes",
 "Parmi ces conseils de réduction des risques, lequel est FAUX (l'intrus) ?",
 ["Utiliser du matériel neuf et propre",
  "Tester de petites quantités",
  "Consommer à jeun pour mieux ressentir l'effet",
  "Rester accompagné et prévoir le 112"],
 2,
 "Intrus : il faut au contraire MANGER et BOIRE avant/pendant (ne pas consommer à jeun). Les autres conseils sont corrects.");

Q("assuetudes",
 "Lequel de ces éléments NE fait PAS partie du « cadre de travail » de l'accompagnement ?",
 ["Des règles protégeant patient et soignant",
  "Un accord sur le mode de délivrance du traitement",
  "Un suivi psycho-social en parallèle",
  "Une analyse d'urines à chaque consultation"],
 3,
 "Le cadre = règles, accord sur la délivrance, suivi psycho-social, objectifs réalistes, secret. L'analyse d'urines systématique est l'intrus (et nuit même au lien).");

Q("assuetudes",
 "Lequel correspond à l'un des 3 styles décrits dans l'entretien motivationnel ?",
 ["Confronter", "Guider", "Persuader", "Interpréter"],
 1,
 "Les 3 styles : diriger, GUIDER, suivre. L'entretien motivationnel privilégie « guider ». Confronter/persuader/interpréter ne sont pas ces styles.");

// ========== LISTES (intrus / fait partie) — PHARMACIEN ==========
Q("pharmacien",
 "Lequel NE fait PAS partie des étapes de la démarche du pharmacien (QUIDAM – ANALYSE – DÉCISION – INFORMATION) ?",
 ["QUIDAM (identification, vulnérabilité)",
  "ANALYSE (validation de la prescription)",
  "FACTURATION (tiers payant)",
  "INFORMATION (objectif, modalités, effets indésirables)"],
 2,
 "La démarche : QUIDAM, ANALYSE, DÉCISION, INFORMATION. La facturation n'en est pas une étape (intrus).");

Q("pharmacien",
 "Lequel de ces éléments N'EST PAS couvert par le Dossier Pharmaceutique Partagé (DPP) ?",
 ["Les médicaments prescrits ou non",
  "Les compléments alimentaires encodés au nom du patient",
  "Les préparations magistrales",
  "Les honoraires du médecin traitant"],
 3,
 "Le DPP couvre médicaments (prescrits ou non), compléments encodés et magistrales. Les honoraires (comme dans le SUMEHR) n'y figurent pas.");

Q("pharmacien",
 "Lequel est un service de soins pharmaceutiques structuré proposé par le pharmacien ?",
 ["L'entretien Bon Usage du Médicament (BUM) asthme/BPCO",
  "La pose d'un diagnostic médical",
  "La prescription d'une IRM",
  "La rédaction d'un certificat d'incapacité"],
 0,
 "Services du pharmacien : pharmacien de référence, BUM (asthme/BPCO), bilan de médication, vaccination, sevrage benzo, substitution. Diagnostic/IRM/certificat relèvent du médecin.");

Q("pharmacien",
 "Parmi les facteurs de risque d'allongement du QT, lequel est l'INTRUS ?",
 ["Sexe féminin et âge > 65 ans", "Hypokaliémie", "Bradycardie", "Hyperthyroïdie"],
 3,
 "Intrus : c'est l'HYPOthyroïdie (pas l'hyper) qui est un facteur de risque, avec femme/> 65 ans/hypoK-Mg-Ca/bradycardie/QT long.");

Q("pharmacien",
 "Lors de l'étape ANALYSE, lequel de ces points N'EST PAS vérifié ?",
 ["L'indication et les contre-indications",
  "La posologie et les interactions",
  "Les doublons et la cascade médicamenteuse",
  "Le prix public du médicament"],
 3,
 "L'ANALYSE valide : problème médical, indication, CI, posologie, durée, interactions, cascade, doublons. Le prix public n'est pas un critère de validation pharmaceutique.");

Q("pharmacien",
 "Qui N'EST PAS habilité à notifier un effet indésirable en pharmacovigilance ?",
 ["Le médecin", "Le pharmacien", "Le patient", "L'assureur privé du patient"],
 3,
 "Peuvent notifier : médecin, pharmacien, infirmier, patient. L'assureur privé est l'intrus.");

Q("pharmacien",
 "Lequel de ces médicaments figure sur la « liste 1 » (risque connu d'allongement du QT) ?",
 ["La clarithromycine", "L'amoxicilline", "Le paracétamol", "Le ramipril"],
 0,
 "Liste 1 (crediblemeds) : amiodarone, azithro/clarithromycine, ciprofloxacine, dompéridone, (es)citalopram, fluconazole, hydroxychloroquine, méthadone, sotalol... La clarithromycine en fait partie.");

// ========== LISTES (intrus / fait partie) — RECHERCHE ==========
Q("recherche",
 "Lequel NE fait PAS partie des 6 compétences fondamentales du médecin généraliste (WONCA) ?",
 ["La gestion des soins de santé primaires",
  "L'aptitude à la résolution de problèmes",
  "La recherche fondamentale en laboratoire",
  "L'orientation communautaire"],
 2,
 "Les 6 compétences : soins primaires, centrés personne, résolution de problèmes, approche globale, orientation communautaire, modèle holistique. La recherche fondamentale en labo est l'intrus.");

Q("recherche",
 "Laquelle NE fait PAS partie des 3 dimensions fondamentales de la médecine générale ?",
 ["Contextuelle", "Comportementale", "Scientifique", "Économique"],
 3,
 "Les 3 dimensions : contextuelle, comportementale, scientifique. La dimension « économique » est l'intrus.");

Q("recherche",
 "Laquelle est une approche épistémologique citée dans le cours ?",
 ["L'approche positiviste", "L'approche déductiviste", "L'approche normative", "L'approche pragmatiste"],
 0,
 "Approches : empirique, positiviste (→ quantitatif), interprétative (→ qualitatif), constructiviste. Le positivisme en fait partie.");

Q("recherche",
 "Parmi les critères d'un dépistage utile, lequel est l'INTRUS ?",
 ["Maladie fréquente et grave",
  "Traitement d'efficacité démontrée disponible",
  "Test acceptable et fiable",
  "Maladie rare pour limiter les coûts"],
 3,
 "Intrus : un dépistage vise une maladie FRÉQUENTE et grave (pas rare). Autres critères : traitement efficace, moyens disponibles, coût acceptable, test fiable, phase latente détectable.");

Q("recherche",
 "Laquelle de ces méthodes est une étude QUALITATIVE ?",
 ["Le focus group", "L'étude de cohorte", "L'essai clinique randomisé", "L'étude cas-témoins"],
 0,
 "Qualitatives : observation, analyse documentaire, entretiens, focus group. Cohorte, ECR et cas-témoins sont quantitatives.");

Q("recherche",
 "Quelle association médecin–apport est CORRECTE ?",
 ["Archie Cochrane → père de l'EBM et essai randomisé",
  "Robert Koch → anémie falciforme",
  "James Herrick → nature du zona",
  "Edgar Hope-Simpson → microbiologie clinique"],
 0,
 "Cochrane = EBM/essai randomisé. Koch = microbiologie ; Herrick = anémie falciforme ; Hope-Simpson = nature du zona (cohorte 16 ans). Les 3 autres sont mal attribuées.");

Q("recherche",
 "Lequel NE fait PAS partie de la méthode expérimentale (hypothético-déductive) ?",
 ["L'observation", "L'hypothèse", "Le financement de l'étude", "La conclusion"],
 2,
 "Les 8 étapes : observation, problème, hypothèse, conséquence, expérience, résultat, interprétation, conclusion. Le financement n'en fait pas partie.");
// ========== LISTES (intrus / fait partie) — SPORT ==========
Q("sport",
 "Parmi ces contre-indications à l'activité physique chez le patient cancéreux, laquelle est l'INTRUS ?",
 ["Neutropénie sévère < 500/mm³",
  "Anémie (Hb < 9,5 g/dl)",
  "Thrombopénie < 20 000/mm³",
  "Hypertension artérielle légère contrôlée"],
 3,
 "CI : neutropénie < 500, Hb < 9,5, plaquettes < 20 000, fièvre > 38 °C, métastases osseuses. Une HTA légère contrôlée n'est pas une CI (intrus).");

Q("sport",
 "Lequel NE fait PAS partie des symptômes d'alarme cardiaques à rechercher chez le sportif ?",
 ["Douleur thoracique à l'effort",
  "Syncope ou malaise",
  "Palpitations",
  "Courbatures après l'effort"],
 3,
 "Symptômes d'alarme : douleur thoracique d'effort, palpitations, malaise/syncope, essoufflement anormal, rythme anormal. Les courbatures sont banales (intrus).");

Q("sport",
 "À quelle classe de substances dopantes appartient l'acétazolamide (Diamox) ?",
 ["S5 — diurétiques et agents masquants",
  "S3 — bêta-2 agonistes",
  "S9 — glucocorticoïdes",
  "S6 — stimulants"],
 0,
 "Acétazolamide = S5 (diurétiques/agents masquants), interdit en permanence. Salbutamol = S3 ; corticoïdes = S9 ; amphétamines = S6.");

Q("sport",
 "Laquelle de ces substances est interdite EN PERMANENCE (et hors compétition) ?",
 ["Les anabolisants (S1)",
  "Les stimulants (S6)",
  "Les narcotiques (S7)",
  "Les cannabinoïdes (S8)"],
 0,
 "Interdits en permanence : S1 anabolisants, S2 hormones, S3 bêta-2, S4 modulateurs, S5 diurétiques. S6/S7/S8/S9 sont interdits seulement EN COMPÉTITION.");

Q("sport",
 "Parmi les causes de dyspnée d'effort chez l'adolescent, laquelle est l'INTRUS ?",
 ["Le déconditionnement", "L'anxiété", "L'asthme d'effort", "La BPCO"],
 3,
 "Causes chez l'ado (par fréquence) : déconditionnement, anxiété, asthme d'effort, obstruction laryngée induite par l'effort. La BPCO (pathologie du fumeur âgé) est l'intrus.");

Q("sport",
 "Quelle association pathologie–description est CORRECTE ?",
 ["Syndrome de l'essuie-glace → douleur de la face latérale du genou chez le coureur",
  "Syndrome fémoropatellaire → douleur latérale du genou",
  "Osgood-Schlatter → pathologie de l'adulte de plus de 50 ans",
  "Entorse de cheville → se traite par immobilisation prolongée"],
 0,
 "Essuie-glace = douleur LATÉRALE (coureur). Fémoropatellaire = douleur ANTÉRIEURE ; Osgood-Schlatter = enfant sportif ; entorse = rééducation proprioceptive (pas immobilisation prolongée).");

Q("sport",
 "Parmi les règles de l'activité physique chez le diabétique, laquelle est l'INTRUS (fausse) ?",
 ["Programmer l'activité",
  "Augmenter l'insuline couvrant la période d'effort",
  "Autosurveiller la glycémie pendant et après l'effort",
  "Prendre ≥ 15 g de glucides si la glycémie est basse avant l'effort"],
 1,
 "Intrus : on DIMINUE l'insuline (50-75 %) couvrant la période d'effort (pas l'augmenter). Les autres règles sont correctes.");

// ========== LISTES (intrus / fait partie) — ONE HEALTH ==========
Q("onehealth",
 "Décider d'une prescription, c'est mettre en balance plusieurs enjeux. Lequel NE fait PAS partie de cette liste ?",
 ["Le coût et les préférences du patient",
  "L'empreinte carbone et l'écotoxicité",
  "Le grade de recommandation et les interactions",
  "La marque commerciale préférée du prescripteur"],
 3,
 "Enjeux d'une prescription : coût, préférences, empreinte carbone, écotoxicité, éthique, grade de reco, interactions, alternatives (médicamenteuses ou non). La « marque préférée » est l'intrus.");

Q("onehealth",
 "Parmi les classes de médicaments les plus à risque pour l'environnement, laquelle est l'INTRUS ?",
 ["Les hormones", "Les antibiotiques", "Les anticancéreux", "Les solutés de réhydratation"],
 3,
 "Classes à risque : hormones, antalgiques, antibiotiques, anticancéreux, antidépresseurs. Les solutés de réhydratation sont l'intrus.");

Q("onehealth",
 "Lequel correspond à la PRIORITÉ n°1 parmi les « 4R » de la santé durable ?",
 ["Réduire", "Recycler", "Remplacer", "Réutiliser"],
 0,
 "Ordre de priorité : RÉDUIRE (besoins/demandes/réponses) > Remplacer > Recycler (et Repenser).");

Q("onehealth",
 "Lequel NE fait PAS partie des « 3 P » du développement durable ?",
 ["People", "Planet", "Profit", "Power"],
 3,
 "Les 3 P : People, Planet, Profit. « Power » est l'intrus.");

Q("onehealth",
 "Lequel est l'un des concepts « emboîtés » de la santé environnementale ?",
 ["La santé planétaire", "La santé sélective", "La santé verticale", "La santé résiduaire"],
 0,
 "Concepts emboîtés : One Health, santé planétaire, santé globale, santé publique. Les 3 autres sont inventés.");

Q("onehealth",
 "Lequel est un véritable dispositif d'inhalation cité dans le cours ?",
 ["Le SMI (soft mist inhaler)", "Le NMI", "Le pDPI", "Le SDI"],
 0,
 "Dispositifs : pMDI (aérosols-doseurs), DPI (poudre sèche), SMI (soft mist). Les 3 autres n'existent pas.");

Q("onehealth",
 "Lequel est un exemple typique de « discours de l'inaction » ?",
 ["« On est là pour soigner, pas pour s'occuper du climat »",
  "« La déprescription rejoint la prévention quaternaire »",
  "« La décision partagée respecte le patient »",
  "« Le score PBT évalue l'écotoxicité »"],
 0,
 "Discours de l'inaction : « on est là pour soigner », « on manque de temps/d'argent », « on a toujours fait comme ça »… Les 3 autres sont des affirmations justes du cours.");

// ========== LISTES (intrus / fait partie) — ORGANISATION DES SOINS ==========
Q("orga",
 "Lequel NE fait PAS partie des 7 branches de la sécurité sociale ?",
 ["Les pensions", "Le chômage", "Les soins de santé et l'invalidité", "L'aide médicale urgente (AMU)"],
 3,
 "Les 7 branches : pensions, chômage, accidents du travail, maladies prof., prestations familiales, soins de santé & invalidité, vacances annuelles. L'AMU est une aide sociale (CPAS), pas une branche.");

Q("orga",
 "Laquelle de ces prestations N'EST PAS une aide sociale (régime résiduaire) ?",
 ["Le RIS", "La GRAPA", "L'allocation de chômage", "Les allocations aux personnes handicapées"],
 2,
 "Aides sociales : RIS, GRAPA, allocations handicapés, prestations familiales garanties. L'allocation de chômage est une branche (ONEM).");

Q("orga",
 "Lequel NE fait PAS partie des services/missions de l'INAMI ?",
 ["Les soins de santé (remboursements)",
  "Les indemnités (incapacité, invalidité)",
  "L'évaluation et le contrôle médicaux (SECM)",
  "Le paiement des pensions de retraite"],
 3,
 "Services INAMI : soins de santé, indemnités, SECM, contrôle administratif, fonds des accidents médicaux, support. Les pensions relèvent du SFP (intrus).");

Q("orga",
 "Laquelle N'EST PAS une mission des mutuelles (organismes assureurs) ?",
 ["Rembourser les soins et verser les indemnités",
  "Informer et accompagner les affiliés",
  "Collecter les cotisations sociales des travailleurs",
  "Représenter les patients"],
 2,
 "La collecte des cotisations revient à l'ONSS (intrus). La mutuelle rembourse, indemnise, informe/accompagne, propose une complémentaire, représente les patients.");

Q("orga",
 "Quel médicament correspond à la catégorie A (remboursement total, importance vitale) ?",
 ["L'insuline", "Un somnifère", "Un contraceptif (Cx)", "Un antihypertenseur (B)"],
 0,
 "Catégorie A = total (insuline). Somnifères = D (aucun remboursement) ; contraceptifs = Cx ; antihypertenseurs ≈ B (~75 %).");

Q("orga",
 "Lequel est bénéficiaire de l'intervention majorée (BIM) D'OFFICE, et donc l'intrus parmi les « sur demande » ?",
 ["Le bénéficiaire du RIS",
  "Le chômeur (sous condition de revenus)",
  "Le pensionné (sous condition de revenus)",
  "La famille monoparentale (sous condition de revenus)"],
 0,
 "BIM d'office : RIS, GRAPA, revenu personne handicapée, MENA, orphelins. Chômeurs/pensionnés/familles monoparentales = BIM SUR DEMANDE (selon revenus).");

Q("orga",
 "Lequel NE fait PAS partie des 4 types de Maximum à Facturer (MAF) ?",
 ["MAF revenus", "MAF statut social (BIM)", "MAF enfants (< 19 ans)", "MAF hospitalisation longue durée"],
 3,
 "Les 4 MAF : revenus, statut social (450 €), enfants < 19 ans (650 €), maladie chronique (−100 €). « MAF hospitalisation » est l'intrus.");

Q("orga",
 "Lequel correspond à l'un des « 6 C » de Starfield (soins de 1re ligne) ?",
 ["La Continuité", "La Concurrence", "La Capitalisation", "Le Cloisonnement"],
 0,
 "6 C : premier Contact, Centrés personne, Continuité, Complets, Communauté, Coordination. Continuité en fait partie ; les 3 autres sont des intrus.");

Q("esante",
 "Qui A accès au dossier de santé partagé du patient (et constitue donc l'exception parmi ces 4) ?",
 ["Le médecin généraliste traitant",
  "Le médecin du travail",
  "Le médecin conseil de la mutuelle",
  "Le médecin d'une assurance privée"],
 0,
 "Seul le MG traitant (lien thérapeutique) a accès. Médecin du travail/conseil/assurance/contrôle n'ont PAS de lien thérapeutique → pas d'accès (sauf TRIO avec consentement).");

Q("orga",
 "Lequel NE fait PAS partie des 4 sources de financement des hôpitaux ?",
 ["Le Budget des Moyens Financiers (BMF)",
  "Les honoraires médicaux",
  "Les produits pharmaceutiques",
  "Les dons privés et le mécénat"],
 3,
 "Financement hospitalier : BMF (~36 %), honoraires (~41 %), produits pharma (~17 %), forfaits/conventions INAMI (~4 %). Les dons privés ne sont pas une source structurelle (intrus).");
// ========== LISTES (intrus / fait partie) — PATIENT ÂGÉ ==========
Q("age",
 "Parmi les critères de Fried, lequel est l'INTRUS ?",
 ["Perte de poids involontaire", "Épuisement ressenti", "Désorientation temporo-spatiale", "Baisse de la force musculaire"],
 2,
 "Critères de Fried : perte de poids, épuisement, vitesse de marche ralentie, baisse de force, sédentarité. La désorientation (cognition) n'en fait pas partie (intrus).");

Q("age",
 "Laquelle de ces échelles est l'INTRUS (sans rapport avec l'évaluation gériatrique) ?",
 ["Katz", "Tinetti", "Finegan", "MNA"],
 2,
 "Finegan = score de sevrage du nouveau-né (intrus). Valides : Katz (autonomie), MNA (nutrition), MMSE (cognition), Tinetti, Timed Up & Go, GDS.");

Q("age",
 "Parmi les acteurs intervenant à domicile autour de la personne âgée, lequel est l'INTRUS ?",
 ["L'aide familiale", "L'ergothérapeute", "Le médecin du travail", "L'assistant social"],
 2,
 "À domicile : aide familiale, aide ménagère, ergothérapeute, assistant social, livraison de repas, aidant proche. Le médecin du travail (sphère professionnelle) est l'intrus.");

Q("age",
 "Lequel NE fait PAS partie des 3 composantes du PICT (identification du patient palliatif) ?",
 ["La « question surprise » (décès dans 6-12 mois ?)",
  "Plus de 2 indicateurs de fragilité",
  "Au moins un critère d'incurabilité",
  "Un score MMSE inférieur à 18"],
 3,
 "PICT = question surprise + > 2 indicateurs de fragilité + ≥ 1 critère d'incurabilité. Le MMSE (cognition) n'en fait pas partie.");

Q("age",
 "Dans l'évaluation de la personne âgée, lequel N'EST PAS un élément prioritaire (l'intrus) ?",
 ["La prévention des chutes", "L'état nutritionnel", "L'horaire du lever et du coucher", "L'isolement social"],
 2,
 "Priorités : chutes, nutrition, isolement social, soutien aux aidants. L'horaire du lever/coucher est l'intrus (piège classique).");

Q("age",
 "Quelle échelle évalue la NUTRITION chez la personne âgée ?",
 ["Le MNA", "Le MMSE", "La Tinetti", "Le Timed Up & Go"],
 0,
 "MNA (Mini Nutritional Assessment) = nutrition. MMSE = cognition ; Tinetti/TUG = équilibre/marche.");

Q("age",
 "Lequel est un véritable outil de révision/déprescription chez la personne âgée polymédiquée ?",
 ["START & STOPP", "Le score de Glasgow", "La règle des 6 médicaments maximum", "L'échelle de Tinetti"],
 0,
 "Outils : START & STOPP, GheOP3S, révision pluridisciplinaire. « Max 6/jour » n'est pas un outil ; Glasgow (conscience) et Tinetti (équilibre) sont hors sujet.");

// ========== LISTES (intrus / fait partie) — DEMANDEURS D'ASILE ==========
Q("asile",
 "Quel organisme correspond à l'ENREGISTREMENT de la demande de protection internationale ?",
 ["L'Office des étrangers", "Le CGRA", "Le CCE", "FEDASIL"],
 0,
 "Office des étrangers = enregistrement. CGRA = examen/décision ; CCE = recours ; FEDASIL = accueil.");

Q("asile",
 "Lequel NE fait PAS partie des 3 conditions d'octroi de l'AMU ?",
 ["La territorialité (résider sur la commune)",
  "Une enquête sociale établissant l'indigence",
  "Un certificat médical d'AMU",
  "L'inscription préalable à une mutuelle"],
 3,
 "Les 3 conditions : territorialité, enquête sociale (indigence), certificat médical. L'inscription à une mutuelle est l'intrus (l'AMU vise justement les personnes sans couverture).");

Q("asile",
 "Parmi les composantes de l'aide matérielle (loi Accueil 2017), laquelle est l'INTRUS ?",
 ["L'hébergement et les repas",
  "L'accompagnement social, médical et psychologique",
  "L'interprétariat et la scolarité",
  "Une allocation de chômage"],
 3,
 "Aide matérielle : hébergement, repas, habillement, accompagnement, aide juridique, interprétariat, scolarité, allocations, droit au travail après 4 mois. L'allocation de chômage est l'intrus.");

Q("asile",
 "Quelle pathologie fait l'objet d'un dépistage SYSTÉMATIQUE chez tous les demandeurs d'asile ?",
 ["La tuberculose (FARES)", "Le paludisme", "La schistosomiase", "La strongyloïdose"],
 0,
 "TB = dépistage systématique (FARES) + (re)vaccination RRO. Paludisme : pas de dépistage systématique ; parasitoses : selon l'origine/l'éosinophilie.");

Q("asile",
 "Quelle association parasitose–traitement est CORRECTE ?",
 ["Schistosomiase → praziquantel",
  "Schistosomiase → ivermectine",
  "Strongyloïdose → metformine",
  "Strongyloïdose → praziquantel"],
 0,
 "Schistosomiase → praziquantel ; strongyloïdose → ivermectine. Les autres associations sont fausses.");

Q("asile",
 "Lequel NE fait PAS partie des signes évocateurs d'un PTSD ?",
 ["Reviviscences et hypervigilance",
  "Évitement et troubles du sommeil",
  "Plaintes psychosomatiques et irritabilité",
  "Hypersociabilité et euphorie persistante"],
 3,
 "PTSD : reviviscences, hypervigilance, évitement, troubles du sommeil/alimentation, déréalisation, irritabilité, plaintes psychosomatiques. L'hypersociabilité euphorique est l'intrus.");

Q("asile",
 "Quelle régularisation correspond à la raison MÉDICALE ?",
 ["Le 9ter", "Le 9bis", "Le statut de réfugié", "La protection subsidiaire"],
 0,
 "9ter = raison médicale ; 9bis = raison humanitaire. Le statut de réfugié et la protection subsidiaire relèvent de la procédure d'asile (CGRA).");

// ========== LISTES (intrus / fait partie) — TRIO ==========
Q("trio",
 "Lequel NE fait PAS partie des examens de la médecine du travail ?",
 ["L'examen d'embauche", "La visite de reprise", "La visite de pré-reprise", "La visite de complaisance"],
 3,
 "Examens : embauche, périodique, reprise, pré-reprise, consultation spontanée. La « visite de complaisance » n'existe pas (intrus).");

Q("trio",
 "Lequel NE fait PAS partie des rôles du médecin du travail ?",
 ["L'analyse des risques professionnels",
  "La surveillance de la santé et le poste adapté",
  "Le contrôle de l'absentéisme",
  "La participation au CPPT"],
 2,
 "Le contrôle de l'absentéisme est le rôle du médecin de CONTRÔLE (intrus). Le médecin du travail fait de la prévention (risques, surveillance, poste adapté, CPPT).");

Q("trio",
 "Quelle association médecin–mission est CORRECTE ?",
 ["Médecin du travail → aptitude",
  "Médecin conseil → absentéisme",
  "Médecin de contrôle → incapacité (mutuelle)",
  "Médecin du travail → soins curatifs"],
 0,
 "Médecin du travail = aptitude ; médecin conseil = incapacité (mutuelle) ; médecin de contrôle = absentéisme. Les 3 autres associations sont fausses.");

Q("trio",
 "Quelle association recours–médecin est CORRECTE ?",
 ["Médecin du travail → Direction régionale du Contrôle du Bien-Être",
  "Médecin conseil → médecin-arbitre",
  "Médecin de contrôle → Tribunal du travail",
  "Médecin du travail → médecin-arbitre"],
 0,
 "Recours : médecin du travail → Direction régionale du Contrôle du Bien-Être ; médecin conseil → Tribunal du travail ; médecin de contrôle → médecin-arbitre.");

Q("trio",
 "Parmi les domaines des conseillers en prévention, lequel est l'INTRUS ?",
 ["L'ergonomie", "Les aspects psychosociaux", "La sécurité et l'hygiène", "La facturation des soins"],
 3,
 "Conseillers en prévention : ergonomie, psychosocial, sécurité, hygiène. La facturation des soins est l'intrus.");

Q("trio",
 "Concernant les délais de la réintégration, laquelle est CORRECTE ?",
 ["Le médecin du travail dispose de 49 jours pour sa décision",
  "Le médecin du travail dispose de 10 jours",
  "L'employeur répond en 49 jours",
  "L'évaluation de l'inaptitude définitive est possible dès 49 jours"],
 0,
 "Médecin du travail = 49 jours. L'employeur répond en 63 jours (temporaire) ou 6 mois (définitive) ; l'EID est possible après 6 mois d'ITT.");

Q("trio",
 "Dans quel cadre le médecin du travail exerce-t-il ?",
 ["Un SEPP (externe) ou un SIPP (interne)",
  "Un cabinet de mutuelle",
  "Le service du médecin-arbitre",
  "Un service hospitalier de soins"],
 0,
 "Le médecin du travail exerce en SEPP (service externe) ou SIPP (service interne) de prévention et de protection au travail.");
// ========== e-SANTÉ — MISES EN SITUATION (cas pratiques) ==========
Q("esante",
 "En consultation, vous recevez un patient que vous n'avez jamais vu. Vous voulez vérifier s'il est en ordre de mutuelle et bénéficiaire de l'intervention majorée. Quel outil utilisez-vous ?",
 ["Recip-e", "MyCareNet", "Le SUMEHR", "Le hub régional (Vitalink)"],
 1,
 "MyCareNet = lien avec les mutuelles : assurabilité (BIM/AO), DMG, chapitre IV, tiers payant. Ni Recip-e (prescription), ni le SUMEHR (résumé clinique), ni le hub (documents partagés).");

Q("esante",
 "Vous prescrivez un traitement à une patiente qui ira le chercher dans la pharmacie de SON choix. Quel système gère cette prescription ?",
 ["eHealthBox", "Recip-e", "MyCareNet", "Mult-eMediatt"],
 1,
 "Recip-e : prescription électronique, message NON adressé, crypté via eHealth, récupéré par la pharmacie choisie par le patient. Elle n'est pas envoyée à une officine précise.");

Q("esante",
 "Après 14 jours d'incapacité, vous devez transmettre le certificat à la mutuelle de votre patient. Quel outil ?",
 ["Recip-e", "VIDIS", "Mult-eMediatt", "eHealthBox"],
 2,
 "Mult-eMediatt = certificat électronique d'incapacité de travail (MG → mutuelle), obligatoire dès 14 jours (réforme 2026).");

Q("esante",
 "Vous avez actualisé le traitement d'un patient polymédiqué et voulez partager le schéma de médication à jour avec les autres soignants. Quel outil ?",
 ["Recip-e", "VIDIS", "MyCareNet", "Le SUMEHR"],
 1,
 "VIDIS intègre les sources de médication (Vitalink, Recip-e, Dossier Pharmaceutique Partagé) → schéma de médication partagé et mis à jour.");

Q("esante",
 "Un médecin du travail vous appelle : il souhaite consulter le dossier de santé partagé de votre patient pour préparer sa reprise. Que répondez-vous ?",
 ["Il y a accès comme tout médecin",
  "Il n'a pas accès (pas de lien thérapeutique), sauf via la plateforme TRIO avec le consentement du patient",
  "Il y accède avec la carte eID du patient",
  "Il y accède via MyCareNet"],
 1,
 "Le médecin du travail n'a pas de lien thérapeutique de soins → pas d'accès au réseau de santé, sauf via TRIO (avec consentement). Idem médecin conseil/assurance/contrôle.");

Q("esante",
 "Un patient veut empêcher un médecin précis de consulter son dossier partagé. Est-ce possible ?",
 ["Non, le consentement est global et indivisible",
  "Oui, il peut exclure nommément un prestataire, qui ne verra qu'une page vide",
  "Oui, mais seulement en supprimant tout son dossier",
  "Non, seul le médecin traitant peut décider des accès"],
 1,
 "Le patient peut exclure NOMMÉMENT un prestataire (qui ne verra alors qu'une page vide). L'historique des accès est par ailleurs consultable.");

Q("esante",
 "Un patient a donné son consentement eHealth chez son médecin à Bruxelles. Est-il valable chez un médecin à Liège ?",
 ["Non, il faut un consentement par région",
  "Non, il faut un consentement par prestataire",
  "Oui, un seul consentement est valable partout en Belgique",
  "Oui, mais uniquement dans le même réseau (hub)"],
 2,
 "Le consentement est unique et valable PARTOUT en Belgique (une seule fois). C'est l'une des 3 conditions d'accès, avec le certificat eHealth et le lien thérapeutique.");

Q("esante",
 "Un confrère affirme que le SUMEHR de son patient mentionne le nombre d'IVG qu'elle a subies. Que lui répondez-vous ?",
 ["C'est exact, le SUMEHR contient les antécédents gynécologiques détaillés",
  "C'est faux : le SUMEHR ne contient pas le nombre d'IVG (ni l'orientation sexuelle, ni les honoraires)",
  "Cela dépend du logiciel utilisé",
  "C'est exact uniquement avec le consentement écrit"],
 1,
 "Le SUMEHR (résumé minimal pour la continuité) NE contient PAS : honoraires, nombre de partenaires/IVG, orientation sexuelle, appartenance religieuse. Il contient allergies, médication active, antécédents, vaccination, volontés.");

Q("esante",
 "Une compagnie d'assurance privée demande à accéder, via eHealth, au dossier de santé d'un assuré. Réponse correcte ?",
 ["Accès autorisé si l'assuré a signé son contrat",
  "Accès refusé : la plateforme eHealth ne sert qu'aux échanges entre prestataires de soins",
  "Accès autorisé via MyCareNet",
  "Accès autorisé avec la carte eID"],
 1,
 "La plateforme eHealth = échanges entre PRESTATAIRES DE SOINS (lien thérapeutique). Elle ne sert pas aux échanges avec la mutuelle, l'assurance privée, le médecin conseil ou de contrôle.");

Q("esante",
 "Vous voulez envoyer un message ADRESSÉ et sécurisé à un confrère (ex. un courrier de référence). Quelle brique d'eHealth ?",
 ["Recip-e (message non adressé)", "eHealthBox (messages adressés)", "MetaHub", "CoBRHA"],
 1,
 "eHealthBox = messagerie sécurisée pour les messages ADRESSÉS entre prestataires. Recip-e est un message NON adressé (prescription) ; MetaHub référence les documents ; CoBRHA est un répertoire d'acteurs de soins.");

Q("esante",
 "Vous cherchez à savoir DANS QUELS hubs se trouvent les documents médicaux d'un patient. Quel service vous l'indique ?",
 ["Le SUMEHR", "Le MetaHub (métahub)", "MyCareNet", "Recip-e"],
 1,
 "Le métahub (MetaHub) indique dans quels coffres-forts/hubs régionaux (Vitalink, RSW, RSB, COZO…) se trouvent les références des documents du patient. Les données ne sont pas centralisées.");

Q("esante",
 "Pour consulter les documents hospitaliers de votre patient (compte rendu de sortie), de quoi avez-vous besoin ?",
 ["De la seule carte eID",
  "D'un certificat eHealth, d'un lien thérapeutique et du consentement du patient",
  "D'une demande à la mutuelle via MyCareNet",
  "D'une autorisation du médecin du travail"],
 1,
 "Les 3 conditions cumulatives d'accès aux documents partagés : certificat eHealth + lien thérapeutique + consentement du patient.");

Q("esante",
 "Le SUMEHR d'un de vos patients : laquelle de ces affirmations est correcte ?",
 ["C'est un dossier médical complet et exhaustif",
  "C'est un résumé minimal pour la continuité des soins, généré par le DMI et exportable sur le coffre-fort régional",
  "Il est rédigé manuellement à chaque consultation",
  "Il est accessible à la mutuelle pour le contrôle"],
 1,
 "Le SUMEHR = quantité MINIMALE de données pour la continuité (une « photographie »), généré automatiquement par le DMI, exportable sur le coffre-fort régional (accès 24h/24). Ce n'est pas un dossier complet.");

Q("esante",
 "Un pharmacien d'une officine que votre patient ne fréquente pas habituellement veut le délivrer en tiers payant. De quoi a-t-il besoin pour accéder à son historique ?",
 ["De rien, la carte eID suffit pour tout",
  "De l'accès au Dossier Pharmaceutique Partagé (DPP) avec le consentement du patient",
  "D'un appel obligatoire au médecin traitant",
  "D'une autorisation de la mutuelle"],
 1,
 "Il lui faut l'accès au DPP avec consentement (lien thérapeutique). La carte eID donne, elle, le statut d'assurabilité (BIM/AO) et la mutuelle — mais pas l'historique pharmaceutique.");

Q("esante",
 "Quel est l'objectif PRINCIPAL de la plateforme eHealth et des outils e-santé ?",
 ["Permettre le contrôle des prescriptions par l'INAMI",
  "Assurer la continuité des soins via la communication sécurisée entre prestataires (« soigner = communiquer »)",
  "Centraliser toutes les données de santé dans une base unique",
  "Remplacer le dossier médical informatisé (DMI)"],
 1,
 "Objectifs e-santé : continuité des soins (communication entre prestataires), simplification administrative, recueil de données. Les documents restent décentralisés (hubs), pas dans une base unique.");

Q("esante",
 "Parmi les applications e-santé COURANTES du médecin généraliste, laquelle est l'intrus ?",
 ["Le DMI et l'eHealthBox",
  "La consultation de l'assurabilité et le SUMEHR",
  "Recip-e et Mult-eMediatt",
  "L'accès au dossier pour le médecin conseil de la mutuelle"],
 3,
 "Le médecin conseil n'a pas accès au dossier de soins (pas de lien thérapeutique). Applications courantes du MG : DMI, eHealthBox, assurabilité, SUMEHR, Recip-e, DMG, Mult-eMediatt.");

Q("esante",
 "Un patient déménage de Flandre en Wallonie. Que devient son consentement eHealth précédemment donné ?",
 ["Il est annulé et doit être redonné",
  "Il reste valable : le consentement est unique et national",
  "Il n'est valable que dans le hub flamand (COZO/VZN)",
  "Il doit être validé par la nouvelle mutuelle"],
 1,
 "Le consentement eHealth est unique et valable partout en Belgique : un déménagement ne l'annule pas. Le métahub permet de retrouver les documents, quel que soit le hub d'origine.");

Q("esante",
 "Vous êtes de garde et recevez un patient inconscient que vous ne connaissez pas. Concernant l'accès à ses documents de santé partagés, quelle condition reste indispensable ?",
 ["Aucune, l'urgence lève toutes les conditions",
  "Disposer d'un certificat eHealth et d'un lien thérapeutique (cadre de la continuité des soins)",
  "Obtenir l'accord écrit de la famille",
  "Passer par la mutuelle du patient"],
 1,
 "L'accès suppose toujours un certificat eHealth (prestataire reconnu) et un lien thérapeutique dans le cadre de la continuité des soins. Le consentement et le lien encadrent l'accès, même en situation de soins.");
// ========== CAS / MISES EN SITUATION — ASSUÉTUDES ==========
Q("assuetudes",
 "Un homme est amené aux urgences : somnolent, pupilles en pointe (myosis), fréquence respiratoire à 8/min, « pique du nez ». Quel tableau évoquez-vous ?",
 ["Un syndrome de manque aux opioïdes",
  "Une imprégnation (intoxication) aux opioïdes",
  "Une intoxication aux stimulants",
  "Un sevrage alcoolique"],
 1,
 "Myosis + bradypnée + « pique du nez » = IMPRÉGNATION opioïde. Le manque donnerait au contraire mydriase, agitation et « tout coule ».");

Q("assuetudes",
 "Un patient vous dit : « Je ne suis pas accro, j'arrête quand je veux, il n'y a pas de problème. » À quel stade du changement se situe-t-il ?",
 ["Précontemplation", "Contemplation", "Action", "Maintien"],
 0,
 "Le problème n'est pas reconnu → PRÉCONTEMPLATION. En contemplation, le patient reconnaîtrait un problème mais hésiterait encore à agir.");

Q("assuetudes",
 "Une patiente fumeuse dit : « Je sais qu'il faudrait arrêter, ça me travaille, mais pas tout de suite. » Quel stade, et quelle attitude privilégier ?",
 ["Action → prescrire un substitut nicotinique d'emblée",
  "Contemplation → entretien motivationnel, soutenir l'émergence de sa motivation",
  "Précontemplation → la confronter à ses contradictions",
  "Maintien → prévenir la rechute"],
 1,
 "Ambivalence reconnue = CONTEMPLATION. On adapte le discours au stade : entretien motivationnel pour faire émerger sa motivation propre (sans diriger ni confronter).");

Q("assuetudes",
 "Un usager occasionnel a eu une prise de risque (rapport non protégé après consommation). Jusqu'à quand lui conseillez-vous de se faire dépister ?",
 ["Immédiatement, puis plus besoin", "Jusqu'à 3 mois après la prise de risque", "Seulement après 1 an", "Le dépistage est inutile s'il est asymptomatique"],
 1,
 "Conseil de réduction des risques : se faire dépister jusqu'à 3 mois après une prise de risque (fenêtre sérologique).");

Q("assuetudes",
 "Un patient sous benzodiazépine depuis 6 mois souhaite « tout arrêter d'un coup ». Quelle est votre conduite ?",
 ["Valider l'arrêt brutal, sans danger après 6 mois",
  "Organiser un sevrage progressif, au besoin via une BZD à longue durée d'action",
  "Doubler la dose une semaine puis arrêter",
  "Le référer immédiatement en milieu spécialisé sans suivi"],
 1,
 "Jamais d'arrêt brutal après une prise prolongée : sevrage PROGRESSIF. On garde le lien et le suivi plutôt que de référer en se déchargeant.");

Q("assuetudes",
 "Lors d'une première rencontre avec un patient consommateur, quelle attitude est la PLUS susceptible de nuire au lien ?",
 ["Aborder le sujet sans jugement",
  "Proposer d'emblée une analyse d'urines de contrôle",
  "Restituer les résultats du repérage",
  "Reconnaître l'ambivalence du patient"],
 1,
 "Proposer d'emblée une analyse d'urines (comme vanter la vie sans substance) complique le lien lors d'une 1re consultation.");

// ========== CAS / MISES EN SITUATION — PHARMACIEN ==========
Q("pharmacien",
 "Une patiente de 70 ans sous amiodarone se voit prescrire de la clarithromycine pour une infection. Quel est le risque principal à signaler au médecin ?",
 ["Une simple inefficacité de l'antibiotique",
  "Une addition d'effets sur le QT et une ↓ d'élimination des autres traitements (risque de torsade et de saignement)",
  "Une cascade médicamenteuse",
  "Aucun risque, association banale"],
 1,
 "Amiodarone + clarithromycine : interaction PD (addition sur le QT) ET PK (inhibition CYP3A4/PgP). L'effet de l'amiodarone (T½ 25-100 j) persiste des mois → avis au médecin.");

Q("pharmacien",
 "Un patient âgé reçoit de l'oxybutynine pour une incontinence. Quelques semaines plus tard, on lui prescrit un laxatif pour une constipation apparue depuis. De quoi s'agit-il probablement ?",
 ["D'une interaction pharmacocinétique",
  "D'une cascade médicamenteuse (l'effet indésirable est traité par un 2e médicament)",
  "D'une simple coïncidence sans lien",
  "D'un usage détourné"],
 1,
 "Oxybutynine (anticholinergique) → constipation (effet indésirable) → laxatif : c'est une CASCADE médicamenteuse. Il faudrait plutôt réévaluer l'oxybutynine.");

Q("pharmacien",
 "Une voisine vient chercher, pour un patient âgé et mince sortant d'hôpital, de l'énoxaparine (Clexane) 120 mg. Quel est le bon réflexe du pharmacien ?",
 ["Délivrer sans vérifier, l'ordonnance fait foi",
  "Vérifier l'adéquation de la dose au poids et à l'indication, puis contacter le médecin au besoin",
  "Refuser toute délivrance",
  "Réduire la dose de sa propre initiative"],
 1,
 "Réflexe : vérifier la dose selon le poids et l'indication (120 mg chez un patient mince = drapeau). On contacte/propose au médecin — ni délivrance aveugle, ni modification unilatérale.");

Q("pharmacien",
 "Un patient de 60 ans, sans antécédent particulier, demande à être vacciné contre la grippe directement à l'officine, sans être passé par son médecin. En 2026, est-ce possible ?",
 ["Non, une ordonnance préalable reste obligatoire",
  "Oui : le pharmacien formé peut prescrire et administrer le vaccin grippe aux > 11 ans sans ordonnance",
  "Oui, mais uniquement pour les > 65 ans",
  "Non, seuls les médecins vaccinent"],
 1,
 "Depuis fin 2025, la vaccination grippe en officine est permanente : le pharmacien formé (min. 8 h, renouvelée tous les 3 ans) peut la prescrire, délivrer et administrer aux > 11 ans, sans ordonnance.");

Q("pharmacien",
 "Un patient ambulatoire prend 6 médicaments chroniques remboursés et a un pharmacien de référence. Que peut lui proposer le pharmacien ?",
 ["Rien de particulier",
  "Un bilan de médication (≥ 5 médicaments chroniques remboursés), encodé dans un e-Form envoyé au médecin",
  "Une hospitalisation pour révision",
  "Un sevrage obligatoire"],
 1,
 "Critères du bilan de médication : patient ambulatoire, ≥ 5 médicaments chroniques remboursés, pharmacien de référence + DPP. Le résultat est transmis au médecin via un e-Form.");

Q("pharmacien",
 "Le DPP d'un patient révèle des achats répétés de codéine, d'un antihistaminique sédatif et de soda. Que suspectez-vous ?",
 ["Un traitement adapté d'une toux",
  "Un usage détourné (recherche d'un effet euphorisant/sédatif)",
  "Une cascade médicamenteuse",
  "Une simple automédication banale"],
 1,
 "Codéine + antihistaminique + soda = usage détourné connu (effet euphorisant/sédatif). Le DPP permet justement de repérer ces surconsommations/détournements.");

// ========== CAS / MISES EN SITUATION — RECHERCHE ==========
Q("recherche",
 "Vous voulez étudier les facteurs d'exposition associés à une maladie RARE. Vous comparez des malades à des témoins et recherchez en arrière leurs expositions. Quel devis ?",
 ["Étude de cohorte", "Étude cas-témoins", "Essai randomisé", "Étude transversale"],
 1,
 "Maladie rare + on part des malades (cas) vs témoins pour rechercher l'exposition rétrospectivement = étude CAS-TÉMOINS (efficiente pour les maladies rares).");

Q("recherche",
 "Vous suivez dans le temps une population d'exposés et de non-exposés pour observer la survenue d'une pathologie. Quel devis ?",
 ["Étude cas-témoins", "Étude de cohorte (prospective)", "Série de cas", "Méta-analyse"],
 1,
 "Partir de l'exposition et suivre la survenue = COHORTE (prospective). Le cas-témoins ferait l'inverse (de la maladie vers l'exposition).");

Q("recherche",
 "Un patient lombalgique commun, sans signe d'alarme, réclame une IRM « pour être sûr ». En refusant un examen inutile, vous faites de la :",
 ["Prévention primaire", "Prévention secondaire", "Prévention tertiaire", "Prévention quaternaire"],
 3,
 "Éviter un examen inutile/invasif chez un patient sans red flags = prévention QUATERNAIRE (lutte contre la surmédicalisation, M. Jamoulle).");

Q("recherche",
 "Vous lisez : « les buveurs de café du matin ont une moindre mortalité ». Quelle interprétation est la plus prudente ?",
 ["Le café réduit la mortalité, c'est démontré",
  "Une association n'implique pas la causalité ; des facteurs de confusion sont possibles",
  "Il faut prescrire du café à tous les patients",
  "L'étude est forcément un essai randomisé"],
 1,
 "Une association statistique n'implique pas un lien de cause à effet (biais, facteurs de confusion). Prudence dans l'interprétation.");

Q("recherche",
 "Vous voulez structurer une question de recherche sur l'effet d'un traitement. Quel outil employez-vous ?",
 ["ADME", "PICO (Population, Intervention, Comparateur, Outcome)", "FRAMES", "SBAR"],
 1,
 "PICO (avec QQOQCCP) structure la question de recherche : Population, Intervention, Comparateur, Outcome.");

Q("recherche",
 "Pour répondre de façon la plus fiable possible à une question thérapeutique, vous cherchez la source de plus haut niveau de preuve. Laquelle ?",
 ["Une série de cas", "Un avis d'expert", "Une revue systématique / méta-analyse", "Une étude écologique"],
 2,
 "La revue systématique / méta-analyse (recherche secondaire) est au sommet du niveau de preuve.");

// ========== CAS / MISES EN SITUATION — SPORT ==========
Q("sport",
 "Un homme de 24 ans, asymptomatique, veut courir un semi-marathon et réclame un « bilan cardiaque complet ». Que faites-vous ?",
 ["Un ECG de repos et une épreuve d'effort systématiques",
  "Pas de dépistage systématique : vous recherchez des symptômes d'alarme et vous l'encouragez",
  "Une échocardiographie de référence",
  "Vous lui déconseillez la course"],
 1,
 "< 35 ans asymptomatique : pas de dépistage systématique (KCE). On recherche les symptômes d'alarme (douleur thoracique d'effort, syncope, palpitations) et on encourage l'activité.");

Q("sport",
 "Un patient diabétique de type 1 mesure sa glycémie avant l'effort : 5 mmol/L (~90 mg/dl). Que lui conseillez-vous ?",
 ["Faire l'effort tel quel", "Prendre au moins 15 g de glucides avant de débuter", "Injecter de l'insuline rapide", "Reporter tout sport définitivement"],
 1,
 "Avant l'effort : < 6-8 mmol/L → prendre ≥ 15 g de glucides (risque d'hypoglycémie). On diminue aussi l'insuline couvrant la période.");

Q("sport",
 "Un footballeur amateur de 41 ans demande une infiltration de corticoïde pour un canal carpien, 2 jours avant un match. Sur le plan antidopage ?",
 ["Autorisé sans condition",
  "Les glucocorticoïdes (S9) sont interdits en compétition : l'infiltration doit être > 3 jours avant, sinon AUT",
  "Interdit en permanence, AUT obligatoire dans tous les cas",
  "C'est un agent masquant (S5)"],
 1,
 "Glucocorticoïdes = S9 (interdits en compétition). Infiltration possible si > 3 jours avant la compétition ; à 2 jours, il faut une AUT.");

Q("sport",
 "Un marathonien prépare un trek en altitude et demande de l'acétazolamide (Diamox) contre le mal aigu des montagnes. Que devez-vous lui dire ?",
 ["C'est autorisé, ce n'est pas performant",
  "C'est un diurétique/agent masquant (S5), interdit en permanence → une AUT est nécessaire",
  "C'est autorisé sous seuil comme le salbutamol",
  "C'est un glucocorticoïde interdit seulement en compétition"],
 1,
 "L'acétazolamide est S5 (diurétique/agent masquant), INTERDIT EN PERMANENCE → AUT obligatoire, même pour un usage médical légitime.");

Q("sport",
 "Une mère demande si son enfant asthmatique, bien contrôlé, peut s'inscrire au club de football. Votre réponse ?",
 ["Non, le sport aggrave l'asthme",
  "Oui : l'activité physique améliore le contrôle de l'asthme et la fonction pulmonaire",
  "Oui, mais uniquement la natation",
  "Seulement après un test d'effort obligatoire"],
 1,
 "L'asthme n'est pas une contre-indication : l'AP améliore le contrôle, la qualité de vie et la fonction pulmonaire (aucune étude ne montre d'aggravation).");

Q("sport",
 "Un adolescent « ne sait pas courir » et présente une dyspnée d'effort. Quelle est la cause la plus probable à évoquer en premier ?",
 ["Une cardiopathie", "Le déconditionnement", "Une BPCO", "Une embolie pulmonaire"],
 1,
 "Chez l'ado, par ordre de fréquence : déconditionnement > anxiété > asthme d'effort > obstruction laryngée induite par l'effort.");

// ========== CAS / MISES EN SITUATION — ONE HEALTH ==========
Q("onehealth",
 "Pour une simple infection virale des voies respiratoires (IVRS), un patient réclame « quelque chose d'efficace ». Quelle attitude est la plus cohérente avec la santé durable ?",
 ["Prescrire une ordonnance de confort (décongestionnant, antitussif, etc.)",
  "Proposer des mesures simples (boissons chaudes, miel, paracétamol au besoin, sérum physiologique)",
  "Prescrire un antibiotique",
  "Prescrire un sirop antibiotique + corticoïde"],
 1,
 "Une ordonnance de confort (~53 € ≈ 53 kg CO2) est évitable : pour une IVRS virale, on privilégie des mesures sobres. C'est l'application du 1er R : Réduire.");

Q("onehealth",
 "Vous devez prescrire un AINS. À efficacité comparable, quel choix est le plus favorable en termes de santé durable ?",
 ["Le diclofénac", "L'ibuprofène (moins écotoxique)", "Le plus récent sur le marché", "Le plus grand conditionnement"],
 1,
 "À molécule équivalente, choisir l'option la moins écotoxique : l'ibuprofène est préférable au diclofénac.");

Q("onehealth",
 "Un patient asthmatique parfaitement équilibré sous pMDI vous demande s'il « devrait » passer à un DPI pour l'écologie. Quelle est la meilleure conduite ?",
 ["Le changer d'office, le DPI pollue moins",
  "Décider avec lui : ne pas imposer un changement qui pourrait nuire à l'observance",
  "Refuser tout changement par principe",
  "Le passer au DPI même s'il a une faible capacité inspiratoire"],
 1,
 "DPI = pMDI en efficacité et pollue moins, mais aucun dispositif ne garantit l'adhérence : imposer un changement peut nuire (exacerbations). On privilégie la décision partagée.");

Q("onehealth",
 "Chez une personne âgée polymédiquée, vous arrêtez plusieurs médicaments devenus inutiles. Cette démarche relève de :",
 ["La surmédicalisation",
  "La prévention quaternaire et de la sobriété",
  "La prévention primaire",
  "Un risque inacceptable"],
 1,
 "Déprescrire l'inutile rejoint la prévention quaternaire et la sobriété (« un soin qui ne consomme pas est un soin qui n'existe pas »), en gardant l'adéquation des soins.");

Q("onehealth",
 "Un confrère justifie l'inaction écologique par : « On est là pour soigner, pas pour s'occuper de l'environnement ». Comment qualifier ce propos ?",
 ["Une recommandation de bonne pratique",
  "Un « discours de l'inaction »",
  "Un principe de précaution",
  "Une donnée probante"],
 1,
 "C'est un argument-type des « discours de l'inaction » (avec « on manque de temps/d'argent », « on a toujours fait comme ça »…), à reconnaître pour s'en méfier.");
// ========== CAS / MISES EN SITUATION — ORGANISATION DES SOINS ==========
Q("orga",
 "Un indépendant (gérant de magasin) tombe gravement malade et ne peut plus travailler pendant plusieurs mois. À quelle prestation N'a-t-il PAS droit ?",
 ["Aux indemnités d'incapacité de la mutuelle (dès le 8e jour)",
  "Aux soins de santé (INAMI)",
  "À une allocation de chômage",
  "Aux allocations familiales"],
 2,
 "L'indépendant n'a PAS droit au chômage (ni aux vacances annuelles, ni à FEDRIS). Il a droit aux indemnités (dès le 8e jour, montant fixe), aux soins, aux allocations familiales et à la pension.");

Q("orga",
 "Un chômeur vous consulte : il est désormais en incapacité de travail. Quelle est la bonne démarche ?",
 ["Il continue à émarger au chômage sans rien faire",
  "Il adresse un certificat à la mutuelle et passe des indemnités de chômage à celles de la mutuelle",
  "Il doit d'abord prévenir son ancien employeur",
  "Il demande directement le statut d'invalidité"],
 1,
 "Le chômeur en incapacité envoie un certificat à la mutuelle (et ne prévient l'ONEM que si un travail lui est proposé). Il bascule vers les indemnités de la mutuelle.");

Q("orga",
 "Un salarié est en incapacité depuis 13 mois. Sur le plan administratif, dans quelle situation se trouve-t-il ?",
 ["Toujours en incapacité primaire",
  "En invalidité (incapacité de plus de 12 mois)",
  "En mi-temps médical d'office",
  "En préavis pour force majeure médicale"],
 1,
 "Au-delà de 12 mois (1 an) → INVALIDITÉ, contrôlée par le Conseil médical de l'invalidité (INAMI).");

Q("orga",
 "Un patient bénéficiaire de l'intervention majorée (BIM) vient en consultation. Concernant le tiers payant :",
 ["Il est facultatif", "Il est interdit pour les BIM", "Il est obligatoire (tiers payant social) en consultation", "Il ne s'applique qu'à l'hôpital"],
 2,
 "Pour les BIM, le tiers payant social est OBLIGATOIRE en consultation : le patient ne paie que le ticket modérateur réduit.");

Q("orga",
 "Les tickets modérateurs d'un ménage atteignent un montant élevé sur l'année. Quel mécanisme prend alors le relais ?",
 ["Le BIM", "Le Maximum à Facturer (MAF)", "Le DMG", "Le fonds des accidents médicaux"],
 1,
 "Le MAF protège le ménage : au-delà d'un seuil de tickets modérateurs sur l'année, la mutuelle prend en charge 100 % jusqu'au 31/12. Il n'est pas réservé aux BIM.");

Q("orga",
 "Une personne sans titre de séjour, sans ressources, a besoin d'un suivi médical. Vers quel dispositif l'orientez-vous ?",
 ["Vers FEDASIL", "Vers l'Aide Médicale Urgente (AMU) via le CPAS", "Vers l'INAMI via une mutuelle", "Vers la CAAMI"],
 1,
 "Séjour irrégulier → AMU (CPAS), qui couvre curatif ET préventif. FEDASIL concerne les demandeurs d'asile (qui ont un titre de séjour).");

// ========== CAS / MISES EN SITUATION — PATIENT ÂGÉ ==========
Q("age",
 "M. Y., 82 ans, diabétique, isolé, rentre à domicile après un AVC (séquelles de marche, troubles mnésiques, incontinence). Qui organise et coordonne son retour à domicile ?",
 ["Le médecin spécialiste hospitalier seul",
  "La coordinatrice (personne de référence) : analyse des besoins, contacts, plan de soutien, réévaluation à +3 mois",
  "La mutuelle",
  "L'aidant proche, seul responsable"],
 1,
 "La coordinatrice (ASD) est la personne de référence : elle analyse les besoins, contacte les services (infirmier, aide familiale, ergo…), établit un plan et réévalue à +3 mois.");

Q("age",
 "Une patiente de 78 ans présente 2 des critères de Fried (marche ralentie + perte de force). Comment la classez-vous ?",
 ["Robuste", "Pré-fragile", "Fragile", "Dépendante"],
 1,
 "0 critère = robuste ; 1-2 = PRÉ-FRAGILE ; ≥ 3 = fragile. Avec 2 critères → pré-fragile (état réversible, à prendre en charge).");

Q("age",
 "Un patient âgé prend chaque matin un jus de pamplemousse avec ses médicaments. Quel risque devez-vous évoquer ?",
 ["Aucun risque",
  "Une inhibition du CYP3A4 pouvant entraîner un surdosage de certains médicaments",
  "Une induction enzymatique entraînant un sous-dosage",
  "Une interaction limitée aux antibiotiques"],
 1,
 "Le jus de pamplemousse inhibe le CYP3A4 → ↑ concentrations de nombreux médicaments (risque de surdosage). À surveiller avec l'alcool et les OTC non déclarés.");

Q("age",
 "Vous faites passer un Timed Up & Go à une patiente : elle met 21 secondes. Interprétation ?",
 ["Normal, aucun risque", "Au-delà de 14 s : risque de chute accru", "Score de dépression élevé", "Dénutrition probable"],
 1,
 "Timed Up & Go normal < 14 s. À 21 s → risque de chute accru. (Le /28 et le seuil < 20 concernent l'échelle de Tinetti.)");

Q("age",
 "Pour un patient atteint d'une maladie grave évolutive, vous vous demandez : « Serais-je surpris qu'il décède dans les 6-12 mois ? ». Quel outil mobilisez-vous, et pour quoi faire ?",
 ["Le MMSE, pour évaluer la cognition",
  "Le PICT, pour identifier un patient palliatif et définir un plan de soins / un ACP",
  "Le MNA, pour la nutrition",
  "Le score de Fried, pour la fragilité"],
 1,
 "La « question surprise » fait partie du PICT (Palliative Care Indicators Tool) : il identifie le patient palliatif → plan de soins et Advanced Care Planning (ACP) en concertation.");

Q("age",
 "Un patient âgé prend 7 médicaments différents par jour. Que cela impose-t-il ?",
 ["Rien, c'est sans conséquence",
  "Une vigilance « polymédication » (≥ 6/jour) et une révision (START & STOPP, GheOP3S)",
  "L'arrêt immédiat de tous les traitements",
  "Une hospitalisation systématique"],
 1,
 "Au-delà de 6 médicaments/jour → vigilance polymédication (facteur pronostique). On révise avec START & STOPP, GheOP3S, en équipe (pas « max 6 » comme outil, ni arrêt brutal de tout).");

// ========== CAS / MISES EN SITUATION — DEMANDEURS D'ASILE ==========
Q("asile",
 "Un patient de 34 ans, originaire d'Afrique centrale, en Belgique depuis 5 ans, présente des douleurs abdominales depuis 3 mois et une légère perte de poids, sans autre signe. Que recherchez-vous en priorité à la biologie ?",
 ["Une hypertriglycéridémie",
  "Une éosinophilie (parasitose : schistosomiase, strongyloïdose)",
  "Une légère élévation des γ-GT",
  "Une hyperglycémie"],
 1,
 "Origine subsaharienne + symptômes digestifs + perte de poids → rechercher une ÉOSINOPHILIE (parasitose : schistosomiase → praziquantel ; strongyloïdose → ivermectine). Question d'examen classique.");

Q("asile",
 "Un homme arrive avec un « diagnostic de trouble thyroïdien » posé au pays et un traitement par L-thyroxine, mais son bilan biologique est strictement normal. Quelle est votre mission ?",
 ["Poursuivre le traitement par prudence",
  "Démédicaliser : revoir le diagnostic et le traitement posés au pays d'origine",
  "Augmenter la dose de L-thyroxine",
  "Référer d'emblée à l'endocrinologue"],
 1,
 "Mission parfois essentielle : DÉMÉDICALISER (cas Ahmad : hyperthyroïdie iatrogène sous L-thyroxine, « diabète » sous metformine avec HbA1c normale). On revoit les diagnostics/traitements étrangers.");

Q("asile",
 "Une patiente, possible victime de torture, présente des signes de stress post-traumatique. Quelle attitude adoptez-vous lors de la consultation ?",
 ["Demander un récit détaillé et chronologique des sévices",
  "Ne pas demander de détails pour éviter une réexposition ; la laisser dire ce qu'elle veut, à son rythme",
  "Éviter totalement d'aborder le psychisme",
  "Adresser immédiatement sans aucune écoute"],
 1,
 "PTSD : on NE force PAS le récit (risque de réexposition traumatique). On laisse la personne s'exprimer à son rythme ; prise en charge pluridisciplinaire (psy, médiateur culturel, interprète).");

Q("asile",
 "Une fillette non excisée, originaire d'un pays à très haute prévalence de MGF, consulte avec ses parents. Sur le plan de la protection :",
 ["Aucune protection n'est envisageable",
  "Un certificat médical de non-excision peut fonder une reconnaissance comme réfugiée, à ré-attester tous les 3 ans",
  "L'excision est tolérée pour motif culturel",
  "Elle relève uniquement de l'AMU"],
 1,
 "Un certificat de non-excision peut fonder une reconnaissance comme réfugiée, à RÉ-attester tous les 3 ans (médecins formés par le GAMS ; centres CeMAViE, UZ Gent).");

Q("asile",
 "Vous travaillez dans un centre d'accueil (Fedasil / Croix-Rouge). Quel risque infectieux devez-vous particulièrement garder à l'esprit ?",
 ["Le paludisme, à dépister chez tous",
  "La tuberculose (très fréquente en collectivité) et la rougeole",
  "Aucun risque collectif particulier",
  "Uniquement les IST"],
 1,
 "En centre d'accueil : risque de rougeole et SURTOUT de tuberculose (dépistage systématique FARES, (re)vaccination RRO). Les lésions de torture peuvent aussi perdurer des années.");

Q("asile",
 "Un homme sans papiers vous dit avoir besoin de soins mais n'avoir « droit à rien ». Que lui expliquez-vous concernant l'AMU ?",
 ["Elle ne couvre que les urgences vitales",
  "Elle est octroyée par le CPAS et couvre aussi le préventif et le suivi (pas seulement l'urgence)",
  "Elle est réservée aux demandeurs d'asile",
  "Elle est gérée par la mutuelle"],
 1,
 "L'AMU (CPAS) concerne les personnes en séjour irrégulier sans moyens et couvre, malgré son nom, le curatif, le préventif et le suivi. Conditions : territorialité, enquête sociale (indigence), certificat médical.");

// ========== CAS / MISES EN SITUATION — TRIO ==========
Q("trio",
 "Un travailleur reprend le travail après 5 semaines d'incapacité. Quelle obligation s'applique ?",
 ["Aucune visite n'est nécessaire",
  "Une visite de reprise auprès du médecin du travail dans les 10 jours ouvrables",
  "Une visite de pré-reprise obligatoire avant le retour",
  "Une visite d'embauche"],
 1,
 "Incapacité ≥ 4 semaines → visite de reprise OBLIGATOIRE dans les 10 jours ouvrables suivant la reprise. Le travailleur ne reprend pas sans cette visite.");

Q("trio",
 "Une laborantine enceinte est exposée à des risques à son poste. Quelle est la conduite du médecin du travail ?",
 ["Délivrer un certificat d'incapacité de travail",
  "Mutation vers un poste sans exposition ou écartement, avec indemnité de la mutuelle (~78 % du brut)",
  "Maintien au poste avec surveillance renforcée",
  "Renvoi au médecin conseil pour invalidité"],
 1,
 "Maternité avec risque : mutation ou écartement (attestation, PAS un certificat d'incapacité) ; indemnité couverte par la mutuelle (~78 % du brut). Allaitement : écartement possible jusqu'aux 5 mois de l'enfant.");

Q("trio",
 "Un candidat est déclaré INAPTE lors de l'examen d'embauche pour un poste à risque. Quelle suite ?",
 ["Il dispose d'un droit de recours auprès du médecin-arbitre",
  "Il n'existe pas de recours dans ce cas précis",
  "L'employeur doit l'engager quand même",
  "Le médecin conseil réexamine la décision"],
 1,
 "Examen d'embauche (poste à risque) : si inapte à l'embauche → PAS de recours (contrairement à d'autres décisions du médecin du travail).");

Q("trio",
 "Le médecin du travail, hors plateforme TRIO, souhaite consulter le dossier de santé d'un travailleur. Que dit la règle ?",
 ["Il y a accès comme tout médecin",
  "Il n'y a pas accès (pas de lien thérapeutique), sauf via TRIO avec le consentement du patient",
  "Il y accède avec la carte eID",
  "Il y accède via la mutuelle"],
 1,
 "Le médecin du travail n'a pas de lien thérapeutique de soins → pas d'accès direct au réseau de santé, sauf via la plateforme TRIO (avec consentement).");

Q("trio",
 "Un travailleur ne se présente pas, à plusieurs reprises, aux rendez-vous de son trajet de réintégration. Quelle conséquence ?",
 ["Aucune conséquence",
  "Une sanction sur les indemnités de la mutuelle",
  "Une peine d'emprisonnement",
  "Une radiation à vie de la mutuelle"],
 1,
 "L'absence aux rendez-vous du trajet de réintégration entraîne une sanction sur les indemnités de la mutuelle.");

Q("trio",
 "Vous (médecin généraliste) estimez que votre patient pourrait reprendre sur un poste adapté. Pourquoi et comment vous adressez-vous au médecin du travail ?",
 ["Pour faire contrôler son absentéisme",
  "Pour adapter le poste / préparer la reprise / signaler un risque, dans le respect du secret médical",
  "Pour obtenir un diagnostic",
  "Pour qu'il prescrive le traitement"],
 1,
 "Le MG s'adresse au médecin du travail pour adapter le poste, préparer la reprise, signaler un risque professionnel — en respectant le secret (le certificat à l'employeur ne porte jamais de diagnostic).");
