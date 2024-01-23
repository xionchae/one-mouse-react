import './App.css';
import React, {useReducer, useRef} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import RouterTest from './components/RouterTest';

import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';
// import MyButton from './components/MyButton';
// import MyHeader from './components/MyHeader';
const reducer = (state, action) => {
  let newState = [];
  switch(action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      const newItem = {
        ...action.data
      }
      newState = [newItem, ...state];
      break;
    case "REMOVE":
      return state.filter((item) => item.id !== action.data.id);
    case "EDIT":
      return state.map((item) => item.id === action.data.id ? {...action.data} : item);
    default:
      return state;
  }
  return newState;
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dumyData = [
  {
    id : 1,
    emotion : "1", 
    content : "오늘은 1 행복했다.",
    date : 1705906214711
  },
  {
    id : 3,
    emotion : "2", 
    content : "오늘은 2 행복했다.",
    date : 1705906214715
  },
  {
    id : 4,
    emotion : "5", 
    content : "오늘은 3 행복했다. ",
    date : 1705906214720
  },
];

function App() { 
  const [data, dispatch] = useReducer(reducer, dumyData);
  const dataId = useRef(0);

  // CREATE
  const onCreate = (date, content, emotion) => {
    dispatch(
      {type : "CREATE", 
      data : {
        id : dataId.current,
        date : new Date(date).getTime(),
        content,
        emotion
      }
    });
    dataId.current += 1;
  }

  // REMOVE
  const onRemove = (targetId) => {
    dispatch({type : "REMOVE", targetId});
  }

  // EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch(
      {type : "EDIT", 
       data : {
         id : targetId,
         date : new Date(date).getTime(),
         content,
         emotion
      }
    });
  }

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreate, onRemove, onEdit}}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit" element={<Edit />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
