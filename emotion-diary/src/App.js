import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RouterTest from './components/RouterTest';

import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
        <RouterTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
