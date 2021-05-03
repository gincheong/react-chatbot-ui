import React, { forwardRef, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { Message, MessageWithImage, MessageWithText } from 'shared/models';
import { Image } from './Image';
import { Text } from './Text/Text';

interface StyleProps {
  type: Message['type'];
}

interface Props extends StyleProps {
  text?: MessageWithText['text'];
  image?: MessageWithImage['image'];
}

const StyledContent = styled.div`
  border: 1px solid transparent;
  border-radius: 0.5em;
  padding: 0.4em 0.5em;
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
    `
  }
  // 오른쪽 말풍선
  ${props => props.type === "right" &&
    css`
      text-align: -webkit-right;
      
      & ${StyledContent} {
        background-color: #db706c; // TODO: 변수 입력
      }
    `
  }

  & ${StyledContent} {
    max-width: 70%;
    width: max-content;
    text-align: left;
    word-break: break-all;
  }
`;

export const Balloon = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return useMemo(() => 
    <StyledBalloonContainer type={props.type} ref={ref}>
      <StyledContent>
        { props.image && <Image src={props.image} /> }
        { props.text && <Text text={props.text} /> }
      </StyledContent>
    </StyledBalloonContainer>
  , [props.text, props.type, props.image, ref]); // ?: 로직상으로는 빈 배열 넣어도 됨, 다만 warning 발생함
});

