import React, { useState } from 'react';

const InterationSample = () => {
    const [names , setNames] = useState([
        { id: 1, text: '눈사람'},
        { id: 2, text: '얼음'},
        { id: 3, text: '눈'},
        { id: 4, text: '바람'},
    ]);
    const [inputText, setInputText] = useState(''); // input 상태 설정
    const [nextId, setNextId] = useState(''); // 데이터 추가 시  id상태 설정

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId, // nextId 값을 id로 설정
            text: inputText
        });
        setNextId(nextId+1); // nextId 1씩 증가
        setNames(nextNames); // names 값을 업데이트
        setInputText(''); // inputText를 비움
    }

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };

    const nameList = names.map(name => (
        <li key={name.id} onDoubleClick={()=>onRemove(name.id)}>
            {name.text}
        </li>
    ));
    return(
        <>
        <input value={inputText} onChange={onChange}/>
        <button onClick={onClick}>추가</button>
        <ul>{nameList}</ul>
        </>
    );
}

export default InterationSample;