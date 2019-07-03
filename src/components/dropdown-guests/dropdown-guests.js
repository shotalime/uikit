jQuery(function($) {

   
    
    $(".dropdown-guests").ready(function() {
        
        var value = 0;
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
            var aString = "";
            var bString = "";
            

            adults = parseInt(adults);
            children = parseInt(children);
            babies = parseInt(babies);
            
            value = adults + children;

            if(value.toString().substr(-1) == 1 && value != 11) {
                aString = " гость";
            } else if(value > 1 && value < 5) {
                aString = " гостя";
            } else {
                aString = " гостей";
            };

            if(babies.toString().substr(-1) == 1 && babies != 11) {
                bString =", " + babies + " младенец";
            } else if(babies > 1 && babies < 5) {
                bString =", " + babies + " младенца";
            } else if(babies == 0) {
                bString = "";
            } else {
                bString =", " + babies + " младенцев";
            };

            $(this).parents('.dropdown-guests').find('.dropdown-guests__input').val(value + aString + bString); 
            
            
                
        });
        
        $(this).find(".dropdown-guests__clear").on('click', function() {
            
            $(this).parents('.dropdown-guests').find(".quantity-buttons__input").val(0);
            $(this).parents('.dropdown-guests').find('.dropdown-guests__input').val("0 гостей");
            return adults = 0, children = 0, babies = 0;
        });
        
        
        $(".dropdown-guests__button").on('click', function() {
            $(this).nextAll(".dropdown-guests__wrap").toggleClass( "dropdown-guests__wrap-visible" );
            $(this).toggleClass( "dropdown-guests__button-visible" );
            
        });
    
        $(".dropdown-guests__accept").on('click', function() {
            $(this).parents(".dropdown-guests__wrap").removeClass( "dropdown-guests__wrap-visible" );
            $(this).parents(".dropdown-guests__wrap").prev('.dropdown-guests__button').removeClass( "dropdown-guests__button-visible" );
        });

        $(".dropdown-guests__clear").css('visibility', 'hidden');
        $(this).find('.quantity-buttons__button').on('click', function() {
            $(".dropdown-guests__clear").css('visibility', 'visible');
        });

        
    });

    $(document).click(function(event) {
        if ($(event.target).closest(".dropdown-guests").length) return;
        $(".dropdown-guests__button").removeClass('dropdown-guests__button-visible')
        $(".dropdown-guests__wrap").removeClass('dropdown-guests__wrap-visible')
        event.stopPropagation();
      });
});

