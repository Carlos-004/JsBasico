//String metodo Replace,Slice y Substring

const producto = "Monitor de 24 pulgadas";
const newProduc = "Monitor curbo"

//El metodo Replace lo que hace es que cambia una cadena de texto completa o una parte de ella oh la regresa igual a como estaba
console.log(producto.replace("Monitor",newProduc))

//El metodo Slice() sireve para cortar por su indice
console.log(producto.slice(0,8));
console.log(producto.slice(0,10))
console.log(producto.slice(2,1));//Cuando el indice inicial es mayor al segundo la cadena de texto se regresa en blanco


//El metodo Substring sireve para cortar por su indice
console.log(producto.substring(0,8));
console.log(producto.substring(0,10))
console.log(producto.substring(2,1));//El metodo substring() invierte los indice cuando el primero sea mayor al segundo 



console.log(producto.charAt(0))