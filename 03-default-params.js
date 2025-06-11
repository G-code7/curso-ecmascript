// DEFAULT PARAMETERS en ES5
function newUser(name, age, country) {
    var name = name || 'Gustavo';
    var age = age || 30;
    var country = country || 'venezuela';
    console.log(name, age, country);
}

newUser(); // Gustavo 30 venezuela
newUser('Pretrofu', 25, 'Colombia'); // Pretrofu 25 Colombia

// DEFAULT PARAMETERS en ES6
function newUserES6(name = 'Gustavo', age = 30, country = 'venezuela') {
    console.log(name, age, country);
}

newUserES6(); // Gustavo 30 venezuela
newUserES6('Pretrofu', 25, 'Colombia'); // Pretrofu 25 Colombia

// Otro contexto de uso: registrar producto
function registrarProducto(nombre = 'Producto Genérico', precio = 0, disponible = true) {
    console.log(`Producto: ${nombre}, Precio: ${precio}, Disponible: ${disponible}`);
}

registrarProducto(); // Producto Genérico, 0, true
registrarProducto('Zapatos', 45, false); // Zapatos, 45, false
