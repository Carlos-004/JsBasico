//Cortar los espacios en blanco con los string

const producto = "        Monitor de 24 pulgadas          ";


//EL metodo trimStart() corta los espacios en blanco al inicio del string
console.log(producto.trimStart());//Monitor de 24 pulgadas          ;


//EL metodo trimEnd() corta los espacios en blanco al final del string
console.log(producto.trimEnd());//        Monitor de 24 pulgadas


//El metodo trim() corta los espacios en blanco de ambos lados 
console.log(producto.trim());//Monitor de 24 pulgadas