//Evento Submit a un formulario

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit",(e) =>{
    e.preventDefault();

    console.log(e)
})