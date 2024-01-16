import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import React, {useState, useEffect} from 'react';

const dummyList = [
  {
    id: 1, author: "xion", content: "오늘은 날씨가 좋아요", emotion: "happy", created_date: new Date().getTime()
  },
  {
    id: 2, author: "louis", content: "오늘은 날씨가 나빠요", emotion: "angry", created_date: new Date().getTime()
  },
  {
    id: 3, author: "tamsa", content: "오늘은 날씨가 그래요", emotion: "soso", created_date: new Date().getTime()
  }
]

function App() {
  return (
    <div className="App">
    <DiaryEditor />
    <DiaryList diaryList = {dummyList}/>
    </div>
  );
}

export default App;
