$(document).ready(function(){

	$('#cme').click(function(){
		alert("Click Please");
	});

	// hide
	$('#hide').click(function(){
		$('h2').fadeOut(2000);
	});

	// show
	$('#show').click(function(){
		$('h2').fadeIn(2000);
	});

	// toggle
	$('#toggle').click(function(){
		$('h2').fadeToggle(2000);
	});

	// fto
	$('#fto').click(function(){
		$('h2').fadeTo(1000, .4);
	});

	// slidetoggle
	$('.panel').click(function(){
		$('.content').slideToggle(1000);
	});

	// draggable
	$( "#draggable" ).draggable();

	// focus
	$("input").focus(function(){
		$(this).css("background-color", "white");
	});
	$("input").blur(function(){
		$(this).css("background-color", "yellow");
	});

	// on
	$("p").on("click", function(){
		$(this).hide();
	});

	$("h3").on({
		mouseenter: function(){
			$(this).css("background-color", "lightgray");
		},  
		mouseleave: function(){
			$(this).css("background-color", "lightblue");
		}, 
		click: function(){
			$(this).css("background-color", "yellow");
		}  
	});

	// keyup and keydown
	$(".key").keydown(function(){
		$(".key").css("background-color", "yellow");
	});
	$(".key").keyup(function(){
		$(".key").css("background-color", "pink");
	});

	// scroll
	var x = 0;
	$("div").scroll(function(){
		$(".sp1").text( x+= 1);
	});

	// resize
	var x = 0;
		$(window).resize(function(){
			$(".sp").text(x += 1);
		});

	// trigger
	$(".trig").select(function(){
    $(".trig").after(" Text marked!");
	});
	$("button").click(function(){
		$(".trig").trigger("select");
	});

	// progressbar

	$( "#progressbar" ).progressbar({
      value: 75
    });

	// accordion

    $( "#accordion" ).accordion({
		collapsible:true
	});

    // date picker

	$("#datepicker" ).datepicker();

	// dialog

	$( "#dialog" ).dialog();
  	

	$( "#button" ).on( "click", function() {
		$( ".newClass" ).switchClass( "newClass", "anotherNewClass", 1000 );
		$( ".anotherNewClass" ).switchClass( "anotherNewClass", "newClass", 1000 );
	});







});









// jquery syntax

// $('selector').event(effect)

// jquery ui
// 1. file download
// 		css and js
// 2. markup
// 3. style
// 4. activation

