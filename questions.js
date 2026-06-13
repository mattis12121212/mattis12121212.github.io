/* ============================================================
   Banque de questions — Quiz Dermato
   Basée sur la synthèse du cours (Sonck / Baeck & Marot 2022)
   + compil examens 2017-2025. Images : DermNet (dermnetnz.org)
   à usage d'étude personnelle.
   ------------------------------------------------------------
   img | theme | question | options[4] | answer(0-3) | explanation
   Les explications incluent le TRAITEMENT (R/) et les tuyaux.
   ============================================================ */

const QUIZ = [
  /* ============ 1. VIROSES ============ */
  {
    img: "herpes.jpg", theme: "Viroses",
    question: "Vésicules groupées « en bouquet » sur fond érythémateux, brûlure (pas de prurit), récidivantes au même endroit. Diagnostic ?",
    options: ["Herpès simplex (HSV)", "Zona", "Impétigo", "Dermatite herpétiforme"],
    answer: 0,
    explanation: "HSV : bouquet de vésicules récidivant au même site, brûlure. HSV-1 buccal, HSV-2 génital. R/ : le moins possible (désinfection) ; si ≥ 1×/mois → antiviral PO (aciclovir 200 mg 5×/j ou valaciclovir). Éviter les antiviraux topiques OTC (inutiles, allergisants)."
  },
  {
    img: "zona.jpg", theme: "Viroses",
    question: "Éruption vésiculeuse douloureuse, unilatérale, en bande, s'arrêtant à la ligne médiane, douleur précédant l'éruption. Diagnostic ?",
    options: ["Zona (VZV)", "Herpès simplex", "Eczéma de contact", "Érysipèle"],
    answer: 0,
    explanation: "Zona = réactivation du VZV, topographie métamérique unilatérale. R/ ≥ 50 ans / ophtalmique / Ramsay-Hunt : ACICLOVIR 800 mg 5×/j 7 j (valaciclovir 1 g 3×/j) pour prévenir les algies post-zostériennes. ⚠️ Piège : 200 mg = herpès, PAS le zona. Zona ophtalmique (V1) → contrôle ophtalmo."
  },
  {
    img: "varicelle.jpg", theme: "Viroses",
    question: "Enfant fébrile, lésions d'âges différents (macules, vésicules « goutte de rosée », croûtes), débutant au cuir chevelu. Diagnostic ?",
    options: ["Varicelle", "Zona", "Molluscum contagiosum", "Prurigo"],
    answer: 0,
    explanation: "Varicelle (primo-infection VZV) : éruption polymorphe, 3 stades simultanés, débute au scalp. R/ : antiseptiques, soins asséchants, antiH1, paracétamol — JAMAIS d'aspirine (syndrome de Reye). Aciclovir IV si forme grave/immunodéprimé."
  },
  {
    img: "pityriasis-rose.jpg", theme: "Viroses",
    question: "Médaillon initial puis macules ovalaires en « sapin de Noël » sur le tronc d'un jeune adulte. Diagnostic ?",
    options: ["Pityriasis rosé de Gibert", "Psoriasis en gouttes", "Pityriasis versicolor", "Syphilis secondaire"],
    answer: 0,
    explanation: "PRG (réactivation HHV-6/7) : médaillon initial > lésions secondaires en lignes de clivage, durée 6-8 semaines, résolution spontanée. R/ : AUCUN (« au moins on en fait, au mieux ») ; antiH1/cortico si prurit. ⚠️ Faux : « HHV-8 » (= Kaposi) ou « 1-2 semaines »."
  },
  {
    img: "molluscum.jpg", theme: "Viroses",
    question: "Papules hémisphériques translucides en semis, à ombilication centrale, chez un enfant. Diagnostic ?",
    options: ["Molluscum contagiosum", "Verrues planes", "Varicelle", "Milium"],
    answer: 0,
    explanation: "Molluscum (Poxvirus) : papules ombiliquées, fréquent chez l'enfant/atopique. R/ : curetage sous Emla® (meilleure option) ; cryothérapie (douloureux) ; Molutrex® pour zones inaccessibles. ⚠️ La bléomycine n'est PAS indiquée (distracteur)."
  },
  {
    img: "verrue.jpg", theme: "Viroses",
    question: "Papule kératosique rugueuse avec interruption des sillons et points noirs (capillaires thrombosés). Diagnostic ?",
    options: ["Verrue vulgaire (HPV)", "Molluscum", "Kératose actinique", "Carcinome basocellulaire"],
    answer: 0,
    explanation: "Verrue HPV : 2 signes pathognomoniques = interruption des dermatoglyphes + points noirs. R/ : acide salicylique, cryothérapie ; bléomycine intralésionnelle (plantaires, JAMAIS péri-unguéal). HPV : 6/11 = condylomes non oncogènes (90 %), 16/18 = oncogènes ; vaccin Gardasil 9® avant 1er rapport."
  },
  {
    img: "megalerytheme.jpg", theme: "Viroses",
    question: "Enfant d'âge scolaire, joues rouges « giflées », puis macules roses en guirlandes sur les membres. Diagnostic ?",
    options: ["Mégalérythème épidémique (parvovirus B19)", "Rougeole", "Scarlatine", "Pityriasis rosé"],
    answer: 0,
    explanation: "Mégalérythème (5ᵉ maladie) = parvovirus B19 : « joues giflées » → guirlandes des membres → résurgence (chaleur, soleil). Pas de R/. ⚠️ Danger en grossesse : hydrops fœtal. À ne pas confondre avec la 6ᵉ maladie/roséole (HHV-6)."
  },
  {
    img: "pied-main-bouche.jpg", theme: "Viroses",
    question: "Enfant < 10 ans : érosions buccales + vésicules ovalaires des mains et pieds, très contagieux. Diagnostic ?",
    options: ["Syndrome pied-main-bouche (Coxsackie)", "Varicelle", "Herpès", "Impétigo"],
    answer: 0,
    explanation: "Pied-main-bouche : virus Coxsackie A16 (± entérovirus 71 = formes neuro/pulmonaires sévères), transmission oro-fécale. Vésicules grisâtres buccales + mains/pieds (± fesses). Guérison spontanée ~7 j. R/ symptomatique."
  },

  /* ============ 2. BACTÉRIENNES ============ */
  {
    img: "impetigo.jpg", theme: "Bactériennes",
    question: "Croûtes jaunâtres « mélicériques » (couleur miel) péri-orificielles chez un enfant, contagieux. Diagnostic ?",
    options: ["Impétigo", "Herpès", "Eczéma surinfecté", "Dermatite séborrhéique"],
    answer: 0,
    explanation: "Impétigo (S. aureus 80 % = bulleux ; strepto A = croûteux), infection cutanée la plus superficielle. 1er réflexe : frottis bactérien. R/ : nettoyage + acide fusidique (Fucidin®) ou mupirocine ; si étendu → flucloxacilline PO. Germe le + probable en QCM photo = staphylocoque doré."
  },
  {
    img: "ssss.jpg", theme: "Bactériennes",
    question: "Nourrisson fébrile, décollement superficiel « ébouillanté », croûtes péri-orificielles (tête de clown), Nikolski +, muqueuses respectées. Diagnostic ?",
    options: ["SSSS (épidermolyse staphylococcique)", "Nécrolyse épidermique toxique (Lyell)", "Pemphigus", "Brûlure"],
    answer: 0,
    explanation: "SSSS : toxine exfoliante du STAPHYLOCOQUE, clivage superficiel (couche granuleuse), muqueuses RESPECTÉES. R/ : antibiothérapie systémique (agit en 48 h). ⚠️ Faux : « streptocoque », « Nikolski négatif », « plus profond que le Lyell » (c'est l'inverse)."
  },
  {
    img: "erysipele.jpg", theme: "Bactériennes",
    question: "Placard rouge à bords nets, chaud, douloureux, fièvre 39-40 °C avec frissons, sur une jambe. Diagnostic ?",
    options: ["Érysipèle", "Eczéma de stase", "Zona", "Dermatophytie"],
    answer: 0,
    explanation: "Érysipèle (strepto β-hémol. A) : placard rouge bien limité, fièvre/frissons, adénopathies. URGENCE. R/ : antibiothérapie anti-strepto/staph ; ⚠️ AINS CONTRE-INDIQUÉS. Si visage : ATB IV (risque de thrombophlébite du sinus caverneux). Chercher la porte d'entrée (pied d'athlète)."
  },
  {
    img: "lyme.jpg", theme: "Bactériennes",
    question: "Macule annulaire à extension centrifuge avec éclaircissement central, après piqûre de tique (retour de camp). Diagnostic ?",
    options: ["Érythème migrant (maladie de Lyme)", "Dermatophytie (roue de Ste-Catherine)", "Granulome annulaire", "Lupus subaigu"],
    answer: 0,
    explanation: "Érythème chronique migrant = phase précoce de la borréliose (Borrelia, tique). Diagnostic CLINIQUE → on traite même si sérologie négative. R/ : doxycycline 100 mg ×2/j 10 j (adulte) ; amoxicilline 50 mg/kg/j (enfant). Retrait de la tique à la pince, jamais d'éther."
  },
  {
    img: "syphilis.jpg", theme: "Bactériennes",
    question: "Lésion d'inoculation unique, indolore et indurée (ou roséole/syphilides palmo-plantaires) chez un patient à risque. Diagnostic ?",
    options: ["Syphilis (Treponema pallidum)", "Herpès génital", "Chancre mou", "Aphtose"],
    answer: 0,
    explanation: "Syphilis « la grande simulatrice » : chancre INDOLORE et induré (⚠️ « douloureux » = faux, évoque l'herpès). Confirmer = TPHA (spécifique) ; suivre l'efficacité = VDRL (÷4 à 6 mois). R/ : benzathine-pénicilline G IM. Tout rash inexpliqué chez un patient à risque → sérologie."
  },

  /* ============ 3. MYCOSES & PARASITES ============ */
  {
    img: "tinea.jpg", theme: "Mycoses & parasites",
    question: "Plaque annulaire prurigineuse, bordure active vésiculo-squameuse, guérison centrale, après contact animal. Diagnostic ?",
    options: ["Dermatophytie (roue de Ste-Catherine)", "Eczéma nummulaire", "Psoriasis", "Pityriasis rosé"],
    answer: 0,
    explanation: "Tinea corporis : bordure active, desquamation interne, extension centrifuge. 1er réflexe : gratter les squames (examen direct + culture). R/ : imidazolé topique ; si étendu → terbinafine ou itraconazole PO (hépatotoxiques). ⚠️ Tinea incognita = mycose traitée par erreur aux dermocorticoïdes."
  },
  {
    img: "teigne.jpg", theme: "Mycoses & parasites",
    question: "Enfant : placards squameux du cuir chevelu avec cheveux cassés à 2-3 mm, très contagieux. Diagnostic ?",
    options: ["Teigne (tinea capitis)", "Pelade", "Dermatite séborrhéique", "Psoriasis du cuir chevelu"],
    answer: 0,
    explanation: "Teigne : cheveux cassés courts, contagieux (éviction scolaire). Prélever les squames. R/ : imidazolé local ET terbinafine/itraconazole PO 1-2 mois. ⚠️ « Topique seul » = FAUX pour la teigne. DD pelade : peau lisse non cassée, non contagieuse."
  },
  {
    img: "pityriasis-versicolor.jpg", theme: "Mycoses & parasites",
    question: "Macules finement squameuses du tronc, jaune chamois/brunâtres, signe du « copeau » au grattage. Diagnostic ?",
    options: ["Pityriasis versicolor", "Vitiligo", "Pityriasis rosé", "Dermatite séborrhéique"],
    answer: 0,
    explanation: "Pityriasis versicolor (levure Malassezia) : macules du tronc, squames fines, récidivant, non contagieux. R/ : imidazolé topique ± itraconazole. La Malassezia cause AUSSI la dermite séborrhéique (mais zones séborrhéiques, pas le tronc)."
  },
  {
    img: "candidose.jpg", theme: "Mycoses & parasites",
    question: "Atteinte rouge vernissée des plis (ou péri-unguéale) avec pustules satellites, macération. Diagnostic ?",
    options: ["Candidose", "Psoriasis inversé", "Dermatophytie", "Eczéma"],
    answer: 0,
    explanation: "Candidose (Candida albicans) : plis macérés, fond rouge vernissé, lésions satellites, perlèche, muguet. Favorisée par diabète, ATB, grossesse, corticoïdes. R/ : antifongique imidazolé topique (± PO), correction des facteurs favorisants."
  },
  {
    img: "gale.jpg", theme: "Mycoses & parasites",
    question: "Prurit à recrudescence nocturne, sillons interdigitaux, épargne du visage, contage familial. Diagnostic ?",
    options: ["Gale (sarcoptes)", "Eczéma de contact", "Dermatite atopique", "Prurigo"],
    answer: 0,
    explanation: "Gale (Sarcoptes scabiei) : prurit nocturne, sillons, nodules scrotaux, épargne du visage (sauf < 2 ans). R/ : perméthrine 5 % (Zalvor®) tout le corps sauf visage, J1 + J7 ; ivermectine PO J1 + J4. ⚠️ Traiter TOUT l'entourage + linge > 60 °C. Forme norvégienne = très contagieuse mais PEU prurigineuse."
  },

  /* ============ 4. DERMATOSES INFLAMMATOIRES ============ */
  {
    img: "eczema.jpg", theme: "Inflammatoires",
    question: "Plaques érythémato-vésiculeuses suintantes, MAL limitées, très prurigineuses, sur peau sèche (plis). Diagnostic ?",
    options: ["Eczéma / dermatite atopique", "Psoriasis", "Lichen plan", "Urticaire"],
    answer: 0,
    explanation: "Eczéma : lésions MAL limitées, suintantes, prurit ++. DA = maladie GÉNÉTIQUE de la barrière (PAS une allergie → bilan allergo NON systématique). R/ : émollients = fond (tête aux pieds) ; poussées = dermocorticoïdes ; tacrolimus/pimécrolimus en entretien ; sévère = dupilumab/ciclosporine. Signe de Dennie-Morgan."
  },
  {
    img: "dermatite-seborrheique.jpg", theme: "Inflammatoires",
    question: "Squames jaunâtres grasses des sillons nasogéniens, sourcils, glabelle et cuir chevelu, améliorées par le soleil. Diagnostic ?",
    options: ["Dermatite séborrhéique", "Psoriasis", "Lupus", "Rosacée"],
    answer: 0,
    explanation: "Dermite séborrhéique (Malassezia) : zones séborrhéiques, homme > femme. Favorisée par stress, Parkinson, alcool, VIH (forme aiguë étendue → penser primo-infection VIH). R/ : imidazolés topiques (≠ dermocorticoïdes sur le visage)."
  },
  {
    img: "psoriasis.jpg", theme: "Inflammatoires",
    question: "Plaques érythémateuses BIEN limitées, squames épaisses argentées des faces d'extension (coudes, genoux), NON prurigineuses. Diagnostic ?",
    options: ["Psoriasis", "Eczéma", "Lichen plan", "Dermatophytie"],
    answer: 0,
    explanation: "Psoriasis : plaques bien limitées, squames argentées, faces d'EXTENSION, ongles « en dé à coudre », Koebner +, amélioré au soleil. R/ progressif : topiques (corticoïdes + analogues vit. D) → photothérapie (UVB/PUVA) → systémiques (MTX 1×/sem, acitrétine, ciclosporine) → biologiques (anti-TNF/IL17/23 ; bilan néo + infectieux + vaccins). ⚠️ UV non contre-indiqués."
  },
  {
    img: "lichen-plan.jpg", theme: "Inflammatoires",
    question: "Papules planes polygonales violines, prurigineuses, des poignets, avec stries blanchâtres (Wickham). Diagnostic ?",
    options: ["Lichen plan", "Psoriasis", "Lupus", "Verrues planes"],
    answer: 0,
    explanation: "Lichen plan — 5 P : Papules Planes, Polygonales, Pourpres, Prurigineuses + stries de Wickham. Poignets, JAMAIS le visage ; muqueuse « en feuille de fougère » ; ptérygion unguéal ; Koebner +. Associé à l'hépatite C. R/ : dermocorticoïdes puissants, immunomodulateurs topiques, PUVA/ciclosporine si grave."
  },
  {
    img: "lichen-sclereux.jpg", theme: "Inflammatoires",
    question: "Papules blanc nacré brillantes confluant en plaques atrophiques, surtout ano-génitales (fillette ou femme ménopausée). Diagnostic ?",
    options: ["Lichen scléro-atrophique", "Lichen plan", "Vitiligo", "Morphée"],
    answer: 0,
    explanation: "LSA : papules blanc nacré → plaques atrophiques ano-génitales, 2 pics (pré-pubère, pré-ménopause). Risque d'atrophie irréversible et de dégénérescence en CSC (pas en mélanome). R/ : dermocorticoïdes TRÈS puissants (clobétasol). ⚠️ « Papules violacées à stries grisâtres » = lichen plan, pas LSA."
  },
  {
    img: "acne.jpg", theme: "Inflammatoires",
    question: "Adolescent : comédons (points noirs), microkystes, papulo-pustules du visage. Diagnostic ?",
    options: ["Acné vulgaire", "Rosacée", "Folliculite", "Dermatite péri-orale"],
    answer: 0,
    explanation: "Acné : rétentionnel (comédons, microkystes) + inflammatoire. R/ : rétinoïdes topiques (tératogènes), ATB locaux ; systémique = cyclines (doxycycline) ; isotrétinoïne = SEUL curatif (tératogène, dose 120-150 mg/kg, jamais avec les cyclines). ⚠️ Corticoïdes formellement CI sur le visage."
  },
  {
    img: "rosacee.jpg", theme: "Inflammatoires",
    question: "Femme de 45 ans : papules et pustules sur fond de couperose (érythème centrofacial), SANS comédon. Diagnostic ?",
    options: ["Rosacée", "Acné vulgaire", "Lupus", "Dermatite séborrhéique"],
    answer: 0,
    explanation: "Rosacée (acné de l'adulte) : couperose + papulo-pustules, PAS de comédon ni microkyste, composante Demodex. 3 stades (vasculaire → papulopustuleux → rhinophyma). R/ : métronidazole/ivermectine topique, cyclines ; laser pour la couperose. ⚠️ Pustules du visage chez l'adulte = rosacée, PAS acné vulgaire. Dermocorticoïdes CI."
  },
  {
    img: "urticaire.jpg", theme: "Inflammatoires",
    question: "Papules/plaques œdémateuses rosées « ortiées », FUGACES (< 24 h), migratrices, très prurigineuses. Diagnostic ?",
    options: ["Urticaire", "Érythème polymorphe", "Eczéma", "Vascularite"],
    answer: 0,
    explanation: "Urticaire (mastocytes → histamine) : papules FUGACES (< 24 h), migratrices. Chronique = > 6 sem, PAS allergique. R/ : 1) antiH1 2ᵉ génération → 2) ×4 la dose → 3) + omalizumab → 4) ciclosporine. ⚠️ Lésion FIXE > 24 h + fièvre/arthralgies → vascularite urticarienne / maladie systémique (bilan)."
  },
  {
    img: "erytheme-polymorphe.jpg", theme: "Inflammatoires",
    question: "Lésions en cocarde à 3 zones (mains, pieds, visage), souvent après un herpès. Diagnostic ?",
    options: ["Érythème polymorphe", "Urticaire", "Stevens-Johnson", "Vascularite"],
    answer: 0,
    explanation: "Érythème polymorphe : cocardes typiques à 3 zones, réactionnel (herpès ++, mycoplasme, médicaments). Acral (mains/pieds/poignets). R/ : dermocorticoïdes puissants, ou cortico PO si étendu ; traiter/prévenir l'herpès récidivant (aciclovir au long cours)."
  },
  {
    img: "sjs-ten.jpg", theme: "Inflammatoires",
    question: "Atteinte muqueuse d'abord, puis décollement épidermique étendu, Nikolski +, 1-3 sem après un médicament. Diagnostic ?",
    options: ["Stevens-Johnson / Lyell (NET)", "SSSS", "Pemphigus", "Érythème pigmenté fixe"],
    answer: 0,
    explanation: "SJS/Lyell : toxidermie GRAVE, atteinte des muqueuses d'abord, Nikolski +, décollement < 10 % (SJS) / > 30 % (NET). Inducteurs « 5 A » : Allopurinol, Antibiotiques (sulfamides), Anti-Épileptiques, AINS, Anti-Rétroviraux. R/ : arrêt de tous les médicaments + soins type grand brûlé (USI)."
  },
  {
    img: "vascularite.jpg", theme: "Inflammatoires",
    question: "Purpura INFILTRÉ (palpable), déclive aux membres inférieurs, parfois nécrotique. Diagnostic ?",
    options: ["Vascularite (purpura infiltré)", "Purpura thrombopénique", "Purpura sénile de Bateman", "Ecchymoses"],
    answer: 0,
    explanation: "Purpura vasculaire : INFILTRÉ/palpable (≠ thrombopénique, sénile, CIVD = non infiltrés). Bilan : biopsie cutanée (histo + IFD) + NFS, CRP, créat, protéinurie, FAN, ANCA, cryo, complément. Purpura rhumatoïde (Henoch-Schönlein) : enfant, IgA, post-infectieux, atteinte rénale 10-40 % à rechercher."
  },

  /* ============ 5. MALADIES BULLEUSES AUTO-IMMUNES ============ */
  {
    img: "pemphigoide.jpg", theme: "Bulleuses",
    question: "Sujet > 70 ans : bulles TENDUES sur base érythémateuse/urticarienne, prurit, Nikolski négatif. Diagnostic ?",
    options: ["Pemphigoïde bulleuse", "Pemphigus vulgaire", "Dermatite herpétiforme", "Porphyrie"],
    answer: 0,
    explanation: "Pemphigoïde bulleuse (MBAI la + fréquente, sujet âgé) : bulles TENDUES sous-épidermiques, Nikolski −, anti-BP180/BP230. Confirmation = IFD péri-lésionnelle (IgG + C3 LINÉAIRE, milieu de Michel). R/ : dermocorticoïdes puissants (clobétasol) ± cortico générale ; immunosuppresseurs ; rituximab si résistance."
  },
  {
    img: "pemphigus.jpg", theme: "Bulleuses",
    question: "Bulles FLASQUES, érosions buccales douloureuses traînantes, Nikolski POSITIF, acantholyse. Diagnostic ?",
    options: ["Pemphigus vulgaire", "Pemphigoïde bulleuse", "Impétigo", "SSSS"],
    answer: 0,
    explanation: "Pemphigus : bulles FLASQUES intra-épidermiques (acantholyse), Nikolski +, débute aux MUQUEUSES. IFD : IgG + C3 « en résille ». Anti-desmogléine (Dsg3 muqueux, Dsg1 cutané, suit l'activité). R/ : RITUXIMAB d'emblée (anti-CD20). ⚠️ Distracteurs faux : « bulles tendues », « ciclosporine PO »."
  },
  {
    img: "dermatite-herpetiforme.jpg", theme: "Bulleuses",
    question: "Vésicules très prurigineuses, groupées, symétriques sur coudes/genoux/fesses, associées à une entéropathie. Diagnostic ?",
    options: ["Dermatite herpétiforme", "Herpès", "Pemphigoïde bulleuse", "Eczéma"],
    answer: 0,
    explanation: "Dermatite herpétiforme : dermatose bulleuse très prurigineuse des faces d'extension, liée à la maladie cœliaque (gluten). NON herpétique, NON paranéoplasique. IFD : dépôts d'IgA GRANULEUX (papilles dermiques). R/ : dapsone (sulfones) + régime sans gluten."
  },

  /* ============ 6. CONNECTIVITES ============ */
  {
    img: "lupus-aigu.jpg", theme: "Connectivites",
    question: "Érythème en « loup »/vespertilio des pommettes et du nez, photo-aggravé, avec atteinte systémique. Diagnostic ?",
    options: ["Lupus érythémateux aigu (systémique)", "Rosacée", "Dermatite séborrhéique", "Érysipèle du visage"],
    answer: 0,
    explanation: "Lupus aigu (LES) : érythème en vespertilio, photosensible, atteinte systémique (rein ++, SNC, cytopénies). FAN + (> 95 %), anti-ADN natif (spécifique), anti-Sm. R/ : photoprotection 50+ tous les jours + hydroxychloroquine ; si systémique → cortico générale + immunosuppresseurs. Lupus néonatal → BAV (anti-Ro/SSA)."
  },
  {
    img: "lupus-discoide.jpg", theme: "Connectivites",
    question: "Plaques bien limitées des zones photo-exposées : érythème + hyperkératose folliculaire + atrophie CICATRICIELLE. Diagnostic ?",
    options: ["Lupus érythémateux discoïde (chronique)", "Psoriasis", "Dermatite séborrhéique", "Rosacée"],
    answer: 0,
    explanation: "Lupus discoïde (chronique) : atrophie cicatricielle dépigmentée, alopécie cicatricielle, FAN souvent NÉGATIFS, atteinte purement cutanée (meilleur pronostic). R/ : photoprotection 50+ + dermocorticoïdes → hydroxychloroquine (E2 : rétinopathie, contrôle ophtalmo/an). ⚠️ La cortico GÉNÉRALE n'est PAS le traitement du lupus chronique."
  },
  {
    img: "dermatomyosite.jpg", theme: "Connectivites",
    question: "Papules violines en regard des articulations des doigts + érythème péri-orbitaire, avec déficit musculaire proximal. Diagnostic ?",
    options: ["Dermatomyosite", "Lupus", "Lichen plan", "Psoriasis"],
    answer: 0,
    explanation: "Dermatomyosite : papules de Gottron + érythème héliotrope + aspect flagellé du tronc ; déficit proximal symétrique, ↑ CPK, EMG myogène. Anti-Mi2 (bon px), anti-TIF1 (cancer), anti-MDA5 (pneumopathie). Paranéoplasique chez l'adulte → bilan néo. R/ : cortico générale + MTX. ⚠️ Pas d'antimalariques (= lupus)."
  },
  {
    img: "morphee.jpg", theme: "Connectivites",
    question: "Plaque indurée scléreuse blanc-ivoire au centre, bordée d'un halo lilacé, SANS Raynaud. Diagnostic ?",
    options: ["Morphée (sclérodermie localisée)", "Sclérodermie systémique", "Vitiligo", "Nécrobiose lipoïdique"],
    answer: 0,
    explanation: "Morphée = sclérodermie en plaques, reste CUTANÉE, évolution favorable. Plaque ivoire à liséré lilacé, disparition des poils/sécrétions. R/ : dermocorticoïdes (± analogue vit. D, tacrolimus). ⚠️ « la fausse » : pas de complication systémique, pas de Raynaud, pas d'anti-Scl70/centromère (ça = sclérodermie systémique)."
  },
  {
    img: "sclerodermie-syst.jpg", theme: "Connectivites",
    question: "Sclérodactylie (doigts effilés indurés), phénomène de Raynaud, microstomie, télangiectasies. Diagnostic ?",
    options: ["Sclérodermie systémique", "Morphée", "Dermatomyosite", "Maladie de Raynaud isolée"],
    answer: 0,
    explanation: "Sclérodermie systémique : Raynaud (95 %, triade blanc-bleu-rouge), sclérodactylie, atteintes viscérales (œsophage, fibrose pulmonaire = grande cause de décès, rein). FAN + ; anti-centromère = bon pronostic (formes limitées), anti-Scl70 = mauvais pronostic (formes diffuses)."
  },

  /* ============ 7. TUMEURS ============ */
  {
    img: "keratose-seborrheique.jpg", theme: "Tumeurs",
    question: "Sujet > 50 ans : lésion en relief, surface rugueuse, brune/noire, d'aspect « posé sur la peau » (se détache). Diagnostic ?",
    options: ["Kératose séborrhéique (bénigne)", "Mélanome", "Carcinome basocellulaire", "Kératose actinique"],
    answer: 0,
    explanation: "Kératose séborrhéique : tumeur bénigne, superficielle (semble collée/posée), TOUJOURS bénigne, ne dégénère JAMAIS (même au cuir chevelu). R/ : cryothérapie si gêne esthétique ; curetage + histologie si doute. ⚠️ Faux : « peut dégénérer » / « jamais sur le cuir chevelu »."
  },
  {
    img: "hemangiome.jpg", theme: "Tumeurs",
    question: "Nourrisson : tumeur rouge « en fraise » ABSENTE à la naissance, apparue puis grandissante. Diagnostic ?",
    options: ["Hémangiome infantile", "Angiome plan (tache de vin)", "Botriomycome", "Mélanome"],
    answer: 0,
    explanation: "Hémangiome infantile : tumeur vasculaire bénigne, ABSENTE à la naissance puis prolifère (3-9 mois) → régression. R/ : abstention + surveillance ; propranolol PO UNIQUEMENT si gêne fonctionnelle (péri-orificiel), ulcération ou risque vital (bilan cardiaque). ⚠️ ≠ angiome plan (malformation congénitale, plane, Sturge-Weber si V1)."
  },
  {
    img: "bcc.jpg", theme: "Tumeurs",
    question: "Papule perlée translucide, télangiectasies, parfois ulcérée (ulcus rodens), zone photo-exposée du sujet âgé. Diagnostic ?",
    options: ["Carcinome basocellulaire", "Carcinome spinocellulaire", "Mélanome", "Naevus"],
    answer: 0,
    explanation: "CBC : perle translucide + télangiectasies, malignité LOCALE (pas/peu de métastases), cancer le + fréquent. R/ : CHIRURGIE en 1ʳᵉ intention (marges contrôlées). CBC superficiel du tronc : imiquimod 5×/sem ou PDT. ⚠️ Un CBC du visage → chirurgie, PAS imiquimod."
  },
  {
    img: "scc.jpg", theme: "Tumeurs",
    question: "Lésion kératosique ulcéro-bourgeonnante, indurée, à croissance rapide, sur zone photo-exposée. Diagnostic ?",
    options: ["Carcinome spinocellulaire (épidermoïde)", "Carcinome basocellulaire", "Kératose séborrhéique", "Verrue"],
    answer: 0,
    explanation: "CSC : tumeur indurée ulcéro-bourgeonnante, potentiel MÉTASTATIQUE (≠ CBC). FR : UV, immunodépression, plaie chronique, HPV, radiations. Précurseurs : kératose actinique, maladie de Bowen (CSC in situ). R/ : CHIRURGIE en 1ʳᵉ intention (pas de crème/PDT)."
  },
  {
    img: "keratose-actinique.jpg", theme: "Tumeurs",
    question: "Petites lésions rugueuses « plus palpables que visibles », sur peau photo-vieillie (front, crâne chauve). Diagnostic ?",
    options: ["Kératose actinique (précancéreuse)", "Kératose séborrhéique", "Verrue", "Lupus"],
    answer: 0,
    explanation: "Kératose actinique : lésion PRÉCANCÉREUSE, marqueur d'UV cumulés, peut évoluer vers un CSC. R/ ponctuel : cryothérapie ; multiple (« traitement de champ ») : PDT, imiquimod, 5-fluorouracile. ⚠️ La PUVAthérapie n'est PAS un traitement de la KA."
  },
  {
    img: "melanome.jpg", theme: "Tumeurs",
    question: "Lésion pigmentée asymétrique, bords irréguliers, polychrome, > 6 mm, évolutive. Diagnostic ?",
    options: ["Mélanome", "Naevus banal", "Kératose séborrhéique", "Carcinome basocellulaire pigmenté"],
    answer: 0,
    explanation: "Mélanome — ABCDE (Asymétrie, Bords, Couleurs, Diamètre > 6 mm, Évolution) + « vilain petit canard ». Pronostic = indice de BRESLOW + ulcération + mitoses. R/ : EXÉRÈSE complète + anapath (JAMAIS de laser) ; ganglion sentinelle si Breslow > 0,8 mm ; stades avancés : anti-BRAF/MEK, immunothérapie (anti-PD1/CTLA4). Ongle : strie LONGITUDINALE."
  },
  {
    img: "naevus.jpg", theme: "Tumeurs",
    question: "Lésion pigmentée régulière : symétrique, bords nets, couleur homogène, stable. Diagnostic ?",
    options: ["Naevus mélanocytaire bénin", "Mélanome", "Carcinome basocellulaire", "Kératose actinique"],
    answer: 0,
    explanation: "Naevus bénin : symétrique, bien limité, homogène, stable. Surveiller toute MODIFICATION (ABCDE, vilain petit canard). Le naevus à exciser d'office = celui d'apparition récente/modifié → exérèse + anapath (jamais de laser sur un naevus)."
  },
  {
    img: "mycosis-fongoide.jpg", theme: "Tumeurs",
    question: "Plaques érythémato-squameuses fixes, bien limitées, RÉSISTANTES aux dermocorticoïdes, prurit chronique. Diagnostic ?",
    options: ["Mycosis fongoïde (lymphome T cutané)", "Psoriasis", "Eczéma nummulaire", "Maladie de Bowen"],
    answer: 0,
    explanation: "Mycosis fongoïde (lymphome T) : plaques fixes résistantes/récidivantes aux dermocorticoïdes, surtout sans atopie. Confirmation : biopsie + IMMUNOMARQUAGE (immunohistochimie). Sézary = forme érythrodermique (cellules de Sézary). Bon pronostic en général ; PUVAthérapie indiquée."
  },

  /* ============ 8. ANNEXES & PIGMENTATION ============ */
  {
    img: "pelade.jpg", theme: "Annexes & pigmentation",
    question: "Plaque(s) d'alopécie bien limitée(s), peau lisse NON cicatricielle, cheveux « en point d'exclamation » en bordure. Diagnostic ?",
    options: ["Pelade (alopécie areata)", "Teigne", "Lupus discoïde", "Folliculite décalvante"],
    answer: 0,
    explanation: "Pelade : alopécie NON cicatricielle (réversible), auto-immune + génétique + psychogène, cheveux peladiques en point d'exclamation. Associée au vitiligo/thyroïde. R/ : dermocorticoïdes puissants/injections, minoxidil, bolus cortico ± MTX, anti-JAK. ⚠️ Alopécies CICATRICIELLES = lichen plan, lupus chronique, pseudo-pelade de Brocq, teigne — PAS la pelade."
  },
  {
    img: "vitiligo.jpg", theme: "Annexes & pigmentation",
    question: "Macules ACHROMIQUES (blanc laiteux) bien limitées, symétriques, sans squame. Diagnostic ?",
    options: ["Vitiligo", "Pityriasis versicolor", "Pityriasis alba", "Lèpre"],
    answer: 0,
    explanation: "Vitiligo : hypopigmentation auto-immune (perte des mélanocytes), bien limité, Koebner +. Associé au diabète de type 1 et aux thyroïdites auto-immunes → bilan. R/ : dermocorticoïdes alternés au tacrolimus ; photothérapie UVB TL01 (≠ PUVA) ; anti-JAK + UV. DD : pityriasis alba (DA, mal délimité)."
  },

  /* ============ 9. GRANULOMATEUSES & NEUTROPHILIQUES ============ */
  {
    img: "sarcoidose.jpg", theme: "Granulomateuses & neutrophiliques",
    question: "Papules/nodules infiltrés fermes, infiltrat jaunâtre lupoïde à la vitropression (« gelée de pomme »). Diagnostic ?",
    options: ["Sarcoïdose cutanée", "Lupus", "Granulome annulaire", "Lymphome"],
    answer: 0,
    explanation: "Sarcoïdose (Besnier-Boeck-Schaumann) : granulome épithélioïde SANS nécrose, vitropression lupoïde. Toujours biopsier + bilan pulmonaire. Bio : anergie tuberculinique, ↑ lysozyme + ECA, hypercalcémie. Lupus pernio (nez/oreilles). Löfgren = adénopathies médiastinales + érythème noueux. R/ cutané : antipaludéens ± thalidomide/MTX."
  },
  {
    img: "granulome-annulaire.jpg", theme: "Granulomateuses & neutrophiliques",
    question: "Papules fermes en relief disposées en anneau, SANS squame, dos des mains/pieds, asymptomatique. Diagnostic ?",
    options: ["Granulome annulaire", "Dermatophytie", "Érythème migrant", "Sarcoïdose"],
    answer: 0,
    explanation: "Granulome annulaire : bourrelet papuleux annulaire NON squameux (≠ dermatophytie qui desquame), asymptomatique, enfant/ado. Bénin, régresse parfois après biopsie. Formes disséminées → chercher un diabète. R/ difficile : cortico puissants, antipaludéens, PUVA."
  },
  {
    img: "necrobiose.jpg", theme: "Granulomateuses & neutrophiliques",
    question: "Plaques scléro-atrophiques prétibiales, bordure rouge surélevée, fond jaunâtre, chez une femme. Diagnostic ?",
    options: ["Nécrobiose lipoïdique", "Érythème noueux", "Morphée", "Granulome annulaire"],
    answer: 0,
    explanation: "Nécrobiose lipoïdique : plaques jaunâtres atrophiques prétibiales. Associée au DIABÈTE (80-90 %) → rechercher un diabète. R/ : dermocorticoïdes occlusifs + tacrolimus (difficile). ⚠️ Le contrôle du diabète n'améliore pas les lésions cutanées."
  },
  {
    img: "erytheme-noueux.jpg", theme: "Granulomateuses & neutrophiliques",
    question: "Nouures inflammatoires chaudes, douloureuses, des faces d'extension des jambes, évoluant comme une ecchymose, sans ulcération. Diagnostic ?",
    options: ["Érythème noueux", "Pyoderma gangrenosum", "Érysipèle", "Vascularite nodulaire"],
    answer: 0,
    explanation: "Érythème noueux : hypodermite nodulaire des jambes, douloureuse, JAMAIS d'ulcération/cicatrice. Cause #1 = streptocoque β-hémolytique ; aussi sarcoïdose (Löfgren), MICI, Yersinia, médicaments. R/ : repos en décubitus + R/ étiologique, AINS, colchicine/dapsone. ⚠️ « Étiologie fausse » : gammapathie (= Sweet/PG)."
  },
  {
    img: "pyoderma.jpg", theme: "Granulomateuses & neutrophiliques",
    question: "Ulcération à bordure violacée décollée « tracée au compas », à extension rapide, très DOULOUREUSE, pathergie +. Diagnostic ?",
    options: ["Pyoderma gangrenosum", "Ulcère veineux", "Carcinome", "Ecthyma"],
    answer: 0,
    explanation: "Pyoderma gangrenosum : ulcère DOULOUREUX (⚠️ « indolore » = faux), bordure inflammatoire, pathergie (ne pas débrider !), NON infectieux. Associé : MICI, polyarthrite rhumatoïde, hémopathies (gammapathie IgA). R/ : traiter la maladie associée + dermocorticoïdes/tacrolimus, cortico générale, ciclosporine, anti-TNF."
  },
  {
    img: "sweet.jpg", theme: "Granulomateuses & neutrophiliques",
    question: "Plaques/nodules érythémateux œdémateux « juteux », fièvre élevée, hyperleucocytose à neutrophiles. Diagnostic ?",
    options: ["Syndrome de Sweet", "Érysipèle", "Urticaire", "Lupus aigu"],
    answer: 0,
    explanation: "Syndrome de Sweet (dermatose neutrophilique aiguë fébrile) : plaques infiltrées « pseudo-vésiculeuses », fièvre 40 °C, neutrophilie ; histo = infiltrat neutrophilique SANS vascularite. Para-inflammatoire (MICI), paranéoplasique (hémopathies myéloïdes → suivi/6 mois), médicamenteux. R/ : corticostéroïdes systémiques (effet spectaculaire), colchicine."
  }
];
