module.exports = {
  getAllListings,
  getCurrentListings,
  getExpiredListings,
  getOneListing,
  getUserListings,
  addListing,
  addBid,
  getListingsWon,
  getListingsLost,
  getListingsWatching,
  checkLogin
}

const data = require('./data.js')

function getAllListings (callback) {
  let listings = data.listings.map(listing => {
    listing.user_name = data.users.find(user => user.id === listing.user_id).user_name
    listing.bids = data.bids.filter(bid => bid.listing_id === listing.id)
    listing.number_of_bids = listing.bids.length
    listing.current_bid = listing.starting_bid
    if (listing.number_of_bids > 0) {
      listing.current_bid = listing.bids.sort((a, b) => b.bid_amount - a.bid_amount)[0].bid_amount
    }
    return listing
  })
  return callback(null, listings)
}

function getCurrentListings (callback) {
  getAllListings((error, listings) => {
    if (error) {
      return callback(error)
    }
    const d = new Date()
    listings = listings.filter(listing => listing.finish_date > d)
    return callback(null, listings)
  })
}

function getExpiredListings (callback) {
  getAllListings((error, listings) => {
    if (error) {
      return callback(error)
    }
    const d = new Date()
    listings = listings.filter(listing => listing.finish_date < d)
    return callback(null, listings)
  })
}

function getOneListing (id, callback) {
  id = Number(id)
  const listing = data.listings.find(x => x.id === id)
  if (!listing) {
    return callback('There are no listings with that id')
  }
  listing.user_name = data.users.find(user => user.id === listing.user_id).user_name
  if (listing.winner) {
    listing.winner_name = data.users.find(user => user.id === listing.winner).user_name
  }
  let bids = data.bids.filter(bid => bid.listing_id === listing.id)
  bids.sort((a, b) => b.bid_amount - a.bid_amount)
  listing.current_bid = listing.starting_bid
  if (bids.length > 0) {
    listing.current_bid = bids[0].bid_amount
  }
  listing.bids = bids.map(bid => {
    bid.user_name = data.users.find(user => user.id === bid.user_id).user_name
    return bid
  })

  return callback(null, listing)
}

function getUserListings (userId, callback) {
  userId = Number(userId)
  let user = data.users.find(user => user.id === userId)
  if (!user) {
    return callback('There is no user with that ID')
  }
  getCurrentListings((error, listings) => {
    if (error) {
      return callback(error)
    }
    listings = listings.filter(listing => listing.user_id === userId)
    return callback(null, listings)
  })
}

function addListing (listingData, userId, callback) {
  console.log(listingData, userId, 'params')
  userId = Number(userId)
  console.log(userId)
  let user = data.users.find(user => user.id === userId)
  console.log(user)
  if (!user) {
    return callback('There is no user with that ID')
  }
  console.log('here')
  if (!listingData.name || listingData.name.length === 0) {
    return callback('Please enter a name')
  }
  console.log('here')
  if (!listingData.starting_bid || listingData.starting_bid.length === 0) {
    return callback('Please enter a starting bid')
  }
  console.log('here')
  if (!listingData.description || listingData.description.length === 0) {
    return callback('Please enter a description')
  }
  console.log('here')
  if (isNaN(Number(listingData.starting_bid))) {
    return callback('Please enter a valid starting bid')
  }
  console.log('here')
  const currentDate = new Date()
  let listing = {
    id: data.listings.sort((a, b) => a.id - b.id)[data.listings.length - 1].id + 1,
    user_id: Number(userId),
    name: listingData.name,
    description: listingData.description,
    picture_url: listingData.picture_url,
    starting_bid: Number(listingData.starting_bid),
    start_date: currentDate,
    finish_date: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7, currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds())
  }
  console.log(listing)
  // if (!listingData.pictureUrl || listingData.pictureUrl.length === 0) {
  //   listing.picture_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png'
  // }
  console.log(listing)
  data.listings.push(listing)
  console.log(data.listings)
  return callback(null, listing.id)
}

function addBid (bidAmount, userId, listingId, callback) {
  if (isNaN(Number(bidAmount))) {
    return callback('Please enter a valid starting bid')
  }
  userId = Number(userId)
  let user = data.users.find(user => user.id === userId)
  if (!user) {
    return callback('There is no user with that ID')
  }
  listingId = Number(listingId)
  getOneListing(listingId, (error, listing) => {
    if (error) {
      return callback(error)
    }
    let currentDate = new Date()
    if (listing.finish_date < currentDate) {
      return callback('That auction has already ended')
    }
    if (listing.user_id === userId) {
      return callback('You cannot bid on your own listings')
    }
    let bid = {
      id: data.bids.sort((a, b) => b.id - a.id)[0].id + 1,
      listing_id: listingId,
      bid_amount: Number(bidAmount),
      user_id: Number(userId),
      bid_date: new Date().toLocaleDateString('en-GB')
    }
    data.bids.push(bid)
    return callback(null, bid.id)
  })
}

function getListingsWon (userId, callback) {
  userId = Number(userId)
  let user = data.users.find(user => user.id === userId)
  if (!user) {
    return callback('There is no user with that ID')
  }
  getExpiredListings((error, listings) => {
    if (error) {
      return callback(error)
    }
    listings = listings.filter(listing => listing.winner === userId)
    return callback(null, listings)
  })
}

function getListingsLost (userId, callback) {
  userId = Number(userId)
  let user = data.users.find(user => user.id === userId)
  if (!user) {
    return callback('There is no user with that ID')
  }
  getExpiredListings((error, listings) => {
    if (error) {
      return callback(error)
    }
    listings = listings.filter(listing => listing.winner !== userId)
    listings = listings.filter(listing => listing.bids.find(bid => bid.user_id === userId))
    return callback(null, listings)
  })
}

function getListingsWatching (userId, callback) {
  userId = Number(userId)
  let user = data.users.find(user => user.id === userId)
  if (!user) {
    return callback('There is no user with that ID')
  }
  getCurrentListings((error, listings) => {
    if (error) {
      return callback(error)
    }
    listings = listings.filter(listing => listing.bids.find(bid => bid.user_id === userId))
    return callback(null, listings)
  })
}

function checkLogin (userName, password, callback) {
  let user = data.users.find(user => user.user_name === userName)
  if (!user) {
    return callback(null, 0)
  }
  if (password !== user.password) {
    return callback(null, 0)
  }
  return callback(null, {userId: user.id, name: user.name})
}
