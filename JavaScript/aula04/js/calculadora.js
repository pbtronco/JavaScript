var inputValorA = document.getElementById("valor_a");
var inputValorB = document.getElementById("valor_b");
var inputResultado = document.getElementById("resultado");

function somar(){
    inputResultado.value = parseFloat(inputValorA) + parseFloat(inputValorB);
}
function subtrair(){
    inputResultado.value = parseFloat(inputValorA) - parseFloat(inputValorB);
}
function multiplicar(){
    inputResultado.value = parseFloat(inputValorA) * parseFloat(inputValorB);
}
function dividir(){
    inputResultado.value = parseFloat(inputValorA) / parseFloat(inputValorB);
}