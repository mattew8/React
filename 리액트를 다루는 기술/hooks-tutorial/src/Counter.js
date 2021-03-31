import React, { useReducer, useState } from 'react';

// 리듀서 함수
function reducer(state, action) {
                // 현재 상태(state)와 업데이트 위한 액션 값(action) 받음

    switch (action.type) {  // action.type에 따라 다른 작업 수행
        case 'INCREMENT':
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        default:
            // 아무것도 해당되지 않을 때는 기존 상태 반환
            return state;
    }
}

const Counter = () => {
    const [state , dispatch] = useReducer(reducer, {value: 0}); // useReducer(리듀서 함수, 해당 리듀서의 기본값)
    // -> useReducer 사용시 state와 dispatch 함수를 받아옴

    return(
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b> 입니다
            </p>
            <button onClick={()=>dispatch({type: 'INCREMENT'})}>+1</button>
            <button onClick={()=>dispatch({type: 'DECREMENT'})}>-1</button>
        </div>
    );
};

export default Counter;