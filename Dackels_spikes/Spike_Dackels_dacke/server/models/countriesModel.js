import mongoose from "mongoose";

//1. Create a schema for the meals documents

const countrySchema = new mongoose.Schema({
  countryName: {
    type: String,
    required: true,
  },
  continent: {
    type: String,
    required: true,
  },
  typicalDishes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Dish" }],
  likes: {
    type: Number,
  },
});

const CountryModel = mongoose.model("Country", countrySchema);
export default CountryModel;
