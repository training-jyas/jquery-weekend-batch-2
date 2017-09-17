$(document).ready(function(){
    // change the parent backgroung to cyan
    $('.parent').css('background-color', 'cyan');

    // change all the grand child of first child to background as green
    $('.parent .child:first-child .grandchild').css('background-color', 'green');

    // change the text for the 4th grandchild of first child
    $('.parent .child:first-child .grandchild:eq(3)').text('abraka dabra');

    // border of 2px to grandchild 6
    $('.parent .child:nth-child(3) .grandchild').css('border', '2px solid black');

    // lets traverse from GC - 6 to GC - 3. then change the text color

    // 1 way
    var $gc6 = $('.parent .child:nth-child(3) .grandchild').first();
    var $sibling_first = $gc6.parent().siblings().first();
    $sibling_first.find('.grandchild:nth-child(3)').css('color', 'black');

    // 2 way
    $gc6.parent().parent().find('.child:first-child').find('.grandchild:nth-child(3)').css('color', 'blue');

    // you are at child-2. change the background color of all grandchilds in child-3
    // 1 way
    $c2 = $('.parent > .child:eq(1)');
    $gc_of_c3 = $c2.next().find('.grandchild');
    $gc_of_c3.css('background', 'orange');
    // 2 way
    $gc_of_c3 = $c2.next().children();
    $gc_of_c3.css('background', 'cyan');

    // closest
    var $gc3 = $('.parent > .child:eq(0) > .grandchild:eq(2)');
    console.log('closest parent with class random', $gc3.closest('.random'));
});