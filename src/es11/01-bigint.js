// ✅ Ejemplo básico: número muy grande
const aBigNumber = 1234567890123456789012345678901234567890n;
const anotherBigNumber = BigInt("1234567890123456789012345678901234567890");

console.log('🔢 BigInt literal:', aBigNumber);
console.log('🛠 BigInt constructor:', anotherBigNumber);

// 🧪 Comparación con Number máximo seguro
const maxSafe = Number.MAX_SAFE_INTEGER; // 9007199254740991
console.log('🚫 Max safe integer (Number):', maxSafe);
console.log('✅ BigInt mayor que max safe:', BigInt(maxSafe) + 10n);

// ❗ Error: no se pueden mezclar tipos Number y BigInt
try {
  const result = 10n + 5; // ❌ TypeError
} catch (error) {
  console.error('⚠️ Error al mezclar BigInt y Number:', error.message);
}

// ✅ Solución: convertir ambos a BigInt
const safeResult = 10n + BigInt(5);
console.log('✔️ Resultado correcto:', safeResult);

// 📌 Usos prácticos

// 1. Operaciones aritméticas de precisión
const bigSum = 12345678901234567890n + 98765432109876543210n;
console.log('🧮 Suma grande:', bigSum);

// 2. Cálculo con grandes cantidades (blockchain, IDs, etc.)
const blockHeight = 9817238917238127398172381n;
const nextBlock = blockHeight + 1n;
console.log('⛓️ Altura de bloque:', nextBlock);

// 3. Conversión explícita
const stringToBig = BigInt("987654321234567890");
console.log('🧾 BigInt desde string:', stringToBig);

// 4. Comparación entre BigInt
console.log('🔍 Comparar BigInt:', 10000000000000000000n > 1n); // true

// 5. Uso en estructuras de datos
const bigMap = new Map();
bigMap.set(1n, "Uno");
bigMap.set(2n, "Dos");
console.log('📊 Mapa con BigInt:', bigMap);
