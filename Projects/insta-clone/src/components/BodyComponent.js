import styled from 'styled-components';
import MainContent from './MainContent';
import SubInfoBox from './SubInfoBox';

const Container = styled.div`
  border: 2px solid yellow;
  display: flex;
  justify-content: center;
  width: 100%;
  background: #f8f9fa;
  height: 90vh;
`;

const BodyComponent = ({ userData }) => {
  return (
    <Container>
      <MainContent userData={userData} />
      <SubInfoBox />
    </Container>
  );
};

export default BodyComponent;
