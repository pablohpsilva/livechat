import React from 'react'
import { NavLink } from 'react-router-dom'
import { appendClass } from '../../utils/util'

import './Toolbar.scss'

class Toolbar extends React.Component {
  render () {
    const {
      className,
      unreadMessages
    } = this.props
    const wrapperComputedClass = appendClass('toolbar-wrapper', className)

    return (
      <div
        className={wrapperComputedClass}>
        <NavLink
          className="toolbar-item"
          activeClassName="active"
          to="/chat">
          <span
            className="icon-chat"></span>

          {
            unreadMessages &&
            <span
              className="indicator indicator-chat">1</span>
          }
        </NavLink>

        <NavLink
          className="toolbar-item"
          activeClassName="active"
          to="/settings">
          <span
            className="icon-adjust"></span>
        </NavLink>
      </div>
    )
  }
}

export default Toolbar
