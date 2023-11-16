import { useState, useEffect, useRef } from "react";
import axios from "../../api/login_axios";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import "./Register.css";

// ! Test ID / newyb / dudqoWkd1234!

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = "/register";
const REGISTER_URL = "/users";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [roles, setRoles] = useState([]);
  const [validRoles, setvalidRoles] = useState(false);
  const [rolesFocus, setRolesFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(username);
    setValidName(result);
  }, [username]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);

  useEffect(() => {
    // if (roles.includes("선택해주세요") || roles.length === 0) {
    //   setvalidRoles(false);
    // } else {
    //   setvalidRoles(true);
    // }
    roles.includes("선택해주세요" as never)
      ? setvalidRoles(false)
      : setvalidRoles(true);
  }, [roles]);

  console.log("roles", roles);

  useEffect(() => {
    setErrMsg("");
  }, [username, password, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(username);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ username, password, roles }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log("response", response);

      // console.log(response?.data);
      // console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUsername("");
      setPassword("");
      setMatchPwd("");
      setRoles([]);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  const handleSelectChange = (e) => {
    const newValue = e.target.value;

    setRoles([newValue]);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="/">Sign In</a>
          </p>
        </section>
      ) : (
        <section>
          {/* ! aria-live: element가 focus되면 스크린리더가 읽는다. */}
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Username:
              <FaCheck className={validName ? "valid" : "hide"} />
              <FaTimes
                className={validName || !username ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && username && !validName
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FaInfoCircle />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>

            <label htmlFor="password">
              Password:
              <FaCheck className={validPwd ? "valid" : "hide"} />
              <FaTimes className={validPwd || !password ? "hide" : "invalid"} />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <FaInfoCircle />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>

            <label htmlFor="confirm_pwd">
              Confirm Password:
              <FaCheck className={validMatch && matchPwd ? "valid" : "hide"} />
              <FaTimes
                className={validMatch || !matchPwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FaInfoCircle />
              Must match the first password input field.
            </p>

            {/* Role */}
            <label htmlFor="role">
              Roles:
              <FaCheck
                className={validRoles && roles.length > 0 ? "valid" : "hide"}
              />
              <FaTimes className={validRoles ? "hide" : "invalid"} />
            </label>
            <select
              id="role"
              name="role"
              onChange={handleSelectChange}
              ref={userRef}
              aria-invalid={validRoles ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setRolesFocus(true)}
              onBlur={() => setRolesFocus(false)}
            >
              <option>선택해주세요</option>
              <option value="employee">Employee</option>
              <option value="manager">Manager</option>
              <option value="administrator">Administrator</option>
            </select>
            <p
              id="confirmnote"
              className={
                rolesFocus && !validRoles ? "instructions" : "offscreen"
              }
            >
              <FaInfoCircle />
              Must select your role
            </p>

            {/* <input
              type="text"
              id="role"
              ref={userRef}
              autoComplete="off"
              onChange={handleInputChange}
              value={roles}
              required
              aria-invalid={validRoles ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setRolesFocus(true)}
              onBlur={() => setRolesFocus(false)}
            /> */}
            {/* <p
              id="uidnote"
              className={
                rolesFocus && role && !validRoles ? "instructions" : "offscreen"
              }
            >
              <FaInfoCircle />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p> */}

            <button
              disabled={
                !validName || !validPwd || !validMatch || !validRoles
                  ? true
                  : false
              }
            >
              Sign Up
            </button>
          </form>
          <p>
            Already registered?
            <br />
            <span className="line">
              {/*put router link here*/}
              <a href="/">Sign In</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Register;
