// navigation to go here, push to history on button clicks, not Link

import React from 'react'
import {Link} from 'react-router-dom'

function Header (props) {
    console.log(props)

  return (
    <div className="header-master">
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Bid-On-It</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"></li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="header">
            <Link to="/viewlistings/" className='btn btn-default'>View Listings</Link>
            <Link to={`/listitem/1`} className='btn btn-default'> List an item</Link>
            <Link to={"/viewlisting/1"} className='btn btn-default'>View a listing</Link>
    </div>
  </div>
    )
}


export default Header
