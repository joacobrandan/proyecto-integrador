let query = location.search
let objetoQuery = new URLSearchParams(query)
let genreId = objetoQuery.get("q")

let proxy = "https://api.allorigins.win/raw?url=";
let endpoint = `https://api.deezer.com/genre/${genreId}`

fetch(`${proxy}${endpoint}`)
    .then(function(data) {
        return data.json()
    })
    .then(function(data) {
        let article_img = document.querySelector("article img")
        let article_h1 = document.querySelector("article h1")

        article_img.src = data.picture_xl
        article_h1.innerText = data.name

        fetch(`${proxy}${endpoint}/artists`)
            .then(function(data) {
                return data.json()
            })
            .then(function(data) {
                
                let ul = document.querySelector("article ul")
                
                for (let i = 0; i < data.data.length; i++) {

                    ul.innerHTML += `
                        <li class = "generodetailli">
                            <img class="imgcan1" src="${data.data[i].picture_xl}" alt="">
                            <p class="abcd">${data.data[i].name}</p>
                        </li>
                    `
                }

            })
            .catch(function(error) {console.log(error)})
    })
    .catch(function(error) {console.log(error)})

    
  /* BUSCADOR */

  let buscador = document.querySelector('.search');
  let form= document.querySelector('.form');
  let parrafo= document.querySelector('.mensaje')

  form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (buscador.value == '') {
          parrafo.innerText= 'el campo esta vacio';
      }
      else if (buscador.value.length <=3){
          parrafo.innerText=' escribe mas de 3 caracteres'
      }
      else{
          this.submit();
      }        
  })

  