import React, {Component} from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import Loadable from 'react-loadable'

const Home = Loadable({
  loader: () => import('../home/home'),
  loading: () => null
})

const About = Loadable({
  loader: () => import('../about/about'),
  loading: () => null
})

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