jQuery(function($) {

    $('.room-selection .datepicker__wrap').addClass('datepicker__wrap-hide');


    $('.room-selection .date-dropdown').on('click', function(){

        $('.room-selection .datepicker__wrap').toggleClass('datepicker__wrap-hide');

    });
});