import UserModel from "../models/usersModel.js";
import { encryptPassword } from "../utils/passwordService.js";
import { pictureUpload } from "../utils/pictureUpload.js";

const avatarUpload = async (req, res) => {
  console.log("req.file :>> ", req.file);

  if (!req.file) {
    return res.status(500).json({
      error: "file extension not supported",
    });
  }

  try {
    const uploadedImage = await pictureUpload(req.file.path);

    if (!uploadedImage) {
      console.log("upload failed");
      return res.status(500).json({
        error: "File couldn't be uploaded",
      });
    }
    if (uploadedImage) {
      return res.status(200).json({
        message: "Avatar succesfully uploaded",
        avatar: {
          secureUrl: uploadedImage.secure_url,
          publicId: uploadedImage.public_id,
        },
      });
    }
  } catch (error) {
    console.log("upload failed");
    return res.status(500).json({
      error: "Something went wrong uploading the file",
    });
  }
};

const register = async (req, res) => {
  console.log("req.body :>> ", req.body);
  const { email, password, avatar, userName } = req.body;
  //1.input validation
  //2.Check if user exists already in DB (check email..unique field)

  try {
    const existingUser = await UserModel.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({
        message: "Sorry, email already in use",
      });
    }

    if (!existingUser) {
      //3.Hash password coming in the request.

      const hashedPassword = await encryptPassword(password);

      if (!hashedPassword) {
        return res.status(500).json({
          error: "Sorry, try again later",
        });
      }
      if (hashedPassword) {
        const newUser = new UserModel({
          email: email,
          password: hashedPassword,
          avatar: avatar,
          userName: userName,
        });
        const storedUser = await newUser.save();
        return res.status(201).json({
          message: "register succesfully",
          storedUser,
        });
      }
    }
  } catch (error) {
    console.log("error registering user :>> ", error);
    return res.status(500).json({
      error: "Sorry, something went wrong",
    });
  }
};
export { avatarUpload, register };
