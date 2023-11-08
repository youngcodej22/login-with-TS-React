const jwt = require("jsonwebtoken");

// ! token이 맞는지 확인하는 함수
const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // * Bearer 부분은 제외하고
  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden" });
    req.user = decoded.UserInfo.username;
    req.roles = decoded.UserInfo.roles;

    // * 다음 middleware로 이동하거나 controller코드로 이동하기 위함 express에서 제공
    next();
  });
};

module.exports = verifyJWT;
