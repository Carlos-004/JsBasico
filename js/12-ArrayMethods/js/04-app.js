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


const productoFiltrado = producto.filter(index => index.nombre && index.precio <= 4000);
console.log(productoFiltrado)