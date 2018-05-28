import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import './navbar.scss'

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
      </div>
    )
  }
}