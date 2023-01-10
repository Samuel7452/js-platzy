// ejemplos del video
// 1: condicionales anidados

var edad =18
if (edad === 18) {
    console.log("Puede votar, sera su primera vez");
} else if (edad >18) {
    console.log("Puede votar");
} else {
    console.log("No puede votar");
}

// 2: condicionales ternarios

condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Si es un uno" : "No es un uno";

            // resultado es la variable donde se guardara el resultado de la condicion
            // numero === 1 es la condicion que se valida

            //  (? "Si es un uno") el primer valor despues del signo "?" sera
            //  guardado en la variable resultado

            // ( : "No es un uno" ) el valor despues de los 2 puntos sera guardado  
            // en la variable resultado si no se cumple la condicion anterior

console.log(resultado)


// ejemplo propio aplicando funciones

var validate = function (a,b) {
    
    if (a>b) {
        console.log(`${a} es mayor que ${b}`);
    } else if (a==b) {
        console.log(`${a} es igual a ${b}`);
    } else {
        console.log(`${a} es menor que ${b}`);
    }

}

validate(7,1);
validate(7,7);
validate(1,7);

// reto piedra papel y tijeras









var rock = "piedra";
var papper = "papel";
var scissors = "tijeras";

var startGame = function(user, cpu) {

    var userChosesRock = function(cpu) {
        if (cpu==scissors) {
            console.log(`El usuario gano con ${rock} contra la cpu que escogio ${scissors}`);
        } else if (cpu==papper) {
            console.log(`El usuario perdio con ${rock} contra la cpu que escogio ${papper}`);
        } else if (cpu==rock) {
            console.log(`El usuario empato con ${rock} contra la cpu que escogio ${rock}`);
        }
    }

    var userChosesPapper = function(cpu) {
        if (cpu==scissors) {
            console.log(`El usuario perdio con ${papper} contra la cpu que escogio ${scissors}`);
        } else if (cpu==papper) {
            console.log(`El usuario empato con ${papper} contra la cpu que escogio ${papper}`);
        } else if (cpu==rock) {
            console.log(`El usuario gano con ${papper} contra la cpu que escogio ${rock}`);
        }
    }

    var userChosesScissors = function(cpu) {
        if (cpu==scissors) {
            console.log(`El usuario empato con ${scissors} contra la cpu que escogio ${scissors}`);
        } else if (cpu==papper) {
            console.log(`El usuario gano con ${scissors} contra la cpu que escogio ${papper}`);
        } else if (cpu==rock) {
            console.log(`El usuario perdio con ${scissors} contra la cpu que escogio ${rock}`);
        }
    }

    if (user == rock) {
        userChosesRock(cpu);
    } else if (user == papper) {
        userChosesPapper(cpu);
    } else {
        userChosesScissors(cpu);
    }
}

startGame(rock,papper);
startGame(rock,scissors);
startGame(rock,rock);
