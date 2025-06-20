// 🧠 Trailing commas (comas finales) y sparse arrays

// 👉 El array tiene comas sin valores definidos (elementos vacíos)
// Aquí hay 9 posiciones explícitas: 0-4 con valores, 5-8 vacías, 9 con valor
const array = [1, 2, 3, 4, 5, , , , , 42];

console.log(array);        // [1, 2, 3, 4, 5, <4 empty items>, 42]
console.log(array.length); // 10

// 📌 .map() ignora los elementos vacíos (sparse)
// No los itera, por lo tanto no ejecuta la función sobre ellos
const doubled = array.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8, 10, <4 empty items>, 84]

// 🧪 Podemos hacer una iteración segura llenando los vacíos con `.map()` + default
const filled = array.map(item => item !== undefined ? item * 2 : 0);
console.log(filled); // [2, 4, 6, 8, 10, 0, 0, 0, 0, 84]

// ✅ Usar .flatMap() o .filter(Boolean) puede ser útil en casos similares
const compacted = array.filter(item => item !== undefined);
console.log(compacted); // [1, 2, 3, 4, 5, 42]

// 🔄 Comas finales en objetos también son válidas (desde ES5)
// No generan error de sintaxis
const person = {
  name: 'Ana',
  age: 30,
  country: 'VE', // ← comma final válida
};

console.log(person);
