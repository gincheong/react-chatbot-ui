export const markdownParser = (string: string) => {
  const codeRegex = /[`]{1}([^`]+)[`]{1}/gm;
  const boldRegex = /[*]{2}(?=[^\s])([^(**)]+)[*]{2}/gm;
  const italicRegex = /[*]{1}([^*]+)[*]{1}/gm;
  const underlineRegex = /[_]{2}(?=[^\s])([^(__)]+)[_]{2}/gm;
  const strikeRegex = /[~]{1}([^~]+)[~]{1}/gm;


  return string
    .replace(codeRegex, '<code>$1</code>')
    .replace(boldRegex, '<b>$1</b>')
    .replace(italicRegex, '<i>$1</i>')
    .replace(underlineRegex, '<u>$1</i>')
    .replace(strikeRegex, '<s>$1</s>');
};
