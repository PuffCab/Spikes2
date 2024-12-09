export type UserImageType = {
  userImage: string;
};

// export type User = {
//   userName: string;
//   email: string;
//   password: string;
// };
export interface User extends UserImageType {
  userName: string;
  email: string;
  password: string;
}
