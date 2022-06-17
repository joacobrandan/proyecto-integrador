let proxy = "https://api.allorigins.win/raw?url="
let endpoint = "https://api.deezer.com/genre"

fetch   (proxy+endpoint) // fetchproxy+endpoint
.then(function(params) {
    return params.json();
})
.then(function(data) { 
    console.log(data);
    let ul = document.querySelector("ul")
    let genero = data.data[i];
    for (let i = 0; i < data.data.length; i++) {
        ul.innerHTML += `<li>
                            <img src="${genero.picture_big}" >
                            <a href="generodetail.html?q="${genero.picture_big}>${data.data[i].name}</a>
                        </li>`
    }
})
.catch(function(error) {console.log(error)})




