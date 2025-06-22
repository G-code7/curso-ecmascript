// 🧪 Simulamos 3 promesas
const promise1 = new Promise((_, reject) => reject('❌ Rechazada: promesa 1'));
const promise2 = new Promise((resolve) => resolve('✅ Resuelta: promesa 2'));
const promise3 = new Promise((resolve) => resolve('✅ Resuelta: promesa 3')); 

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));