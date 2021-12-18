import React from 'react';
import logo from './logo.svg';
import Bar from './components/Bar';
import ContentContainer from './components/ContentContainer';
import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App flex">
      <BrowserRouter>
        <NavBar/>
        <ContentContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
