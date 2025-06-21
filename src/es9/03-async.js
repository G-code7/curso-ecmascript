// 🧪 Ejemplo base: async generator que entrega 3 valores con espera asincrónica
async function* fnAsyncGenerator() {
  yield await Promise.resolve('Async Generator Value 1');
  yield await Promise.resolve('Async Generator Value 2');
  yield await Promise.resolve('Async Generator Value 3');
}

// ⏳ Consumo usando .next()
const asyncGen = fnAsyncGenerator();

asyncGen.next().then(result => console.log('▶', result.value)); // Value 1
asyncGen.next().then(result => console.log('▶', result.value)); // Value 2
asyncGen.next().then(result => console.log('▶', result.value)); // Value 3
asyncGen.next().then(result => console.log('▶ Done?', result.done)); // true

console.log('✅ Async generator is iterable:', typeof asyncGen[Symbol.asyncIterator] === 'function');

// 🌀 Ejemplo 2: uso de for-await-of
(async () => {
  console.log('\n🌀 Iterando con for-await-of');
  for await (const value of fnAsyncGenerator()) {
    console.log('🔄', value);
  }
})();

// 🧠 Ejemplo 3: async generator con lógica condicional
async function* countTo(max) {
  for (let i = 1; i <= max; i++) {
    await new Promise(r => setTimeout(r, 500)); // simula espera
    yield `⏱ Valor ${i}`;
  }
}

(async () => {
  console.log('\n📊 Conteo dinámico:');
  for await (const val of countTo(3)) {
    console.log(val);
  }
})();

// 🧪 Ejemplo 4: manejar errores en async generator
async function* withError() {
  yield '✅ Paso 1';
  throw new Error('💥 Algo salió mal');
  yield '⛔ No se alcanza';
}

(async () => {
  console.log('\n⚠️ Manejo de errores dentro del generador:');
  try {
    for await (const val of withError()) {
      console.log('🟢', val);
    }
  } catch (error) {
    console.error('🚨 Error capturado:', error.message);
  }
})();

// 🌊 Ejemplo 5: async generator que simula lectura por "páginas"
const mockData = [
  ['📦 Producto 1', '📦 Producto 2'],
  ['📦 Producto 3', '📦 Producto 4'],
  ['📦 Producto 5'],
];

async function* paginatedData(data) {
  for (const page of data) {
    await new Promise(r => setTimeout(r, 300)); // simula delay
    yield page;
  }
}

(async () => {
  console.log('\n📚 Paginación de resultados:');
  for await (const page of paginatedData(mockData)) {
    console.log('🧾 Página:', page);
  }
})();

// 🌀 Función asíncrona que itera sobre un array de nombres


async function arrayOfNames(array) {
    for await (const value of array) {
        console.log(`Hello, ${value}`);
        
    }
}

const names = arrayOfNames(['Alice', 'Bob', 'Charlie', 'David', 'Eve']);
console.log('After async iteration starts...');
