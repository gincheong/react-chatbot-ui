import { MessageButton } from './Message';

export interface TextInput {
  payload: string;
}

export interface ButtonInput {
  payload: MessageButton;
}
