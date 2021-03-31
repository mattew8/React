import { useCallback, useState, useRef } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos() {
  const array = [];
  for (let i=1; i<=2500; i++){
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function App() {
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(4);
  // 왜 useState 사용x?? -> id값은 렌더링되는(보이는) 정보가 아니라, 순전히 새로운 항목 만들 때 참조되는 값이므로!

  const onInsert = useCallback( // props로 전달해야 할 함수를 만들때는 useCallback 사용하자! why? 처음 렌더링 된 후, 값 변화 생기면 또 렌더링 하면 되니까!!
    text => {
      const todo = {
        // 새로운 todo 생성
        id : nextId.current,
        text,
        checked: false,
      };
      setTodos(todos => todos.concat(todo)); // todo들의 list인 todos에도 새로운 todo를 추가!
      nextId.current += 1;
    }, [],
  )

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
      // todos에 변화가 생길 때마다, 받아온 id와 다른 todo들로만 구성된 Todos를 반환하도록!!
    },
    [],
  )

  const onToggle = useCallback(
    id => {
      setTodos(todos => 
        todos.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked} : todo,
          // 삼항 연산자 사용
          // todo.id === id 이면, 즉 todo.id 중 전달받은(클릭된) id인 녀석들은 checked만 반전
          // todo.id !== id 이면, 즉 클릭이 안된 todo들은 그냥 todo로 반환
          // 이 때 map을 사용해 이렇게 수정된 todo들로 이뤄진 새로운 todos 배열을 반환!!!
          // 왜 map 사용? id 값이 다를 때는 변화를 주지 않고,처음 받아온 상태 그대로 반환
          // -> 따라서 map을 사용해 변화가 필요한 원소만 업데이트, 나머지는 그대로 남겨둠
        ),
      );
    },
    [],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/> {/* 역시 TodoInsert에 props로 onInsert 전달! */}
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/> {/* TodoList에 props로 todos를 전달! */}
    </TodoTemplate>
  );
}

export default App;