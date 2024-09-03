//Recorrer un array

const meses = ["Enero","Febrero","Marzo","Mayo","Abril"]


for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
    
}


for (const item of meses) {
    console.log(`for of ${item}`)
}