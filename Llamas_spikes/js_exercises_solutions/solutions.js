//! Writing expressions with variables
//?  Exercise 1
//#region
// In your JavaScript file create a variable called myName with your name as the value. Put your name inside string quotes, e.g., "my name". Then add a line of code to print the variable name to the console after the previous message.

const myName = "Anacleto Agente Secreto";
console.log("myName :>> ", myName);
//#endregion

//?  Exercise 2
//#region
// Create a variable called age with a number that is your age. Do not use string quotes for numbers. Add a line to print that variable in the console. Save the file and reload the page. You should see your name and your age.

const age = 156;
console.log("age :>> ", age);
//#endregion

//!Writing code with conditionals
//?  Exercise 3
//#region
// Create a variable called juliaAge with a value 32. Create another variable called ageDiff and set it to an expression that calculates your age minus Julias's age. Print the value of ageDiff. Save the file and reload the page. You should see your age and the age difference. If you are younger than Julia, you should see a negative number.

const juliaAge = 32;
const ageDiff = age - juliaAge;
console.log("ageDiff :>> ", ageDiff);
//#endregion

//?  Exercise 4
//#region
// Write a conditional that compares the variable with your age with the number 21. It should print either "You are older than 21" or "You are not older than 21", appropriately, depending on your age. Save your JavaScript file and reload the page. Make sure you see the correct message. Try changing your age in the JavaScript file to make sure the other message prints when it should.

if (age > 21) {
  console.log("You are older than 21");
} else {
  console.log("You are not older than 21");
}
//#endregion

//?  Exercise 5
//#region
// Write a conditional that compares your age with Julia's age. This conditional will need to test if you are older, younger, or the same age, and print, appropriately, either "Julia is older than you", "Julia is younger than you", or "You have the same age as Julia". Save your changes and reload the file.

if (age > juliaAge) {
  console.log("Julia is younger than you");
} else if (age < juliaAge) {
  console.log("Julia is older than you");
} else {
  console.log("You have the same age as Julia");
}
//#endregion

//! JavaScript Arrays
//?  Exercise 6
//#region
// Create an array with all the names of your class (including mentors), then print the first element of the array in the console.
// On the next line, print the last element of the array in the console.
// On the next line, print all the elements of the array in the console (use a "for" loop).
// Save the file and reload the page. You should see the first element of the array, the last element of the array, and a list of all the elements in order in the array in the console.

const students = [
  "Antonio",
  "Pedro",
  "Juan",
  "Felipe",
  "Hector",
  "Oscar",
  "Alejandro",
];

const studentsSorted = students.sort();
console.log("studentsSorted", studentsSorted);
console.log("first element of the array: ", studentsSorted[0]);
console.log(
  "last element of the array: ",
  studentsSorted[studentsSorted.length - 1]
);
//#endregion

//! Looping over an Array
//?  Exercise 7
//#region
// Create an array with all the names of your class (including mentors), then print the first element of the array in the console.
// On the next line, print the last element of the array in the console.
// On the next line, print all the elements of the array in the console (use a "for" loop).
// Save the file and reload the page. You should see the first element of the array, the last element of the array, and a list of all the elements in order in the array in the console.

let studentsAge = [30, 36, 28, 19, 69, 43];
var i = 0;
while (i < studentsAge.length) {
  console.log(studentsAge[i]);
  i++;
}

var i = 0;
while (i < studentsAge.length) {
  if (studentsAge[i] % 2 == 0) {
    console.log(studentsAge[i]);
  }
  i++;
}
//#endregion

//?  Exercise 8
//#region
// Use a loop to find the sum of all the elements of the ages array.

function arraySum(array) {
  let sum = null;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  console.log(sum);
}
arraySum(studentsAge);
//#endregion

//?  Exercise 9
//#region
// Use a loop to add the even numbers of an array. For example, const array = [1, 2, 8, 3, 2]; would result in the sum of 2 + 8 + 2, since they are even numbers. Print the result to the console.

