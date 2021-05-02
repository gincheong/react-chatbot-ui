import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactChild | ReactChildren;
}

const StyledText = styled.textarea`
`;

export const Text = (props: Props) => {
  return (
    <StyledText>
      {props.children}
    </StyledText>
  );
};