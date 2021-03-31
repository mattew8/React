import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          // 왠 await? -> 비동기적으로 작동할 경우 axios.get해서 데이터 받아오는데 시간 걸릴 경우
          // 이용자는 빈 화면 볼 수 밖에(undefined로 담기고 마니까)
          // 따라서 await 통해 해당 부분은 동기적으로 작동
          // 확실하게 response를 받아온 후 아래 함수들을 작동하도록 await 사용!

          `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=f7b70d62a5064b088b4a1848af266986`
          // axios를 통해 받아온 데이터를 그대로 함수 밖에 빼는 순간
          // 다시 Promise 객체 형태가 되버려 사용할 수 x
          // 따라서 response에 할당해준 것
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
    // useEffect만으로 fetchData를 실행하는건 아니니까!
    // fetchData() 해줌으로서 함수 실행
  }, [category]);

  if (!articles) {
    //   articles 값이 설정되지 않았을 때
    return null;
  }

  //   articles 값이 유효할 때
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
