// Values and Variables
// Data Types
// Primite Data types
// There are 7 Primitive Data types in js  which are Numbers, string, boolean, Undefined, Null, symbol, big int
//Reference data types

// Numbers : 23
// String: "" , '', '23'
// Boolean: true or false
//Undefined: empty till assigned a  value
//Null : Also means empty value but used in a different case

// Variables
// Let , const, var

// let: values that needs to change later

let firstname = "chidera";
firstname = 23;
console.log(firstname);

let age;
console.log(age);
age = 20;
console.log(age);

// Const :are immutable
const birthYear = 2000;
console.log(birthYear);



// Var : similar to let but should be avoided
var job = 'teacher';
console.log(job);
job = 'singer';
console.log(job);

{
    const birthYear2 = 3000;
    console.log(birthYear2);
    var job2 = 'danncer';
}
// console.log(birthYear2)

job2 = 'developer';
console.log(job2);

// Rules for naming variables
//camelCase let birthYear , firstName
// let Job = 'job'; //not a good practise 


// Arithmetic operators 
//Plus 
let num = 23 + 40;
console.log(num);
// Concatenation
let myFirstName = 'somtoo';
let myLastName = 'obi';
const fullName = myFirstName + myLastName
console.log(fullName)
console.log(23 - 40)

// Prefix and postFix increment and Decrement Operators
let a = 5;
//Whenever you are dealing with prefix the variable is incremented or decremented first and after that can you now assign the value
let b = ++a; //a becomes 6 

console.log(a);
console.log(b);

let a2 = 10;
let b2 = --a2;
console.log(b2)

// Postfix 
//Whenever you are dealing with Post fix you you do the assignment first and after that you can do your increment or decrement
let aPost = 5;
let bPost = aPost++;

console.log('a post', aPost); //6
console.log('b post', bPost); //5

let xPost = 10;
let yPost = xPost--;

console.log(xPost);
console.log(yPost);


// Assignment Operators
let x = 10 + 5 // 15
console.log(x)
x += 10 // x = x + 10 = 25 
console.log(x)
x *= 4; // x = x * 4 =100 
console.log(x)
let y = 1;
y -= 6;  // y = y - 6
console.log(y)

// Comparison operators
//loosely equal to == 
console.log('10' == 10);
//strict equality ===
console.log('10' === 10);
console.log('10' === '10');
console.log(10 != 10);
console.log(5 >= 5);

let isOfDrinkingAge = true;
let hasMoney = false;
let isAStudent = false;
console.log(isOfDrinkingAge && !hasMoney)
console.log(!isAStudent || hasMoney && isOfDrinkingAge) //true
console.log(!isAStudent && hasMoney && !isOfDrinkingAge || hasMoney) //true && false && false ||false;

// Operator Precedence
// CODING CHALLENGE
// Coding Challenge: Average Scores and Bonus Points
// Scenario:
// Alex and Blake are trying to compare their average scores in three subjects: Math, Science, and History. They also receive bonus points based on their performance. You need to calculate their average scores and determine who has a higher final score after adding the bonus points.

// Instructions:

// Store Alex's and Blake's scores in Math, Science, and History in variables.
// Store Alex's and Blake's bonus points in variables.
// Calculate the average score for both Alex and Blake using the formula:
// AverageScore  = Math + Science + History /3


// Calculate the final score for both Alex and Blake by adding their respective bonus points to their average score.
// Create a boolean variable alexHigherFinalScore to determine if Alex has a higher final score than Blake.
// Test Data 1:

// Alex's scores are 85, 90, and 88 for Math, Science, and History, respectively. He receives 5 bonus points.
// Blake's scores are 80, 85, and 87 for Math, Science, and History, respectively. He receives 10 bonus points.

//Solution
// storing their test data
let alexMath = 85, alexScience = 90, alexHistory = 88, alexBonus = 5;
let blakeMath = 80, blakeScience = 85, blakeHistory = 87, blakeBonus = 10;

//calculate their average scores

let averageAlex = (alexMath + alexScience + alexHistory) / 3;
let averageBlake = (blakeMath + blakeScience + blakeHistory) / 3;
console.log('Alex average is ', averageAlex);
console.log('Blake average is ', averageBlake);

//Calculate their Final score 
let alexFinalScore = averageAlex + alexBonus;
let blakeFinalScore = averageBlake + blakeBonus;
console.log('Alex final score is ', alexFinalScore);
console.log('Blake final score is ', blakeFinalScore);

//Determine if alex has a higer final score
let alexHigherFinalScore = alexFinalScore > blakeFinalScore;
console.log(alexHigherFinalScore)

// STRINGS AND TEMPLATE LITERALS

const myOccupation = 'Ballerina';
const myName = 'sandra';
const myYear = 1990;

const finalSententce = "I'm" + ' ' + myName + ", a " + (2024 - myYear)
    + " years old \n" + " and I'm a" + " " + myOccupation
console.log(finalSententce)

const finalSentence2 = `I'm ${myName} a  ${2024 - myYear} years old and i'm a ${myOccupation}`
console.log(finalSentence2);
console.log("string with \n multiple \n lines");
console.log(`string
    with 
    new line`);

// TYPE CONVERSION AND COERCION
// Conversion
const inputYear = "1996";
console.log(inputYear, typeof (inputYear));

const convertedInputYear = Number(inputYear);
console.log(convertedInputYear, typeof (convertedInputYear));
// unary
const convertedInputYear2 = +inputYear;
console.log(convertedInputYear2, typeof (convertedInputYear2));

const inConvertableInput = 'somtoo';
const myHobby = Number(inConvertableInput)
console.log(myHobby, typeof (myHobby));

const myLuckyNumber = 13;
console.log(String(myLuckyNumber));

// const myBoolean = 10;

// TYpe coercion
console.log("1" + 1)
// when dealing with a string and a number and its plus sign , the number is converted to string and then concatenated to the string and the result is going to be a string
// when dealing with a string and a number and its minus sign , the sting is converted to a number and then substracted to the number and the result is going to be a number

let n = "1" + 1;
console.log(n) //11 string
console.log(2 + 5 + 6 + "5");
console.log("10" + 10 * "3"); //1010 -3

// BOOLEAN CONVERSIION & TRUTHY AND FALSEY VALUES
// Falsely values that not exactly false but will return false when we try to convert them to boolean
//Truthy values are values that are not exactly true but will return true when we try to convert then to boolean 
//5 falsey values in js which 0 , "" , undefined, null , NaN and anything apart from these 5 values are truthy values 

console.log(Boolean(0));
console.log(Boolean('undefined'));