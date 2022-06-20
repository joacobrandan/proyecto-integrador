let proxy = " https://cors-anywhere.herokuapp.com/"
let endpoint = "https://api.deezer.com/genre"

fetch(proxy+endpoint) // fetchproxy+endpoint
.then(function(params) {
    return params.json();
})
.then(function(data) { 
    console.log(data.data);
    let ul = document.querySelector(".lista")
    for (let i = 0; i < data.data.length; i++) {
        ul.innerHTML += `<li>
            <img src="${data.data[i].picture_xl}" >
            <a href="./generodetail.html?q="${data.data[i].id}>${data.data[i].name}</a>
        </li>`
    }
})
.catch(function(error) {console.log(error)})

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

  


