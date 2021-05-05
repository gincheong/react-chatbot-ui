export interface MessageBasics {
  mid: number;
  type: 'left' | 'right';
}

export interface MessageWithText extends MessageBasics {
  text: string;
  image?: never;
  button?: never;
}

export interface MessageWithImage extends MessageBasics {
  image: string;
  text?: never;
  button?: never;
}

export interface MessageButton {
  name: string;
  value: any;
}

export interface MessageWithButton extends MessageBasics {
  button: Array<MessageButton>;
  text?: never;
  image?: never;
}

export type Message = MessageWithImage | MessageWithText | MessageWithButton;

export type MessageList = Array<Message>;
