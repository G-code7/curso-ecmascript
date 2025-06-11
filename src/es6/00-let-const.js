// variables de JavaScript

var  carro = 'chevrolet'; 
// acá estamos declarando la variable "carro" y le estamos asignando un valor "chevrolet"
carro = 'Ford';
console.log(carro);


let fruta = 'piña';
fruta = 'manzana';
console.log(fruta);



// const animal = 'perro';
// animal = 'gato';
// console.log(animal);
// para este caso no vamos a poder reasignarle un valor pues la palabra designada "const" no permite una reasignación de los  valores una vez se le a asignado 


const  pc = () => {
    if(true) {
        var pc1 = 'Dell';  //Function scope
        var pc2 = 'HP';    //block scope
        var pc3 = 'Alien Ware'; //block scope
    }
    console.log(pc1);
    console.log(pc2);
    console.log(pc3);
}

pc();