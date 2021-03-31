import React, { useCallback } from 'react';
import { List } from 'react-virtualized'
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
    const rowRenderer = useCallback(
        ({ index, key, style }) => {
            const todo = todos[index];
            return (
                <TodoListItem
                    todo = {todo}
                    key = {key}
                    onRemove = {onRemove}
                    onToggle = {onToggle}
                    style = {style}
                />
            );
        },
        [onRemove, onToggle, todos],
    );

    return(
        <List
            className = "TodoList"
            width={512} // 전체 너비
            heigh={513} // 전체 높이
            rowCount={todos.length} // 전체 항목 개수
            rowHeight={57}  // 각 항목 높이
            rowRenderer={rowRenderer}   // 항목 렌더링 할 때 사용되는 함수
            list={todos}    // 배열
            style={{outline: 'none'}}   // List에 기본 적용되는 outline 스타일을 제거
        />
    );
};

export default React.memo(TodoList);

