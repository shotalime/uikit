$(document).ready(function() {
    $(".dropdown-guests").one("change", function() {
        var adults = 0;
        var children = 0;
        var babies = 0;

    
        $(this).find(".dropdown-guests__adults .quantity-buttons__input").on('change', function(){
            adults = $(this).val();
            return adults;
        });
    
        $(this).find(".dropdown-guests__children .quantity-buttons__input").on('change', function(){
            children = $(this).val();
            return children;
        });
    
        $(this).find(".dropdown-guests__babies .quantity-buttons__input").on('change', function(){
            babies = $(this).val();
            return babies;
        });
    
        $(this).find(".quantity-buttons__button").on('click', function(){
            var value = adults + children + babies;
            $(this).parents('.dropdown-guests').find('.dropdown-guests__input').val(value);
            console.log(adults, children, babies);
            
        });
    
        $(this).find(".dropdown-guests__button").on('click', function(){
            $(this).nextAll(".dropdown-guests__wrap").toggleClass( "dropdown-guests__wrap-hide" );
        });
    });
   
    
    // $(document).mouseup(function (e) {
    //     var $value = ".dropdown-guests__wrap";
    //     if(!$($value).is(e.target) && $($value).has(e.target).length === 0) {
    //         $($value).addClass( "dropdown-guests__wrap-hide" );
    //     };
    // });
});

