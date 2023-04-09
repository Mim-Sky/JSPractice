'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive :D`);

// function logger() {
//   console.log(`My name is Mimsky`);
// }

// calling / running / invoking the function

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function skiLifts(chairlift, bubblelift) {
//   const piste = `Ski resort with ${chairlift} chairlifts and ${bubblelift} bubblelifts`;
//   return piste;
// }

// const skiResort = skiLifts(8, 3);


// const newSkiResort = skiLifts(10, 12);

// function office(computers, tables, chairs) {
//   const officeThings = `In our office there are ${computers} computers, ${tables} tables and ${chairs} chairs.`;
//   return officeThings
// }

// const ourOffice = office(5, 14, 1);
// console.log(ourOffice);



//function declaration


// const age1 = calcAge1(1992);


// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

//function expression

// const calcAge2 = function(birthYear) {
//   return 2023 - birthYear;
// }
// const age2 = calcAge2(1992);

// console.log(age1, age2);

// arrow function

// const calcAge3 = birthYear => 2023 - birthYear;
// const age3 = calcAge3(1984);



// console.log(yearsUntilRetirement(1991, `Mimsky`));
// console.log(yearsUntilRetirement(1998, `Magdzia`));



// const daysUntilMagdziaComes = (presentDay, jakaMagdunia) => {
//   const daysLeft = 25 - presentDay;
//   return `Magdzia ${jakaMagdunia} przyjedzie za ${daysLeft} dni`;
// }

// console.log(daysUntilMagdziaComes(20, `najwspanialsza`));


// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));


// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName2) {
//   const age = calcAge(birthYear)
//   const retirement = 65 - age;

// if(retirement > 0) {
//   console.log(`${firstName2} retires in ${retirement} years`);
//   return retirement;
// } else {
//   console.log(`${firstName2} has already retired`);
//   return -1;
// }
 
// }

// console.log(yearsUntilRetirement(1984, `Mimsky`));
// console.log(yearsUntilRetirement(1950, `Janusz`));


// const yearsUntilRetirement = (birthYear, firstName2) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName2} retires in ${retirement} years` ;
// }

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function(avgDolphins, avgKoalas) {
//   if(avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else if(avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`No one wins the game`);
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);


// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// // console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);




// // console.log(calcTrans(5, 4, 3));


// const calcTrans = (a, b, c) => ((a*b) ** c);

// const calc1 = calcTrans(5, 4, 3);
// const calc2 = calcTrans(13, 12, 5);
// const calc3 = calcTrans(43, 13, 7);

// console.log(calc1);
// console.log(calc2);
// console.log(calc3);

// // function transmogrifier(a, b, c) {
// //   const result = (a * b) ** c; 

// //   console.log(result)
// // }

// // transmogrifier(5, 3, 2);


// const calcAverage = (a, b, c) => (a + b + c) / 3; 

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(45, 24, 41);

// const checkWinner = function(avgDolphins, avgKoalas) {
//   if(avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
//   } else if(avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
//   } else {
//     console.log(`Noone wins the tropy`)
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 = `Magdunia`; 
// const friend2 = `Fisia`;
// const friend3 = `Misiek`;

// const friends = [`Magdunia`, `Fisia`, `Misiek`]; //literal syntax
// console.log(friends);

// // const years = new Array(1986, 1988, 1984);


// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends[1]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// //mutating

// friends[2] = `Sebek`;
// console.log(friends[2]);

// const firstName = `Michal`;
// const mimsky = [firstName, `Horodyski`, 2023 - 1984, friends];

// console.log(mimsky)


// const calcAge = function(birthYear) {
//   return 2023 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[2]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);


// const calcTip = function(bill) {
//   return bill >= 50 && 300 ? bill * 0.15 : bill * 0.2;
// }

// const calcTip = bill => bill >= 50 && 300 ? bill * 0.15 : bill * 0.2;

// const tip = calcTip(100);


// const calculateBill = (billAmount, taxRate) => billAmount * (1 + taxRate);

// function calculateBill(billAmount, taxRate) {
//   const total = billAmount * (1 + taxRate);
//   return total;
// }

// const myTotal = calculateBill(100, 0.13);
// const myTotal2 = calculateBill(200, 0.13);

// console.log(`Your total is $${calculateBill()}`);


// function sayHiTo(firstName) {
//   return `Hello ${firstName}`
// }

// const greeting = sayHiTo(`Mimsky`);

// function doctorize(name) {
//   return `Dr. ${name}`;
// }

// function yell(name) {
//   return `HEY ${name.toUpperCase()}`;
// }

// const friends = [`Magdunia`, `Fisia`, `Misiek`, `Peter`];

// // ADDING ELEMENTS

// const newLength = friends.push(`Jeremka`); //add at the end
// friends.unshift(`Kasik`); // add in the beggining
// console.log(friends);

//REMOVING ELEMENTS
// friends.pop(); // Removing last
// const popped = friends.pop(); 
// console.log(friends);

// friends.shift(); //removing first
// console.log(friends);

// console.log(friends.indexOf(`Fisia`));

// console.log(friends.includes(`Magdzia`));
// console.log(friends.includes(`Magdunia`));

// if (friends.includes(`Peter`)) {
//   console.log('You have a friend called Peter');
// } else {
//   console.log(`Peter is not your friend`);
// }


// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips [1], bills[2] + tips[2]];









// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 55, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; 










// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2], ];

// console.log(total[1]);




// const names = [`Magdzia`, `Misiek`, `Fisiek`];

// console.log(names[names.length -2 ]);




// OBJECTS



// console.log(mimsky.secondName);
// console.log(mimsky[`secondName`]);

// const nameKey = `Name`;
// console.log(mimsky[`first` + nameKey]);
// console.log(mimsky[`second` + nameKey]);

// const interestedIn = prompt(`What do you want to know about Mimsky? Choose between`);



// if(mimsky[interestedIn]) {
//   console.log(mimsky[interestedIn]);
// } else {
//   console.log(`Wrong request!`)
// }

// console.log(`${mimsky.firstName} has ${mimsky.friends.length} friends, and his best friend is called ${mimsky.friends[0]}`);




// calcAge: function(birthYear) {
//   return 2037 - birthYear;
// }

// console.log(mimsky[`firstName`]);

// const nameKey = 'Name';

// console.log(mimsky['first' + nameKey]);



// const interestedIn = prompt(`What do you want to know about Jonas? Choose firstName, lastName, age, job and friends`);

// if(mimsky[interestedIn]) {
//   console.log(mimsky[interestedIn]);
// } else {
//   console.log(`Wrong request! Choose between firstName, lastName, age, job and friends `);
// }


// mimsky.location = `Iceland`;
// mimsky[`twitter`] = `@mimsky`;
// console.log(mimsky);

// Challenge
// "Mimsky has has 5 friends, and his best friend is Magdzia"

// const mimsky = {
//   firstName: `Michal`,
//   secondName: `Fiś`,
//   birthYear: 1984,
//   job: `blabla`,
//   friends: [`Magdzia`, `Fisia`, `Kasik`, `Jeremka`, `Stas`],
//   hasDriversLicense: true,


// calcAge: function (birthYear) {
//   return 2037 - birthYear;
// }

// calcAge: function () {
//   // console.log(this);
//   return 2037 - this.birthYear;
//   }
//   calcAge: function () {
//     mimsky.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he has ${this.hasDriversLicense ? `a` : `no`} driver's license.`
//   }
// }

// mimsky.calcAge();
// console.log(mimsky.getSummary());

// const mark = {
//   fullName: `Mark Miller`,
//   weight: 78,
//   height: 1.69,

//   calcBmi: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//     }
//   }

// const john = {
//   fullName: `John Smith`,
//   weight: 92,
//   height: 1.95,

//   calcBmi: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   } 
// }

// mark.calcBmi();
// john.calcBmi();
// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// } else if (john.bmi > mark.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }
// // for loop keeps runing while condition (rep <= 10) is TRUE




// for(let rep = 1; rep <= 1000000; rep++) {
//   console.log(`Ruch frykcyjny ${rep}`);
// }




//   getSummary: function () {
//     if (this.hasDriversLicense) {
//     console.log(`${this.firstName} is a ${this.age}-year old ${this.job} and has a drivers license.`);
//     } else {
//       console.log(`${this.firstName} is a ${this.calcAge()}-year old ${this.job} and does not have a drivers license.`)
//     }



// const mimsky = [
//   `Michal`,
//   `Fiś`,
//   1984,
//   `blabla`,
//   [`Magdzia`, `Fisia`, `Kasik`, `Jeremka`, `Stas`],
//   true,
// ];

// const types = [];


// for (let i = 0; i < mimsky.length; i++) {
//   //reading from mimsky array
//   console.log(mimsky[i], typeof mimsky[i]);

//   //filling types array
//   // types[i] = typeof mimsky[i];
//   types.push(typeof mimsky[i]);
// }

// console.log(types);


// const years = [1991, 2007, 1969, 2020];
// const ages = [];


// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// //continue and break
// console.log( `---ONLY STRINGS---`)
// for (let i = 0; i < mimsky.length; i++) {
//   if(typeof mimsky[i] !== `string`) continue;
//   // if the type of mimsky array elements is not a string, then continue the loop. 

//   console.log(mimsky[i]);
// }

// //break

// console.log( `---BREAK WITH NUMBER---`)
// for (let i = 0; i < mimsky.length; i++) {
//   if(typeof mimsky[i] === `number`) break;
//   // if the type of mimsky array elements is not a string, then continue the loop. 

//   console.log(mimsky[i], typeof mimsky[i]);
// }

//LOOPING FROM THE END

// const mimsky = [
//   `Michal`,
//   `Fiś`,
//   1984,
//   `blabla`,
//   [`Magdzia`, `Fisia`, `Kasik`, `Jeremka`, `Stas`],
// ];

// for (let i = mimsky.length - 1; i >= 0; i--) {
//   console.log(mimsky[i]);
// }

// LOOP INSIDE A LOOP

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`------Starting exercise ${exercise}`);

