import React from 'react'
import {Route} from 'react-router-dom'

import Listings from './Listings'
<<<<<<< HEAD
import Header from '../components/Header'
import ViewItemAndBid from '../components/ViewItemAndBid'

=======
import Header from'../components/Header'
import ListAnItem from '../components/ListAnItem'
import ViewItemAndBid from '../components/ViewItemAndBid'
>>>>>>> 5807ddb7d4f8001411c9e53211d2af53161a00ea


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

<<<<<<< HEAD
      </div>
    )
  }
=======
    render(){
        
        return(
            <div>
                <Header routeProps={this.props}/>
                <h1>Body of app here</h1>
                <Route path={"/viewlistings/"} component={Listings}/>
                <Route path={"/viewlisting/:id"} component={ViewItemAndBid}/>
                <Route path={"/listitem/:userid"} component={ListAnItem}/>
            </div>
        )
    }
>>>>>>> 5807ddb7d4f8001411c9e53211d2af53161a00ea
}
// function Listings (props) {
//     console.log(props)
//     return (<p>Hi</p>)
// }

export default App
