function logNumbers() {
  const numbers = [1, 2, 3, 4];
  for (let i = 0; i < numbers.length; i++) {
    console.log("numbers[i] :>> ", numbers[i]);
  }
  logGreet();
}

function logGreet() {
  console.log("hey there");
}

// logNumbers();

function resusableGreet(studentName, greet) {
  console.log(greet + " " + studentName[0]);
}

// resusableGreet("Thomas", "Good Morning");
// resusableGreet("Hassan", "Good Evening");
// resusableGreet("Good Evening", "Hassan");
const studentName = "Diogo";
const greet = "Morgen!";
// resusableGreet(studentName, greet);
// resusableGreet(greet, studentName);
const student = { name: "Maria", course: "fullStack" };
const studentsArray = ["Diogo", "Maria"];
// resusableGreet(student, greet);
// resusableGreet(studentsArray, greet);

function sum(a, b) {
  const sumResult = a + b;
  //   console.log("sumResult :>> ", sumResult);
  // return "this is the function's return";
  return sumResult;
  console.log("this is is never gonna run");
}

// sum(4, 7);
console.log(sum(100, 400));
const sumResult = sum(1000, 69739);
console.log("sumResult :>> ", sumResult);

const myName = "asdasd";
{
  const myName = "asdasd";
}

function calculateBill(dish, drinks) {
  const totalBill = dish + drinks;
  console.log("totalBill :>> ", totalBill);
  return totalBill;
}

const pasta = 10;
const wine = 5;
const totalBill = calculateBill(pasta, wine);

function getChange(totalBill, totalMoney) {
  console.log("totalBill, totalMoney :>> ", totalBill, totalMoney);
  const change = totalMoney - totalBill;
  console.log("change :>> ", change);

  console.log("typeof totalMoney :>> ", typeof totalMoney);
  if (typeof totalMoney !== "number") {
    console.log("we don't accept that currency");
    return;
  }

  if (change > 0) {
    console.log("your change is: ", change);
  } else if (change < 0) {
    const numberToDisplay = -5 * -1;
    console.log("you are " + numberToDisplay + " short.");
  } else {
    console.log("you don't get any change");
  }
}
const myMoney = 10;
const myMoney2 = "30€";

// getChange(calculateBill(pasta, wine), myMoney);
// getChange(totalBill, myMoney);
getChange(totalBill, myMoney2);

// For the exercises

// DO NOT use : Math.min() , Math.max()
// you could use array methods like .sort() , .join(). .split() ..and similar methods
// for/while
