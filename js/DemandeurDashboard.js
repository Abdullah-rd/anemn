
let Currentjob = 'none';

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        scrollTo(0, 0);
        document.querySelector('.titre-container').style.opacity = '1';
        document.querySelector('.titre-container').style.marginTop = '-20px';

    }, 500);
});
setTimeout(fadeout, 2500);

function fadeout() {
    document.querySelector('.titre-container').style.opacity = '0';
    setTimeout(showcards, 800);

}
let choice = 0;
let Currentcard = null;
function choose(card, job) {
    if (Currentcard !== null) {
        Currentcard.classList.remove('zoomed');
        Currentcard.querySelector(".sec1").style.opacity = '0';
        choice = 0;

    }

    if (Currentcard !== card) {
        card.classList.add('zoomed');
        card.querySelector(".sec1").style.opacity = '1';
        Currentcard = card;
        choice = 1;
        Currentjob = job;

        
    } else {
        Currentcard = null;
    }
}

function showcards() {
    document.querySelector('.titre-container').style.display = 'none';

    let cards = document.querySelector(".profession-container");
    let text = document.querySelector(".titreDeProfession");
    text.style.opacity = '1';
    text.style.scale = '1';
    cards.style.opacity = '1';
    cards.style.scale = '1';
    document.body.style.overflow = 'auto';

}

function verifychoice() {
    if (choice == 1) return true;
    else {
        alert('choisi un profession');
        return false
    }
}


function pageSuivant2(){
    localStorage.setItem("Dprofession", Currentjob);

}

function ageValidate(){
    let Dexperience = document.getElementById("Dexperience");
    
    let experienceValue = parseInt(Dexperience.value, 10);

    //Nan = is not a number

    if (!isNaN(experienceValue) && experienceValue >= 1 && experienceValue <= 30) {
        localStorage.setItem("Dexperience", experienceValue);
        pageSuivant3();
    } else {
        alert("Veuillez entrer un entier valide entre 1 et 30 pour l'expérience.");
    }
}

function pageSuivant3(){
    return true;
}