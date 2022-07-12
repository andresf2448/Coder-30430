// console.log(document.body);

/* let container = document.getElementById("container");
console.log(container.innerHTML);
console.log(container.innerText); */

/* let parrafo = document.getElementById("parrafo");
console.log(parrafo.innerHTML);
console.log(parrafo.innerText); */

/* let perritos = document.getElementsByClassName("perritos");
console.log(perritos[0].innerHTML);
console.log(perritos[1].innerHTML);
console.log(perritos[2].innerHTML); */

/* let divs = document.getElementsByTagName("div");
console.log(divs[0].innerHTML);
console.log(divs[1].innerHTML);
console.log(divs[2].innerHTML); */

/* let perritos = document.getElementsByClassName("perritos");

for(const perrito of perritos){
  console.log(perrito.innerHTML);
} */

/* let saludo = document.getElementById("saludo");

let seccion = prompt("Ingresa la seccion deseada");

if(seccion === "carrito"){
  saludo.innerHTML = "<h1>Bienvenido al carrito</h1>";
  saludo.className = "verde";
}else if(seccion === "favoritos"){
  saludo.innerHTML = "<h1>Bienvenido a los favoritos</h1>";
  saludo.classList = "amarillo";
}else{
  saludo.innerHTML = "<h1>Bienvenido a nuestra tienda</h1>";
  saludo.className = "";
} */

/* 
1. creación
2. asignación de contenido
3. asignación de padre
*/

/* let padre = document.getElementById("container");
//creación
let parrafo = document.createElement("p");

//asignación de contenido
parrafo.innerHTML = "<h2>Hola a todos</h2>";

//asignación de padre
padre.append(parrafo); */

/* let container = document.getElementById("container");
container.remove(); */
/* let contenedor = document.getElementById("container");
let productos = ["camisa", "zapato", "gorra"];

for(const producto of productos){
  let li = document.createElement("li");
  li.innerHTML = producto;
  contenedor.append(li);
} */

let contenedor = document.getElementById("container");
let productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "zapato", precio: 1000 },
  { id: 3, nombre: "pantalon", precio: 1000 },
  { id: 4, nombre: "gorra", precio: 1000 },
];

for(const producto of productos){
  let li = document.createElement("li");
  li.innerHTML = `<h2>ID: ${producto.id}</h2>
                  <p>Producto: ${producto.nombre}</p>
                  <b>$${producto.precio}</b>
                 `;
  contenedor.append(li);
}

/* let container = document.querySelectorAll(".perritos");
console.log(container); */

let container = document.querySelector("#container p");
console.log(container);
