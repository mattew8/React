import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

const mapStateToProps = (state) => ({
  // state = 현재 스토어가 지니고 있는 상태

  number: state.counter.number,
});

const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
// connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
// mapStateToProps : 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
// mapDispatchProps : 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수

// connect함수 호출 -> 또 다른 함수 반환 -- 반환된 함수에 파라미터로 컴포넌트 넣어주면 --> 리덕스 연동된 컴포넌트 만들어짐
