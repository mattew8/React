import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './modules';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    {/* 컴포넌트에서 스토어 사용할 수 있도록 App 컴포넌트를 Provider로 감싸줌! */}
    {/* Provider 컴포넌트는 props로 store을 전달해줘야 함 */}
    <App />
  </Provider>,
  document.getElementById('root')
);
