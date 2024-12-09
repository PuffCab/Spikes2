import React, { ChangeEvent, FormEvent, useState } from "react";
import { User } from "../types/customTypes";

function Register() {
  const [selectedFile, setSelectedFile] = useState<File | string>("");
  const [newUser, setNewUser] = useState<User | null>(null);

  const handleAttachImage = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e :>> ", e);
    const file = e.target.files?.[0] || "";

    setSelectedFile(file);
  };

  const handleImageSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("avatar", selectedFile);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };
    try {
      const response = await fetch(
        "http://localhost:5000/api/user/avatarUpload",
        requestOptions
      );
      if (!response.ok) {
        throw new Error("something went wrong in the resoponse");
      }
      if (response.ok) {
        const result = await response.json();
        console.log("result :>> ", result);
        setNewUser({ ...newUser!, userImage: result.avatar.secureUrl });
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const handleRegisterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser!, [e.target.name]: [e.target.value] });
  };

  const handleRegisterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    if (newUser) {
      urlencoded.append("userName", newUser.userName);
      urlencoded.append("email", newUser.email);
      urlencoded.append("password", newUser.password);
      urlencoded.append(
        "avatar",
        newUser.userImage
          ? newUser.userImage
          : "https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
      );
    }
    if (!newUser?.email) {
      alert("email is missiong");
    }

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };
    try {
      const request = await fetch(
        "http://localhost:5000/api/user/register/",
        requestOptions
      );
      const result = await request.json();
      console.log("result :>> ", result);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  return (
    <div>
      <h2>Register</h2>
      <div>
        <form onSubmit={handleImageSubmit}>
          <input
            type="file"
            name="avatar"
            id="avatar"
            onChange={handleAttachImage}
            accept="file/jpg, image/jpeg, image/png"
          />
          <button>Upload Picture</button>
        </form>
        #
        <div>
          <form onSubmit={handleRegisterSubmit}>
            <input
              type="userName"
              name="userName"
              id="userName"
              onChange={handleRegisterChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleRegisterChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleRegisterChange}
            />
            <button>Register</button>
          </form>
        </div>
      </div>
      <div>
        {/* {console.log("newUser image", newUser.userImage)} */}
        {newUser && (
          <img
            src={newUser.userImage}
            alt="user avatar picture"
            style={{ width: "200px" }}
          />
        )}
      </div>
    </div>
  );
}

export default Register;
