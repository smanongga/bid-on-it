import React from 'react'
import { apiGetAllListings } from '../api'

class Listings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items:[]
    }
    // this.getItems = this.getItems
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


  render() {
    return (
      <div>
      {this.state.items.map((item, key) => {
        return (
          <div key={key} className="listing">
          <img src={item.picture_url} />
          <h2>{item.name}</h2>
          <p>Curent bid: {item.current_bid}</p>
          <p>Auction finishes {item.finish_date}</p>
          </div>
        )
      })}
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
