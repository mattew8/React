import styled from "styled-components";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

const NewPostsBox = styled.div`
  & > .big {
    width: 70%;
    height: 500px;
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
  const animatedItem = useScrollFadeIn();
  return (
    <NewPostsBox>
      <div className="big">큰 div</div>
      <div className="smallContainer">
        <div className="newpost">newPosts</div>
        <div className="newpost">newPosts</div>
        <div className="newpost">newPosts</div>
        <div className="newpost">newPosts</div>
        <div className="newpost">newPosts</div>
      </div>
      <div className="big">큰 div</div>

      <br />
      <div {...animatedItem} />
    </NewPostsBox>
  );
};

export default NewPosts;
