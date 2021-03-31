import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';
  // 카테고리 선택 안되면 기본값으로 all

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
