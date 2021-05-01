export interface MessageBasics {
  mid: number;
  type: 'left' | 'right';
}

export interface MessageWithText extends MessageBasics {
  text: string;
  image?: never;
}

export interface MessageWithImage extends MessageBasics {
  image: string;
  text?: never;
}

export type Message = MessageWithImage | MessageWithText;

export type MessageList = Array<MessageWithImage | MessageWithText>;
