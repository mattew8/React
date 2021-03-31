import { useState } from 'react';

export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value },
        } = event;

        let willUpdate = true;
        if (typeof validator === 'function') {
            willUpdate = validator(value);
            // 이를 통해 validator 함수(유효성 검사)는 다른 곳에서 정의o
        }
        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};
