import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import Blog from './components/Blog/Blog'

const App = () => {
  return (
    <div className="app">
      <Toolbar />
      <Blog />
    </div>
  );
}

export default App;
