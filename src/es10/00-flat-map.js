const array = [1, 2, 3, 4, 5, [6, 7, 8], 9, 10, [11, 12, 13]];
// 🌀 Función que aplana un array de forma recursiva
console.log(array.flat(3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// Flatmap: aplana un array y aplica una función a cada elemento
const array2 = [1, 2, 3, 4, 5, [6, 7, 8], 9, 10, [11, 12, 13]];
console.log(array2.flatMap(v => [v, v * 2, v / 2])); // en este caso nos devuelve un array aplanado con los valores originales, sus dobles y mitades

