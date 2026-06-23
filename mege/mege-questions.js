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

Q("orga",
 "La plateforme eHealth permet :",
 ["Les échanges entre le médecin et la mutuelle pour le contrôle",
  "L'échange sécurisé entre prestataires de soins ayant un lien thérapeutique",
  "L'accès du médecin du travail au dossier de soins",
  "Le transfert de données vers les assurances privées"],
 1,
 "Plateforme eHealth = échange sécurisé entre PRESTATAIRES DE SOINS ayant un lien thérapeutique. Elle ne sert PAS aux échanges avec la mutuelle, l'assurance privée, ni le médecin conseil/de contrôle.");

Q("orga",
 "Un médecin reçoit une nouvelle patiente et veut vérifier son assurabilité (BIM/AO) et son DMG. Quel outil ?",
 ["Recip-e", "MyCareNet", "Le hub régional (Vitalink…)", "VIDIS"],
 1,
 "MyCareNet = lien avec les mutuelles : vérifier l'assurabilité (BIM/AO), DMG, chapitre IV, facturer le tiers payant. Recip-e = prescription ; hub = documents partagés ; VIDIS = schéma de médication.");

Q("orga",
 "Le SUMEHR. Laquelle de ces données n'y figure PAS ?",
 ["Les allergies et la médication active",
  "Les antécédents et la vaccination",
  "Le nombre d'IVG et l'orientation sexuelle",
  "La personne de contact et les volontés du patient"],
 2,
 "Le SUMEHR (résumé minimal pour la continuité des soins) ne contient PAS : honoraires, nombre de partenaires/IVG, orientation sexuelle, appartenance religieuse. Il contient allergies, médication active, antécédents, vaccination, personne de contact, volontés.");

Q("orga",
 "Pour accéder aux documents de santé partagés d'un patient, il faut réunir 3 conditions cumulatives. Lesquelles ?",
 ["Carte eID + mutuelle + ordonnance",
  "Certificat eHealth + lien thérapeutique + consentement du patient",
  "DMG + tiers payant + BIM",
  "Recip-e + MyCareNet + SUMEHR"],
 1,
 "3 conditions cumulatives : (1) certificat eHealth (prestataire reconnu, logiciel agréé), (2) lien thérapeutique (continuité, durée limitée), (3) consentement du patient (un seul, valable partout).");

Q("orga",
 "Lors d'un trajet de réintégration, le médecin du travail veut consulter le dossier de santé du patient. En dehors de TRIO :",
 ["Il y a accès comme tout médecin",
  "Il n'a pas accès (pas de lien thérapeutique de soins)",
  "Il y accède avec la seule carte eID",
  "Il y accède via MyCareNet"],
 1,
 "Le médecin du travail n'a PAS de lien thérapeutique de soins → pas d'accès au réseau de santé, SAUF via la plateforme TRIO (avec consentement). Idem médecin conseil/assurance/contrôle.");

Q("orga",
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

Q("orga",
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

Q("orga",
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
