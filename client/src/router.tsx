import { SidebarElement } from "./types/sidebar";
import { createBrowserRouter } from "react-router-dom";
// import { Router as RemixRouter } from "@remix-run/router/dist/router";
import GeneralLayout from "./layout/GeneralLayout";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

interface RouterElement {
  id: number; // 페이지 아이디 (반복문용 고유값)
  path: string; // 페이지 경로
  label: string; // 사이드바에 표시할 페이지 이름
  element: React.ReactNode; // 페이지 엘리먼트
  withAuth?: boolean; // 인증이 필요한 페이지 여부
}

const routerData: RouterElement[] = [
  // TODO 3-1: 로그인 페이지 라우터 등록하기 ('login', withAuth: false)
  // TODO 3-2: page a, b, c 등록하기
  {
    id: 0,
    path: "/",
    label: "Home",
    element: <Home />,
    withAuth: false,
  },
  {
    id: 1,
    path: "/login",
    label: "Login",
    element: <Login />,
    withAuth: false,
  },
  {
    id: 2,
    path: "/profile",
    label: "profile",
    element: (
      <Profile
        userProfile={{
          username: "",
          role: [""],
        }}
      />
    ),
    withAuth: true,
  },
  {
    id: 3,
    path: "/register",
    label: "register",
    element: <Register />,
    withAuth: true,
  },
];

// TODO 3-1: 인증이 필요한 페이지는 GeneralLayout으로 감싸서 라우터에 전달
// GeneralLayou에는 페이지 컴포넌트를 children으로 전달
// export const routers: RemixRouter = createBrowserRouter(
export const routers = createBrowserRouter(
  routerData.map((router) => {
    if (router.withAuth) {
      return {
        path: router.path,
        element: <GeneralLayout>{router.element}</GeneralLayout>,
      };
    } else {
      return {
        path: router.path,
        element: router.element,
      };
    }
  })
);

// TODO 3-2: 라우터 객체에서 인증이 필요한 페이지만 필터링해 사이드바에 전달
// id, path, label을 전달하여 Sidebar에서 사용
export const SidebarContent: SidebarElement[] = routerData.reduce(
  (prev, router) => {
    if (!router.withAuth) return prev;

    return [
      ...prev,
      {
        id: router.id,
        path: router.path,
        label: router.label,
      },
    ];
  },
  [] as SidebarElement[]
);
