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
var job = "teacher";
console.log(job);
job = "singer";
console.log(job);

{
    const birthYear2 = 3000;
    console.log(birthYear2);
    var job2 = "danncer";
}
// console.log(birthYear2)

job2 = "developer";
console.log(job2);

// Rules for naming variables
//camelCase let birthYear , firstName
// let Job = 'job'; //not a good practise

// Arithmetic operators
//Plus
let num = 23 + 40;
console.log(num);
// Concatenation
let myFirstName = "somtoo";
let myLastName = "obi";
const fullName = myFirstName + myLastName;
console.log(fullName);
console.log(23 - 40);

// Prefix and postFix increment and Decrement Operators
let a = 5;
//Whenever you are dealing with prefix the variable is incremented or decremented first and after that can you now assign the value
let b = ++a; //a becomes 6

console.log(a);
console.log(b);

let a2 = 10;
let b2 = --a2;
console.log(b2);

// Postfix
//Whenever you are dealing with Post fix you you do the assignment first and after that you can do your increment or decrement
let aPost = 5;
let bPost = aPost++;

console.log("a post", aPost); //6
console.log("b post", bPost); //5

let xPost = 10;
let yPost = xPost--;

console.log(xPost);
console.log(yPost);

// Assignment Operators
let x = 10 + 5; // 15
console.log(x);
x += 10; // x = x + 10 = 25
console.log(x);
x *= 4; // x = x * 4 =100
console.log(x);
let y = 1;
y -= 6; // y = y - 6
console.log(y);

// Comparison operators
//loosely equal to ==
console.log("10" == 10);
//strict equality ===
console.log("10" === 10);
console.log("10" === "10");
console.log(10 != 10);
console.log(5 >= 5);

let isOfDrinkingAge = true;
let hasMoney = false;
let isAStudent = false;
console.log(isOfDrinkingAge && !hasMoney);
console.log(!isAStudent || (hasMoney && isOfDrinkingAge)); //true
console.log((!isAStudent && hasMoney && !isOfDrinkingAge) || hasMoney); //true && false && false ||false;

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
let alexMath = 85,
    alexScience = 90,
    alexHistory = 88,
    alexBonus = 5;
let blakeMath = 80,
    blakeScience = 85,
    blakeHistory = 87,
    blakeBonus = 10;

//calculate their average scores

let averageAlex = (alexMath + alexScience + alexHistory) / 3;
let averageBlake = (blakeMath + blakeScience + blakeHistory) / 3;
console.log("Alex average is ", averageAlex);
console.log("Blake average is ", averageBlake);

//Calculate their Final score
let alexFinalScore = averageAlex + alexBonus;
let blakeFinalScore = averageBlake + blakeBonus;
console.log("Alex final score is ", alexFinalScore);
console.log("Blake final score is ", blakeFinalScore);

//Determine if alex has a higer final score
let alexHigherFinalScore = alexFinalScore > blakeFinalScore;
console.log(alexHigherFinalScore);

// STRINGS AND TEMPLATE LITERALS

const myOccupation = "Ballerina";
const myName = "sandra";
const myYear = 1990;

const finalSententce =
    "I'm" +
    " " +
    myName +
    ", a " +
    (2024 - myYear) +
    " years old \n" +
    " and I'm a" +
    " " +
    myOccupation;
console.log(finalSententce);

const finalSentence2 = `I'm ${myName} a  ${2024 - myYear
    } years old and i'm a ${myOccupation}`;
console.log(finalSentence2);
console.log("string with \n multiple \n lines");
console.log(`string
    with 
    new line`);

// TYPE CONVERSION AND COERCION
// Conversion
const inputYear = "1996";
console.log(inputYear, typeof inputYear);

const convertedInputYear = Number(inputYear);
console.log(convertedInputYear, typeof convertedInputYear);
// unary
const convertedInputYear2 = +inputYear;
console.log(convertedInputYear2, typeof convertedInputYear2);

const inConvertableInput = "somtoo";
const myHobby = Number(inConvertableInput);
console.log(myHobby, typeof myHobby);

const myLuckyNumber = 13;
console.log(String(myLuckyNumber));

// const myBoolean = 10;

// TYpe coercion
console.log("1" + 1);
// when dealing with a string and a number and its plus sign , the number is converted to string and then concatenated to the string and the result is going to be a string
// when dealing with a string and a number and its minus sign , the sting is converted to a number and then substracted to the number and the result is going to be a number

