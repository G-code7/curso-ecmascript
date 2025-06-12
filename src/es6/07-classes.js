// DECLARACIÓN BÁSICA DE UNA CLASE
class User {} // clase vacía

// INSTANCIANDO UNA CLASE
// const newUser = new User(); // Esto funciona pero no hace nada porque la clase está vacía


// CLASE CON UN MÉTODO SIMPLE
class user {
    greetins() {
        return 'Hello';
    }
}

const gl = new user();
console.log(gl.greetins()); // Output: Hello

const developer = new user();
console.log(developer.greetins()); // Output: Hello


// CLASE CON CONSTRUCTOR BÁSICO
class userConstructor {
    constructor() {
        console.log('Nuevo usuario 2'); // Se ejecuta al instanciar
    }

    greetins() {
        return 'Hello';
    }
}

const gustavo = new userConstructor(); // Muestra: Nuevo usuario 2
console.log(gustavo.greetins());       // Output: Hello


// CLASE CON this PARA GUARDAR DATOS DINÁMICOS
class userConNombre {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return 'hello';
    }

    greetins() {
        return `${this.speak()} ${this.name}`;
    }
}

const gus = new userConNombre('Gus');
console.log(gus.greetins()); // Output: hello Gus

const jes = new userConNombre('Jesyca');
console.log(jes.greetins()); // Output: hello Jesyca


// CLASE CON GETTERS Y SETTERS
class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        return 'Hello';
    }

    greetins() {
        return `${this.speak()} ${this.name}`;
    }

    // Getter para acceder a la edad
    get uAge() {
        return this.age;
    }

    // Setter para modificar la edad de forma controlada
    set uAge(nuevaEdad) {
        this.age = nuevaEdad;
    }
}

const ana = new user('Ana', 18);

// Accedemos a la edad con el getter
console.log(ana.uAge); // Output: 18

// Modificamos la edad con el setter
ana.uAge = 20;

// Confirmamos que se actualizó
console.log(ana.uAge); // Output: 20
