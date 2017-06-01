import React from 'react'
import AddBid from './AddBid'
import {apiGetListing} from '../api'

export default class ViewItemAndBid extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      listing: { name: '', description: '', starting_bid: '', user_name: '', picture_url: '', bids: [] }
    }
  }

  componentDidMount () {
    this.getListing()
  }

  getListing () {
    apiGetListing(this.props.match.params.id, (error, listing) => {
      if (error) {
        return console.log(error)
      }
      this.setState(listing)
    })
  }

  render () {
    return (
      <div className='row view-item-bid'>
        <div className='col-md-12 item-title'>{this.state.listing.name}</div>
        <div className='col-md-4'>
          <div className='image'>
            <img src={this.state.listing.picture_url} />
          </div>
        </div>
        <div className='col-md-8'>
          <div className='submitted-by'><p><b>Submitted By:</b><br />{this.state.listing.user_name}</p></div>
          <div className='description'><p><b>Description:</b><br />{this.state.listing.description}</p></div>
          <div className='starting-bid'><p><b>Starting Bid:</b><br />{this.state.listing.starting_bid}</p></div>
          <div className='row bid-listing'>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {this.state.listing.bids.map(bid => {
                  return (
                    <tr>
                      <td key={bid.id}>{bid.user_name}</td>
                      <td>{bid.bid_date}</td>
                      <td>{bid.bid_amount}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className='bid-form'>
            <AddBid bidItem={this.state.listing.id} />
          </div>
        </div>
      </div>
    )
  }
}
