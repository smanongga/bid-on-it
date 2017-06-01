import React from 'react'

import bidItems from '../../data/beers'

const ViewItemAndBid = (props) => {
  return (
    <div className='row view-item-bid'>
    <div className='col-md-12 item-title'>{props.name}</div>
    <div className='col-md-4 item-image'><img src={props.pictureUrl} /></div>
    <div className='cold-md-8 item-description'><p>{props.description}</p></div>
    </div>
  )
}

function getItemFromId (id) {
  const item = beerData.beers.find(beer => beer.id === id)
  return beer.name
}

export default ViewItemAndBid



// {props.cart.map((item, id) => {
//   const name = getNameFromId(item.id)
//   return (
//     <tr key={id}>
//       <td>{name}</td>
//       <td><input className='update-input' value={item.quantity} /></td>
//       <td><button><span className='fa fa-trash fa-2x' /></button></td>
//       {/* TODO: implement deletes */}
//     </tr>
//   )
// })}
