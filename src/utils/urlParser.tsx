export const urlParser = (string: string) => {
  const regex = new RegExp('(https?:[//][0-9a-z?&=+#%@~./-|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+)', 'mi');

  return string.replace(regex, '<url>$1</url>');
};
