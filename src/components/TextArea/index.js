import React from 'react'
import PropTypes from 'prop-types'
import { appendClass } from '../../utils/util'
import './TextArea.scss'

class TextArea extends React.Component {
  onChangeEditableDiv (onChange) {
    onChange(this.refs.contentEditableDiv.textContent)
  }

  render () {
    const {
      className
    } = this.props
    const wrapperComputedClass = appendClass('TextAreaWrapper', className)
    const textAreaComputedClass = appendClass('textarea-text', className)

    return (
      <div
        className={wrapperComputedClass}>
        <textarea
          {...this.props}
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
  onChange: PropTypes.func,
}

export default TextArea
