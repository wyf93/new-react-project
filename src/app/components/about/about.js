import React, {PureComponent} from 'react'
import img from '../../../assets/images/avatar.png'

export default class About extends PureComponent {
  render() {
    return (
      <div>
        <span>{this.props.hiCount}</span>
        About()
        <img src="/assets/images/avatar.png" alt=""/>
        <img src={img} alt="" onClick={this.props.sayHi}/>
      </div>
    )
  }
}