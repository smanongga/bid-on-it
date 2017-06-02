import React from 'react'
import connect from 'react-redux'

import {apiPostBid} from '../api'

class AddBid extends React.Component {
  constructor (props) {
    console.log('p', props)
    super(props)
    this.state = {
      id: props.bidItem,
      user_id: 5,
      bidAmount: 0
    }
    this.fieldChanged = this.fieldChanged.bind(this)
    this.submitBid = this.submitBid.bind(this)
  }

  fieldChanged (e) {
    e.preventDefault()
    this.setState({
      bidAmount: e.target.value
    }, console.log(this.state))
  }

  submitBid (e) {
    e.preventDefault()
    const newBid = {id: this.props.bidItem, user_id: this.props.user_id, bidAmount: this.state.bidAmount}
    console.log('This is new bid' + newBid)
    apiPostBid(newBid, (err, bidId) => {
      console.log(this.props, 'pro')
      this.props.reloadList()
      if (err) {
        console.log(err)
      }
    })
  }

  render () {
    return (
      <div>
        <form>
          <div className="col-md-6">
          <input type='text' placeholder='Bid Amount' name='amount' onChange={this.fieldChanged} className='form-control' /></div>
          <div className="col-md-6">
          <button onClick={e => this.submitBid(e)} className='btn btn-default'>Submit Bid</button>
        </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {user_id: state.loggedIn.userId}
}
export default connect(mapStateToProps)(AddBid)
