# 크롬브라우저에서 cors 일시적 해결법

## 해제 방법

1. 터미널을 통해 해결 (하지만 이 방법은 `--disable-web-security `이 에러가 나서 안됐다. )

**powshell은 오류나고 CMD는 오류 안난다**

```bash
# Windows CMD

$ "C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir=%LOCALAPPDATA%\Google\chromeTemp -–allow-file-access-from-files
```

2. 크롬 웹스토어에서 'Allow CORS: Access-Control-Allow-Origin'를 검색하고 설치하여 사용. youtube tutorial을 보고 쉽게 따라하였다.
   **cors 웹앱은 실행이 안되었다.**

---

#### 참고

- [참고1](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F)
- [참고2](https://inpa.tistory.com/entry/AXIOS-%F0%9F%93%9A-CORS-%EC%BF%A0%ED%82%A4-%EC%A0%84%EC%86%A1withCredentials-%EC%98%B5%EC%85%98)
- [참고3](https://inpa.tistory.com/entry/AXIOS-%F0%9F%93%9A-CORS-%EC%BF%A0%ED%82%A4-%EC%A0%84%EC%86%A1withCredentials-%EC%98%B5%EC%85%98)
