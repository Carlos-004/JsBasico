//El problema con los objectos

const productos = {
    nombre:"Monitor",
    precio:3000,
    disponible:true,
    id:0
}

productos.disponible = false;

delete productos.precio;

console.log(productos)