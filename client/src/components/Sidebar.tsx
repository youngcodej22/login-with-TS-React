import React from "react";
import { SidebarElement } from "../types/sidebar";
import { useRouter } from "../hooks/useRouter";
import { User } from "../types/user";
import "./Sidebar.css";

interface SidebarProps {
  sidebarContent: SidebarElement[];
  userProfile: User | null;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarContent, userProfile }) => {
  const { currentPath, routeTo } = useRouter();

  const sidebarMenuClickHandler = (path: string) => {
    // TODO 3-2: 사이드바 메뉴 클릭시 이벤트 처리
    // path argument를 받아서 routeTo 함수에 전달
    routeTo(path);
  };

  return (
    <div className="sidebar">
      <h3 className="sidebar-title">환영합니다 ^^</h3>
      <ul>
        {sidebarContent.map((element) => {
          return (
            <li
              key={element.path}
              className={
                currentPath === element.path
                  ? "sidebar-menu selected"
                  : "sidebar-menu"
              }
              onClick={() => sidebarMenuClickHandler(element.path)}
            >
              {element.label}
            </li>
          );
        })}
      </ul>
      <div>
        {userProfile ? (
          <div className="sidebar-footer">
            <span>역할: {userProfile?.role}</span>
            <br />
            {userProfile?.username}님 환영합니다.
          </div>
        ) : (
          <div>로그인이 필요합니다.</div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
