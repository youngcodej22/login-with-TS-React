// export interface UserInfo {
//   name: string;
// }

type ROLE_USER = "user";
type ROLE_ADMIN = "admin";

export const UserRole: ROLE_USER = "user";
export const AdminRole: ROLE_ADMIN = "admin";

export type UserRole = ROLE_USER | ROLE_ADMIN;

export interface UserProfile {
  userProfile: {
    username: string;
    role: string[];
    // role: UserRole[];
  };
}

export interface User {
  userId: number;
  username: string;
  password: string;
  userProfile: UserProfile;
}

export interface Item {
  id: number;
  owner: {
    userId: number;
  };
  content: {
    title: string;
    body: string;
  };
}
