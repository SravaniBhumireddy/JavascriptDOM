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
//console.log(document.getElementsByClassName('li'));
/*
const items= document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

const ul= document.querySelector('.items');

//ul.remove();// deletes entire array
//ul.lastElementChild.remove();//deletes the last element in array

ul.firstElementChild.textContent = 'Hello';//changes the first element item 1 as Hello
ul.children[1].innerText='brad';//It changes the value item 2 to brad
ul.lastElementChild.innerHTML='<h1>World</h1>';//it changes values item 3 to Hello
*/

const btn=document.querySelector('.btn');
//btn.style.background='red';//It changes the color of the btn from black to red

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
});