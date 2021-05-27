import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { MessageWithButton, ButtonInput } from '@shared/models';
import { configContext } from '@context';

interface Props {
  button: MessageWithButton['button'];
}

const StyledButton = styled.button`
  color: #f2f2f2;
  
  padding: 0.5em;
  border: none;
  border-radius: 0.5em;
  margin: 0.2em;

  cursor: pointer;

  &:active {
    color: #666666;
  }
`;

export const Button = (props: Props) => {
  const config = useContext(configContext);
  const [buttons, ] = useState(props.button);

  const onClick = (event: React.MouseEvent) => {
    const $target = event.target as HTMLButtonElement;
    const idx = parseInt($target.dataset['index'] ?? '-1');
    
    if (config?.buttonCallback) {
      const buttonInput: ButtonInput = {
        payload: buttons[idx]
      };
      config.buttonCallback(buttonInput);
    }
  };

  return (
    <>
      {buttons.map((each, idx) => 
        <StyledButton key={each.name} type="button" onClick={onClick} data-index={idx}>
          {each.name}
        </StyledButton>
      )}
    </>
  );
};
