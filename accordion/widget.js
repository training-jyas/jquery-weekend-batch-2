var Accordion = function () {
    $this = this;
    $this.find('.panel-heading').click(function (event) {
        $this.find('.panel-collapse').slideUp();
        slideDown($(this).next());
    });

    function slideDown(elem) {
        $(elem).slideDown();
    }
}

// here the plugin name is accordion and it can be any name.
// whenever one calls this accordion plugin Accordion is called
$.fn.accordion = Accordion;

$(document).ready(function () {
    // here we are calling the plugin
    $('.accordion').accordion();
});