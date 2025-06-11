// ARRAY DESTRUCTURING
let fruits = ['Apple', 'Banana', 'Watermelon']; // arreglo con 3 frutas
let [a, b] = fruits; // a = 'Apple', b = 'Banana'
console.log(a, fruits[2]); // muestra 'Apple' y 'Watermelon'


// OBJECT DESTRUCTURING
let user = { username: 'Gustavo', age: 31 };
// Extraemos propiedades username y age del objeto user
let { username, age } = user;
console.log(username, user.age); // muestra 'Gustavo' y 31


// Segundo contexto: destructuring en función para configuración

function mostrarConfiguracion({theme = 'dark', fontSize = 14} = {}) {
  console.log(`Tema: ${theme}, Tamaño de fuente: ${fontSize}px`);
}

mostrarConfiguracion({ theme: 'light', fontSize: 18 }); // Tema: light, Tamaño de fuente: 18px
mostrarConfiguracion(); // Tema: dark, Tamaño de fuente: 14px