function arraySumEven(array) {
  let sum = null;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum = sum + array[i];
    }
  }
  return sum;
}
const numsArray = [1, 2, 8, 3, 2];
const result = arraySumEven(numsArray);
console.log("Array Sum Even :>> ", result);
//#endregion

//?  Exercise 10
//#region
// Use a loop to add the numbers at even index positions of an array. For example, the const array = [1, 2, 8, 3, 2, 3, 4]; would result in the sum of 8 + 2 + 4 since they are in even positions in the array (ie, index positions 2, 4, and 6). Print the result to the console.

function arraySumEvenPosition(array) {
  let sum = null;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0 && i > 0) {
      sum = sum + array[i];
    }
  }
  return sum;
}
const numsArray2 = [1, 2, 8, 3, 2, 3, 4];
const result2 = arraySumEvenPosition(numsArray2);
console.log("Array Sum Even Position :>> ", result2);
//#endregion

//! Functions
//?  Exercise 11
//#region
// Write a JavaScript function that returns nothing and has no parameters. This function should print the result of the multiplication of two numbers (the numbers that you want).

function noParams() {
  const multiply = 20 * 56;
  console.log("multiply :>> ", multiply);
}
noParams();
//#endregion

//?  Exercise 12
//#region
// Write a JavaScript function with no parameters. This function should return the result of the multiplication of two numbers (the numbers that you want), and in your main program, you should print the result.

function noParamsReturn() {
  const mutiply = 20 * 56;
  return mutiply;
}
const myResult = noParamsReturn();
console.log("myResult :>> ", myResult);
//#endregion

//?  Exercise 13
//#region
// Write a JavaScript function with two parameters. These parameters are the numbers that have to be multiplied. The function should return the result of the multiplication of both numbers (the numbers that you want), and in your main program, you should print the result. Test the function with 3 examples.

function withParamsReturn(num1, num2) {
  const multiply = num1 * num2;
  return multiply;
}
const multiplyResult = withParamsReturn(45, 89);
console.log("multiplyResult :>> ", multiplyResult);
//#endregion

//?  Exercise 14
//#region
// Write a function that determines the type of a triangle given the length of its three sides: Equilateral, Isosceles, or Scalene.

function triangleType(triangle) {
  const side1 = triangle[0];
  const side2 = triangle[1];
  const side3 = triangle[2];

  if (side1 == side2 && side1 == side3) {
    console.log("Triangle is Equilateral");
  } else if (
    (side1 == side2 && side1 != side3) ||
    (side1 == side3 && side1 != side2) ||
    (side2 == side3 && side2 != side1)
  ) {
    console.log("Triangle is Isosceles");
  } else {
    console.log("Triangle is Scalene");
  }
}

const equilateral = [3, 3, 3];
const isosceles = [4, 6, 6];
const scalene = [3, 7, 8];
triangleType(scalene);
//#endregion

//?  Exercise 15
//#region
// Write a function to find and print the lowest number in an array to the console.

function findMin(array) {
  let min = Infinity; //https://www.w3schools.com/jsref/jsref_infinity.asp
  //   let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  console.log("min number is :>> ", min);
}
const numsArray3 = [34, 56, 89, 20];
findMin(numsArray3);
//#endregion

//?  Exercise 16
//#region
// Write a function to find and print the highest number in an array to the console.

function findMax(array) {
  let max = -Infinity; //https://www.w3schools.com/jsref/jsref_infinity.asp
  //   let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  console.log("max number is :>> ", max);
}
const numsArray4 = [34, 56, 89, 20];
findMax(numsArray4);
//#endregion

//?  Exercise 17
//#region
// Write a function that receives two parameters: an array, and an index. The function will print the value of the element at the given index position. For example, given the following array and index, the function will print '6':

