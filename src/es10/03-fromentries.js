// ✅ Ejemplo base: Map a objeto
const entries = new Map([
  ["name", "John"],
  ["age", 30],
  ["city", "New York"]
]);

console.log('🔍 Map:', entries);
console.log('🔄 Objeto desde Map:', Object.fromEntries(entries));
// 👉 Output: { name: 'John', age: 30, city: 'New York' }

// ✅ También puedes usar arrays de pares clave-valor
const arrayEntries = [
  ["product", "Laptop"],
  ["price", 1200],
  ["stock", 15]
];

const productObj = Object.fromEntries(arrayEntries);
console.log('🧾 Producto:', productObj);

// 🔄 Reversibilidad: de objeto → entries → objeto
const original = { brand: "Sony", model: "A7", resolution: "4K" };
const toEntries = Object.entries(original);
const backToObject = Object.fromEntries(toEntries);
console.log('🔁 Reversibilidad:', backToObject);

// 📌 Caso real: convertir FormData a objeto (ej. en navegador)
function formDataToObject(formData) {
  return Object.fromEntries(formData.entries());
}

// Simulación (sólo en navegador):
// const form = document.querySelector('form');
// const data = new FormData(form);
// const obj = formDataToObject(data);

// 🧪 Filtrar un objeto: convertir a entries → filtrar → volver a objeto
const user = {
  name: "Ana",
  age: 25,
  email: "ana@example.com",
  password: "123456"
};

// Eliminamos la contraseña
const safeUser = Object.fromEntries(
  Object.entries(user).filter(([key]) => key !== "password")
);
console.log('🛡️ Usuario sin password:', safeUser);

// 📝 Nota: Object.fromEntries() solo acepta arrays iterables con pares [key, value]

// 🌀 Ejemplo avanzado: convertir un Map con lógica condicional
function mapToObjectWithCondition(map) {
  return Object.fromEntries(
    Array.from(map).filter(([key, value]) => typeof value === 'string')
  );
}
const mixedMap = new Map([
  ["name", "Alice"],
  ["age", 28],
  ["city", "Wonderland"],
  ["isAdmin", false]
]);
const filteredObject = mapToObjectWithCondition(mixedMap);
console.log('🌐 Mapa filtrado a objeto:', filteredObject);
// 👉 Output: { name: 'Alice', city: 'Wonderland' }