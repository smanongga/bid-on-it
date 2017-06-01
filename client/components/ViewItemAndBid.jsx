import React from 'react'

import bidItems from '../../server/data'

const ViewItemAndBid = (props) => {
  return (
    <div className='row view-item-bid'>
    <div className='col-md-12 item-title'>{props.name}</div>
    <div className='col-md-4'>
      <div className='image'>
      <img src={props.picture_url} />
    </div>
    <div className='col-md-8'>
      <div className='submitted-by'><p><b>Submitted By:</b><br />{props.user_name}</p></div>
      <div className='description'><p><b>Description:</b><br />{props.description}</p></div>
      <div className='starting-bid'><p><b>Starting Bid:</b><br />{props.starting_bid}</p></div>
      <div className='row bid-listing'>
        {props.bids.map(bid => {
              return (
                <div key={bid.id}>
                  <p>{bid.user_name}</p>
                  {bid.bid_date}
                  {bid.bid_amount}

                </div>
              )
            })}
      </div>
    </div>

  )
}

export default ViewItemAndBid
