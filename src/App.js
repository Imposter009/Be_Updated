import './App.css';

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route, Link
} from 'react-router-dom';

import NavBar from './component/NavBar';
import News from './component/News';
import Weather from './component/Weather';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Weather /> */}
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/weather" element={<Weather />} />
            <Route exact path="/general" component={<Weather/>} element={<News key='general' size={9} category='general' />} />
            <Route exact path="/sports" element={<News key='sports' size={9} category='sports' />} />
            <Route exact path="/technology" element={<News key='technology' size={9} category='technology' />} />
            <Route exact path="/science" element={<News key='science' size={9} category='science' />} />
            <Route exact path="/health" element={<News key='health' size={9} category='health' />} />
            <Route exact path="/education" element={<News key='education' size={9} category='education' />} />
            <Route exact path="/entertainment" element={<News key='entertainment' size={9} category='entertainment' />} />
          </Routes>
        </Router>

      </div>
    )
  }
}
