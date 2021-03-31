import { createStore } from "redux";

// DOM 직접 조작
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션 타입의 이름 정의 - 주로 대문자 / 고윳값 가짐
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성 함수 작성
// -> 액션 객체는 type 값 반드시 가져야! (그 이외는 값은 마음대로)
// 요 함수들이 작동될 때마다 해당 액션 객체가 만들어짐
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초깃값 정의
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 함수(변화를 일으키는 함수 <- state와 action 받음) 정의
function reducer(state = initialState, action) {
  // state가 undefined일 때는(리듀서 함수 맨 처음 호출시 undefined임) initialState를 기본값으로 사용

  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        // 불변성 유지
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// 스토어 만들기(redux의 createStore 필요)
const store = createStore(reducer);

// 스토어 내장 함수 사용하기
// 1) render 함수 : 상태가 업데이트 될 때마다 호출, 이미 html을 사용해 만들어진 UI 속성을 상태에 따라 변경
const render = () => {
  const state = store.getState(); // 현재 상태 불러옴

  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }

  // 카운터 처리
  counter.innerHTML = state.counter;
};

render();
store.subscribe(render);
// 상태가 업데이트 될 때마다 render 함수를 호출

// 2) subscribe 함수 : 스토어의 상태가 바뀔 때마다 render 함수를 호출(=구독하기)
const listener = () => {
  console.log("상태가 업데이트 됨");
};
const unsubscribe = store.subscribe(listener);

unsubscribe(); // 나중에 구독을 비활성화할 때 함수를 호출
// 여기서는 subscribe 함수를 사용하지만, React에서는 react-redux라는 라이브러리가 이를 대신해줌

// 액션 발생시키기 = 디스패치
// -> 스토어의 내장 함수 dispatch 사용 - 파라미터는 액션 객체
divToggle.onclick = () => {
  // DOM 요소에 클릭 이벤트 설정

  store.dispatch(toggleSwitch());
  // 액션을 스토어에 전달! (변화 발생했어~)
};

btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};

btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
