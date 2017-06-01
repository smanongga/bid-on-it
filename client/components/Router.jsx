import React from 'react'
import {HashRouter as Router } from 'react-router-dom'
import App from '../containers/App'

export const getRouter = () => {
  return (
      <Router >
          <App />

      </Router>
  )
}




