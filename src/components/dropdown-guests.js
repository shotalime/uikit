jQuery(function($) {
    $(".dropdown-guests").on("click", function() {
        var adults = 0;
        var children = 0;
        var babies = 0;

    
        $(this).find(".dropdown-guests__adults .quantity-buttons__input").on('change', function() {
            adults = $(this).val();
            return adults;
        });
    
        $(this).find(".dropdown-guests__children .quantity-buttons__input").on('change', function() {
            children = $(this).val();
            return children;
        });
    
        $(this).find(".dropdown-guests__babies .quantity-buttons__input").on('change', function() {
            babies = $(this).val();
            return babies;
        });
    
        $(this).find(".quantity-buttons__button").on('click', function() {
            var string = "";
            var value = 0;

            adults = parseInt(adults);
            children = parseInt(children);
            babies = parseInt(babies);
            
            value = adults + children + babies;

            if(value.toString().substr(-1) == 1 && value != 11) {
                string = " гость";
            } else if(value > 1 && value < 5) {
                string = " гостя";
            } else {
                string = " гостей";
            };

            $(this).parents('.dropdown-guests').find('.dropdown-guests__input').val(value + string);         
        });
    
        
    });
        $(".dropdown-guests__button").on('click', function() {
            $(this).nextAll(".dropdown-guests__wrap").toggleClass( "dropdown-guests__wrap-visible" );
            $(this).toggleClass( "dropdown-guests__button-visible" );
        });

});

