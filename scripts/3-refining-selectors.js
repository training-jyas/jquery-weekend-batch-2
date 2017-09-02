$(document).ready(function () {
    var $lis = $('li');

    // not api
    var $lisWithNoClass = $lis.not('.list-item');
    console.log($lis);
    console.log($lisWithNoClass);

    // children
    var $parent = $('li:eq(3)')
    console.log($parent);
    var $children = $parent.children();
    console.log('children -', $children);
    var $childrenOfUl = $($children[0]).children().splice(0, 2);
    console.log($childrenOfUl);

    // how do i get the list item with the text 'List 3-3-2'
    // i get the 3rd 'ul'
    // then i find all the children of it
    // then i get the 2nd child out of the list
    var listItem = $('ul:eq(2) > li')[1]; // this is one way
    var ul2ndItem = $('ul')[2];
    var listItems = $(ul2ndItem).children();
    var listItem = listItems[1];

    // find
    console.time('time1');
    var $liWithRandom = $('ul:eq(0) li[random=hello]:eq(1)');
    console.timeEnd('time1');
    console.time('time2');
    var $liWithRandom2 = $('ul').first().find('li[random=hello]').eq(1);
    console.timeEnd('time2');
    
    console.log($liWithRandom);
    console.log($liWithRandom2);

    // first
    // last

    // filter
    var $lis = $('li');
    console.log('li with list-item class');
    console.log($lis.filter('.list-item'));

    // closest
    // i have a element which has a class called .xyz, i want to get the closest parent with class .abc
    var closestParent = $('.abc').first().closest('.xyz');

    var $grandLi = $('.grand-list-item');
    console.log('closest parent having attribute random');
    console.log($grandLi.first().closest('[random]'));
});