// ✅ Declaramos una función asíncrona que retorna una promesa
const fnAsync = async () => {
    // 📦 Creamos una nueva promesa que resuelve después de 2 segundos
    return await new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!! 200'), 2000)
            : reject(new Error('Error! 501'));
    });
};

// ✅ Otra función asíncrona que llama a fnAsync y espera su resultado
const fnAsync2 = async () => {
    const something = await fnAsync();    // ⏳ Espera el resultado de fnAsync()
    console.log(something);               // 🖨️ Imprime 'Async!! 200'
    console.log('Hello!! 200');           // 🖨️ Luego imprime otro mensaje
};

// 🧪 Llamada a la función
console.log('Before');    // ⏱️ Se ejecuta inmediatamente
fnAsync2();               // ⏳ Llama a la función asíncrona (pero no espera en este hilo)
console.log('After');     // ⏱️ Se imprime inmediatamente después de 'Before'

// ⏳ Salida esperada (después de ~2 segundos):
// Before
// After
// Async!! 200
// Hello!! 200
// 📝 Nota: La ejecución de fnAsync2() es asíncrona, por lo que 'After' se imprime antes de que se resuelva la promesa.

// ✅ Manejo de errores con try/catch

// Ejemplo 1: Función async con rechazo y sin manejo de errores
const fnAsyncError = async () => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Error intencional sin try/catch')), 1000);
  });
};

fnAsyncError()
  .then(res => console.log('Éxito:', res))
  .catch(err => console.error('Capturado con .catch:', err.message));

// Ejemplo 2: Función async con manejo de errores usando try/catch
const fnAsyncTryCatch = async () => {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Error intencional con try/catch')), 1000);
    });
    console.log('Resultado:', result);
  } catch (error) {
    console.error('Capturado con try/catch:', error.message);
  }
};

fnAsyncTryCatch();

// Ejemplo 3: Error lanzado explícitamente dentro de función async
const fnThrowInside = async () => {
  throw new Error('Error lanzado explícitamente dentro de async');
};

fnThrowInside()
  .then(() => console.log('No debería llegar aquí'))
  .catch(err => console.error('Capturado error explícito:', err.message));

// Ejemplo 4: Función async con error de sintaxis (ejemplo que causa error inmediato)
const fnSyntaxError = async () => {
  // Error: uso de variable no declarada
  console.log(nonExistentVariable);
};

fnSyntaxError()
  .then(() => console.log('No debería llegar aquí'))
  .catch(err => console.error('Capturado error de referencia:', err.message));

// Ejemplo 5: Uso incorrecto de await fuera de función async (causa error de sintaxis)
// Para verlo comentar el bloque siguiente, porque romperá el script entero

/*
console.log('Antes de usar await fuera de async');
await Promise.resolve('Esto dará error'); // SyntaxError
console.log('Después'); // Nunca se ejecuta
*/

// Nota: el error de syntax por usar await fuera de async solo ocurre en top-level JS sin módulos o entorno compatible
