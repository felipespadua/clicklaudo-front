import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Login from './Login'
import Cadastro from './Cadastro'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
      </div>
    </BrowserRouter>
  );
}

export default App;
