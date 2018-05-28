import React, {Component} from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from '../home/home'
import About from '../about/about'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    )
  }
}