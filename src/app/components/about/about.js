import React, {PureComponent} from 'react'
import img from '../../../assets/images/avatar.png'

export default class About extends PureComponent {
  render() {
    return (
      <div>
        About
        <img src="/assets/images/avatar.png" alt=""/>
        <img src={img} alt=""/>
      </div>
    )
  }
}