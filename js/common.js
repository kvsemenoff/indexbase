
$(document).ready(function(){
   
    $("#current").click(function () {
        $('ul.lang-switcher').css('display', 'block');
    });   
    $(".lang-switcher li").click(function () {
        //alert(t);
        $("#current").html($(this).html());
        $('ul.lang-switcher').css('display', 'none');
    });

    $(".lang-switcher").mouseleave(function () {
        $('ul.lang-switcher').css('display', 'none');
    });
   
    $("#top-slider").owlCarousel({
        loop:false,
        margin:0, 
        nav:false, 
        autoplay:false, 
        responsive:{ 
            0:{
                items:4
            },
            600:{
                items:5
            },
            1000:{
                items:15
            }
        }
    });

});
