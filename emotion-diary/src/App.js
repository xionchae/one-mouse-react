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
      return state.filter((item) => item.id !== action.payload.id);
    case "EDIT":
      return state.map((item) => item.id === action.data.id ? {...action.data} : item);
    default:
      return state;
  }
  return newState;
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() { 
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);

  // CREATE
  const onCreate = (date, content, emotion) => {
    dispatch(
      {type : "CREATE", 
      data : {
        id : dataId.current,
        date : new Date(date).getTime(),
        content : content,
        emotion : emotion
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
        content : content,
        emotion : emotion
      }
    });
  }

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreate, onRemove, onEdit}}>
        <BrowserRouter>
          <div className="App">
            <h2>App.js</h2>
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
