import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { configContext } from '@context';
import { TextInput } from '@shared/models';

const StyledInput = styled.input`
  padding: 0.5em;
`;

export const InputBox = () => {
  const config = useContext(configContext);

  const [value, setValue] = useState('');

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (config?.sendCallback) {
        const userInput: TextInput = {
          payload: value
        };
        config.sendCallback(userInput);
      }
      setValue('');
    }
  };

  return (
    <StyledInput value={value}
      onKeyDown={onKeyDown}
      onChange={event => setValue(event.target.value)} />
  );
};
