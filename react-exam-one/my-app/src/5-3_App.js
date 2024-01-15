import logo from './logo.svg';
// import './App.css';
import React from 'react';


import MyFooter from './MyFooter';
import MyHeader from './MineHeader';

function App() {

  const myStyle = {
    App: {
      backgroundColor: 'lightblue',
    },
    h1: {
      color: 'red',
    },
  }

  return (
    <React.Fragment>
    <div className="App" style={myStyle.App}>
      <MyHeader />
      <h1 style={myStyle.h1}>My First React App</h1>
      <MyFooter />
    </div>
    </React.Fragment>
  );
}

export default App;
