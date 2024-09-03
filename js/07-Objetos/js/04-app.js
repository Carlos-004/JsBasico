//Destructuring de objecto


const productos = {
    nombre:"Monitor",
    precio:3000,
    disponible:true,
    id:0
}

const {nombre,precio} = productos;

console.log(`El ${nombre} tiene un precio de $${precio}`)