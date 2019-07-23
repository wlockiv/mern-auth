import React from 'react';
import './App.css';
import { Navbar, Landing } from './components/layout';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Landing />
    </Router>
  );
}

export default App;
