import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  state: [boolean, Function];
}

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

export const Modal = (props: Props) => {
  const [displayModal, setDisplayModal] = props.state;

  const onKeyDownModal = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setDisplayModal(false);
    }
  }, [setDisplayModal]);

  const onClickModal = () => {
    setDisplayModal(false);
  };
  
  useEffect(() => {
    if (displayModal) {
      window.addEventListener('keydown', onKeyDownModal);
    }
    return () => {
      window.removeEventListener('keydown', onKeyDownModal);
    };
  }, [displayModal, onKeyDownModal])
  

  return (
    <>
      { displayModal &&
        <StyledModal onClick={onClickModal}>
          { props.children }
        </StyledModal>
      }
    </>
  );
};
