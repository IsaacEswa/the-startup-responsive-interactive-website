// API endpoint returning JSON 
const url = 'https://fdnd-agency.directus.app/items/mh_shows?fields=*,show.*'

// fetch JSON data
fetch(url).then(response => response.json())
    .then(data => renderHTML(data.data))
    .catch(err => console.error(err))

// render shows to HTML
function renderHTML(shows) {

    // loop through all shows
    shows.forEach(item => {
        // create HTML string with string literal
        const html = `
      <article>
        <img src="https://fdnd-agency.directus.app/assets/${item.show.thumbnail}" width="200">
        <h2>${item.show.name}</h2>
        <p>${item.show.body}</p>
        <time>${item.from}</time>
        <time>${item.until}</time>
      </article>
    `

        // Insert at the end of the container after eachother
        document.body.insertAdjacentHTML("beforeend", html)
    });
}