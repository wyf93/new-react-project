import {SAY_HI} from '../actionTypes'

const hiCount = (state = 0, action) => {
  switch(action.type) {
  case SAY_HI:
    return state + 1
  default:
    return state
  }
}

export{
  hiCount
}