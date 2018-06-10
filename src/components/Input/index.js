import React from 'react'
import { View } from 'react-native'

class Input extends React.PureComponent {
  render () {
    const compClass = ['Input', this.props.className || ''].join(' ').trim()
    return (
      <View
        className={compClass}>
        { this.props.children }
      </View>
    )
  }
}

export default Input