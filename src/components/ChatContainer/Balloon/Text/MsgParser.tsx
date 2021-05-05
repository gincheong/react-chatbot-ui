import React from 'react';
import styled from 'styled-components';
import DOMPurify from 'dompurify';
import { markdownParser } from 'utils';

interface Props {
  string: string;
}

const StyledSpan = styled.span`
  url {
    text-decoration: underline;
    cursor: pointer;
    color: #b7d3e9;
    &:hover {
      color: #fcf695;
    }
  }

  code {
    background-color: rgba(100, 100, 100, 0.6);
    padding: 0.2em;
  }
`;

export const MsgParser = (props: Props) => {
  let parsed = props.string.trim();
  parsed = markdownParser(parsed);
  parsed = DOMPurify.sanitize(parsed, { ADD_TAGS: ['url'] })

  const onClickUrl = (event: React.MouseEvent) => {
    const $target = event.target as HTMLElement;
    if ($target.tagName === 'URL') {
      window.open($target.dataset['url']);
    }
  };

  return (
    <StyledSpan onClick={onClickUrl} dangerouslySetInnerHTML={{ __html: parsed }} />
  );
};
