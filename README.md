# React-Chatbot-UI

React에서 쓸 수 있는 채팅 UI 컴포넌트입니다.

![image](https://user-images.githubusercontent.com/24225401/117090847-7551eb00-ad94-11eb-8a97-d8778781fac1.png)

### Install

`npm install react-chatbot-ui`

### Usage
```ts
// Example
...
import { ChatBotUI } from 'react-chatbot-ui';
...

const config = {
  width: 500,
  height: 400,
  inputBox: true, // this show InputBox
  sendCallback: (value) => { // InputBox's value and Clicked Button values are passed into this function
    console.log(`you typed(clicked) text(button) ${value}`);

    // you can update "messageList" here with input values for new message
  }
};
...

  <ChatBotUI
    config={config}
    messageList={[
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
    ]}
  />
  ...
);
```

```ts
// Type
 interface Message {
  mid: number;                    // id of Message, should be unique (be used in react element's key)
  type: 'left' | 'right';         // position of message balloon
  text?: string;                  // text contents (support html)
  image?: string;                 // image source
  button?: Array<MessageButton>   // buttons
  youtube?: string;               // youtube video url
}

interface MessageButton {
  name: string;
  value: any;
}

type MessageList = Array<Message>;
```
`text`, `image`, `button`, `youtube` cannot be used together.

> you should use `immer.js` or `immutable.js` for **messageList**

### Features
- Markdown Syntax
  - **bold** : `**bold**`
  - *italic* : `*italic*`
  - ~~strikethrough~~ : `~~strikethrough~~`
  - __underline__ : `__underline__`
  - `code` : ``` `code` ```
  - [gincheong's github](https://github.com/gincheong) : `[gincheong's github](https://github.com/gincheong)`

- Enlarging image with click


---
[Version History](./version_history.md)