// ✅ Ejemplo base
const anotherNumber = 1;
const validate = anotherNumber ?? null; // 1, porque anotherNumber NO es null ni undefined
console.log('🔢 Resultado de nullish coalescing:', validate); // 1

// 🧪 Diferencia entre || y ??
console.log('❓ 0 || "default":', 0 || "default");      // "default" (porque 0 es falsy)
console.log('❓ 0 ?? "default":', 0 ?? "default");      // 0 (porque no es null ni undefined)

console.log('❓ false || "default":', false || "default"); // "default"
console.log('❓ false ?? "default":', false ?? "default"); // false

console.log('❓ "" || "default":', "" || "default");     // "default"
console.log('❓ "" ?? "default":', "" ?? "default");     // ""

// 📌 Casos reales

// 1. Configuración de valores predeterminados sin sobrescribir 0, false o ""
function getUserAge(userInput) {
  const age = userInput.age ?? 'Edad no disponible';
  console.log('👤 Edad:', age);
}

getUserAge({ age: 0 }); // Muestra: 0
getUserAge({});         // Muestra: Edad no disponible

// 2. Evitar mostrar textos por defecto cuando no hace falta
function renderTitle(title) {
  const display = title ?? "Sin título";
  console.log('📘 Título:', display);
}

renderTitle("");        // Muestra ""
renderTitle(undefined); // Muestra "Sin título"

// 3. Lectura de valores opcionales desde una API simulada
const apiResponse = {
  data: null,
  status: 200
};

const content = apiResponse.data ?? "Cargando...";
console.log('🛰️ Contenido de la API:', content); // "Cargando..."

// ❗ Error si mezclas ?? con && o || sin paréntesis
// const error = null ?? false || true; // SyntaxError
const fixed = (null ?? false) || true;
console.log('🧪 Con paréntesis:', fixed); // true

