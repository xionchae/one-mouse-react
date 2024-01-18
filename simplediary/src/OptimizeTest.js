// 컴포넌트 재사용 실습용 파일

import React, {useState, useEffect} from 'react';

const OptimizeTest = () => {

  const CountView = React.memo(( {count} ) => {
    useEffect(() => {
      console.log(`count가 ${count}로 변경되었습니다.`);
    });
    return (
      <div>{count}</div>
    )
  })

  const TextView = React.memo(( {text} ) => { 
    useEffect(() => {
      console.log(`text가 ${text}로 변경되었습니다.`);
    });
    return (
      <div>{text}</div>
    )
  })

  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div style={{padding:50}}>
      <div>
        <h2>count</h2>
        <CountView count={count}/>
        <button onClick={() => setCount(count + 1)}>증가</button>
      </div>
      <br />
      <div>
        <h2>text</h2>
        <TextView text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  )
}

export default OptimizeTest;