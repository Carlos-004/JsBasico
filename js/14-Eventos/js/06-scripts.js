//Que es el Event Bubbling

const cardDiv = document.querySelector(".card")
const infoDiv = document.querySelector(".info")
const tituloDiv = document.querySelector(".titulo")



cardDiv.addEventListener("click",(e) =>{
    e.stopPropagation();
    console.log("Click en card")
})


infoDiv.addEventListener("click",(e) =>{
    e.stopPropagation();
    console.log("Click en info")
})


tituloDiv.addEventListener("click",(e) =>{
    e.stopPropagation();
    console.log("Click en titulo")
})