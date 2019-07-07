jQuery(function($) {

    var button = $('.search-room__filter-item').find('.filter-date-dropdown__input-arrow');
    var datepickerSearch = $('.search-room__filter-item-datepicker');


    $(button).on('click', function(){
        
        $(datepickerSearch).toggle();

    });
});