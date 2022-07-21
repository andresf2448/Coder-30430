/* 
estructura del if
if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}else{
  codigo a ejecutar en caso de que la condicion no sea verdadera
}

if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else if(condicion3){
  codigo a ejecutar cuando la condicion3 es verdadera
}else{
  codigo a ejecutar si ninguna de las condiciones anteriores es verdaderae
}
*/

/* let nombre = "andres";

if(nombre === "pepito"){
  console.log("hola pepito");
}else if(nombre === "camila"){
  console.log("Hola camila");
}else{
  console.log("quien eres?");
} */

/* 
for, while, do while

for(desde; hasta; actualizacion){
  codigo que necesitamos repetir
}

while(condicion){
  codigo a repetir mientras que la condicion sea verdadera
}

do{
  codigo a ejecutar al menos una vez y luego se sigue ejecutando si la condicion es verdadera 
}while(condicion)
*/

/* 
estructura de las funciones
function nombreFuncion(parm1, parm2, ..., parmn){
  codigo a ejecutar por la funcion
}

const nombre = (a, b) => a + b;
const nombre1 = a => a + 4;
const nombre2 = (a, b) => {
  codigo a ejecutar por la funcion
}
*/

/* console.log(suma());
const suma = () => {} */

//objetos
const persona = {
  nombre: "andres",
  edad: 100,
};

// function Persona(nombre, edad){
//   this.nombre = nombre;
//   this.edad = edad;
//   this.correr = function() {console.log(`yo ${this.nombre} estoy corriendo`);}
// }

/* class Persona{
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }

  correr(){
    console.log(`yo ${this.nombre} estoy corriendo`);
  }
}

const persona1 = new Persona("ema", 100);
const persona2 = new Persona("nahuel", 100);
persona2.correr();
persona1.correr(); */

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 1300 },
  { id: 3, nombre: "gorra", precio: 1800 },
  { id: 4, nombre: "zapato", precio: 700 },
];

// let productoEncontrado = productos.find(el => el.id === 3);
// console.log(productoEncontrado);

// let filtrados = productos.filter(el => el.precio > 1100);
// console.log(filtrados);

/* let precios = productos.map(el => el.precio);
console.log(precios); */

/* 
localStorage como el sessionStorage
setItem(key, value) // almacenar en el storage el item Key y su respectivo value
getItem(key) //trae el valor asociado a la key
JSON.stringify(data) // me transforma el arreglo u objeto a un formato JSON
JSON.parse(data) //convertir de formato json al elemento identificado dentro de javascript
*/

//Ejemplo practico
let formulario = document.getElementById("formulario");
let boton = document.getElementById("verProductos");
let contenedor = document.getElementById("contenedor");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let listaProductos;
  let productosStorage = JSON.parse(localStorage.getItem("productos"));

  if(productosStorage){
    listaProductos = productosStorage;
  }else{
    listaProductos = [];
  }

  let producto = {
    id: listaProductos.length + 1,
    nombre: e.target.children[0].value,
    precio: e.target.children[1].value
  }

  listaProductos.push(producto);
  localStorage.setItem("productos", JSON.stringify(listaProductos));
})

boton.addEventListener("click", () => {
  contenedor.innerHTML = "";
  let productos = JSON.parse(localStorage.getItem("productos"));

  productos.forEach(element => {
    let item = document.createElement("div");
    item.innerHTML = `id: ${element.id}
                      nombre: ${element.nombre}
                      precio: $${element.precio}`;
    contenedor.append(item);
  });
})