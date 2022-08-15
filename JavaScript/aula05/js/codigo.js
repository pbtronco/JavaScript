var a = "123456";
var b = 100;
var c = 50.99;
var d = 123.96546;

console.log(a);
console.log(b);
console.log(c);

var resultado = parseInt(a) + b + c;

console.log( resultado );

console.log(Math.round(resultado));

console.log(d);

console.log(d.toFixed(2));

console.log("A variável a, vale: " +a);

var texto = `
A variavel a, vale: ${a}.
A variavel b, vale: ${b}.
A variavel c, vale: ${c}.
A variavel resultado, vale: ${resultado}.
`
console.log(texto);

var x = 123;
var y = 321;

console.log(x+y);

console.log(x.toString()+y.toString());

var registro = {
    "nome" : "Mateus",
    "idade" : 20
}
console.log(registro["nome"]);
console.log(registro["idade"]);

console.log("************JOGO*************")

var equipe =[];


var jogador1 = {
    "nome": "Mateus",
    "idade": 20
}

equipe.push(jogador1);

var jogador2 = {
    "nome": "Julia",
    "idade": 16
}

equipe.push(jogador2);

var jogador3 = { 
    "nome": "Pablo",
    "idade": 29
}
equipe.push(jogador3);

console.log(equipe);
console.log(equipe[1]);

var julia = equipe[1];
console.log(`${julia["nome"]} ${julia["idade"]}`);

console.log(`A equipe é composta por ${equipe.length} jogadores.`);