let n = "1" + 1;
console.log(n); //11 string
console.log(2 + 5 + 6 + "5");
console.log("10" + 10 * "3"); //1010 -3

// BOOLEAN CONVERSIION & TRUTHY AND FALSEY VALUES
// Falsely values that not exactly false but will return false when we try to convert them to boolean
//Truthy values are values that are not exactly true but will return true when we try to convert then to boolean
//5 falsey values in js which 0 , "" , undefined, null , NaN and anything apart from these 5 values are truthy values

console.log(Boolean(0));
console.log(Boolean("undefined"));

// CONTROL STRUCTURES

//IF ELSE STATEMENTS , SWITCH STATEMENTS

//Syntax for if/else statements
// if (condition that returns a boolean) {
//     code that will run if the condition is true
// }else {
//     code that will run if the condition false
// }

const myAge = 19;

if (myAge >= 18) {
    console.log("I am eligible to drink");
} else {
    console.log("I am not yet eligible");
}

const isCold = false;
let weather;
if (isCold) {
    weather = "Its cold You should wear a sweater";
} else {
    weather = "Its kind of hot";
}
console.log(weather);

let character = "a";
if (character) {
    console.log("This is a character");
} else {
    console.log("This is not a character");
}

let drinkingAge = 18;
let hasDriversLisence = false;
if (myAge >= drinkingAge && !hasDriversLisence) {
    console.log("I am a full blown adult");
} else {
    console.log("I am a minor");
}

//Syntax for if/else elseif statements
// if (condition that returns a boolean) {
//      code that will run if the condition is true
// }
// else if (condition that returns a boolean ) {
//     code that will run if the condition is true
// }
// else {
//      code that will run if the condition false
// }
const myPet = "Dog";
if (myPet === "Cat") {
    console.log("Cats are great pets but not for me");
} else if (myPet === "Snake") {
    console.log("Snakes are not for me");
} else if (myPet === "dog") {
    console.log("Yes your are right my pet is a dog");
} else {
    console.log("I have no clue what your pet animal is");
}

// Coding Challenge: Basketball Tournament
// Scenario:
// There are two basketball teams, Eagles and Hawks. They compete against each other 3 times. The winner with the highest average score wins the championship!

// Instructions:
// Calculate the average score for each team using the test data below.

// Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

// BONUS 1: Include a requirement for a minimum score of 120. With this rule, a team only wins if it has a higher score than the other team, and at the same time a score of at least 120 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks.

// BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal to 120 points. Otherwise, no team wins the trophy.

// Test Data:
// Eagles score 123, 94, and 120. Hawks score 116, 130, and 105.

// SOLUTION
let eaglesScore1 = 123,
    eaglesScore2 = 94,
    eaglesScore3 = 120;
let hawksScore1 = 116,
    hawksScore2 = 130,
    hawksScore3 = 105;

let eaglesAverage = (eaglesScore1 + eaglesScore2 + eaglesScore3) / 3;
let hawksAverage = (hawksScore1 + hawksScore2 + hawksScore3) / 3;
console.log(`The eagles average is ${eaglesAverage}`);
console.log(`The Hawks Average is ${hawksAverage}`);

//COmparing the teams average scores
if (eaglesAverage > hawksAverage) {
    console.log(`Eagle win the championship 🏆 ${eaglesAverage}`);
} else if (hawksAverage > eaglesAverage) {
    console.log(`Hawks win the championship 🏆 ${hawksAverage}`);
} else {
    console.log("It's a draw");
}

// BONUS 1
if (eaglesAverage > hawksAverage && eaglesAverage >= 120) {
    console.log(`Eagle win the championship 🏆 ${eaglesAverage}`);
} else if (hawksAverage > eaglesAverage && hawksAverage >= 120) {
    console.log(`Hawks win the championship 🏆 ${hawksAverage}`);
} else if (
    eaglesAverage === hawksAverage &&
    eaglesAverage >= 120 &&
    hawksAverage >= 120
) {
    console.log("Its a draw");
} else {
    console.log("No team wins the championship");
}

//  SWITCH STATEMENT
//Syntax
// switch (expresion) {
//     case value1:
//         //code to be executed if expression === value1
//         break;
//     case value2:
//         //code to be executed if expression === value2
//         break;
//     default: {
//         //code to be executed if none of the above cases match
//     }
// }

let grade = "E";
let message = "";

