# Cahier des charges As2Tel

## 1. Charte graphique et éléments globaux

### 1.1 Arborescence générale

| URL | Titre / description | Notes |
| --- | --- | --- |
| `/` | Accueil | Page d'accueil avec bannière « Vos ambassadeurs au téléphone ». Contient un en-tête fixe, une section héros sombre, plusieurs arguments et des appels à l'action. |
| `/a-propos` | À propos | Page de présentation de l'entreprise. |
| `/services` | Services | Liste les services de télésecrétariat avec navigation latérale. |
| `/tarifs-telesecretariat` | Tarifs | Détail des forfaits et tarifs proposés. |
| `/bureautique` | Bureautique | Services de bureautique associés. |
| `/contact` | Contact | Formulaire de contact et coordonnées. |
| `/tpe`, `/tpe-2` | Télésecrétariat TPE/PME | Pages destinées aux TPE et PME (accessible via « Petite Entreprise »). |
| `/telesecretariat-medical` | Télésecrétariat médical | Page pour cabinets médicaux et professionnels de santé. |
| `/liberale` | Profession libérale | Page pour professions libérales. |
| `/secretariat-juridique` | Secrétariat juridique | Service pour cabinets juridiques. |
| `/secretariat-agence-immobilier` | Secrétariat agence immobilier | Page pour agences immobilières. |
| `/gestion-agenda` | Gestion d'agenda | Service de gestion d'agenda. |
| `/gestion-de-debordement` | Gestion de débordement | Prise en charge des pics d'activité. |
| `/filtrage-d-appel` | Filtrage d'appel | Description du filtrage d'appel. |
| `/consignes-de-telesecretariat` | Consignes de télésecrétariat | Transmission des consignes. |
| `/rappel-de-rdv` | Rappel de rendez-vous | Prise de rendez-vous et rappels. |
| `/service-apres-vente` | Service après vente | Assistance S.A.V. |
| `/accueil-telephonique` | Accueil téléphonique | Service d'accueil téléphonique. |
| `/accueil-telephonique-billingue` | Accueil téléphonique bilingue | Service bilingue français/anglais. |
| `/prise-de-rdv-en-ligne` | Prise de RDV en ligne | Service de réservation en ligne. |
| `/releve-de-standard` | Relève de standard | Exploitation de standard téléphonique. |
| `/as2tel-telesecretariat` | As2Tel télésecrétariat | Page type décrivant le service. |
| `/telesecretariat-1` | Télésecrétariat | Variante d'accueil pour le service. |
| `/blog` | Blog | Hors périmètre du cahier des charges. |

### 1.2 Palette de couleurs

