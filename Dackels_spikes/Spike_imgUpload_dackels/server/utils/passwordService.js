import bcrypt from "bcrypt";

const encryptPassword = async (rawPassoword) => {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const hashedPassword = await bcrypt.hash(rawPassoword, salt);

    return hashedPassword;
  } catch (error) {
    console.log("error hashing password :>> ", erro);
    return null;
  }
};

export { encryptPassword };
