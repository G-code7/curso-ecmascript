// 🔽 Importamos el saludo por defecto y otras utilidades del módulo
import hello, { getGreetingByTime, formatName } from "./module.js";

// 🧪 Datos de prueba
const rawName = "gustavo";

// 🧼 Formateamos el nombre antes de usarlo
const formattedName = formatName(rawName);

// 🕓 Obtenemos el saludo basado en la hora
const timeGreeting = getGreetingByTime();

// 🧾 Combinamos todo y mostramos mensaje personalizado
console.log(`${timeGreeting}, ${formattedName}!`);

// ✅ También podemos usar la función hello directamente
hello(formattedName);
