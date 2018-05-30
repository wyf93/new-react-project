import {SAY_HI} from '../actionTypes'

const hiCount = (state = 0, action) => {
  switch(action.type) {
  case SAY_HI:
    alert(1)
    return state + 1
  default:
    return state
  }
}

export default hiCount