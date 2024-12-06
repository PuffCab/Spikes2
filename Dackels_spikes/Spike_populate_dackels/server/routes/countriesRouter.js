import express from "express";
import { getAllCountries } from "../controller/contriesController.js";

const countriesRouter = express.Router();

countriesRouter.get("/all", getAllCountries);

export default countriesRouter;
