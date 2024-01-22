import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import RouterTest from './components/RouterTest';

import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';

function App() { 
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader head_text={"App"} left_child={<MyButton text={"왼쪽 버튼"} onClick={()=>{alert("왼쪽버튼 클릭")}}/>}
        right_child={<MyButton text={"오른쪽 버튼"} onClick={()=>{alert("오른쪽버튼 클릭")}}/>}
        />
        <h2>App.js</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
