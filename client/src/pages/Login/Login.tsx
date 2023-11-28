import React, { useCallback, useEffect } from "react";
import { getCurrentUserInfo, loginWithToken } from "../../api/login_axios";
import { useRouter } from "../../hooks/useRouter";

const isLoggedIn = async (): Promise<boolean> => {
  const userProfileResponse = await getCurrentUserInfo();
  return userProfileResponse !== null;
};

const Login = () => {
  const { routeTo } = useRouter();

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
    if (loginResult?.result === "fail") {
      alert(loginResult.message);
      return;
    }

    routeTo("/profile");
  };

  const checkLoginStatus = useCallback(async () => {
    const isUserLoggedIn: boolean = await isLoggedIn();

    if (isUserLoggedIn) {
      routeTo("/profile");
      return;
    }
  }, [routeTo]);

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  return (
    <div className="non-logged-in-body">
      <h1>Login with JWT and LocalStorage</h1>
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
    </div>
  );
};

export default Login;
