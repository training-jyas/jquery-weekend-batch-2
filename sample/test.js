var divElems = document.getElementsByTagName('div');
console.log('div elements =', divElems);

var divElem2 = divElems[1];
divElem2.innerText = 'Jquery demo 2 changed to 3'

console.log('jquery obj', $);
console.log('jquery obj', jQuery);

var divElem1 = $('div')[1];
$(divElem1).text('jquery demo 1 changed to 4');

// the above code can also be called like this 
var divElem1 = $('div').text('jquery demo 1 changed to 4'); // this takes all the div elements and changes the inner text

var divElem1 = $('div').first().text('jquery demo 1 changed to 5');


