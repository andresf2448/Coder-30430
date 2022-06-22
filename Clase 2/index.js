/* 
if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}
*/
/* let nombre = "camila";

if(nombre === "camila"){
  console.log("saludo");
}else{
  console.log("no saludo");
} */

/* let edad = 20;

if(edad < 15){
  console.log("necesitas un adulto responsable");
}else if(edad < 18){
  console.log("Entras con un amigo");
}else if(edad === 18){
  console.log("Puedes entrar solo");
}else{
  console.log("no puedes entrar");
} */

/* let valor = true;
let valor1 = false; */

/* let edad = 18;
let permiso = edad > 18;

if(permiso){
  console.log("Puedes entrar");
}else{
  console.log("no puedes entrar");
} */

/* if("0"){
  console.log("hola");
} */

/* let nombre = "andres";

if(nombre){
  console.log("Hola ", nombre);
}else{
  console.log("no hay nombre");
} */

/* let nombre = "andres";

if(nombre != "andres"){
  console.log("no es andres");
} */

/* let nombre = "andres"; */

/* if(nombre != "andres"){
    console.log("Nombre incorrecto");
}else {
    console.log("sos andres");
} */

/* if(nombre === "andres"){
  console.log("sos andres");
}else{
  console.log("Nombre incorrecto");
} */
/* 
let elNumero = Number(prompt("Elige un numero"));

if (!isNaN(elNumero)) {
  console.log("Tu número es la raiz cuadrada de " + elNumero * elNumero);
} else {
  console.log("Ey. Por qué no me diste un número?");
} */

/* 
&& es verdadero cuando todas las condiciones son verdaderas
true && false = false
true && true && false = false
true && true && true = true
*/

/* 
|| es verdadero cuando al menos una de las condiciones sea verdadera

true || false = true
false || false = false
*/

/* let nombre = prompt("ingrese un nombre");

if(nombre === "andres" || nombre === "ANDRES"){
  alert("hola andres");
}else{
  alert("Quién eres?")
} */

/* let nombre = prompt("ingrese un nombre").toLowerCase();
let edad = parseInt(prompt("Ingresa la edad"));
let permiso = true;

if(nombre === "andres" && (edad > 18 || permiso)){
  alert("hola AndRes");
}else{
  alert("Quién eres?");
} */

let num1 = parseInt(prompt("numero"));
let num2 = parseInt(prompt("numero"));

console.log(num1 + num2);