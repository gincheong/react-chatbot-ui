import React, { forwardRef, ReactEventHandler, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { Message, MessageWithButton, MessageWithImage, MessageWithText } from 'shared/models';
import { Image } from './Image';
import { Text } from './Text/Text';
import { Button } from './Button/Button';

interface StyleProps {
  type: Message['type'];
}

interface Props extends StyleProps {
  text?: MessageWithText['text'];
  image?: MessageWithImage['image'];
  button?: MessageWithButton['button'];
  onLoadHandler: ReactEventHandler<HTMLElement>;
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
  return useMemo(() => 
    <StyledBalloonContainer type={props.type} ref={ref} onLoad={props.onLoadHandler}>
      { (props.image || props.text) &&
        <StyledContent>
          { props.image && <Image src={props.image} /> }
          { props.text && <Text text={props.text} /> }
        </StyledContent>
      }
      { props.button &&
        <StyledButtons>
        { props.button && <Button button={props.button} /> }
        </StyledButtons>
      }
    </StyledBalloonContainer>
  , [props.text, props.type, props.image, props.button, props.onLoadHandler, ref]);
  // ?: 로직상으로는 빈 배열 넣어도 됨, 다만 warning 발생함
});
