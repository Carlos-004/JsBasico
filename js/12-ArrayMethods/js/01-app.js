const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const producto = [
    {nombre:"🚕",precio:1000},
    {nombre:"🏎",precio:2000},
    {nombre:"🚗",precio:3000},
    {nombre:"🚲",precio:4000},
    {nombre:"🚠",precio:5000},
    {nombre:"🚓",precio:6000},
    {nombre:"🛩",precio:7000},
    {nombre:"🛵",precio:8000},
    {nombre:"🚎",precio:9000},
    {nombre:"🚑",precio:10000},
]

const productoBarrato = producto.some(index => index.precio <= 10000)
console.log(productoBarrato)