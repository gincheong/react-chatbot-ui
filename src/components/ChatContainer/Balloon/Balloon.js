import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import { forwardRef, useMemo } from 'react';

const StyledBalloonContainer = styled.div`
  margin: 1em 1em 1.2em 1em;
  color: #f2f2f2;

  ${props => props.type === "left" &&
    css`
      & span {
        background-color: #567ace; // TODO: 변수 입력
      }
    `
  }

  ${props => props.type === "right" &&
    css`
      text-align: right;
      
      & span {
        background-color: #db706c; // TODO: 변수 입력
      }
    `
  }
`;

const StyledBalloon = styled.span`
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