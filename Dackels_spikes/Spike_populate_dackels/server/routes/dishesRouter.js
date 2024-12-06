import express from "express";
import {
  getAllDishes,
  getDishByName,
  getDishesByCountry,
} from "../controller/dishesController.js";

const dishesRouter = express.Router();

dishesRouter.get("/all", getAllDishes);
dishesRouter.get("/all/:dishName", getDishByName);
dishesRouter.get("/all/countries/:country", getDishesByCountry);

export default dishesRouter;
