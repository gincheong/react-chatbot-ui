import React, { useEffect, useRef } from 'react';
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

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1em;
    background-color: #aaaaaa;
  }
`;

export const ChatContainer = (props: Props) => {
  const messageList: MessageList = props.messageList;

  const lastBalloon = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageList.length) {
      lastBalloon.current?.scrollIntoView({ behavior: 'auto' }); // ['auto', 'smooth']
    }
  }, [messageList]);

  const onLoadHandler = () => {
    // load가 필요한 image 같은 것들에만 발생함
    lastBalloon.current?.scrollIntoView({ behavior: 'auto' }); // ['auto', 'smooth']
  };

  return (
    <StyledChatContainer>
      { messageList.map((each: Message) => 
          <Balloon
            key={each.mid}
            type={each.type}
            text={each.text}
            image={each.image}
            button={each.button}
            ref={lastBalloon}
            onLoadHandler={onLoadHandler}
          />
        )
      }
    </StyledChatContainer>
  );
};
