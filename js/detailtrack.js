let qS= location.search;
let qSObject= new URLSearchParams(qS);

let idTrack= qSObject.get('id');
 const url=`https://api.deezer.com/track/${idTrack}`; 
 let proxy= "https://api.allorigins.win/raw?url=";
 let reproductor= `https://www.deezer.com/us/playlist/1479458365`


fetch(url )
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
    
    <a href="./playlist.html" class="nodeco">
            <h2 class="titulo"> Agregar a mi Playlist </h2>
       
        </a>
    `

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