import React, { useRef } from 'react';
import styled from 'styled-components';
import { Balloon } from 'components';
import { Message, MessageList } from 'shared/models';

interface Props {
  messageList: MessageList;
}

const StyledChatContainer = styled.section`
  flex: 1;
  background-color: #f2f2f2;
  overflow-y: scroll; // TODO: 스크롤 디자인 바꾸기 
`;

export const ChatContainer = (props: Props) => {
  const messageList: MessageList = props.messageList;

  const lastBalloon = useRef<HTMLDivElement>(null);

  // const message = state.get('message');
  // useEffect(() => {
  //   if (message.size) {
  //     lastBalloon.current.scrollIntoView({ behavior: 'auto' }); // ['auto', 'smooth']
  //   }
  // }, [message]);

  return (
    <StyledChatContainer>
      { messageList.map((each: Message) => 
          <Balloon
            key={each.mid}
            type={each.type}
            text={each.text}
            ref={lastBalloon}
          />
        )
      }
    </StyledChatContainer>
  );
};
