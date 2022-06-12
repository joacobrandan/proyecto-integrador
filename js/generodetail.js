let query = location.search()
let objetoQuery = new URLSearchParams(query)
let genreId = objetoQuery.get("q")

let proxy = "https://api.allorigins.win/raw?url="
let endpoint = `https://api.deezer.com/genre/${genreId}`

fetch(`${proxy}${endpoint}`)
    .then(function(data) {
        return data.json()
    })
    .then(function(data) {
        let article = document.querySelector("article")

        article.innerHTML = `
            <img class="" src="${data.picture_xl}" alt="">
            <h1 class="">${data.name}</h1>
        `

        fetch(`${proxy}${endpoint}/artists`)
            .then(function(data) {
                return data.json()
            })
            .then(function(data) {
                
                let ul = document.querySelector("ul")
                
                for (let i = 0; i < data.data.length; i++) {

                    ul.innerHTML += `
                        <li>
                            <img class="imgcan1" src="${data.data[i].picture_xl}" alt="">
                            <p class="abcd">${data.data[i].name}</p>
                        </li>
                    `
                }

            })
            .catch(function(error) {console.log(error)})
    })
    .catch(function(error) {console.log(error)})

