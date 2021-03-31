import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './modules'; // rootReducer를 index.js라는 이름의 파일에 넣어줬기 때문에 modules까지만 경로 입력
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import loggerMiddleware from './lib/loggerMiddleware';
import { createLogger } from 'redux-logger'; // 보통 라이브러리로 만들어져있는 미들웨어 사용함
import ReduxThunk from 'redux-thunk';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk)); // 미들웨어는 스토어를 생성하는 과정에서 적용됨
// redux-thunk는 액션 생성 함수에서 일반 액션 객체를 반환하는 대신, 함수를 반환
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
