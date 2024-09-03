//La Diferencia entre Funcion expression y declaracion




// function declaracion
function suma(a,b){
    let resultado = a + b;
    return resultado;
}
console.log(suma(11,2))

// function expression
const potencia = function(a,b){
    let resultado = Math.pow(a,b)
    return resultado;
}
console.log(potencia(3,3))