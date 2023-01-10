
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.annio}`);    // this hace referencia a las variables del propio objeto
    }
};


// ******************* Funciones constructoras ******************* \\

// como pense que se haria:

// function auto(_marca, _modelo, _annio) {
//     var auto = {
//         marca: _marca,
//         modelo: _modelo,
//         annio: _annio,
//         detalleDelAuto: function() {
//             console.log(`Auto ${_modelo} ${_annio}`); 
//         }
//     };
//     return auto;
// }



// como se hace:

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
var autoNuevo = new auto("Tesla", "Model 3", 2020);