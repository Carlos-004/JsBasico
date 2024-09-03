//Mayor o Igual y else if 

const dinero = 200;
const totalApagar  = 300;
const tarjeta = true

if (dinero >= totalApagar) {
    console.log("Si podemos pagar")
}else if (tarjeta) {
    console.log("Puedo pagar con tarjeta")
}else{
    console.log("No tiene fondo suficientes")
}