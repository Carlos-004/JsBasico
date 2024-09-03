//Eventos al dar scroll con el mouse

window.addEventListener("scroll",() =>{
    const premium = document.querySelector(".premium");
    const ubicacion = premium.getBoundingClientRect();
    

    if (ubicacion.top > 100) {
        console.log("El elemento esta vicible")
    }else{
        console.log("Aun no da mas scroll")
    }
})