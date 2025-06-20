// 🌀 Función generadora que recorre un array paso a paso
function* iterate(array) {
    for (let value of array) {
        yield value; // Pausa aquí y entrega el valor actual
    }
}

// 🧪 Usamos la función generadora
const names = ['Gustavo', 'Oscar', 'David', 'Bri', 'Jennyfer'];
const iterator = iterate(names);

// 🚶‍♂️ Iteramos uno a uno manualmente (como en tu ejemplo)
console.log(iterator.next().value); // Gustavo
console.log(iterator.next().value); // Oscar
console.log(iterator.next().value); // David
console.log(iterator.next().value); // Bri
console.log(iterator.next().value); // Jennyfer
console.log(iterator.next().done);  // true (ya no hay más)


// Puedes recorrer el generador con for...of automáticamente
const namesIterator = iterate(names);

for (const name of namesIterator) {
    console.log(`Hola, ${name}`);
}


// Generador que simula paginar un array en chunks
function* paginate(array, pageSize) {
    for (let i = 0; i < array.length; i += pageSize) {
        yield array.slice(i, i + pageSize);
    }
}

const data = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const paginated = paginate(data, 3);

console.log(paginated.next().value); // ['A', 'B', 'C']
console.log(paginated.next().value); // ['D', 'E', 'F']
console.log(paginated.next().value); // ['G']
console.log(paginated.next().done);  // true

// Generador que produce IDs únicos infinitamente
function* idGenerator() {
    let id = 1;
    while (true) {
        yield `ID-${id++}`;
    }
}

const ids = idGenerator();
console.log(ids.next().value); // ID-1
console.log(ids.next().value); // ID-2
console.log(ids.next().value); // ID-3