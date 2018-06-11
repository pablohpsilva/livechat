import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Chat from '../pages/Chat'
import Settings from '../pages/Settings'
import Toolbar from '../components/Toolbar'

import './App.scss';

class App extends Component {
  render() {
    return (
      <div
        className="app-wrapper">
        <Router>
          <div
            className="app-content">
            <Toolbar />

            <Route
              exact
              path="/"
              component={Chat} />

            <Route
              exact
              path="/chat"
              component={Chat} />

            <Route
              exact
              path="/settings"
              component={Settings} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
