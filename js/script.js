$(function(){

    $('.popular__inner').slick({
        slidesToScroll: 1,
        slidesToShow: 4,
        arrows: true,
        nextArrow: `<button class="popular__arrow popular__next">
                        <img src="images/slider-arrow-right.svg" alt="slider arrow">
                    </button>`,
        prevArrow: `<button class="popular__arrow popular__prev">
                    <img src="images/slider-arrow-left.svg" alt="slider arrow">
                </button>`,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        easing: 'linear',
        responsive: [
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
              },
            },
          
          ],
        
    })

    $('.bot__close').on('click', function(){
        $('.bot').removeClass('active')
    })

    $('.header__btn').on('click', function(){
        $('.menu').addClass('active')
    })

    $('.menu__close').on('click', function(){
        $('.menu').removeClass('active')
    })

    $('.intro__box').on({
      mouseenter: function(){
          $(this).find('.intro__bg').last().addClass('active')
      },
      mouseleave: function(){
        if($(this).find('.intro__bg').length >= 2){
          $(this).find('.intro__bg').last().removeClass('active')
        } else{
          $(this).find('.intro__bg').last().addClass('active')
        }
      },
    })

    $('.cards__img').on({
      mouseenter: function(){
          $(this).find('.cards__bg').last().addClass('active')
      },
      mouseleave: function(){
        if($(this).find('.cards__bg').length >= 2){
          $(this).find('.cards__bg').last().removeClass('active')
        } else{
          $(this).find('.cards__bg').last().addClass('active')
        }
      },
    })


    // let videoUrl  = $('iframe').attr('src')
    // let autoplayText = '?autoplay=1&mute=1;amp;html5=1';
    // let fullUrl = videoUrl+autoplayText;

    // $('.video__content iframe').attr('src', fullUrl)
});