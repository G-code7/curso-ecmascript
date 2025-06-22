// 📦 Definimos un array de 10 elementos
const array = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

// 🔢 Accediendo al último elemento con la forma tradicional
console.log(array[array.length - 1]); // Output: ten

// ✅ Usando .at() para acceder al último elemento de forma más legible
console.log(array.at(-1)); // Output: ten

// 🔢 También se puede acceder al penúltimo, etc.
console.log(array.at(-2)); // Output: nine
console.log(array.at(0));  // Output: one
console.log(array.at(3));  // Output: four

// 🧪 Caso con índice fuera de rango
console.log(array.at(20)); // undefined
console.log(array.at(-20)); // undefined
