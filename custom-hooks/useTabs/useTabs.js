export const useTabs = (initailTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initailTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
