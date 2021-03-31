import React from 'react';
import PropsTypes from 'prop-types';

const MyComponent = ({name, age, children}) => {
    return <div>
        안녕하세요, 제 이름은 {name}입니다<br/>
        children 값은 {children}입니다<br/>
        나이는 {age}입니다
        </div>
};

MyComponent.defaultProps ={
    name: '기본 이름'
};

MyComponent.prototype = {
    name: PropsTypes.string,
    age: PropsTypes.number.isRequired
};

export default MyComponent;
