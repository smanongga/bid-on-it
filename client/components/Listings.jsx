import React from 'react'
import { apiGetAllListings } from '../api'

class Listings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items:[]
    }
    this.viewListing = this.viewListing.bind(this)
  }

  componentDidMount () {
    apiGetAllListings((err, items) => {
      console.log(items)
      this.setState({
        items: items.listings
      })
    })
    console.log(this.state)
  }

  viewListing(id) {
    this.props.history.push(`/viewlisting/${id}`)
  }

  render() {
    return (
      <div>
        <h2>Current Listings</h2>
        <div className="listings-container">
          {this.state.items.map((item, key) => {
            return (
              <div key={key} className="listing">
                <img src={item.picture_url} />
                <h2 onClick={e => this.viewListing(item.id)}>{item.name}</h2>
                <p>Curent bid: {item.current_bid}</p>
                <p>Auction finishes {new Date(item.finish_date).toLocaleTimeString('en-GB') + '\n'+ new Date(item.finish_date).toLocaleDateString('en-GB')}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Listings

// {items.listings.map((item, key) => {
//   return (
//     <div key={key} className="listing">
//     <img src={item.picture_url} />
//     <h2>{item.name}</h2>
//     <p>{item.current_bid}</p>
//     <p>{item.finish_date}</p>
//     </div>
//   )
// })}
