import React from 'react';
import { urlParser } from 'utils';

interface Props {
  string: string;
}
export const MsgParser = (props: Props) => {
  const urlParsed = urlParser(props.string);

  return (
    <span>
      {urlParsed}
    </span>
  );
};
