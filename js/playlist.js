let recupero_storage = localStorage.getItem("favoritos")
let favoritos = JSON.parse(recupero_storage)

let proxy = "https://api.allorigins.win/raw?url="
let endpoint = "https://api.deezer.com/track"

let ul = document.querySelector("ul")

if (favoritos.length > 0) {
    for (let i = 0; i < favoritos.length; i++) {
        fetch(`${proxy}${endpoint}${favoritos[i]}`)
            .then(function(data) {
                return data.json()
            })
            .then(function(data) {
                
                ul.innerHTML += `
                    <li>
                        <a href="detail-track.html?q=${data.id}>${data.title_short}</a>
                    </li>
                `
            })
            .catch(function(error) {console.log(error)})
    }
} else {
    alert("No hay canciones en favoritos")
}