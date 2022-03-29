const Discord = require("discord.js")
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const Demarrer = require("./server")
Demarrer()
client.login(process.env.TOKEN)

client.on("ready", () => {

let testChannel = client.channels.cache.get("907198710121889862") //changer l'id du channel

console.log('yes')

setInterval(() => {
let bd = [
"Définition : Dématérialisation ? \n réponse : || passer d'une uniter physique as une unitére virtuelle, passez de document physique as des documents numériques qui suive un processus ||",

"Méthodo : Quatres finalités d'une Ɇ ? \n réponse : ||économique, social, écologique et sociétal||",

"Méthodo : Ressources d'une Ɇ ? \n réponse : ||ressource tangible(financier, matérielle et humain/effectif) et ressource intangible(immatérielle, technologique et humaine/compétence||",

"Définition : Environnement ? \n réponse : ||élément externe à l'entreprise, il est incertain, imprévisible donc incontrôlable. L'entreprise doit s'y adapter||",

"Définition : Place de marché ? \n réponse : ||Une place de marché met en relation, via une plateforme d&#39;échange sur Internet, des agents économiques qui souhaitent échanger entre eux des biens ou des services.|| ",

"Définition : ubérisation ? \n réponse : ||L’ubérisation correspond à l’émergence de plateformes digitales mobiles sur lesquelles clients et prestataires peuvent entrer en contact directement, gratuitement et en temps réel.|| ",

"Définition : norme & standard ? \n réponse : ||Une norme est une regle juridique qui certifie l'offre / un stardard est un accord professionnel sur une manière de faire sur des pratiques et du marché|| ",

"Définition : yield management ? \n réponse : ||Calcul du prix selon la disponibilité de l'offre / Systeme de gestion tarifaire en fonction de la place. Systeme dans les organisations ferroviere et d'aviation|| ",

"Définition : les 5 modèles économiques ? \n réponse : ||Low cost(modele qui se base sur l'offre de produit standardisé du a la redefinition des besoins vers plus de simplicité)\nGratuité(contenu gratuit se remunérant grace à la commu, la monétisation ou les pubs)\nPlatforme(met en relation acheteur/vendeur avec commission)\nStandard/Traditionel/Classique(offre rencontrant demande selon un consentement commercial)\nFreemium(premier produit gratuit pour attirer, cherche a transformer ces utilisateurs en client avec une offre plus enrichi et payant)|| ",

"Définition : le droit d'auteur ? \n réponse : ||protection donnée à une œuvre originale de l’esprit, elle se décompose en droit moral et droit patrimonial|| ",

"Définition : les rôles de la CNIL ? \n réponse : ||Obligation d'information, de controle, analyse/anticiper, representation|| ",

"Définition : Start-up ? \n réponse : ||Entreprise de la nouvelle economie qui offre des services avec des moyens innovants, mutantes / nonmutantes|| ",

"Définition : réintermédiation ? \n réponse : ||apparition de nouveaux intermédiaires face à un marché complexe et lutter contre les risques|| ",

"Définition : désintermédiation ? \n réponse : ||disparition de certain intermédiaires sur un marché|| ",

"Définition : les trois types de marché ? \n réponse : ||monopole(1 boss sur le marché)/oligopole(20% des mecs on le plus gros marché contre 80% qui se batte)/conccurentiel (atomisé)|| ",

"Définition : réseau social ? \n réponse : ||ensemble de page web permettant de se creer un cercle d'amis ou professionnel|| ",

"Définition : plateforme ? \n réponse : ||Service ayant une fonction d’intermédiaire dans l’accès aux informations, contenus, biens ou services édité ou fournis par des tiers|| ",

"Définition : stratégie de gamme et de prix ? \n réponse : ||Haut de gamme : prix d'ecremage (prod unitaire ou a la demande, c'est de forte qualité)\nMilieu de gamme : prix d'alignement (cout de prod par prix cible, on anticipe le prix puis on produit vite)\nEntree de gamme : prix de penetration (couts de prod faible car prod de masse, faible qualité)|| ",

"Définition : logiciel ? \n réponse : ||Ensemble de programme, procédé, règle relatif au traitement d'un ensemble de données|| ",

"Définition : base de données ? \n réponse : ||Ensemble d'elements indépendants ordonnée de manière structuré, hierarchisé, systematique et methodique et dont chaque element est accessible individuellement par un moyen electronique ou autre|| ",

"Définition : site web ? \n réponse : ||Ensemble de page web et de ressources numeriques accessible depuis une URL contenant un nom de domaine|| ",

"Définition : nom de domaine ? \n réponse : ||C'est comme une adresse rurale pour un site internet|| ",

"Définition : contrat ? \n réponse : ||Convention qui lie deux parties|| ",

"Définition : les trois modes de production ? \n réponse : ||Production de masse (produits standardisé a la chaine, c'est une economie d'echelle, il y a une rationalisation des ressources)\nProduction en série (prod a la demande avec précision, elle peut etre continue ou discontinue, il y a une commande de l'acheteur)\nProduction unitaire(offre integralement personalisé, unique et a prix élevé)|| ",

"Définition : économie collaborative ? \n réponse : ||Modele social economique basé sur l'echange et le partage de bien/service/connaissance en C to C|| ",

"Définition : économie d'échelle ? \n réponse : ||Produire beaucoup pour payer moins, le cout de prod est dilué par la quantité produite|| ",

"Définition : effet de réseau ? \n réponse : ||Pouvoir d'attraction, valeur d'un bien/services qui croit en fonction du nb d'users|| ",

"Citez le PESTEL+3 ! \n réponse : ||Le classique plus Culturel, Temporel, Demographique||",

"Définition : intermédiation ? \n réponse : ||utilisation d’intermédiaire pour les échanges entre acteurs || ",

"Définition : Connaissance ? \n réponse : ||Ensemble d'information réutilisable|| ",

"Définition : Information ? \n réponse : ||Ensemble de données organisé ayant un sens|| ",

"Définition : Données? \n réponse : ||Plus petite unité qui compose l'information, 01010101|| ",

"Trois piliers économique du numérique ? \n réponse : ||Technologique (Big Data ou voiture connecté), Economique (Startup) et Sociale(Reseau sociaux)|| ",

"Donnez les acteurs du marché ? \n réponse : ||Entreprises (B), Particuliers (C), (A) ou (G) pour les pouvoirs publiques||",

"Difference entre innovation de marché et innovation de l'offre ? \n réponse : ||l'innovation de marché crée un nouveau marché \n l'innovation de l'offre correspond à une amélioration d'un produit existant|| ",

"Citez les trois types d'entreprises et les definir (ex : Pure-player) ? \n réponse : ||Il y a le Pure-player, unité commercialle virtuelle \n le Brick and mortar, unité commercialle physique \n le Click and mortar qui est les deux || ",

"Difference entre start-up mutante et non-mutante ? \n réponse : ||la mutante s'appuie sur des évolution sociologique \n la non mutante s'établit sur des secteur traditionnels mais avec des moyens nouveaux|| ",

"Définition : E-Commerce ? \n réponse : ||Commerce virtuelle|| ",

"Définition : E-Réputation ? \n réponse : ||C'est la réputation en ligne|| ",

"Définition : Externalité ? \n réponse : ||c'est la conséquence de l'activité économique d'un acteur sur les autres acteurs|| ",

"Maths : Qu'est ce qu'un circuit ? \n réponse : ||c'est un chemin ayant pour extrémité initiale et finale le même sommet|| ",

"Maths : Qu'est ce qu'un chemin hamiltonien ? \n réponse : ||C'est un chemin passant par tout les sommets une seule fois|| ",

"Maths : Condition pour l'existance d'un produit matricielle ? \n réponse : ||A*B existe si le nombre de colonne de A est égale au nombre de ligne de B|| ",

"Définition : Monopole naturelle de fait? \n réponse : ||monopole s'étant constituer grâce à son pouvoir d'attraction sur les utilisateur|| ",

"Méthodo : Business Model ? \n réponse : ||Qui? Quoi? Comment? Combien?||",

"Trois leviers de obtenir un avantage conccurenciel \n réponse : ||l’innovations (produit, procédé(marché))\nla qualité\nles coûts||",

"Avantages du yield management \n réponse : ||prévision des prix selon le remplissage\nadaptation du taux de remplissage par modulation de prix\nprix attractif en début de remplissage\nforte rentabilité unitaire en fin de remplissage\nadaptation des prix par période||",

"2 avantages et désavantages de l'ubérisation \n réponse : ||Avantages :\nl’ubérisation a permis de faire baisser les prix pour le bien des consommateurs\nattirent des clients qui n’avaient pas l’habitude d’utiliser ce type de service\nDésavantages :\nConcurrence faussé\nIl y a un contournement de la reglementation||",

"Les nouveaux métiers du numériques ? \n réponse : ||data miner,data scientist,data manager,data engineer,chief digital officer (CDO),data analyst,cloud broker||",

"les 2 type de contrat ? \n réponse : ||contrat commercial (offreur et demander)\ncontrat de travail (employer et le salarier)||",

"Contrat ? \n réponse : ||c’est une convention qui lie deux parties||",

"La validité du contrat ? \n réponse : ||Il faut le consentement (peux aitre écrie ou tacite), il faut un objet et une capacité||",

"Les vices du contrat ? \n réponse : ||Erreur(nullité partielle)\nDol(nullité partielle)\nViolence(nullité totale)||",

"Exonérations de responsabilité du contrat ? \n réponse : ||Faute de l’autre contractent conduit as la non obligations du contrat\nFaute de la victime si elle est partite au contrat\nCas de force majeur||",

"les 2 type de dommage ? \n réponse : ||patrimonial (cessible(vendable))\nextra patrimonial (incessible)\ncorporel, matériel ou moral||",

"quel sont les deux type de preuve ? \n réponse : ||la preuve parfaite (acte national)\nla preuve imparfaite (les aveux)||",

"Méthode syllogisme ? \n réponse : ||Les faits avec problématique : (Identifications des partite + leur qualification,Le résumé des faits,Le problème )\nmajeur :Règle de droit (chercher la lois)\nmineur :Solutions condamnations ou relaxe (donner le motif de la décisions)||",

"les différentes décisions (méthode analyser la prise de décisions) ? \n réponse : ||cours terme :opérationnel(0 à 2 ans)\nmoyenne terme :tactique(2 à 5 ans)\nlong terme: stratégique(5 à 10 ans)||",

"diagnostique interne ? \n réponse : ||Force/faiblesses (donne les partie prenante entre parantése apprer avoir exposer la force ou la faiblesses)||",

"diagnostique externe ? \n réponse : ||opportunités/menaces(mettre le PESTEL : texte trouver dans les doc)||",

"Les 7 parties prenantes ? \n réponse : ||Les dirigeants , les actionnaires, les salariés, partenaire économique , fournisseur , les distributeurs, pouvoir public(état collectivité territorial)||",

"caractériser une organistion ? \n réponse : ||tangible(ressource matérielle(locaux,outils de producitons),financier(CA, rentabilité,emprunt),humain(effectif))/intangible(ressource imatérielle(contrat,partenaire,alliance,licences,brevet),technologique(logiciels,processus),humaine(savoirs et compétences des salariés))||",

"Definition : IA ? \n réponse : ||C'est l'ensemble des théories et des techniques développant des programmes informatique complexe capable de simuler certains traits de l'intelligence humaine (raisonnements, apprentissage..) ex SIRI||",

"Definition : Identité numérique ? \n réponse : || L'ensemble des éléments sur un support technologique qui sont relatif à une personne réelle.||",

"Les deux droits qui regissent le droit d'auteur ? \n réponse : ||Droit patrimonial (Cessible/Saisissable/Transmissible évaluable pécuniairement et dure 70 ans apres mort)\nDroit moral (Incessible/Insaisissable/Perpetuel)||",

"Les droits qui regissent le droit patrimonial ? \n réponse : ||Droit de reproduction et representation||",

"Les droits qui regissent le droit moral ? \n réponse : ||Droit de paternité, divulgation, retrait et respect de l'oeuvre||",

"Les 2 droits que peut concéder le producteur d'une BD ? \n réponse : ||Le droit d'extraction et de reutilisation||",

"Les 3 organisation qui protegent le logiciel ? \n réponse : ||AFNIC / INPI / APP||",

"Recevabilité d'une preuve electronique ? \n réponse : ||De pouvoir identifier les parties (avec signature electronique) et de pouvoir garantir l'intégrité du message||",

"Droit de rétraction ? \n réponse : ||mettre les frais de retour a la charge du client (sous 14 jours ou 14 jours et 1an si le vendeur ne l'avait pas mentionné||",

"Les 3 principaux contrats de prestation informatique ? \n réponse : ||Etude et conseil\nProduction et maintenance\nSaaS et/ou Cloud Computing||",

"Obligation des contrats de prestation de service numérique ? \n réponse : ||Conseil, assistance et délivrance||",

"Point commun entre la signitaure autographe et électronique ? \n réponse : ||Ils sont équivalent juridiquement/fonctionnellement||",

"2 avantages et désavantages de la dématérialisation \n réponse : ||Avantages :\nAméliore la productivité avec better gestion de l'info\nRéduction des couts et sécurisation des données\nDésavantages :\nrisque de perte des données\nDifficile de maitriser l'e-reputation||",

"Economie de partage ? \n réponse : ||L’économie du partage désigne généralement les nouveaux modes de consommation permettant de partager entre consommateurs l’usage ou la consommation de produits, équipements ou services. ||",

"2 avantages et désavantages de l'economie de partage ? \n réponse : ||Avantages :\nfavorise création de nouvelle entreprise\nmeilleur consommation locale et durable\nDésavantages :\nconccurence déloyale\nmoindre protection juridique||",

"Dispositions pour une Entreprise au sujet du RGPD ? \n réponse : ||obtenir le consentement des personnes concernés\ndefinir finalités du fichier\nsécuriser les données\nlimiter la collecte aux seules données pertinentes, conservation sur durée justifiée\nrespect du droits des personnes(acces,rectification,opposition,dereferencement (AROD))||",

"Droits du RGPD vis a vis des clients ? \n réponse : ||Droit de portabilité(récup ses données), notification(en cas de piratage), intenter une action de groupe, réparation du dommage si attaque ou perte||",

"Information relatif à la vie reelle d'une personne ? \n réponse : ||Nom, Prenom, Numero INSEE, Numero tel, Adresse||",

"Information relatif à la vie virtuelle d'une personne ? ? \n réponse : ||Nom user, adresse IP, Email, Photos||",

"Réparation du dommage ? \n réponse : ||Réparation en nature (remettre à la base) et équivalent (avec des thunes)||",

"Exonérations de responsabilité du dommage ? \n réponse : ||faute de la victime\nfaute du tier\nforce majeur||",

"quelle sont les 5 type de performance ? \n || on as le financière (rentabilité), commercial (CA et vente), écologique (développement durable), social (salarié), organisationnelle (méthode de travaille et les outils technologique)||",

"système d’info repose sur trois élément essentielle qui sont ? \n ||collecter des informations stocker des informations traiter des informations||",

"quelle sont Les stratégie des entreprises (il y en as 3) ? \n ||stratégie concurrentielle : dominations par les coût c'est à dire avoir des prix de vente inférieur as ces concurrent,la différenciations, stratégie différenciations : créer de la valeur avec un élément distinctif dans l'esprit du consommateur(avantage concurrentielle a troi levier : quantité,coût, innovations  ),stratégie de focalisations : orienter l’activité sur une niche(ça peut être le haute gamme, les innovations informatique(SSII))||",

"quelle sont les stratégie globale (il y en as 4) ? \n ||la spécialisations se concentrer sur un métier (bic par ex); la diversifications développer plusieur activités conjointe (ex: multimédia,BUIG), on dit aussi maison mère ;externalisations faire appel à un prestataire extérieur (sous traitance);intégrations étendre l'activité de l’entreprise en rachètent ces fournisseur ou les revendeurs (ex : ouvrire des boutique  )||",

"qu'est que la flexibilité ? \n ||la flexibilité c'est la capacité d'une entreprise à s'adapter à son environnement.||",

"quelle sont les différent type de flexibilité (il yen as 4) ? \n ||flexibilité temps de travaille (ex 3X8H); flexibilité des compétence (ex:ingénieur,exécutent en même temps);flexibilité de la localisations (ex avoir les fournisseur proche de l’usine de prod);flexibilité des effectife(ex: faire appelle à des intérimaire) ||",

"qu'est que une configurations souple du travaille ? \n ||peu de hiérarchie;de la communication informelle (non officielle ); décentralisation des décisions  ||",

"quelle sont les diférente type de dirigant ? \n ||autoritaire impositions des régle; paternaliste : impositions des régle mais système de récompense ;consultatif : l’avie des salariés est demandé ; participatif : prise de décisions constante;laisser faire: anarchie ||",

"quelle sont les 6 modes de coordinations d'appret mintz berge ? \n ||-ajustement mutuel : les salariés s'organise et décident en commun; supervisons directe : la hiérarchie contrôle régulièrement le travaille des salariés; standardisations des procéder de travaille : méthode de travaille définie à l'avance et appliquer aux salariés; standardisations des qualifications : les compétences des salariés justifient une forme d’autonomie, reconnaissance des compétences. ;standardisations des résultat : les objectife sont fixés et évaluable; standardisations des normes : des règles très contraignante sont imposés ||",

"quelle sont les risque émie par mintz berge ? \n ||-risques malveillance (de la par des salariés(principal acteur) ou venant de l'extérieur  ou interne); risque juridique (non respect de la réglementations) responsable : dirigent puis les salariés; risque financier (lié au investissement actif matérielle ou immatérielle et le défaut de formations) ; risque opérationnelle (se sont les pane et la technique) ; risque stratégique  (se sont les dirigent qui peuvent prendre de mauvaise décisions et la concurrence) ; risque sociaux (se sont les salariés et les partie prenante externe, il peut être les gréve, la résistance aux changement et les mode de vie)||",

"Marché ? \n||Lieu rencontre virtuel ou reel entre offre et demande avec prix d'équilibre||",

"Définir le Marché du travail \n||L'offre est le travail, donc on offre sa force de travaille contre une rémunération, or par conséquent on demande l'emploi\nOn dit que le marché du travail tourne dans le sens économique||",

"Définir le Marché de l'emploi \n||L'offre est l'emploi, donc le chef offre un poste au sein de son entreprise, par conséquent on demande la force de travaille\nOn dit que le marché de l'emploi tourne dans le sens courant||",

"Facteurs responsables des transformations du marché du travail ? \n ||Nouvelle technologie\nConccu internationiale\nTertiarisation et féminisation de l'emploi\nPopulation + en + diplomé au fil des années||",

"Définir le secteur primaire \n||Un secteur primaire comprend des emplois stables et qualifiés, des salaires élevés et des possibilités de promotions pour les travailleurs : les insiders||",

"Définir le secteur secondaire \n||Un secteur secondaire qui porte sur des emplois précaires, peu qualifiés, aux salaires bas, sans promotions véritablement possibles : les outsiders.||",

"Le marché du travail français aujourd'hui ?\n||Taux de chomage élévé\nPrivilège du diplome requis\nDifficile pour les jeunes ayant peu d'expérience\nBeaucoup de salarié au SMIC qui ne favorise pas l'emploi des secteurs comme le commerce ou la restauration\nBeaucoup de CDD en France||",

"Distinction entre emploi et travail ?\n||L'emploi est le statut -> salarié actif\nLe travail est l'exercice d'emploi||",

"Population actif et inactif ?\n||Actif : Chomeur car recherche emploi, personnes entre 16 et 65 ans disponible pour travailler\nInactif : Etudiants, retraités, handicapés, personnes au foyer||",

"Expliquer chomage et plein emploi\n||Sur le marché du travail(Offre la force travail et demande emploi) : \nChomage = offreur > demandeur\nPlein emploi = offreur < demandeur||",

"Emploi atypique ?\n||CDD, interim\nS'il y a beaucoup d'emploi atypique dans l'entreprise cela conduit a une flexibilité du travail c'est à dire que le licensiement est plus facile, cela réduit les couts et gagner en competivité productif||",

"Donner les deux taux de la séquence 8(poliques de l'emploi)\n||Taux de chomage = chomeurs sur pop active x100\nTaux d'emploi = personnes occupées sur personnes agées de 15 ans et plus x 100||",

"L'etat veut développer l'employabilité des travailleurs avec mise en adéquation de leurs compétences avec les besoins de l'entreprise\nOn peut noter l'idée du revenu universel(alloc mensuellement a tout francais)",

"Objectifs des politiques d'emploi\n||Les interventions publiques définissent les politiques tel que :\nLutter contre le chomage\nEncourager création d'emploi en abaissant cout du travail\nAméliorer competivité des entreprises en abaissant cout main d'oeuvre\nRedynamiser zones en France pour inciter entrprise à s'implanter||",

"Définir les politiques d'emploi actives\n||Objectif : augmenter le niveau d'emploi et favoriser le retour à l'emloi des chomeurs\nExemple : Déploiement formations professionneles ou mise en place contrats aidés||",

"Définir les politiques d'emploi passives\n||Objectif : Atténuer les effets du chomage par le traitement social des situations des travailleurs et ne pas accroitre la demande de travail\nExemple : Evoluation indemnisation et accompagnement, évoluation quantitative de l'offre de travail||",

//Mis a jour jusqu'a la séquence 8
]
let RNG = bd[Math.floor(Math.random() * bd.length)]
testChannel.send(RNG)
}, 5000000);//pour l'intervale c'est la durée en seconde + 1000
})