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

// SPREAD OPERATOR (operador de propagación)
// Unimos las propiedades del objeto person con country y un id en un nuevo objeto
let person = { name: 'Gustavo', age: 31 };
let country = 'VE';
let data = { id: 1, ...person, country };
console.log(data); // { id: 1, name: 'Gustavo', age: 31, country: 'VE' }

// Segundo contexto: copiar arrays y agregar elementos con spread
let numbers = [1, 2, 3];
let moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers); // [1, 2, 3, 4, 5]

// REST OPERATOR (operador REST)
// Función que recibe un primer parámetro y el resto en un array llamado values
function sum(num, ...values) {
    console.log(values);           // imprime todos los valores después del primero en un array
    console.log(num + values[0]);  // suma num y el primer valor de values
    return num + values[0];
}

sum(1, 1, 2, 3, 5, 8, 13, 21, 34, 55); // imprime [1,2,3,5,8,13,21,34,55] y 2


// EJEMPLO COMBINADO DE SPREAD Y REST OPERATORS

// Spread: para expandir un array dentro de otro
const numerosOriginales = [10, 20, 30];
const nuevosNumeros = [5, ...numerosOriginales, 40];
console.log(nuevosNumeros); // [5, 10, 20, 30, 40]

// Rest: para agrupar parámetros variables en una función
function calcularPromedio(descuento, ...notas) {
  // notas es un array con todos los argumentos excepto el primero
  const suma = notas.reduce((acc, val) => acc + val, 0);
  const promedio = suma / notas.length;
  return promedio - descuento;
}

console.log(calcularPromedio(2, 7, 8, 10, 6)); 
// calcula el promedio de [7,8,10,6] y le resta 2 → resultado: 7.25
