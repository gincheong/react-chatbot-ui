import React from 'react';
import styled from 'styled-components';
import DOMPurify from 'dompurify';
import { markdownParser, urlParser } from 'utils';

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
`;

export const MsgParser = (props: Props) => {
  let parsed = props.string;
  parsed = urlParser(parsed);
  parsed = markdownParser(parsed);
  parsed = DOMPurify.sanitize(parsed, { ADD_TAGS: ['url'] })

  const onClickUrl = (event: React.MouseEvent) => {
    const $target = event.target as HTMLElement;
    if ($target.tagName === 'URL') {
      window.open($target.innerText);
    }
  };

  return (
    <StyledSpan onClick={onClickUrl} dangerouslySetInnerHTML={{ __html: parsed }} />
  );
};
