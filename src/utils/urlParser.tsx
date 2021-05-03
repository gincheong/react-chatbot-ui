import styled from 'styled-components';

const StyledUrl = styled.span`
  color: #b7d3e9; // !: 색상 시인성이 좋지 못함
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #fcf695;
  }
`;

export const urlParser = (string: string) => {
  const regex = new RegExp('(https?:[//][0-9a-z?&=+#%@~./-|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+)', 'mi');
  const stringArray = string.split(regex);

  const onClickUrl = (event: React.MouseEvent) => {
    const $target = event.target as HTMLElement;
    window.open($target.innerText);
  }

  return stringArray.map((each, idx) => {
    if (each.match(regex) !== null) {
      return <StyledUrl onClick={onClickUrl} key={idx}>{each}</StyledUrl>;
    }
    return each;
  });
};


