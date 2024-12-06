import CountryModel from "../models/countriesModel.js";

const getAllCountries = async (req, res) => {
  try {
    const allCountries = await CountryModel.find({}).populate({
      path: "typicalDishes",
      select: ["name", "likes", "-_id"],
    });
    //Consider the different scenarios (nothing found ...etc)
    return res.status(200).json({
      allCountries,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong in the server",
    });
  }
};
export { getAllCountries };
