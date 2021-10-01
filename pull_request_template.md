# [Foundation] Backend Refactoring 체크리스트

## Model

- [ ] 모델 이름은 PascalCase, 테이블 이름은 snake_case
- [ ] Url은 보통 2000자 이상
- [ ] 정규화 데이터를 제외하고 `created_at` 필수로 추가
- [ ] id에 auto_increment 옵션 추가
- [ ] Integer로 관리하는 숫자와 Decimal로 관리하는 숫자
- [ ] one-to-one 관계 테이블 설정

## Server

- [ ] 환경 변수 숨기기
- [ ] 에러 핸들링을 위한 `try-catch` 와 디버깅을 위한`console.log()` 사용
- [ ] JSON 데이터의 key에 변수 사용 ❌
- [ ] JSON 데이터 naming convention 통일
- [ ] get, post 메소드 분리

## Controller Layer

- [ ] controller의 역할 분리
- [ ] 명확한 status code 사용
- [ ] message convention 통일
- [ ] Request body 객체 구조분해할당
- [ ] KeyError 반드시 예외처리

## Service Layer

- [ ] service의 역할 분리
      **특별한 기능을 하지 않을 수 있음.**
- [ ] 데이터 없을 경우 예외 처리

## Model Layer

- [ ] model의 역할 분리
- [ ] 코드 가독성을 위한 SQL 컨벤션
- [ ] 데이터 입력 혹은 선택시 하드 코딩 no!
- [ ] [Advanced] SQL Injection 방지
