import { useNavigate } from "react-router-dom";

export const useRouter = () => {
  const router = useNavigate();

  return {
    currentPath: window.location.pathname,
    routeTo: (path: string) => router(path),

    // ! 추가
    back: () => router(-1),
    forward: () => router(1),
    isActiveRouter: (path: string) => window.location.pathname === path,
  };
};
