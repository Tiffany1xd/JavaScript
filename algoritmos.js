function saludar(){
    console.log("Hola Mundo");
    alert("Hello World!")
}

// Algoritmo que realice una suma entre dos valores ingresados por el usuario
function sumar(){
    // Declarar las variables necesarias para la ejecución del algoritmo
    let n1 = 0;
    let n2 = 0;
    let suma = 0;
    //Solicitar y capturar los valores ingresados por el usuario
    n1 = parseInt(prompt('Por favor ingrese el primer valor a sumar'));
    n2 = parseInt(prompt('Por favor ingrese el segundo valor a sumar'));
    //Realizar el procedimiento
    suma = n1 + n2;
    //Imprimir el resultad en pantalla al usuario
    console.log('El resultado de la suma es ' + suma);
    alert('El resultado de la suma es ' + suma);
}

// Algoritmo que realice una suma, resta, multiplicación u división entre dos valores ingresados por el usaurio
function operaciones(){
    let v1 = 0;
    let v2 = 0;
    let resultado = 0;

    v1 = parseInt(prompt('Ingrese el primer valor'));
    v2 = parseInt(prompt('Ingrese el segundo valor'));

    resultado = v1 + v2;

    console.log('El resultado de la suma es ' +  resultado);
    alert('El resultado de la suma es ' + resultado);

    resultado = v1 - v2; 
    console.log('El resultado de la resta es ' +  resultado);
    alert('El resultado de la resta es ' + resultado);

    resultado = v1 * v2;
    console.log('El resultado de la multiplicación es ' +  resultado);
    alert('El resultado de la multiplicación es ' + resultado);

    resultado = v1 / v2;
    console.log('El resultado de la división es ' +  resultado);
    alert('El resultado de la división es ' + resultado);

}

// Realizar un algoritmo que determine el cuadrado de un número ingresado por un usuario

function cuadrado(){
    a = 0;
    result = 0; 

    a = parseInt(prompt('Ingrese el valor deseado para ver su cuadrado'));
    
    result = a ** 2;
    console.log('El cuadrado del número es '+ result);
    alert('El cuadrado del número es ' + result)
}

// Realizar un algoritmo que determine el área de un triángulo a partir de la área y la base del triángulo

function area(){
    let base = 0;
    let altura = 0;
    let resultArea = 0;

    base = parseInt(prompt("Ingrese el valor de la base del triangulo"));
    altura = parseInt(prompt("Ingrese el valor de la altura"));

    resultArea = (base * altura) / 2;

    console.log("El área del triángulo es: " + resultArea);
    alert("El área del triángulo es: " + resultArea);
}

// Realizar un algoritmo que determine la medida en kilómetros, metros y centrímetros de un valor dado en pulgadas

function conversion(){

    let valpulgadas = 0;
    let valkm = 0;
    let valcm = 0;
    let valmetros = 0;

    valpulgadas = parseInt(prompt("Ingrese el valor a convertir"));

    valkm = valpulgadas * 0.0000254;
    valcm = valpulgadas * 2.54;
    valmetros = valpulgadas * 0.0254;

    console.log("El valor en kilometros es: " + valkm + "km");
    alert("El valor en kilometros es " + valkm + "km");

    console.log("El valor en centímetros es: " + valcm + "cm");
    alert("El valor en centímetros es " + valcm + "cm");

    console.log("El valor en metros es: " + valmetros + "m");
    alert("El valor en metros es " + valmetros + "m");
}

//Realizar algortimo que pregunte al usuario a qué moneda quiere convertir el peso colombiano entre: dolar, euro y yenes

function monedas(){
    let pesocolombiano = 0;
    let dolar = 0;
    let euro = 0;
    let yenes = 0;
    let moneda; 
    
    pesocolombiano = parseInt(prompt("Ingrese la cantidad a convertir"));
    moneda = prompt("Ingrese el tipo de moneda a convertir: Dolar, Euro o Yen");

    switch (moneda) {
        case "dolar":
            dolar = (pesocolombiano * 1) / 4000;
            console.log("El resultado es: " + dolar + " dolares");
            alert("El resultado es: " + dolar + " dolares");
            break;
        case "euro":
            euro = (pesocolombiano * 1) /4500;
            console.log("El resultado es: " + euro + " euros");
            alert("El resultado es: " + euro + " euros");
            break;
        case "yenes":
            yenes = (pesocolombiano * 1) /28;
            console.log("El resultado es: " + yenes + " yenes");
            alert("El resultado es: " + yenes + " yenes");
            break;
        default:
            console.log("Ingrese el tipo de moneda a convertir: Dolar, Euro o Yen");
            alert("Ingrese el tipo de moneda a convertir: Dolar, Euro o Yen");
            break;    
    }
}

