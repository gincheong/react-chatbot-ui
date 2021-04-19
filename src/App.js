import styled from 'styled-components';
import propTypes from 'prop-types'
import React from 'react';
import { ChatContainer, InputBox } from 'components';
import { ChatContextProvider } from 'context';

const StyledApp = styled.main`
  // TODO: 여기 고정수치 입력받도록 바꾸기
  width: ${props => `${props.width ?? '400'}px` };
  height: ${props => `${props.height ?? '600'}px` };
  display: flex;
  flex-direction: column;
`;

export const App = (props) => {
  // ?: 프로바이더로 감싸는 부분 너무 못생김
  return (
    <StyledApp width={props.width} height={props.height}>
      {ChatContextProvider(
        <>
        <ChatContainer />
        <InputBox />
        </>
      )}
    </StyledApp>
  );
};

App.propTypes = {
  width: propTypes.number,
  height: propTypes.number
};