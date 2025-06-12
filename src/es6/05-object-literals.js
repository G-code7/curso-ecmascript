// ENHANCED OBJECT LITERALS

// Creamos una función que recibe varios parámetros y retorna un objeto
function newUser(user, age, country, uId) {
    return {
        user,    // en lugar de user: user
        age,     // en lugar de age: age
        country, // en lugar de country: country
        id: uId  // asignamos manualmente un alias a la propiedad
    };
}

// Imprimimos el objeto generado por la función
console.log(newUser("gliendo", 31, "VE", 1));
// Resultado: { user: 'gliendo', age: 31, country: 'VE', id: 1 }
