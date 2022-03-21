/*//32. Activating Strict Mode
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log(`I can drive`);

const interface = 'audio';*/

/*//33. Functions
'use strict';

function logger() {
    console.log(`My name is Jonas`);
}

//calling; running; invoking the function 
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

console.log(fruitProcessor(7, 2));*/

/*//34. Function Declaration vs. Expressions
//function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge1(1989);
console.log(age1);

//function expression 
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(1990);

console.log(age1, age2);*/

/*//35.Arrow Function

//Function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

//Arrow function
const calcAge3 = birthYear => 2022 - birthYear;

const age3 = calcAge3(1989);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retiret ar ${retirement}`;
}

console.log(yearUntilRetirement(1989, `Jonas`));*/

/*//36.Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}
console.log(fruitProcessor(4, 3));*/

/*//37.Reviewing Functions

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        return retirement;
    } else {
        return -1;
    }
    return retirement;
    // return `${firstName} retiret ar ${retirement} years`;
}

console.log(yearUntilRetirement(1888, 'Jonas'));
console.log(yearUntilRetirement(1989, 'Jonas'));*/

//function review

/*function calcAge(birthYear) {  //function declaration
    return 2022 - birthYear;
}

const calcAge = function (birthYear) { //function expression 
    return 2022 - birthYear;
}

const calcAge = birthYear => 2022 - birthYear; //Arrow function*/

function addition(a) {
    let plus1 = a + 1;
    let plus2 = a + 2;
    return (plus1, plus2)
}

let plus1 = addition(3);
let plus2 = addition(3);

console.log(plus1);
console.log(plus2);