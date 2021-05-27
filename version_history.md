# ~
- Spinner 추가, 이미지 로드 중에 Spinner 컴포넌트가 표시됩니다.
  (현재 이미지가 없이 "Loading Image" 텍스트만 표시함)
- 자바스크립트 내장 객체 Image와 이름이 겹치는 Image 컴포넌트의 이름을 ImageContent로 바꿈

# 0.3.1
- readme 업데이트 깜빡했음..

# 0.3.0
- sendCallback 함수 파라미터 타입을 object로 변경(type UserInput) (#17)
- MessageButton의 value를 객체로 입력할 수 있게 변경

# 0.2.5
- Balloon이 생성될 때, onload 이벤트로 autoscroll 할 때
  image modal이나, Youtube Icon이 onload 이벤트를 발생시켜 scroll을 발생시키는 버그 수정

# 0.2.4
- `config`의 `width`, `height`를 **string**으로 입력받게 변경
- interface `Message`, `MessageList`, `MessageButton`을 모듈 루트에서 import 할 수 있게 함

# 0.2.3
- babel 컴파일 시 assets폴더의 *.svg 파일들을 dist로 복사하게 명령어 수정
- svg 파일 import하는 절대경로가 컴파일 후에 상대경로로 변하지 않는 문제로
  assets 폴더에 index.ts를 만들어 이것을 통해 파일을 import함

# 0.2.2
- update **README.md**
- fix scripts command
  - assets 폴더도 dist폴더에 복사함

# 0.2.1
- markdown `code` 에 배경색 추가
- Button 컴포넌트 추가
  - `{ name: string, value: any }`
- InputBox 컴포넌트 추가
- config Context 추가 
  - InputBox: `Boolean` - InputBox 사용 여부
  - config.sendCallback: `Function` - InputBox나, Button으로 입력한 값을 인자로 하는 함수
    `console.log` 함수를 넣으면, InputBox를 사용하거나, Button을 사용할 때 입력/선택한 값이 console에 출력됨
- Youtube 컴포넌트 추가
  - youtube 영상을 전송할 수 있음
  - 말풍선에 썸네일 이미지가 표시되고, 클릭하면 Modal에 Youtube Player를 띄워줌

# ~ 0.1.11

...