import { TextInput, ButtonInput } from './Inputs';

export interface Config {
  width?: string;
  height?: string;
  sendCallback?(textInput: TextInput): void;
  buttonCallback?(buttonInput: ButtonInput): void;
  inputBox?: boolean;
}