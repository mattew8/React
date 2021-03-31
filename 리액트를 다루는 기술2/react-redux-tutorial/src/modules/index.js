import counter from './counter';
import todos from './todos';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  // 이후 createStore 통해 스토어 만들 때는 리듀서를 하나만 사용해야 함!
  // 따라서 combineReducers 함수 통해 리듀서들을 합침
  counter,
  todos,
});

export default rootReducer;
