// 📦 Cadena con espacios al inicio y al final
const hello = '    Hello World!    ';

// ✅ Métodos individuales
console.log('➡️', '    Hello World!  '.trimStart()); // 'Hello World!  '
console.log('⬅️', '  Hello World!    '.trimEnd());   // '  Hello World!'

// 🌀 Función personalizada que usa trimStart() y trimEnd()
function trimExample(str) {
  const trimmedStart = str.trimStart(); // Elimina espacios al inicio
  const trimmedEnd = trimmedStart.trimEnd(); // Elimina espacios al final
  return trimmedEnd;
}

// 🧪 Uso de la función
console.log('🎯 Resultado:', `"${trimExample(hello)}"`); // "Hello World!"

// ✅ Comparación con trim() clásico (equivalente a trimStart + trimEnd)
console.log('🧪 trim() directo:', `"${hello.trim()}"`);

// 📌 Caso real 1: sanitizar entrada del usuario (formulario)
function sanitizeInput(input) {
  return input.trim(); // o .trimStart() / .trimEnd() según el caso
}

const userInput = '    gustlee@example.com   ';
console.log('✉️ Email limpio:', `"${sanitizeInput(userInput)}"`);

// 📌 Caso real 2: comparar valores que pueden tener espacios extra
const expected = '12345';
const userEntry = '   12345   ';
console.log('✅ Coincide?', expected === userEntry);            // false
console.log('✅ Coincide limpiando?', expected === userEntry.trim()); // true

// 📌 Caso real 3: procesar CSV o datos sin limpiar
const rawNames = [' Ana', 'Luis ', '  Marco  '];
const cleanNames = rawNames.map(name => name.trim());
console.log('🧼 Nombres limpios:', cleanNames); // ['Ana', 'Luis', 'Marco']

// 📌 Caso real 4: mostrar errores si el input es solo espacios
function validateNotEmpty(str) {
  const isEmpty = str.trim().length === 0;
  if (isEmpty) {
    console.warn('⚠️ Entrada vacía (solo espacios)');
  } else {
    console.log('✅ Entrada válida:', str.trim());
  }
}

validateNotEmpty('         '); // ⚠️
validateNotEmpty('  Gustavo '); // ✅
