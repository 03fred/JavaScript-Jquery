// Indica se o último botão pressionado foi um botão de operação
var ultimoOp = false;

// Armazena a operação selecionada
var operacao;

// Armazena o valor do primeiro operando
var operando01;


$(".btn").click(function() {
    $("#output").html($(this).html());
    var output = $('.btn');

});

/*
 * Concatena ou substitui o conteúdo do display de saída
 */
 function cliqueBotao(n) {


    if (ultimoOp) {

        $('#output').val(n);
        ultimoOp = false;

    } else {
     $('#output').val(parseFloat($('#output') + n));

 }

}


/*
 * Recupera o primeiro operando e armazena a operação
 */
 function cliqueOperacao(op) {

    operando01 = parseFloat($("#output").html());

    operacao = op;

    
    ultimoOp = operacao;
    
    console.log(ultimoOp);
}



function cliqueIgual() {
    console.log(operando01);
    console.log(operando02);

    var output = $("#output").html();
    

    var operando02 = parseFloat($("#output").html());


    switch (operacao) {
        case "soma":
        $("#output").html(operando01 + operando02); 
        break;
        case "sub":
        $("#output").html(operando01 - operando02);
        break;
        case "mult":
        $("#output").html(operando01 * operando02);       
        break;
        case "div":
        $("#output").html(operando01 / operando02);       
        break;
        default:
        $("#output").html("Erro: operação inválida!");
        break;

    }
}
