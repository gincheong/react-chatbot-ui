import styled from 'styled-components';
import { useContext, useEffect, useMemo, useRef } from 'react';
import { Balloon } from 'components';
import { chatContext } from 'context';

const StyledChatContainer = styled.section`
  flex: 1;
  background-color: #f2f2f2;
  overflow-y: scroll; // TODO: 스크롤 디자인 바꾸기 
`;

export const ChatContainer = () => {
  const lastBalloon = useRef();
  const [state, ] = useContext(chatContext);

  const message = state.get('message');
  useEffect(() => {
    if (message.size) {
      lastBalloon.current.scrollIntoView({ behavior: 'auto' }); // ['auto', 'smooth']
    }
  }, [message]);

  return useMemo(() => 
    <StyledChatContainer>
      { message.map(each => 
          <Balloon
            key={each.get('mid')}
            type={each.get('type')}
            text={each.get('text')}
            ref={lastBalloon}
          />
        )
      }
    </StyledChatContainer>
  , [message]);
};
