export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerHTML = title;
  };
  useEffect(updateTitle, [title]); // title이 바뀌면 updateTitle 실행!
  // updateTitle -> componentDidMount / [title] -> componentWillUpdate
  return setTitle;
};
