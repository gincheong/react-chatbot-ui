export const markdownParser = (string: string) => {
  const linkRegex = /[\[]{1}(.+)[\]]{1}[(](.+)[)]/gm; // eslint-disable-line
  const codeRegex = /[`]{1}([^`]+)[`]{1}/gm;
  const boldRegex = /[*]{2}(?=[^\s])([^(**)]+)[*]{2}/gm;
  const italicRegex = /[*]{1}([^*]+)[*]{1}/gm;
  const underlineRegex = /[_]{2}(?=[^\s])([^(__)]+)[_]{2}/gm;
  const strikeRegex = /[~]{2}(?=[^\s])([^(~~)]+)[~]{2}/gm;

  return string
    .replace(linkRegex, '<url data-url="$2">$1</url>')
    .replace(codeRegex, '<code>$1</code>')
    .replace(boldRegex, '<b>$1</b>')
    .replace(italicRegex, '<i>$1</i>')
    .replace(underlineRegex, '<u>$1</u>')
    .replace(strikeRegex, '<s>$1</s>');
};
