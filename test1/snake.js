var canvas = document.getElementById('zone'); //zone du canvas.
var ctx = canvas.getContext('2d'); // défini en 2D.

var intervalID;
var largeur=hauteur=20; // défini la hauteur de la largeur du canvas égaux et à 20.

var MurX= 15*largeur;
var MurY = 15*hauteur;
var AfficheMur= false;
var compteurMur=0;

var x= Math.trunc(Math.random()*canvas.width/largeur)*largeur;         // nombre entier de l'axe horizontal. Position initial random sur 30 (snake)
var y= Math.trunc(Math.random()*canvas.height/hauteur)*hauteur;      // nombre entier de l'axe vertical. Position initial random sur 30(snake)

var depX=depY=0; // déclare variables de l'axe X et Y à 0 afin de préparer les déplacements.

var trace = []; // définir le tableu de la trace.
var tailleTrace=4; // définir la taille de la queue.
var tailleInitTrace = tailleTrace;
var sautTrace=1; // définir l'augmentation de la taille de la trace.
var tailleMaxTrace=100; // définir la taille max.

var Mur = [];
var tailleMur= 1;
var tailleInitMur = tailleMur;
var sautMur=3;




var hist, distance;
var compteBoucle=0;
var sautBoucle = 10; // defini la valirable de l'augmentation de la taille du serpent.

var PommeX=Math.trunc(Math.random()*canvas.width/largeur)*largeur;   // nombre entier de l'axe horizontal. Position initial random sur 30(pomme)
var PommeY=Math.trunc(Math.random()*canvas.height/hauteur)*hauteur; // nombre entier de l'axe vertical. Position initial random sur 30(pomme)
var CoeurX=Math.trunc(Math.random()*canvas.width/largeur)*largeur; // nombre entier de l'axe horizontal. Position initial random sur 30(coeur)
var CoeurY=Math.trunc(Math.random()*canvas.height/hauteur)*hauteur;// nombre entier de l'axe vertical. Position initial random sur 30(coeur)
var PiegeX=Math.trunc(Math.random()*canvas.width/largeur)*largeur; // nombre entier de l'axe horizontal. Position initial random sur 30(Turbo)
var PiegeY=Math.trunc(Math.random()*canvas.height/hauteur)*hauteur;// nombre entier de l'axe vertical. Position initial random sur 30(Turbo)
var MortX=Math.trunc(Math.random()*canvas.width/largeur)*largeur; // nombre entier de l'axe horizontal. Position initial random sur 30(Mort)
var MortY=Math.trunc(Math.random()*canvas.height/hauteur)*hauteur;// nombre entier de l'axe vertical. Position initial random sur 30(Mort)

var AfficheCoeur = false; // coeur initialement mit à faux pour ne pas en avoir tjr à l'écran
var compteurCoeur = 0; // départ du compteur pour afficher un coeur.
var AffichePiege = false;
var compteurPiege= 0;
var AfficheMort = false;
var compteurMort=0;
var PommeRadius = 10; // arrondi du cercle.

var score = 0; // defini le score à 0.
var vie = 5; // defini les vies de base.
var timeout=0;
var randomColor=0; // defini la variable de la couleur random de la tête.
var collisionTrace = false; // definir la coalison de la trace sur faux.
var vitesse = vitesseInit = 100;
var niveau=1;
var tailleNiveau=100;

function collision() {
    collisionTrace=true;
    timeout = 0; 
    clearTimeout(intervalID); //stop le temps
    x = Math.trunc(Math.random()*canvas.width/largeur)*largeur;
    y= Math.trunc(Math.random()*canvas.height/hauteur)*hauteur;
    trace=[];
    trace.push({x:x,y:y});
    tailleTrace=tailleInitTrace;
    depX=depY=0;
    PommeX=Math.trunc(Math.random()*canvas.width/largeur)*largeur;
    PommeY=Math.trunc(Math.random()*canvas.height/hauteur)*hauteur;
    CoeurX=Math.trunc(Math.random()*canvas.width/largeur)*largeur;
    CoeurY=Math.trunc(Math.random()*canvas.height/hauteur)*hauteur;
    MortX=Math.trunc(Math.random()*canvas.width/largeur)*largeur;
    MortY=Math.trunc(Math.random()*canvas.height/hauteur)*hauteur;
    MortX=Math.trunc(Math.random()*canvas.width/largeur)*largeur;
    MortY=Math.trunc(Math.random()*canvas.height/hauteur)*hauteur;
    vie--;
    collisionTrace=false;
}

