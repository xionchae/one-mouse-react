import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import React, {useState, useRef, useEffect, useMemo, useCallback} from 'react';
// import Lifecycle from './Lifecycle';
// import OptimizeTest from './OptimizeTest';
// https://jsonplaceholder.typicode.com/comments

function App() {
  const [data, setData] = useState([]);

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
    
    setData(initData);
  }
  
  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    };
    dataId.current += 1;
    setData((data) => [...data, newItem]);  // 함수형 업데이트 (최신 상태를 보장, useCallback 사용 시)
  }, []);

  const onRemove = useCallback((tgtId) => {
    setData(data => data.filter((item) => item.id !== tgtId));
  }, []);

  const onEdit = useCallback((tgtId, newContent) => {
    setData((data) =>
      data.map((item) => 
        (item.id === tgtId ? {...item, content: newContent} : item)
      )
    );
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