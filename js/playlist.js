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
                <img class="imgcan" src="https://images-na.ssl-images-amazon.com/images/I/413MrwhObfL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg" alt="Adan y Eva"> 
                
             <div>
                  <a href="./detail-track.html"> <h1 class="t1"> ${data.title}</h1> </a>
                   <a href="./detail-track.html">  <h2 class="t1">${data.artist.name}</h2> </a>
             </div>
  
             <div class="orden-iconos">
                 <div class="iconos" >
                   <i class="fa-solid fa-circle-play"></i>   <i class="fa-solid fa-circle-arrow-down"></i>  <i class="fa-solid    fa-heart"></i>
                 </div> 
             </div>
                
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

  