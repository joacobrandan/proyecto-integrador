window.addEventListener('load', function () {
    
})   
   
   /*CANCIONES*/

    let proxy=  "https://api.allorigins.win/raw?url=";
    let url="https://api.deezer.com/chart";
    let dataTrack= [];
    let listaTrack= document.querySelector('.contenedorli')

    fetch(proxy+url)
        .then(function (response) {
            return response.json();
        })
        .then(function (dataTrack) {
            console.log(dataTrack)

            let info= dataTrack.tracks.data;

            

            for (let i = 0; i < 5; i++) {
            listaTrack.innerHTML+=
            
            `<li class="lista"> 

            <a href="./detail-track.html?id=${info[i].id}" class="titulocancion"> 
            <h3 class="tracktitulo">${info[i].title}</h3>
            <img src="${info[i].album.cover_big} " alt="fresco" class="imgmusica">
            </a>

            <a href="./detail-artist.html?id=${info[i].artist.id}" class="artista"> ${info[i].artist.name} </a>
                
        </li> `
                
            }
        })
        .catch(function (error) {
            console.log('el error fue' + error);
        })

    /* ARTISTAS */

        let dataArtist = [];
        let listaArtist= document.querySelector(".contenedorlia")

    fetch(proxy+url)
        .then(function (response) {
            return response.json();
        })
        .then(function (dataArtist) {
            console.log(dataArtist)

            let infoA= dataArtist.artists.data;
            console.log(infoA)

            

            for (let i = 0; i < 5; i++) {

                listaArtist.innerHTML+=
            
        
                
        `<li class="lista"> 
        <a href="./detail-artist.html?id=${infoA[i].id}"  class="titulocancion"> <h3>${infoA[i].name}</h3> 
            <img src="${infoA[i].picture_big}" alt="artista" class="imgmusica">
        </a>
        </li> `
            }

        })
        .catch(function (error) {
            console.log('el error fue' + error);
        })

        /*albumes */

        let dataAlbum = [];
        let listaAlbum= document.querySelector(".contenedorlialbum") 

        fetch(proxy+url)
            .then(function (response) {
                return response.json();
            })
            .then(function (dataAlbum) {
                console.log(dataAlbum)
        
            let infoAlbum= dataAlbum.albums.data;
                
        
                for (let i = 0; i < 5; i++) {
        
                    listaAlbum.innerHTML+=
                
            
                    
            `
            <li class="lista"> 
            <a href="./detail-album.html?id=${infoAlbum[i].id}"  class="titulocancion"> <h3>${infoAlbum[i].title}</h3> 
                <img src="${infoAlbum[i].cover_big}" alt="artista" class="imgmusica">
            </a>
            </li> `
                }
        
            })
            .catch(function (error) {
                console.log('el error fue' + error);
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

            
