//Destructuring de Objecto Anidados

const productos = {
    nombre:"Monitor",
    precio:3000,
    disponible:true,
    id:0,
    informacion:{
        medidas:{
            peso:"1kg",
            medida:"1m"
        },
        fabricacion:{
            pais:"RD"
        }
    }
}
const {informacion,informacion:{fabricacion:{pais}}} = productos;
console.log(`El pais es ${pais}`)