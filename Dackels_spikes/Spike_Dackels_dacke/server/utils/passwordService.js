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

const isPasswordCorrect = async (rawPassword, hashedPassword) => {
  const isPasswordMatch = await bcrypt.compare(rawPassword, hashedPassword);
  if (isPasswordMatch) return true;
  if (!isPasswordMatch) return false;
};

export { encryptPassword, isPasswordCorrect };
