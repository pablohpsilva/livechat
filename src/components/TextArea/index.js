import React from 'react'
import PropTypes from 'prop-types'
import { omit } from 'ramda'
import { appendClass } from '../../utils/util'
import './TextArea.scss'

class TextArea extends React.Component {
  constructor(props) {
    super(props)

    this.onEnter = this.props.onEnter
    this.state = {
      text: ''
    }

    this.onChangeText = this.onChangeText.bind(this)
    this.cleanText = this.cleanText.bind(this)
  }

  cleanText() {
    this.setState(state => Object.assign(state, { text: '' }))
  }

  onChangeText({ target: { value } }) {
    this.setState(state => Object.assign(state, { text: value }))
  }

  componentDidMount() {
    this.refs.textarea.addEventListener('keydown', (e) => {
      if ((this.props.submitOnEnter && e.keyCode === 13 && !e.metaKey)||
        (!this.props.submitOnEnter && e.keyCode === 13 && e.metaKey)) {
        this.onEnter(this.state.text)
        this.cleanText()
      }
    });
  }

  componentWillUnmount() {
    this.refs.textarea.removeEventListener('keydown', () => ({}))
  }

  render () {
    const { className } = this.props
    const textAreaProps = omit(['onEnter', 'submitOnEnter'], this.props)

    const wrapperComputedClass = appendClass('TextAreaWrapper', className)
    const textAreaComputedClass = appendClass('textarea-text', className)

    return (
      <div
        className={wrapperComputedClass}>
        <textarea
          ref="textarea"
          {...textAreaProps}
          onChange={this.onChangeText}
          value={this.state.text}
          className={textAreaComputedClass}>
        </textarea>
      </div>
    )
  }
}

TextArea.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  rows: PropTypes.number,
  cols: PropTypes.number,
  submitOnEnter: PropTypes.bool,
  // onChange: PropTypes.func,
  onEnter: PropTypes.func.isRequired
}

export default TextArea
