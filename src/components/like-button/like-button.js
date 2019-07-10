$(document).ready(function() {

    
    var button = $('.like-button__button');
  
        if($(button).hasClass('clicked')) { 
  
            $('.clicked').find(".material-icons").text("favorite");
            $('.clicked').addClass("like-button__button_clicked");
            $('.clicked').parent().addClass("like-button_clicked");            
        };
 
    
    $('.like-button__button').click(function () {

        if($(this).find(".material-icons").html() != "favorite") {
            var $input = $(this).find('.like-button__count');
            var count = parseInt($input.text()) + 1;
            count = count < 0 ? 0 : count;
            $input.text(count);
            $(this).find(".material-icons").text("favorite");
            $(this).addClass("like-button__button_clicked");
            $(this).parent().addClass("like-button_clicked");
        };
    });
});