console.log(products);

const displayProducts = (productsArray) => {
  const cardsContainer = document.querySelector(".row");

  for (let i = 0; i < productsArray.length; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "col-sm-6 col-md-4 col-lg-2");
    cardContainer.classList.add("card");
    // cardContainer.setAttribute("style", "width: 18rem;");
    // cardContainer.setAttribute("style", "width: 250px;");

    if (i % 2 === 0) {
      cardContainer.classList.add("border-primary");
    }
    if (productsArray[i].category === "men's clothing") {
      cardContainer.classList.add("text-bg-danger");
    }
    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", productsArray[i].image);
    cardImage.setAttribute("alt", "picture of a product");
    // cardImage.setAttribute("style", "width: 250px;");

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = productsArray[i].title;

    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-text");
    cardDescription.innerText = productsArray[i].description;

    const cardPrice = document.createElement("p");
    cardPrice.classList.add("card-text");
    cardPrice.innerText = productsArray[i].price + " €";

    cardContainer.appendChild(cardImage);
    cardBody.appendChild(cardTitle);
    // cardBody.appendChild(cardDescription);
    cardBody.appendChild(cardPrice);
    cardContainer.appendChild(cardBody);
    cardsContainer.appendChild(cardContainer);
  }
};

function addButtonEvent() {
  //1. Locate the html element
  const myButton = document.querySelector(".btn");

  //2. add the event listener
  myButton.addEventListener("click", function () {
    alert("you clicke me");
  });
}
function changeButtonBackground() {
  const myButton = document.querySelector(".btn");
  myButton.setAttribute("style", "background-color:red");

  // const bgColor = myButton.getAttribute("style");
  // if (bgColor === "background-color:red") {
  //   console.log("bgColor :>> ", bgColor);
  //   console.log("true");
  //   myButton.setAttribute("style", "background-color:blue");
  // }
  // myButton.setAttribute("style", "font-weight:bold");
}
function changeButtonBackground2() {
  const myButton = document.querySelector(".btn");

  const bgColor = myButton.getAttribute("style");
  if (bgColor === "background-color:red") {
    console.log("bgColor :>> ", bgColor);
    console.log("true");
    myButton.setAttribute("style", "background-color:blue");
  }
  // myButton.setAttribute("style", "font-weight:bold");
}

function chageColorEvent() {
  const myButton = document.querySelector(".btn");
  myButton.addEventListener("mouseenter", changeButtonBackground);
  myButton.addEventListener("mouseleave", changeButtonBackground2);
}
displayProducts(products);
addButtonEvent();
chageColorEvent();
function calculator(num1, num2, operationType) {
  // if (operationType === "sum") {
  //   const sum = num1 + num2;
  //   return sum;
  // }
  // if (operationType === "sub") {
  //   const sum = num1 - num2;
  //   return sum;
  // }
  if (typeof operationType !== "function") {
    alert("you need to select a mathematical operation");
    return;
  }
  const result = operationType(num1, num2);
  return result;
}

function sum(a, b) {
  const result = a + b;
  return result;
}
function sub(a, b) {
  const result = a - b;
  return result;
}
function revealNumbers(a, b) {
  // console.log("you typed numbers " + a + " and " + b);
  return "you typed numbers " + a + " and " + b;
}

// console.log(calculator(1, 2, "sum"));
// console.log(calculator(1, 2, "sub"));
// console.log(calculator(1, 2, sum));
// console.log(calculator(1, 2, "sub"));
// console.log(calculator(1, 2, revealNumbers));
