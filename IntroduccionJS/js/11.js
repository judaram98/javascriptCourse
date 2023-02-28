//Objetos

const producto = {
  nombreProducto: "Monitor",
  precio: 300,
  disponible: true,
};

Object.freeze(producto); //COngela y no permite ni anadir, eliminar o modificar valores
Object.seal(producto); //No permite anadir o eliminar pero si modificar
