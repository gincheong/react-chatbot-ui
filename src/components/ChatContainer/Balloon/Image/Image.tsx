import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '@shared';
import { MessageWithImage } from '@shared/models';

interface Props {
  image: MessageWithImage['image'];
}

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 500px;
  cursor: pointer;
`;

const StyledModalImg = styled.img`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  max-height: 90%;
`;

export const Image = (props: Props) => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <>
      <StyledImage src={props.image} onClick={() => setDisplayModal(true)}/>
      <Modal state={[displayModal, setDisplayModal]}>
        <StyledModalImg src={props.image} />
      </Modal>
    </>
  );
};