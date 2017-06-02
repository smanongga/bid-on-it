import React from 'react'
import request from 'superagent'
import {connect} from 'react-redux'

import {apiPostListing} from '../api'

class ListAnItem extends React.Component {
  constructor (props) {
    super(props)
    const d = new Date()
    this.state = {
      name: '',
      description: '',
      picture_url: '',
      starting_bid: 0,
      err: null
    }
    this.fieldChanged = this.fieldChanged.bind(this)
    this.submitListing = this.submitListing.bind(this)
  }

  fieldChanged (e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    }, console.log(this.state))
  }

  submitListing (e) {
    e.preventDefault()
    const newListing = this.state
    newListing.user_id = this.props.user_id
    console.log(newListing, 'new listing')
    apiPostListing(newListing, (err, listingId) => {
      this.props.history.push(`/viewlisting/${listingId}`)
    })
  }

  render() {
    return (
      <div>
      <h2 className='form-header'>Add a new item</h2>
        <form className='list-item-container'>
          <input className='form' type='text' placeholder='Name' name='name' onChange={this.fieldChanged} />
          <input className='form'  type='text' placeholder='Description' name='description' onChange={this.fieldChanged} />
          <input className='form' type='text' placeholder='Picture url' name='picture_url' onChange={this.fieldChanged} />
          <input className='form' type='text' placeholder='Starting Bid' name='starting_bid' onChange={this.fieldChanged} />
          <button className='form-button' onClick={e => this.submitListing(e)}>Add Listing</button>
        </form>
      </div>
    )
  }
}

function listAnItem (props) {
  console.log(props)
  return (
    <button onClick={()=> {click(props)}}>fdg</button>
  )
}

function click (props){
  props.history.push('/tyest')
}

function mapStateToProps(state) {
  return {
    user_id: state.loggedIn.userId
  }
}

export default connect(mapStateToProps)(ListAnItem)
