//Comparar 2 valores

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//Revisar si dos valores son iguales (==)
console.log(numero1 == numero2);
console.log(numero1 == numero3);


//Revisar si dos valores o su tipo de datos son iguales
console.log(numero1 === numero2);
console.log(numero1 === parseInt(numero2));
console.log(numero1 === numero3);


//comparar si 2 valores son diferentes
console.log(numero1 != numero2);
console.log(numero1 !== parseInt(numero2));
console.log(numero1 != numero3);


const password = "Admin";
const Password = "admin"
console.log(password !== Password)