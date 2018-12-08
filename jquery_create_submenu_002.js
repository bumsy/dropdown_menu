


    $(".submenu").hide() // Изначально спрятать меню

    // hover() устанавливает обработчик(и) двух событий: mouseenter и mouseleave. При наведении курсора выезжает меню	
	$(".menu").hover(function(){
		$(".submenu").slideDown(400); 

},function(){


// Если убрать курсор с меню, оно сложится вверх
$( ".dropdown_menu" ).mouseleave(function() {
  $( ".submenu" ).slideUp(400);
});

});


// console.dir(document);

	
