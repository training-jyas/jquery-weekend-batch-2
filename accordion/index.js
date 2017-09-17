$(document).ready(function(){
    // get all the elements that have a accordion class
    var $accordion = $('.accordion');
    $accordion.find('.panel-collapse').slideUp();
    // ge the panel headings
    var $panel_headings = $accordion.find('.panel-heading');
    $panel_headings.click(function(event){
        $accordion.find('.panel-collapse').slideUp();
        $(this).next().slideDown();
    });
});