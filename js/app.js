// Definir variables que vamos a usar
const send = document.querySelector('#send');
const nasa = document.querySelector('#nasa');

//Darle funcion al boton
send.addEventListener('click', queryNasa);

// Funcion llamar la api
function queryNasa(e){
    e.preventDefault();
    // escuchar la informacion del imput
    const day = document.querySelector('#day').value;
    /* console.log(day); */

    // llamar la informacion de la api
    const url = `https://api.nasa.gov/planetary/apod?api_key=fmnQD3jZLLVekLaQz7V02OErAaB4K7O3m55kOsKY&date=${day}`
    /* console.log(url); */

    //llamar api con fetch
    const apiNasa = fetch(url)
                        .then(response => response.json())
                        .then(data => showIntroDOM(data))
    console.log(apiNasa);
};

//Funcion para crear el html
function showIntroDOM(data){
    clearHTML();
    //desestructurar informacion de la api
    const {copyright,date,url,title,explanation,code} = data;
    /* console.log(data); */
    // Creacion de section para html
    const day = document.querySelector('#day').value;

    const titulo = document.createElement('h2');
    const autor = document.createElement('h3');
    const dia = document.createElement('h5');
    const imagen = document.createElement('img');
    const explicacion = document.createElement('p');


    titulo.textContent=`${title}`
    autor.textContent= `${copyright}`
    dia.textContent= `${date}`
    imagen.src=`${url}`
    explicacion.textContent=`${explanation}`

    nasa.appendChild(titulo);
    nasa.appendChild(autor);
    nasa.appendChild(dia);
    nasa.appendChild(imagen);
    nasa.appendChild(explicacion);

    if (code == 400){
        alert('La fecha debe estar entre el 16 de junio de 1995 - hoy');        
        clearHTML();
        document.getElementById('day').focus();
    } else if(code == 404){
        alert(`No hay datos disponibles para la fecha: ${day}`);        
        clearHTML();
        document.getElementById('day').focus();
    }

};

// Funcion limpiar pantalla con cada busqueda
function clearHTML(){
    nasa.innerHTML = '';
}

