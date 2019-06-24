jQuery(function($) {
    // Показать/спрятать
    $('.room-reservation .datepicker__wrap').addClass('datepicker__wrap-hide');
    

    $('.room-reservation .date-dropdown').on('click', function(){

        $('.room-reservation .datepicker__wrap').toggleClass('datepicker__wrap-hide');

    });

    // Скрытие календаря по клику
    // $(document).click(function(event) {
    //     if ($(event.target).closest(".datepicker__wrap").length) return;
    //     if ($(event.target).closest(".room-reservation__date .date-dropdown").length) return;
    //     $(".datepicker__wrap").addClass('datepicker__wrap-hide')
    //     event.stopPropagation();
    //   });
    

    //Расчет количества дней и стоимости

    var startDate = $('.date-dropdown').find('[name = startDate]').val();
    var endDate = $('.date-dropdown').find('[name = endDate]').val();
    var daysCount = count_diff(endDate, startDate);
    var cost = parseInt($('.room-reservation__number-cost').text());
    var discount = $('.room-reservation__item-wrap').find('.room-reservation__service-charge-discount').text();
    var serviceCharge = $('.room-reservation__item-wrap').find('.room-reservation__service-charge-val').text();
    var adServiceCharge = $('.room-reservation__ad-service').find('.room-reservation__ad-service-charge-val').text();
      
    //Запись значений по умолчанию  
    $('.room-reservation__header').find('.room-reservation__number-cost').text(cost.toLocaleString() + '₽');
    $('.room-reservation__item-wrap').find('.room-reservation__service-charge-discount').text(parseInt(discount).toLocaleString() + '₽');

    calculationСostItem(cost, daysCount);
    calculationСostTotal(cost, daysCount);
    calculationInTotalVal(cost, daysCount, discount, serviceCharge, adServiceCharge);

    $('.room-reservation').find('[name = accept]').on('click', function() {

        //Расчет количества дней

        startDate = $('.date-dropdown').find('[name = startDate]').val();
        endDate = $('.date-dropdown').find('[name = endDate]').val();
        daysCount = count_diff(endDate, startDate);

        //Расчет стоимости

        calculationСostItem(cost, daysCount);
        calculationСostTotal(cost, daysCount);
        calculationInTotalVal(cost, daysCount, discount, serviceCharge, adServiceCharge);
        
    });

    //Расчет итоговой стоимости

    function calculationInTotalVal(cost, daysCount, discount, serviceCharge, adServiceCharge) {
        var inTotalVal =  parseInt(cost) * parseInt(daysCount) - parseInt(discount) + parseInt(serviceCharge) + parseInt(adServiceCharge);
        return $('.room-reservation__in-total-val').text(inTotalVal.toLocaleString() + '₽');         
        };

    //Расчет стоимости номера за все дни

    function calculationСostTotal(cost, daysCount) {
        return $('.room-reservation__cost-total').text((parseInt(cost) * parseInt(daysCount)).toLocaleString() + '₽');
        };
        
    //Запись количества дней и стоимости номера

    function calculationСostItem(cost, daysCount) {
        return $('.room-reservation__cost-item').text(cost.toLocaleString() + '₽ x ' + daysCount + wordDeclension(daysCount, [" Сутки", " Суток", " Суток"]))
        };  


    function count_diff(d1, d2) {
        var date_1 = new Date(parseInt(d1.substr(6, 4), 10), parseInt(d1.substr(3, 2), 10), parseInt(d1.substr(0, 2), 10)); 
        var date_2 = new Date(parseInt(d2.substr(6, 4), 10), parseInt(d2.substr(3, 2), 10), parseInt(d2.substr(0, 2), 10)); 
        return ((date_1-date_2)/86400000);
        };


    
    function wordDeclension(n, text_forms) {  
        n = Math.abs(n) % 100; var n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }
        return text_forms[2];
    }

});    
    
