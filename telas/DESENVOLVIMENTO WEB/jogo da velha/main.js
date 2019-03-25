
var jogador1 = true;
cont = 0;
var tabuleiro = [0,0,0,0,0,0,0,0,0];

$( ".botao" ).click(function() {

if (jogador1){
	$(this).html("X");
     var id = $(this).attr('id');
	 tabuleiro[id - 1] = 1; 
     console.log(tabuleiro);
	}
else
$(this).html("O");
jogador1 = !jogador1;
console.log(tabuleiro);



});

