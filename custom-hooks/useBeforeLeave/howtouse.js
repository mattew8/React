import "./App.css";
import { useEffect, useRef } from "react";

const useBeforeLeave = (onbefore) => {
  useEffect(() => {
    document.addEventListener("mouseleave", onbefore);

    return () => document.removeEventListener("mouseleave", onbefore);
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
