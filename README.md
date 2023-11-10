# Login 기능 구현

## Installation / Execution

- Server (dir: server)

```bash
  $ yarn && yarn server
```

- Client (dir: client)

```bash
  $ yarn && yarn dev
```

- 통합 (dir: server)

```bash
  $ yarn dev
```

<br />

## Frontend

### Tech Stack

![React](https://img.shields.io/badge/react-00cbff?style=for-the-badge&logo=react&logoColor=white) **v18.2.0** &nbsp;&nbsp;
![Typescript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) **v4.9.3** &nbsp;&nbsp;
![Vite](https://img.shields.io/badge/vite-8E6EFE?style=for-the-badge&logo=vite&logoColor=white) **v4.1.0**

- **[axios](https://www.npmjs.com/package/bcrypt) :** A bcrypt library for NodeJS. / 문자를 암호화하기 위해 hash(다지다)해주는 역할
- **[localforage](https://www.npmjs.com/package/cookie-parser) :** Parse HTTP request cookies / cookie를 request하거나 또는 response 시에 설정 할 수 있고 편리하게 사용하는 미들웨어
- **[match-sorter](https://www.npmjs.com/package/cookie-parser) :** Parse HTTP request cookies / cookie를 request하거나 또는 response 시에 설정 할 수 있고 편리하게 사용하는 미들웨어
- **[react-icons](https://www.npmjs.com/package/cookie-parser) :** Parse HTTP request cookies / cookie를 request하거나 또는 response 시에 설정 할 수 있고 편리하게 사용하는 미들웨어
- **[sort-by](https://www.npmjs.com/package/cookie-parser) :** Parse HTTP request cookies / cookie를 request하거나 또는 response 시에 설정 할 수 있고 편리하게 사용하는 미들웨어

<br />

### Issue

1. [브라우저에서 CORS 일시적 해결법](https://github.com/youngcodej22/login-with-TS-React/blob/main/docs/frontend/01_cors.md)

<br />

## Backend

### Tech Stack

![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) **v18.15.0** &nbsp;&nbsp;
![NPM](https://img.shields.io/badge/NPM-C52424?style=for-the-badge&logo=NPM&logoColor=white) **v9.5.0**

- **[bcrypt](https://www.npmjs.com/package/bcrypt) :** A bcrypt library for NodeJS. / 문자를 암호화하기 위해 hash(다지다)해주는 역할
- **[cookie-parser](https://www.npmjs.com/package/cookie-parser) :** Parse HTTP request cookies / cookie를 request하거나 또는 response 시에 설정 할 수 있고 편리하게 사용하는 미들웨어
- **[cors](https://www.npmjs.com/package/cors) :** Node.js CORS middleware / Cross-Origin-Resource-Sharing을 http header를 통해 허가하거나 거절하는 것을 설정
- **[dotenv](https://reactnative.dev/) :** Loads environment variables from .env file / .env라는 환경설정 파일과 연결하여 저장된 변수를 사용
- **[express](https://www.npmjs.com/package/express) :** Fast, unopinionated, minimalist web framework / 미니멀리스트 Node.js Framework
- **[express-async-handler](https://www.npmjs.com/package/express-async-handler) :** Express Error Handler for Async Functions / 비동기 함수를 에러 핸들러이며 메인 코드에서 try~catch를 생략할 수 있게 해준다.
- **[express-rate-limit](https://www.npmjs.com/package/express-rate-limit) :** Basic IP rate-limiting middleware for Express. Use to limit repeated requests to public APIs and/or endpoints such as password reset. / 반복되는 request에 대한 제한 설정을 할 수 있다. 예를 들어 '로그인'에 경우.
- **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) :** JSON Web Token implementation (symmetric and asymmetric) / json 베이스인 데이터(유저정보)를 암호화(HS256)해서 token으로 만든다.
- **[mongoose](https://www.npmjs.com/package/mongoose) :** MongoDB ODM(Object Data Modeling) / Object와 MongoDB의 데이터를 Mapping하여 호환성을 만들어내고, 간편한 CRUD를 가능하게 한다.
- **[mongoose-sequence](https://reactnative.dev/) :** Very generic autoincrement plugin for mongoose / mongoose에서 autoincrement를 편리하게 할 수 있는 library다.
- **[uuid](https://www.npmjs.com/package/uuid) :** RFC4122 (v1, v4, and v5) UUIDs / 고유 식별자를 만들어 내는 library다.
- **[concurrently](https://www.npmjs.com/package/concurrently) :** Run commands concurrently / frontend, backend에 대한 script를 동시에 실행 시킬 수 있도록 도와준다.

<br />

### Issue

1. [mongoose-sequence, API 테스트 request 시 무한 로딩](https://github.com/youngcodej22/login-with-TS-React/blob/main/docs/backend/01_mongoose-sequence-conflict.md)
