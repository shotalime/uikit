jQuery(function($) {

    $('.room-selection .datepicker__wrap').addClass('datepicker__wrap-hide');


    $('.room-selection .date-dropdown').on('click', function(){

        $('.room-selection .datepicker__wrap').toggleClass('datepicker__wrap-hide');

    });
    // временно закоментировано, для проверки ПП
    // $(document).click(function(event) {
    //     if ($(event.target).closest(".datepicker__wrap").length) return;
    //     if ($(event.target).closest(".room-selection .date-dropdown").length) return;
    //     $(".datepicker__wrap").addClass('datepicker__wrap-hide')
    //     event.stopPropagation();
    //   });
    
});