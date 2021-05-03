# React-Chatbot-UI

React에서 쓸 수 있는 채팅 UI 컴포넌트입니다.

### Install

`npm install react-chatbot-ui`

### Usage
```javascript
// Example
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
    },
    {
      mid: 2,
      type: 'right',
      image: '<image_url>'
    }
  ]}/>
  ...
);
```

```ts
// Type
export interface Message {
  mid: number;
  type: 'left' | 'right';
  text?: string;
  image?: string;
}

export type MessageList = Array<Message>;
```

Descriptions of Types
- **mid** : id of Message, should be unique (used in Key)
- **type** : position of message balloon
- **text** : text contents
- **image** : image source

`text` and `image` cannot be used together.
