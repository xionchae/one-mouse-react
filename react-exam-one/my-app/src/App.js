import Counter from "./Counter";
import MyHeader from "./MineHeader";

function App() {

  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    initialValue: 5
  };

  return (
    <div>
      <MyHeader />
      <Counter {...counterProps} />
    </div>
  );
}

export default App;