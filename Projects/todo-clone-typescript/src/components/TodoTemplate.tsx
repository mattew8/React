import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import styled from "styled-components";
import { useState } from "react";
import { todoItemArrayType, todoItemType } from "../types/todo";

const TodoTemplate = () => {
  const [todoList, setTodoList] = useState<todoItemArrayType>([
    // state의 type 지정 ->
    // 해주지 않아도 type을 유추할 수 있지만,
    // 1. 복잡한 type의 경우(지금과 같은 object in Array)
    // 2. 상태가 null 일 수도 아닐수도 있을 때 의 경우에는 명시적으로 지정해주는 것이 좋다
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
