import express from "express";

const testRouter = express.Router();

testRouter.get("/test", (request, response) => {
  response.send({ message: "This is just a test" });
});

export default testRouter;
