import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { StyledImage } from '../Image/Image';
import { Modal } from '@shared';
import { MessageWithYoutube } from '@shared/models';
import { youtubeVideoIdParser } from '@utils';
import { YoutubeIcon, YoutubeIconHover } from '@assets';

interface Props {
  youtube: MessageWithYoutube['youtube'];
}

const StyledYoutube = styled.div`
  max-width: 100%;
  cursor: pointer;
  position: relative;
`;

const StyledYoutubeIcon = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20%;
  height: 20%;
  transform: translate(-50%, -50%);
`;

const StyledModalYoutube = styled.iframe`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  max-height: 90%;
  width: 90%;
  height: calc(90vw * 0.5625); // 1.78 : 1
`;

export const Youtube = (props: Props) => {
  const [displayModal, setDisplayModal] = useState(false);
  
  const youtubeIconRef = useRef<HTMLImageElement>(null);

  const videoId = youtubeVideoIdParser(props.youtube);
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/0.jpg`;

  const onMouseEventListener = (event: React.MouseEvent) => {
    const $icon = youtubeIconRef.current as HTMLImageElement;
    if (event.type === 'mouseenter') {
      $icon.src = YoutubeIconHover;
    } else if (event.type === 'mouseleave') {
      $icon.src = YoutubeIcon;
    }
  };

  return (
    <>
      <StyledYoutube onClick={() => setDisplayModal(true)}
        onMouseEnter={onMouseEventListener}
        onMouseLeave={onMouseEventListener}
      >
        <StyledYoutubeIcon src={YoutubeIcon} ref={youtubeIconRef}/>
        <StyledImage src={thumbnailUrl} />
      </StyledYoutube>
      <Modal state={[displayModal, setDisplayModal]}>
        <StyledModalYoutube
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Modal>
    </>
  );
};
