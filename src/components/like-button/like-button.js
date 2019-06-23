$(document).ready(function() {
    $('.like-button__button').click(function () {
        if($(this).find(".material-icons").html() != "favorite") {
            var $input = $(this).find('.like-button__count');
            var count = parseInt($input.text()) + 1;
            count = count < 0 ? 0 : count;
            $input.text(count);
            $(this).find(".material-icons").text("favorite");
            $(this).addClass("like-button__button_clicked");
        }       
    });
});