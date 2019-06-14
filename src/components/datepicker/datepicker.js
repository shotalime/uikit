jQuery(function($) {

    $('#date_range').datepicker({
        monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
        firstDay: 1,
        dayNames: [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота" ],
        dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
        range: 'period', 
        numberOfMonths: 1,
        showOtherMonths: true,
        selectOtherMonths: true,
        onSelect: function(dateText, inst, extensionRange) {

          $('[name=startDate]').val(extensionRange.startDateText);
          $('[name=endDate]').val(extensionRange.endDateText);
        }
      });
    
      $('#date_range').datepicker('setDate', ['+4d', '+8d']);
    

      var extensionRange = $('#date_range').datepicker('widget').data('datepickerExtensionRange');
      if(extensionRange.startDateText) $('[name=startDate]').val(extensionRange.startDateText);
      if(extensionRange.endDateText) $('[name=endDate]').val(extensionRange.endDateText);

});