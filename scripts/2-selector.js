$(document).ready(function () {
    // id selector
    var $listitem1 = $('#list-item');
    $listitem1.css('background', 'yellow');

    // class selector
    var $listItems = jQuery('.list-item');
    $listItems.css('font-style', 'italic').css('background', 'cyan');

    // class selector using native javascript
    var elementsWithClass = document.querySelectorAll('.list-item');
    console.log('native class selection -', elementsWithClass);
    elementsWithClass.forEach(function(element) {
        element.style.fontWeight = 'bold';
    });

    // tag selector
    var $liAll = $('li');
    $liAll.eq(3).css('list-style', 'none');

    // attribute selector
    var $listItems2 = $('[random]');
    $listItems2.css('background-color', 'red');

    // attribute selector with some value
    var $listItems2 = $('[random=hello2]');
    $listItems2.css('background-color', 'green');

    // nth type selector
    var $fifthLi = $('li:eq(4)');
    // $fifthLi.hide(); // uncomment it to see it

    // task : to get the first level list items from the 2nd ul element
    // Use '>' symbol to get the first level child elements
    var ulElem2nd = $('ul:eq(1)');
    var firstLevelLis = $('ul:eq(1) > li');

    // :even selector
    $Evenlis = $('li:odd');
    $Evenlis.css('font-size', '40px');

    // selectors with spaces
    // for this it means all lis which has list-item class
    var $liWithClass = $('li.list-item');
    // this means all children of li that has a list-item class
    var $childrenOfLiWithClass = $('li .list-item');
    console.log($liWithClass, $childrenOfLiWithClass);

    // get all the lis having either class list-item or list-item1
    // you have to use a ',' here to achieve this
    var allLis = $('li.list-item, li.list-item1');

    // for the rest go to this link 
    // http://api.jquery.com/category/selectors/ 
    // https://developer.mozilla.org/en-US/docs/Web/API/Document
});