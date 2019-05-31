$(document).ready(function() {
    $('.like-button__button').click(function () {
        var $input = $(this).find('.like-button__count');
        console.log($input.text())
        var count = parseInt($input.text()) + 1;
        count = count < 0 ? 0 : count;
        $input.text(count);
        $(this).find(".material-icons").text("favorite");
        $(this).addClass("like-button__button_clicked");
        
        });
});

// $(document).ready(function() {
//     $('.quantity-buttons__button-minus').click(function () {
//         var $input = $(this).parent().find('.quantity-buttons__input');
//         var count = parseInt($input.val()) - 1;
//         count = count < 0 ? 0 : count;
//         if(count == 0){
//             $(this).addClass("quantity-buttons__button-minus_inactive");
//         };
//         $input.val(count);
//         $input.change();
//         return false;
//     });
        
//     $('.quantity-buttons__button-plus').click(function () {
//         $(this).prevAll(".quantity-buttons__button-minus").removeClass('quantity-buttons__button-minus_inactive');
//         var $input = $(this).parent().find('.quantity-buttons__input');
//         $input.val(parseInt($input.val()) + 1);
//         $input.change();
//         return false;
//     });

// });