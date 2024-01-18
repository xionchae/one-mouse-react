import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import React, {useState, useRef, useEffect} from 'react';
import Lifecycle from './Lifecycle';
// https://jsonplaceholder.typicode.com/comments

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments").then((res) => res.json());

    console.log(res.length);

    const initData = res.slice(0, 10).map((item) => {
      console.log(dataId.current);
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
    <Lifecycle />
    <DiaryEditor onCreate = {onCreate}/>
    <DiaryList diaryList = {data} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
}

export default App;