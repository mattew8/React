import NewPosts from "./NewPosts";
import QA from "./QA";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

const NaviBox = styled.div`
  & > .blogList {
    display: inline-block;
    margin: 2% 3% 1% 0;
  }
`;

const Navi = () => {
  return (
    <NaviBox>
      <div className="blogList">
        <Link to="posts">new</Link>
      </div>
      <div className="blogList">
        <Link to="QA">QA</Link>
      </div>

      <Route path="/posts" component={NewPosts} />
      <Route path="/QA" component={QA} />
    </NaviBox>
  );
};

export default Navi;
