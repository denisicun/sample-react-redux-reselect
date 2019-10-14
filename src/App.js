import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/timer/timer';
import MessageList from './components/message-list/message-list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Timer />
        <MessageList />
      </header>
    </div>
  );
}

export default App;
