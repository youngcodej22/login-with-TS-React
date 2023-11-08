import { BASE_URL } from "./const";
import { saveAccessTokenToLocalStorage } from "../utils/accessTokenHandler";
import { UserInfo } from "../types/user";
import { fetchClient } from "./fetchClient";

/* 
  ! nest.js로 만든 형식
  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JWTAuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }
*/

type LoginResult = "success" | "fail";

export type LoginResultWithToken =
  | {
      result: "success";
      access_token: string;
    }
  | {
      result: "fail";
      access_token: null;
    };

export interface LoginRequest {
  username: string;
  password: string;
}

/*********
 *  실습 2-1
 * */

export const loginWithToken = async (
  args: LoginRequest
): Promise<LoginResultWithToken> => {
  // TODO(2-1): 로그인 API 호출 및 토큰 반환하기
  // POST, `${ BASE_URL }/auth/login`을 호출하세요.
  // API Spec은 강의 자료를 참고하세요.
  // access_token 발급에 성공한 경우에는 { result: 'success', access_token: string } 형태의 값을 반환하세요.

  // * Promise<Response> return
  const loginRes = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });

  // * 서버에서 token 안주면 401에러. 인증 자격 증명이 안됨을 의미.
  if (loginRes.ok) {
    // * loginRes.json()은 Promise를 return
    const loginResponseData = await loginRes.json();

    return {
      result: "success",
      access_token: loginResponseData.access_token,
    };
  } else if (loginRes.status === 401) {
    alert("401에러 unauthorized. id 또는 pw가 틀렸습니다.");
  }

  return {
    result: "fail",
    access_token: null,
  };
};

export const getCurrentUserInfoWithToken = async (
  token: string
): Promise<UserInfo | null> => {
  // TODO(2-1): 함수에서 토큰을 직접 주입받아 사용하기
  // GET, `${ BASE_URL }/profile`을 호출하세요.
  // argument로 전달받은 token을 Authorization header에 Bearer token으로 넣어주세요.
  // API Spec은 강의 자료를 참고하세요.
  // 유저 정보 조회에 성공한 경우에는 UserInfo 타입의 값을 반환하세요.

  const userInfoRes = await fetch(`${BASE_URL}/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (userInfoRes.ok) {
    // const userResponseData = await userInfoRes.json();
    // return userResponseData;

    return userInfoRes.json() as Promise<UserInfo>;
  }

  return null;
};

/*********
 *  실습 2-2
 * */

export const login = async (args: LoginRequest): Promise<LoginResult> => {
  // TODO(2-2): 로그인 API 호출 및 access token 로컬스토리지에 저장하기
  // POST, `${ BASE_URL }/auth/login`을 호출하세요.
  // API Spec은 강의 자료를 참고하세요.
  // access_token 발급에 성공한 경우에는 saveAccessTokenToLocalStorage 함수를 호출하여 access_token을 localStorage에 저장하고 'success'를 반환하세요.
  const loginRes = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });

  if (loginRes.ok) {
    const loginResponseData = await loginRes.json();
    saveAccessTokenToLocalStorage(loginResponseData.access_token);
    return "success";
  } else if (loginRes.status === 401) {
    alert("401에러 unauthorized. id 또는 pw가 틀렸습니다.");
  }

  return "fail";
};

export const getCurrentUserInfo = async (): Promise<UserInfo | null> => {
  // TODO(2-2): 로컬스토리지에서 토큰을 가져와 사용하기
  // GET, `${ BASE_URL }/profile`을 호출하세요.
  // 로컬 스토리지에 있는 token을 getAccessTokenFromLocalStorage로 가져와서 Authorization header에 Bearer token으로 넣어주세요.
  // API Spec은 강의 자료를 참고하세요.
  // 유저 정보 조회에 성공한 경우에는 UserInfo 타입의 값을 반환하세요.
  const userInfoRes = await fetchClient(`${BASE_URL}/profile`, {
    method: "GET",
  });

  if (userInfoRes.ok) {
    return userInfoRes.json() as Promise<UserInfo>;
  }

  return null;
};
