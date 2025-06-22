// ✅ Objeto con usuarios y direcciones anidadas
const users = {
    gliendo: {
        name: 'Gustavo Lienhardt',
        age: 30,
        address: {
            city: 'Buenos Aires',
            country: 'Argentina'
        }
    },
    maria: {
        name: 'María Pérez',
        age: 25,
        address: {
            city: 'Madrid',
            country: 'España'
        }
    },
    john: {
        name: 'John Doe',
        age: 28,
        address: {
            city: 'New York',
            country: 'USA'
        }
    }
};

// 🧪 Accesos directos válidos
console.log(users.gliendo.address);          // { city: 'Buenos Aires', country: 'Argentina' }
console.log(users.john.address.city);        // 'New York'
console.log(users.maria?.address?.city);     // 'Madrid'

// 🧠 Uso de optional chaining
console.log(users?.gliendo?.address?.city);      // 'Buenos Aires'
console.log(users?.nonExistentUser?.address?.city); // undefined (no rompe el código)

// ✅ Uso real: acceder seguro a datos de una API
function printCity(userId) {
    const city = users?.[userId]?.address?.city;
    if (city) {
        console.log(`📍 ${userId} vive en ${city}`);
    } else {
        console.warn(`⚠️ No se encontró la ciudad para "${userId}"`);
    }
}

printCity("gliendo");       // Buenos Aires
printCity("maria");         // Madrid
printCity("noExiste");      // ⚠️

// 📌 Uso real: acceder a funciones opcionales sin error
const maybeUtils = {
    log: () => console.log("Función existente ejecutada")
};

// Optional chaining evita error si `log` no existe
maybeUtils.log?.();         // Ejecuta sin problema
maybeUtils.alert?.();       // No lanza error (porque no existe)

// 📌 Otro caso común: acceso a arrays vacíos
const data = null;
const firstItem = data?.[0]; // undefined en vez de error
console.log('🧪 Primer item:', firstItem);
