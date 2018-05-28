import React, {Component} from 'react'
import Navbar from './components/navbar'
import Main from './components/main'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
      </div>
    )
  }
}

