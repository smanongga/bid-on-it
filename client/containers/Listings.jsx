import React from 'react'
import {connect} from 'react-redux'

function Listings (props){
  console.log(props)
  return(
  <div>
    <button onClick={() => {test(props)}}>test</button>
    </div>
  )
}

function test (props){
  props.history.push('/test')
}

const mapStateToProps = (state) => {
  return {
    words: state.words
  }
}

export default Listings

// export default connect(mapStateToProps)(Words)
