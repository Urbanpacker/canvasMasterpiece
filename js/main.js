

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

var c = document.getElementById('mon_canvas');
var ctx = c.getContext('2d');

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

// Fonction affichant un disque de taille et de couleur aléatoires à l'endroit de la page qui a été cliqué
function displayCircle(e){
    var size = getRandomInteger(10, 100); // rayon du cercle 
    var positionX = e.clientX - 75 ;
    var positionY = e.clientY - 75 ;
    
    ctx.beginPath();
    ctx.arc(positionX, positionY,size,0,Math.PI*2,true);
    ctx.fillStyle = randomCSSColor(); 
    ctx.fill();
}

// Fonction affichant une silhouuette de tête de Mickey
function displayMickey(e){
    var color = randomCSSColor();
    var size = getRandomInteger(10, 100); // rayon du cercle principal
    var positionX = e.clientX - 75 ;
    var positionY = e.clientY - 75 ;

    // Affichage d'un cercle central (visage de Mickey)
    ctx.beginPath();
    ctx.arc(positionX, positionY,size,0,Math.PI*2,true);
    ctx.fillStyle = color;
    ctx.fill();

    // Affichage d'un cercle en en haut à gauche du cercle principal (oreille à gauche)
    ctx.beginPath();
    ctx.arc(positionX+size, positionY-size,size*0.6,0,Math.PI*2,true);
    ctx.fillStyle = color;
    ctx.fill();

    // Affichage d'un cercle en en haut à droite du cercle principal (oreille à droite)
    ctx.beginPath();
    ctx.arc(positionX-size, positionY-size,size*0.6,0,Math.PI*2,true);
    ctx.fillStyle = color;
    ctx.fill();
}

// Fonction affichant un rectangle de taille et de couleur aléatoires à l'endroit de la page qui a été cliqué
function displaySquare(e){
    var width = getRandomInteger(10,200 );
    var height = getRandomInteger(10,200 );
    var positionX = e.clientX - 75 ;
    var positionY = e.clientY - 75 ;
    
    ctx.fillStyle = randomCSSColor() ;
    ctx.fillRect(positionX-width/2,positionY-height/2,width,height);
}

function displaySmiley(e){
    
    ctx.lineWidth = 2;
    
    var size = getRandomInteger(10, 100); // rayon du cercle principal
    var positionX = e.clientX - 75 ;
    var positionY = e.clientY - 75 ;
    
    var colorFace = randomCSSColor();
    var colorEye ;
        do{
            colorEye = randomCSSColor();
        }while(colorEye === colorFace);
    
    var colorMouth ;
        do{
            colorMouth = randomCSSColor();
        }while(colorMouth === colorFace || colorMouth === colorEye);
    


    // Affichage d'un cercle central (visage)
    ctx.beginPath();
    ctx.arc(positionX, positionY,size,0,Math.PI*2,true);
    ctx.fillStyle = colorFace;
    ctx.fill();

    // Affichage d'un cercle en en haut à gauche du cercle central  (oeil à gauche)
    ctx.beginPath();
    ctx.arc(positionX-size*0.5, positionY-size*0.35,size*0.15,0,Math.PI*2,true);
    ctx.fillStyle = colorEye;
    ctx.fill();
   

    // Affichage d'un cercle en en haut à droite du cercle central  (oeil à droite)
    ctx.beginPath();
    ctx.arc(positionX+size*0.5, positionY-size*0.35,size*0.15,0,Math.PI*2,true);
    ctx.fillStyle = colorEye;
    ctx.fill();
   
    // Affichage d'un demi cercle en bas du cercle principal (bouche)
    // Bouche
    ctx.beginPath();
    ctx.arc(positionX+size*0, positionY+size*0.25,size*0.4,0,Math.PI,false);
    ctx.strokeStyle = colorMouth;
    ctx.stroke();
    
}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

// Générateur de cercles de couleurs
// c.addEventListener("click", displayCircle); 

// Générateur de rectangles de couleurs
 c.addEventListener("click", displaySquare); 

// Générateur de cercles de couleurs
// c.addEventListener("click", displayMickey); 

// Générateur de smileys
// c.addEventListener("click", displaySmiley);

