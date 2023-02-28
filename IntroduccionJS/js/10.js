//Objetos

// const nombre = "Monitor";
// const precio = 300;
// const disponible = true;

const producto = {
  nombre: "Monitor",
  precio: 300,
  disponible: true,
};

console.log(producto);

// //Agregar propiedades
// producto.imagen = "imagen.jpg";

// console.log(producto);

// //Eliminar propiedades
// delete producto.disponible;
// console.log(producto);

//Destructuring, crea la variable y extrae el valor del objeto
const { nombre, precio } = producto;
console.log(nombre);
console.log(precio);
