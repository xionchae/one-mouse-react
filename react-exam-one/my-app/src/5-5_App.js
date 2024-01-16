// props 전달하기

import Counter from "./Counter";
import MyHeader from "./MineHeader";
import Container from "./Container";

function App() {

  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    initialValue: 5
  };

  return (
    // counterProps를 Counter 컴포넌트에 spread 연산자를 사용하여 전달한다.
    // Counter 컴포넌트에서는 비구조화 할당 문법을 사용하여 props를 전달받아 사용할 수 있다.
    <Container>
    <div>
      <MyHeader />
      <Counter {...counterProps} />
    </div>
    </Container>
  );
}

export default App;