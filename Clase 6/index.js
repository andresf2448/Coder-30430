/* const arr1 = [];
const arr2 = [1, 2, 3];
const arr3 = ["andres", "Nahuel", "Camila"];
const arr4 = [1, "camila", true];

let resultado = arr2[2] + arr2[0];
console.log(resultado); */

/* const arr3 = ["andres", "Nahuel", "Camila", "Pepito", "Julian"]; */

/* for(let i = 0; i < arr3.length; i++){
  console.log(arr3[i]);
} */

/* //el push agrega valores al final
console.log(arr3);
arr3.push("maribel");
console.log(arr3);

//el unshift agrega valores al principio
arr3.unshift("Ezequiel");
console.log(arr3); */

/* const arr3 = ["andres", "Nahuel", "Camila", "Pepito", "Julian"]; */

/* //el pop saca el ultimo elemento del arreglo
arr3.pop();
console.log(arr3);

//el shift saca elementos del principio
arr3.shift();

console.log(arr3); */

/* const arr3 = ["andres", "Nahuel", "Camila", "Pepito", "Julian"]; */

/* //el splice elimina la cantidad de elementos pasados por parametro desde una posicion dada
arr3.splice(2, 3);
console.log(arr3); */

//join une los elementos del arreglo en un solo string separados por el valor pasado por parametro
/* const arr3 = ["andres", "Nahuel", "Camila", "Pepito", "Julian"];
console.log(arr3.join("**")); */

/* const numeros = [1,2,3];
const personas = ["andres", "Nahuel"];

//concat une los elementos de dos arreglos en uno solo
const variado = numeros.concat(personas);
console.log(variado); */

/* //slice genera una copia o fragmento de un arreglo existente
const arr3 = ["andres", "Nahuel", "Camila", "Pepito", "Julian"];
const copia = arr3.slice(1, 5);
console.log(copia); */

/* const arr3 = ["andres", "Nahuel", "Camila", "Pepito", "Julian", "Pepito"];
//indexOf busca la posicion del elemento pasado por parametro
console.log(arr3.indexOf("Pepito"));
console.log(arr3.indexOf("Pepitoooo")); */

/* const arr3 = ["andres", "Nahuel", "Camila", "Pepito", "Julian", "Pepito"];
//includes me dice si el arreglo tiene un elemento o no
console.log(arr3.includes("Nahuellll")); */

/* const arr3 = ["andres", "Nahuel", "Camila", "Pepito", "Julian", "Pepito"];
arr3.reverse();
console.log(arr3); */

/* const arr3 = ["andres", "Nahuel", "Camila", "Pepito", "Julian", "Pepito"];
console.log(arr3.join("++")); */

/* const personas = ["andres", "Nahuel", "Camila", "Pepito", "Julian", "Pepito"];

const quitar = (nombre) => {
  let index = personas.indexOf(nombre);

  if(index != -1){
    personas.splice(index, 1);
  }

  console.log(personas);
}

quitar("Nahuel"); */

/* const productos = [
  {id: 1, nombre: "camisa", precio: 1200},
  {id: 2, nombre: "zapato", precio: 1500},
  {id: 3, nombre: "gorra", precio: 1700},
  {id: 4, nombre: "pantalon", precio: 2000}
];

for(const producto of productos){
  console.log(producto.nombre);
} */

/* class Producto{
  constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.vendido = false;
  }

  vender(){
    this.vendido = true;
  }
}

let productos = [];

for(let i = 0; i < 2; i++){
  let nombre = prompt("ingrese el nombre del producto");
  let precio = parseInt(prompt("ingrese el precio del producto"));

  productos.push(new Producto(nombre, precio));
}

console.log(productos); */


/* const carrito = [
  {id: 1, nombre: "camisa", precio: 1200},
  {id: 2, nombre: "zapato", precio: 1500},
  {id: 3, nombre: "gorra", precio: 1700},
  {id: 4, nombre: "pantalon", precio: 2000}
];

const productos = {
  restaurante: [
    {nombre: "arroz", precio: 1234},
    {nombre: "pan", precio: 5000}
  ],
  licores: [
    {nombre: "amarillo", precio: 200},
    {nombre: "azul", precio: 1000}
  ]
}

let producto = productos.licores.find(el => el.nombre === "amarillo");
console.log(producto); */

function Persona(nombre, edad){
  this.nombre = nombre;
  this.edad = edad;
}

class Persona{
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }
}