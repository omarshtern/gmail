import React, { useState } from "react";
import "./App.css";
import Header from "./componnets/Header";
import { Sidebar } from "./componnets/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Mail } from "./componnets/Mail";
import { EmailList } from "./componnets/EmailList";
import { SendMail } from "./componnets/SendMail";
import { useSelector } from "react-redux";
import { selectSenMessageIsOpen } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";
import Login from "./componnets/Login";

function App() {
  const sendMessageIsOpen = useSelector(selectSenMessageIsOpen);

  const user = useSelector(selectUser)
  return (
    <Router>

      {!user ? (
        <Login />
      ) : (
        <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </div>
      )}
    </Router>
  );
}

export default App;
