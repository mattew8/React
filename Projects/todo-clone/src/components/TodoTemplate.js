import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import styled from "styled-components";
import { useState } from "react";

const TemplateBox = styled.div`
  margin: 0 auto;
  margin-top: 5%;
  /* text-align: center; */
  width: 512px;
  background-color: #22b8cf;
  color: white;
  font-size: 1.3rem;
  border-radius: 5px;

  & > .CloneName {
    text-align: center;
    height: 50px;
    line-height: 50px;
    /* text 세로 중앙 정렬을 위해 이렇게 하는데.. 맞는 방법인지 여쭤보자 */
  }
`;

const TodoTemplate = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: "할 일 1",
      checked: false,
    },
    {
      id: 2,
      text: "할 일 222",
      checked: false,
    },
  ]);

  return (
    <TemplateBox>
      <div className="CloneName">TodoClone</div>
      <TodoInsert todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </TemplateBox>
  );
};

export default TodoTemplate;
