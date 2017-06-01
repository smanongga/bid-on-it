import React from 'react'
import {BrowserRouter } from 'react-router-dom'
import App from '../containers/App'

const Router = () => {
  return (
      <BrowserRouter history={history} >
          <App />

      </BrowserRouter>
  )
}


export default Router

