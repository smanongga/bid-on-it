import React from 'react'

function ListAnItem(props){
    console.log(props)
    return (
       <button onClick={()=> {click(props)}}>fdg</button>
    )
}

function click (props){
    props.history.push('/tyest')
}
export default ListAnItem
