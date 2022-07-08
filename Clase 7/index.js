/* function mayorQue(n){
  return m => m > n;
}

let mayorQueCinco = mayorQue(5);

console.log(mayorQueCinco(3)); */

/* function operaciones(operacion){
  if(operacion === "suma"){
    return (x, y) => x + y;
  }

  if(operacion === "resta"){
    return (x, y) => x - y;
  }

  if(operacion === "multiplicacion"){
    return (x, y) => x * y;
  }

  if(operacion === "division"){
    return (x, y) => x / y;
  }
}

let suma = operaciones("suma");
console.log(suma(3,4));

let resta = operaciones("resta");
console.log(resta(4,5)); */

/* function iteradora(arreglo, funcion){
  for(const item of arreglo){
    funcion(item)
  }
}

iteradora([1,7,3,8,5], console.log); */
/* const nombres = ["cristian", "emiliano", "Luciana"];

//forEach recorre cada uno de los elementos del arreglo y realiza una operacion
nombres.forEach(elemento => console.log(elemento)); */

/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 1400 },
  { id: 3, nombre: "pantalon", precio: 1300 },
  { id: 4, nombre: "zapato", precio: 1400 },
]; */

//find encuentra un elemento de nuestro arreglo
/* let producto = productos.find(item => item.precio === 1400);
console.log(producto); */
/*
filter filtra dependiendo de la condicion pasada
let valor = prompt("Ingrese el valor minimo");
let nombres = "";

let filtrados = productos.filter(elemento => elemento.precio > valor);

for(const item of filtrados){
  log(item)
}

alert(nombres); */

/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 1400 },
  { id: 3, nombre: "pantalon", precio: 1300 },
  { id: 4, nombre: "zapato", precio: 1400 },
];

//el some lo que hace es verificar si existe o no un elemento en tu arreglo
console.log(productos.some(elemento => elemento.nombre === "gorra")); */

/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 1400 },
  { id: 3, nombre: "pantalon", precio: 1300 },
  { id: 4, nombre: "zapato", precio: 1400 },
]; */

/* const nombres = productos.map(elemento => elemento.nombre);
console.log(nombres); */
/* const actualizacion = productos.map(elemento => {
  return {
    id: elemento.id,
    nombre: elemento.nombre,
    precio: elemento.precio + 101
  }
}) */

/* const carrito = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 1400 },
  { id: 3, nombre: "pantalon", precio: 1300 },
  { id: 4, nombre: "zapato", precio: 1400 },
];

let total = carrito.reduce((acumulador, elemento) => acumulador + elemento.nombre + elemento.precio, "");
console.log(total); */

/* const numeros = [ 40, 1, 5, 200 ];

console.log(numeros.sort((a,b) => a - b));
console.log(numeros.sort((a,b) => b - a)); */


/* const items = [
  { name: 'Pikachu', price: 21 },
  { name: 'Charmander', price: 37 },
  { name: 'Pidgey', price: 45 },
  { name: 'Squirtle', price: 60 }
];

console.log(
  items.sort((a, b) => {
    if (a.name > b.name) {
        return -1;
    }
    if (a.name < b.name) {
        return 1;
    }
    // a es igual a b
    return 0;
  })  
); */

/* const carrito = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 1400 },
  { id: 3, nombre: "pantalon", precio: 1300 },
  { id: 4, nombre: "zapato", precio: 1400 },
];

let total = carrito.reduce((acumulador, elemento) => acumulador + elemento.nombre + elemento.precio, "");
console.log(total);

function suma(x, y){
  console.log(x + y);
} */

/* console.log(Math.E);
console.log(Math.PI);
console.log(Math.max(1,2,3,4,3,5,89,4));
console.log(Math.min(2,8,12)); */

/* console.log(Math.ceil(3.14));
console.log(Math.floor(3.78));
console.log(Math.round(3.78));
console.log(Math.round(3.48)); */
//console.log(Math.sqrt(9));
/* console.log(Math.random() * 10); */

/* console.log(Date()); */

/* console.log(new Date(2022, 1, 20)); */

/* const casiNavidad = new Date("July 7, 2022 23:59:59")
console.log(casiNavidad.getMonth())
console.log(casiNavidad.getFullYear())
console.log(casiNavidad.getDay()) */

/* const hoy = new Date("July 7, 2022")

console.log( hoy.toDateString() ) 
console.log( hoy.toLocaleString() ) 
console.log( hoy.toLocaleDateString() ) 
console.log( hoy.toTimeString() ) */

const navidad = new Date("December 25, 2022")
const hoy = new Date("July 7, 2022")

console.log( navidad - hoy )

const milisegundosPorDia = 86400000;

console.log( (navidad - hoy ) / milisegundosPorDia)