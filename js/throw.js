//objeto tirada

var tirada = {
    dodec: "",
    dados: [4],
    numerosRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },
    throwDices() {
        var unoatres = [];
        var unoaseis = [];

        //generamos la tirada de los dos dados 

        for (let _a = 0; _a < 3; _a++) {
            unoatres[_a] = this.numerosRandom(4, 1);
        }

        for (let _b = 0; _b < 2; _b++) {
            unoaseis[_b] = this.numerosRandom(7, 1);
        }

        this.dados = [...unoatres, ...unoaseis]; //rest operator. IMPORTANTE

        //generamos la tirada del dodecaedro
        this.dodec = this.numerosRandom(13, 1);

    },
    throwShow() {
        //console.log(this.dados);
        for (let _i = 0; _i < this.dados.length; _i++) {
            console.log("DADO " + _i + " : " + this.dados[_i]);
        }
        console.log("El resultado del dodecaedro es: " + this.dodec + " teniendo en cuenta el resultado de tus otros dados....");

    },
    diceCheck(){
        dadowant = false;
        var dado1 = "";
        while (dadowant == false) {
            dado1 = prompt("Dime el valor de un dado :");
            for (let i= 0; i< this.dados.length; i++) {
                if (this.dados[i] === dado1) {
                    //optotal = dado1;
                    dadowant = true;
                }
            }
            return dado1;
        }
    },
    opDemand() {

        /*METODOLOGÍA CON EVAL Y PROMPT. MARK I
        var operation = "";
        operation = prompt("....Puedes escribir aqui la operación matemática necesaria para que combinando los dados obtengamos el numero del dodecaedro?");

        if(this.dodec == eval(operation)){
            console.error("SI"); //LA OPERACION ES CORRECTA
        }else{
            console.error("NO"); //LA OPERACION ES INCORRECTA
        }*/

        /*METODOLOGÍA PIDIENDO DADO A DADO.
        ------------------------------------------------------------------------------------------------------------------*/

        
        
        
        var operation1 = "";
        var operation2 = "";
        var operation3 = "";
        var operation4 = "";
        var optotal = "";

        //comprobamos si el dado que nos introduce el usuario existe.
        optotal = tirada.diceCheck();
        operation1 = prompt("Ahora si eres tan amable dime el operando");
        optotal += operation1;
        console.log(optotal);
        optotal += tirada.diceCheck();
        //operation2 = prompt("Ahora si eres tan amable dime el operando");
        //optotal += operation2;

   
    }
}

//tirada.throwDices();