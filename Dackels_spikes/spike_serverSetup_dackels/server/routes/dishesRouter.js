import express from "express";
import { getAllDishes } from "../controller/dishesController.js";

const dishesRouter = express.Router();

dishesRouter.get("/all", getAllDishes);

export default dishesRouter;
