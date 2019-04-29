$(document).ready(function() {

    $('.dropdown-rooms__button-minus').click(function () {
        var $input = $(this).parent().find('.dropdown-rooms__input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        if(count == 0){
            $(this).addClass("dropdown-rooms__button-minus_inactive");
        } else {
            $(this).removeClass("dropdown-rooms__button-minus_inactive");
        };
        $input.val(count);
        $input.change();
        return false;
    });

    $('.dropdown-rooms__button-plus').click(function () {
        var $input = $(this).parent().find('.dropdown-rooms__input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
//word declension
    $('.dropdown-rooms__bedrooms-value .dropdown-rooms__input').on('change', function(){
        $value = $(this).val();
        if($value > 0) {
            $('.dropdown-rooms__bedrooms-value .dropdown-rooms__button').removeClass( "dropdown-rooms__button-minus_inactive" );
        };
        if ($value.substr(-1) == 1 && $value != 11) {
            $('.dropdown-rooms__bedrooms-result').text($value + " спальня");   
        } else if (($value.substr(-1) == 2 || $value.substr(-1) == 3 || $value.substr(-1) == 4) && ($value < 10 || $value > 20 )) {
            $('.dropdown-rooms__bedrooms-result').text($value + " спальни");
        } else {
            $('.dropdown-rooms__bedrooms-result').text($value + " спален");
        }
    });
//word declension
    $('.dropdown-rooms__beds-value .dropdown-rooms__input').on('change', function(){
        $value = $(this).val();
        if($value > 0) {
            $('.dropdown-rooms__beds-value .dropdown-rooms__button').removeClass( "dropdown-rooms__button-minus_inactive" );
        };
        if ($value.substr(-1) == 1 && $value != 11) {
            $('.dropdown-rooms__beds-result').text(", " + $value + " кровать...");   
        } else if (($value.substr(-1) == 2 || $value.substr(-1) == 3 || $value.substr(-1) == 4) && ($value < 10 || $value > 20 )) {
            $('.dropdown-rooms__beds-result').text(", " + $value + " кровати...");
        } else {
            $('.dropdown-rooms__beds-result').text(", " + $value + " кроватей...");
        }
    });
// active/inactive minus button
    $('.dropdown-rooms__bathrooms-value .dropdown-rooms__input').on('change', function(){
        $value = $(this).val();
        if($value > 0) {
            $('.dropdown-rooms__bathrooms-value .dropdown-rooms__button').removeClass( "dropdown-rooms__button-minus_inactive" );
        };
    });
 // click outside block
    $(document).mouseup(function (e) {
        var $value = ".dropdown-rooms__menu";
        if(!$($value).is(e.target) && $($value).has(e.target).length === 0) {
            $($value).removeClass( "dropdown-rooms__menu_visible" );
        };

        $(".dropdown-rooms__result").on('click', function(){
            $($value).toggleClass( "dropdown-rooms__menu_visible" );
        });
        
    });
 });
