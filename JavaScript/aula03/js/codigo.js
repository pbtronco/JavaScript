function cliqueBotao(){
    var elementoTexto = document.getElementById("texto");

    if((elementoTexto.style.color == "") || (elementoTexto.style.color == "rgb(0, 0, 0)")){
        //se estiver vazio(com a cor padrão), pinta de verde
        elementoTexto.style.color = "rgb(0, 255, 0)";
    }else{
        //se NÃO estiver preto, pinta preto
        elementoTexto.style.color = "#000000";
    }
}

//console.log(document.body.childNodes[3].childNodes[1].textContent);

//var elementoTexto = document.getElementById("texto");

//console.log(elementoTexto);
//Trocar a cor do texto
//elementoTexto.style.color = "#000088";
