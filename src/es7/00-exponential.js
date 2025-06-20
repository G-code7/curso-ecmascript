// 📘 Ejemplos básicos de ES7 exponentiation operator (**)
const example1 = 3 ** 4; // 81
const example2 = 2 ** 8; // 256
const example3 = (-5) ** 2; // 25
const example4 = 9 ** 0.5; // raíz cuadrada de 9 = 3
const example5 = Math.pow(3, 4); // equivalente a 3 ** 4

console.log("✅ Ejemplos básicos:");
console.log("3 ** 4 =", example1);
console.log("2 ** 8 =", example2);
console.log("(-5) ** 2 =", example3);
console.log("9 ** 0.5 =", example4);
console.log("Math.pow(3, 4) =", example5);

// 🧠 Ejemplo con una función que recibe base y exponente
function power(base, exponent) {
  return base ** exponent;
}

console.log("\n⚡ power(5, 3) =", power(5, 3)); // 125
console.log("⚡ power(10, 0) =", power(10, 0)); // 1
console.log("⚡ power(4, 0.5) =", power(4, 0.5)); // 2 (raíz cuadrada)

// 🧾 Con input desde el navegador (asumiendo HTML con inputs)
function calculateFromInput() {
  const baseInput = document.getElementById('base');
  const exponentInput = document.getElementById('exponent');
  const resultDisplay = document.getElementById('result');

  if (!baseInput || !exponentInput || !resultDisplay) {
    console.warn("🔍 Elementos de input no encontrados en el DOM");
    return;
  }

  const base = parseFloat(baseInput.value);
  const exponent = parseFloat(exponentInput.value);

  if (isNaN(base) || isNaN(exponent)) {
    resultDisplay.textContent = "❌ Por favor ingresa números válidos.";
    return;
  }

  const result = base ** exponent;
  resultDisplay.textContent = `✅ Resultado: ${base} elevado a ${exponent} = ${result}`;
}

// 👇 Si quieres que esta función se ejecute con un botón:
// <button onclick="calculateFromInput()">Calcular</button>
