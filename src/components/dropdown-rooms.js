jQuery(function($) {

   
    
    $(".dropdown-rooms").ready(function() {
        
       
        var bedrooms = 0;
        var beds = 0;
        var bathrooms = 0;
       
    
        $(this).find(".dropdown-rooms__bedrooms .quantity-buttons__input").on('change', function() {
         bedrooms = $(this).val();
            return bedrooms;
        });
    
        $(this).find(".dropdown-rooms__beds .quantity-buttons__input").on('change', function() {
         beds = $(this).val();
            return beds;
        });
    
        $(this).find(".dropdown-rooms__bathrooms .quantity-buttons__input").on('change', function() {
            bathrooms = $(this).val();
            return bathrooms;
        });
    
        $(this).find(".quantity-buttons__button").on('click', function() {
            
            var value = bedrooms + wordDeclension(bedrooms, [" спальня", " спальни", " спален"]) + ", " +
            beds + wordDeclension(beds, [" кровать", " кровати", "  кроватей"])  + ", " +
            bathrooms + wordDeclension(bathrooms, [" ванна", " ванны", "  ванных"]);

            $(this).parents('.dropdown-rooms').find('.dropdown-rooms__input').val(value); 
                                      
        });
                             
        $(".dropdown-rooms__button").on('click', function() {
            $(this).nextAll(".dropdown-rooms__wrap").toggleClass( "dropdown-rooms__wrap-visible" );
            $(this).toggleClass( "dropdown-rooms__button-visible" );
            
        });
    
        
    });
});



function wordDeclension(n, text_forms) {  
    n = Math.abs(n) % 100; var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
}

