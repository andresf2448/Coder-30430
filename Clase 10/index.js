/* localStorage.setItem("nombre", "vanesa");
localStorage.setItem("value", "true");
localStorage.setItem("numero", "40");
 */
/* let nombre = localStorage.getItem("nombre");
let value = localStorage.getItem("value");
let numero = localStorage.getItem("numero");
 */
/* sessionStorage.setItem("nombre", "vanesa");
sessionStorage.setItem("value", "true");
sessionStorage.setItem("numero", "40"); */

/* localStorage.setItem("carrito", [1,2,3,4,5]);
localStorage.setItem("persona", {nombre: "andres", edad: 55}); */

/* for(let i = 0; i < localStorage.length; i++){
  let clave = localStorage.key(i);

  console.log("Clave: " + clave);
  console.log("Valor: " + localStorage.getItem(clave));
} */

/* localStorage.removeItem("nombre"); // eliminar una propiedad especifica
localStorage.clear() //eliminar todo el localStorage */

/* boton.addEventlistener("click", () => {
  localStorage.setItem("nombre", "andres");
}) */

/* localStorage.setItem("arreglo", [1,3,5,6,7]);
localStorage.setItem("persona", {nombre: "andres", edad: 55}); */

/* console.log(localStorage["nombre"]);
console.log(localStorage.nombre); */

/* let arreglo = [1,2,3,4,5];
localStorage.setItem("arreglo", JSON.stringify(arreglo));

let objeto = {nombre: "andres", edad: 55};
localStorage.setItem("objeto", JSON.stringify(objeto)); */

/* let arreglo = localStorage.getItem("arreglo");
console.log(JSON.parse(arreglo));
console.log(arreglo); */
/* 
let objeto = localStorage.getItem("objeto");
console.log(JSON.parse(objeto));
console.log(objeto); */

/* const productos = [
  { id: 1, nombre: "camisa", precio: 1100 },
  { id: 2, nombre: "gorra", precio: 1500 },
  { id: 3, nombre: "pantalon", precio: 800 },
  { id: 4, nombre: "zapato", precio: 700 },
];

const guardar = (clave, valor) => {localStorage.setItem(clave, valor);}

for(const producto of productos){
  guardar(producto.id, JSON.stringify(producto))
}

localStorage.setItem("productos", JSON.stringify(productos)); */

/* let productos = localStorage.getItem("productos");
console.log(JSON.parse(productos));
console.log(productos); */

let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if(usuarioStorage){
  let usuario = usuarioStorage;
  let mensaje = `Bienvenid@ ${usuario}`;
  alert(mensaje);
}else{
  usuario = prompt("Ingrese su nombre");
  sessionStorage.setItem("usuario", usuario);
}

/* setTimeout(() => {
  sessionStorage.clear();
}, 3000) */