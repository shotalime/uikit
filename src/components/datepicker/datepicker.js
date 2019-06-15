jQuery(function($) {

    $('#date_range').datepicker({
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
      
      
      
      $('#date_range').datepicker('setDate', ['+4d', '+8d']);
    
      $('[name=accept]').on('click', function(){

        $('.datepicker__wrap').addClass('datepicker__wrap-hide');

      });

      $('[name=clear]').on('click', function(){

        $( '#date_range' ).datepicker('setDate', [null, null]);
        $('[name=startDate]').val("ДД.ММ.ГГ");
        $('[name=endDate]').val("ДД.ММ.ГГ");
        
      });

      var extensionRange = $('#date_range').datepicker('widget').data('datepickerExtensionRange');
      if(extensionRange.startDateText) $('[name=startDate]').val(extensionRange.startDateText);
      if(extensionRange.endDateText) $('[name=endDate]').val(extensionRange.endDateText);

});