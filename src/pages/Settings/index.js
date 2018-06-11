import React from 'react'
import { connect } from 'react-redux'
import {
  updateInterface,
  updateClockFormat,
  updateCtrlEnter,
  resetConfig,
  saveUsername,
  updateUserMessage
} from '../../store/actions';

import Input from '../../components/Input'
import RadioOptions from '../../components/RadioOptions'
import { appendClass } from '../../utils/util'
import './Settings.scss'

class Settings extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      oldUsername: ''
    }

    this.updateUsername = this.updateUsername.bind(this)
  }
  setTheme() {
    const darkTheme = (this.props.interfaceColor === 'dark')
    document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light')
  }

  saveOldUsername (oldUsername) {
    if (!this.state.oldUsername) {
      this.setState((state) => Object.assign(state, { oldUsername }))
    }
  }

  updateUsername ({ target: { value } }) {
    this.saveOldUsername(this.props.username)
    this.props.saveUsername(value)
  }

  updateUsernameMessages () {
    if (this.state.oldUsername && this.props.username !== this.state.oldUsername) {
      const { oldUsername } = this.state
      const { username } = this.props
      this.props.updateUserMessage({
        oldUsername,
        username
      })
    }
  }

  componentDidMount() {
    this.setTheme()
  }

  componentDidUpdate() {
    this.setTheme()
  }

  componentWillUnmount() {
    this.updateUsernameMessages()
  }

  render () {

    const {
      username,
      interfaceColor,
      clockDisplay,
      ctrlEnter,
      updateInterface,
      updateClockFormat,
      updateCtrlEnter,
      resetConfig
    } = this.props

    const wrapperComputedClass = appendClass('settings-wrapper', this.props.className)

    return (
      <div
        className={wrapperComputedClass}>
        <div
          className="settings-config">
          <Input
            label="username"
            onChange={this.updateUsername}
            value={username} />

          <RadioOptions
            label="Interface color"
            checked={interfaceColor}
            onChange={({ target: { value } }) => updateInterface(value)}
            options={[
              { value: 'light', text: 'Light' },
              { value: 'dark', text: 'Dark' },
            ]}/>

          <RadioOptions
            label="Clock display"
            checked={clockDisplay}
            onChange={({ target: { value } }) => updateClockFormat(value)}
            options={[
              { value: 'MMM DD hh:mm A', text: '12 hours' },
              { value: 'MMM DD HH:mm', text: '24 hours' },
            ]}/>

          <RadioOptions
            label="Ctrl+Enter to send Messages"
            checked={ctrlEnter}
            onChange={({ target: { value } }) => updateCtrlEnter(value)}
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
            onClick={resetConfig}
            className="settings-button-restore">
            Restore to defaults
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  interfaceColor: store.settingsState.interfaceColor,
  clockDisplay: store.settingsState.clockDisplay,
  ctrlEnter: store.settingsState.ctrlEnter,
  username: store.userState.username,
})

const mapDispatchToProps = dispatch => ({
  updateInterface: (value) => dispatch(updateInterface(value)),
  updateClockFormat: (value) => dispatch(updateClockFormat(value)),
  updateCtrlEnter: (value) => dispatch(updateCtrlEnter(value)),
  resetConfig: () => dispatch(resetConfig()),
  saveUsername: (value) => dispatch(saveUsername(value)),
  updateUserMessage: (value) => dispatch(updateUserMessage(value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
