import groomer from "../img/미용사.png";
import puppy from "../img/puppy.png";
import fur from "../img/털이랑생선.png";
import styled, { css } from "styled-components";
import { useEffect, useState, useRef } from "react";

const QABox = styled.div`
  & {
    position: relative;
    background: #f6d586;
    width: 80%;
  }
  img {
    width: 400px;
    height: 400px;
  }

  & > .BtnArea {
    display: flex;
    justify-content: space-between;
    z-index: 1;
    position: absolute;
    width: 100%;
    bottom: 200px;
  }
`;

const QA = () => {
  // 클릭 통한 화면 이동
  const [number, setNumber] = useState(0);
  const onNextClick = () => {
    number === 2 ? setNumber(number - 2) : setNumber(number + 1);
  };
  const onPrevClick = () => {
    number === 0 ? setNumber(number + 2) : setNumber(number - 1);
  };

  // 화면 이동시 FadeIn 효과
  const useFadeIn = (duration = 0, delay = 0) => {
    const element = useRef();
    console.log(element.current, "엘리먼트");
    useEffect(() => {
      if (element.current) {
        const { current } = element;
        current.style.transition = `opacity ${duration}s ${delay}s`;
        current.style.opacity = 1;
      }
      console.log("effect");
    });
    console.log("after");
    return { ref: element, style: { opacity: 0 } };
  };

  // const fadeInH1 = useFadeIn(3, 0);
  const fadeInP = useFadeIn(4, 0);
  const fadeInP2 = useFadeIn(4, 3);

  switch (number) {
    case 0:
      console.log("1");
      return (
        <QABox {...fadeInP}>
          <div>
            1번주자입니다 출발하겠습니다
            <img src={groomer} alt="그루머" />
          </div>
          <div className="BtnArea">
            <div onClick={onPrevClick} className="prevBtn">
              이전
            </div>
            <div onClick={onNextClick} className="nextBtn">
              다음
            </div>
          </div>
        </QABox>
      );
    case 1:
      console.log("2");

      return (
        <QABox number={number} {...fadeInP2}>
          <div>
            2번주자 안녕하세요 2번주자 입니다
            <img src={puppy} alt="생선" />
          </div>
          <div className="BtnArea">
            <div onClick={onPrevClick} className="prevBtn">
              이전
            </div>
            <div onClick={onNextClick} className="nextBtn">
              다음
            </div>
          </div>
        </QABox>
      );

    case 2:
      console.log("3");

      return (
        <QABox number={number}>
          <div {...fadeInP}>
            3번주자 저는 3번 주자에요
            <img src={fur} alt="털" />
          </div>
          <div className="BtnArea">
            <div onClick={onPrevClick} className="prevBtn">
              이전
            </div>
            <div onClick={onNextClick} className="nextBtn">
              다음
            </div>
          </div>
        </QABox>
      );
  }
};

export default QA;
