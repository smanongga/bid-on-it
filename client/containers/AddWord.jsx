import React from 'react'
import {connect} from 'react-redux'
import {addWord} from '../actions'

function submitWord (e, dispatch) {
  if (e.keyCode === 13) {
    dispatch(addWord(e.currentTarget.value))
    e.currentTarget.value = ''
  }
}

const AddWord = (props) => (
  <input
    placeholder='Enter a word or phrase'
    onKeyUp={e => {
      // the connect() call below puts
      // dispatch directly on props
      submitWord(e, props.dispatch)
    }}
  />
)

export default connect()(AddWord)
