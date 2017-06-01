import React from 'react'
import {connect} from 'react-redux'

function Listings (props){
  <div>
    <p>Test text listing</p>
    </div>
}

const mapStateToProps = (state) => {
  return {
    words: state.words
  }
}

export default Listings

// export default connect(mapStateToProps)(Words)
