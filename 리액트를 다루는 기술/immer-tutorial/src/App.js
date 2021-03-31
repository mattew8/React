import React, {useRef, useCallback, useState} from 'react';
import produce from 'immer';
import './App.css';

function App() {
  const nextId = useRef(1);
  const [ form, setForm ] = useState({ name: '', username: ''});
  const [ data, setData ] = useState({
    array: [],
    uselessValue: null
  });

  // input 수정
  const onChange = useCallback(
    e => {
      const { name , value} = e.target;
      setForm(
        produce(draft => {
              // 수정하고 싶은 상태 = form / 상태 업데이트하는 함수 = draft => {draft[name] = value}
          draft[name] = value;
        })
      );
    },
    [form]
  )

  // form 등록
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };

      // array에 새 항목 등록
      setData(
        produce(draft => {
          draft.array.push(info);
          // 직접적인 배열 변화 일으키는 push, slice 등 사용 가능!
        })
      );

      // form 초기화
      setForm({
        name: '',
        username: ''
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  // 항목 제거
  const onRemove = useCallback(
    id => {
      setData({
        ...data,
        array: data.array.filter(info => info.id !== id)
      });
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
        name = "username"
        placeholder = "아이디"
        value = {form.username}
        onChange = {onChange}
        />
        <input
        name = "name"
        placeholder = "이름"
        value = {form.name}
        onChange = {onChange}
        />
        <button type="submit">등록</button>
      </form>

      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;