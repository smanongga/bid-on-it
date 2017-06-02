// navigation to go here, push to history on button clicks, not Link

import React from 'react'
import {Link} from 'react-router-dom'

function Header(props) {
    console.log(props)

    return (
        <div>
            <Link to="/viewlistings/">View Listings</Link>
            <Link to={`/listitem/1`}> List an item</Link>
            <Link to={"/viewlisting/1"}>View a listing</Link>
        </div>
    )
}


export default Header