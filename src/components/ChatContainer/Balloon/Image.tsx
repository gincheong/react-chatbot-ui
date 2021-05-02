import React from 'react';
import { MessageWithImage } from 'shared/models';
import styled from 'styled-components';

interface Props {
  src: MessageWithImage['image'];
}

const StyledImage = styled.img`
  width: 100%;
`;

export const Image = (props: Props) => {
  return (
    <StyledImage src={props.src} />
  );
};