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
      " @everyone Définition : Dématérialisation ? \n réponse : || passer d'une uniter physique as une unitére virtuelle, passez de document physique as des documents numériques qui suive un processus ||",

      " @everyone Méthodo : Quatres finalités d'une Ɇ ? \n réponse : ||économique, social, écologique et sociétal||",

      " @everyone Méthodo : Ressources d'une Ɇ ? \n réponse : ||ressource tangible(financier, matérielle et humain/effectif) et ressource intangible(immatérielle, technologique et humaine/compétence||",

      " @everyone Définition : Environnement ? \n réponse : ||élément externe à l'entreprise, il est incertain, imprévisible donc incontrôlable. L'entreprise doit s'y adapter||",

      " @everyone Définition : Place de marché ? \n réponse : ||A ajouter|| ",

      " @everyone Définition : ubérisation ? \n réponse : ||A ajouter|| ",

      " @everyone Définition : norme & standard ? \n réponse : ||A ajouter|| ",

      " @everyone Définition : yield management ? \n réponse : ||A ajouter|| ",

      " @everyone Définition : les 5 modèles économiques ? \n réponse : ||A ajouter|| ",

      " @everyone Définition : le droit d'auteur ? \n réponse : ||A ajouter|| ",

      " @everyone Définition : les rôles de la CNIL ? \n réponse : ||A ajouter|| ",

      " @everyone Définition : Start-up ? \n réponse : ||A ajouter|| ",

      " @everyone Définition : réintermédiation ? \n réponse : ||A ajouter|| ",

      " @everyone Définition : désintermédiation ? \n réponse : ||A ajouter|| ",
      
      " @everyone Définition : les trois types de marché ? \n réponse : ||A ajouter|| ",
      
      " @everyone Définition : réseau social ? \n réponse : ||A ajouter|| ",
      
      " @everyone Définition : plateforme ? \n réponse : ||A ajouter|| ",
      
      " @everyone Définition : stratégie de gamme et de prix ? \n réponse : ||A ajouter|| ",
      
      " @everyone Définition : logiciel ? \n réponse : ||A ajouter|| ",
      
      " @everyone Définition : base de données ? \n réponse : ||A ajouter|| ",
      
      " @everyone Définition : site web ? \n réponse : ||A ajouter|| ",
      
      " @everyone Définition : nom de domaine ? \n réponse : ||A ajouter|| ",
      
      " @everyone Définition : contrat ? \n réponse : ||A ajouter|| ",
      
      " @everyone Définition : les trois modes de production ? \n réponse : ||A ajouter|| ",
      
      " @everyone Définition : économie collaborative ? \n réponse : ||A ajouter|| ",
      
      " @everyone Définition : économie d'échelle ? \n réponse : ||A ajouter|| ",
      
      " @everyone Définition : effet de réseau ? \n réponse : ||A ajouter|| ",
      
      " @everyone Citez le PESTEL+3 ! \n réponse : ||A ajouter||",
      
      " @everyone Définition : intermédiation ? \n réponse : ||A ajouter|| ",
      
      " @everyone Définition : Connaissance ? \n réponse : ||A ajouter|| ",
      
      " @everyone Définition : Information ? \n réponse : ||A ajouter|| ",
      
      " @everyone Définition : Données? \n réponse : ||A ajouter|| ",
      
      " @everyone Trois piliers économique du numérique ? \n réponse : ||A ajouter|| ",
      
      " @everyone Donnez les acteurs du marché ? \n réponse : ||A ajouter||",
      
      " @everyone Difference entre innovation de marché et innovation de l'offre ? \n réponse : ||A ajouter|| ",
      
      " @everyone Citez les trois types d'entreprises et les definir (ex : Pure-player) ? \n réponse : ||A ajouter|| ",
      
      " @everyone Difference entre start-up et mutante et non-mutante ? \n réponse : ||A ajouter|| ",
      
      " @everyone Définition : E-Commerce ? \n réponse : ||A ajouter|| ",
      
      " @everyone Définition : E-Réputation ? \n réponse : ||A ajouter|| ",
      
      " @everyone Définition : Externalité ? \n réponse : ||A ajouter|| ",
      
      " @everyone Maths : Qu'est ce qu'un circuit ? \n réponse : ||A ajouter|| ",
      
      " @everyone Maths : Qu'est ce qu'un chemin hamiltonien ? \n réponse : ||A ajouter|| ",
      
      " @everyone Maths : Condition pour l'existance d'un produit matricielle ? \n réponse : ||A ajouter|| ",
      
      " @everyone Définition : Monopole naturelle de fait  ? \n réponse : ||A ajouter|| ",
      
      " @everyone Méthodo : Business Model ? \n réponse : ||A ajouter||",

      " @everyone Trois leviers de obtenir un avantage conccurenciel \n réponse : ||l’innovations (produit, procédé(marché))\nla qualité\nles coûts||",

      " @everyone Avantages du yield management \n réponse : ||prévision des prix selon le remplissage\nadaptation du taux de remplissage par modulation de prix\nprix attractif en début de remplissage\nforte rentabilité unitaire en fin de remplissage\nadaptation des prix par période||",

      " @everyone 2 avantages et désavantages de l'ubérisation \n réponse : ||A ajouter||",

      " @everyone Les nouveaux métiers du numériques ? \n réponse : ||data miner,data scientist,data manager,data engineer,chief digital officer (CDO),data analyst,cloud broker||",

      " @everyone les 2 type de contrat ? \n réponse : ||contrat commercial (offreur et demander)\ncontrat de travail (employer et le salarier)||",

      " @everyone Contrat ? \n réponse : ||c’est une convention qui lie deux parties||",

      " @everyone La validité du contrat ? \n réponse : ||Il faut le consentement (peux aitre écrie ou tacite), il faut un objet et une capacité||",

      " @everyone Les vices du contrat ? \n réponse : ||Erreur(nullité partielle)\nDol(nullité partielle)\nViolence(nullité totale)||",

      " @everyone Exonérations de responsabilité du contrat ? \n réponse : ||Faute de l’autre contractent conduit as la non obligations du contrat\nFaute de la victime si elle est partite au contrat\nCas de force majeur||",

      " @everyone les 2 type de dommage ? \n réponse : ||patrimonial (cessible(vendable))\nextra patrimonial (incessible)\ncorporel, matériel ou moral||",

      " @everyone quel sont les deux type de preuve ? \n réponse : ||la preuve parfaite (acte national)\nla preuve imparfaite (les aveux)||",

      " @everyone Méthode syllogisme ? \n réponse : ||Les faits avec problématique : (Identifications des partite + leur qualification,Le résumé des faits,Le problème )\nmajeur :Règle de droit (chercher la lois)\nmineur :Solutions condamnations ou relaxe (donner le motif de la décisions)||",

      " @everyone les différentes décisions (méthode analyser la prise de décisions) ? \n réponse : ||cours terme :opérationnel(0 à 2 ans)\nmoyenne terme :tactique(2 à 5 ans)\nlong terme: stratégique(5 à 10 ans)||",

      " @everyone diagnostique interne ? \n réponse : ||Force/faiblesses (donne les partie prenante entre parantése apprer avoir exposer la force ou la faiblesses)||",

      " @everyone diagnostique externe ? \n réponse : ||opportunités/menaces(mettre le PESTEL : texte trouver dans les doc)||",

      " @everyone Les 7 parties prenantes ? \n réponse : ||Les dirigeants , les actionnaires, les salariés, partenaire économique , fournisseur , les distributeurs, pouvoir public(état collectivité territorial)||",

      " @everyone caractériser une organistion ? \n réponse : ||tangible(ressource matérielle(locaux,outils de producitons),financier(CA, rentabilité,emprunt),humain(effectif))/intangible(ressource imatérielle(contrat,partenaire,alliance,licences,brevet),technologique(logiciels,processus),humaine(savoirs et compétences des salariés))||",

      " @everyone Definition : IA ? \n réponse : ||C'est l'ensemble des théories et des techniques développant des programmes informatique complexe capable de simuler certains traits de l'intelligence humaine (raisonnements, apprentissage..) ex SIRI||",

      " @everyone Definition : Identité numérique ? \n réponse : || L'ensemble des éléments sur un support technologique qui sont relatif à une personne réelle.||"
    ]
    let RNG = bd[Math.floor(Math.random() * bd.length)]
    testChannel.send(RNG)
  }, 7200000);//pour l'intervale c'est la durée en seconde + 1000 (Ici 120min)
})