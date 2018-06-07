import React, {Component} from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import Loadable from 'react-loadable'
import {injectReducer} from '../../store/store'
import {hiCount} from '../../reducers/about'

const Home = Loadable({
  loader: () => import('../home/home'),
  loading: () => null
})

const About = Loadable({
  loader: () => {
    injectReducer('about', {hiCount})
    return import('../about/about-container')
  },
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