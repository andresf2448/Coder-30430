// let button = document.getElementById("btn");

/* button.addEventListener("click", () => {
  Swal.fire({
    title: "Error!",
    text: "Do you want to continue?",
    icon: "error",
    confirmButtonText: "Cool",
  });
}); */

/* button.addEventListener("click", () => {
  Swal.fire({
    title: "Genial!",
    text: "Haz guardado en el carrito!",
    icon: "success",
    confirmButtonText: "Cool",
  });
}); */

/* button.addEventListener("click", () => {
  Swal.fire({
    title: "Error!",
    text: "Error inesperado",
    icon: "error",
    confirmButtonText: " =( ",
  });
}); */

/* button.addEventListener("click", () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 5000,
  });
}); */

/* button.addEventListener("click", () => {
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}); */

/* button.addEventListener("click", () => {
  Swal.fire({
    title: "Está seguro de eliminar el producto?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, seguro",
    cancelButtonText: "No, no quiero",
  }).then((result) => {
    if (result.isConfirmed) {
      //lugar para ejecutar la lógica necesaria para eliminar del carrito

      Swal.fire({
        title: "Borrado!",
        icon: "success",
        text: "El archivo ha sido borrado",
      });
    }
  });
}); */

/* button.addEventListener("click", () => {
  Swal.fire({
    title: "Ingrese el producto",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Look up",
  }).then((result) => {
    if (result.isConfirmed) {
      console.log("entramos", result.value);
    }
  });
}); */

/* button.addEventListener("click", () => {
  Toastify({
    text: "si te interesa el produc",
    duration: 5000,
  }).showToast();
}); */

/* button.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    style: {
      background: "linear-gradient(to left, #00b09b, #96c92d)",
    },
  }).showToast();
}); */

/* button.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    className: "rojo",
  }).showToast();
}); */

/* button.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    onClick: () => {
      Toastify({
        text: "Clickeaste un Toast!",
        duration: 1500,
      }).showToast();
    },
  }).showToast();
}); */

/* button.addEventListener("click", () => {
  Toastify({
    text: "Click aquí para ir a Coder!",
    duration: 3000,
    destination: "https://www.coderhouse.com",
  }).showToast();
}); */

// const DateTime = luxon.DateTime;
/* const dt = DateTime.local(2022, 7, 28, 18, 13);
console.log(dt.c); */
// const now = DateTime.now();
// console.log(now.toString());
// console.log(now.year);
// console.log(now.month);
// console.log(now.day);
// console.log(now.second);
// console.log(now.weekday);

// console.log(now.zoneName);
// console.log(now.daysInMonth);
  // console.log(now.toLocaleString());
// console.log(now.toLocaleString(DateTime.DATE_FULL));
// console.log(now.toLocaleString(DateTime.TIME_SIMPLE));

// console.log(now.setLocale('en').toLocaleString(DateTime.DATE_FULL));
// console.log(now.setLocale('es').toLocaleString(DateTime.DATE_FULL));

// const DateTime = luxon.DateTime;
// const dt = DateTime.now();

// console.log(dt.toLocaleString(DateTime.DATETIME_SHORT));

// const suma = dt.plus({hour: 5, minutes: 15});
// console.log(suma.toLocaleString(DateTime.DATETIME_SHORT));

// const resta = dt.minus({month: 3, days: 10});
// console.log(resta.toLocaleString(DateTime.DATETIME_SHORT));

const DateTime = luxon.DateTime;
const Interval = luxon.Interval;

const now = DateTime.now();
const navidad = DateTime.local(2022, 12, 25);

const i = Interval.fromDateTimes(now, navidad);
console.log(i.length('days'));
console.log(i.length('hours'));
console.log(i.length('minutes'));