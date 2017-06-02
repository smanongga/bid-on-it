import React from 'react'
import {Route} from 'react-router-dom'
import Listings from '../components/Listings'
import Header from'../components/Header'
import ListAnItem from '../components/ListAnItem'
import ViewItemAndBid from '../components/ViewItemAndBid'

class App extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <Header routeProps={this.props} />
        <h1>Body of app here</h1>
        <Route path={'/viewlistings/'} component={Listings} />
        <Route path={'/viewlisting/:id'} component={ViewItemAndBid} />
        <Route path={'/listitem/:userid'} component={ListAnItem} />
      </div>
    )
  }
}
// function Listings (props) {
//     console.log(props)
//     return (<p>Hi</p>)
// }

export default App
