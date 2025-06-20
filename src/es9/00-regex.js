const regex = /(\d{4})-(\d{2})-(\d{2})/; // Expresión regular para fechas en formato YYYY-MM-DD 
const matchers = regex.exec('2023-10-01'); // Ejecuta la expresión regular en una cadena
console.table(matchers); // Muestra los resultados en una tabla

