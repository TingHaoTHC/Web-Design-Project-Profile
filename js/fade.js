$(window).on("load",function() {
    function fade() {
        var animation_height = $(window).innerHeight() * 0.30;
        var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

        $('.fade').each(function() {
            
            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();
            
            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
               
                    $(this).css( {
                        transition: 'opacity 3s linear',
                        opacity: 1
                    } );

                } else {
                   
                    $(this).css( {
                        transition: 'opacity .25s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {
                
                $(this).css( 'opacity', 0 );
            }
        });
		
		$('.fade1').each(function() {
            
            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();
            
            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
               
                    $(this).css( {
                        transition: 'opacity 3.33s linear',
                        opacity: 1
                    } );

                } else {
                   
                    $(this).css( {
                        transition: 'opacity .25s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {
                
                $(this).css( 'opacity', 0 );
            }
        });
		
		$('.fade2').each(function() {
            
            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();
            
            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
               
                    $(this).css( {
                        transition: 'opacity 3.33s linear',
                        opacity: 1
                    } );

                } else {
                   
                    $(this).css( {
                        transition: 'opacity .25s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {
                
                $(this).css( 'opacity', 0 );
            }
        });
		$('.fade3').each(function() {
            
            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();
            
            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
               
                    $(this).css( {
                        transition: 'opacity 3.33s linear',
                        opacity: 1
                    } );

                } else {
                   
                    $(this).css( {
                        transition: 'opacity .25s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {
                
                $(this).css( 'opacity', 0 );
            }
        });
		$('.fade4').each(function() {
            
            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();
            
            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
               
                    $(this).css( {
                        transition: 'opacity 3.66s linear',
                        opacity: 1
                    } );

                } else {
                   
                    $(this).css( {
                        transition: 'opacity .25s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {
                
                $(this).css( 'opacity', 0 );
            }
        });
		$('.fade5').each(function() {
            
            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();
            
            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
               
                    $(this).css( {
                        transition: 'opacity 3.66s linear',
                        opacity: 1
                    } );

                } else {
                   
                    $(this).css( {
                        transition: 'opacity .25s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {
                
                $(this).css( 'opacity', 0 );
            }
        });
		$('.fade6').each(function() {
            
            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();
            
            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
               
                    $(this).css( {
                        transition: 'opacity 3.66s linear',
                        opacity: 1
                    } );

                } else {
                   
                    $(this).css( {
                        transition: 'opacity .25s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {
                
                $(this).css( 'opacity', 0 );
            }
        });
		$('.fade7').each(function() {
            
            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();
            
            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
               
                    $(this).css( {
                        transition: 'opacity 4s linear',
                        opacity: 1
                    } );

                } else {
                   
                    $(this).css( {
                        transition: 'opacity .25s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {
                
                $(this).css( 'opacity', 0 );
            }
        });
    }
    $('.fade .fade1 .fade2 .fade3 .fade4 .fade5 .fade6 .fade7').html( 'opacity', 0 );
    fade();
    $(window).scroll(function() {fade();});
});