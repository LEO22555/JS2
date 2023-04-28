console.log("arreglos");

let elementos1 = [];
console.log(elementos1);
console.log(typeof elementos1);

let elementos2 = [10, 20, 30];
console.log(elementos2);
console.log(typeof elementos2);

let elementos3 = [10, 20, 3.4, "Catalina", true];
console.log(elementos3);
console.log(typeof elementos3);

let elementos4 = [100, 200, 300, 800, 50];
//Obtener un valor del arreglo
let primero = elementos4[3];
console.log(primero);
//Modificar valor en el arreglo
elementos4[1] = 500;
console.log(elementos4);

//Copia de un arreglo
let a = 5;
let b = a; // b deberia ser 5
a = 6; // a deberia ser 6
console.log(a, b);

//Referencia
console.log("--- No se debe hacer---");
let original = [1,2,3];
let copia = original;  // copia 1,2,3
original.pop() // Eliminar un elemento
console.log(original);
console.log(copia);

// Spread >> EcmaScript 6
console.log("--- ECMAScript 6 ---");
let original1 = [1,2,3];
let copia1 = [...original1]; // operador Spread
console.log(copia1);
original1.pop();
console.log("original", original1);
console.log("copia", copia1);

let nuevo1 = [... original1, ...copia1]
console.log(nuevo1);

let nuevo2 = [10, 20, ...original, 30, ...copia1];
console.log(nuevo2);

//Copia el arreglo
console.log("Copia con slice");
let original2 = [20, 30, 40];
let copia2 = original2.slice();
console.log("original2", original2);
console.log("copia2", copia2);

let original3 = [10, 20, 30, 40, 50, 60, 70];
let copia3 = original3.slice(2, 6); // No inclye el 4
console.log("original3", original3);
console.log("copia3", copia3);

//AGREGAR ELEMENTOS
console.log("--- MODIFICACION DEL ARREGLO---");
let numeros = [10,20,30,40,50,60,70,80];
console.log("numeros ", numeros);

//Agregar elemento al inicio
let masUno = numeros.unshift(50);
console.log("unshift: inserta al inicio");
console.log("numeros ", numeros);

//Agregar un elemento al final
numeros.push(45);
console.log("unshift: inserta al final");
console.log("numeros ", numeros);

//Agregar elemento en una posicion
//posicion, 0= no borre elementos, valor
numeros.splice(2,0,100);
console.log("splice: inserta en una posicion");
console.log("numeros ", numeros);

//Elimina el primer elemento
numeros.shift();
console.log("shift: elimina la primera posicion");
console.log("numeros", numeros);

//Elimina el ultimo elemento
numeros.pop();
console.log("pop: elimina la primera posicion");
console.log("numeros", numeros);

//Elimina el ultimo elemento
numeros.splice(3, 1);
console.log("splice: elimina una posicion");
console.log("numeros", numeros);

//Obtiene una posicion en el arreglo
console.log(numeros.at(-1));
console.log();

//Concatenar arreglos
let nuevos = [12,13,22]
let concatenado = numeros.concat(nuevos);
console.log("concatenado", concatenado);

//reduce >> aplica una funcion retornando un valor
let res1 = valores.reduce((x,y) => x+y);
console.log(res1);

//map >> aplica una funcion a cada elemento del arreglo
let res2 =valores.map((valor) => valor+1);
console.log(res2);