function printValue(array, index) {
  console.log("number in position " + index + " is :>>", array[index]);
}
const numsArray5 = [34, 56, 89, 20];
printValue(numsArray5, 1);
//#endregion

//?  Exercise 18
//#region
// Write a simple JavaScript function to join all elements of the following array into a single string:
const myColor = ["Red", "Green", "White", "Black"];
// You should see the following in your console: "Red Green White Black"

function colors(colorsArray) {
  let colorsTogether = "";
  for (let i = 0; i < colorsArray.length; i++) {
    colorsTogether = colorsTogether.concat(" " + colorsArray[i]);
  }
  console.log(colorsTogether.trim());
}
colors(myColor);
function colors2(colorsArray) {
  let colorsTogether = colorsArray.join(",");
  console.log("colorsTogether :>> ", colorsTogether);
}
colors2(myColor);
//#endregion

//?  Exercise 19
//#region
// Write a JavaScript function that reverses a number. For example, if const x = 32443;, then the output should be 34423.

function reverseNumber(num) {
  const numString = num.toString();
  const numsArray = numString.split("");
  console.log("numsArray :>> ", numsArray);
  const reversedArray = [];
  for (let i = numsArray.length; i > 0; i--) {
    reversedArray.push(numsArray[i - 1]);
  }
  const reversedNumber = Number(reversedArray.join(""));
  console.log("reversedNumber :>> ", reversedNumber);
}
const x = 34423;
reverseNumber(x);
function reverseNumber2(num) {
  const numString = num.toString();
  let backNumString = "";

  for (let i = numString.length; i > 0; i--) {
    backNumString = backNumString.concat(numString.charAt(i - 1));
  }
  const backNum = Number(backNumString);
  console.log("reversedArray2 :>> ", backNum);
}
const y = 34423;
reverseNumber2(y);
//#endregion

//?  Exercise 20
//#region
// Write a JavaScript function that returns a string in alphabetical order. For example, if const x = 'webmaster';, then the output should be 'abeemrstw'. Punctuation and numbers aren't passed in the string.

function sortAlphabet(string) {
  const array = string.split("");
  array.sort();
  return array.join("").trim();
}
const stringToSort = "webmaster";
const sortedString = sortAlphabet(stringToSort);
console.log("sortedString :>> ", sortedString);
//#endregion

//?  Exercise 21
//#region
// Write a JavaScript function that finds the longest word in a phrase. For example, if const x = "Web Development Tutorial";, then the output should be "Development"

function findLongest(string) {
  const array = string.split(" ");
  let controlWord = array[0];
  let longestWord = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > controlWord.length) {
      longestWord = array[i];
      controlWord = array[i];
    }
  }
  console.log("longestWord :>> ", longestWord);
}
const longString = "Web Development Tutorial";

findLongest(longString);
//#endregion

//?  Exercise 22
//#region
// Write a function that receives as a parameter a string and replaces all "a" with "1". e.g.: "JavaScript" will become "J1v1Script".

function replaceLetter(string, letter, replacement) {
  let modifiedString = "";
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === letter) {
      // modifiedString = modifiedString.concat(replacement);
      modifiedString += replacement;
    } else {
      // modifiedString = modifiedString.concat(string.charAt(i));
      modifiedString += string.charAt(i);
    }
  }
  console.log("modifiedString :>> ", modifiedString);
}
const stringToModify = "JavaScript";

replaceLetter(stringToModify, "a", "1");

function replaceLetter2(string, letter, replacement) {
  const modifiedString = string.split(letter).join(replacement);
  console.log("modifiedString :>> ", modifiedString);
}
const stringToModify2 = "Paradise";
replaceLetter2(stringToModify2, "a", "1");

//#endregion

//?  Exercise 23
//#region
// Write a JavaScript function that converts the first letter of every word in a string to uppercase. For example, if const x = "prince of persia"; then the output should be "Prince Of Persia".

