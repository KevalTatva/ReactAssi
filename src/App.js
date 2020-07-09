import React from 'react';
import './App.css';
import LoginForm from './Pages/Login.js';
import UserList from './Pages/UserList';
import MaintenUser from './Pages/MaintenUser';
import { BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter } from 'react-router-dom'


export default function App() {
  return (
    <div className="App">
      {/* <h1>Log On</h1>
      <LoginForm />
      <Menu /> */}
      <Router>
        <Route path="/Login" component = {LoginForm} />
        <Route path="/UserList" component = {UserList} />
        <Route path="/SignUp/" component = {MaintenUser} />
        <Route path="/UserDetail/:Id" component = {MaintenUser} />
      </Router>
    </div>
    
  );
}


