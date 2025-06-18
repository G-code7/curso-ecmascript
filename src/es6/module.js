// 👋 Función que genera un saludo personalizado
const hello = (name = "Guest") => {
    console.log(`Hello, ${name}!`);
};

// 📅 Función auxiliar: devuelve el saludo según la hora del día
const getGreetingByTime = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
};

// 🧠 Función de utilidad: formatea nombre en mayúscula inicial
const formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

// Exportación por defecto (solo puede haber una por módulo)
export default hello;

// Exportaciones nombradas (pueden haber muchas)
export { getGreetingByTime, formatName };
