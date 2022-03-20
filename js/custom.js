

$(document).ready(function(){


    // count down jquery script 

    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });

// client review jquery script 
    $('.slider').owlCarousel({
        autoplay:true,
        smartSpeed:1000,
        margin:0,
        loop:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    // client logo slider jquery script 

    $('.client-logo').owlCarousel({
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:1000,
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:4
            },
            600:{
                items:4
            },
            1200:{
                items:4
            }
        }
    })

    // team slider jquery script

    $('.team-slider').owlCarousel({
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:1000,
        loop:true,
        margin:0,
        nav:true,
        margin:30,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1200:{
                items:4
            }
        }
    })

// mixer jquery script

        var container = document.querySelector('.gallery');
        var mixer = mixitup(container, {
            selectors: {
                control: '[our-mix-control]'
            }   
        });

// news slider jquery script

    $('.news-slider').owlCarousel({
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:1000,
        loop:true,
        margin:0,
        nav:true,
        margin:30,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1200:{
                items:4
            }
        }
    })

  });
// responsive navigation menu 
$('#menubars').click(function(){
$('.menu').addClass('displaynone');
});
$('#cros-sign').click(function(){
$('.menu').removeClass('displaynone');








});

// scrol top script 
$('#top').click(function(){
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
});
$("#top").hide();
$(window).scroll(function(){
    var ourWindow=$(this).scrollTop();
    if(ourWindow<100){
        $('#top').fadeOut();
    }else{
        $("#top").fadeIn();
    }

    // menu fixed

    if(ourWindow>100){
        $('body').addClass('fixed');
    }else{
        $('body').removeClass('fixed');
    }


}); 
    //menu li active
    $('.menu ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

    });

    //menu li active
    $('.menu a[href^="#"]').click(function(e){
        e.preventDefault();
        var target = this.hash;

       		$('html, body').animate({
       			scrollTop: $(target).offset().top-5
       		}, 500);
    });