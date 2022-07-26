// let numero = 10;

// numero = numero + 1;
// numero += 1;
// numero++;

// let edad = 20;

// if(edad >= 18){
//   console.log("puedes ingresar");
// }else{
//   console.log("no puedes ingresar");
// }

/* 
estructura del ternario
condicion ? codigo cuando condicion es verdadera : codigo cuando condiciones es falsa
*/
/* let edad = 20;
let nombre = "camila";
const permiso = () => {
  nombre === "camila" ? console.log("puedes entrar") : console.log("no eres camila y no puedes entrar");
}

edad >= 18 ? permiso() : console.log("no puedes ingresar"); */

// let permiso;
// let usuario = {
//   nombre: "pepito",
//   edad: 20
// };

// if(usuario.edad >= 18){
//   permiso = true;
// }else{
//   permiso = false;
// }

// if(permiso){
//   console.log("Puedes entrar");
// }else{
//   console.log("no puedes entrar");
// }
// let usuario = {
//   nombre: "pepito",
//   edad: 20
// };

// let permiso = (usuario.edad >= 18) ? true : false;
// permiso ? console.log("puedes entrar") : console.log("no puedes entrar");

/* 
operador1 && operador2

si operador1 se entiende como un true entonces el operador retorna operador2 en caso contrario
retorna operador1
*/

/* let dato = false && "hola";
console.log(dato); */

/* const pinteCarrito = () => {
  carrito.forEach(el => {
    const div = document.createElement("div")
  })
}
const carrito = JSON.parse(localStorage.getItem("carrito"));

if(carrito.length === 0){
  console.log("el carrito está vacío");
}

carrito.length !== 0 && pinteCarrito(); */

/* let usuario = {
  nombre: "pepito",
  edad: 17
};

const ingreso = usuario.edad >= 18 && new Date();
console.log(ingreso); */

/* 
operador1 || operador2

si operador1 no es falsy operador retorna operador1
de lo contrario retorna operador2
*/

/* console.log( 0 || "Falsy")  //ambas
console.log( 40 || "Falsy")  //40
console.log( null || "Falsy")  //falsy
console.log( undefined || "Falsy")   //falsy
console.log( "Hola Mundo" || "Falsy")  //hola mundo
console.log( "" || "Falsy")  //ambos
console.log( NaN || "Falsy")  //ambos
console.log( true || "Falsy")  //true
console.log( false || "Falsy") //falsy */
// console.log("" || undefined);

/* let usuario = localStorage.getItem("usuario");

console.log(usuario || "el usuario no existe"); */

/* let carrito;

let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

if(carritoStorage){
  carrito = carritoStorage;
}else{
  carrito = [];
}
 */

// let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/* console.log( 0 ?? "Nullish")  // 0
console.log( 40 ?? "Nullish")  // 40
console.log( null ?? "Nullish")  // Nullish
console.log( undefined ?? "Nullish")  // Nullish
console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
console.log( "" ?? "Nullish")  // ""
console.log( NaN ?? "Nullish")  // NaN
console.log( true ?? "Nullish")  // true
console.log( false ?? "Nullish")  // false */

/* const usuario = {
  nombre: "braian",
  edad: 45
};

console.log(usuario?.nombre || "El usuario no existe"); */

/* const usuario = {
  nombre: "braian",
  edad: 45,
  telefono: {
    casa: 1234,
    trabajo: 23543245
  }
};

console.log(usuario?.telefono?.trabajo || "propiedad no existe"); */

/* let usuario = {
  nombre: "pepito",
  edad: 17,
  direccion: "AV"
}; */

/* let nombre = usuario.nombre;
let edad = usuario.edad;
let direccion = usuario.direccion; */

/* let {
  nombre,
  edad,
  direccion
} = usuario;

console.log(nombre);
console.log(edad);
console.log(direccion); */

/* const usuario = {
  nombre: "braian",
  edad: 45,
  telefono: {
    casa: 1234,
    trabajo: 23543245
  }
};

let {nombre, telefono: {trabajo, casa}} = usuario;
console.log(trabajo);
console.log(casa);
console.log(nombre); */

/* let producto = {
  id_producto: 1,
  nombre: "camisa",
  color: "roja"
};

let {
  nombre: nameProducto,
  id_producto: id
} = producto;
console.log(nameProducto); */

/* const propiedades = ({id_producto, nombre, color}) => {
  console.log(id_producto, nombre, color);
}

let producto = {
  id_producto: 1,
  nombre: "camisa",
  color: "roja"
};

propiedades(producto); */

/* const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]; */

/* const [, a, , b] = nombres;
console.log(a, b); */

/* let usuario = {nombre: "carlos", edad: 50};
let usuario1 = {...usuario};

usuario1.nombre = "sofia";

console.log(usuario); */

// const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];

// console.log(...nombres);

/* const numeros = [4, 77, 92, 10, 3, -32, 54, 11];
console.log(Math.max(...numeros)); */

/* let numero = 1;
let numero1 = numero;
numero1 = 19;
console.log(numero);

|   1   |    |   19  |
numero       numero1 */
// let usuario = {nombre: "carlos", edad: 50, direccion: "Av"};
// let usuario1 = {...usuario, edad: 45, familiar: "asdf"};

// console.log(usuario);

function valores(...numeros){
  console.log(numeros);
}

valores({nombre:"asdf"},2,3,4,5,4,3,"asdf", 234);