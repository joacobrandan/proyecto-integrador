let qS= location.search;
let qSObject= new URLSearchParams(qS);

let idArtist= qSObject.get('id');
 const url=`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${idArtist}`; 
 

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



let rutaFive= `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${idArtist}/top?limit=5`

fetch(rutaFive)
.then(function (response) {

  return response.json(); 

})
.then(function (data) {  
    console.log(data);
    let imprimirTop = document.querySelector('.five');
  for (let i = 0; i < data.data.length; i++) {
    let canciones = data.data[i].title;
    console.log(canciones)

    imprimirTop.innerHTML+=` 
    
    <li>${canciones}</li>
    `
    

    }
 
    
  
})

.catch(function (error) {
    console.log('el error fue '+ error)
})
