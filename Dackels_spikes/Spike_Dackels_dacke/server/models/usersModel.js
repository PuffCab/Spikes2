import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      require: false,
    },
  },
  {
    timeStamp: {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
  }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
