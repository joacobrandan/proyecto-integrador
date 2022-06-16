let proxy = "https://api.allorigins.win/raw?url="
let endpoint = "https://api.deezer.com/genre"

fetch(`${proxy}${endpoint}`) // fetch(proxy+endpoint)
.then(function(data) {
    return data.json()
})
.then(function(data) {
    let ul = document.querySelector("ul")
    for (let i = 0; i < data.data.length; i++) {
        ul.innerHTML += `<li>
                            <img src="${data.data[i].picture_xl}" >
                            <a href="generodetail.html?q=${data.data[i].id}">${data.data[i].name}</a>
                        </li>`
    }
})
.catch(function(error) {console.log(error)})



