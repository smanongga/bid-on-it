var express = require('express')
var router = express.Router()

var db = require('./db')

router.get('/listings', function (req, res) {
  db.getCurrentListings((error, listings) => {
    if (error) {
      return res.json({error})
    }
    return res.json({listings})
  })
})

router.get('/expired', function (req, res) {
  db.getExpiredListings((error, listings) => {
    if (error) {
      return res.json({error})
    }
    return res.json({listings})
  })
})

router.get('/user/:userId/listings', function (req, res) {
  db.getUserListings(req.params.userId, (error, listings) => {
    if (error) {
      return res.json({error})
    }
    return res.json({listings})
  })
})

router.get('/listing/:listingId', function (req, res) {
  db.getOneListing(req.params.listingId, (error, listing) => {
    if (error) {
      return res.json({error})
    }
    return res.json({listing})
  })
})

router.get('/user/:userId/won', function (req, res) {
  db.getListingsWon(req.params.userId, (error, listings) => {
    if (error) {
      res.json({error})
    }
    res.json({listings})
  })
})

router.get('/user/:userId/lost', function (req, res) {
  db.getListingsLost(req.params.userId, (error, listings) => {
    if (error) {
      return res.json({error})
    }
    return res.json({listings})
  })
})

router.get('/user/:userId/watching', function (req, res) {
  db.getListingsWatching(req.params.userId, (error, listings) => {
    if (error) {
      return res.json({error})
    }
    return res.json({listings})
  })
})

router.post('/listings/bid/:listingId/:userId', function (req, res) {
  console.log(req)
  db.addBid(req.body.bidAmount, req.params.userId, req.params.listingId, (error, bidId) => {
    if (error) {
      return res.json({error})
    }
    return res.json({bidId})
  })
})

router.post('/listings/add/:userId', function (req, res) {
  db.addListing(req.body.bidAmount, req.params.userId, (error, listingId) => {
    if (error) {
      return res.json({error})
    }
    return res.json({listingId})
  })
})

router.post('/login', function (req, res) {
  db.checkLogin(req.body.userName, req.body.password, (error, userDetails) => {
    if (error) {
      return res.json({error})
    }
    return res.json(userDetails)
  })
})

module.exports = router
