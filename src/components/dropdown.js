$(document).ready(function() {
    $('.dropdown__button-minus').click(function () {
        var $input = $(this).parent().find('.dropdown__input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
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

    $('.dropdown__bedrooms-value .dropdown__input').on('change', function(){
        $value = $(this).val();
        if ($value.substr(-1) == 1 && $value != 11) {
            $('.dropdown__bedrooms-result').text($value + " спальня");   
        } else if ($value == 5) {
            $('.dropdown__bedrooms-result').text($value + " спальни");
        } else {
            $('.dropdown__bedrooms-result').text($value + " спален");
        }
        
    });

    $('.dropdown__beds-value .dropdown__input').on('change', function(){
        $('.dropdown__beds-result').text(", " + $(this).val() + " кровати...");
    });

    // $('.dropdown__bathrooms-value .dropdown__input').on('change', function(){
    //     $('.dropdown__bathrooms-result').text(", " + $(this).val() + " ванных");
    // });
});


