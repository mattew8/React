import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import React, { useState, useRef } from "react";
import { todoItemArrayType, todoItemType } from "../types/todo";

const InsertBox = styled.form`
  background: #495057;
  width: 512px;
  height: 35px;
  margin: 0 auto;
  display: flex;

  & > input {
    background: none;
    outline: none;
    border: none;
    flex-grow: 5;
    color: white;
    padding-left: 3%;
    &::placeholder {
      color: white;
    }
  }

  & > button {
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    flex-grow: 0.1;
    font-size: 1.5rem;
  }
`;

const TodoInsert = ({
  todoList,
  setTodoList,
}: {
  todoList: todoItemArrayType;
  setTodoList: (todoList: todoItemArrayType) => void;
}) => {
  // input 입력 관리
  const [inputVal, setInputVal] = useState("");
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const nextId = useRef(3); // 하나씩 늘어날 id

  // todoList에 새 항목 추가
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    const newTodo = {
      id: nextId.current,
      text: inputVal,
      checked: false,
    };
    setTodoList(todoList.concat(newTodo));
    setInputVal("");
    e.preventDefault(); // form으로 만들었으니까....
    // e.target.reset(); // input창 초기화
    nextId.current += 1; // current를 안해주면 error
  };

  return (
    <InsertBox onSubmit={addTodo}>
      <input placeholder="할 일을 입력하세요" onChange={inputChange} />
      <button type="submit">
        <MdAdd />
      </button>
    </InsertBox>
  );
};

export default TodoInsert;
