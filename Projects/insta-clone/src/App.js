import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import BodyComponent from './components/BodyComponent';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import imgA from './images/중국1.jpg';
import imgB from './images/잠자는 고양이.jpg';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

function App() {
  const [data, setData] = useState([
    {
      id: null,
      username: null,
      post: null,
    },
  ]);
  // 렌더링 시 실행
  console.log('App render', data);

  // useEffect에 두번째 인자([])사용x시? -> getUser끊임없이 try되면서 렌더링..!
  useEffect(() => {
    getUser();
    // useEffect 통해 getUser 맨 처음에 실행
    console.log('useEffect');
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      const Info = response.data.map((users) => {
        return {
          id: users.id,
          username: users.username,
          post: imgA,
        };
        // map 통해 배열 각 요소에 대해 함수 실행하고, 실행결과 합친 새 배열을 return!!!
      });
      setData(Info);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container className="App">
      <Navbar />
      <BodyComponent userData={data} />

      {/* {data && (
        <textarea
          rows={10}
          value={JSON.stringify(data, null)}
          readOnly={true}
        />
      )} */}
    </Container>
  );
}

export default App;
