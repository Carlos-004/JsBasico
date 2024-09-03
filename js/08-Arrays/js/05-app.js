//Añadir nuevos elementos al fin o Inicio de un array

let carrito = [];



const newProducto = {
    nombre:"Tv",
    precio:3000,
    id:1
}
carrito.unshift(newProducto)

const producto = {
    nombre:"Laptop",
    precio:2000,
    id:0
}
carrito.push(producto)




console.log(carrito)