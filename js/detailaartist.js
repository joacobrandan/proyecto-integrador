let qS= location.search;
let qSObject= new URLSearchParams(qS);

let idArtist= qSObject.get('id');
 const url=`https://api.deezer.com/artist/${idArtist}`; 
 let proxy="https://api.allorigins.win/raw?url="

fetch(url)
.then(function (response) {
  return response.json();  
})
.then(function (data) {  
    console.log(data);
    let imprimir= document.querySelector('.detailartist');

   
    let info= data;

   
    imprimir.innerHTML+= 
    `   <h1 class="pl1"> ${info.name}</h1>
    <div class="pl3">
       
    <img class="pl2" src="${info.picture_big}" alt="">
    
  
    </div>

    `
  
     
})
.catch(function (error) {
    console.log('el error fue '+ error)
})

/*top cinco */



let rutaFive= `https://api.deezer.com/artist/${idArtist}/albums`;

fetch(rutaFive)
.then(function (response) {

  return response.json(); 

})
.then(function (data) {  
    console.log(data);
    let imprimirTop = document.querySelector('.five');
  for (let i = 0; i < 5; i++) {
    let canciones = data.data[i].title;
    console.log(canciones)

    imprimirTop.innerHTML+=` 
    

    <li> <a href="./detail-album.html?id=${canciones.id}"  class="titulocancion"> ${canciones} </a></li>

   
    `
    

    }
 
    
  
})

.catch(function (error) {
    console.log('el error fue '+ error)
})
