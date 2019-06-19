jQuery(function($) {

    $('.room-reservation .datepicker__wrap').addClass('datepicker__wrap-hide');


    $('.room-reservation .date-dropdown').on('click', function(){

        $('.room-reservation .datepicker__wrap').toggleClass('datepicker__wrap-hide');

    });
    // временно закоментировано, для проверки ПП
    // $(document).click(function(event) {
    //     if ($(event.target).closest(".datepicker__wrap").length) return;
    //     if ($(event.target).closest(".room-selection .date-dropdown").length) return;
    //     $(".datepicker__wrap").addClass('datepicker__wrap-hide')
    //     event.stopPropagation();
    //   });
    
});