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
