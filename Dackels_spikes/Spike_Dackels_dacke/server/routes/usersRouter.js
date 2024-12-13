import express from "express";
import {
  avatarUpload,
  login,
  register,
} from "../controller/usersController.js";
import multerUpload from "../middlewares/multer.js";
const usersRouter = express.Router();

usersRouter.post("/avatarUpload", multerUpload.single("avatar"), avatarUpload);
usersRouter.post("/register", register);
usersRouter.post("/login", login);

export default usersRouter;
