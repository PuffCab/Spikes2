import jwt from "jsonwebtoken";

const issueToken = (userId) => {
  const payload = {
    sub: userId,
  };

  const options = {
    expiresIn: "1 day",
    audience: "App users",
  };
  const secretOrPrivateKey = "some very complicated password";

  const token = jwt.sign(payload, secretOrPrivateKey, options);
  return token;
};

export { issueToken };
