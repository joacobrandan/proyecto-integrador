let recupero_storage = localStorage.getItem("favoritos")
let favoritos = JSON.parse(recupero_storage)

let proxy = "https://api.allorigins.win/raw?url="
let endpoint = "https://api.deezer.com/track/"

let ul = document.querySelector("ul")

if (favoritos.length == 0 || favoritos == null) {
    alert("No hay canciones en favoritos")
   
    } else 
    for (let i = 0; i < favoritos.length; i++) {
        fetch(proxy+endpoint+favoritos[i])
            .then(function(data) {
                return data.json()
            })
            .then(function(data) {
                
                ul.innerHTML +=
                
                `
                <div class="abc">
                <img class="imgcan" src= "${data.album.cover_xl}" alt=""> 
                
             <div>
                  <a href="./detail-track.html"> <h1 class="t1"> ${data.title}</h1> </a>
                   <a href="./detail-track.html">  <h2 class="t1">${data.artist.name}</h2> </a>
             </div>
  
           
                     
                `
            })
            .catch(function(error) {console.log(error)})
}

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

  