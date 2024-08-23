const btn = document.querySelector('.btnDark');
const body = document.querySelector('body')
btn.addEventListener('click', () => {
    // body.style.backgroundColor = 'black';
    // body.style.color = 'white';
    body.classList.toggle('newp-class')
})
let h1WithId = document.getElementById("h1el")
console.log(h1WithId);

let h1WithClass = document.getElementsByClassName("h1el")
console.log(h1WithClass);

// Query selector
let query = document.querySelector('.divQuery p')
console.log(query);
let query2 = document.querySelectorAll('.divQuery p')
console.log(query2);

// CREATING ELEMENTS IN JS
let sectionMain = document.createElement('section')
let h4 = document.createElement('h4')
sectionMain.append(h4)
h4.textContent = "This ia a h4 element created by javascript";
sectionMain.id = 'hello'
sectionMain.classList = 'hello2'
console.log(h4);
console.log(sectionMain);

// DOM MANIPULATION CONTD
const todoItems = [
    "Go to class",
    "Watch some tutorials",
    "Do some coding challenges",
    "repeat step one",
    "another todo"
];

todoItems.forEach((text) => {
    let ptag = document.createElement('p');
    ptag.textContent = text;
    console.log(text);
    sectionMain.append(ptag);
})

document.body.append(sectionMain);
const dom = document.querySelector('.dom');
dom.insertAdjacentElement("beforeend", sectionMain);

// REMOVING ELEMTS FROM THE DOM
sectionMain.removeChild(sectionMain.lastElementChild)
// sectionMain.removeChild(sectionMain.children[1].replaceChildren('hell0'))

// MODIFYING ELEMENTS CLASSES
let pClass = document.querySelector('.newp-class');
// pClass.className += ' heloo'
// pClass.classList.toggle('newp-class')
pClass.style.fontSize = '30px'
console.log(pClass.style);

// EVENTS
// Syntax for event listener 
// object.addeventListener(event, function () {
//     //code to be executed when the event is triggered
// })
const doSomething = () => {
    console.log('hello world')
}
doSomething()
const pInDivClass = document.querySelector('.events p ')
// pInDivClass.addEventListener('click', doSomething)

// pInDivClass.addEventListener('click', function () {
//     console.log('hello world')
// })
const anotherDoSomething = document.querySelector('.events h2 ')
anotherDoSomething.addEventListener('click', doSomething);

pInDivClass.addEventListener('click', function (event) {
    console.log(event)
    console.log('hello world')
})
const inputEl = document.querySelector('input');
inputEl.addEventListener('blur', (ev) => {

    console.log(ev.target.value)
})