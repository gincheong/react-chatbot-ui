export interface Message {
  mid: number;
  type: 'left' | 'right';
  text: string;
}

export type MessageList = Array<Message>;