function mur(){
    //   mur
    MurX= 15*largeur;
    MurY = 15*hauteur;
    AfficheMur=true;
    if(AfficheMur == true){

        ctx.font = '20px Arial';
        ctx.fillStyle = '#40739e';
        ctx.fillText('⛔', MurX-3, MurY+16);
        
        } 
        if(x==MurX && y==MurY){ // si collision
        collision();
        ctx.fillText("DOMMAGE (づ｡◕‿‿◕｡)づ\ tu as perdu une vie !", canvas.width / 2 - 200, canvas.height / 2 - 50);
        
        
        
        
        }

}


var radial = ctx.createRadialGradient(200,100,50,200,100,775,); // crée un selecteur pour le fond dans une variable.

radial.addColorStop(0,'#ff9f1a');
radial.addColorStop(0.25, '#fffa65'); // fait un dégradé .

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


window.onload=function() {
    intervalID = setInterval(game,100); // timeur avec interval.
    
    document.addEventListener("keydown",keyboard); // évènement clavier.
}


function game(){ // fonction pour le jeux ( à définir dans plusieurs fonctions simple à tache unique).
    
    
    ctx.clearRect(0, 0, canvas.width, canvas.height); // efface le dessin pour faire une animation.
    

    ctx.beginPath();  // commence à faire le fond.
    ctx.fillStyle = radial; // applique le fond à la fonction.
    ctx.arc(200,100,335,0,2*Math.PI);   // met la fond en forme.
    ctx.fill(); // met le fond dans le tableau.

    x+=depX*largeur; // déclare x afin de le déplacer case par case, en *30 au lieux de *300.
    y+=depY*hauteur; // déclare y afin de le déplacer case par case, en *30 au lieux de *300.

    ctx.fillStyle="#2c2c54"; //définition de la couleur du serpent.

    if((tailleTrace <= tailleMaxTrace) && ((depX != 0) || (depY!=0))){ // si la queue est plus petit ou égale à la tailleMax et l'axeX pour le déplacement et l'axeY pour le déplacement non égal à zero.
        if ((compteBoucle++)%100 == 1) {      // et si boucle = 1sec.
            sautBoucle--;               // le recompteur réduit de 1 ( actuellement sur 10).
            if(sautBoucle<0) {          // et si le sautBoucle est plus petit que zero.
            tailleTrace+=sautTrace;     // le saut trace s'aditionne à la taille trace.
            }
        }
    } // augmentation de la taille toute les secondes ( toute les 100 boucles de 10 millième de sec)

    trace.push({x:x,y:y}); // on insére la valeur de X et de Y dans un tableau.
    while(trace.length>tailleTrace) { // tant que le nombre de trace dépasse la taille maximum 
        trace.shift(); // enlève un élément mais garde la valeur en stock
    }

        for(var i=0;i<trace.length;i++) {
            ctx.fillRect(trace[i].x,trace[i].y, largeur-3, hauteur-3); // // position de départ x et y du serpent ainsi que sa largueur et sa hauteur. et le nombre d'éléments dans la trace
            
        }

        // pomme :
        ctx.beginPath(); // initialise la pomme
        ctx.arc(PommeX+PommeRadius, PommeY+PommeRadius,PommeRadius, 0, Math.PI * 2); // dessine la pomme.
        ctx.fillStyle="#e74c3c"; // défini en rouge.
        ctx.fill(); // l'ajoute au tableau.
        ctx.closePath(); // renvoi la pomme au pts de départ.
        ctx.font = '16px Arial'; // defini le format de la police du texte pour la feuille.
        ctx.fillStyle = '#2ecc71'; // defini la couleur de la feuille.
        ctx.fillText('√', PommeX+3, PommeY+3 ); // defini l'emplacement de la feuille ainsi que le texte qui lui est appliqué.

        ctx.save(); // sauvegarde le contexte.
        ctx.scale(1, 1.5); // defini l'axe y à 3/2.
        ctx.beginPath();
        ctx.arc(PommeX+PommeRadius + 3, (PommeY+PommeRadius)/1.5,PommeRadius/3, 0, Math.PI * 2); //dessine le cercle en ovale.
        ctx.fillStyle="#ed7365"; // defini la couleur de l'ovale.
        ctx.fill(); 
        ctx.closePath(); 
        ctx.restore(); // on rétablit le contexte.


        if(x==PommeX && y==PommeY){

            randomColor++;
            randomColor%=3;
            
            score+=10 + 2 * ((tailleTrace - tailleInitTrace)/sautTrace); // score + 10 + 2* (taille gané - taille init) divisé par l'augmentation de la taille.
            if(tailleTrace>=tailleInitTrace){ // si la taille augmente.
            tailleTrace+=sautTrace;         // on enleve un saut d'expention de la trace.
            }
            sautBoucle=10;// On réinitialise le compte à rebours pour relancer l'expansion
            PommeX=Math.trunc(Math.random()*canvas.width/largeur)*largeur; // On choisit une autre position random pour la pomme.
            PommeY=Math.trunc(Math.random()*canvas.height/hauteur)*hauteur; // on choisit une autre position random pour la pomme.

            ctx.fillStyle="#2c2c54";

            
            for(var i=0;i<trace.length;i++) {
                if (i==trace.length-1) {
                switch(randomColor) {
                    case 0:
                        ctx.fillStyle="#d35400"; 
                    break;
                    case 1:
                        ctx.fillStyle="#9b59b6";
                    break;
                    default:
                        ctx.fillStyle="#1abc9c"; 
                    }
                }
                ctx.fillRect(trace[i].x,trace[i].y, largeur-3, hauteur-3); // trace.x et trace.y dans le tableau  = pomme ( color )
            }           
        }



            ctx.font = '16px Arial';                     // score
            ctx.fillStyle = '#2c2c54';                      //
            ctx.fillText('Score: ' + score, 5, 20);      //

            // niveau
            ctx.font = '20px Arial';
            ctx.fillStyle = '#2c2c54';
            ctx.fillText('Niveau: ' + parseInt(Math.trunc(score/100) + 1), canvas.width/2 - 40, 20); // augmente de 1 tout les 100 de score

           if(parseInt(Math.trunc(score/tailleNiveau) + 1) > niveau){ //score divisé par la taille du niveau.
            niveau++;                                                 // niveau ++
            vitesse = vitesse - vitesse / 10                          // vitesse +10%
            clearTimeout(intervalID);
            radial.addColorStop(0,getRandomColor());
            radial.addColorStop(0.25, getRandomColor());
            
            intervalID = setInterval(game,vitesse);
            }
            
                                

               // Afficher les vies.
            ctx.font = '16px Arial';
            ctx.fillStyle = '#2c2c54';
            ctx.fillText('Vies restante: ' + vie, canvas.width - 130, 20); // texte des vies restante.


            
            // compteur coeur
            if(compteurCoeur++ > 115){ // si le compteurCoeur dépasse 115.
                compteurCoeur = 0;     // il revient à 0.
                if(Math.random()*100 > 75){ //1 chance sur 4
                    CoeurX=Math.trunc(Math.random()*canvas.width/largeur)*largeur;
                    CoeurY=Math.trunc(Math.random()*canvas.height/hauteur)*hauteur;
                    AfficheCoeur= true // un coeur apparait.
                } else {  // sinon 3 chance sur 4 qu'il n'y ai rien.
                    CoeurX = -9999;
                    CoeurY = -9999;
                    AfficheCoeur= false;
                   
                   }
                   
                   }

                   if(AfficheCoeur == true){

                    ctx.font = '20px Arial';
                    ctx.fillStyle = '#b33939';
                    ctx.fillText('❤', CoeurX-3, CoeurY+16);
                   
                   } 
                    if(x==CoeurX && y==CoeurY){ // si collision
                    vie++;
                    CoeurX = -9999; // disparait de l'écran
                    CoeurY = -9999;
                    AfficheCoeur= false; // revient à faux.
                   
                   }


                    // Piege
                   if(compteurPiege++ > 50){ // si le compteurPiege dépasse 50.
                    compteurPiege = 0;     // il revient à 0.
                    if(Math.random()*100 > 50){ //1 chance sur 2
                        PiegeX=Math.trunc(Math.random()*canvas.width/largeur)*largeur;
                        PiegeY=Math.trunc(Math.random()*canvas.height/hauteur)*hauteur;
                        AffichePiege= true // un Turbo apparait.
                    } else {  // sinon 1 chance sur 2 qu'il n'y ai rien.
                        PiegeX = -9999;
                        PiegeY = -9999;
                        AffichePiege= false;
                       
                       }
                       
                       }
    
                       if(AffichePiege == true){
    
                        ctx.font = '20px Arial';
                        ctx.fillStyle = '#40739e';
                        ctx.fillText('😁', PiegeX-3, PiegeY+16);
                        
                       } 
                        if(x==PiegeX && y==PiegeY){ // si collision
                            collision();
                            ctx.fillText("DOMMAGE (づ｡◕‿‿◕｡)づ\ tu as perdu une vie !", canvas.width / 2 - 200, canvas.height / 2 - 50);

                        PiegeX = -9999; // disparait de l'écran
                        PiegeY = -9999;
                        AffichePiege= false; // revient à faux.
                       }

                           //MORT
                           if(compteurMort++ > 50){ // si le compteurMort dépasse 50.
                            compteurMort = 0;     // il revient à 0.
                            if(Math.random()*100 > 25){ //3 chance sur 4
                                MortX=Math.trunc(Math.random()*canvas.width/largeur)*largeur;
                                MortY=Math.trunc(Math.random()*canvas.height/hauteur)*hauteur;
                                AfficheMort= true // un Mort apparait.
                            } else {  // sinon 1 chance sur 4 qu'il n'y ai rien.
                                MortX = -9999;
                                MortY = -9999;
                                AfficheMort= false;
                               
                               }
                               
                               }
                           if(AfficheMort == true){
        
                            ctx.font = '20px Arial';
                            ctx.fillStyle = '#40739e';
                            ctx.fillText('💣', MortX-3, MortY+16);
                            
                           } 
                            if(x==MortX && y==MortY){ // si collision
                                
                                collision();
                                ctx.fillText("SUICIDE - GAME OVER", canvas.width / 2 - 200, canvas.height / 2 - 50);

                                score = 0;
                                vie = 5;                           
                                
                                MortX = -9999; // disparait de l'écran
                                MortY = -9999;
                                AfficheMort= false; // revient à faux.
                            }
                            mur();

                            

            if(typeof trace[1].x != 'undefined') {
            if(trace[0].x == trace[1].x && trace[0].y == trace[1].y){
            trace.shift();
            } 
            }

            if(trace.length>3){
                for(var i=0;i<trace.length-1;i++) {
                    if(trace[i].x==trace[trace.length-1].x && trace[i].y==trace[trace.length-1].y){
                        collisionTrace= true;
                        break
                        }

            if(x<0 || x>canvas.width-1 || y<0 || y > canvas.height-1 || collisionTrace == true){ // si la trace touche le bord ou collision.
                collision();
                intervalID = setInterval(game,100); //initialise le
                break;

                }
            }
                        


                    if(vie == 0){                        // si vie = 0 affiche GAME OVER.
                        ctx.font = '40px Arial';
                        ctx.fillStyle = '#2c2c54';
                        ctx.fillText('GAME OVER', canvas.width / 2 - 130, canvas.height / 2);
                        
                        collision();
                        score = 0;
                        vie = 5;                           
                        collisionTrace=false;

                        }
                    }
                }

          

    
    
    
    

