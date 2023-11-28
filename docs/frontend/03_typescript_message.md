# Typescript를 적용하면서 발생한 Mesage 정리

1. `Argument of type 'string' is not assignable to parameter of type 'never'.`

- 문제: `roles.includes("선택해주세요")` 코드에서 발생
- 해결: `roles.includes("선택해주세요" as never)`
