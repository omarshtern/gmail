import React, { useState } from "react";
import "./App.css";
import Header from "./componnets/Header";
import { Sidebar } from "./componnets/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className='app__body'></>
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
