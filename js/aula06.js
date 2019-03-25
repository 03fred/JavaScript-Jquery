$(function(){

var ex = $('.ex1');
$('.ev1').click(function(){

 $(this).css("background","red");
 ex.text("você clicou");

});

$('.ev2').dblclick(function(){

 ex.text("você deu dois clicks");

});

$('.ev3').focusin(function(){

$(this).css("background","red");
 ex.text("deu foco");
}).focusout(function(){
$(this).css("background","black");
 ex.text("você tirou o foco");

});


$('.ev4').hover(function(){

 ex.text("você passou o mouse");

});

$('.ev5').mousedown(function(){

 ex.text("você apertou o botao do mouse");

}).mouseup(function(){

 ex.text("você soltou o botao do mouse");

});

var a = 0;
$('.ev6').mouseenter(function(){
a  += 1;
ex.text("Entrada do mouse : "+a);

}).mouseout(function(){

ex.text("saida do mouse ");

});

var b = 0;
$('.ev7').mouseover(function(){

b  += 1;
ex.text("Mouse over : "+b);


}).mouseleave(function(){

ex.text("Mouse leave: ");


});
$('.ev8').mousemove(function(move){


var localx = move.pageX;
var localy = move.pageY;

ex.text("Movimento X: " +localx+ " - Movimento Y: " + localy);
});

});












