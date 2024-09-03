//Copiar 2 objecto


const productos = {
    nombre:"Monitor",
    precio:3000,
    disponible:true,
    id:0
}

const informacion ={
    medidas:{
        peso:"1kg",
        medida:"1m"
    },
    fabricacion:{
        pais:"RD"
    }
}

console.log({...productos,...informacion})