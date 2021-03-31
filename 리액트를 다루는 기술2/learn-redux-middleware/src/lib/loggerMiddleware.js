// 미들웨어 : 액션을 디스패치 했을 때 이를 처리하기 앞서 사전에 지정된 작업들
// -> 액션과 리듀서 사이의 중간자!
// 가능한 대표적 작업 : 액션을 콘솔엥 기록, 액션을 아예 취소, 다른 종류 액션을 추가로 디스패치 ...

const loggerMiddleware = (store) => (next) => (action) => {
  // 미들웨어 기본 구조 -- 함수를 반환하는 함수를 반환하는 함수
  //   next파라미터? -> 함수 형태, store.dispatch와 비슷한 역할
  // but 차이 = next(action)을 호출하면 그다음 처리해야 할 미들웨어에게 액션 넘겨줌
  //   미들웨어 내부에서 store.dispatch를 사용하면 첫 번째 미들웨어부터 다시 처리됨
  // 미들웨어에서 next를 사용하지 않으면 액션이 리듀서에 전달x(=액션 무시!)

  console.group(action && action.type); //   액션 타입으로 log 그룹화
  console.log('이전 상태', store.getState());
  console.log('액션', action);
  next(action); //   다음 미들웨어 or 리듀서에 액션 넘겨줌
  console.log('다음 상태', store.getState());
  console.groupEnd();
};

export default loggerMiddleware;