//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
//   }
// }

// for (let rep = 1; rep <= 10; rep ++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }


// let rep = 1;
// while (rep <= 10) {
//   // console.log(`WHILE: Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;


// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`Loop is about to end...`);
// }


// const mimsky = [
//   `Michal`,
//   `Fiś`,
//   1984,
//   `blabla`,
//   [`Magdzia`, `Fisia`, `Kasik`, `Jeremka`, `Stas`],
// ];

// const types = [];

// for (let i = 0; i < mimsky.length; i++) {
  
//   console.log(mimsky[i]);

//   types.push(typeof mimsky[i]);
// }

// console.log(types);


// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
  
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// for (rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weigths repetition ${rep}`);
// };

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weigths repetition ${rep}`);
//   rep++;
// };

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) { // `!==` = is different than 6
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`Loop is about to end...`);
// }


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

console.log(tips);
console.log(totals);

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

console.log(lovefunc(3, 4));


// create a function which returns an RNA sequence from the given DNA sequence

function DNAtoRNA(dna) {
  return dna.replace(/T/g, `U`);
}

const dna = DNAtoRNA(`TTTTTTTT`);
console.log(dna);


function noSpace(x){  
  return x.replace(/\s/g, '');
}



























// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
  
// }

// const initialValue = 0;
// const totalSum = totals.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

// console.log(tips, totals);


// const calcAverage = function(arr) {
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   // console.log(sum);
//   return sum / arr.length;
// }

// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
























// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(tips[i] + bills[i]);
// }

// console.log(bills,tips, totals);
// console.log();

// const calcAverage = function(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));








// const years = [1991, 2007, 1969, 2020];
// const ages = [];


// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }


// const mark = {
//   fullName: `Mark Miller`,
//   weight: 78,
//   height: 1.69,

//   calcBmi: function () {
//     this.bmi = Math.trunc(this.weight / this.height ** 2);
//     return this.bmi;
//     }
//   }

// const john = {
//   fullName: `John Smith`,
//   weight: 92,
//   height: 1.95,

//   calcBmi: function () {
//     this.bmi = Math.trunc(this.weight / this.height ** 2);
//     return this.bmi;
//   } 
// }

// mark.calcBmi();
// john.calcBmi();
// console.log(mark.bmi, john.bmi);



// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// } else if (john.bmi > mark.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }



function bmi(weight, height) {
  let bmi = weight / height ** 2;
  if (bmi <= 18.5) {
    return `Underweight` 
  } else if (bmi > 18.5 && bmi <= 25.0) {
    return `Normal` 
  } else if (bmi > 25.0 && bmi <= 30.0) {
    return `Overweight` 
  } else if (bmi > 30) {
    return `Obesse`
  }  
};

console.log(bmi(180, 1.80));

// const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
//                                     bmi <= 25 ? "Normal" :
//                                     bmi <= 30 ? "Overweight" : "Obese";



// SIMPLE MULTIUPLICATION

// function simpleMultiplication(number) { 
//   return (number % 2 == 0 ? number * 8 : number * 9);
// }

// console.log(simpleMultiplication(8));

// BEST PRACTICE

function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}