import React from 'react';
import styled from 'styled-components';
import { ChatContainer } from 'components';
import { MessageList } from 'shared/models';

interface StyleProps {
  width?: number;
  height?: number;
}

interface Props extends StyleProps {
  messageList: MessageList;
}

const StyledApp = styled.main<StyleProps>`
  width: ${props  => `${props.width ?? '400'}px` };
  height: ${props => `${props.height ?? '600'}px` };
  display: flex;
  flex-direction: column;
`;

export const App = (props: Props) => {
  return (
    <StyledApp width={props.width} height={props.height}>
        <ChatContainer messageList={props.messageList} />
        {/* <InputBox /> */}
    </StyledApp>
  );
};
