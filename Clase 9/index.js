/* let boton = document.getElementById("btnPrincipal");
let saludo = document.getElementById("saludo");

boton.addEventListener("mousedown", () => {
  saludo.className = "amarillo";
});
boton.addEventListener("mouseup", () => {
  saludo.className = "verde";
});
// boton.addEventListener("click", () => console.log("click"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
boton.addEventListener("mouseout", () => {
  saludo.className = "azul"
});
// boton.addEventListener("mousemove", () => console.log("mousemove")); */
/* let saludo = document.getElementById("saludo");
let nombre = document.getElementById("nombre"); */
// nombre.addEventListener("keyup", () => console.log("keyup"));
/* nombre.addEventListener("keydown", (e) => {
  if(e.key === "a"){
    saludo.className = "verde";
  }else if(e.key === "s"){
    saludo.className = "amarillo";
  }else{
    saludo.className = "azul";
  }
}); */

/* nombre.addEventListener("input", () => {
  if(nombre.value.includes("andres")){
    saludo.className = "azul";
  }
  if(nombre.value.length === 5){
    saludo.className = "azul";
  }else{
    saludo.className = "amarillo"
  }
}); */

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
  e.preventDefault();
  /* console.log(e.target.children[0].value);
  console.log(e.target.children[1].value); */
  if(e.target.children[0].value.includes("-") && e.target.children[0].value.includes(".")){
    let mensaje = document.createElement("div");
    mensaje.innerHTML = "Tus datos fueron registrados";
    mensaje.className = "verde";
    document.body.append(mensaje);
  }else{
    let mensaje = document.createElement("div");
    mensaje.innerHTML = "no es un correo";
    mensaje.className = "rojo";
    document.body.append(mensaje);
    e.target.children[0].value = "";
  }
}