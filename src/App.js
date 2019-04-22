import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Navbar />
        <Profile />
      </div>
    );
  }
}

export default App;
