import React, { useState } from 'react';
import './App.css';
import Header from './componnets/Header';

function App() {

  return (
    <div className="app">
      <Header  />
      <Sidebar  />
    </div>
  );
}

export default App;
