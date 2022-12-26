//hay 2 tipos de coercion,
//Coercion implicita: es cuando el lenguaje nos ayuda a cambiar el tipo de valor para evitar retornar errores dependiendo del contexto.

var resultado = 7 + "4"; // el resultado seria 47, en lugar de devolver un error el codigo concatena ambos valores como si ambos fuesen   
                         // string


//Coerción explicita = es cuando el programador cambia por si mismo el tipo del valor.
//se puede convertir diferentes variables a otros tipos por medio de los siguiente proceso

var a = 20;
var c = String(a)                                                                   // conversion de int a string
console.log(`el tipo de la variable a cambiado de ${typeof(a)} a ${typeof(c)}`)


var d = Number(c)                                                                   // conversion de string a int
console.log(`el tipo de la variable a cambiado de ${typeof(c)} a ${typeof(d)}`)
