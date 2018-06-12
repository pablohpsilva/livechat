import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Chat from '../pages/Chat'
import Settings from '../pages/Settings'
import Toolbar from '../components/Toolbar'

import {
  saveMessage,
  saveSocketio
} from '../store/actions'

import './App.scss';
import env from '../env.json'

class App extends Component {
  async createSocketIO() {
    return this.props.saveSocketio(window.io.connect(`${env.socketio_host}:${env.socketio_port}`))
  }

  connectSocketIO () {
    this.props.socketio.on('connect', () => console.log('connected'))
  }

  receiveSocketIOMessage () {
    this.props.socketio.on('message', (msg) => {
      const message = {
        ...msg,
        timestamp: new Date()
      }
      console.log(message)
      this.props.saveMessage(message)
    })
  }

  disconnetSocketIO () {
    this.props.socketio.on('disconnect', () => console.log('disconnected'))
    this.props.socketio.disconnect()
  }

  async componentDidMount () {
    await this.createSocketIO()
    this.connectSocketIO()
    this.receiveSocketIOMessage()
  }

  componentWillUnmount () {
    this.disconnetSocketIO()
  }

  render () {
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

const mapStateToProps = store => ({
  socketio: store.socketioState.socketio
})

const mapDispatchToProps = dispatch => ({
  saveMessage: (value) => dispatch(saveMessage(value)),
  saveSocketio: (value) => dispatch(saveSocketio(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
