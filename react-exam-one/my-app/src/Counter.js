// 5-4 state를 사용하는 컴포넌트 만들기

import React, {useState} from 'react';

const Counter = ({ initialValue }) => {
  console.log(initialValue);
  // h2 태그 안에 숫자를 표시하고, + 버튼과 - 버튼을 만들어주세요. 여기 값의 상태가 변경된다고 보면 됨
  const [count, setCount] = useState(initialValue);

  const onIncrease = () => {
    setCount(count + 1);
  }

  const onDecrease = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

// 만약 props로 initialValue가 전달되지 않았을 때 기본값을 0으로 설정하고 싶다면, 아래와 같이 defaultProps를 설정해주면 됩니다.
// Counter.defaultProps = {
//   initialValue: 0,
// }

export default Counter;