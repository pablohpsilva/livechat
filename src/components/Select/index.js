import React from 'react'
import PropTypes from 'prop-types'
import { appendClass } from '../../utils/util'

import './Select.scss'

class Select extends React.PureComponent {
  render () {
    const {
      className,
      onChange,
      selected,
      options,
      label
    } = this.props
    const wrapperComputedClass = appendClass('select-wrapper', className)
    const inputComputedClass = appendClass('select', className)

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
        <select
          value={selected}
          className={inputComputedClass}
          onChange={({ target: { value } }) => onChange(value)}>
          {
            options.map((option, index) => (
              <option
                key={`option-${index}`}
                value={option.value}>
                {option.text}
              </option>
            ))
          }
        </select>
      </div>
    )
  }
}

Select.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string,
  options: PropTypes.array.isRequired,
  label: PropTypes.string
}

export default Select
