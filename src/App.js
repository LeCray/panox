import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Main from './Components/Main'

class App extends Component {
  render() {
    return (
      <div>
        <Header />    
        <Main />
      </div>
    );
  }
}

export default App;
