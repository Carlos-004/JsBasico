
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


for (const key in producto) {
    if (Object.prototype.hasOwnProperty.call(producto, key)) {
        const element = producto[key];
        console.log(element.nombre)
    }
}