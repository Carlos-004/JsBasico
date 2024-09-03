//Buenas practicas con Booleans
const suscriptcion = true;


if (suscriptcion) {
    console.log("Puedes ver netflix")
}else{
    console.log("No tienes acceso inicia seccion")
}


const dispoible  = suscriptcion? "Puedes ver netflix":"No tienes acceso inicia seccion";
console.log(dispoible)