import React from 'react'
import {Route} from 'react-router-dom'

import Listings from './Listings'
import Header from '../components/Header'
import ViewItemAndBid from '../components/ViewItemAndBid'



class App extends React.Component {
  constructor (props) {
    super(props)
  }


  render () {
    return(
      <div>
        <h1>Test Text</h1>
        {/*<Header/> Uncomment when header is exporting*/}
        <Route path={"/viewlistings/"} component={Listings} />
        <Route path={"/viewlisting/:id"} component={ViewItemAndBid} />
        {/*<Route path={"/list/item/:userid"} component={ListAnItem}/>*/}

      </div>
    )
  }
}

export default App
