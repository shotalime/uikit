jQuery(function($) {

    $('.datepicker').datepicker({
        monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
        firstDay: 1,
        dayNames: [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота" ],
        dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
        dateFormat: "dd.mm.yy",
        range: 'period', 
        numberOfMonths: 1,
        showOtherMonths: true,
        selectOtherMonths: true,
        // showButtonPanel: true,
        onSelect: function(dateText, inst, extensionRange) {

          $('[name=startDate]').val(extensionRange.startDateText);
          $('[name=endDate]').val(extensionRange.endDateText);
        }
        
      });
      
      
      
      $('.datepicker').datepicker('setDate', ['+3d', '+7d']);
    
      $('[name=datepicker_accept]').on('click', function(){

        $('.datepicker__wrap').addClass('datepicker__wrap-hide');

      });

      $('[name=datepicker_clear]').on('click', function(){

        $( '.datepicker' ).datepicker('setDate', [null, null]);
        $('[name=startDate]').val("ДД.ММ.ГГ");
        $('[name=endDate]').val("ДД.ММ.ГГ");
        
      });

      var extensionRange = $('.datepicker').datepicker('widget').data('datepickerExtensionRange');
      if(extensionRange.startDateText) $('[name=startDate]').val(extensionRange.startDateText);
      if(extensionRange.endDateText) $('[name=endDate]').val(extensionRange.endDateText);

});