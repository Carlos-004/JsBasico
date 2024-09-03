//Agregar o eliminar propiedades de un objecto


const productos = {
    nombre:"Monitor",
    pecio:3000,
    disponible:true,
    id:0
}

//Agregar propiedades
productos.img = "img.jpg";

//Elminar propiedades
delete productos.id

console.log(productos)