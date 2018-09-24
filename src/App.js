import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';


import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';
import './assets/css/App.css';


class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="container-app">
          <LeftComponent classDeclared="left-side-component"/>
          <RightComponent classDeclared="right-side-component"/>
        </div>
      </Router>
    );
  }
}

export default App;
