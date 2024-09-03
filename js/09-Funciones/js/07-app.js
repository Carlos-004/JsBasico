//Como se comunican las funciones
iniciarApp()

function iniciarApp(){
    console.log("Iniciando APP...");
    segundaFuncion();
}

function segundaFuncion(){
    console.log("Desde la segunda funcion")

    usuarioAutenticado("Carlos");
}


function usuarioAutenticado(nombre){
    console.log("Autenticado usuario... espere...");

    console.log(`Usuario autenticado exitosamente ${nombre}`)
}