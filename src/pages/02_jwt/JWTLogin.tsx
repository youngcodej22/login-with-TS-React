import React, { useState } from "react";
import { getCurrentUserInfoWithToken, loginWithToken } from "../../api/login";
import { UserInfo } from "../../types/user";

const JWTLogin = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const loginSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const loginPayload = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };

    // TODO: 로그인 연결 및 토큰 가져오기 (loginWithToken 함수 사용)
    const loginResult = await loginWithToken(loginPayload);

    // 로그인 실패시 함수를 종료합니다.
    // 로그인 성공시, getCurrentUserInfoWithToken 함수를 호출하여 userInfo를 가져옵니다.
    if (loginResult.result === "fail") return;

    // TODO: 유저 정보 가져오기 (getCurrentUserInfoWithToken 함수 사용)
    // 유저 정보 가져오기 실패시 함수를 종료합니다.
    // 유저 정보 가져오기 성공시, userInfo 상태를 업데이트합니다.
    const userInfo = await getCurrentUserInfoWithToken(
      loginResult.access_token
    );

    if (userInfo === null) return;

    setUserInfo(userInfo);
  };

  return (
    <div>
      <h1>Login with JWT - in memory</h1>
      <form onSubmit={loginSubmitHandler}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit" value="Submit">
          submit
        </button>
      </form>
      <div>
        <h2>User info</h2>
        {JSON.stringify(userInfo)}
      </div>
    </div>
  );
};

export default JWTLogin;
