//Funciones en objectos y acceder a sus valores

const productos = {
    nombre:"Monitor",
    precio:3000,
    disponible:true,
    id:0,
    detalleDelProducto:function(){
        console.log(`El ${this.nombre} tiene un precio de $${this.precio} USD`)
    }
}

productos.detalleDelProducto()