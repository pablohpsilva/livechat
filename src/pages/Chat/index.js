import React from 'react'
import { appendClass } from '../../utils/util'

import ChatList from '../../components/ChatList'
import TextArea from '../../components/TextArea'

const author = 'pablohpsilva'
const data = [
  { author: 'abc', message: 'lorem ipsum dolor amet', timestamp: new Date().toDateString() },
  { author: 'pablohpsilva', message: 'come again?', timestamp: new Date().toDateString() },
  { author: 'abc', message: 'lorem ipsum dolor amet', timestamp: new Date().toDateString() },
  { author: 'abc', message: 'lorem ipsum dolor amet', timestamp: new Date().toDateString() },
  { author: 'abc', message: 'lorem ipsum dolor amet', timestamp: new Date().toDateString() },
  { author: 'abc', message: 'lorem ipsum dolor amet', timestamp: new Date().toDateString() },
  { author: 'pablohpsilva', message: 'i dont speak latim', timestamp: new Date().toDateString() }
]

class Chat extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [...data]
    }

    this.addData = this.addData.bind(this)
  }

  addData(message) {
    const newData = {
      author: 'pablohpsilva',
      message,
      timestamp: new Date().toDateString()
    }
    this.setState((state) => Object.assign(state, { data: [...state.data].concat(newData) }))
  }

  render () {
    const wrapperComputedClass = appendClass('chat-wrapper', this.props.className)

    return (
      <div
        className={wrapperComputedClass}>
        <ChatList
          data={this.state.data}
          author={author}/>

        <TextArea
          onEnter={(text) => this.addData(text)}
          placeholder="Type something here"/>
      </div>
    )
  }
}

export default Chat
