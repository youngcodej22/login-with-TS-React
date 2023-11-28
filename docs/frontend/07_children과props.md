# React에서 children props에 다른 props를 넣어서 전달하는 법

GeneralLayout.tsx에서 children props로 된 하위 컴포넌트에 어떻게 props를 전달 할 수 있을지 고민. `React.cloneElement()`사용

```tsx
<div className="general-layout">
  <Sidebar sidebarContent={SidebarContent} userProfile={userProfile} />
  {/* <div className="general-layout__body">{children}</div> */}
  <div className="general-layout__body">
    {React.cloneElement(children, { userProfile })}
  </div>
</div>
```

- [참고](https://velog.io/@hyunjoogo/React-children-Component%EC%97%90-props-%EC%A0%84%EB%8B%AC%ED%95%98%EA%B8%B0)
