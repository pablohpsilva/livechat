import React from 'react'
import PropTypes from 'prop-types'
import { appendClass } from '../../utils/util'
import './Input.scss'

class Input extends React.Component {
  render () {
    const {
      className,
      label
    } = this.props
    const wrapperComputedClass = appendClass('InputWrapper', className)
    const inputComputedClass = appendClass('input-text', className)

    return (
      <div
        className={wrapperComputedClass}>
        {
          !!label &&
            <span
              className="float-text">
              { label }
            </span>
        }
        <input
          {...this.props}
          className={inputComputedClass}/>
      </div>
    )
  }
}

Input.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Input
