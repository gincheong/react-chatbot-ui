import styled from 'styled-components';
import { useCallback, useContext, useMemo, useState } from 'react';
import { chatContext } from 'context';
import { addMessage } from 'actions';

const borderColor = '#aaaaaa'

const StyledInputBox = styled.section`
  background-color: #567ace;
  bottom: 2em;
  border: 1px solid ${borderColor};
  display: flex;
`;

const StyledInput = styled.input`
  flex: 1;
  height: 2.5em;
  border: none;
`;

const StyledButton = styled.button`
  background-color: #db706c;
  color: white;
  border: none;
  border-left: 1px solid ${borderColor};
`;

export const InputBox = () => {
  const [, dispatch] = useContext(chatContext);
  const [inputState, setInputState] = useState('');

  const sendMessage = useCallback(() => {
    dispatch(addMessage({ type: 'right', text: inputState }));
    setInputState('');
  }, [inputState, dispatch]);

  const onKeyDown = useCallback((event) => {
    if (event.key === 'Enter' && inputState !== '') {
      sendMessage();
    }
  }, [inputState, sendMessage]);

  const onClick = useCallback(() => {
    sendMessage();
  }, [sendMessage]);

  return useMemo(() =>
    <StyledInputBox>
      <StyledInput type="text" value={inputState}
        onChange={(e) => setInputState(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <StyledButton type="button" onClick={onClick}>
        Send
      </StyledButton>
    </StyledInputBox>
  , [inputState, onClick, onKeyDown]);
};
