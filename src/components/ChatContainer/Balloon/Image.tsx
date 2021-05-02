import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MessageWithImage } from 'shared/models';

interface Props {
  src: MessageWithImage['image'];
}

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 500px; // ?: custom 가능하게?
  cursor: pointer;
`;

const StyledModal = styled.div`
  position: fixed;
  background-color: rgba(100, 100, 100, 0.5);
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
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
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      window.addEventListener('keydown', onKeyDownModal);
    }
    return () => {
      window.removeEventListener('keydown', onKeyDownModal);
    };
  }, [showModal]);

  const onClickImage = () => {
    setShowModal(true);
  };

  const onClickModal = () => {
    setShowModal(false);  
  }

  const onKeyDownModal = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setShowModal(false);
    }
  };

  return (
    <>
      <StyledImage src={props.src} onClick={onClickImage} />
      { showModal && (
        <StyledModal onClick={onClickModal}>
          <StyledModalImg src={props.src} />
        </StyledModal>
      )}
    </>
  );
};