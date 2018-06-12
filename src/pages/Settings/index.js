import React from 'react'
import { assoc } from 'ramda'
import { connect } from 'react-redux'

import {
  updateInterface,
  updateClockFormat,
  updateCtrlEnter,
  updateLanguage,
  resetConfig,
  saveUsername,
  updateUserMessage
} from '../../store/actions';
import i18n from '../../i18n'

import Input from '../../components/Input'
import RadioOptions from '../../components/RadioOptions'
import Select from '../../components/Select'
import { appendClass } from '../../utils/util'
import './Settings.scss'

class Settings extends React.Component {
  constructor(props) {
    super(props)

    const { language: lng } = this.props

    this.state = {
      oldUser: '',
      languages: [
        { value: 'en', text: i18n.t('settings.languages.en', { lng }) },
        { value: 'es', text: i18n.t('settings.languages.es', { lng }) },
        { value: 'ptBr', text: i18n.t('settings.languages.ptBr', { lng }) },
      ]
    }

    this.updateUser = this.updateUser.bind(this)
  }
  setTheme() {
    const darkTheme = (this.props.interfaceColor === 'dark')
    document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light')
  }

  saveOldUser (oldUser) {
    if (!this.state.oldUser) {
      this.setState(assoc('oldUser', oldUser))
    }
  }

  updateUser ({ target: { value } }) {
    this.saveOldUser(this.props.user)
    this.props.saveUsername(value)
  }

  updateUserMessages () {
    if (this.state.oldUser && this.props.user !== this.state.oldUser) {
      const { oldUser } = this.state
      const { User } = this.props
      this.props.updateUserMessage({
        oldUser,
        User
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
    this.updateUserMessages()
  }

  render () {

    const {
      user,
      interfaceColor,
      clockDisplay,
      ctrlEnter,
      language: lng,
      updateInterface,
      updateClockFormat,
      updateCtrlEnter,
      updateLanguage,
      resetConfig
    } = this.props

    const wrapperComputedClass = appendClass('settings-wrapper', this.props.className)

    return (
      <div
        className={wrapperComputedClass}>
        <div
          className="settings-config">
          <Input
            label={ i18n.t('settings.username', { lng }) }
            onChange={this.updateUser}
            value={user} />

          <RadioOptions
            label={ i18n.t('settings.interfaceColor.label', { lng }) }
            checked={interfaceColor}
            onChange={({ target: { value } }) => updateInterface(value)}
            options={[
              { value: 'light', text: i18n.t('settings.interfaceColor.light', { lng }) },
              { value: 'dark', text: i18n.t('settings.interfaceColor.dark', { lng }) },
            ]}/>

          <RadioOptions
            label={ i18n.t('settings.clockDisplay.label', { lng }) }
            checked={clockDisplay}
            onChange={({ target: { value } }) => updateClockFormat(value)}
            options={[
              { value: 'MMM DD hh:mm A', text: i18n.t('settings.clockDisplay.twelve', { lng }) },
              { value: 'MMM DD HH:mm', text: i18n.t('settings.clockDisplay.twenty', { lng }) },
            ]}/>

          <RadioOptions
            label={ i18n.t('settings.ctrlEnter.label', { lng }) }
            checked={ctrlEnter}
            onChange={({ target: { value } }) => updateCtrlEnter(value)}
            options={[
              { value: 'on', text: i18n.t('settings.ctrlEnter.on', { lng }) },
              { value: 'off', text: i18n.t('settings.ctrlEnter.off', { lng }) },
            ]}/>

          <Select
            selected={lng}
            onChange={(value) => updateLanguage(value)}
            label={ i18n.t('settings.languages.label', { lng }) }
            options={this.state.languages}/>
        </div>

        <div
          className="settings-footer">
          <button
            onClick={resetConfig}
            className="settings-button-restore">
            { i18n.t('settings.restore', { lng }) }
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
  language: store.settingsState.language,
  user: store.userState.user,
})

const mapDispatchToProps = dispatch => ({
  updateInterface: (value) => dispatch(updateInterface(value)),
  updateClockFormat: (value) => dispatch(updateClockFormat(value)),
  updateCtrlEnter: (value) => dispatch(updateCtrlEnter(value)),
  updateLanguage: (value) => dispatch(updateLanguage(value)),
  resetConfig: () => dispatch(resetConfig()),
  saveUsername: (value) => dispatch(saveUsername(value)),
  updateUserMessage: (value) => dispatch(updateUserMessage(value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
