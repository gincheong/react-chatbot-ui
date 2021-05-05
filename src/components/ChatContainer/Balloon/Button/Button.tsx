import React, { useContext } from 'react';
import styled from 'styled-components';
import { MessageWithButton } from 'shared/models';
import { configContext } from 'context';

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

  const onClick = (event: React.MouseEvent) => {
    const $target = event.target as HTMLElement;
    if (config?.sendCallback) {
      config.sendCallback($target.dataset['value']);
    }
  };

  return (
    <>
      {props.button.map(each => 
        <StyledButton key={each.name} type="button" data-value={each.value} onClick={onClick}>
          {each.name}
        </StyledButton>
      )}
    </>
  );
};
