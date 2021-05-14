import React from 'react';
import styled from 'styled-components';
import { ChatContainer, InputBox } from '@components';
import { Config, MessageList } from '@shared/models';
import { configContext } from '@context';

interface Props {
  messageList: MessageList;
  config?: Config;
}

const StyledApp = styled.main<Config>`
  width: ${props  => `${props.width ?? '400px'}` };
  height: ${props => `${props.height ?? '600px'}` };
  display: flex;
  flex-direction: column;
`;

export const App = (props: Props) => {
  return (
    <configContext.Provider value={props.config ?? null}>
      <StyledApp width={props.config?.width} height={props.config?.height}>
        <ChatContainer messageList={props.messageList} />
        {props.config?.inputBox && 
          <InputBox />
        }
      </StyledApp>
    </configContext.Provider>
  );
};
