var express = require('express')
var router = express.Router()

var db = require('./db')

router.get('/listings', function (req, res) {
  db.getCurrentListings((error, listings) => {
    if (error) {
      res.json({error})
    }
    res.json({listings})
  })
})

router.get('/expired', function (req, res) {
  db.getExpiredListings((error, listings) => {
    if (error) {
      res.json({error})
    }
    res.json({listings})
  })
})

router.get('/user/:userId/listings', function (req, res) {
  db.getUserListings(req.params.userId, (error, listings) => {
    if (error) {
      res.json({error})
    }
    res.json({listings})
  })
})

router.get('/listing/:listingId', function (req, res) {
  db.getOneListing(req.params.listingId, (error, listings) => {
    if (error) {
      res.json({error})
    }
    res.json({listings})
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
      res.json({error})
    }
    res.json({listings})
  })
})

router.get('/user/:userId/watching', function (req, res) {
  db.getListingsWatching(req.params.userId, (error, listings) => {
    if (error) {
      res.json({error})
    }
    res.json({listings})
  })
})

router.post('/listings/bid/:listingId/:userId', function (req, res) {
  db.addBid(req.body.bidAmount, req.params.userId, req.params.listingId, (error, bidId) => {
    if (error) {
      res.json({error})
    }
    res.json({bidId})
  })
})

router.post('/listings/add/:userId', function (req, res) {
  db.addBid(req.body, req.params.userId, (error, listingId) => {
    if (error) {
      res.json({error})
    }
    res.json({listingId})
  })
})

module.exports = router
