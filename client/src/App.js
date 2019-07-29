import React from 'react';
import './App.css';
import { Navbar, Landing } from './components/layout';
import { Login, Register } from './components/auth';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
      </div>
    </Router>
  );
}

export default App;
