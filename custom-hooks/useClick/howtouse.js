import './App.css';
import { useEffect, useRef } from 'react';

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    // 1. useEffect에 funtion을 넣으면 얘는 componentDidMount, componentDidUpdate시 호출
    // 2. 만약 두번째 인자(어떤 [])를 넣어주면 -> 얘는 componentDidMount일 때만 호출
    if (element.current) {
      // ref 안에 element라는 녀석이 있는지 확인
      element.current.addEventListener('click', onClick);
    }
    // 3. 어떤 funtion을 return하면 -> 얘는 componentWillUnMount시 호출
    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => alert('hello');
  const title = useClick(sayHello);
  return (
    <div className="App">
      <hh1 ref={title}>Hi</hh1>
    </div>
  );
};

export default App;
