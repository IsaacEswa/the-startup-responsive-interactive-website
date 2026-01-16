// haal live tijd/datum op
let live = new Date();

// select live tijdlijn
let liveTime = document.querySelector(".live-time")

// haal de huidige tijd op
let hours = live.getHours()
let minutes = live.getMinutes()

// zet de tijd als CSS variabelen
if (liveTime) {
    liveTime.style.setProperty('--hours', `${hours}`)
    liveTime.style.setProperty('--minutes', `${minutes}`)
}




// Stap 1: selecteer Veronica radio button
let veronicaRadioButton = document.querySelector('.veronica-button');
// selecteer alle articles met class "veronica"
let veronicaPrograms = document.querySelectorAll('article.veronica');

// Stap 2: voeg click event listener toe aan de button met een callback functie
veronicaRadioButton.addEventListener('click', hideVeronicaPrograms)

// Stap 3: definieer de callback functie
function hideVeronicaPrograms() {
    veronicaPrograms.forEach(article => {
        article.classList.toggle('hide-programs');
    });

    veronicaRadioButton.classList.toggle('active-radiobutton');
}



// Stap 1: selecteer SLAM radio button
let slamRadioButton = document.querySelector('.slam-button');
// selecteer alle articles met class "slam"
let slamPrograms = document.querySelectorAll('article.slam');

// Stap 2: voeg click event listener toe aan de button met een callback functie
slamRadioButton.addEventListener('click', hideSlamPrograms)

// Stap 3: definieer de callback functie
function hideSlamPrograms() {
    slamPrograms.forEach(article => {
        article.classList.toggle('hide-programs');
    });

    slamRadioButton.classList.toggle('active-radiobutton');
}



// Stap 1: selecteer 100%NL radio button
let honderdnlRadioButton = document.querySelector('.honderdnl-button');
// selecteer alle articles met class "honderdnl"
let honderdnlPrograms = document.querySelectorAll('article.honderdnl');

// Stap 2: voeg click event listener toe aan de button met een callback functie
honderdnlRadioButton.addEventListener('click', hideHonderdnlPrograms)

// Stap 3: definieer de callback functie
function hideHonderdnlPrograms() {
    honderdnlPrograms.forEach(article => {
        article.classList.toggle('hide-programs');
    });

    honderdnlRadioButton.classList.toggle('active-radiobutton');
}






/****************************************/
/* menu openen en sluiten met de button */
/****************************************/

/* JOUW CODE HIER - stap 4 */

// stap 1: zoek de menu-button op en sla die op in een variabele
const menuButton = document.querySelector("button");
const deNav = document.querySelector("nav");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
menuButton.addEventListener("click", toggleMenu);

// stap 3: voeg in de functie een class toe aan de nav

function toggleMenu() {
    deNav.classList.toggle("is-open");
}