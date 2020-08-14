import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { CounterContainer, Usage } from './pages';

function App() {
  return (
    <div className="App">
      <Route path="/usage" component={Usage} />
      <Route path="/counter" component={CounterContainer} />
    </div>
  );
}

export default App;
