// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
// * 초기 Login 연습
// import LoginWithMockAPI from "./pages/01_basic/LoginWithMockAPI";

// * JWT, localstorage
// import JWTLogin from "./pages/02_jwt/JWTLogin";
// import JWTLoginWithLocalStorage from "./pages/03_localstorage/JWTLoginWithLocalStorage";
// import AutoLogin from "./pages/03_localstorage/AutoLogin";
// import Register from "./pages/Register/Register";
// import Profile from "./pages/Profile/Profile";

import "./App.css";
import { routers } from "./router";

function App() {
  return (
    <div className="content">
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
