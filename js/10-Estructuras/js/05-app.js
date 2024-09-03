//Switch evalua multiples condiciones

const metodoDePago = "Efectivo";

switch (metodoDePago) {
    case "Cheque":
        console.log(`Puedo pagar con  ${metodoDePago}`)
        break;
    case "Tarjeta":
        console.log(`Puedo pagar con  ${metodoDePago}`)
        break;
    case "Efectivo":
        console.log(`Puedo pagar con  ${metodoDePago}`)
        break;

    default:
        console.log("No tienes fondo con lo que puedas pagar")
        break;
}