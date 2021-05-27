import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { Message } from '@shared/models';
import { Spinner } from '@shared';
import { Button, ImageContent, Text, Youtube } from '@components';

interface StyleProps {
  type: Message['type'];
}

interface Props extends StyleProps {
  text?: Message['text'];
  image?: Message['image'];
  button?: Message['button'];
  youtube?: Message['youtube'];
  onLoadHandler: Function;
}

const content = css`
  border: 1px solid transparent;
  border-radius: 0.5em;
  padding: 0.4em 0.5em;

  max-width: 70%;
  width: max-content;
  word-break: break-all;
`;

const StyledContent = styled.div`
  text-align: left;
  ${content}
`;

const StyledButtons = styled.div`
  ${content}
`;

const StyledBalloonContainer = styled.article<StyleProps>`
  margin: 0.5em;
  color: #f2f2f2;

  // 왼쪽 말풍선
  ${props => props.type === "left" &&
    css`
      & ${StyledContent} {
        background-color: #567ace; // TODO: 변수 입력
      }
      & ${StyledButtons} button {
        background-color: #567ace;
      }
    `
  }
  // 오른쪽 말풍선
  ${props => props.type === "right" &&
    css`
      text-align: -webkit-right;
      
      & ${StyledContent} {
        background-color: #db706c; // TODO: 변수 입력
      }
      & ${StyledButtons} button {
        background-color: #db706c;
      }
    `
  }
`;

export const Balloon = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const [onLoaded, setOnLoaded] = useState(false);

  const { type, image, text, youtube, button, onLoadHandler } = props;

  const onLoad = useCallback(() => {
    if (!onLoaded) {
      // onLoaded State가 false일 때만 작동함
      onLoadHandler(setOnLoaded); // 여기서 onLoaded를 true로 만듦
    }
  }, [onLoaded, onLoadHandler]); 

  return useMemo(() => 
    <StyledBalloonContainer type={type} ref={ref} onLoad={onLoad}>
      { text && 
        <StyledContent>
          { text && <Text text={text} /> }
        </StyledContent>
      }
      { (image || youtube) &&
        // <StyledContent style={{ display: `${!onLoaded ? 'none' : ''}` }}>
        <StyledContent>
          { !onLoaded && <Spinner /> }
          { image && <ImageContent image={image} /> }
          { youtube && <Youtube youtube={youtube} /> }
        </StyledContent>
      }
      { button &&
        <StyledButtons>
          <Button button={button} />
        </StyledButtons>
      }
    </StyledBalloonContainer>
  , [ref, type, image, text, youtube, button, onLoaded]); // eslint-disable-line react-hooks/exhaustive-deps
  // ! onLoad 넣으면 Ballon들이 불필요하게 re-rendering됨
});
