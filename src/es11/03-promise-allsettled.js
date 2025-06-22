// 🧪 Simulamos 3 promesas
const promise1 = new Promise((_, reject) => reject('❌ Rechazada: promesa 1'));
const promise2 = new Promise((resolve) => resolve('✅ Resuelta: promesa 2'));
const promise3 = new Promise((resolve) => resolve('✅ Resuelta: promesa 3'));

// 🧠 Manejo con allSettled: obtenemos TODOS los resultados
Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`🔹 Promesa ${index + 1} OK →`, result.value);
      } else {
        console.warn(`🔸 Promesa ${index + 1} FALLÓ →`, result.reason);
      }
    });
  });


// 🔄 CASO REAL: validación de múltiples APIs externas

function fakeAPI(name, succeed = true, delay = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      succeed
        ? resolve(`📦 ${name} respondió OK`)
        : reject(`🚫 ${name} falló`);
    }, delay);
  });
}

const api1 = fakeAPI('AuthService', false, 1000);   // falla
const api2 = fakeAPI('UserService', true, 1500);    // ok
const api3 = fakeAPI('AnalyticsService', true, 500); // ok

Promise.allSettled([api1, api2, api3])
  .then(results => {
    const successful = results.filter(r => r.status === 'fulfilled').map(r => r.value);
    const failed = results.filter(r => r.status === 'rejected').map(r => r.reason);

    console.log('🎯 Resultados exitosos:', successful);
    console.log('⚠️ Resultados fallidos:', failed);
  });


// ✅ CASO REAL: múltiples validaciones asincrónicas

const validateEmail = email =>
  new Promise(resolve =>
    setTimeout(() => resolve(email.includes('@')), 800)
  );

const validateUsername = username =>
  new Promise(resolve =>
    setTimeout(() => resolve(username.length >= 3), 600)
  );

const validatePassword = password =>
  new Promise(resolve =>
    setTimeout(() => resolve(password.length >= 8), 1000)
  );

Promise.allSettled([
  validateEmail('user@example.com'),
  validateUsername('us'),
  validatePassword('123456789')
]).then(results => {
  const validations = ['Email', 'Username', 'Password'];
  results.forEach((r, i) => {
    console.log(`${validations[i]} ${r.status === 'fulfilled' && r.value ? '✅ válida' : '❌ inválida o error'}`);
  });
});


// Ejemplo con .map

const urls = [
  'https://api1.com/data',
  'https://api2.com/data',
  'https://api3.com/data'
];

// Simula fetch, puede fallar
const mockFetch = url =>
  new Promise((resolve, reject) => {
    const ok = Math.random() > 0.3;
    setTimeout(() => {
      ok ? resolve(`OK: ${url}`) : reject(`Fail: ${url}`);
    }, 1000);
  });

Promise.allSettled(urls.map(mockFetch))
  .then(responses => {
    responses.forEach((r, i) => {
      console.log(`${urls[i]} →`, r.status === 'fulfilled' ? r.value : r.reason);
    });
  });
