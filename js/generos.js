// Consultar la api para recuperar la información
// usamos fetch
let proxy = "https://api.allorigins.win/raw?url="
let endpoint = "https://api.deezer.com/genre"

fetch (`${proxy}${endpoint}`) // fecth(proxy+endpoint)
.then(function(data){
    // hacer nuestro codigo
    // lista de generos
    // imagen
    // nombre del genero
    // redirigir el detalle del genero
    let ul = document.querySelector("ul")
    for (let i = 0; i < data.data.length; i++){
         ul.innerHTML += ` 
         <li>
              <img scr = "${data.data[i].picture_xl}" >
              <a href= "generodetail.html?q=${data.data[i].id}">${data.data[i].name} </a>
          </li>
          `

    }

 })
 .catch(function(error) {console.log(error)})




