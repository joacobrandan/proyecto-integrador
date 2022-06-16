let qS= location.search;
let qSObject= new URLSearchParams(qS);

let idTrack= qSObject.get('id');
 const url=`https://api.allorigins.win/raw?url=https://api.deezer.com/track/${idTrack}`; 


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
   <iframe style="border-radius:12px"
        src="https://open.spotify.com/embed/track/5jW3rF4URMdK7tO2xjS5EI?utm_source=generator" width="100%" height="380"
        frameBorder="0" allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
    </iframe>
    
    <a href="./playlist.html" class="nodeco">
            <h2 class="titulo"> Agregar a mi Playlist </h2>
       
        </a>
    `

})
.catch(function (error) {
    console.log('el error fue '+ error)
})

/* FALTA REPRODUCTOR Y PLAYLIST */