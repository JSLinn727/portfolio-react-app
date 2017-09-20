import React, { PropTypes } from 'react'
import { NavLink } from 'react-router-dom'

import './NavGallery.css'

import js from '../../../assets/langIcons/javascript.svg'
import node from '../../../assets/langIcons/node.svg'
import react from '../../../assets/langIcons/react.svg'
import css from '../../../assets/langIcons/css.svg'

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  // //Need route or component array
  //
  // navToggleRight = () => {
  //   // increment arrow of components +1
  // }
  //
  // navToggleLeft = () => {
  //   // increment arrow of components -1
  // }

  render() {
    return (
      <nav className="GalleryNav">
        {/* <i className="fa fa-arrow-left fa-2x arrow" onClick={navToggleLeft}  aria-hidden="true" /> */}
        <div className="navWrap">
          <NavLink activeClassName="active" to="/cssgallery">
            <img className="navImg navBg" src={css} alt="CSS Projects" />
          </NavLink>
        </div>
        <div className="navWrap">
          <NavLink activeClassName="active" to="/jsgallery">
            <img className="navImg navBg" src={js} alt="JavaScript Projects" />
          </NavLink>
        </div>
        <div className="navWrap">
          <NavLink activeClassName="active" to="/reactgallery">
            <img className="navBg" id="navReact" src={react} alt="React Projects" />
          </NavLink>
        </div>
        <div className="navWrap">
          <NavLink activeClassName="active" to="/nodegallery">
            <img className="navImg navBg" src={node} alt="nodeJS Projects" />
          </NavLink>
        </div>
        {/* <i className="fa fa-arrow-right fa-2x arrow" onClick={navToggleRight} aria-hidden="true" /> */}
      </nav>
    )
  }
}
