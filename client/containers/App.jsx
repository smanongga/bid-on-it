import React from 'react'
import {Route} from 'react-router-dom'
import Listings from '../components/Listings'
import Header from '../components/Header'
import ListAnItem from '../components/ListAnItem'
import ViewItemAndBid from '../components/ViewItemAndBid'

class App extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }
  render () {
    return (
      <div className="sss">
        <Header routeProps={this.props} />
        <Route path={'/viewlistings/'} component={Listings} />
        <Route path={'/viewlisting/:id'} component={ViewItemAndBid} />
        <Route path={'/listitem/:userid'} component={ListAnItem} />
      </div>
    )
  }
}

export default App
