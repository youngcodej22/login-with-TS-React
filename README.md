# login-with-TS-React

> Typescript와 React를 사용하여 Login 기능을 차근 차근 구현해보자!

## 1. 프로젝트 사용 package

## 2. 실행 방법

```bash
  $ yarn && yarn dev
```

## 3. 자가 Q&A

1. `useState`를 쓸 것인가? `useRef`를 쓸 것 인가?

- useRef를 사용하여 React의 입력 요소 값에 액세스할 수 있지만, useRef는 일반적으로 입력 필드에 초점을 맞추거나 입력 요소의 속성에 액세스하는 등 DOM과 직접 상호 작용해야 할 때 사용된다는 점을 이해하는 것이 중요합니다. 구성 요소 상태 내에서 입력 값을 캡처하고 관리하려는 경우 이전 예제에 표시된 것처럼 useState를 사용하는 것이 더 일반적이며 권장됩니다.

---

### 참고 자료

- [MDN-FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [mock API](https://mockapi.io/)
- [호출할만한 api](https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock)

---

## 일지

#### 1. 초기 아주 간단한 로그인 기능 구현.

- 원티드 프리온보딩 로그인 수업에 참여하였고 사전 과제로 로그인 기능을 구현하였다.
  `useRef`를 통해서 `input`에 접근하여 `form` data를 가져오는 것이 일반적인 줄 알았지만 수업에서 `new FormData` API를 통하여 `entries()`를 통해 `key, value`를 가져오는 형태를 사용하였다. 예전에 봤었지만 잊고 있던 방식이었고 다시 한번 공부하는 계기가 되었다. 또한 수업 시간 답에서는 `formData.get("username") as string,`으로 id와 password를 따로따로 가져오는 방식도 사용하였다.
- Typescript가 익숙하지 않지만 `type`과 `interface`의 사용방식도 느끼게 되었다. `type`은 말그대로 type을 정의할 때 사용하고 interface는 정의해야할 타입들을 구조적으로(객체느낌) 정의할 때 사용하는 틀과 같다고 느꼈다. 이부분에 대해서는 좀 더 다른 분들의 코드를 찾아보면서 공부해봐야 할 것 같다.

#### 2. JWT를 활용

JWT를 공부하면서 Token 방식이 가지는 장점(stateless 인증방식)과 단점을 알게 되었다. 그렇기 때문에 서비스 성격에 따라 token방식이 될 수도 또는 세션과 같이 다른 방식이 될 수도 있다. 이는 백엔드개발자와의 협업을 통해 논의를 하고 결정할 수 있는 부분될 것이다. 아래는 실습하면서 다시 한번 상기시키기 위해 정리한 내용들이다.

###### 👉 흐름

1. 유저의 ID/PW를 입력 후 Server에 Request를 하고 인증(authentication)
2. Response: JWT(JsonWebToken)를 Response(accessToken, refreshToken) 받는다.
3. Token을 통해 권한부여(authorization)을 받고 AutoLogin페이지로 이동할 수 있다.
4. 메모리(변수,state 등)에 저장된 accessToken으로 Request
5. accessToken이 만료가 되었다면
6. refreshToken으로 accessToken을 Re-Request
7. 메모리에 저장된 Re-Request한 accessToken을 Header에 담아 정보 Request

###### 👉 중요

1. JWT처럼 token 방식이 혹여나 탈취당하여 decode(복호화)되는 경우에 유저의 정보가 노출될 수 있다. 그렇기 때문에 JWT payload 부분을 유의하자.
2. 기본적으로 XSS, CSRF 공격에 대비할 수 있도록 해야한다.

- 만약 `LocalStorage`에 token을 저장한다면 XSS 공격으로 부터 굉장히 위험할 것이다.
- **RefreshToken**는 accessToken을 재발급하는 용도로만 사용된다.
- User 로그인 시 RefreshToken은 HTTPOnly Cookie(**Set 설정은 서버에서 정한다**)로 발급(JS로 접근 불가) / 이때, AccessToken은 메모리에 발급(**변수, state 등에 저장**)(짧은 유효기간, 브라우저 Heap메모리는 해킹 당할 수가 없다.) 따로 해도 상관없지만 주로 2개를 같이 받는다.
- 이후, User가 페이지를 돌아다니려고 Request 시에 AccessToken이 만료되었다면 Refresh Token으로 새로운 AccessToken을 발급 받고 다시 로그인한 상태로 페이지를 돌아다닐 수 있다. (AccessToken이 클라이언트에서 만료가 되었거나 날라갔을 때, 클라이언트 HTTPOnly Cookie에 남아있는 RefreshToken으로 재발급, **새로고침 할 때 마다 refreshToken으로 요청해야함**)
- API호출 시에는 보통 토큰 유효한지 체크 / 토큰 정보 받아오는 api 2개가 필요

###### 👉 기타

1. accessToken과 refreshToken의 만료 기한은 서비스 성격에 다르다. 예시로 30분/하루가 될 수도 있다.
