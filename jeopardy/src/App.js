import React, { useEffect, useState } from "react";
import './App.css';
import Board from './components/board';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Board></Board>
    </div>
  );
}

export default App;
