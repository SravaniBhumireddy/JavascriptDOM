/*
console.log(window);
alert(1);
*/

//single element 
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('.container'));//It shows the whole section form
//console.log(document.querySelector('h1'));//It shows what is in h1 tag


//multiple elements

//console.log(document.querySelectorAll('.item'));//NodeList(3) [li.item, li.item, li.item]
//console.log(document.getElementsByClassName('item'));//HTMLCollection(3) [li.item, li.item, li.item]
console.log(document.getElementsByClassName('li'));

const items= document.querySelectorAll('.item');

items.forEach((item) => console.log(item));
