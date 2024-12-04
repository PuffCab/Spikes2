import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
import testRouter from "./routes/testRouter.js";

import colors from "colors";
import dishesRouter from "./routes/dishesRouter.js";
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connection to Mongo DB established".bgGreen))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on ${port} port`.bgGreen);
});

app.use("/testApi", testRouter);
app.use("/api/dishes", dishesRouter);
