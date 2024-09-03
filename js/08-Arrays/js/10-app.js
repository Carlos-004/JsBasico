//Map


const producto = [
    {nombre:"🚕",precio:1000},
    {nombre:"🏎",precio:1000},
    {nombre:"🚗",precio:1000},
    {nombre:"🚲",precio:1000},
    {nombre:"🚠",precio:1000},
    {nombre:"🚓",precio:1000},
    {nombre:"🛩",precio:1000},
    {nombre:"🛵",precio:1000},
    {nombre:"🚎",precio:1000},
    {nombre:"🚑",precio:1000},
]

const newArray = producto.map(data =>{
    return data.nombre;
})

console.log(newArray)