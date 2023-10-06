export interface UserInfo {
  name: string;
}

export interface User {
  username: string;
  password: string;
  userInfo: UserInfo;
}

export const users: User[] = [
  {
    username: "blue",
    password: "1234",
    userInfo: { name: "blueStragglr" },
  },
  {
    username: "white",
    password: "1234",
    userInfo: { name: "whiteDwarf" },
  },
  {
    username: "red",
    password: "1234",
    userInfo: { name: "redGiant" },
  },
];

export const _secret: string = "1234qwer!@#$";
