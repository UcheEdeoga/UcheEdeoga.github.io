    $(window).on("scroll", function() {
        if($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
        
        $('.features-section').owlCarousel({
            loop:true,
            margin:0,
            autoplay:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                }
            }
        })
        /*-----Page Sectioning---*/
        $.scrollIt({
            topOffset:-50
        });

        /*----Navbar Collapse---*/
        $(".nav-link").on("click", function(){
            $(".navbar-collapse").collapse("hide")
        });
    });

