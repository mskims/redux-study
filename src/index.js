import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import Root from './components/Root'
import createLogger from 'redux-logger'

const logger = createLogger()
const createStoreWithMiddlewares = applyMiddleware(logger)(createStore)
const store = createStoreWithMiddlewares(reducer)

render(
  <Root store={store} />,
  document.getElementById('root')
)
