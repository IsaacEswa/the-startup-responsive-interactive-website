// // API endpoint returning JSON 
// const url = 'https://fdnd-agency.directus.app/items/mh_shows?fields=*,show.*'

// // fetch JSON data
// fetch(url).then(response => response.json())
//     .then(data => renderHTML(data.data))
//     .catch(err => console.error(err))

// // render shows to HTML
// function renderHTML(shows) {

//     // loop through all shows
//     shows.forEach(item => {
//         // create HTML string with string literal
//         const html = `
//         <article class="single-program">
//             <div class="program-thumbnail">
//                 <img src="https://fdnd-agency.directus.app/assets/${item.show.thumbnail}" width="200">
//             </div>

//             <div class="program-info">
//                 <h2 class="program-title">${item.show.name}</h2>
//                 <p class="program-time">
//                     <time>${item.from}</time> - <time>${item.until}</time>
//                 </p>
//             </div>
//         </article>
//     `

// Insert at the end of the container after eachother
// document.body.insertAdjacentHTML("beforeend", html)
// document.querySelector(".programs").insertAdjacentHTML("beforeend", html)
//     });
// }


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