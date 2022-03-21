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

//35.Arrow Function

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

console.log(yearUntilRetirement(1989, `Jonas`));