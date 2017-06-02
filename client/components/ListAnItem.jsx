import React from 'react'
import request from 'superagent'
import {connect} from 'react-redux'
import Dropzone from 'react-dropzone'



import {apiPostListing} from '../api'
const CLOUDINARY_UPLOAD_PRESET = 'listingimage'
const CLOUDINARY_UPLOAD_URL = 	'https://api.cloudinary.com/v1_1/partmatch/upload'

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
     this.onImageDrop = this.onImageDrop.bind(this)


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

   onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        })
        this.handleImageUpload(files[0]) 
    } 

    handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

     
        console.log(response.body)
        this.setState({
          picture_url: response.body.secure_url
        });
      
    });
  }

  render() {
    return (
      <div>
      <h2 className='form-header'>Add a new item</h2>
        <form className='list-item-container'>
          <input className='form' type='text' placeholder='Name' name='name' onChange={this.fieldChanged} />
          <input className='form'  type='text' placeholder='Description' name='description' onChange={this.fieldChanged} />
          <input className='form' type='text' placeholder='Starting Bid' name='starting_bid' onChange={this.fieldChanged} />
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
            <div>
        {this.state.picture_url === '' ? null :
        <div>
        
          <h4>Upload Successful</h4>
        </div>}
          <button className='form-button' onClick={e => this.submitListing(e)}>Add Listing</button>
          </div>
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
