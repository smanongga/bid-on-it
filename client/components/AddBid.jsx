import React from 'react'

import {apiPostBid} from '../api'

class AddBid extends React.Component {
  constructor (props) {
    console.log(props)
    super(props)
    this.state = {
      id: props.bidItem,
      userId: 5
    }
    this.fieldChanged = this.fieldChanged.bind(this)
    this.submitBid = this.submitBid.bind(this)
  }

  fieldChanged (e) {
    e.preventDefault()
    this.setState({
      [e.target.bidAmount]: e.target.value
    }, console.log(this.state))
  }

  submitBid (e) {
    e.preventDefault()
    const newBid = this.state
    console.log(newBid)
    apiPostBid(newBid, (err, bidId) => {
      this.props.history.push(`/viewlisting/${this.props.bidItem}`)
      if (err) {
        console.log(err)
      }
    })
  }

  render () {
    return (
      <div>
        <form>
          <input type='text' placeholder='Bid Amount' name='amount' onChange={this.fieldChanged} />
          <button onClick={e => this.submitListing(e)}>Submit Bid</button>
        </form>
      </div>
    )
  }
}
export default AddBid
