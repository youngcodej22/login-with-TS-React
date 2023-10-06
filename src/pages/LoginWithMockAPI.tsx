import React, { useRef, useState } from "react";
import { UserInfo, User, users, _secret } from "../data/user";

type LoginSuccessMessage = "SUCCESS";
type LoginFailMessage = "FAIL";

interface LoginResponse {
  message: LoginSuccessMessage | LoginFailMessage;
  token: string;
}

const login = async (
  username: string,
  password: string
): Promise<LoginResponse | null> => {
  // TODO: 올바른 username, password를 입력하면 {message: 'SUCCESS', token: (원하는 문자열)} 를 반환하세요.

  const user: User | undefined = users.find((user: User) => {
    return user.username === username && user.password === password;
  });
  return user
    ? {
        message: "SUCCESS",
        token: JSON.stringify({ user: user.userInfo, secret: _secret }),
      }
    : null;
};

const getUserInfo = async (token: string): Promise<{ username: string } | null> => {
  // TODO: login 함수에서 받은 token을 이용해 사용자 정보를 받아오세요.
  return null;
};

const LoginWithMockAPI = () => {
  // ! ref사용대신 formData로 받는다.
  // const idRef = useRef(null);
  // const pwRef = useRef(null);

  const [userInfo, setUserInfo] = useState<UserInfo>({ name: "" });

  const loginSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    // console.log("id", idRef.current.value);

    // TODO: form 에서 username과 password를 받아 login 함수를 호출하세요.
    const formData = new FormData(event.currentTarget);

    let idVal: string = "";
    let passwordVal: string = "";

    for (let [key, value] of formData.entries()) {
      if (key === "userid") {
        idVal = value;
      } else if (key === "userpassword") {
        passwordVal = value;
      }
    }

    const loginRes = await login(idVal, passwordVal);
    if (!loginRes) return;

    const userInfo = await getUserInfo(loginRes.token);
    if (!userInfo) return;

    setUserInfo(userInfo);
  };

  return (
    <div>
      <h1>Login with Mock API - Try</h1>
      <form onSubmit={loginSubmitHandler}>
        {/* TODO: 여기에 username과 password를 입력하는 input을 추가하세요. 제출을 위해 button도 추가하세요. */}
        <div>
          <label htmlFor="userid">
            Enter ID:
            <input type="text" id="userid" name="userid" />
          </label>
          {/* <input type="text" id="userid" name="userid" ref={idRef} /> */}
        </div>
        <div>
          <label htmlFor="userpassword">
            Enter PW:
            <input type="password" id="userpassword" name="userpassword" />
          </label>
          {/* <input
            type="password"
            id="userpassword"
            name="userpassword"
            ref={pwRef}
          /> */}
        </div>
        <button type="submit" value="Submit">
          로그인
        </button>
      </form>
      <div>
        <h2>User info</h2>
        {/* TODO: 유저 정보를 보여주도록 구현하세요. 필요에 따라 state나 다른 변수를 추가하세요. */}
        {/* {JSON.stringify({ username: "blueStragglr" })} */}
        {JSON.stringify(userInfo)}
      </div>
    </div>
  );
};

export default LoginWithMockAPI;
