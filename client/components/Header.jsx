// navigation to go here, push to history on button clicks, not Link

import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'

function Header (props) {
    console.log(props)

  return (
        <div>
            <Link to="/viewlistings/">View Listings</Link>
            <Link to={`/listitem/`}> List an item</Link>
            <Login />
        </div>
    )
}


export default Header
