/* function suma(x, y){
  return x + y;
}

const resultado = suma(3, 4);
console.log("aca esta el resultado ", resultado); */

/* function eliminar(pepito){
  console.log(pepito);
  pepito.pop();

  console.log(pepito);
}

const productos = [{id: 1, nombre: "pan"}, {id: 2, nombre: "arroz"}];

eliminar(productos) */

/* 
Codificar una función con la siguiente cabecera: impuesto(precio, porcentaje). En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un precio y porcentaje al usuario.

*/

function impuesto(precio, porcentaje){
  return precio + porcentaje;
}

for(let i = 0; i < 5; i++){
  let precio = parseInt(prompt("ingrese el precio"));
  let porcentaje = parseInt(prompt("ingrese el porcentaje"));
  impuesto(precio, porcentaje);
}