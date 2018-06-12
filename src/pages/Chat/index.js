import React from 'react'
import { connect } from 'react-redux'
import {
  saveMessage,
  clearUnreadMessage
} from '../../store/actions';
import { appendClass } from '../../utils/util'
import i18n from '../../i18n'

import ChatList from '../../components/ChatList'
import TextArea from '../../components/TextArea'

class Chat extends React.Component {
  constructor(props) {
    super(props)

    this.saveOutgoingMessage = this.saveOutgoingMessage.bind(this)
  }

  sendSocketIOMessage (message) {
    this.props.socketio.emit('message', message)
  }

  saveOutgoingMessage (value) {
    const message = {
      user: this.props.user,
      message: value,
      timestamp: new Date()
    }
    this.props.saveMessage(message)
    this.sendSocketIOMessage(message)
  }

  setTheme () {
    const darkTheme = (this.props.interfaceColor === 'dark')
    document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light')
  }

  componentDidMount () {
    this.setTheme()
    this.props.clearUnreadMessage()
  }

  render () {
    const {
      user,
      clockDisplay,
      ctrlEnter,
      language: lng,
      messages
    } = this.props
    const wrapperComputedClass = appendClass('chat-wrapper', this.props.className)

    return (
      <div
        className={wrapperComputedClass}>
        <ChatList
          data={messages}
          user={user}
          clockDisplay={clockDisplay}/>

        <TextArea
          submitOnEnter={ctrlEnter !== 'on'}
          onEnter={this.saveOutgoingMessage}
          placeholder={i18n.t('chat.textArea', { lng }) }/>
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
  socketio: store.socketioState.socketio,
  messages: store.messagesState.messages
})

const mapDispatchToProps = dispatch => ({
  saveMessage: (value) => dispatch(saveMessage(value)),
  clearUnreadMessage: (value) => dispatch(clearUnreadMessage(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
