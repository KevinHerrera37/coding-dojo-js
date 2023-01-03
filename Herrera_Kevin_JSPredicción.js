function myBirthYearFunc(){
    console.log("Nací en" + 1980);
}
//console.log al llamar a la función indicará en que año nació, "Nací en 1980".

function myBirthYearFunc(birthYearInput){
        console.log("Nací en" + birthYearInput);
    }
//cuando se llame a la función console.log indicará el año en que nació, indicado en la variable.

function add(num1, num2){
        console.log("¡Sumando números!");
        console.log("num1 es: " + num1);
        console.log("num2 es: " + num2);
        var sum = num1 + num2;
        console.log(sum);
    }

   //aún dando valores a las variables necesarias para que la función haga el resto no están haciendo un llamado a la función
   //por lo tanto el console.log no indicará nada hasta que alguien llame a la función.
    