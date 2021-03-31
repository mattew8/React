import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

// 액션 타입 선언 -> 한 요청당 세 개(타입/성공/실패)
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// thunk 함수 생성
// -> 시작할 때, 성공했을 때, 실패했을 때 다른 액션 디스패치
// 즉, 기존 액션을 실행하기 전, 이러이러한 역할을 수행해라..! 라고 알려주는 느낌
// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST }); // 요청 시작 알림
//   try {
//     const response = await api.getPost(id);
//     dispatch({
//       // 요청 성공
//       type: GET_POST_SUCCESS,
//       payload: response.data,
//     });
//   } catch (e) {
//     dispatch({
//       // 요청 실패
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     });
//     throw e;
//     // 이후 컴포넌트에서 해당 에러 조회할 수 있도록
//   }
// };
// --- 리팩토링 --> createRequestThunk : 액션 타입과 API 요청 함수 넣어주면 남은 작업 알아서 수행
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS });
  try {
    const response = await api.getUsers();
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

// 초기 상태 선언
// 요청 로딩 중 상태는 loading 이라는 객체에서 관리
const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: true,
        // 요청 시작
      },
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
        // 요청 완료
      },
      post: action.payload,
    }),
    [GET_POST_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
        // 요청 완료
      },
    }),
    [GET_USERS]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: true,
        // 요청 시작
      },
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false,
      },
      users: action.payload,
    }),
    [GET_USERS_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false,
      },
    }),
  },
  initialState
);

export default sample;
