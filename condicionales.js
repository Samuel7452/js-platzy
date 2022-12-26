// ejemplo del video

var edad =18
if (edad === 18) {
    console.log("Puede votar, sera su primera vez");
} else if (edad >18) {
    console.log("Puede votar");
} else {
    console.log("No puede votar");
}


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


