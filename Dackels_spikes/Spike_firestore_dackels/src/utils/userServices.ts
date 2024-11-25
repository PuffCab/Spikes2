import { User } from "../types/customTypes";

const checkUserStatus = (user: User | null) => {
  const isUserLoggedin = user ? true : false;
  return isUserLoggedin ? true : false;
};

export { checkUserStatus };
