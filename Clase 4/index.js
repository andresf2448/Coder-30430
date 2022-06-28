/* 
estructura de una funcion
function nombreFuncion(parm1, parm2, ...){
  codigo de la funcion
}
*/

/* function mensaje(){
  console.log("Hola a todos");
}

mensaje(); */

/* function mensaje(){
  let nombre = prompt("ingrese su nombre");
  let resultado = `Hola cómo estás ${nombre}`;
  alert(resultado);
}

mensaje(); */

/* function saludo(nombre, apellido){
  console.log(`hola cómo estás ${nombre} ${apellido}?`);
}

saludo("camila", "ruiz"); */

/* function sumar(num1, num2){
  return num1 + num2;
}

let resultado = sumar(2, 4);
console.log(resultado + 20); */

/* function calculadora(num1, num2, operacion){
  switch(operacion){
    case "+":
      return num1 + num2;
    
    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      return num1 / num2;
      
    default:
      return 0;
  }
}

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let operacion = prompt("Ingrese la operacion");

let resultado = calculadora(num1, num2, operacion);
alert(calculadora(num1, num2, operacion)); */


/* function saludo(){
  console.log("inicio");
  return 

  console.log("final");
}

saludo(); */

/* {
  let nombre = "Ferney";
}
console.log(nombre); */

/* let resultado = 0;

function sumar(num1, num2) {
  resultado = num1 + num2;
}

sumar(5, 6);
console.log(resultado); */

/* function sumar(num1, num2) {
  let resultado = num1 + num2;
}

sumar(5, 6);
console.log(resultado); */

/* let nombre = "andres";

function mensaje(){
  let nombre = "Juan";
  console.log(nombre);
}

console.log(nombre);
mensaje(); */

/* function sumar(num1, num2){
  let resultado = num1 + num2;
  return resultado;
}

function resta(num1, num2){
  let resultado = num1 - num2;
  return resultado;
}

function multiplicacion(num1, num2){
  let resultado = num1 * num2;
  return resultado;
}

function division(num1, num2){
  let resultado = num1 / num2;
  return resultado;
} */

/* sumar() */

/* function suma(num1, num2){
  let resultado = num1 + num2;
  return resultado;
} */

/* const suma = function(a,b){return a + b}; */

/* const suma = (a, b) => a + b; */

const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva   = x => x * 0.21;

let precioProducto  = 500;
let descuento = 50; 

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
                = resta(suma(precioProducto, iva(500)), descuento)
                = resta(suma(precioProducto, 500 * 0.21), descuento)
                = resta(500 + 500 * 0.21, 50)
                = 500 + 500 * 0.21 - 50

console.log(nuevoPrecio);