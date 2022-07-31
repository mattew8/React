import { useRef, useState } from "react";
import cn from "classnames";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import styled from "styled-components";
import { todoItemType } from "../types/todo";

const TodoItemBox = styled.div`
  border: 2px solid green;
  background: white;
  color: black;
  display: flex;
  padding: 2% 3% 2% 3%;
  &:nth-child(even) {
    background: #f8f9fa;
  }

  & > .checkbox {
    flex: 1;
    font-size: 1rem;
    .text {
      display: inline;
      margin-left: 0.5rem;
    }

    .box {
      display: inline-block;
    }

    .checked {
      & + .text {
        text-decoration: line-through;
      }
    }
  }
`;

const TodoItem = ({
  todo,
  removeTodo,
  changeToggle,
}: {
  todo: todoItemType;
  removeTodo: (todoId: Number) => void;
  changeToggle: (todoId: Number) => void;
}) => {
  const { id, text, checked } = todo;
  //   비구조화 객체 할당을 통해 todo 속 값들을 새로운 변수(text, checked)에 담아준 모습

  return (
    <TodoItemBox>
      <div className="checkbox" onClick={() => changeToggle(id)}>
        <div className={cn("box", { checked: checked })}>
          {/* checked가 true이면 className을 checked로 */}
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </div>
        <div className="text">{text}</div>
      </div>

      <div className="remove" onClick={() => removeTodo(id)}>
        <MdRemoveCircleOutline />
      </div>
    </TodoItemBox>
  );
};

export default TodoItem;
