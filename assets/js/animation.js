$(function loaded(){
    console.log("im ready");
    setInterval(function pulse(){
      $('body > div.hero > i').toggleClass('pulse');
    }, 400);
    $('body > div.hero > i').on('click', function(){
      console.log('clicked');
      $('html, body').animate({
        scrollTop: $("#toScrollTo").offset().top
      }, 2000);
    })

    $(document).scroll(function(e){
      var scrollAmount = $(window).scrollTop();
      var documentHeight = $(document).height();
      var scrollPercent = (scrollAmount / documentHeight ) * 100;
      if(scrollPercent > 15) {
        scrolledHead();

      }        else{

                $('.header').removeClass('scrolledHead');
                $('.logo > svg').removeClass('scrolledSvg');
                $('.logo').removeClass('scrolledLogo');
              }

      function scrolledHead(){
        $('.header').addClass('scrolledHead');
        $('.logo > svg').addClass('scrolledSvg');
        $('.logo').addClass('scrolledLogo');
      }
    })

});
