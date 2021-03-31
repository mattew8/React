import styled, { css } from "styled-components";

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  /* props로 넣어 준 값 직접 전달 */
  padding: 1rem;
  display: flex;
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    /* & 이용해 자기 자신을 선택 */
    background: rgba(255, 255, 0.9);
  }

  /* inverted 값이 true일 때 특정 스타일 부여 */
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `}
  & + button {
    margin-left: 1rem;
  }
`;

const StlyedComponent = () => {
  return (
    <Box color="black">
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  );
};

export default StlyedComponent;
