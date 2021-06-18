
class Snake {
    this.canvas = document.getElementById('zone'); //zone du canvas.
    this.ctx = canvas.getContext('2d'); // défini en 2D.
    this.intervalID;
    this.largeur = hauteur = 20; // défini la hauteur de la largeur du canvas égaux et à 20.
    this.MurX = 15 * largeur;
    this.MurY = 15 * hauteur;
    this.AfficheMur = false;
    this.compteurMur = 0;
    this.x = Math.trunc(Math.random() * canvas.width / largeur) * largeur; // nombre entier de l'axe horizontal. Position initial random sur 30 (snake)
    this.y = Math.trunc(Math.random() * canvas.height / hauteur) * hauteur; // nombre entier de l'axe vertical. Position initial random sur 30(snake)
    this.depX = depY = 0; // déclare t  his. ables de l'axe X et Y à 0 afin de préparer les déplacements.
    this.trace = []; // définir le tableu de la trace.
    this.tailleTrace = 4; // définir la taille de la queue.
    this.tailleInitTrace = tailleTrace;
    this.sautTrace = 1; // définir l'augmentation de la taille de la trace.
    this.tailleMaxTrace = 100; // définir la taille max.
    this.Mur = [];
    this.tailleMur = 1;
    this.tailleInitMur = tailleMur;
    this.sautMur = 3;
    this.hist, distance;
    this.compteBoucle = 0;
    this.sautBoucle = 10; // defini la valirable de l'augmentation de la taille du serpent.
    this.PommeX = Math.trunc(Math.random() * canvas.width / largeur) * largeur; // nombre entier de l'axe horizontal. Position initial random sur 30(pomme)
    this.PommeY = Math.trunc(Math.random() * canvas.height / hauteur) * hauteur; // nombre entier de l'axe vertical. Position initial random sur 30(pomme)
    this.CoeurX = Math.trunc(Math.random() * canvas.width / largeur) * largeur; // nombre entier de l'axe horizontal. Position initial random sur 30(coeur)
    this.CoeurY = Math.trunc(Math.random() * canvas.height / hauteur) * hauteur;// nombre entier de l'axe vertical. Position initial random sur 30(coeur)
    this.PiegeX = Math.trunc(Math.random() * canvas.width / largeur) * largeur; // nombre entier de l'axe horizontal. Position initial random sur 30(Turbo)
    this.PiegeY = Math.trunc(Math.random() * canvas.height / hauteur) * hauteur;// nombre entier de l'axe vertical. Position initial random sur 30(Turbo)
    this.MortX = Math.trunc(Math.random() * canvas.width / largeur) * largeur; // nombre entier de l'axe horizontal. Position initial random sur 30(Mort)
    this.MortY = Math.trunc(Math.random() * canvas.height / hauteur) * hauteur;// nombre entier de l'axe vertical. Position initial random sur 30(Mort)
    this.AfficheCoeur = false; // coeur initialement mit à faux pour ne pas en avoir tjr à l'écran
    this.compteurCoeur = 0; // départ du compteur pour afficher un coeur.
    this.AffichePiege = false;
    this.compteurPiege = 0;
    this.AfficheMort = false;
    this.compteurMort = 0;
    this.PommeRadius = 10; // arrondi du cercle.
    this.score = 0; // defini le score à 0.
    this.vie = 5; // defini les vies de base.
    this.timeout = 0;
    this.randomColor = 0; // defini la t  his. able de la couleur random de la tête.
    this.collisionTrace = false; // definir la coalison de la trace sur faux.
    this.vitesse = vitesseInit = 100;
    this.niveau = 1;
    this.tailleNiveau = 100;
    this.radial = ctx.createRadialGradient(200,100,50,200,100,775,); // crée un selecteur pour le fond dans une variable.

    this.letters = '0123456789ABCDEF';
    this.color = '#';

    this.test = "je suis une variable"

  constructor () {
    this.canvas = canvas;
    this.ctx = ctx;
    this.largeur = largeur;
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
    this.
  }

  handleKeyPress(keyCode) {
    console.log("keypress", keyCode)
  }

  start() {
    // j'accède à la variable test avec this.test
    console.log(this.test)
    this.test = "je suis une variable modifiée";
    console.log(this.test)
  }

};