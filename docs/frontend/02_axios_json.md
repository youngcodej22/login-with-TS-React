# Axios Json 데이터를 넘길 때 주의 할 점 with Server

**front에서 넘기는 데이터 key값과 server에서 database에 저장할 key값이 동일해야 한다. 처음 frontend에서는 user라고 하고 server에서는 username이라고 해서 계속 400 에러(Bad Request)가 발생.**

front코드

```js
try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ username, password, roles }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

    // ...
```

대략적인 server 코드 register

```js
const createNewUser = asyncHandler(async (req, res) => {
  const { username, password, roles } = req.body;

  console.log("server username", username);
  console.log("password", password);
  console.log("roles", roles);

  // Confirm data
  if (!username || !password || !Array.isArray(roles) || !roles.length) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // ...
```

**backend에서 문자하나도 주의해야한다. `"http://localhost:5173/"`로 '/'를 붙였더니 안되고 `"http://localhost:5173"` 빼야지가능;;**

```js
// whitelist
const allowedOrigins = ["http://localhost:5173"];

module.exports = allowedOrigins;
```
