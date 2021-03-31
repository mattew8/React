import { useState } from 'react';
import styled from 'styled-components';
import Story from './Story';

const Container = styled.div`
  border: 1px solid black;
  flex-grow: 3;
  width: 100%;
  overflow: scroll;
`;

const MainContent = ({ userData }) => {
  // const [instaStory, setStory] = useState([
  //   {
  //     id: 1,
  //     name: 'lee',
  //     profileimg: <img src={imgB} height="200px" width="200px" alt="프로필" />,
  //     posts: <img src={imgA} height="200px" width="200px" alt="포스트" />,
  //   },
  //   {
  //     id: 2,
  //     name: 'Ho',
  //     profileimg: <img src={imgB} height="200px" width="200px" alt="프로필" />,
  //     posts: <img src={imgA} height="200px" width="200px" alt="포스트" />,
  //   },
  //   {
  //     id: 3,
  //     name: 'Jin',
  //     profileimg: <img src={imgB} height="200px" width="200px" alt="프로필" />,
  //     posts: <img src={imgA} height="200px" width="200px" alt="포스트" />,
  //   },
  // ]);

  return (
    <Container>
      {userData.map((onePerson) => (
        <Story
          name={onePerson.username}
          id={onePerson.id}
          post={onePerson.post}
        />
        // (<Story posts={insta.posts} />)
      ))}
    </Container>
  );
};

export default MainContent;
