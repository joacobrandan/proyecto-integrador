let recupero_storage = localStorage.getItem("favoritos")
let favoritos = JSON.parse(recupero_storage)

let proxy = "https://api.allorigins.win/raw?url="
let endpoint = "https://api.deezer.com/track"

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
                    <li>
                        <a href="detail-track.html?q=${data.id}>${data.title_short}</a>
                    </li>
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

  