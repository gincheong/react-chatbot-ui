import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Modal } from '@shared';
import { MessageWithImage } from '@shared/models';

interface Props {
  image: MessageWithImage['image'];
}

export const StyledImageContent = styled.img`
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

export const ImageContent = (props: Props) => {
  const [displayModal, setDisplayModal] = useState(false);

  const styledImageContentRef = useRef<HTMLImageElement>(null);

  const onLoad = () => {
    const $current = styledImageContentRef.current as HTMLImageElement;
    $current.style.display = 'block';
  };

  return (
    <>
      <StyledImageContent src={props.image} onClick={() => setDisplayModal(true)}
        onLoad={onLoad} ref={styledImageContentRef} style={{ display: "none" }} />
      <Modal state={[displayModal, setDisplayModal]}>
        <StyledModalImg src={props.image} />
      </Modal>
    </>
  );
};