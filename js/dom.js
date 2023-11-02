//Dom: Document Object Model

// Examine the document object

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);

// console.log(document.forms);
// console.log(document.links);


// GETELEMENTBYID
// console.log(document.getElementById('header-title'))
var headerTitle = document.getElementById('header-title');
var headerTitle = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'hello';
// headerTitle.innerHTML = 'Goodbye';


// headerTitle.innerHTML = '<h3>Hello</h3>';

// to change style in js

// headerTitle.style.borderBottom ='3px solid orange';


// GETELEMENTBYCLASSNAME

// let item = document.getElementsByClassName('list-group-item');
// console.log(item);
// console.log(item[1]);
// item[1].textContent = "Hello 2";
// item[1].style.fontWeight = "bold";
// item[1].style.backgroundColor = "orange"


// // to loop
//  // gives error
// // item.style.backgroundColor = "gray";

// for(var i = 0; i < item.length; i++){
// item[i].style.backgroundColor = "gray";
// }

//GETELEMENTBYTAGNAME

// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "orange"


// // to loop
//  // gives error
// // li.style.backgroundColor = "gray";

// for(var i = 0; i < li.length; i++){
// li[i].style.backgroundColor = "gray";
// }


//QUERYSELECTOR

let header = document.querySelector('#main-header');
header.style.borderBottom = '4px solid orange';

// to change the text inside the input filed
let input = document.querySelector('input');
input.value = "Hello World";

// to change the text inside the button
let submit = document.querySelector('input[type="submit"]');
submit.value = "send";
submit.style.backgroundColor = 'orange'

// to select the first input
let item = document.querySelector('.list-group-item');
item.style.color = "orange";

// to select the last input
let lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = "orange";

// to select the second input
// let secondItem = document.querySelector('.list-group-item:Int-child(2)');
// lastItem.style.color = "orange";

// QUERYSELECTORALL

let titles = document.querySelectorAll('.title');
titles[0].textContent = 'Hello List'
console.log(titles);

let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');
for (let i = 0; i < odd.length; i++) {
    odd[i].style.border = '1px solid orange';
    even[i].style.border = '1px solid green';
}


// TRAVERSING THE DOM
let itemList = document.querySelector('#Items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'whitesmoke';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'whitesmoke';
console.log(itemList.parentElement.parentElement.parentElement);


// childNode
// console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'orange'

// firstChild
// kind of useless
// console.log(itemList.firstChild);

// firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1' // we also have the lastElementChild

// nextSiblings

// console.log(itemList.nextSibling);

// nextElementSibing
// console.log(itemList.nextElementSibling);

// previousSibling

console.log(itemList.previousSibling);
// previousElementSiblings
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'orange';

// createElement

let newDiv = document.createElement('div');

// add class
newDiv.className = 'hello';

// add id
newDiv.id = 'hello1'

// add attribute
newDiv.setAttribute('title', 'hello div');

//create a text node
let newDivText = document.createTextNode('Hello World');

// add text to div
newDiv.appendChild(newDivText);


let container = document.querySelector('header .container');
let h1 = document.querySelector('head h1');

newDiv.style.fontSize = '1rem'
newDiv.style.fontWeight = 'bold'
container.insertBefore(newDiv, h1);

console.log(newDiv);









