/*let javascript = true;
console.log(javascript);
console.log(typeof javascript);
console.log(typeof 233);
console.log(typeof "kamal");
console.log(typeof true);

javascript = "stringtype";
console.log(typeof javascript);
let year;
console.log(typeof year);
*/
// let age = 30;
// age = 31;
// const birthyear = 1996;
// const job;
// const now = 2021;
// const yourAge = now - 1998;
// const myAge = now - 1996;
// console.log(myAge, yourAge);
// console.log(myAge * 2, yourAge / 2 ** 3);

// const firstName = "kamal";
// const lastName = "kashyap";
// console.log(firstName + " " + lastName);
// let x = 10 + 5;
// console.log(x);
// x += 10; //x = x+10
// x *= 10; //x = x*10
// x++;
// x--;
// console.log(x);
// x--;
// console.log(x);
// console.log(myAge > yourAge);
// console.log(myAge < yourAge);
// console.log(myAge >= 20);
// let description =
//   "Portugal is in Europe, and its 11 million people speak portuguese";
// console.log(description);
// let x, y;
// x = y = 20 + 10 - 5;
// console.log(x, y);

// Coding Challege - 1
/*Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data:
 Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
 Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
GOOD LUCK 😀
*/

// const markMass = 78;
// const mHeight = 1.69;
// const jMass = 92;
// const jHeight = 1.95;

// const mBMI = markMass / mHeight ** 2;
// const jBMI = jMass / jHeight ** 2;
// const markHigherBMI = mBMI > jBMI;
// console.log(mBMI, jBMI, markHigherBMI);
// let firstName = "kamal";
// const job = "coder";
// const bday = 1996;
// const year = 2037;
// const names = "I'm " + firstName + ", a " + (year - bday) + " years old " + job;
// console.log(names);
// const newNames = `I'm ${firstName}`;
// console.log(newNames);
// console.log(`my name is kamal`);
// console.log("Here we show\n\
// in nwe line\n\
// kamal");
// console.log(`here
// is an
// another exmaple`);

// const age = 10;
// if (age >= 18) {
//   console.log("Eligible for driving ");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Not Eligible yet wait for ${yearsLeft}`);
// }
// const birthyear = 1996;
// let century;
// if (birthyear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉*/
// if (mBMI > jBMI) {
//   console.log(`Mark's BMI is higher than John's!`);
// } else {
//   console.log(`John's BMI is higher than Mark's!`);
// }

// if (mBMI > jBMI) {
//   console.log(`Mark's(${mBMI}) BMI is higher than John's!`);
// } else {
//   console.log(`John's(${jBMI}) BMI is higher than Mark's!`);
// }

//  Type Conversion
// const year = "1992";
// console.log(year);
// console.log(year + 90);
// console.log(typeof year);
// // String to number Conversion
// console.log(Number(year));
// console.log(Number(year) + 90);
// let cyear = Number(year) + 9;
// console.log(cyear);
// typeof cyear;
// console.log(typeof cyear, typeof year);
// const names = "kamal";
// console.log(Number(names));

// const namec = 232;
// // number to string conversion
// console.log(String(namec));
// console.log(namec);

// // Type Coercion
// console.log("I am " + 23 + "years old");
// console.log("I am " + "23" + "years old");
// console.log("23" - "22" + 10);
// console.log("23" + "22" + 10);
// console.log("23" * "2" + 10);
// console.log("24" / "2" + 10);
// console.log("300" > 9);
// console.log("20" > "9");

// on = "1" + 1; //String type(1+1=11)
// console.log(";;");
// console.log(typeof on);
// on = on - 1; //Number type('11'-1 = 10)s
// console.log(on);
// console.log(typeof on);
