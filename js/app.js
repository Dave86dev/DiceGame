
//Exigimos al cliente la tirada...

var keyboard = "";
while (keyboard !="x"){
    keyboard = prompt("Bienvenido a este fabuloso Dice Game, pulsa X para lanzar los dados!");
    if (keyboard){
        keyboard = keyboard.toLowerCase();
    }
}
    

//Generamos las tiradas
tirada.throwDices();

//Mostramos el resultado de las tiradas
tirada.throwShow();
//DEMANDAMOS LA OPERACION MATEMÁTICA AL USUARIO
tirada.opDemand();