export type UserImageType = {
  avatar: string;
};

// export type User = {
//   userName: string;
//   email: string;
//   password: string;
// };
export interface User extends UserImageType {
  userName: string;
  email: string;
  password?: string;
  avatar?: string;
}

export type Token = string;

export type LoginOkResponse = {
  message: string;
  user: {
    email: string;
    userName: string;
    avatar: string;
  };
  token: Token;
};
