

console.log("************************** funcion declarativa **************************");


function funcionDeclarativa() {
    return 3;
}
console.log(`el numero retornado por la funcion es ${funcionDeclarativa()}`)


console.log("************************** funcion de exprecion**************************");


var funcionExprecion = function(a,b) {
    return a + b;
}
console.log(`El resultado es ${funcionExprecion(1,6)}`);


console.log("************************** QUIZZ 1 **************************");
// QUIZZ 1
// crear una funcion que devuelva el tipo de la variable ingresada
var typeValue = function(value) {
    type = typeof(value);
    return type;
}

console.log(typeValue("string"));
console.log(typeValue(1));
console.log(typeValue(false));


console.log("************************** QUIZZ 2 **************************");
// QUIZZ 2
// crear una funcion que devuelva true si el numero es mayor a 5 y false si es menor o igual

var compareNumbers = function(number) {
    boolean = number>5;
    return boolean;
}

console.log(compareNumbers(5));
console.log(compareNumbers(1));
console.log(compareNumbers(6));


console.log("************************** QUIZZ 3 **************************");
// QUIZZ 3
// la funcion recibe un array, un numero entero y un string con el nombre de un estudiante,
// si death count es mayor a 0 la funcion debe eliminar la cantidad equivalente al numero en la lista de estudiantes desde el final hacia el
// inicio, si el numero es 0 se debe dejar la lista como esta y simplemente agregar el nuevo estudiante al final de la lista

export function solution(estudiantes, deathCount, nuevo) {
    if (deathCount > 0) {
      for (var i = 0; i < deathCount; i++) {
        estudiantes.pop();
      }
      estudiantes.push(nuevo);
      return estudiantes;
    }
    estudiantes.push(nuevo);
    return estudiantes;
}

solution(["Nico", "Zule"], 0, "Santi");
solution(["Juan", "Juanita", "Daniela"], 1, "Julian");
solution(["Nath", "Luisa", "Noru"], 2, "Cami");


console.log("************************** QUIZZ 4 **************************");
// QUIZZ 4
// Este objeto puede contener diferentes propiedades. Debes asegurarte de que tenga la propiedad licensePlate (la placa del auto). Si sí la tiene, devuelve el objeto original con la propiedad drivingLicense como true. Si no la tiene, devuelve el objeto original con la propiedad drivingLicense como false.

export function solution(car) {
    if (car['licensePlate'] != undefined) {
      car['drivingLicense'] = true;
      return car;
    } else {
      car['drivingLicense'] = false;
      return car;
    }
  }
  
// Prueba 1
solution({
  color: 'red',
  brand: 'Kia',
});

// Prueba 2
solution({
  color: 'gray',
  brand: 'Chevrolet',
  licensePlate: 'AAA111',
});

// Prueba 3
solution({ licensePlate: 'RGB255'  });


console.log("************************** QUIZZ 4 **************************");
// En este desafío debes ayudarnos a arreglar la función solution.
// Esta recibe un array cars y debería retornar el array filtrado únicamente con los objetos que tengan la propiedad licensePlate.
// Pero no está funcionando.
// La función solo devuelve un objeto con el primer elemento que cumple los requisitos, no estamos recibiendo los demás elementos del array que también deberían pasar el filtro.


export function solution(cars) {
  var filtered_cars = cars.filter(function (car) {
    return car.licensePlate != undefined;
  })
  return filtered_cars
}