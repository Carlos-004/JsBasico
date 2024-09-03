//Objecto constructor

function Producto(nombre,precio,disponible,id){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
    this.id = id
}

const newProducto = new Producto("Toyota",90000,true,0);