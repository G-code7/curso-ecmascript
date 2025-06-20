const list = new Set();            // 🔧 Crea un nuevo Set vacío

list.add('item 1');                // ➕ Agrega 'item 1'
list.add('item 2').add('item 3');  // ➕ Agrega 'item 2' y luego 'item 3'

console.log(list);                 // 🖨️ Muestra el Set completo


list.delete('item 1');

console.log(list);