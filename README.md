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
