// 📦 Definimos la clase con campos y métodos privados
class User {
  // 🔐 Propiedades privadas
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  // 🔐 Método privado
  #speak() {
    return 'Hello';
  }

  // ✅ Método público que usa el método privado
  greetings() {
    return `${this.#speak()} ${this.#name}`;
  }

  // ✅ Getters públicos que acceden a propiedades privadas
  get userName() {
    return this.#name;
  }

  get userAge() {
    return this.#age;
  }
}

// 🧪 Crear una instancia de la clase
const user1 = new User('Gliendo', 31);

// ✅ Llamamos al método público
console.log(user1.greetings()); // Hello Gliendo

// ✅ Accedemos a propiedades privadas mediante getters
console.log(`🧍 Nombre: ${user1.userName}`); // Gliendo
console.log(`🎂 Edad: ${user1.userAge}`);   // 31

// ❌ Intentos incorrectos de acceso directo a campos o métodos privados
// try {
//   console.log(user1.#name); // SyntaxError
// } catch (err) {
//   console.error('❌ No puedes acceder directamente a propiedades privadas:', err.message);
// }

// try {
//   console.log(user1.#speak()); // SyntaxError
// } catch (err) {
//   console.error('❌ No puedes invocar métodos privados directamente:', err.message);
// }
