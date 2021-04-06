import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import groomer from "../img/미용사.png";
import fish from "../img/물고기.png";
import fur1 from "../img/털뭉치1.png";
import fur2 from "../img/털뭉치2.png";
import fur5 from "../img/털뭉치5.png";
import { OnePost } from "./OnePost";

const NewPostsBox = styled.div`
  background: #f6d586;
  height: 80vh;

  & > .groomerimg {
    width: 70%;
    height: 70%;
    z-index: 0;
  }

  & > .fishimg,
  .fur1,
  .fur2,
  .fur5 {
    width: 70%;
    height: 70%;
    z-index: 1;
    opacity: 0.9;
    position: absolute;
    top: 90px;
    right: 30%;
    animation: swing 5s infinite ease-in-out;

    @keyframes swing {
      0% {
        transform: rotate(0deg);
      }
      20% {
        transform: rotate(-0.7deg);
      }
      40% {
        transform: rotate(-0.3deg);
      }
      60% {
        transform: rotate(0deg);
      }
      80% {
        transform: rotate(0.5deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }

  & > .fur2,
  .fur5 {
    animation: swing 2s infinite ease-in-out;

    @keyframes swing {
      0% {
        transform: rotate(0deg);
      }
      20% {
        transform: rotate(-1deg);
      }
      40% {
        transform: rotate(0deg);
      }
      60% {
        transform: rotate(1.1deg);
      }
      80% {
        transform: rotate(0.5deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }

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
          owner: blogs.owner,
        };
        // map 통해 배열 각 요소에 대해 함수 실행하고, 실행결과 합친 새 배열을 return!!!
      });
      console.log(Info === data);
      setData(Info);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(data);

  return (
    <NewPostsBox>
      {/* data && 로 data가 존재하는지 검증을 안해주면
       useEffect전에 렌더링을 시도하는 바람에 data.map()에서 에러 발생!!!!!!!! */}
      {data &&
        data.map((blogData) => {
          console.log(blogData);
          return <OnePost blogData={blogData} />;
        })}
      <img src={groomer} alt="미용사" className="groomerimg" />
      <img src={fish} alt="생선" className="fishimg" />
      <img src={fur1} alt="털1" className="fur1" />
      <img src={fur2} alt="털2" className="fur2" />
      <img src={fur5} alt="털5" className="fur5" />
    </NewPostsBox>
  );
};

export default NewPosts;
