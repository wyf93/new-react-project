import React, {Component} from 'react'
import Navbar from './components/navbar/navbar'
import Main from './components/main/main'

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

