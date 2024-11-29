// console.log("this is my first JS command");

//? VARIABLE TYPES

// var , let, const

//! Strings
const myName = "Raúl asdasd1233???";

// console.log("myName", myName);
const singleQuoteString = "red";
const stringNumber = "23";
// console.log("stringNumber", stringNumber);

// console.log(myName);

// console.log("myName", myName);

//! Numbers
const number1 = 23;
// console.log("number1", number1);

const myAge = 100 - 37 + 2 - 60;
// console.log("myAge", myAge);

//! Boolean
const myBoolean = true;
const myBooleanFalse = false;

//! Object

// const car = {
//   color: "red",
//   brand: "mini",
//   model: "copper",
//   wheels: 4,
//   ac: true,
//   extras: {
//     hiFi: true,
//     turbo: true,
//     solarRoof: "big",
//   },
// };
// console.log("car", car);

//+ Dot notation
// console.log(car.model);
// console.log(car.extras.solarRoof);

//! undefined
let favColor;
// console.log("favColor", favColor);

//! null
const favNumber = null;
// const favNumber = undefined; // for now let's not assigned undefined to a variable
// console.log("favNumber", favNumber);

// ? Comparisson operators

const numA = 50;
const numB = 500;

const isNumberAGreaterThanB = numA > numB;

// console.log("isNumberAGreaterThanB", isNumberAGreaterThanB);

//! Conditionals

//If/else
// if (numA > numB) {
//   console.log("numA is greater than numB");
// } else {
//   console.log("It is NOT greater");
// }

//If/else if
// if (numA > numB) {
//   console.log("numA is greater than numB");
// } else if (numA === numB) {
//   console.log("It is equal");
// } else {
//   console.log("nothing of the above is true");
// }

// "==" , "==="
//! try to always use STRICT COMPARISSON (=== ; !== , <==)
const strinNum1 = "2";
const num2 = 2;

// console.log(strinNum1 == num2);
// console.log(strinNum1 === num2);
// console.log("abc" + "one,two , three");

//? ARRAYS

const numbersArray = [1, 4, 6];
// console.log("numbersArray", numbersArray);
const stringsArray = ["red", "blue", "black"];
// console.log("stringsArray", stringsArray);
const mixedArray = [true, 1, "hi", { name: "tom", age: 25 }];
// console.log("mixedArray", mixedArray);

// console.log(stringsArray[1]);
// console.log(stringsArray.length);

//? Array methods
const favoriteColorsArray = [
  "blue",
  "red",
  "green",
  "darkGreen",
  "lightBlue",
  "purple",
  "aqua",
];
console.log("favoriteColorsArray :>> ", favoriteColorsArray);
//* remove the last element of an array
// const randomName = "Tom";

// favoriteColorsArray.pop();
// console.log("favoriteColorsArray :>> ", favoriteColorsArray);
//* add a new element

// favoriteColorsArray.push("yellow");
// console.log("favoriteColorsArray :>> ", favoriteColorsArray);

// const allFavColors = favoriteColorsArray.join(" and ");
// console.log("allFavColors :>> ", allFavColors);

// const chosenColor = favoriteColorsArray.at(3);
// console.log("chosenColor :>> ", chosenColor);

//? LOOPS (for Arrays)

console.log(favoriteColorsArray[0]);
console.log(favoriteColorsArray[1]);
console.log(favoriteColorsArray[3]);

//! for

// for (let i = 0; i < 4; i = i + 1) {
//   console.log("loop run:", i);
// }

// for (let i = 0; i < favoriteColorsArray.length; i++) {
//   console.log(favoriteColorsArray[i]);
//   if (favoriteColorsArray[i] === "red") {
//     console.log(favoriteColorsArray[i] + " is Hassan's fav color");
//   }
// }
//! for of (for arrays)
const myNumbers = [1, 2, 4];
for (let item of myNumbers) {
  console.log("item :>> ", item);
}

//! while
// let i = 0;
// while (i < favoriteColorsArray.length) {
//   console.log(favoriteColorsArray[i]);
//   i++;
// }

//? LOOPS (for objects);

const car = {
  color: "red",
  brand: "mini",
  model: "copper",
  wheels: 4,
  ac: true,
};
// console.log(car[model]);

//! for in

for (let propertyValues in car) {
  console.log("propertyVaulues :>> ", propertyValues);
}

for (let key of Object.keys(car)) {
  console.log(key, " : ", car[key]);
}
