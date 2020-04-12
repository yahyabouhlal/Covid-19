// Séléctionner les aiguilles de montre
const HOUR = document.querySelector("#hour");
const MINUTE= document.querySelector("#minute");
const  SECOND = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

var date = new Date();
//Ajouter l'heure , minite , seconde  dans des varaiables

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
  let hrPosition = hr*360/12 + ((min * 360/60)/12) ;
  let minPosition = (min * 360/60) + (sec* 360/60)/60;
  let secPosition = sec * 360/60;

// Déplacer les aiguilles 
function demarrerLaMontre() {

    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
  
    let hrPosition = hr*360/12 + ((min * 360/60)/12) ;
    let minPosition = (min * 360/60) + (sec* 360/60)/60;
    let secPosition = sec * 360/60;


    HOUR.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTE.style.transform = "rotate(" + minPosition + "deg)";
  SECOND.style.transform = "rotate(" + secPosition + "deg)";

}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);