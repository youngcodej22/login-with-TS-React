const rateLimit = require("express-rate-limit");
const { logEvents } = require("./logger");

// ! express-rate-limit
// ! 해커의 로그인 시도가 여러번 있을 수도 있으니 제한을 거는 기능을 한다. (굉장히 흥미롭다 js코드 까보자)
const loginLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute, 60번*1000ms = 60초
  max: 5, // Limit each IP to 5 login requests per `window` per minute
  message: {
    message:
      "Too many login attempts from this IP, please try again after a 60 second pause",
  },
  handler: (req, res, next, options) => {
    logEvents(
      `Too Many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
      "errLog.log"
    );
    res.status(options.statusCode).send(options.message);
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

module.exports = loginLimiter;
