//Eventos con el mouse

const nav = document.querySelector(".navegacion");


nav.addEventListener("mouseenter",() =>{
    console.log("Entrando a la navegacion")
})

nav.addEventListener("mouseout",() =>{
    console.log("Saliendo de la navegacion")
})

nav.addEventListener("mousedown",() =>{
    console.log("Saliendo de la navegacion")
})