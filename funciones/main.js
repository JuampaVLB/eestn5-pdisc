const personas = [
    { nombre: "Maxi", edad: 19 },
    { nombre: "Juan", edad: 20 },
    { nombre: "Fabricio", edad: 50 }
];

const personas_longitud = personas.map(item => {
    return { nombre: item.nombre, longitud: item.nombre.length }
});

console.log(personas_longitud);
