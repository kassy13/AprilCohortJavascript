// "use strict"
// const friend1 = 'john bosco'; 
// const friend2 = 'chukwuemeka';
// const friend3 = 'chidimma';

const number = new Array(1, 2, 3);
console.log(number);
const friends = ['john bosco', 'chukwuemeka', 'chidimma', 'emmanuel', 'desire', 'kennedy', 'nkem', 'somtoo'];
console.log(friends)
console.log(friends[0]);
console.log(friends[3]);
console.log(friends[6]);
console.log(friends.length);

//to dynamically always be the getting the last item in your array you have to make use of dot length property
console.log(friends[friends.length - 1]);

friends[1] = 'ebube'
console.log(friends)

// const things = [2024 - 1999, true, 'student'];

// BASIC ARRAY METHODS
//push,pop,shift,unshift,includes,concat,sort,reverse,flat
//map filter,reduce,forEach,find ,findindex 

friends.push('Ada');
console.log(friends);
friends.unshift('hello');
console.log(friends);

friends.pop();
console.log(friends);

friends.shift();
console.log(friends);
friends.splice(2, 0, 'Obi')
console.log(friends);
console.log(friends.includes('Obi'));
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = arr1.concat(arr2);
console.log(merged);
const unsorted = [3, 6, 47, 4, 21, 2];
unsorted.sort((a, b) => a - b)
console.log(unsorted);
const unflatArr = [1, 2, [3, [2, 4]]];
console.log(unflatArr[2][1][0])
console.log(unflatArr)
const flatArray = unflatArr.flat(2);
console.log(flatArray);

//OBJECTS
// syntax for objects
// const nameOfObject = {
//     key:value

// }
const studentObject = {
    firstName: 'Nkem',
    lastName: 'Austin',
    job: 'Nil',
    isTrue: false,
    friends2: ['friend1', 'friend 2'],
}
// DOT NOTATION
console.log(studentObject.friends2);

// BRACKET NOTATION
console.log(studentObject['isTrue']);
console.log(studentObject['first' + 'Name']);
console.log(studentObject['firstName']);


// Steven is  building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
// 2. And now let's use arrays! So create an array 'bills' containing the test data below.
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
// 4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

// TEST DATA: 125, 555 and 44

// HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

// SOLUTION

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}
const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log('bills', bills);
console.log('tips', tips)
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total)


// This Keyword

console.log(this);

function hello() {
    console.log(this)
}
hello()

const person = {
    name: 'somtoo',
    // greet: function () {
    //     console.log(this)
    // },
    hello2: hello
}
console.log('person object')
person.hello2()



const person2 = {
    name: 'Alice',
    hello2: hello,
    arrow: function () {
        const inner = () => {
            console.log(this)
        }
        inner()
    }
}
person2.arrow();

// OBJECT METHODS
console.log(Object.keys(person2));
console.log(Object.values(person2));
console.log(Object.entries(person2));
const result = Object.assign(person, person2)
console.log(result);
const obj = { a: 1 }
Object.freeze(obj)
obj.a = 2
console.log(obj)

// MATH METHODS
console.log(Math.abs(-5));

// JavaScript Assignment: Basic Operations with Methods, Objects, this, and Arrays
// Objective:
// To practice creating and using methods within objects.
// To understand the this keyword in the context of object methods.
// Instructions:
// Create a Simple JavaScript Object:
// Create an object called library that represents a small book library.
// The library object should have the following properties:
// books: An array that contains strings representing book titles.
// addBook: A method that adds a new book title to the books array. Use the this keyword to refer to the books array.
// removeLastBook: A method that removes the last book from the books array. Use the this keyword to access and modify the books array.
// listBooks: A method that logs all the book titles in the library at once, without using loops.