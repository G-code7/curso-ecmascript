// Declarando una variable con 'var'
var carro = 'chevrolet'; 
// 'var' permite declarar variables que pueden ser reasignadas y tiene *function scope*

carro = 'Ford'; 
// Podemos reasignar libremente su valor

console.log(carro); // → 'Ford'


// Declarando con 'let'
let fruta = 'piña';
// 'let' también permite reasignación, pero tiene *block scope* (más estricto que var)

fruta = 'manzana';
console.log(fruta); // → 'manzana'


// Declarando con 'const'
// const animal = 'perro';
// animal = 'gato';
// console.log(animal);
// Esto genera un error: TypeError. Las variables declaradas con 'const' NO pueden ser reasignadas.


// Función que demuestra el comportamiento de var
const pc = () => {
    if(true) {
        var pc1 = 'Dell';      // A pesar de estar en un bloque, 'var' es function-scoped
        var pc2 = 'HP';        // También accesible fuera del if
        var pc3 = 'Alien Ware';
    }
    console.log(pc1); // → 'Dell'
    console.log(pc2); // → 'HP'
    console.log(pc3); // → 'Alien Ware'
}

pc();

// Segundo ejemplo: Control de stock en una tienda 

// Usamos 'let' para valores que pueden cambiar
let stock = 20;
stock = stock - 5; // Se vendieron 5 productos
console.log(`Stock restante: ${stock}`); // → 15

// Usamos 'const' para valores que no deben cambiar
const tienda = 'La Bodega de Juan';
// tienda = 'Otra tienda'; // ❌ Error: no se puede reasignar una constante

// Usamos 'var' solo si necesitas compatibilidad con ES5 (no recomendado en ES6+)
var producto = 'Café';
producto = 'Té';
console.log(`Producto actual: ${producto}`); // → Té

// Ejemplo de uso de 'let' y 'const' en un bucle
for (let i = 0; i < 3; i++) {
    const mensaje = `Iteración ${i + 1}`;
    console.log(mensaje); // → Iteración 1, Iteración 2, Iteración 3
}
// console.log(mensaje); // ❌ Error: mensaje no está definido fuera del bloque
// Ejemplo de uso de 'var' en un bucle
for (var j = 0; j < 3; j++) {
    var mensajeVar = `Iteración ${j + 1}`;
    console.log(mensajeVar); // → Iteración 1, Iteración 2, Iteración 3
} 
console.log(mensajeVar); // → Iteración 3 (mensajeVar está definido fuera del bloque)
// Ejemplo de uso de 'let' y 'const' en un objeto
const persona = {
    nombre: 'Ana',
    edad: 30,
    pais: 'VE'
};  
// persona = { nombre: 'Luis' }; // ❌ Error: no se puede reasignar un objeto constante
persona.nombre = 'Luis'; // ✅ Se puede modificar una propiedad del objeto
console.log(persona); // → { nombre: 'Luis', edad: 30, pais: 'VE' }
