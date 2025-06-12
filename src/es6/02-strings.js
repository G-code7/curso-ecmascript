// Forma tradicional (ES5) de concatenar strings
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world + '!';
// Usamos el operador + para juntar strings
console.log(epicPhrase); // → "Hello World!"


// Forma moderna con Template Literals (ES6)
let epicPhrase2 = `${hello} ${world}!`;
// Utiliza backticks (`) y ${...} para insertar variables directamente en el string
console.log(epicPhrase2); // → "Hello World!"

// String de varias líneas (ES5): usando \n + concatenación
let lorem = 'esto es un string \n' + ' esto es otra linea';
// poco legible, incómodo y propenso a errores

// Forma moderna con template literals y múltiples líneas (ES6)
let lorem2 = `Esta es una frase epica
    esto es la continuación de esa frase epica.`;
// puedes escribirlo en varias líneas directamente

console.log(lorem);
console.log(lorem2);

// ejemplo: Uso en emails o mensajes
// Supongamos que quieres enviar un email automático de bienvenida. Mira la diferencia:


// Forma tradicional con +
let nombre = "Lucía";
let mensaje = "Hola " + nombre + ",\nGracias por registrarte en nuestro sitio.";
console.log(mensaje);

// Forma moderna con Template Literals
let mensaje2 = `Hola ${nombre},
Gracias por registrarte en nuestro sitio.
Estamos felices de tenerte.`;

console.log(mensaje2);