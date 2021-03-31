import { useState, useCallback } from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState(''); // input에 입력하는 값 관리하기 위해 상태 설정!

    const onChange = useCallback(e => { // 첫 렌더링 시 함수를 만든 후 재사용 할 수 있도록 useCallback사용!
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            // onInsert 통해 해당 value를 list에 추가했으니, setValue('')로 value값을 초기화

            e.preventDefault();
            // submit 이벤트는 브라우저 새로고침 발생! 이를 방지하기 위해 preventDefault함수 호출
        },
        [onInsert, value],
    )

    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
            placeholder="할 일을 입력하세요"
            value = {value}
            onChange = {onChange}
            />
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;

