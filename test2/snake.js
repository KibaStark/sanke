window.onload = function () {
  document.addEventListener('keydown', keyboard); // évènement clavier.
};

function keyboard(evt) {
  snake.handleKeyPress(evt.keyCode);
}
pomme () {
  this.ctx.beginPath(); // initialise la pomme
  this.ctx.arc(PommeX + PommeRadius, PommeY + PommeRadius,PommeRadius, 0, Math.PI * 2); // dessine la pomme.
  this.ctx.fillStyle = "#e74c3c"; // défini en rouge.
  this.ctx.fill(); // l'ajoute au tableau.
  this.ctx.closePath(); // renvoi la pomme au pts de départ.
  this.ctx.font = '16px Arial'; // defini le format de la police du texte pour la feuille.
  this.ctx.fillStyle = '#2ecc71'; // defini la couleur de la feuille.
  this.ctx.fillText('√', PommeX + 3, PommeY + 3 ); // defini l'emplacement de la feuille ainsi que le texte qui lui est appliqué.

  this.ctx.save(); // sauvegarde le contexte.
  this.ctx.scale(1, 1.5); // defini l'axe y à 3/2.
  this.ctx.beginPath();
  this.ctx.arc(PommeX + PommeRadius + 3, (PommeY + PommeRadius) / 1.5,PommeRadius / 3, 0, Math.PI * 2); //dessine le cercle en ovale.
  this.ctx.fillStyle = "#ed7365"; // defini la couleur de l'ovale.
  this.ctx.fill();
  this.ctx.closePath();
  this.ctx.restore(); // on rétablit le contexte.

  if (this.x == this.PommeX && this.y == this.PommeY){

    randomColor++;
    randomColor %= 3;
    this.score += 10 + 2 * ((this.tailleTrace - this.tailleInitTrace) / this.sautTrace); // score + 10 + 2* (taille gané - taille init) divisé par l'augmentation de la taille.
    if (this.tailleTrace >= this.tailleInitTrace){ // si la taille augmente.
      this.tailleTrace += this.sautTrace; // on enleve un saut d'expention de la trace.
    }
    this.sautBoucle = 10;// On réinitialise le compte à rebours pour relancer l'expansion
    this.PommeX = Math.trunc(Math.random() * canvas.width / this.largeur) * this.largeur; // On choisit une autre position random pour la pomme.
    this.PommeY = Math.trunc(Math.random() * canvas.height / this.hauteur) * this.hauteur; // on choisit une autre position random pour la pomme.

    ctx.fillStyle = "#2c2c54";

    for (var i = 0;i < this.trace.length;i++) {
      if (i == this.trace.length - 1) {
        switch (randomColor) {
        case 0:
          ctx.fillStyle = "#d35400";
          break;
        case 1:
          ctx.fillStyle = "#9b59b6";
          break;
        default:
          ctx.fillStyle = "#1abc9c";
        }
}
this.ctx.fillRect(trace[i].x,trace[i].y, largeur - 3, hauteur - 3); // trace.x et trace.y dans le tableau  = pomme ( color )
}
}

const snake = new Snake() // On crée une nouvelle instance du skate

snake.start()