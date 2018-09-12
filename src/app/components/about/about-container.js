import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import About from './about'

import {sayHi} from '../../actions/index'

const mapStateToProps = state => {
  return {
    hiCount: state.hiCount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sayHi: () => {
      dispatch(sayHi())
    }
  }
}

const AboutContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(About))

export default AboutContainer