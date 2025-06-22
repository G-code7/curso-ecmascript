// 🌍 Diferencias según entorno
console.log('🔍 window:', typeof window !== 'undefined' ? window : '❌ no disponible');
console.log('🔍 global:', typeof global !== 'undefined' ? global : '❌ no disponible');
console.log('🔍 self:', typeof self !== 'undefined' ? self : '❌ no disponible');

// ✅ Siempre disponible a partir de ES11
console.log('🆗 globalThis:', globalThis);

// 🧪 Podemos usar globalThis para definir variables globales universalmente
globalThis.miValorGlobal = '🌐 Disponible en cualquier entorno';
console.log('💡 miValorGlobal:', globalThis.miValorGlobal);

// ✅ Funciona igual en navegador, Node o Web Worker
function testGlobalReference() {
  console.log('🔁 Accediendo a valor global desde función:', globalThis.miValorGlobal);
}
testGlobalReference();

// 🧠 Caso real: librerías universales
function crearNamespace(nombre) {
  if (!globalThis[nombre]) {
    globalThis[nombre] = {}; // Solo lo crea si no existe
  }
  return globalThis[nombre];
}

const espacio = crearNamespace('MiApp');
espacio.usuario = 'Gliendo';
console.log('📦 Espacio global:', globalThis.MiApp);

// ❗ Antes, esto era un problema:
// window.miApp → solo en navegador
// global.miApp → solo en Node
// self.miApp → solo en workers
// globalThis.miApp → universal


// Determinar en qué entorno estamos ejecutando el código 

if (globalThis.window) {
  console.log('🌐 Estamos en el navegador');
} else if (globalThis.global) {
  console.log('🖥️ Estamos en Node.js');
} else if (globalThis.self) {
  console.log('🔁 Estamos en un Web Worker');
}