function capitalise(string) {
  const array = string.split(" ");
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  const capitalisedString = array.join(" ");
  console.log("capitalisedString :>> ", capitalisedString);
}
const stringToCapitalise = "prince of persia";

capitalise(stringToCapitalise);

//#endregion

//?  Exercise 24
//#region
// Write a function that by sending a number as parameter, tells you all the even numbers before it. For example, if you send to the function the number 9, it should print 2,4,6,8.

function evenBefore(num) {
  const evenBeforeArray = [];
  for (let i = 0; i < num; i++) {
    if (i !== 0 && i % 2 === 0) {
      evenBeforeArray.push(i);
    }
  }
  console.log("even numbers before " + num + " :>>", evenBeforeArray);
}

evenBefore(9);
//#endregion

//?  Exercise 25
//#region
// Write a function that takes two numbers as parameters, then tells you the odd numbers between them. For instance, if you send the numbers 1 and 13 as parameters, it should print 1,3,5,7,9,11,13.

function oddBetween(num1, num2) {
  const oddBetweenArray = [];
  let smallerNum;
  let biggerNum;
  if (num1 > num2) {
    smallerNum = num2;
    biggerNum = num1;
  }
  if (num1 < num2) {
    smallerNum = num1;
    biggerNum = num2;
  }
  if (num1 === num2) {
    console.log("numbers are the same,nothing in between ");
    return;
  }
  for (let i = num1; i <= num2; i++) {
    if (i !== 0 && i % 2 !== 0) {
      oddBetweenArray.push(i);
    }
  }
  console.log(
    "odd numbers between " + smallerNum + " and " + biggerNum + " :>>",
    oddBetweenArray
  );
}

oddBetween(3, 13);
//#endregion

//?  Exercise 26
//#region
// Write a function that receives an array and only prints the values that repeat. For example, given the following array, the function will print 6,23,33,100.
const arrayWithRepeatedNums = [
  3, 3, 3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23,
  12, 99, 100,
];

function findDuplicates(array) {
  const checkedNumbers = [];
  const duplicatedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (
      checkedNumbers.includes(array[i]) &&
      !duplicatedArray.includes(array[i])
    ) {
      duplicatedArray.push(array[i]);
    } else {
      checkedNumbers.push(array[i]);
    }
  }
  console.log("duplicatedArray :>> ", duplicatedArray);
}

findDuplicates(arrayWithRepeatedNums);

function findDuplicates2(array) {
  const duplicatedArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j] && !duplicatedArray.includes(array[j])) {
        duplicatedArray.push(array[j]);
      }
    }
  }
  console.log("duplicatedArray2 :>> ", duplicatedArray);
}

findDuplicates2(arrayWithRepeatedNums);
//#endregion

//! DOM Manipulation

//?  Exercise 27
//#region
// Now let's add content to an HTML document instead of writing to the console. Write a function called myBandList() that will list your favorite bands. Start with an empty HTML page that contains a level 1 heading "My Favorite Bands" and an empty unordered list with ID band-list. Your function should use the JavaScript DOM to create li elements and add them to the unordered list, with each li element being a string in an array.

function myBandList(array) {
  // const ulContainer = document.querySelector("ul");
  const ulContainer = document.getElementById("bands");
  for (let i = 0; i < array.length; i++) {
    const li = document.createElement("li");
    li.innerText = array[i];

    ulContainer.appendChild(li);
  }
}
myBandList(["Dire Straits", "Kansas", "Steely Dan", "pdigy"]);
//#endregion

//?  Exercise 28
//#region
// Write a function called addMultTable(rows, cols) that will create a multiplication table like this. Start with an empty HTML page that only contains a level 1 heading.

function addTable(rows, cols) {
  const tableContainer = document.querySelector(".table-container");
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    tableContainer.appendChild(row);

    for (let j = 0; j < cols; j++) {
      const col = document.createElement("td");
      col.innerText = j + 1;
      row.appendChild(col);
    }
  }
}
addTable(10, 20);
//#endregion
