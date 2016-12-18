$(window).on("load",function(){
    $(".happen").each(function(){
        $(".animation1").fadeIn(500);
        $(".animation2").fadeIn(1000);
        $(".animation3").fadeIn(2000);
		$(".animation4").fadeIn(3000);
		$(".animation5").fadeIn(4000);
		$(".animation6").fadeIn(5000);
		$(".animation7").fadeIn(6000);
		$(".animation8").fadeIn(7000);
		$(".animation9").fadeIn(8000);
    }
	$('.fade').css( 'opacity', 0 );
    fade();
    $(window).scroll(function() {fade();});
	
});
