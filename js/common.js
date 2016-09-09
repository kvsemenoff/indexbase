
$(document).ready(function(){
   

   
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