switch (
grade //B
) {
    case "A":
        message = "Excellent";
        break;
    case "B":
        message = "Well DOne";
        break;

    case "C":
        message = "Good job";
        break;

    case "D":
        message = "You Passed";
        break;

    case "F":
        message = "Better luck, you Failed";
        break;
    default:
        message = "Unknown Grade";
}
console.log(message);

const day = "Tuesday";
switch (day) {
    case "Monday":
        console.log("Its monday, i do some coding");
        break;
    case "Tuesday":
    case "Thursday":
    case "Friday":
        {
            console.log("I go to classes");
        }
        break;
    default: {
        console.log("Invalid Day");
    }
}

// Ternary Operators
//synatx
//condition ? code that will run if condition returns true : code that will run if condition returns false

const isSunny = true;
isSunny ? console.log("Its a sunnyday") : console.log("Its not sunny");

let temperature;

temperature = -5;
if (temperature < 0) {
    console.log("Its freezing cold");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's Quite chilly");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("The weather is moderate");
} else if (temperature >= 26 && temperature <= 35) {
    console.log("It's getting warm");
} else if (temperature > 35) {
    console.log("It's Extremely Hot");
}

// Coding Challenge: Day Activity Planner
// Scenario:
// You are creating a simple day activity planner. The planner takes a day of the week and the current hour and provides an appropriate activity message based on the day and time.

// Task:
// Define a variable day and assign it a string value representing the day of the week (e.g., "Monday", "Tuesday", etc.).
// Define a variable hour and assign it a value representing the current hour (0-23).
// Using a switch statement, check the value of day and print the appropriate activity based on the following conditions:
// "Monday" to "Friday":
// Using a ternary operator, if hour is less than 9 or greater than 17, print "Off work hours".
// Otherwise, print "Work time".
// "Saturday" and "Sunday":
// Print "Weekend! Relax or do something fun."
// Test Data:
// day = "Monday" and hour = 8
// day = "Tuesday" and hour = 10
// day = "Saturday" and hour = 14
// day = "Sunday" and hour = 20
// day = "Friday" and hour = 18

// SOLUTION
let days, hour;
days = "Tuesday";
hour = 8;

switch (days) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log(hour < 9 || hour > 17 ? "Off work hours" : "work time");
        break;
    case 'Saturday':
    case "Sunday":
        console.log('Weekend! Relax or do something fun.');
        break;
    default:
        console.log("Invalid day")
}

// NESTED IF ELSE STATEMENT
// if (condition1) {
//     // code to be executed if conition 1 is true
//     if (condition2) {
//         //code to be executed if condition 1 and condition2 is true
//     } else {
//         //code to be executed if condition 1 true and condition 2 is  false
//     }
// } else {
//     //code to be executed if condition 1 is false
//     if (condition3) {
//         //code to be executed if condition 1 is false and condition3 is true
//     } else {
//         //code to be executed if condition 1 and condition 3  is  false
//     }
// }
let yes = false
let mainAge = 10
if (mainAge < 13) {
    if (yes) {
        console.log("This Person is a toddler")
    } else {
        console.log("This person is a young child")
    }

} else {
    console.log("This person is an adult")
}

//FUNCTIONS
//Function Declaration
//Function Expression
//Arrow function
//Anonymous functions
//Asynchronous Functions
//Immediately Invoked function Expression(IIFE)

//syntax for function declaration 

//function NameOfFunction (parameter) {
//     //code or codes that will be executed when you use the function
// }

function logger() {
    console.log('Hello cynthia')
    console.log('its a beautiful morning or afternoon or evening')
    return false
}
const nelog = logger();
console.log(nelog)
function avg(a, b, c) {
    console.log('Hejcjdsjsd');
    console.log('sdksjksksdljsdjk')
    return (a + b + c) / 3

}
const result = avg(2, 4, 5);
console.log(result)
// Parameter

function greet(name = 'Dear', time = 'Good Morning') {
    console.log(`Hello ${name} , Good ${time}`)
}
greet('Cynthia', 'Morning')
greet('Amara', "Night")
greet()

// Return
function ageCalculator(birthYear, currentYear) {
    console.log(2024 - birthYear)
    return currentYear - birthYear


}

const myActualAge = ageCalculator(1990, 2024);
console.log(myActualAge);
if (myActualAge) {
    console.log('ffufh')
} else {
    console.log('it is greater')
}

function greetName(name) {
    const year = 2024
    return `${name} graduated in ${year}`
}
const evaluation = greetName('James');
console.log(evaluation)

