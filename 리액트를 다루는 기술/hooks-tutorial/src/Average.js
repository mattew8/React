import { useCallback, useMemo, useState, useRef } from "react";

const getAverage = numbers => {
    // 전달받은 numbers의 평균 계산
    console.log('평균값 계산 중...');
    if (numbers.length === 0) {
        return 0;
    };
    const sum = numbers.reduce((a, b) => a+b);  // reduce 통해 numbers의 총합 구하기
    return sum  / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);   // 입력된 숫자들을 담는 list
    const [number, setNumber] = useState('');   // list에 추가하는 숫자
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);  // onChange 이벤트 발생시 e.target.value를 setNumber에 전
    }, []); // useCallback 함수를 통해 컴포넌트가 처음 렌더링될 때만 실행

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        // number를 추가한 새로운 list 반환
        // parseInt 함수 : 문자열 인자를 구문 분석하여 특정 진수의 정수를 반환!
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b>{avg}
            </div>
        </div>
    );
};

export default Average;