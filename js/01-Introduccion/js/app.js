// Solicita el nombre del usuario y actualiza el contenido
const userName = prompt("¿Cuál es tu nombre?");
const contenido = document.querySelector(".contenido");
contenido.innerHTML = `Hola ${userName}`;

const buscar = document.querySelector("#buscar");
const container = document.querySelector(".container");

const carritoContainer = document.querySelector(".carrito__container");
const carritoTotalContainer = document.querySelector(".precio-total");

const cantidad = document.querySelector(".cantidad")

const electrodomesticos = [
    { id: 1, nombre: 'Refrigerador', precio: 100 },
    { id: 2, nombre: 'Lavadora', precio: 200 },
    { id: 3, nombre: 'Microondas', precio: 300 },
    { id: 4, nombre: 'Horno', precio: 400 },
    { id: 5, nombre: 'Aspiradora', precio: 500 },
    { id: 6, nombre: 'Plancha', precio: 100 },
    { id: 7, nombre: 'Lavavajillas', precio: 600 },
    { id: 8, nombre: 'Secadora', precio: 700 },
    { id: 9, nombre: 'Ventilador', precio: 800 },
    { id: 10, nombre: 'Calefactor', precio: 900 },
    { id: 11, nombre: 'Batidora', precio: 1000 },
    { id: 12, nombre: 'Tostadora', precio: 1100 },
    { id: 13, nombre: 'Cafetera', precio: 1200 },
    { id: 14, nombre: 'Freidora', precio: 1300 },
    { id: 15, nombre: 'Licuadora', precio: 1400 },
    { id: 16, nombre: 'Extractor de jugos', precio: 1500 },
    { id: 17, nombre: 'Purificador de aire', precio: 1600 },
    { id: 18, nombre: 'Humidificador', precio: 1700 },
    { id: 19, nombre: 'Deshumidificador', precio: 1800 },
    { id: 20, nombre: 'Radiador', precio: 1900 }
];

const carrito = [];

// Maneja el evento del botón para calcular el descuento
const boton = document.querySelector(".boton");
boton.addEventListener("click", () => {
    const inputPrecio = document.querySelector("#precio");
    const inputPorciento = document.querySelector("#porciento");
    const total = document.querySelector(".total");

    const precio = parseFloat(inputPrecio.value);
    const porciento = parseFloat(inputPorciento.value);

    if (isNaN(precio) || isNaN(porciento)) {
        return total.innerHTML = "Por favor llene ambos campos con números válidos";
    }

    if (porciento < 0 || porciento > 100) {
        return total.innerHTML = "El porcentaje debe estar entre 0 y 100";
    }

    const resultadoTotal = Math.floor(precio * (1 - porciento / 100));
    total.innerHTML = `El precio con descuento es $${resultadoTotal}`;
});

// Función para mostrar los productos en el contenedor
function myProduct(productosEncontrados) {
    container.innerHTML = "";
    productosEncontrados.forEach(data => {
        const listUl = document.createElement("ul");
        const listLi = document.createElement("li");
        listLi.innerText = `${data.nombre}`;
        listLi.style.color = "#fff";
        listLi.addEventListener("click", () => agregarAlCarrito(data.id));
        listUl.append(listLi);
        container.append(listUl);
    });
}

// Función para agregar productos al carrito
function agregarAlCarrito(ID) {
    const productoCard = electrodomesticos.find(index => index.id === ID);
    if (!productoCard) return; // Asegúrate de que el producto exista
    carrito.push(productoCard);

    const listUl = document.createElement("ul");
    listUl.classList.add("ul");
    listUl.dataset.id = productoCard.id; // Agrega un atributo de datos con el ID del producto

    const listLi = document.createElement("li");
    listLi.innerText = `${productoCard.nombre}`;
    listLi.style.color = "#fff";
    listUl.append(listLi);

    const spanPrecio = document.createElement("span");
    spanPrecio.innerText = `  $${productoCard.precio.toFixed(2)}`;
    spanPrecio.style.color = "#fff";
    listUl.append(spanPrecio);

    const deleteIcon = document.createElement("p");
    deleteIcon.innerText = "X";
    deleteIcon.style.color = "#f50f0f";
    listUl.append(deleteIcon);
    deleteIcon.addEventListener("click", () => deleteProduct(productoCard.id));

    carritoContainer.append(listUl);

    calcularPrecioCard();
}

// Función para eliminar productos del carrito
function deleteProduct(ID) {
    const indexToRemove = carrito.findIndex(producto => producto.id === ID);
    
    if (indexToRemove !== -1) {
        carritoContainer.removeChild(carritoContainer.children[indexToRemove]);
        carrito.splice(indexToRemove,1)
    }
    calcularPrecioCard()
}

function calcularPrecioCard(){
    const sumaTotal = carrito.reduce((suma,total) => suma + total.precio, 0);

    const totalCard = document.createElement("p");
    totalCard.innerText = "Total";
    totalCard.style.color = "#fff";

    const precioTotal = document.createElement("p");
    precioTotal.innerText = `$${sumaTotal.toFixed(2)}`;
    precioTotal.style.color = "#fff";

    carritoTotalContainer.innerHTML = "";
    carritoTotalContainer.append(totalCard);
    carritoTotalContainer.append(precioTotal);

    cantidad.innerHTML = `${carrito.length}`;
}



// Función para buscar productos y actualizar la vista
function buscarProductos() {
    buscar.addEventListener("input", () => {
        const nombreProduct = buscar.value.toLowerCase();
        const productFiltrados = electrodomesticos.filter(dataFiltrad =>
            dataFiltrad.nombre.toLowerCase().includes(nombreProduct)
        );
        myProduct(productFiltrados);
    });
}

// Inicializa la vista con todos los productos
buscarProductos();
myProduct(electrodomesticos);