- **Bleu foncé** : arrière-plan de la bannière héros (#17394A env.).
- **Bleu clair** : boutons d'appel à l'action, fonds de section (#7EC8E3 env.).
- **Blanc** : arrière-plan principal (#FFFFFF).
- **Noir / gris foncé** : texte principal (#333333 à #212121).
- **Rose / rouge** : bandeaux d'appel à l'action (#EF5350 env.).

### 1.3 Typographie globale

- Police sans-serif moderne (type Montserrat).
- Titres H1 ~36 px, semi-gras, couleur blanche ou bleu foncé selon le fond.
- Titres H2/H3 ~28 px / 24 px, couleur bleu foncé.
- Paragraphes 16 px, couleur gris foncé.
- Boutons en capitales, bleu clair sur fond blanc ou blanc sur fond bleu foncé, avec survol assombri.

### 1.4 En-tête (header)

- En-tête fixe visible sur toutes les pages.
- Logo As2Tel (casque téléphonique + texte « As2Tel »).
- Menu horizontal : Accueil, À propos, Services, Tarifs, Bureautique, Contact.
- Lien actif en bleu clair.

### 1.5 Pied de page (footer)

- Colonne gauche : adresse (49 rue de Maubeuge 75009 Paris), e-mail (info@as2tel.fr), téléphone (01 84 88 71 02).
- Colonnes centrales : liens rapides vers services (Secrétariat juridique, Télésecrétariat TPE, Maison d'hôtes...).
- Colonne droite : formulaire de newsletter (champ e-mail + bouton « Je m'abonne »).

## 2. Analyse détaillée des pages

### 2.1 Accueil (`/`)

#### Structure

- En-tête fixe avec logo et menu.
- Section héros bleu foncé avec slogan « VOS AMBASSADEURS AU TELEPHONE » et sous-texte « NE PERDEZ PLUS UN APPEL TOUT EN MAÎTRISANT VOTRE IMAGE ».
- Arguments en colonnes : « Zero Engagement », « Zero Frais de Résiliation », « Zero Frais de Dossier », « 55 Heures Par Semaine », « 100% Satisfait ou Remboursé », « 30 jours Essai Gratuit ».
- Bouton CTA rose « TEST GRATUIT ».
- Paragraphe explicatif sur l'externalisation de l'accueil téléphonique.
- Trois colonnes segment client (Petite entreprise, Médical, Profession libérale) avec icônes et liens « En savoir + ».
- Section « Comment ça marche ? » (étapes numérotées).
- Bloc CTA secondaire : « VOUS AVEZ UN BESOIN PONCTUEL ... ? » + bouton « En savoir + ».

#### Textes clés

1. Slogan principal : « VOS AMBASSADEURS AU TELEPHONE ».
2. Sous-texte : « NE PERDEZ PLUS UN APPEL TOUT EN MAÎTRISANT VOTRE IMAGE ».
3. Arguments : listes des six engagements.
4. Paragraphe d'introduction sur l'externalisation.
5. Cartes sectorielles avec descriptions : Petite entreprise, Médical, Profession libérale, Agence immobilière, Professions juridiques.
6. Processus « Comment ça marche ? » : transfert de ligne, gestion des consignes, transferts urgents, VIP, interface, résiliation.
7. CTA secondaire.
8. Pied de page standard (adresse, e-mail, téléphone, politique de confidentialité).

#### Médias

| Fichier | Emplacement | Dimensions approximatives | Texte alternatif |
| --- | --- | --- | --- |
| `logo-as2tel.svg` | En-tête, à gauche | ~120×40 px | « As2Tel » |
| `Telesecretariat.jpg` | Section héros | Pleine largeur (~1400×500 px) | N/A (fond) |
| `icon-petite-entreprise.png` | Carte « Petite entreprise » | ~100×100 px | « Petite entreprise » |
| `med.gif` | Carte « Médical » | ~100×100 px | « Médical » |
| `icon-liberale.png` | Carte « Profession libérale » | ~100×100 px | « Profession libérale » |
| `agence-2.png` | Carte « Agence immobilière » | ~100×100 px | « Agence immobilière » |
| `OEVLWU0.jpg` | Section « Comment ça marche ? » | Illustration circulaire | N/A |
| `chat-widget.png` | Widget chat bas de page | 60×60 px | Sans texte |

#### Interactions

- Menu : survol en bleu clair, navigation vers les pages correspondantes.
- Bouton « TEST GRATUIT » : mène au formulaire d'essai gratuit (scroll ou pop-up).
- Liens « En savoir + » : redirection vers pages sectorielles.
- Widget de chat : ouvre une fenêtre de discussion.

### 2.2 À propos (`/as2tel-telesecretariat`)

- Titre « As2Tel ».
- Paragraphes sur l'importance de l'accueil téléphonique et l'amélioration continue.
- Liste de bénéfices : sans engagement, appels prépayés, suivi de consommation, statistiques mensuelles, essai gratuit 30 jours, pas de frais de dossier.
- Pied de page standard.

### 2.3 Services (`/telesecretariat-1`)

- Introduction au télésecrétariat sur mesure.
- Liste visuelle des services : Accueil téléphonique, Gestion d'agenda, Bilingue, RDV en ligne, Rappel de RDV, Filtrage d'appel, Consignes, Relève de standard, Gestion de débordement.
- Bloc « Essai Gratuit » (30 jours, sans engagement) avec formulaire.
- Pied de page standard.

### 2.4 Tarifs (`/tarifs-telesecretariat`)

- Bénéfices rappelés (sans engagement, suivi en ligne, changement de plan, statistiques, pas de surprises, essai gratuit 30 jours, pas de frais de dossier, activation rapide, paiement CB sécurisé).
- Note : rappels SMS limités aux appels pris.
- Processus d'activation en quatre étapes (formulaire, rappel sous 2h, compte prêt en <1h, transfert d'appels et essai gratuit 30 jours).
- Instructions pour souscrire après essai (choix du plan, paiement CB).
- Pied de page standard.

### 2.5 Bureautique (`/bureautique`)

- Titre « ASSISTANCE ADMINISTRATIVE » + slogan « OPTIMISEZ VOS RESSOURCES POUR MAXIMISER VOS RESULTATS ».
- Paragraphe sur l'externalisation des tâches administratives.
- Prestations avec tarifs : courriers/saisie (25 €/h), correction (5 € par page A4), tableaux Excel (12 €/h), bases de données (0,10 € par saisie), PowerPoint (2 €/page), retranscription audio (25 € par 10 min audio), traduction FR-EN (25 € par page A4).
- Pied de page standard.

### 2.6 Contact (`/contact`)

- Titre « Toujours à votre écoute ».
- Texte invitant au contact (téléphone, e-mail, formulaire).
- Formulaire (nom, e-mail, société, message) avec message de confirmation « Thanks! Message sent ».
- Pied de page standard.

### 2.7 Sous-pages de services

Chaque sous-page reprend : titre H4, menu de navigation des services, paragraphe descriptif, formulaire d'essai gratuit (30 jours), pied de page standard.

- **Accueil téléphonique** : personnalisation via consignes, logiciel de remontée de fiches.
- **Gestion d'agenda** : agenda partagé, multi-ressources, synchronisation Gmail/Outlook, consultation mobile.
- **Service après-vente** : procédures définies en amont, renfort ponctuel, possibilité de suspension, essai gratuit 30 jours.
- **Accueil bilingue** : permanence téléphonique bilingue, anglais inclus sans surcoût.
- **Prise de RDV en ligne** : module 24/7, visibilité sur créneaux libres, synchronisation en temps réel.
- **Rappel de RDV** : rappels par mail/SMS 12/24/48h, optimisation du planning.
- **Filtrage d'appel** : application des consignes de filtrage, transferts sélectifs.
- **Consignes** : envoi via agenda, application immédiate, avantages (durée de rendez-vous, type de rendez-vous).
- **Relève de standard** : transfert en cas de non-réponse, contrôle permanent, organigramme disponible.
- **Gestion de débordement** : bascule en cas de saturation, comptes rendus par mail/SMS/espace client.

### 2.8 Pages sectorielles

- **TPE / PME** : bannière « Le Télésecrétariat qui répond à vos besoins », services (accueil téléphonique, SAV, filtrage, prise de RDV, accueil bilingue, consignes), fonctionnement (transfert d'appels, essai gratuit 30 jours, agenda en ligne), avantages marketing (« ACTIVATION SIMPLE & RAPIDE », « SANS ENGAGEMENT », « ZERO FRAIS DE DOSSIER », « 49 € PAR MOIS »).
- **Télésecrétariat médical** : prise en charge des appels, gestion d'agenda, consignes, prise de RDV en ligne, rappel de RDV, filtrage, engagements qualité (80 % des appels <1 min, décrochés en 5 sonneries), essai gratuit, accès aux enregistrements, CTA « J'ESSAYE ».
- **Profession libérale** : permanence téléphonique, accueil, agenda, RDV en ligne, bilingue, activation (formulaire, paramétrage, transfert, essai gratuit 30 jours).
- **Agence immobilière** : gestion des appels, réponses personnalisées et commerciales, bilingue, efficacité/coûts, sans engagement, activation standard, essai gratuit 30 jours.
- **Professions juridiques** : accueil, agenda, RDV en ligne, bilingue, activation standard, essai gratuit 30 jours.
- **Maison d'hôtes** : permanence dédiée, accueil, RDV en ligne, agenda, bilingue, activation standard, essai gratuit 30 jours.

### 2.9 Politique de confidentialité (`/politique-de-confidentilalite`)

- Collecte des données via formulaires (nom, e-mail, téléphone, adresse) pour relation client.
- Utilisation interne, pas d'usage commercial sans consentement.
- Case de consentement obligatoire.
- Information sur les cookies (durée de vie, bandeau d'information, lien « en savoir plus »).
- Transmission possible à des tiers sous-traitants soumis à la loi.
- Conservation des données 3 ans.
- Transmission aux autorités sur requête.
- Droits utilisateurs (accès, rectification, opposition, suppression) selon Loi Informatique et Libertés et RGPD.
- Protection via certificat SSL, engagement de sécurité, sans garantie totale.
- Possibilité de réclamation auprès de la CNIL.
- Modifications possibles, dernière mise à jour 24 mai 2018.

## 3. Éléments graphiques fournis

- `logo-as2tel.svg` : logo principal As2Tel.
- `favicon.ico` : icône du site.
- `Telesecretariat.jpg` : image héros pour la page d'accueil.
- `OEVLWU0.jpg` : illustration pour la section « Comment ça marche ? ».
- `med.gif` : icône secteur médical.
- `agence-2.png` : icône secteur agence immobilière.

Ces éléments sont à intégrer conformément à la charte graphique décrite ci-dessus.
