import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
import testRouter from "./routes/testRouter.js";

import colors from "colors";
import dishesRouter from "./routes/dishesRouter.js";
import countriesRouter from "./routes/countriesRouter.js";
import usersRouter from "./routes/usersRouter.js";
import cloundinaryConfig from "./config/cloudinaryConfig.js";
const app = express();

const port = process.env.PORT || 5000;

function addMiddlewares() {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(cors());
  cloundinaryConfig();
}

async function DBConnection() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection to Mongo DB established".bgGreen);
  } catch (error) {
    console.log("error connection to DB :>> ", error);
  }
}
function startServer() {
  app.listen(port, () => {
    console.log(`Server is running on ${port} port`.bgGreen);
  });
}

function loadRoutes() {
  app.use("/testApi", testRouter);
  app.use("/api/dishes", dishesRouter);
  app.use("/api/countries", countriesRouter);
  app.use("/api/user", usersRouter);
}
//IIFE

(async function () {
  await DBConnection();
  addMiddlewares();
  loadRoutes();
  startServer();
})();
