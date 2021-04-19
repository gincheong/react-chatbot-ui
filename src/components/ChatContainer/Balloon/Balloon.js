import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import { forwardRef, useMemo } from 'react';

const StyledBalloonContainer = styled.div`
  margin: 0.5em;
  color: #f2f2f2;

  // 왼쪽 말풍선
  ${props => props.type === "left" &&
    css`
      & div {
        background-color: #567ace; // TODO: 변수 입력
      }
    `
  }

  // 오른쪽 말풍선
  ${props => props.type === "right" &&
    css`
      text-align: -webkit-right;
      
      & div {
        background-color: #db706c; // TODO: 변수 입력
      }
    `
  }

  & div {
    max-width: 70%;
    width: max-content;
    text-align: left;
    word-break: break-all;
  }

`;

const StyledBalloon = styled.div`
  border: 1px solid transparent;
  border-radius: 0.5em;
  padding: 0.4em 0.5em;

`;

export const Balloon = forwardRef((props, ref) => {
  return useMemo(() => 
    <StyledBalloonContainer type={props.type} ref={ref}>
      <StyledBalloon>{props.text}</StyledBalloon>
    </StyledBalloonContainer>
  , [props.text, props.type, ref]); // ?: 로직상으로는 빈 배열 넣어도 됨, 다만 warning 발생함
});

Balloon.propTypes = {
  type: propTypes.oneOf(['left', 'right']).isRequired,
  text: propTypes.string,
};