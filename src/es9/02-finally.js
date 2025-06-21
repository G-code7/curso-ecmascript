// PROMISES

// Creamos una función que retorna una Promesa
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey this is happening!!!'); // Si todo va bien, se resuelve la promesa
        } else {
            reject('This did not work correctly'); // Si hay error, se rechaza
        }
    });
};

// Llamamos a la función que devuelve la promesa
anotherFunction()
    .then(response => {
        console.log('response 200'); // Primer then: manejo de éxito
        return response.toUpperCase(); // Podemos transformar el resultado
    })
    .then(modifiedResponse => {
        console.log('Modified:', modifiedResponse); // Segundo then: resultado transformado
    })
    .catch(err => {
        console.log('Error:', err); // Manejo de error
    }) 
    .finally (() => {
        console.log('This always runs, regardless of success or failure'); // Código que se ejecuta siempre
    });

