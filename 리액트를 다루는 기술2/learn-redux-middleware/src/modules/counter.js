import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// createAction -> 객체 만들어 줄 필요 없이, 간단하게 액션 생성 함수 선언 o
// 액션에 필요한 추가 데이터 : payload 라는 이름으로 지정
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 1초 뒤에 increase 혹은 decrease 함수를 디스패치
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

const initialState = 0; // 상태 꼭 객체일 필요x

// handleActions -> 간단하게 리듀서 함수 작성
// 첫 번째 파라미터 : 각 액션에 대한 업데이트 함수 / 두 번째 파라미터 : 초기 상태
const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
