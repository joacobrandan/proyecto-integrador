let qS= location.search;
let qSObject= new URLSearchParams(qS);

let idTrack= qSObject.get('id');
 const url=`https://api.deezer.com/track/${idTrack}`; 
 let proxy= "https://api.allorigins.win/raw?url=";
 let reproductor= `https://www.deezer.com/us/playlist/1479458365`


fetch(proxy+url)
.then(function (response) {
  return response.json();  
})
.then(function (data) {  
    console.log(data);
    let imprimir= document.querySelector('.detailtrack');

    let info= data;
    

   
    imprimir.innerHTML+= 
    `
    <h1 class="talvez"> ${info.title}</h1>

    <a  href="./detail-artist.html?id=${info.artist.id}" class="nodeco" >

        <h2 class="titulo">Artista: ${info.artist.name} </h2>

    </a>
    <a href="./detail-album.html?id=${info.artist.id}" class="nodeco">
        <h3 class="titulo"> ${info.album.title}</h3>
    </a>
    <iframe title="deezer-widget" src="https://widget.deezer.com/widget/auto/track/${info.id}" width="40%" height="350" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write">
    </iframe>
    
    
            <h2 class="titulo" id = "boton" > Agregar a mi Playlist </h2>
       
        
    `
let favoritos = []
if (localStorage.getItem("favoritos")) {
  favoritos = JSON.parse (localStorage.getItem("favoritos"))  
  }
  let boton = document.querySelector ("#boton")
  console.log (boton)
  if (favoritos.includes(info.id)) {
   boton.innerText= "Eliminar de mi Playlist" 
}
boton.addEventListener("click",function(){
    console.log ("click")
    if (favoritos.includes(info.id)) {
        let i = favoritos.indexOf (info.id)
        favoritos = favoritos.splice (i,1)
        boton.innerText = "Agregar a mi Playlist"
     }
     else {
        favoritos.push(info.id)
        boton.innerText= "Eliminar de mi Playlist" 
     }
  localStorage.setItem ("favoritos",JSON.stringify(favoritos))
})
})
.catch(function (error) {
    console.log('el error fue '+ error)
})

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

  

/* FALTA PLAYLIST */
 