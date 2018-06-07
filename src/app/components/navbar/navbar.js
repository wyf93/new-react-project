import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import store from '../../store/store'

import './navbar.scss'

export default class Navbar extends Component {
  handleClick() {
    console.log(store.getState())
  }

  render() {
    return (
      <div className="navbar" onClick={this.handleClick}>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
      </div>
    )
  }
}