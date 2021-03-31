import { connect } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect(
  // connect 첫 번째 함수 : 리덕스 스토어 안의 상태를 컴포넌트 props로 넘겨줌
  // 얘 이름이 mapStateToProps
  (state) => ({
    number: state.counter,
  }),

  // connect 두 번째 함수 : 컴포넌트에 props로 넘겨줄 액션 생성 함수
  // 얘 이름이 mapDispatchToProps
  {
    increaseAsync,
    decreaseAsync,
  }
)(
  // 리덕스로 연동할 컴포넌트 지정
  CounterContainer
);
