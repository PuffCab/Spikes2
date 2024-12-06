import DishesModel from "../models/dishesModel.js";

const getAllDishes = async (req, res) => {
  // console.log("req :>> ", req);
  const { countryCode } = req.query;
  console.log("countryCode :>> ", countryCode);

  if (countryCode) {
    try {
      const allDishes = await DishesModel.find({
        countryCode: req.query.countryCode,
      }).populate({
        path: "country",
        select: ["countryName", "continent", "-_id"],
      });
      if (allDishes.length === 0) {
        return res.status(200).json({
          message: `sorry no dishes for country code ${req.query.countryCode}`,
          countryCode: req.query.countryCode,
        });
      }
      return res.status(200).json({
        message: `this are all the famous dishes from countrycode ${req.query.countryCode}`,
        allDishes,
      });
    } catch (error) {
      return res.status(400).json({
        error: "Something went wrong",
      });
    }
  }
  if (!countryCode) {
    try {
      const allDishes = await DishesModel.find({}).populate({
        path: "country",
        select: ["countryName", "continent", "-_id"],
      });
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
  }
};

const getDishByName = async (req, res) => {
  console.log("req :>> ", req.params);
  try {
    const dish = await DishesModel.findOne({ name: req.params.dishName });

    if (dish) {
      return res.status(200).json({
        dish,
      });
    }
    if (!dish) {
      return res.status(400).json({
        message: "sorry no dish with this name",
      });
    }
  } catch (error) {
    console.log("error :>> ", error);
    return res.status(500).json({
      error: "something went wrong",
    });
  }
};

const getDishesByCountry = async (req, res) => {
  console.log("req.query :>> ", req.params);
  const { country } = req.params;
  const { likes } = req.query;
  console.log("typeof likes :>> ", typeof likes);
  //methods to transform a string into a number
  const likesNumber = Number(likes);
  const likesNumber1 = parseInt(likes);
  const likesNumber2 = +likes;
  console.log("likes :>> ", likesNumber);
  console.log("country :>> ", country);
  if (likes) {
    try {
      const dishesWithLikes = await DishesModel.find({
        country: country,
        likes: { $gte: likesNumber1 },
      }).exec();
      console.log("dishesByCountry :>> ", dishesWithLikes);
      return res.status(200).json({
        dishesWithLikes,
      });
    } catch (error) {
      console.log("error :>> ", error);
    }
  }
  if (!likes) {
    try {
      const dishesByCountry = await DishesModel.find({ country: country });
      if (dishesByCountry.length === 0) {
        return res.status(400).json({
          message: "sorry no dishes for this country",
        });
      }
      if (dishesByCountry.length > 0) {
        return res.status(200).json({
          dishesByCountry,
        });
      }
    } catch (error) {
      console.log("error :>> ", error);
      return res.status(500).json({
        error: "something went wrong",
      });
    }
  }
};
export { getAllDishes, getDishByName, getDishesByCountry };
