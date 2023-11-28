// import { BASE_URL } from "./const";
import { saveAccessTokenToLocalStorage } from "../utils/accessTokenHandler";
import { UserProfile } from "../types/user";
import { axiosClient } from "./axiosClient";

// type LoginResult = "success" | "fail" | undefined;
type LoginResult =
  | {
      result: "success";
      message: string;
    }
  | {
      result: "fail";
      message: string;
    }
  | undefined;

export interface LoginRequest {
  username: string;
  password: string;
}

//TODO:: LOGIN: POST => {BASE_URL}/auth
export const loginWithToken = async (
  args: LoginRequest
): Promise<LoginResult> => {
  try {
    // * Promise<Response> return
    const loginRes = await axiosClient.post("/auth", JSON.stringify(args));

    // * 서버에서 token 안주면 401에러. 인증 자격 증명이 안됨을 의미.
    if (loginRes.status === 200 && loginRes.statusText === "OK") {
      const loginResponseData = loginRes.data;
      saveAccessTokenToLocalStorage(loginResponseData.accessToken);

      return {
        result: "success",
        message: "로그인 성공",
      };
    }
  } catch (error: any) {
    if (error.response.status === 401) {
      return {
        result: "fail",
        message: "로그인 실패",
      };
    }
  }
};

//TODO:: LOGIN: POST => {BASE_URL}/users/profile
// * use localstorage
export const getCurrentUserInfo = async (): Promise<UserProfile | null> => {
  // argument로 전달받은 token을 Authorization header에 Bearer token으로 넣어주세요.
  try {
    const userInfoRes = await axiosClient.get("/users/profile");

    if (userInfoRes.status === 200 && userInfoRes.statusText === "OK") {
      const userInfoResData = userInfoRes.data;
      return userInfoResData as Promise<UserProfile>;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

// * '/items'
export const getItems = async (): Promise<Item[] | null> => {
  const itemRes = await axiosClient.get("/items");

  return itemRes.status === 200 ? itemRes.data : null;
};

// TODO 4-2: GET, '/all-items' 호출
export const getAllItems = async (): Promise<Item[] | null> => {
  const itemsAllRes = await axiosClient.get("/all-items");

  return itemsAllRes.status === 200 ? itemsAllRes.data : null;
};

// ! 프론트에서 세션id는 남아있고 서버에서만 detroy된다.
export const logout = async (): Promise<void> => {
  await axiosClient.post("/logout");
};
