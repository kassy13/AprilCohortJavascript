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

document.body.append(sectionMain);
const dom = document.querySelector('.dom')
dom.insertAdjacentElement("beforeend", sectionMain)
