'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/


// Fontion de génration d'un nombre aléatoire entre un nombre minimum et un nombre maximum passés en arguments
function getRandomInteger(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

// Fontion de génération aléatoire d'une couleur CSS au format héxadécimal (6 caractères compris entre 0 et 9 ou entre a et f précédés de #)
function randomCSSColor(){
    
    var hexadecimalColors = "0123456789abcdef";
    var color ='' ;
    
    for(var i = 0, c = hexadecimalColors.length-1 ; i < 6 ; i++){
        var randomIndex = getRandomInteger(0, c);
        color += hexadecimalColors.substring(randomIndex,randomIndex+1);
    }
    
    var CSScolor = "#" + color
    return CSScolor;
}



