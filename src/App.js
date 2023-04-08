import './App.css';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import Weather from './component/Weather';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Weather />
        <News key='1' size={9} category='general' />
        <News key='2' size={9} category='sport' />
        <News key='3' size={9} category='education' />
      </div>
    )
  }
}
