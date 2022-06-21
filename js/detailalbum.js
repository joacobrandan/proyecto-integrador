window.addEventListener('load', function (e) {
    console.log(e);

    let qS= location.search;
    let qSObject= new URLSearchParams(qS);
    let idAlbum= qSObject.get('id');

    let url= `https://api.deezer.com/album/${idAlbum}`;
    let proxy= "https://api.allorigins.win/raw?url=";

    fetch (proxy+url)
        .then(function (params) {
            return params.json();
        })

        .then(function (data) {
            console.log(data)
        let imprimir= document.querySelector('.albumbody')
        let artist= data.artist;
        let genero= data.genres.data[0];

    
        
            
        
    
            imprimir.innerHTML+=`
            <ul type="none">
            <li >
            <h2 class="albumti1"> Album: ${data.title}</h2>

        </li>
            <li>
                <a href="./detail-artist.html?id=${artist.id}" class="nodeco"> <h2 class="albumti1">${artist.name}</h2></a>
            </li>

            <li>
                <h2 class="albumti1">Pertenece al genero ${genero.name}</h2>

            </li>

            <li>
                <h2 class="albumti1">Fecha de la publicacion del disco: ${data.release_date}</h2>
            </li>

            <li>
                <img class="plalbum" src="${data.cover_xl}" alt="">
            </li>  
            </ul>
            `
        


        })
        .catch(function (error) {
            console.log('el error fue ' + error)
        })

    /*tracks*/

    let urlTracks= `https://api.deezer.com/album/${idAlbum}/tracks`

    fetch(proxy+urlTracks)
    .then(function (params) {
            return params.json();
    })
    .then(function (data) {
        console.log(data)
        

        for (let i = 0; i < data.length; i++) {  
            let tracksAlbum = data.data[i];
            console.log(tracksAlbum);
            let imprimir= document.querySelector(".toppaulo");
            imprimir.innerHTML+=
            `
            <li >
            <a href="./detail-track.html?id=${tracksAlbum.id}"  class="titulocancion"> ${tracksAlbum.title} </a>
            </li >
            `
        }
    })
    .catch(function (error) {
        console.log('el erro fue ' + error) 
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
        
    
})        