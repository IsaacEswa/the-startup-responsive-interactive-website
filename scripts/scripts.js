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
// selecteer alle programma's met data-category "veronica"
let veronicaPrograms = document.querySelectorAll('article.veronica');

// Stap 2: voeg click event listener toe aan de button met een callback functie
veronicaRadioButton.addEventListener('click', hidePrograms)

// Stap 3: definieer de callback functie
function hidePrograms() {
    veronicaPrograms.forEach(article => {
        article.classList.toggle('hide-programs');
    });

    veronicaRadioButton.classList.toggle('active-radiobutton');
}