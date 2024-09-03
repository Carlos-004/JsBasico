const footer = document.querySelector(".footer")
const boton = document.querySelector(".btn-flotante");
boton.addEventListener("click",() =>{
    if (footer.classList.contains("activo")) {
        footer.classList.remove("activo");
        boton.style.color = "#000";
        boton.innerHTML = "Idioma y Moneda"
       
        
    }else{
        footer.classList.add("activo");
        boton.innerHTML = "CLOSE X"
        boton.style.color = "#ff0000";
    }
})