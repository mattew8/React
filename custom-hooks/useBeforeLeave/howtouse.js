import "./App.css";
import { useEffect } from "react";

const useBeforeLeave = (onbefore) => {
  const handle = (event) => {
    const { clientY } = event;
    // JS event 객체 속 clientY(이벤트 발생한 세로축) 할당
    if (clientY <= 0) {
      onbefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    console.log(onbefore);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const begForLife = () => {
    console.log("please dont leave");
  };
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>hi</h1>
    </div>
  );
};

export default App;
