//  fetch(url, config)

/* fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
  console.log(data[0].title);
  console.log(data[0].body);
}); */

// const lista = document.getElementById("listado");

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(publicaciones => {
//   publicaciones.forEach(publicacion => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//       <h2>${publicacion.title}</h2>
//       <p>${publicacion.body}</p>
//     `;

//     lista.append(li);
//   });
// });

/* fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "prueba",
    body: "nuestra primera creación",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
.then(response => response.json())
.then(data => console.log(data)); */

/* 
const lista = document.getElementById("listado");

fetch("./data.json")
.then(response => response.json())
.then(productos => {
  productos.forEach(producto => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h4>${producto.nombre}</h4>
      <p>${producto.precio}</p>
      <p>Código: ${producto.id}</p>
      <hr />
    `;

    lista.append(li);
  });
}); */

/* const traerPublicaciones = async() => {
  const lista = document.getElementById("listado");

  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const publicaciones = await response.json();

    publicaciones.forEach(publicacion => {
      const li = document.createElement("li");
      li.innerHTML = `
        <h2>${publicacion.title}</h2>
        <p>${publicacion.body}</p>
      `;
  
      lista.append(li);
    });
  }catch (error){
    console.log(error);
  }
}

traerPublicaciones();
*/
class Producto{

}
const productosLista = [];

const cargar = async () => {
  const response = await fetch()
  const productos = await response.json();

  productos.forEach(producto => {
    productosLista.push(new Producto(producto. nombre, produco.precio));
  });
};

cargar();


const persona = {
  nombre: "andres",
  edad: 4
}