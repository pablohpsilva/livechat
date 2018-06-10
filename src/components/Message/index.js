import React from 'react'
import PropTypes from 'prop-types'
import { appendClass } from '../../utils/util'
import './Message.scss'

class Message extends React.PureComponent {
  render () {
    const {
      author,
      message,
      right,
      className,
      timestamp
    } = this.props
    const compClass = appendClass('message-wrapper', className, right ? 'right' : 'left')
    // const messageComputedClass = appendClass('message', right ? 'right' : 'left')

    return (
      <div
        className={compClass}>
        <div
          className="message">
          <span
            className="message-author">
            { author }
          </span>
          <p
            className="message-message">
            { message }
          </p>
          <span
            className="message-timestamp">
            { timestamp }
          </span>
        </div>
      </div>
    )
  }
}

Message.propType = {
  right: PropTypes.bool,
  author: PropTypes.string,
  message: PropTypes.string,
  timestamp: PropTypes.string
}

export default Message
