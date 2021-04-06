import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const NewPostsBox = styled.div`
  & > .smallContainer {
    display: flex;

    & > .newpost {
      border: 1px solid red;
      flex: 1;
      opacity: 10;
      transition: all 0.5s ease;
      transform: translate(0, 100px);
    }

    & > .newpost .show {
      opacity: 1;
      transform: none;
    }
  }
`;

const NewPosts = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/posts/");
      const Info = response.data.results.map((blogs) => {
        return {
          id: blogs.id,
          title: blogs.title,
          content: blogs.content,
        };
        // map 통해 배열 각 요소에 대해 함수 실행하고, 실행결과 합친 새 배열을 return!!!
      });
      setData(Info);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(data);

  return (
    <NewPostsBox>
      {data &&
        data.map((blogData) => {
          return <div>{blogData.title}</div>;
        })}
    </NewPostsBox>
  );
};

export default NewPosts;
