import { todoItemArrayType, todoItemType } from "../types/todo";
import TodoItem from "./TodoItem";

const TodoList = ({
  todoList,
  setTodoList,
}: {
  todoList: todoItemArrayType;
  setTodoList: (todoList: todoItemArrayType) => void;
}) => {
  // 삭제 - 함수 작동시 클릭 된 todo의 id를 제외한 나머지로 이뤄진 todoList를 반환 -> setTodoList에 이를 넣어줌
  const removeTodo = (id: Number) => {
    setTodoList(todoList.filter((delTodo) => delTodo.id !== id));
  };

  // Toggle - 함수 작동시 클릭 된 todo의 id의 checked값을 바꾼 todoList를 반환 -> setTodoList에 이를 넣어줌
  const changeToggle = (id: Number) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <>
      {todoList.map((todo) => (
        <TodoItem
          todo={todo}
          removeTodo={removeTodo}
          changeToggle={changeToggle}
        />
      ))}
    </>
  );
};

export default TodoList;
