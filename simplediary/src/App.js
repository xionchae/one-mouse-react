import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import React, {useState, useRef} from 'react';

// const dummyList = [
//   {
//     id: 1, author: "xion", content: "오늘은 날씨가 좋아요", emotion: "happy", created_date: new Date().getTime()
//   },
//   {
//     id: 2, author: "louis", content: "오늘은 날씨가 나빠요", emotion: "angry", created_date: new Date().getTime()
//   },
//   {
//     id: 3, author: "tamsa", content: "오늘은 날씨가 그래요", emotion: "soso", created_date: new Date().getTime()
//   }
// ]

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    };
    dataId.current += 1;
    setData([...data, newItem]);
  };

  const onRemove = (tgtId) => {
    setData(data.filter((item) => item.id !== tgtId));
  }

  const onEdit = (tgtId, newContent) => {
    setData(
      data.map((item) => 
        (item.id === tgtId ? {...item, content: newContent} : item)
      )
    );
  }

  return (
    <div className="App">
    <DiaryEditor onCreate = {onCreate}/>
    <DiaryList diaryList = {data} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
}

export default App;