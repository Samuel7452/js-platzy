
var frutas = ['manzana', 'platano', 'cereza', 'fresa'];

var masFrutas = frutas.push('uvas');          //agrega elemento al final del array
var ultimo = frutas.pop('uvas');              //elimina el ultimo elemento del array
var nuevaLongitud = frutas.unshift('uvas');   //agrega elemento al inicio del array
var borrarFruta = frutas.shift('uvas');       //borra el primer elemento del array
var posicionCereza = frutas.indexOf("cereza") //devuelve el index de la variable ingresada dentro de un array


console.log(frutas);
console.log(frutas.length);
console.log(frutas[3]);


var articulos = [
    {
        nombre: 'Bici',
        costo: 3000
    },
    {
        nombre: "Tv",
        cost: 2500
    },
    {
        nombre:"Libro",
        costo:320
    },
    {
        nombre:"Celular",
        costo:10000
    },
    {
        nombre:"Laptop",
        costo:20000
    },
    {
        nombre:"Teclado",
        costo:500
    },
    {
        nombre:"Audifonos",
        costo:1700
    }
]

// metodo de filtrado .filter()
var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500
});
console.log(articulosFiltrados);

// metodo recorrer .map() en este caso retorna el nombre de todos los elementos del objeto
var nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre
})
console.log(nombreArticulos);

//metodo encontrar .find() encuentra un elemento dentro del objeto con el nombre que indiquemos
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
})
console.log(encuentraArticulo);

//metodo recorrer .foreach()
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
}) 

//metodo some() es una validacion que permite saber si dentro del objeto hay elementos con el valor ingresado
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700
})
console.log(articulosBaratos)