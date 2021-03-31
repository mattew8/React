import styled from 'styled-components';
import Recommend from './Recommend';

const Container = styled.div`
  border: 1px solid red;
  flex-grow: 1;
  width: 30%;

  & > .userInfo {
    border: 1px solid blue;
  }
`;

const SubInfoBox = () => {
  return (
    <Container>
      <div className="userInfo">유저 정보</div>
      <div className="otherFriends">다른 친구 스토리</div>
      <Recommend />
    </Container>
  );
};

export default SubInfoBox;
