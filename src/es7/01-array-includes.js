// 🧠 .includes() determina si un array contiene un valor determinado
// Devuelve true o false (ES7 - ECMAScript 2016)

let numbers = [1, 2, 3, 5, 8, 13];

console.log(numbers.includes(4));   // false, no está en el array
console.log(numbers.includes(13));  // true, sí está en el array

// ✅ También funciona con strings
let word = "Hola mundo";
console.log(word.includes("Hola"));    // true
console.log(word.includes("adiós"));   // false

// 🧪 .includes() es sensible a mayúsculas
console.log(word.includes("hola"));    // false

// ✅ En arrays de strings
let fruits = ["manzana", "pera", "uva"];
console.log(fruits.includes("pera"));      // true
console.log(fruits.includes("banana"));    // false

// 📌 .includes(valor, desdeIndice) → se puede especificar desde dónde buscar
console.log(numbers.includes(3, 2)); // true (busca desde índice 2)
console.log(numbers.includes(2, 2)); // false (desde índice 2 en adelante no está el 2)
