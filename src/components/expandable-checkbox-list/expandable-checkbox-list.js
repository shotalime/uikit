jQuery(function($) {
    $(".expandable-checkbox-list").find(".checkbox-buttons").hide();

    $(".expandable-checkbox-list__button").on('click', function() {
        $(".expandable-checkbox-list").find(".checkbox-buttons").toggle();
        var value= $(".expandable-checkbox-list__arrow").text();
        if (value == "keyboard_arrow_down") {
            $(".expandable-checkbox-list__arrow").text("keyboard_arrow_up");
        } else {
            $(".expandable-checkbox-list__arrow").text("keyboard_arrow_down");
        };
    });
});