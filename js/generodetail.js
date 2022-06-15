let query = location.search
let objetoQuery = new URLSearchParams(query)
let genreId = objetoQuery.get("q")

let proxy = "https://api.allorigins.win/raw?url="
let endpoint = `https://api.deezer.com/genre/${genreId}`

fetch(`${proxy}${endpoint}`)
    .then(function(data) {
        return data.json()
    })
    .then(function(data) {
        let article_img = document.querySelector("article img")
        let article_h1 = document.querySelector("article h1")

        article_img = data.picture_xl
        article_h1 = data.name

        fetch(`${proxy}${endpoint}/artists`)
            .then(function(data) {
                return data.json()
            })
            .then(function(data) {
                
                let ul = document.querySelector("article ul")
                
                for (let i = 0; i < data.data.length; i++) {

                    ul.innerHTML  `
                        <li>
                            <img class="imgcan1" "${data.data[i].picture_xl}" alt="">
                            <p class="abcd">${data.data[i].name}</p>
                        </li>
                    `
                }

            })
            .catch(function(error) {console.log(error)})
    })
    .catch(function(error) {console.log(error)})
