import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { configContext } from 'context';

const StyledInput = styled.input`
  padding: 0.5em;
`;

export const InputBox = () => {
  const config = useContext(configContext);

  const [value, setValue] = useState('');

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (config?.sendCallback) {
        config.sendCallback(value);
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
