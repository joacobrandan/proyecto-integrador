let qS= location.search;
let qsObject= new URLSearchParams(qS);
let busqueda= qsObject.get('buscar');
let proxy=`https://api.allorigins.win/raw?url=`;
let urlArtist= `https://api.deezer.com/search/artist?q=${busqueda}`;
let noResultadosTrack= document.querySelector('.artist-resultados');
let noResultadosAlbum= document.querySelector('.album-res');
let noResultadosArtist= document.querySelector('.track-res')

/*ARTISTAS */


fetch(  urlArtist)
    .then(function (params) {
        return params.json();

    })

    .then(function (data) {

        console.log(data)

        /* NO RESULTADOS */

    if (data.data.length===0) {
        noResultadosArtist.innerHTML+=`
        <h3 class="titulos nores">No se encontraron resultados para su busqueda: ${busqueda}</h3>
        `
    }
        else{
        for (let i = 0; i < 6; i++) {
            let artista = data.data[i];
            
        

        let imprimir= document.querySelector('.artist-resultados');

        imprimir.innerHTML+=
       
        `
        <div class="divartist">
            <a href="./detail-artist.html?id=${artista.id}" class="nodeco">
            <h1 class="nodeco">${artista.name}</h1>
            <img src="${artista.picture_big}" alt="perfil-paulo" class="imgres">
            </a>
        </div>
        
        `
    }

    
}
    })
    .catch(function (error) {
        console.log('el error es ' + error)
        
    })

    /*ALBUMS */
    let urlAlbum= `https://api.deezer.com/search/album?q=${busqueda}`;

    fetch(urlAlbum)
    .then(function (params) {
        return params.json();
    })
    .then(function (data) {
        console.log(data);

     /* NO RESULTADOS */

     if (data.data.length===0) {
        noResultadosAlbum.innerHTML+=`
        <h3 class="titulos nores">No se encontraron resultados para su busqueda: ${busqueda}</h3>
        `
    }   
    else{
    
        for (let i = 0; i < data.data.length; i++) {
            let album = data.data[i];
            
            let imprimir= document.querySelector('.album-res');

            imprimir.innerHTML+=
            
            `
            <div class="-res">

            <a href="./detail-track.html" class="img-res">
            
                 <img src="${album.cover_big}" alt="homerun" class="babypaulores">
                <a href="./detail-album.html?id=${album.id}" class="nodeco">
             <h2 class="subtitulos"> ${album.title}</h2>
   
        </div>
            `
        }

    }

    })

    /*TRACKS*/

let urlTrack= `https://api.deezer.com/search/track?q=${busqueda}`;

fetch(urlTrack)

    .then(function (params) {
        return params.json();
    })

    .then(function (data) {
        console.log(data)

        if (data.data.length===0) {
            /* NO RESULTADOS */
            noResultadosTrack.innerHTML+= 
            `
            <h3 class="titulos nores">No se encontraron resultados para su busqueda: ${busqueda} </h3>
    
            `
        }
        else{
        for (let i = 0; i < data.data.length; i++) {
            let tracks = data.data[i];
            let imprimir= document.querySelector('.track-res');
            imprimir.innerHTML+=
            `
            <div class="-res">
           
         
            <img src="${tracks.album.cover_big}" alt="homerun" class="babypaulores">

            <a href="./detail-track.html?id=${tracks.id}" class="nodeco">
            <h2 class="subtitulos"> ${tracks.title}</h2>
     
    </div>

            `
        }
           /*  <div class="simbolos">
             
            <i class="fa-regular fa-heart"></i> 
         
        </div>*/
   
        }

    })
    .catch(function (error) {
        console.log('el error es '+ error)
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

      