// setTimeout(funcion, tiempo);
/* console.log("Iniciando");

setTimeout(() => {
  console.log("Intermedio");
}, 3000);

console.log("Terminando"); */

/* const boton = document.getElementById("boton");
const saludo = document.getElementById("saludo");

boton.addEventListener("click", () => {
  saludo.classList.add("color");

  setTimeout(() => {
    saludo.classList.remove("color");
  }, 3000);
}) */

/* for(let letra of "hola"){
  setTimeout(() => {
    console.log(letra);
  }, 1000);
}

for(let letra of "mundo"){
  setTimeout(() => {
    console.log(letra);
  }, 3000);
} */

/* console.log("Iniciando");

setTimeout(() => {
  console.log("Intermedio");
}, 0);

console.log("Terminando"); */

/* function multiply (x, y) {    
  return x * y;
}

function printSquare (x) {    
  let s = multiply(x, x);    
  console.log(s);
}

printSquare(5); */

/* let counter = 0

const interval = setInterval(() => {
    counter++
    console.log("Counter: ", counter)

    if (counter >= 5) {
        clearInterval(interval)
        console.log("Se removió el intervalo")
    }
}, 1000) */

/* console.log(new Promise((resolve, reject) => {
  //codigo de la promesa
  resolve('exito');
})); */

/* const peticion = (valor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      valor ? resolve(["andres", "damian", "jorge"]) : reject("error en la conexion con el servidor");
    }, 2000);
  });
}

peticion(true)
.then(response => {
  console.log(response);
  console.log("terminado");
})
.catch(error => console.log(error))
.finally(() => console.log("proceso finalizado"));  */

const BD = [
  {id: 1, nombre: 'Producto 1', precio: 1500},
  {id: 2, nombre: 'Producto 2', precio: 2500},
  {id: 3, nombre: 'Producto 3', precio: 3500},
  {id: 4, nombre: 'Producto 4', precio: 3500},
];

const pedirProductos = () => {
  return new Promise( (resolve, reject) => {
      setTimeout(() => {
          resolve(BD)
      }, 3000)
  })
}

pedirProductos()
.then(productos => {
  productos.forEach(producto => {
    console.log(producto.nombre);
  });
})
.catch(error => console.log(error));