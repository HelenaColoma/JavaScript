function comparar(valor1, valor2){
    if (valor1<valor2){
        alert("El número mayor es el: "+valor2);
    }
    else {
        alert("El número mayor es el: "+valor1);
    }
}

var num1=parseInt(prompt("Introduce un número"));
var num2=parseInt(prompt("Introduce otro número"));

comparar(num1, num2);
