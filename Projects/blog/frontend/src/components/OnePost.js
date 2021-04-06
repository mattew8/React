import { useState } from "react";
import styled from "styled-components";

const OnePostBox = styled.div`
  margin: 1% 0% 0 4%;
`;

export const OnePost = ({ blogData }) => {
  const { title, content, owner } = blogData;
  return (
    <OnePostBox>
      제목 : {title}
      <br />
      내용 : {content}
      <br />
      작성자 : {owner} <br />
    </OnePostBox>
  );
};
