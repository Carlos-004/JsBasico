//Sellar un objectos

"use strict"

const productos = {
    nombre:"Monitor",
    precio:3000,
    disponible:true,
    id:0
}


Object.seal(productos)

// productos.disponible = false;
// productos.img = "img.jpg"


console.log(productos)
console.log(Object.isSealed(productos))