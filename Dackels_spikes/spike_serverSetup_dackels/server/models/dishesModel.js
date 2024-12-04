import mongoose from "mongoose";

//1. create Schema

const dishesSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  countryCode: {
    type: String,
    require: true,
  },
  likes: {
    type: String,
    require: false,
  },
});

//2. turn schmea into a model

const DishesModel = mongoose.model("Dish", dishesSchema);

export default DishesModel;
