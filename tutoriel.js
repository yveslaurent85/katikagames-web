
(function(){
  var IMG=[];for(var q=0;q<13;q++)IMG.push('tuto'+q+'.jpg');
  var W=932,H=1992;
  // image : 0 retrait intl, 1 retrait local, 2 dépôt MTN code, 3 dépôt MTN haut, 4 dépôt OM code, 5 dépôt OM haut, 6 dépôt intl, 7 accueil, 8 compte, 9 tiroir, 10 installer, 11 menu Chrome, 12 site
  var M=[
   {name:'Installer l\'application',sub:'Télécharger la PWA',steps:[
    {t:'Ouvrir le site',i:12,z:[225,1060,707,1170],c:'Ouvre Chrome sur ton téléphone et va sur le site KatikaGames (katikagames.ychachouang.workers.dev). Le bouton « Jouer maintenant » ouvre le jeu.',say:'Ouvre Chrome sur ton téléphone et va sur le site Katika Games. Le bouton Jouer maintenant ouvre le jeu.'},
    {t:'Ouvrir le menu de Chrome',i:12,z:[835,1855,925,1950],c:'Touche les trois points en bas à droite de Chrome.',say:'Touche les trois points, en bas à droite de Chrome.'},
    {t:'Choisir Installer',i:11,z:[125,1515,915,1615],c:'Dans le menu, touche « Installer et créer un raccourci ».',say:'Dans le menu, touche : Installer et créer un raccourci.'},
    {t:'Confirmer',i:10,z:[55,1595,878,1912],c:'Touche l\'installation. Ici l\'appli est déjà installée, alors Chrome propose de l\'ouvrir.',say:'Touche l\'installation pour confirmer. Sur cette capture l\'application est déjà installée, alors Chrome propose de l\'ouvrir.'},
    {t:'Ouvrir Katika',i:9,z:[55,1590,225,1815],c:'L\'icône Katika est dans la liste de tes applications. Touche-la pour ouvrir le jeu.',say:'L\'icône Katika est maintenant dans la liste de tes applications. Touche-la pour ouvrir le jeu.'},
    {t:'Créer ton compte',i:8,z:[45,550,887,985],c:'Pour jouer en ligne, crée ton compte : pseudo, e-mail et mot de passe.',say:'Pour jouer en ligne, crée ton compte : un pseudo, ton e-mail et un mot de passe.'},
    {t:'Le code promo',i:8,z:[45,1012,887,1220],c:'Code promo facultatif : le pseudo de la personne qui t\'a invité. Possible seulement maintenant, à la création du compte.',say:'Le code promo est facultatif : c\'est le pseudo de la personne qui t\'a invité. Tu peux le mettre seulement maintenant, à la création du compte.'},
    {t:'Valider',i:8,z:[45,1270,887,1385],c:'Touche « Créer mon compte ». Tu peux maintenant jouer et recharger.',say:'Touche Créer mon compte. Tu peux maintenant jouer et recharger ton solde.'}
   ]},
   {name:'Recharger',sub:'Ajouter de l\'argent',steps:[
    {t:'Le bouton Recharge',i:7,z:[468,534,697,624],c:'Sur l\'accueil, ton solde est en haut. Touche le bouton vert « Recharge ».',say:'Sur l\'accueil, ton solde est affiché en haut. Touche le bouton vert Recharge.'},
    {t:'Choisir le mode',i:5,z:[37,435,895,597],c:'Choisis « International » ou « Local Cameroun (OM · MoMo) ».',say:'Choisis le mode : International, ou Local Cameroun, pour Orange Money et M T N MoMo.'},
    {t:'International : l\'opérateur',i:6,z:[75,816,669,902],c:'Recharge International : choisis Orange Money ou MTN MoMo.',say:'Pour une recharge International, choisis ton opérateur : Orange Money, ou M T N MoMo.'},
    {t:'International : numéro et montant',i:6,z:[75,1004,857,1520],c:'Entre ton numéro et le montant. Minimum 100 FCFA, maximum 250 000 FCFA. Les boutons rapides remplissent le montant.',say:'Entre ton numéro et le montant. Minimum cent francs, maximum deux cent cinquante mille francs. Les boutons rapides remplissent le montant pour toi.'},
    {t:'International : payer',i:6,z:[75,1712,857,1825],c:'Touche « Payer maintenant », puis valide sur ton téléphone. Le solde est crédité tout seul.',say:'Touche Payer maintenant, puis valide sur ton téléphone avec ton code secret. Le solde est crédité tout seul.'},
    {t:'Local Cameroun : l\'opérateur',i:5,z:[75,668,857,1225],c:'En Local Cameroun, choisis Orange Money ou MTN MoMo. Les 4 étapes sont écrites sur l\'écran.',say:'En Local Cameroun, choisis Orange Money ou M T N MoMo. Les quatre étapes sont écrites sur l\'écran.'},
    {t:'Composer le code',i:4,z:[75,995,857,1292],c:'Écris le montant, puis touche « Composer le code » (ou copie-le) et confirme avec ton code secret.',say:'Écris le montant, puis touche Composer le code, ou copie-le, et confirme avec ton code secret.'},
    {t:'Recopier l\'identifiant',i:4,z:[75,1384,857,1728],c:'Tu reçois un SMS avec l\'identifiant de la transaction. Recopie-le ici avec ton numéro.',say:'Tu reçois un S M S avec l\'identifiant de la transaction. Recopie-le ici, avec ton numéro.'},
    {t:'Envoyer la demande',i:4,z:[75,1760,857,1873],c:'Touche « J\'ai payé · envoyer ma demande ». Dès que c\'est confirmé, ton solde est crédité.',say:'Touche : J\'ai payé, envoyer ma demande. Dès que c\'est confirmé, ton solde est crédité.'},
    {t:'Avec MTN MoMo',i:3,z:[475,202,857,296],c:'Avec MTN MoMo, touche le bouton MTN et suis les mêmes étapes avec le code marchand MTN.',say:'Avec M T N MoMo, touche le bouton M T N, et suis les mêmes étapes, avec le code marchand M T N.'}
   ]},
   {name:'Retirer',sub:'Récupérer ses gains',steps:[
    {t:'Le bouton Retrait',i:7,z:[712,534,855,624],c:'Sur l\'accueil, touche le bouton « Retrait » à côté de ton solde.',say:'Sur l\'accueil, touche le bouton Retrait, à côté de ton solde.'},
    {t:'Choisir le mode',i:0,z:[37,322,895,483],c:'Choisis « International » ou « Local Cameroun (OM · MoMo) ».',say:'Choisis le mode : International, ou Local Cameroun.'},
    {t:'International : opérateur et numéro',i:0,z:[75,794,857,1108],c:'Choisis Orange Money ou MTN MoMo, puis entre le numéro qui reçoit l\'argent.',say:'Choisis Orange Money ou M T N MoMo, puis entre le numéro qui doit recevoir l\'argent. Vérifie-le bien.'},
    {t:'International : le montant',i:0,z:[75,1200,857,1400],c:'Écris le montant. Minimum 500 FCFA, maximum 100 000 FCFA.',say:'Écris le montant à retirer. Minimum cinq cents francs, maximum cent mille francs.'},
    {t:'International : retirer',i:0,z:[75,1436,857,1550],c:'Touche « Retirer maintenant ». Le montant est retiré de ton solde et envoyé directement sur ton compte.',say:'Touche Retirer maintenant. Le montant est retiré de ton solde et envoyé directement sur ton compte Orange Money ou M T N MoMo.'},
    {t:'Suivre ses retraits',i:0,z:[37,1620,895,1870],c:'« Mes retraits International » montre l\'état de chaque demande. Si un retrait échoue, tu es remboursé.',say:'Mes retraits International montre l\'état de chaque demande. Si un retrait échoue, tu es remboursé automatiquement.'},
    {t:'Local Cameroun : la demande',i:1,z:[75,672,857,1374],c:'Retire ton montant (minimum 500, maximum 250 000 FCFA) et entre ton numéro Orange Money. Touche « Demander le retrait ».',say:'En Local Cameroun, écris le montant, minimum cinq cents, maximum deux cent cinquante mille francs. Entre ton numéro Orange Money, puis touche Demander le retrait.'},
    {t:'Local Cameroun : être payé',i:1,z:[75,672,857,840],c:'Le montant sort de ton solde tout de suite. Tu es payé dès que l\'administrateur traite ta demande. Si elle est refusée, tu es remboursé.',say:'Le montant est retiré de ton solde tout de suite. Tu es payé dès que l\'administrateur traite ta demande. Si elle est refusée, tu es remboursé.'},
    {t:'Voir le statut',i:1,z:[37,1445,895,1695],c:'Dans « Mes retraits », le statut passe à « Payé » quand c\'est fait.',say:'Dans Mes retraits, le statut passe à Payé quand c\'est fait.'}
   ]}
  ];
  var mi=0,si=0,started=false,voice=null;
