//VAR - LET - CONST

//? SCOPE

if (true) {
  let myName = "Tom";
}
// console.log(myName);

//? Hoisting

//? VAR
var myNumber = "myNumber";
var myNumber = "two";
var myNumber = "three";
var randomName = "Antonio";
randomName = 34354;
var randomName = ["a", "b"];
// console.log(randomName);

if (true) {
  var randomName = "Pedro";
  //   console.log("randomName :>> ", randomName);
}

var myNumber = 56;
var car;
// var car = "opel"

//? LET
// console.log("color", color);
let color = "red";
function something() {
  let color = "yellow";
}
// let color = "yellow"; // cannot redeclare a let variable withing the same scope

color = "purple";

//? CONST

const day = "monday";
// day = "tuesday"; //this is not possible
// console.log(day);
if (true) {
  const day = "tuesday";
  // day ="tuesday" //this triggers error assigment to constant variable
  //   console.log("day :>> ", day);
}

// const day = "monday";

// const thought  //we must assign a value at the time of declaration
const thought = "this is a thought";

//! FUNCTIONS

//? Function declaration

// myFunction();
function myFunction() {
  //some code
  //   console.log("this is a function DECLARATION");
}

//? Function expression
// myFunctionExpression();

const myFunctionExpression = function () {
  //   console.log("function expression");
};
// myFunctionExpression();

document.querySelector("body").addEventListener("click", myFunctionExpression);
// document.querySelector("body").addEventListener("click", function () {
//     //do something
// });
//pros of function expressions not being hoisted: in callbacks (not globally reachable), closures

//? ARROW FUNCTIONS

const arrowFunction = () => {
  //   console.log("this is an arrow function");
};
const arrowFunctionWithParams = (num1, num2) => {
  //some code
};

const aFWithOneParam = (num1) => {
  //some code
};
const aFWithNoParams = (_) => {
  //some code
  return "i am an arrow function";
};

const aFWithOneLine = (_) => "no return";
// console.log(aFWithNoParams());
// console.log(aFWithOneLine());
// arrowFunction();

//! LOOPS

//? .forEach()

const favMeals = [
  "pizza",
  "ice cream",
  "roasted chicken",
  "brocolli",
  "dumplings",
  "croquetas",
];

// favMeals.forEach((favMeal, index, originalArray) => {
//   console.log("favMeal :>> ", index, favMeal);
//   //   console.log("originalArray :>> ", originalArray);
// });

// catFacts.forEach((catFact) => {
//   //   console.log("catFact", catFact);
// });

//? .map()

// favMeals.map((favMeal, i) => {
//   //   console.log("map: fav Meal :>> ", i, favMeal);
// });

// const only3FavMeals = favMeals
//   .map((favMeal, i) => {
//     if (i < 4) {
//       //   console.log("map: fav Meal :>> ", i, favMeal);

//       return favMeal;
//     }
//   })
//   .sort();
// //? MAP is chainable (you can apply different methods after .map , like .map().sort().replace())
// console.log("only3FavMeals :>> ", only3FavMeals);

// const only3FavMealsForEach = favMeals
//   .forEach((favMeal, i) => {
//     if (i < 4) {
//       console.log("map: fav Meal :>> ", i, favMeal);

//       return favMeal;
//     }
//     return "something!!!!";
//   })
//   .sort();
//? forEach is NOT chainable (cannot add more methods after a .)

//? .filter()

// const filteredMeals = favMeals.filter((favMeal, i) => {
//   // return favMeal.length < 9;
//   const num1 = 20;
//   const num2 = 30;
//   //   return num1 > num2;
//   return num1 < num2;
// });
// console.log("filteredMeals :>> ", filteredMeals);

console.log("ORIGINAL catFacts", catFacts);
// catFacts.forEach((catFact, i, originalArray) => {
//   console.log("catFact", catFact);
//   console.log("originalArray :>> ", originalArray);
//   catFact.newFact = "I don't like cats";
// });

//! WARNING , the code below modifies the original array
// const catFactsArray = catFacts.map((catFact, i, originalArray) => {
//   console.log("catFact", catFact);
//   console.log("originalArray :>> ", originalArray);
//   catFact.newFact = "I don't like cats";
//   return catFact;
// });

// console.log("catFactsArray :>> ", catFactsArray);

//? Spread operator

const catFactsArray = catFacts.map((catFact, i, originalArray) => {
  console.log("catFact", catFact);
  console.log("originalArray :>> ", originalArray);

  return { ...catFact, newFact: "this is not modifying the original array" };
});
console.log("catFactsArray :>> ", catFactsArray);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];

console.log("array3 :>> ", array3);

const array4 = ["hey", "there", ...array1];
console.log("array4 :>> ", array4);

const person1 = {
  name: "Rigoberto",
  familyName: " de la Cruz",
};

const person2 = {
  name: "Hermenegildo",
  familyName: " del valle hondo",
};

const person3 = {
  ...person1,
  ...person2,
};

console.log("person3 :>> ", person3);

const num1 = 7;
const num2 = 2;

//? "or" operator --> ||

if (num1 > 4 || num2 > 4) {
  console.log("OR operator code run");
}
//? "and" operator --> &&

if (num1 > 8 && num2 > 1) {
  console.log("AND operator code run");
}

//? Truthy and falsy expressions

const nullVAlue = null;
if (true) {
  console.log("truthy value");
}

if (false) {
  console.log("false value");
}
if (0) {
  console.log("false value");
}
if (null) {
  console.log("false value");
}
if (undefined) {
  console.log("false value");
}

//? && RETURNS the first FALSY value, or the last truthy value
// const trueOrFalse = false && "sometihing";
// const trueOrFalse = "something" && false;
// const trueOrFalse = "" && "userName";
// const trueOrFalse = "hi" && "userName";

//?? || return the first truthy value, or the last falsy
// const trueOrFalse = 0 || "";
// const trueOrFalse = "" || 0;
// const trueOrFalse = "hi" || null;
const trueOrFalse = null || "hi";

console.log("trueOrFalse :>> ", trueOrFalse);
