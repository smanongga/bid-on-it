import React from 'react'
import request from 'superagent'

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
      user_id: 1,
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
    console.log(newListing)
    //to be replaced
    apiPostListing(newListing, (err, listingId) => {
      this.props.history.push(`/viewlisting/${listingId}`)
      this.props.history.push('/viewlisting/' + listingId)
    })
  }

  render () {
    return (
      <div>
        <form>
          <input type='text' placeholder='Name' name='name' onChange={this.fieldChanged} />
          <input type='text' placeholder='Description' name='description' onChange={this.fieldChanged} />
          <input type='text' placeholder='Picture url' name='picture_url' onChange={this.fieldChanged} />
          <input type='text' placeholder='Starting Bid' name='starting_bid' onChange={this.fieldChanged} />
          <button onClick={e => this.submitListing(e)}>Add Listing</button>
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
export default ListAnItem

// Item data structure
// {
//   id: 1,
//   name: "Luke's listing",
//   description: 'This is the description',
//   picture_url: 'http://www.cutestpaw.com/wp-content/uploads/2011/11/To-infinity-and-beyond.jpeg',
//   starting_bid: 10,
//   user_id: 1,
//   start_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 9, d.getHours(), d.getMinutes(), d.getSeconds()).toLocaleString(),
//   finish_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours() + 1, d.getMinutes(), d.getSeconds()),
//   winner: 0
// },
