import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Usage } from './pages';

function App() {
  return (
    <div className="App">
      <Route path="/usage" component={Usage} />
    </div>
  );
}

export default App;
