import React from 'react'
import PropTypes from 'prop-types'
import VirtualList from 'react-tiny-virtual-list'

import Message from '../../components/Message'
import { appendClass } from '../../utils/util'
import './ChatList.scss'

class ChatList extends React.Component {
  componentDidUpdate() {
    const scrollWindow = document.querySelector('.chatList-wrapper > div')
    if (scrollWindow) {
      const top = scrollWindow.getBoundingClientRect().bottom * 1000
      scrollWindow.scroll({ top, behavior: 'smooth' })
    }
  }

  render () {
    const {
      user,
      data,
      clockDisplay
    } = this.props
    const wrapperComputedClass = appendClass('chatList-wrapper', this.props.className)

    const component = (data && data.length)
      ? <VirtualList
          className={wrapperComputedClass}
          width='100%'
          height={400}
          scrollToAlignment="end"
          scrollToIndex={data.length - 1}
          itemCount={data.length}
          itemSize={5} // Also supports variable heights (array or function getter)
          renderItem={({ index }) =>
            <Message
              key={`message-${index}`}
              right={data[index].user === user}
              author={data[index].user}
              message={data[index].message}
              timestamp={data[index].timestamp}
              clockDisplay={clockDisplay} />
          }
        />
      : <div
          className={wrapperComputedClass}>
        </div>

    return component
  }
}

ChatList.propTypes = {
  data: PropTypes.array,
  user: PropTypes.string,
  clockDisplay: PropTypes.string,
}

export default ChatList
