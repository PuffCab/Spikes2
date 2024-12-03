console.log("document :>> ", document);
const car = {
  name: "asdasd",
};
car.name;
// document.getElementById("h1-id");
// console.log(document.getElementById("h1-id").innerText);

//////// DOM METHODS

///////!
///! GET SINGLE ELEMENTS
//////!

//? By Id
const h1 = document.getElementById("h1-id");
// console.log("h1 :>> ", h1);
const text = h1.innerText;
// console.log("text :>> ", text);

//? by class name
const link = document.querySelector(".link");
// console.log("link :>> ", link.innerHTML);

//? tag name

const h1ByTagName = document.querySelector("h1");
// console.log("h1ByTagName :>> ", h1ByTagName);

//? by id
const h1ById = document.querySelector("#h1-id");
// console.log("h1ById :>> ", h1ById);

///////!
///! GET MULTIPLE ELEMENTS
//////!

//? by tag name

const links = document.getElementsByTagName("li");
console.log("links :>> ", links);
console.log("link1 text :>> ", links[0].innerText);

//? by class

const linksByClass = document.querySelectorAll(".link");
console.log("linksByClass :>> ", linksByClass);
console.log("linksByClass :>> ", linksByClass[1].innerText);

const newLink = document.createElement("li");
newLink.innerText = "New link";

const ul = document.querySelector("ul");
ul.appendChild(newLink);

console.log("links after new Link :>> ", links);

console.log("linksByClass after new link :>> ", linksByClass);

///////!
///! ATTRIBUTE METHODS
//////!

function changeColor() {
  //   console.log("running");
  //   const myH1 = document.querySelector(".blue-h2");
  const myH1 = document.querySelector("h1");
  //   console.log("myH1 :>> ", myH1);
  const myH1Class = myH1.getAttribute("class");
  //   console.log("myH1Class :>> ", myH1Class);

  if (myH1Class === "blue-h2") {
    myH1.className = "green-h2";
  } else {
    myH1.className = "blue-h2";
  }
}

//? Set attribute

const myImg = document.querySelector("img");
myImg.setAttribute("alt", "picture of a weird guy laughing");
myImg.setAttribute("style", "width:250px");
myImg.setAttribute("height", "250px");
///////!
///! CREATE ELEMENTS
//////!
//1. locate the element in which we are gonna place the element inside
const imgContainer = document.querySelector(".img-container");
//2. create a variable that stores the return of using the createElement method
const newImg = document.createElement("img");
// console.log("newImg :>> ", newImg);
//3. define the required attributes of that new element
newImg.setAttribute("src", "quote.jpg");
newImg.setAttribute("alt", "picture of a meme");
newImg.setAttribute("style", "width:250px");
// console.log("newImg :>> ", newImg);

// 4. Append it / add it as a child of the container

imgContainer.appendChild(newImg);

///////!
///! INNERHTML  && CLASSLIST
//////!
const myNav = document.querySelector("nav");
// console.log(myNav.innerHTML);
// console.log(myNav.innerText);
//! everytime you want to manipulate text, use ALWAYS the .innerText property

//? classList allow us to manipulate the attribute class

function changeText() {
  const myLinks = document.getElementsByTagName("li");

  for (let i = 0; i < myLinks.length; i++) {
    // myLinks[i].classList.add("bold-text");
    // myLinks[i].classList.remove("bold-text");
    myLinks[i].classList.toggle("bold-text");
  }
}

///////!
///! VALUE && NAME INPUTS
//////!

function findColor() {
  const colorInputs = document.querySelectorAll("input[type='radio']");
  //   console.log("colorInputs :>> ", colorInputs);
  const messageContainer = document.querySelector("h3");
  for (let i = 0; i < colorInputs.length; i++) {
    // console.log("i :>> ", colorInputs);
    if (colorInputs[i].checked === true) {
      console.log("colorInputs[i] :>> ", colorInputs[i].value);
      messageContainer.innerText =
        "My favorite color to wear today is: " + colorInputs[i].value;
      messageContainer.setAttribute("style", "color:" + colorInputs[i].value);
    }
  }
}

findColor();
