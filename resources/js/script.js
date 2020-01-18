$(document).ready(
    function () 
    {
        // Way points
        $('.about-section').waypoint(
            function(dicrection){
                if(dicrection == 'down'){
                    $('nav').addClass('sticky');
                }else{
                    $('nav').removeClass('sticky');
                }
            }, {
                offset: '500px'
            }
        )
        
        //scroll
        $('a').click(function (event) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1500);
            event.preventDefault();
        });

        //mobile nav
        $('.mobile-nav-icon').click(
                function()
                {
                    $('.main-nav').slideToggle(300);
                    if($('.mobile-nav-icon').hasClass('fa-bars'))
                    {
                        $('.mobile-nav-icon').addClass('fa-times');
                        $('.mobile-nav-icon').removeClass('fa-bars');
                    }
                    else
                    {
                        $('.mobile-nav-icon').addClass('fa-bars');
                        $('.mobile-nav-icon').removeClass('fa-times');
                    }
                }
        )
    }
)

