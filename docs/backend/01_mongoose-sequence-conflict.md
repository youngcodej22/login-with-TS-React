# mongoose-sequence, API 테스트 request 시 무한 로딩.

1. 원인 : 기존 mongoose v.5 or 6은 이상이 없으나 v.7부터 'mongoose-sequence'의 코드와의 문제 발생.
2. 해결 : mongoose v.7 사용을 유지하고 mongoose-sequence 코드를 수정.
   <br />
   ( **`node_modules/mongoose-sequence` 들어가서 디렉토리에 코드를 교체** )

3. 참고

- [해당 Issue](https://github.com/ramiel/mongoose-sequence/issues/133)
- [Promise를 위한 mongoose-sequence 코드 변경 PR](https://github.com/ramiel/mongoose-sequence/pull/136/commits/9bd05cf578311d83ce70d96097559526f1242f47)
- [mongoose v.7을 위한 repository](https://github.com/amansingh63/mongoose-sequence)
