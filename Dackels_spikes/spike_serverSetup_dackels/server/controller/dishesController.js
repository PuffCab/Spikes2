import DishesModel from "../models/dishesModel.js";

const getAllDishes = async (req, res) => {
  try {
    const allDishes = await DishesModel.find({});
    if (allDishes.length === 0) {
      return res.status(400).json({
        message: "Sorry, nothing at the moment",
        // allDishes: allDishes,
      });
    }

    // console.log("allDishes :>> ", allDishes);
    return res.status(200).json({
      message: "this are all the famous dishes",
      allDishes,
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({
      error: "Something went wrong",
    });
  }
};

export { getAllDishes };
