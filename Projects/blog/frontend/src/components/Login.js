import { useState } from "react";
import styled from "styled-components";

const LoginBox = styled.div`
  text-align: center;

  & > .loginHeader {
    font-size: 1.3rem;
    margin-bottom: 3%;
  }

  & > input {
    margin: 1.5% 0;
  }

  & > button {
    margin: 1% 0;
  }

  & > .goSignUp,
  .goSignIn {
    margin-top: 2%;
    font-size: 0.8rem;
  }

  & .accountBtn {
    outline: none;
    border: none;
    background: none;
    margin: 3% 0;
    font-size: 0.8rem;
    color: gray;
  }
`;

const Login = () => {
  const [joinLogin, setJoinLogin] = useState(false);
  const changeJoin = () => {
    setJoinLogin(!joinLogin);
  };

  return (
    <LoginBox>
      {joinLogin ? (
        <>
          <div className="loginHeader">로그인</div>
          <input type="text" placeholder="아이디를 입력하세요"></input>
          <br />
          <input type="text" placeholder="비밀번호를 입력하세요"></input>
          <br />
          <button className="loginBtn">로그인</button>

          <div className="goSignUp">
            아직 회원이 아니신가요?
            <button className="accountBtn" onClick={changeJoin}>
              회원가입
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="loginHeader">화원가입</div>
          <input type="text" placeholder="아이디를 입력하세요"></input>
          <br />
          <input type="text" placeholder="비밀번호를 입력하세요"></input>
          <br />
          <input type="text" placeholder="비밀번호 재확인해주세요"></input>
          <br />
          <button className="signUpBtn">회원가입</button>

          <div className="goSignIn">
            이미 회원이신가요?
            <button className="accountBtn" onClick={changeJoin}>
              로그인
            </button>
          </div>
        </>
      )}
    </LoginBox>
  );
};

export default Login;
