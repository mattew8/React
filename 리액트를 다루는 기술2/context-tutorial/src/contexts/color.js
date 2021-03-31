import { createContext, useState } from 'react';

const ColorContext = createContext({
  // 기본값을 Provider의 value와 일치
  state: { color: 'black', subcolor: 'red' },
  actions: {
    // Context의 value에 상태 값이 아닌, 함수를 전달
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    // Provider의 value에는 상태는 state로 업데이트 함수는 actions로 묶어서 전달
  );
};

const { Consumer: ColorConsumer } = ColorContext;
// const ColorConsumer = ColorContext.Consumer와 같은 의미(비구조화 객체 할당!)

export { ColorProvider, ColorConsumer };
// ColorProvider와 ColorConsumer 내보내기

export default ColorContext;
