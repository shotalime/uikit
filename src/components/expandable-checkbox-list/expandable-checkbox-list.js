jQuery(function($) {
    var list = $(".expandable-checkbox-list")
    $(list).find(".checkbox-buttons").hide();

    $(list).find(".expandable-checkbox-list__button").on('click', function() {

        $(this).parent(list).find(".checkbox-buttons").toggle();

        var value= $(this).find(".expandable-checkbox-list__arrow").text();

        if (value == "keyboard_arrow_down") {
            $(this).find(".expandable-checkbox-list__arrow").text("keyboard_arrow_up");
        } else {
            $(this).find(".expandable-checkbox-list__arrow").text("keyboard_arrow_down");
            
        };
    });
});