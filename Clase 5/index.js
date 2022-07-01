/* const persona1 = {
  nombre: "Pepito", 
  edad: 34, 
  direccion: "AV"
}; */

/* console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.direccion);
let nombre = "nombre";
console.log(persona1[nombre]);
console.log(persona1["edad"]);
console.log(persona1["direccion"]); */

/* persona1["nombre"] = "Andrea";
persona1.edad = 50;
console.log(persona1); */

/* function Persona(nombre, edad, direccion){
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
  this.casado = false;
}

const persona1 = new Persona("andres", 45, "AV");
const persona2 = new Persona("veronica", 35, "Calle");

console.log(persona1);
console.log(persona2); */

/* function Persona(info){
  this.nombre = info.nombre;
  this.edad = info.edad;
  this.direccion = info.direccion;
  this.domicilio = info.domicilio;
  this.casado = casado;
}

const persona1 = new Persona({nombre: "andres", edad: 34, direccion: "AV", domiciilio: "creatividad"});
console.log(persona1);
 */

/* function Perrito(nombrePerrito, colorPerrito, edadPerrito){
  this.nombre = nombrePerrito;
  this.color = colorPerrito;
  this.edad = edadPerrito;
  this.ladrar = function() {console.log(`Hola soy ${this.nombre} y estoy ladrando`);}
}

const perrito1 = new Perrito("Firu", "Cafe", 2);
const perrito2 = new Perrito("Firu", "Cafe", 2);
perrito1.ladrar();

for(let propiedad in perrito2){
  console.log(propiedad);
} */

/* function Perrito(nombrePerrito, colorPerrito, edadPerrito) {
  this.nombre = nombrePerrito;
  this.color = colorPerrito;
  this.edad = edadPerrito;
  this.ladrar = function () {
    console.log(`Hola soy ${this.nombre} y estoy ladrando`);
  };
} */

/* class Perrito {
  constructor(nombrePerrito, colorPerrito, edadPerrito) {
    this.nombre = nombrePerrito;
    this.color = colorPerrito;
    this.edad = edadPerrito;
  }

  ladrar(){
    console.log(`Hola soy ${this.nombre} y estoy ladrando`);
  }
}

const perrito1 = new Perrito("firu", "cafe", 1);
console.log(perrito1); */

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

const producto1 = new Producto("arroz", 1000);
const producto2 = new Producto("Fideo", 1500);

console.log(producto1);
producto1.vender();
console.log(producto1);
console.log(producto2); */

/* class ProductoMercado{
  constructor(nombre, precio, img, cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.vendido = false;
    this.cantidad = cantidad;
  }

  vender(){
    this.vendido = true;
  }
}

const producto1 = new ProductoMercado("Monitor led para juegos...", 1494900, "wd,fkjadgshflo324r", 3);


if(producto1.vendido){
  console.log("producto esta vendido");
}else{
  console.log("Producto no vendido");
} */

class ProductoMercado{
  constructor(nombre, precio, img, cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cantidad = cantidad;
  }

  vender(cantidad){
    this.cantidad = this.cantidad - cantidad;
  }
}

const producto1 = new ProductoMercado("Monitor led para juegos...", 1494900, "wd,fkjadgshflo324r", 5);
console.log(producto1);
producto1.vender(3);
console.log(producto1);