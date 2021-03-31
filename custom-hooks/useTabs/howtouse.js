import './App.css';
import { useState } from 'react';

const content = [
  {
    tab: 'Section 1',
    content: 'Content of Section 1',
  },
  {
    tab: 'Section 2',
    content: 'Content of Section 2',
  },
];

const useTabs = (initailTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initailTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
