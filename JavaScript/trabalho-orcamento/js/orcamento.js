//Adicionar Itens
var itensOrcamento = [];

function adicionarItem(){
    //captura elementos de input
    var inputDescricao  = document.getElementById("descricao");
    var inputValor = document.getElementById("valor");

    //validar dados de entrada
    if(inputDescricao.value == '' || inputValor.value == '') {
        alert("Você deve preencher os dois campos.");
        return;
    }
    //montar o novo item no formato JSON
    var novoItem ={
        "descricao": inputDescricao.value,
        "valor": inputValor.value
    }

    //adicona um novo item no array de itens de orçamento
    itensOrcamento.push(novoItem);

    redesenharTabela();

    //limpar os campos de entrada
    inputDescricao.value = null;
    inputValor.value = null;
}
//adiciona os itens na tabela
function redesenharTabela(){
    var corpoTabelaItens = '';
    var somatorio = 0;
    
    for(var i=0; i < itensOrcamento.length; i++){
        var item = itensOrcamento[i];
        var valor = parseFloat(item['valor']);

        somatorio += valor;

        corpoTabelaItens += `
            <tr>
                <td>${item['descricao']}</td>
                <td class="text-right">R$ ${valor.toFixed(2)}</td>
            </tr>
        `
    }
    
    var tabelaItensOrcamento = document.getElementById("tabela_itens_orcamento");
    tabelaItensOrcamento.innerHTML = corpoTabelaItens;

    var inputSomatorio = document.getElementById('somatorio');
    inputSomatorio.value = somatorio.toFixed(2);
}
function resetar(){
    itensOrcamento = [];
    redesenharTabela();
}