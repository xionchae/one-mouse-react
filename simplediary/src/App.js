import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import React, { useRef, useEffect, useMemo, useCallback, useReducer } from 'react';
// import Lifecycle from './Lifecycle';
// import OptimizeTest from './OptimizeTest';
// https://jsonplaceholder.typicode.com/comments

const reducer = (state, action) => {  // 상태 변화 일어나기 전에 데이터인 state, action을 받아와서 새로운 state를 반환하는 함수
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      const created_date = new Date().getTime();
      const newItem = { ...action.data, created_date };
      return [...state, newItem]; // 기존 state에 newItem 추가
    case "REMOVE":
      return state.filter((item) => item.id !== action.tgtId);
    case "EDIT":
      return state.map((item) => (item.id === action.tgtId ? {...item, content: action.newContent} : item));
    default:
      // throw new Error(`Unhandled action type: ${action.type}`);
      return state;
  }
}


function App() {
  // const [data, setData] = useState([]);
  const [data, dispatch] = useReducer(reducer, []);  // useReducer 사용

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments").then((res) => res.json());

    const initData = res.slice(0, 10).map((item) => {
      return {
        author: item.email,
        content: item.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current ++
      }
    });

    // setData(initData);
    dispatch({type: "INIT", data: initData}); // setData 대신 dispatch 사용
  }
  
  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    // const created_date = new Date().getTime();
    // const newItem = {
    //   author,
    //   content,
    //   emotion,
    //   created_date,
    //   id: dataId.current
    // };
    // dataId.current += 1;
    // setData((data) => [...data, newItem]);  // 함수형 업데이트 (최신 상태를 보장, useCallback 사용 시)

    dispatch({type: "CREATE", data: {
      author,
      content,
      emotion,
      id: dataId.current ++
    }});  // setData 대신 dispatch 사용
  }, []);

  const onRemove = useCallback((tgtId) => {
    // setData(data => data.filter((item) => item.id !== tgtId));
    dispatch({type: "REMOVE", tgtId}); // setData 대신 dispatch 사용
  }, []);

  const onEdit = useCallback((tgtId, newContent) => {
    dispatch({type: "EDIT", tgtId, newContent}); // setData 대신 dispatch 사용
    // setData((data) =>
    //   data.map((item) => 
    //     (item.id === tgtId ? {...item, content: newContent} : item)
    //   )
    // );
  }, []);

  const getDiaryAnalysis = useMemo(() => {

    const goodCount = data.filter((item) => item.emotion >= 3).length;
    const badCount = data.filter((item) => item.emotion < 3).length;
    const goodRatio = (goodCount / data.length) * 100;
    return {goodCount, badCount, goodRatio}
    }, [data.length]
  ); 

  const {goodCount, badCount, goodRatio} = getDiaryAnalysis;

  return (
    <div className="App">
    <DiaryEditor onCreate = {onCreate}/>
    <div>전체 일기 : {data.length}개</div>
    <div>좋은 일기 : {goodCount}개</div>
    <div>나쁜 일기 : {badCount}개</div>
    <div>좋은 일기 비율 : {goodRatio}%</div>
    <DiaryList diaryList = {data} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
}

export default App; 