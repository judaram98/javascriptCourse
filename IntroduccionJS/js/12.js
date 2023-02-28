const producto = {
  nombreProducto: "Monitor",
  precio: 300,
  disponible: true,
};

const medidas = {
  alto: 5500,
  ancho: 600,
};

const nuevoProducto = { ...producto, ...medidas };
console.log(nuevoProducto);
