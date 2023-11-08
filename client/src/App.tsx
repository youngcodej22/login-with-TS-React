import { createBrowserRouter, RouterProvider } from "react-router-dom";
// * 초기 Login 연습
import LoginWithMockAPI from "./pages/01_basic/LoginWithMockAPI";

// * JWT, localstorage
import JWTLogin from "./pages/02_jwt/JWTLogin";
import JWTLoginWithLocalStorage from "./pages/03_localstorage/JWTLoginWithLocalStorage";
import AutoLogin from "./pages/03_localstorage/AutoLogin";

import "./App.css";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <LoginWithMockAPI />,
  // },
  {
    path: "/",
    element: <JWTLogin />,
  },
  {
    path: "/local-storage",
    element: <JWTLoginWithLocalStorage />,
  },
  {
    path: "/other-page",
    element: <AutoLogin />,
  },
]);

function App() {
  return (
    <div className="content">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
