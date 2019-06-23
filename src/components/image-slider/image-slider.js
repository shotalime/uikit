jQuery(function($) {

  $('.image-slider').each( function(){
    var n = 0;
    var img = $(this).find('.image-slider__item');
    var dot = $(this).find('.image-slider__dot');
    var length = $(img).length;
    var prev = $(this).find('.image-slider__prev');
    var next = $(this).find('.image-slider__next');

    $(img[n]).removeClass('image-slider__hide');
    $(dot[n]).addClass('image-slider__dot_active');
    
  
  
    $(dot).on('click', function(){
      $(img).addClass('image-slider__hide');
      n = dot.index(this);
      $(img[n]).removeClass('image-slider__hide');
      $(dot).removeClass('image-slider__dot_active')
      $(this).addClass('image-slider__dot_active');
      return n;
      
    });
   
  
    $(prev).on('click', function(){
      if (n > 0) {
        n = n - 1;
      } else {
        n = length - 1;
      };
      console.log(n);
      $(img).addClass('image-slider__hide');
      $(img[n]).removeClass('image-slider__hide');
      $(dot).removeClass('image-slider__dot_active')
      $(dot[n]).addClass('image-slider__dot_active');
      return n;
    });
  
  
    $(next).on('click', function(){
      if (n < length - 1) {
        n = n + 1;
      } else {
        n = 0;
      };
  
      $(img).addClass('image-slider__hide');
      $(img[n]).removeClass('image-slider__hide');
      $(dot).removeClass('image-slider__dot_active')
      $(dot[n]).addClass('image-slider__dot_active');
      return n;
    });
  
  
    $('.image-slider__arrow').hide();

    $(this).on('mouseenter', function(){
  
      $(this).find('.image-slider__arrow').show();
  
    });
    $(this).on('mouseleave', function(){
  
      $(this).find('.image-slider__arrow').hide();
  
    });
  });

});

