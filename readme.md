# ECMAScript Summary

Este documento resume las principales características introducidas en las versiones de ECMAScript desde ES6 hasta ES13, con ejemplos prácticos y explicaciones claras. Ideal para repasar, enseñar o documentar tu progreso como desarrollador JavaScript moderno.

## 📚 Índice

- [ES6 – La revolución moderna](#es6--la-revolución-moderna)
- [ES7 – Operaciones potentes](#es7--operaciones-potentes)
- [ES8 – Async, Object y más](#es8--async-object-y-más)
- [ES9 – Spread avanzado y asincronía](#es9--spread-avanzado-y-asincronía)
- [ES10 – Strings, objetos y manejo de errores](#es10--strings-objetos-y-manejo-de-errores)
- [ES11 – Operadores lógicos, promesas y módulos](#es11--operadores-lógicos-promesas-y-módulos)
- [ES12 – Mejoras de legibilidad y rendimiento](#es12--mejoras-de-legibilidad-y-rendimiento)
- [ES13 – Nuevas formas de acceder a arreglos](#es13--nuevas-formas-de-acceder-a-arreglos)
- [ES14 & ES15 – Coming soon 🚧](#es14--es15--coming-soon-🚧)

---

## ES6 – La revolución moderna

- `let` y `const`: Declaración de variables con alcance de bloque.
- Arrow functions: Sintaxis más compacta y sin `this` propio.
- Strings: Template literals con `${variable}`.
- Default params: Parámetros con valores por defecto.
- Rest & Spread: Manejo avanzado de arrays y objetos.
- Object literals: Shorthand para propiedades y métodos.
- Promesas: Nueva forma de manejar asincronía.
- Clases: Sintaxis moderna para programación orientada a objetos.
- Módulos: `import` y `export` para organizar código.
- Generadores: `function*` para controlar el flujo de datos paso a paso.

## ES7 – Operaciones potentes

- `**` (Exponentiation operator): Potencias de forma clara.
- `.includes()`: Verifica si un array contiene un valor específico.

## ES8 – Async, Object y más

- `async/await`: Sintaxis asíncrona más legible.
- `Object.entries()`: Convierte objetos en arrays de pares clave-valor.
- `Object.values()`: Extrae solo los valores de un objeto.
- Trailing commas: Permite comas al final de arrays y objetos.

## ES9 – Spread avanzado y asincronía

- Spread operator en objetos: Extrae propiedades con `{...rest}`.
- `for await...of`: Iterar asincrónicamente sobre Promises.
- `async generators`: Combina generadores con Promesas.

## ES10 – Strings, objetos y manejo de errores

- `trimStart()` y `trimEnd()`: Limpieza de espacios en strings.
- `Optional catch binding`: `catch` sin necesidad de declarar el error.
- `Object.fromEntries()`: Convierte pares clave-valor en objeto.
- `optional chaining (?.)`: Acceso seguro a propiedades anidadas.

## ES11 – Operadores lógicos, promesas y módulos

- `BigInt`: Números enteros enormes con precisión arbitraria.
- Nullish Coalescing (`??`): Devuelve el primer valor no nulo o indefinido.
- `Promise.allSettled()`: Retorna todos los resultados de promesas (resueltas o no).
- `globalThis`: Accede al objeto global en cualquier entorno (Node, navegador, etc).
- `matchAll()`: Devuelve todos los matches de una RegExp.
- Dynamic `import()`: Carga de módulos bajo demanda.
- `Logical assignment operators` (`&&=`, `||=`, `??=`): Asignaciones condicionales.

## ES12 – Mejoras de legibilidad y rendimiento

- Numeric separators: Mejora la legibilidad con `_` (ej. `1_000_000`).
- `replaceAll()`: Reemplaza todas las ocurrencias de un texto en un string.
- `Promise.any()`: Retorna la primera promesa que se resuelva correctamente.
- Private methods: Métodos y propiedades privadas con `#`.

## ES13 – Nuevas formas de acceder a arreglos

- `.at(index)`: Permite acceder a elementos por índice positivo o negativo (`array.at(-1)` devuelve el último elemento).

---

## ES14 & ES15 – Coming soon 🚧

Ya están disponibles los borradores de ECMAScript 2023 y 2024 con características como:

- Top-level await
- Temporal API
- Pattern Matching (propuesta)
- Decorators nativos

> ¡Estaré actualizando esta sección en cuanto complete los próximos cursos!

---

### ✨ Recursos usados

- Curso de ECMAScript de Platzi
- MDN Web Docs
- JavaScript.info
- Ejemplos propios desarrollados en proyectos y repositorios

---

### 🧠 Autor

Desarrollado por G-code7 
📍 En constante formación y exploración del ecosistema JavaScript.

---

