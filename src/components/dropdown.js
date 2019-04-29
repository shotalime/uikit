$(document).ready(function() {

    $('.dropdown__button-minus').click(function () {
        var $input = $(this).parent().find('.dropdown__input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        if(count == 0){
            $(this).addClass("dropdown__button-minus_inactive");
        } else {
            $(this).removeClass("dropdown__button-minus_inactive");
        };
        $input.val(count);
        $input.change();
        return false;
    });

    $('.dropdown__button-plus').click(function () {
        var $input = $(this).parent().find('.dropdown__input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
//word declension
    $('.dropdown__bedrooms-value .dropdown__input').on('change', function(){
        $value = $(this).val();
        if($value > 0) {
            $('.dropdown__bedrooms-value .dropdown__button').removeClass( "dropdown__button-minus_inactive" );
        };
        if ($value.substr(-1) == 1 && $value != 11) {
            $('.dropdown__bedrooms-result').text($value + " спальня");   
        } else if (($value.substr(-1) == 2 || $value.substr(-1) == 3 || $value.substr(-1) == 4) && ($value < 10 || $value > 20 )) {
            $('.dropdown__bedrooms-result').text($value + " спальни");
        } else {
            $('.dropdown__bedrooms-result').text($value + " спален");
        }
    });
//word declension
    $('.dropdown__beds-value .dropdown__input').on('change', function(){
        $value = $(this).val();
        if($value > 0) {
            $('.dropdown__beds-value .dropdown__button').removeClass( "dropdown__button-minus_inactive" );
        };
        if ($value.substr(-1) == 1 && $value != 11) {
            $('.dropdown__beds-result').text(", " + $value + " кровать...");   
        } else if (($value.substr(-1) == 2 || $value.substr(-1) == 3 || $value.substr(-1) == 4) && ($value < 10 || $value > 20 )) {
            $('.dropdown__beds-result').text(", " + $value + " кровати...");
        } else {
            $('.dropdown__beds-result').text(", " + $value + " кроватей...");
        }
    });
// active/inactive minus button
    $('.dropdown__bathrooms-value .dropdown__input').on('change', function(){
        $value = $(this).val();
        if($value > 0) {
            $('.dropdown__bathrooms-value .dropdown__button').removeClass( "dropdown__button-minus_inactive" );
        };
    });
 // click outside block
    $(document).mouseup(function (e) {
        var $value = ".dropdown__menu";
        if(!$($value).is(e.target) && $($value).has(e.target).length === 0) {
            $($value).removeClass( "dropdown__menu_visible" );
        };

        $(".dropdown__result").on('click', function(){
            $($value).toggleClass( "dropdown__menu_visible" );
        });
    });
 });