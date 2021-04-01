import "./App.css";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = ""; // 크롬에서 나가기 방지
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener); // 보호 활성화
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener); // 보호 비활성화
  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

export default App;
