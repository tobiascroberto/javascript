console.log("hola mundo");

const btnCalcular = document.querySelector("#btn-calcular");
const precio = document.querySelector("#precio");
const descuento = document.querySelector("#descuento");
const mostrarResultado = document.querySelector("#resultado");

btnCalcular.addEventListener("click", (e) => {
  e.preventDefault();
  let precioCalcular = Number.parseFloat(precio.value);
  let descuentoCalcular = Number.parseFloat(descuento.value);
  let resultado = precioCalcular * (1 - descuentoCalcular);

  mostrarResultado.innerHTML = `El resultado es: ${resultado} `;
});
