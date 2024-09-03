//El operador || para validar cuando una condicion se cumple

const efectivo = 300;
const valance = 700;
const metodoDePago = efectivo + valance;
const Cheque = true;
const tarjeta = true;
const totalApagar = 900;

if (efectivo >= totalApagar || valance >= totalApagar ||  Cheque >= totalApagar ||  tarjeta >= totalApagar || metodoDePago >= totalApagar) {
    console.log("Puedes pagar")
}else{
    console.log("No puedes pagar")
}