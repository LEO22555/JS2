console.log("app");

//Destructuring
const usuario = {
    nombre: "Catalina",
    edad: 21,
};


//Acceder a propiedades de forma tradicional
const nombre = usuario.nombre;
const edad = usuario.edad;

// //Accede a propiedades con destructuring
// const {nombre, edad} = usuario;

//Accede a propiedades con destructuring renombrando variables

const{nombre: name, edad: age}= usuario;
console.log(nombre);
console.log(edad);
console.log(nombre);
console.log(edad);


//Objeto
const weather = {
    today:{min: 9, max:20},
    tomorrow:{min: 5, max:10},
};

//Accede a una propiedad compleja renombrando la variable

const {
    tomorrow: {max},
} = weather;
const{
    tomorrow: {max: maxTomorrow},
} = weather;

console.log(max);
console.log(maxTomorrow);

//Destructuring de parametros de una funcion

function imprimirUbicacionV1(usuario) {
    console.log(usuario.ciudad, usuario.pais);
}

function imprimirUbicacionV2(ciudad, pais) {
    console.log(ciudad, pais);
}

const user = {
    nombre: "Rafa",
    apellido: "Martinez",
    ciudad: "Valledupar",
    pais: "Colombia",
};

//Invocar la funcion
imprimirUbicacionV1(user);
imprimirUbicacionV2(user);


//Swaping
//Tradicional
let a = 5;
let b = 10;

let temp = a; // temp = 5
a = b; // a=10
b = temp; // b=5

//Swaping con destructuring
[a,b] =[b,a];

//Destructuring con arreglos
const numeros = [10,20,undefined,40,50,60,70,80,90];
//Acceso por el subindice => tradicional
const primero = numeros[0];
const segundo = numeros[1];
//Acceso por destructuring
const [first, second] = numeros;
//Acceso por destructuring saltando posiciones
const [prim, seg, , cua, , , sep] = numeros;
// Destructuring con operador spread
const [p, , , q, ...resto] = numeros;
//Destructuring de una posición con un valor por default
const [, , l=30]=numeros;
console.log(primero, segundo);
console.log(first, second);
console.log(prim, seg, cua, sep);
console.log(p);
console.log(q);
console.log(resto);
console.log(l);

const nombreCompleto = "Leonardo Martinez";

const nombres = nombreCompleto.split (" ");
console.log(nombres);
console.log(FirstNames);
console.log(lastNames);

//Funcion
function calcular(numero1, numero2){
    const suma = numero1 + numero2;
    const resta = numero1 > numero2 ? numero1 - numero2 : numero2 - numero 1;
    const multiplicacion = numero1 * numero2;
    const division = numero1 / numero2;
    
    return [suma, resta , multiplicacion, division] = calcular (3,9);
    console.log(suma, resta, multiplicacion, division);

    const [s,r,m,d] = calcular(2,8);
    console.log(s,r,m,d);
}