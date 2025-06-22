// ✅ Expresión regular para encontrar la palabra "Apple"
const regex = /\b(Apple)+\b/g;
const fruit = 'Apple, Banana, Apple, Orange, Apple, Grape, Orange, Banana';

// ✅ matchAll devuelve un iterador con TODAS las coincidencias detalladas
for (const match of fruit.matchAll(regex)) {
  console.log('🔍 Coincidencia completa:', match[0]); // texto que coincidió
  console.log('📍 Índice:', match.index);             // posición en el string
  console.log('🎯 Grupo capturado:', match[1]);       // el grupo (Apple)
  console.log('---');
}


// Por qué usar matchAll? 

// ❌ Con match() pierdes detalles si hay grupos de captura
const matches = fruit.match(regex);
console.log('match():', matches); // Solo array de strings coincidentes

// ✅ Con matchAll() accedes a cada grupo, índice, etc.
const matchIterator = fruit.matchAll(regex);
for (const m of matchIterator) {
  console.log(`🎯 ${m[0]} at index ${m.index}`);
}

// 🧠 Caso real: validación de emails en un texto
const text = 'Contact: alice@mail.com, bob@example.org, test@x.io';
const emailRegex = /([\w.-]+@[\w.-]+\.\w+)/g;

for (const match of text.matchAll(emailRegex)) {
  console.log('📧 Email encontrado:', match[1]);
}