function keyboard(evt){ // fonction touche du clavier.
    switch(evt.keyCode) { // conditions.

        case 27: // restart.
        collision();
        score = 0;
        vie = 5;
        intervalID = setInterval(game,100); //initialise le
        break;

        case 37:// touche gauche.
        if(hist==39) {break;} // si dessine à gauche ça brise la condition.
        depX=-1; // dessine sur la gauche
        depY=0;
        hist=evt.keyCode; // si historique = 39 ça empêche le keyCode.
        break;
        case 38:// touche haut.
        if(hist==40){break;}
        depX=0;
        depY=-1; // dessine sur le haut.
        hist=evt.keyCode; // si historique = 40 ça empêche le keyCode.
        break;
        case 39:// touche droite.
        if(hist==37){break;}
        depX=1; // dessine sur la droite.
        depY=0
        hist=evt.keyCode; // si historique = 37 ça empêche le keyCode.
        break;
        case 40:// touche bas.
        if(hist==38){break;}
        depX=0;
        depY=1; // // dessine sur le bas.
        hist=evt.keyCode; // si historique = 38 ça empêche le keyCode.
        break;
        case 32:// touche espace.
        clearTimeout(intervalID);
        trace=[];
        trace.push({x:x,y:y});
        depX=depY=0;
        collisionTrace=false;
        intervalID = setInterval(game,100); //initialise le
        break;
        case 80:
        clearTimeout(intervalID);
        break;
        case 79:
        intervalID = setInterval(game,100);
        break;

        
        }
}
