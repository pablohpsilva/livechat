import React from 'react'
import PropTypes from 'prop-types'
import { appendClass } from '../../utils/util'
import './RadioOptions.scss'

class RadioOptions extends React.Component {
  render () {
    const {
      name,
      options,
      className,
      onChange,
      checked,
      label
    } = this.props
    const wrapperComputedClass = appendClass('radioOptions-wrapper', className)

    console.log(options)

    return (
      <div
        className={wrapperComputedClass}>
        {
          !!label &&
          <span
            className="radioOptions-label">
            {label}
          </span>
        }
        <div
          className="radioOptions-items">
          {
            (options && options.length)
            ? options.map((el, index) => (
                <div
                  key={`input-radio-${index}`}
                  className="radioOptions-input-radio">
                  <input
                    name={name}
                    value={el.value}
                    checked={el.value === checked}
                    onChange={(ev) => onChange(ev)}
                    type="radio" />
                  <label
                    htmlFor={el.value}
                    className="radioOptions-label-radio">
                    { el.text }
                  </label>
                </div>
              ))
            : null
          }
        </div>
      </div>
    )
  }
}

RadioOptions.propTypes = {
  // id: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number,
  // ]),
  // placeholder: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.string,
  // style: PropTypes.object,
  className: PropTypes.string,
  // type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}

export default RadioOptions
