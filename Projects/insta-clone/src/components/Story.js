import { useState } from 'react';
import styled from 'styled-components';
import { BsFillHeartFill, BsHeart } from 'react-icons/bs';

const UserNameBox = styled.div`
  border: 1px solid brown;

  & > .Profile {
    background: #868e96;
    text-align: left;

    & > .UserIcon {
      display: inline-block;
      border: 2px solid pink;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      margin-left: 3%;
    }

    & > .Name {
      vertical-align: middle;
      display: inline-block;
      vertical-align: middle;
      margin-left: 3%;
      margin-top: 2%;
    }
  }

  & .StoryImg {
    text-align: center;
    width: 80%;
    height: 100%;
    padding: 1% 5% 1% 5%;
  }

  & > form {
    text-align: left;
    margin-left: 15%;
    font-size: 0.8rem;
    margin-top: 1%;
  }

  & > .Comments {
    text-align: left;
    margin-left: 15%;
    font-size: 0.85rem;
  }

  & > .likes {
    text-align: right;
    margin-right: 15%;
  }
`;

const Story = ({ name, id, post }) => {
  // 댓글 input 및 submit
  const [comment, setComment] = useState([]);
  const [inputComm, setInputComm] = useState('');
  const CommentChange = (e) => {
    setInputComm(e.target.value);
  };
  const CommentSubmit = (e) => {
    setComment(comment.concat(inputComm));
    setInputComm('');
    e.preventDefault();
    e.target.reset();
  };

  // 좋아요 기능
  const [liked, setLike] = useState(true);
  const [likeNum, setLikeNum] = useState(0);

  const ToggleLike = () => {
    setLike(!liked);
    liked ? setLikeNum(likeNum + 1) : setLikeNum(likeNum - 1);
  };

  return (
    <UserNameBox>
      <div className="Profile">
        <div className="UserIcon">"hi"</div>
        <div className="Name">{name}</div>
      </div>

      <div>{post && <img src={post} className="StoryImg" />}</div>

      <div className="likes" onClick={ToggleLike}>
        {liked ? <BsHeart /> : <BsFillHeartFill />}
        {likeNum}
      </div>

      {comment.map((oneComm) => {
        return <div className="Comments">{oneComm}</div>;
      })}

      <form onSubmit={CommentSubmit}>
        <input type="text" placeholder="댓글" onChange={CommentChange}></input>
        <button>제출</button>
      </form>
    </UserNameBox>
  );
};

export default Story;
