let qS= location.search;
let qSObject= new URLSearchParams(qS);
let idAlbum= qSObject.get('id');

let url= `https://api.deezer.com/album/${idAlbum}`;
let proxy= "https://api.allorigins.win/raw?url=";

fetch (url)
    .then(function (params) {
        return params.json();
    })

    .then(function (data) {
        console.log(data)
    let imprimir= document.querySelector('.albumbody')
    let artist= data.artist;
    let genero= data.genres.data[0];

   
       
        
    
 
        imprimir.innerHTML+=`
        
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

        `
       


    })
    .catch(function (error) {
        console.log('el error fue ' + error)
    })

   /*tracks*/

   let urlTracks= `https://api.deezer.com/album/${idAlbum}/tracks`

   fetch(urlTracks)
   .then(function (params) {
        return params.json();
   })
   .then(function (data) {
    console.log(data)
    

    for (let i = 0; i < data.length; i++) {  
        let tracksAlbum = data.data[i];
        let imprimir= document.querySelector('.toppaulo');

        imprimir.innerHTML+=

        `
         
        <li>${tracksAlbum.title}</li>
        
        `

    }
   })
   .catch(function (error) {
    console.log('el erro fue ' + error) 
   })