//Algoritmo que determine si un número es par o impar

function parImpar(){

    let valIngresado = 0;

    valIngresado = parseInt(prompt("Ingrese el valor"));

    if  (valIngresado % 2 == 0){
        console.log("El número es par");
        alert("El número es par");
} else {
    console.log("El número es impar");
    alert("El número es impar");
}
}

//Algoritmo que determine el mayor de dos números ingresados por el usuario

function numeroMayor(){

    let val1 = 0;
    let val2 = 0;

    val1 = parseInt(prompt("Ingrese el número a comparar"));
    val2 = parseInt(prompt("Ingrese el segundo valor a comparar"));

    if (val1 > val2) {
        console.log("El número mayor es: " + val1);
        alert("El número mayor es: " + val1);
    } else if (val2 > val1) {
        console.log("El número mayor es: " + val2);
        alert("El número mayor es: " + val2);
    } else {
        console.log("El número ingresado no es válido, ingrese un valor nuevo");
        alert("El número ingresado no es válido, ingrese un valor nuevo");
    }
}

//Algoritmo que determine el menor de tres números ingresados por el usuario

function numeroMenor(){

    let valor1 = 0;
    let valor2 = 0;
    let valor3 = 0;

    valor1 = parseInt(prompt("Ingrese el primer número"));
    valor2 = parseInt(prompt("Ingrese el segundo número"));
    valor3 = parseInt(prompt("Ingrese el tercer número"));

    if (valor1 < valor2 && valor1 <valor3) {
        console.log("El número menor es: " + valor1);
        alert("El número menor es: " + valor1);
    } else if (valor2 < valor1 && valor2 <valor3) {
        console.log("El número menor es: " + valor2);
        alert("El número menor es: " + valor2);
    } else if (valor3 < valor1 && valor3 < valor2){
        console.log("El número menor es: " + valor3);
        alert("El número menor es: " + valor3);
    }
}

//El colegio abc requiere un sistema que le permita validar a x estudiante si aprobó o reprobó x materia teniendo en cuenta que son 9 notas del 1 al 10 y se aprueba con una nota de 6.1 en adelante

function promedioNotas(){

    let nota1 = 0;
    let nota2 = 0;
    let nota3 = 0;
    let nota4 = 0;
    let nota5 = 0;
    let nota6 = 0;
    let nota7 = 0;
    let nota8 = 0;
    let nota9 = 0;
    let promedioFinal = 0;
    let nombre = prompt("Ingrese su nombre completo");
    let materia = prompt("Ingrese la materia");

    nota1 = parseInt(prompt("Ingrese la primera nota"));
    nota2 = parseInt(prompt("Ingrese la segunda nota"));
    nota3 = parseInt(prompt("Ingrese la tercera nota"));
    nota4 = parseInt(prompt("Ingrese la cuarta nota"));
    nota5 = parseInt(prompt("Ingrese la quinta nota"));
    nota6 = parseInt(prompt("Ingrese la sexta nota"));
    nota7 = parseInt(prompt("Ingrese la séptima nota"));
    nota8 = parseInt(prompt("Ingrese la octava nota"));
    nota9 = parseInt(prompt("Ingrese la novena nota"));

    promedioFinal = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9) /10
    if (promedioFinal >= 6.1) {
        alert("El estudiante " + nombre + " aprobó la materia " + materia + " con: " + promedioFinal);
    } else {
        alert("El estudiante " + nombre + " no aprobó la materia " + materia + " con: " + promedioFinal);
    }
}

//Un individuo desea invertir su capital en un banco y requiere saber cuánto dinero ganará después de n número de años teniendo en cuenta que el banco paga un interes mensual del 0.7% 

function capital(){
    let capitalInvertido = 0;
    let años = 0; 
    let ganancias = 0;

    capitalInvertido = parseInt(prompt("Ingrese la cantidad del capital invertido"));
    años = parseInt(prompt("Ingrese la cantidad de años que este lleva invertido"));

    ganancias = (años * 12) * (capitalInvertido * 0.7);

    alert("Las ganancias del monto del capital " + capitalInvertido + " son: " + ganancias);
}
