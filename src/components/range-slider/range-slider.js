jQuery(function($) {
    var minValue = $(".range-slider__min-value").val();
    var maxValue = $(".range-slider__max-value").val();
    var currency = $(".range-slider").data("currency");

    $(".range-slider__value").html(0 + currency + " - " + numberFormat(maxValue, " ") + currency)

    $(".range-slider__slider").slider({
        min: 0,
        max: maxValue ,
        values: [minValue,maxValue],
        range: true,
        stop: function(event, ui) {
            $(".range-slider__min-value").val($(this).slider("values",0));
            $(".range-slider__max-value").val($(this).slider("values",1));
            
            var a = numberFormat($(".range-slider__min-value").val(), " ")
            var b = numberFormat($(".range-slider__max-value").val(), " ")

            $(".range-slider__value").html(a + currency + " - " + b + currency)
        },
        slide: function(event, ui){
            $(".range-slider__min-value").val($(this).slider("values",0));
            $(".range-slider__max-value").val($(this).slider("values",1));

            a = numberFormat($(".range-slider__min-value").val(), " ")
            b = numberFormat($(".range-slider__max-value").val(), " ")

            $(".range-slider__value").html(a + currency + " - " + b + currency)
        }
    });
    // $(".range-slider__min-value").change(function(){
    //     var value1=$(".range-slider__min-value").val();
    //     var value2=$(".range-slider__max-value").val();
    
    //     if(parseInt(value1) > parseInt(value2)){
    //         value1 = value2;
    //         $(".range-slider__min-value").val(value1);
    //     }
    //     $(".range-slider__slider").slider("values",0,value1);	
    // });
    
        
    // $(".range-slider__max-value").change(function(){
    //     var value1=$(".range-slider__min-value").val();
    //     var value2=$(".range-slider__max-value").val();
        
    //     if (value2 > 1000) { value2 = 1000; $(".range-slider__max-value").val(1000)}
    
    //     if(parseInt(value1) > parseInt(value2)){
    //         value2 = value1;
    //         $(".range-slider__max-value").val(value2);
    //     }
    //     $(".range-slider__slider").slider("values",1,value2);
        
    // });
    

 });

 function numberFormat(_number, _sep) {
    _number = typeof _number != "undefined" && _number > 0 ? _number : "";
    _number = _number.replace(new RegExp("^(\\d{" + (_number.length%3? _number.length%3:0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim();
    if(typeof _sep != "undefined" && _sep != " ") {
        _number = _number.replace(/\s/g, _sep);
    }
    return _number;
}