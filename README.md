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
      text: 'Hello world'
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

- **mid** : id of Message, should be unique (used in Key)
- **type** : position of message balloon
- **text** : text contents (support html)
- **image** : image source

`text` and `image` cannot be used together.

> you should use `immer.js` or `immutable.js` for **messageList**

### Features
- support some markdown syntax
  - **bold** : `**bold**`
  - *italic* : `*italic*`
  - ~~strikethrough~~ : `~~strikethrough~~`
  - __underline__ : `__underline__`
  - `code` : ``` `code` ```
  - [gincheong's github](https://github.com/gincheong) : `[gincheong's github](https://github.com/gincheong)`
- enlarging image with click
