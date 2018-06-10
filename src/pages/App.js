import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Input from '../components/Input'
import TextArea from '../components/TextArea'
import Message from '../components/Message'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Input
          label="vaca" />
        <TextArea
          placeholder="vaca" />

        <Message
          right
          author="You"
          message="akljsdkl aksjd kalsj dadj aksdlajs djaskd akjd laj sdla sdlj asjd asdjasjd aksjdklas dka skd alskjd aklsjd "
          timestamp={new Date().toDateString()}/>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
