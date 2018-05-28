import React, {Component} from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from './home'
import About from './about'

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