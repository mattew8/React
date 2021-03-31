import styled from 'styled-components';
import {
  IoLogoInstagram,
  IoIosMan,
  IoMdHeart,
  IoMdCompass,
} from 'react-icons/io';

const Container = styled.div`
  border: 1px solid green;
  display: flex;
  justify-content: space-between;
  /* space-between 속성 : 여러 flex아이템들 중 첫번째와 마지막은 맨 끝에, 나머지는 그 사이 일정하게 분배 */
  /* space-around 속성 : space-between과 동알하지만, 첫번째와 마지막 아이템이 골고루 분배 */
  padding-top: 2%;
  margin: auto;

  & > input {
    text-align: center;
    width: 20%;
    border: 1px solid gray;
    margin-right: 4.5%;
    ::placeholder {
    }
  }
`;

const Navbar = () => {
  return (
    <Container>
      <div style={{ marginLeft: '2%' }}>
        <IoLogoInstagram /> instagram
      </div>

      <input type="text" placeholder="instagram" />

      <div style={{ marginRight: '2%' }}>
        <IoMdCompass />
        <IoIosMan />
        <IoMdHeart />
      </div>
    </Container>
  );
};

export default Navbar;
