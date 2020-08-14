import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

function RouterWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default RouterWrapper;
