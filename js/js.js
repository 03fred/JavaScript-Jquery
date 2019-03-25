
/*$(document).ready(function() {

Lógica de desenvolvimento em Jquery - AULA03

	$('h1').css("color","#f66");
	$('h1').hide();
	$('h1').delay('1000');
	$('h1').fadeIn("slow");
	$('h1').text('Curso Jquery PontoCanal');

    $('h1').css("color","#f66").hide().delay('1000').fadeIn("slow").text('Curso Jquery PontoCanal');

    $('h1').css("color","#f66")
    .hide()
    .delay('1000')
    .fadeIn("slow")
    .text('Curso Jquery PontoCanal')
    .click(function() {
     $('body').css("background" , "#c30")
     $('h1').css("color","#fff");

    });
 
 


 $('a').css({color:'red',display:'block'});
 $('.link2').css("color","green");
 $('#link3').css("color","blue");
 $('*').css("padding","10px");
 $('h1,#link3').css("border-bottom","solid 3px blue");


Seletores Hierárquicos  - aula 04

$('h2').css("margin","0");
$('p').css({margin:0,color:'blue'});
$('.div1').css({'margin-bottom':'20px',background:'#ccc'});


//Filhas
$('.div1 span').hide()
.delay('1000')
.fadeIn(1000)
.css({color:'green','font-size':'15px'});

$('.div1 h2')
.hide()
.css({
    'font-size': '50px',
    color: 'red'
})
.fadeIn(800);


//Filhas diretas do elemento

$('.div1 > span').css({
    color: 'red'
});


 //Primeiro Elemento após o selecionado
 $('.p1 + p').css({'font-size':'20px'});
// Atacando todos Elemntos após selecionado
 $('.p1 ~ p').css({color:'black'});


});
*/


$("img").on("error", function(){


  var imagem = $(this).attr("src");
  alert('Imagem ' +imagem+' indisponivel ');﻿
  $("img").attr('src', 'js/img/error.jpg');


});


$(function(){
    $('img').width($(window).width());
    $('img').height($(window).height());

    $(window).resize(function() {

        $('img').width($(window).width());
        $('img').height($(window).height());

    });

});

/*
$(window).scroll(function(event) {
$('img').fadeOut('100');
*/

$('body').css('height','5000px')
$(window).scroll(function() {
var topo = $(window).scrollTop();
if(topo > 400)
{
$('img').fadeOut('100');
}else{

    $('img').fadeIn('1000');
}

});



$("cliqueBotao").click(function() {
$("#saida").html($(this).html());
});