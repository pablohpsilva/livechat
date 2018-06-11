import React from 'react'
import { connect } from 'react-redux'
import {
  saveMessage
} from '../../store/actions';
import { appendClass } from '../../utils/util'

import ChatList from '../../components/ChatList'
import TextArea from '../../components/TextArea'

class Chat extends React.Component {
  constructor(props) {
    super(props)

    this.saveOutgoingMessage = this.saveOutgoingMessage.bind(this)
  }

  saveOutgoingMessage (value) {
    const message = {
      author: this.props.author,
      message: value,
      timestamp: new Date()
    }
    this.props.saveMessage(message)
  }

  setTheme () {
    const darkTheme = (this.props.interfaceColor === 'dark')
    document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light')
  }

  componentDidMount () {
    this.setTheme()
  }

  render () {
    const {
      author,
      clockDisplay,
      messages
    } = this.props
    const wrapperComputedClass = appendClass('chat-wrapper', this.props.className)

    return (
      <div
        className={wrapperComputedClass}>
        <ChatList
          data={messages}
          author={author}
          clockDisplay={clockDisplay}/>

        <TextArea
          onEnter={this.saveOutgoingMessage}
          placeholder="Type something here"/>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  interfaceColor: store.settingsState.interfaceColor,
  clockDisplay: store.settingsState.clockDisplay,
  author: store.userState.username,
  messages: store.messagesState.messages
})

const mapDispatchToProps = dispatch => ({
  saveMessage: (value) => dispatch(saveMessage(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
