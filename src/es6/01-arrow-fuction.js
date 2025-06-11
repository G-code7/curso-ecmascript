// Función tradicional
function square(num) {
  return num * num;
}

// Arrow function con return explícito
const square = (num) => {
  return num * num;
}

// Arrow function con return implícito
const square = num => num * num;


// 📦 Características clave
// 1. 🔁 Sintaxis reducida
// Si hay un solo parámetro, puedes omitir los paréntesis: num => ...

// Si el cuerpo tiene una sola expresión, puedes omitir las llaves y el return.

const doble = x => x * 2;

// 2. 🧭 No tienen su propio this
// Este es un detalle clave. A diferencia de las funciones tradicionales, las arrow functions no enlazan su propio this: heredan el this del contexto donde fueron creadas.

// ❌ Función tradicional:

function Timer() {
  this.seconds = 0;
  setInterval(function () {
    this.seconds++;
    console.log(this.seconds); // ❌ 'this' no apunta al objeto Timer
  }, 1000);
}


// ✅ Arrow function (usa el this del contexto externo):

function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds); // ✅ funciona como se espera
  }, 1000);
}


// 3. 📛 No se pueden usar como métodos con this complejo
// No uses arrow functions si necesitas que la función tenga su propio this, como cuando defines métodos en clases o objetos complejos.

const persona = {
  nombre: 'Gustavo',
  saludar: () => {
    console.log(`Hola, soy ${this.nombre}`); // ❌ 'this' no funciona como esperas
  }
};

persona.saludar(); // → Hola, soy undefined



// Ejemplos prácticos
// 1. ✅ Arrays y funciones callback

const nums = [1, 2, 3, 5, 8, 13];

// Función tradicional
const cuadrados = nums.map(function(n) {
  return n * n;
});

// Arrow function
const cuadrados2 = nums.map(n => n * n);

console.log(cuadrados2); // → [1, 4, 9, 25, 64, 169]