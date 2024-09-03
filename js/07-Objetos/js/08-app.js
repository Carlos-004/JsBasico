//Congelar un objecto para no ser modificados 

"use strict"

const productos = {
    nombre:"Monitor",
    precio:3000,
    disponible:true,
    id:0
}


Object.freeze(productos)

// productos.disponible = false;
// productos.img = "img.jpg"


console.log(productos)
console.log(Object.isFrozen(productos))