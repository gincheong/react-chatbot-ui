# React-Chatbot-UI

![image](https://user-images.githubusercontent.com/24225401/118268949-09405700-b4f9-11eb-9b96-cc3acc3f35de.png)

### Install

`npm install react-chatbot-ui`

### Usage
```ts
// Example
...
import ChatBotUI, { MessageList } from 'react-chatbot-ui';
...

const config = {
  width: '500px',   // default: 400px
  height: '400px',  // default: 600px
  inputBox: true,   // show inputBox
  sendCallback: (value) => {
    // InputBox's value and Clicked Button values are passed into this function
    console.log(`you typed(clicked) text(button) ${value}`);

    // you can update "messageList" here with input values for new message
  }
};

const messageList: MessageList = [
  {
    mid: 1,
    type: 'left', 
    text: 'Hello world'
  },
  {
    mid: 2,
    type: 'left', 
    youtube: 'https://www.youtube.com/watch?v=eDEFolvLn0A'
  },
  {
    mid: 3,
    type: 'right', 
    button: [
      { name: 'displayName1', value: 'buttonValue1' },
      { name: 'displayName2', value: 'buttonValue2' }
    ]
  },
];

  ...
  <ChatBotUI
    config={config}
    messageList={messageList}
  />
  ...
);
```

```ts
// Type
 interface Message {
  mid: number;                    // id of Message, should be unique
                                  // (be used in react element's key)
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

> you should use `immer.js` or `immutable.js` for **MessageList**

### Features
- Markdown Syntax
  - **bold** : `**bold**`
  - *italic* : `*italic*`
  - ~~strikethrough~~ : `~~strikethrough~~`
  - __underline__ : `__underline__`
  - `code` : ``` `code` ```
  - [gincheong's github](https://github.com/gincheong) : `[gincheong's github](https://github.com/gincheong)`

- Enlarging image with click

- Support Youtube video url
  - click to show youtube video player

---
[Version History](./version_history.md)