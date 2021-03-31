import './App.css';
import { useEffect, useState } from 'react';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerHTML = title;
  };
  useEffect(updateTitle, [title]); // title이 바뀌면 updateTitle 실행!
  // updateTitle -> componentDidMount / [title] -> componentWillUpdate
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle('Loading');
  setTimeout(() => titleUpdater('Home'), 5000);

  return <div className="App">Hi</div>;
};

export default App;
