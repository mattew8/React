// 모듈 : 액션 타입, 액션 생성 함수, 리듀서를 작성한 코드

// 1. 액션 타입 정의하기
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE'; // 액션 타입은 '모듈 이름/액션 이름' 형태로 작성!

// 2. 액션 생성 함수 만들기
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
// export함으로써 다른 파일에서 해당 함수 사용 o
// export -> 이후 불러올 때 import {increase, decrease} from 형태

// 3. 초기 상태 및 리듀서 함수 만들기
const initailState = {
  number: 0,
};

function counter(state = initailState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}
export default counter;
// export default - 단 한 개만 내보낼 수 있음
// -> 이후 불러올 때 import counter from 형태
