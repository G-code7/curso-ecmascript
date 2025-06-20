// 🧑‍💻 Objeto original con varios campos
const user = {
  username: 'Gliendo',
  age: 31,
  country: 'VE',
  email: 'gliendo@example.com'
};

// 🔄 Desestructuración con rest: extraemos username y agrupamos el resto en 'values'
const { username, ...values } = user;

console.log(username); // 'Gliendo'
console.log(values);   
// { age: 31, country: 'VE', email: 'gliendo@example.com' }

// ✅ Usos prácticos

// 1. Clonar objeto con spread (copia superficial)
const cloneUser = { ...user };
console.log(cloneUser);

// 2. Crear un nuevo objeto modificando propiedades con spread
const updatedUser = {
  ...user,
  age: 32,          // sobrescribe la propiedad age
  email: 'nuevo@email.com'
};
console.log(updatedUser);

// 3. Combinar varios objetos en uno solo
const address = { city: 'Caracas', zip: '1010' };
const userWithAddress = { ...user, ...address };
console.log(userWithAddress);

// 4. Función que recibe un objeto y extrae solo ciertas propiedades, agrupando el resto
function extractUsernameAndRest({ username, ...rest }) {
  console.log('Username:', username);
  console.log('Rest:', rest);
}
extractUsernameAndRest(user);

// Nota: el operador rest (...) debe ser el último en la desestructuración

// 5. Uso en funciones con parámetros rest
function logUserInfo({ username, ...rest }) {
  console.log(`Usuario: ${username}`);
  console.log('Información adicional:', rest);
}