import React from 'react';
import styled from 'styled-components';
import { MsgParser } from './MsgParser';
import { MessageWithText } from 'shared/models';

interface Props {
  text: MessageWithText['text'];
}

const StyledText = styled.div`
  white-space: pre-wrap;
`;

export const Text = (props: Props) => {
  return (
    <StyledText>
      <MsgParser string={props.text} />
    </StyledText>
  );
};