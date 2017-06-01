/*

GET ALL LISTINGS
router.get('/listings', function (req, res) {

wants nothing

returns  {
  "listings": [
    {
      "id": 1,
      "name": "Luke's listing",
      "description": "This is the description",
      "picture_url": "http://www.cutestpaw.com/wp-content/uploads/2011/11/To-infinity-and-beyond.jpeg",
      "starting_bid": 10,
      "user_id": 1,
      "start_date": "5/24/2017, 10:17:36 AM",
      "finish_date": "2017-06-01T23:17:36.000Z",
      "winner": 0,
      "user_name": "luke",
      "bids": [
        {
          "id": 3,
          "listing_id": 1,
          "user_id": 3,
          "bid_amount": 25.5,
          "bid_date": "2017-06-01T22:07:36.000Z"
        },
        {
          "id": 2,
          "listing_id": 1,
          "user_id": 4,
          "bid_amount": 25,
          "bid_date": "2017-06-01T22:02:36.000Z"
        },
        {
          "id": 1,
          "listing_id": 1,
          "user_id": 3,
          "bid_amount": 20,
          "bid_date": "2017-06-01T21:57:36.000Z"
        }
      ],
      "number_of_bids": 3,
      "current_bid": 25.5
    },
    {
      "id": 2,
      "name": "Jae's listing",
      "description": "This is another description",
      "picture_url": "https://s-media-cache-ak0.pinimg.com/originals/de/7a/9f/de7a9ff45c4087284940941534d2e410.jpg",
      "starting_bid": 50,
      "user_id": 2,
      "start_date": "2017-05-28T22:17:36.000Z",
      "finish_date": "2017-06-01T22:37:36.000Z",
      "winner": 0,
      "user_name": "jae",
      "bids": [
        {
          "id": 4,
          "listing_id": 2,
          "user_id": 1,
          "bid_amount": 50.5,
          "bid_date": "2017-06-01T22:12:36.000Z"
        }
      ],
      "number_of_bids": 1,
      "current_bid": 50.5
    },
    {
      "id": 3,
      "name": "Luke's other listing",
      "description": "This is also a  description",
      "picture_url": "http://www.laughspark.info/thumbfiles/705X705/funny-cute-cat-635796173634032620-17213.jpg",
      "starting_bid": 20,
      "user_id": 1,
      "start_date": "2017-05-31T22:17:36.000Z",
      "finish_date": "2017-06-01T22:19:36.000Z",
      "winner": 0,
      "user_name": "luke",
      "bids": [],
      "number_of_bids": 0,
      "current_bid": 20
    },
    {
      "id": 4,
      "name": "Luke's other other listing",
      "description": "This is another another description",
      "picture_url": "http://cdn.earthporm.com/wp-content/uploads/2015/03/cute-cats-sleeping-on-dogs-29__605.jpg",
      "starting_bid": 200,
      "user_id": 1,
      "start_date": "2017-05-24T22:17:36.000Z",
      "finish_date": "2017-06-01T22:57:36.000Z",
      "winner": 0,
      "user_name": "luke",
      "bids": [],
      "number_of_bids": 0,
      "current_bid": 200
    },
    {
      "id": 5,
      "name": "Jules's listing",
      "description": "This is yet another description",
      "picture_url": "https://s-media-cache-ak0.pinimg.com/736x/73/22/dd/7322dd3be79c0c2a16ca4fa954de8e9f.jpg",
      "starting_bid": 40,
      "user_id": 5,
      "start_date": "2017-05-29T22:17:36.000Z",
      "finish_date": "2017-06-01T22:27:36.000Z",
      "winner": 0,
      "user_name": "jules",
      "bids": [],
      "number_of_bids": 0,
      "current_bid": 40
    }
  ]
}

GET ONE LISTING
router.get('/listing/:listingId', function (req, res) {

wants listing id number in parameter

returns

{
  "listing": {
    "id": 1,
    "name": "Luke's listing",
    "description": "This is the description",
    "picture_url": "http://www.cutestpaw.com/wp-content/uploads/2011/11/To-infinity-and-beyond.jpeg",
    "starting_bid": 10,
    "user_id": 1,
    "start_date": "5/24/2017, 10:20:12 AM",
    "finish_date": "2017-06-01T23:20:12.000Z",
    "winner": 0,
    "user_name": "luke",
    "current_bid": 25.5,
    "bids": [
      {
        "id": 3,
        "listing_id": 1,
        "user_id": 3,
        "bid_amount": 25.5,
        "bid_date": "2017-06-01T22:10:12.000Z",
        "user_name": "jack"
      },
      {
        "id": 2,
        "listing_id": 1,
        "user_id": 4,
        "bid_amount": 25,
        "bid_date": "2017-06-01T22:05:12.000Z",
        "user_name": "sam"
      },
      {
        "id": 1,
        "listing_id": 1,
        "user_id": 3,
        "bid_amount": 20,
        "bid_date": "2017-06-01T22:00:12.000Z",
        "user_name": "jack"
      }
    ]
  }
}

MAKE A BID
router.post('/listings/bid/:listingId/:userId', function (req, res) {

wants

{
  "bidAmount": 200
}

returns

{
  "bidId": 7
}

ADD A LISTING
router.post('/listings/add/:userId', function (req, res) {

wants

{
  "name": "name",
  "startingBid": 200,
  "description": "des",
  "pictureUrl": "www..."
}

*/
