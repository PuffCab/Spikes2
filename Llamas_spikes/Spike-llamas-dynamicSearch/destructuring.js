//? Object destructuring

const car = {
  model: "opel",
  doors: 4,
  extras: {
    hifi: true,
  },
};

// const model = car.model;
// const doors = car.doors;
// console.log("model :>> ", model);

// Desctructuring
const { model, doors, extras } = car;
const { hifi } = car.extras;
console.log("model, doors :>> ", model, doors, hifi, extras);

//? Array Destructuring

const colors = ["red", "yellow", "orange"];

// const red = colors[0];

const [color1, color2] = colors;
const [_, __, color3] = colors;
console.log(color1, color2);
console.log("color3 :>> ", color3);
