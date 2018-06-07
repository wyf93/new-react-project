import {createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import * as commonReducers from '../reducers/common'

const store = createStore(combineReducers(commonReducers), applyMiddleware(logger))

console.log(store.getState())

//异步注入reducer
store.asyncReducers = {}
const injectReducer = (key, reducer) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) {
    return
  }

  store.asyncReducers[key] = reducer
  let allAsyncReducers = {}
  Object.values(store.asyncReducers).forEach((reducers) => {
    Object.assign(allAsyncReducers,reducers)
  })
  store.replaceReducer(combineReducers({
    ...commonReducers,
    ...allAsyncReducers
  }))
}

export default store

export {
  injectReducer
}