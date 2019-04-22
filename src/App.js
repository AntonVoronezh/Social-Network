import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

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
