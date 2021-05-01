# React-Chatbot-UI

React에서 쓸 수 있는 채팅 UI 컴포넌트입니다.

### Install

`npm install react-chatbot-ui`

### Usage
```javascript
...
import { ChatBotUI } from 'react-chatbot-ui';
...

ReactDOM.render(
  ...
  <ChatBotUI messageList={[
    {
      mid: 1,
      type: 'left',
      text: 'asd'
    }
  ]}/>
  ...
);
```

```ts
// messageList의 Type
export interface Message {
  mid: number;
  type: 'left' | 'right'; // left는 왼쪽 말풍선, right는 오른쪽 말풍선
  text: string;
}

export type MessageList = Array<Message>;
```