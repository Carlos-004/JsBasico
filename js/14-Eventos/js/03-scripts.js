//Eventos sobre los input

const busqueda = document.querySelector(".busqueda");

// busqueda.addEventListener("keydown",() =>{
//     console.log("Escribiendo")
// })

// busqueda.addEventListener("keyup",() =>{
//     console.log("Escribiendo")
// })

// busqueda.addEventListener("blur",() =>{
//     console.log("Escribiendo")
// })
busqueda.addEventListener("input",(e) =>{
    console.log(e.target.value)
})