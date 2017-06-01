import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import reducers from './reducers'
//import App from './components/App'
import Router from './components/Router'


const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router/>
    </Provider>,
    document.getElementById('app')
  )
})
