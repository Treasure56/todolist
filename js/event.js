// events

// let Button = document
//   .getElementById("btn")
//   .addEventListener("click", buttonClick);

// function buttonClick(e) {
//   // console.log('Button clicked');

//   console.log(e);
//   console.log(e.target);
//   // to get the id
//   console.log(e.target.id);
//   // to get the class
//   console.log(e.target.className);
//   console.log(e.target.classList);

let output = document.getElementById("output");
//   output.innerHTML = "<h3>" + e.target.id + "</h3>";

//   console.log(e.type);

//   console.log(e.clientX);
//   console.log(e.clientY);

//   console.log(e.offsetY)

//   console.log(e.ctrlKey);

//   console.log(e.shiftKey);

// }

// document.getElementById("header-title").textContent = "changed";
// document.querySelector("#main").style.backgroundColor = "wheat";

let btn = document.getElementById("btn");
// button.addEventListener('click', runEvent);
// doubleclick
// btn.addEventListener("dbclick", runEvent);
// btn.addEventListener("mousedown", runEvent);
// btn.addEventListener("mouseup", runEvent);

// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type);

// }

let button = document.getElementById("btn");
let box = document.getElementById("box");

let itemInput = document.querySelector('input[type="text"');
let form = document.querySelector('form');

let select = document.querySelector('select');

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// mouse event
box.addEventListener("mousemove", runEvent);

// keyboard event
// itemInput.addEventListener('keydown', runEvent);'
// itemInput.addEventListener('keyup', runEvent);
itemInput.addEventListener('keypress', runEvent);

//events for text input
// itemInput.addEventListener('blur', runEvent);
// itemInput.addEventListener('focus', runEvent);
itemInput.addEventListener('cut', runEvent);
itemInput.addEventListener('paste', runEvent);
itemInput.addEventListener('input', runEvent);


select.addEventListener('change', runEvent);

form.addEventListener('submit', runEvent);


function runEvent(e){
    console.log('EVENT TYPE: '+e.type);

    output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

    box.style.backgroundColor = "rgb("+e.offsetX+", "
    +e.offsetY+", 40)" // or use document.body to change the background color


    //keyboard event
    console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

    // document.body.style.display = 'none';

    e.preventDefault();





}

