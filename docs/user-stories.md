# User Stories / TodoList

## 할일

1. [ ] login_axios로 Register의 axios코드 옮기기
2. [x] login의 기능을 login_axios로 refactoring
3. [ ] Register이후 Login과 연결, Server 코드 확인
4. [ ] backend에서 express-async-handler 사용했는데 frontend에도 try~catch 대신 리팩토링할 수 있는 방법을 찾자
5. [ ] userRoutes에서는 createNewUser만 JWT가 필요하지 않고 나머지는 verifyJWT를 해야한다.
6. [x] Profile page를 만들었고 access_token과 데이터 정보를 넘겨줘야한다
7. [x] backend, userController에서 `getUserProfile`에서 토큰 비교
8. [ ] front, autoLogin 구현 (token이 있는 것을 바탕)

## Frontend

## Backend

1. [ ] Replace current sticky note system
2. [ ] Add a public facing page with basic contact info
3. [ ] Add an employee login to the notes app
4. [ ] Provide a welcome page after login
5. [ ] Provide easy navigation
6. [ ] Display current user and assigned role
7. [ ] Provide a logout option
8. [ ] Require users to login at least once per week
9. [ ] Provide a way to remove employee access asap if needed
10. [ ] Notes are assigned to specific employees
11. [ ] Notes have a ticket #, title, note body, created & updated dates
12. [ ] Notes are either OPEN or COMPLETED
13. [ ] Users can be Employees, Managers, or Admins
14. [ ] Notes can only be deleted by Managers or Admins
15. [ ] Anyone can create a note (when customer checks-in)
16. [ ] Employees can only view and edit their assigned notes
17. [ ] Managers and Admins can view, edit, and delete all notes
18. [ ] Only Managers and Admins can access User Settings
19. [ ] Only Managers and Admins can create new users
20. [ ] Desktop mode is most important but should be available in mobile
