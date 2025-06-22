// 📦 ES10: Manejo de errores con y sin parámetro en catch

// 🧪 Con parámetro → puedes usar error.message, error.stack, etc.
try {
    hello(); // Esta función no existe
} catch (error) {
    console.error('📛 Error capturado (con parámetro):', error.message);
}

// ❌ Esto lanza ReferenceError porque no puedes usar 'error' si no lo defines
// try {
//     anotherFunction();
// } catch {
//     console.error('📛 Error capturado:', error.message); // ReferenceError
// }

// ✅ Versión correcta sin parámetro → ES10
try {
    anotherFunction(); // También no definida
} catch {
    console.error('📛 Error capturado (sin parámetro): ocurrió un error pero no usamos el objeto Error');
}

// 📌 Caso real: función de uso seguro sin crashar la app
function runSafely(fn) {
    try {
        fn();
    } catch {
        console.log('⚠️ Error silenciado: función fallida pero sin romper ejecución');
    }
}

runSafely(() => {
    throw new Error('¡Explosión controlada!');
});

// 📝 Buenas prácticas:
// Usa `catch (error)` cuando quieras:
// - Loguear el mensaje de error
// - Mostrar feedback al usuario
// - Reportar errores a sistemas externos

// Usa `catch {}` cuando:
// - No necesitas detalles del error
// - Quieres ignorar fallos de forma explícita y segura
