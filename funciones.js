

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

// QUIZZ 2
// crear una funcion que devuelva true si el numero es mayor a 5 y false si es menor o igual
console.log("************************** QUIZZ 2 **************************");
var compareNumbers = function(number) {
    boolean = number>5;
    return boolean;
}

console.log(compareNumbers(5));
console.log(compareNumbers(1));
console.log(compareNumbers(6));
