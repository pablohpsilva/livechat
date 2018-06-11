import React from 'react'
import { appendClass } from '../../utils/util'
import { curry } from 'ramda'

import Input from '../../components/Input'
import RadioOptions from '../../components/RadioOptions'
import './Settings.scss'

class Settings extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: 'Guest-World-1',
      interfaceColor: 'light',
      clockDisplay: '12',
      ctrlEnter: 'off',
      defaultConfig: {
        username: 'Guest-World-1',
        interfaceColor: 'light',
        clockDisplay: '12',
        ctrlEnter: 'off'
      }
    }

    this.onChangeInputText = curry(this.onChangeInputText.bind(this))
    this.onChangeRadio = curry(this.onChangeRadio.bind(this))
    this.onClickDefault = curry(this.onClickDefault.bind(this))
  }

  setNewState(newState) {
    this.setState((state) => Object.assign(state, newState))
  }

  onChangeInputText(key, { target: { value } }) {
    const data = { [key]: value || `Guest-${Math.random().toString(36).slice(4)}` }
    this.setNewState(data)
  }

  onChangeRadio(key, { target: { value } }) {
    const data = { [key]: value }
    this.setNewState(data)
  }

  onClickDefault() {
    this.setNewState(this.state.defaultConfig)
  }

  setTheme() {
    const darkTheme = (this.state.interfaceColor === 'dark')
    document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light')
  }

  componentDidMount() {
    this.setTheme()
  }

  componentWillUpdate() {
    this.setTheme()
  }

  render () {
    const {
      username,
      interfaceColor,
      clockDisplay,
      ctrlEnter,
    } = this.state
    const wrapperComputedClass = appendClass('settings-wrapper', this.props.className)

    return (
      <div
        className={wrapperComputedClass}>
        <div
          className="settings-config">
          <Input
            label="username"
            onChange={this.onChangeInputText('username')}
            value={username} />

          <RadioOptions
            label="Interface color"
            checked={interfaceColor}
            onChange={this.onChangeRadio('interfaceColor')}
            options={[
              { value: 'light', text: 'Light' },
              { value: 'dark', text: 'Dark' },
            ]}/>

          <RadioOptions
            label="Clock display"
            checked={clockDisplay}
            onChange={this.onChangeRadio('clockDisplay')}
            options={[
              { value: '12', text: '12 hours' },
              { value: '24', text: '24 hours' },
            ]}/>

          <RadioOptions
            label="Ctrl+Enter to send Messages"
            checked={ctrlEnter}
            onChange={this.onChangeRadio('ctrlEnter')}
            options={[
              { value: 'on', text: 'On' },
              { value: 'off', text: 'Off' },
            ]}/>

          {/* <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select> */}
        </div>

        <div
          className="settings-footer">
          <button
            onClick={this.onClickDefault}
            className="settings-button-restore">
            Restore to defaults
          </button>
        </div>
      </div>
    )
  }
}

export default Settings
