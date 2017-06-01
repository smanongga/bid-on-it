const d = new Date()
const listings = [
  {
    id: 1,
    name: "Luke's listing",
    description: 'This is the description',
    picture_url: 'http://www.cutestpaw.com/wp-content/uploads/2011/11/To-infinity-and-beyond.jpeg',
    starting_bid: 10,
    user_id: 1,
    start_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 9, d.getHours(), d.getMinutes(), d.getSeconds()).toLocaleString(),
    finish_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours() + 1, d.getMinutes(), d.getSeconds()),
    winner: 0
  },
  {
    id: 2,
    name: "Jae's listing",
    description: 'This is another description',
    picture_url: 'https://s-media-cache-ak0.pinimg.com/originals/de/7a/9f/de7a9ff45c4087284940941534d2e410.jpg',
    starting_bid: 50,
    user_id: 2,
    start_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 4, d.getHours(), d.getMinutes(), d.getSeconds()),
    finish_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() + 20, d.getSeconds()),
    winner: 0
  },
  {
    id: 3,
    name: "Luke's other listing",
    description: 'This is also a  description',
    picture_url: 'http://www.laughspark.info/thumbfiles/705X705/funny-cute-cat-635796173634032620-17213.jpg',
    starting_bid: 20,
    user_id: 1,
    start_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1, d.getHours(), d.getMinutes(), d.getSeconds()),
    finish_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() + 2, d.getSeconds()),
    winner: 0
  },
  {
    id: 4,
    name: "Luke's other other listing",
    description: 'This is another another description',
    picture_url: 'http://cdn.earthporm.com/wp-content/uploads/2015/03/cute-cats-sleeping-on-dogs-29__605.jpg',
    starting_bid: 200,
    user_id: 1,
    start_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 8, d.getHours(), d.getMinutes(), d.getSeconds()),
    finish_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() + 40, d.getSeconds()),
    winner: 0
  },
  {
    id: 5,
    name: "Jules's listing",
    description: 'This is yet another description',
    picture_url: 'https://s-media-cache-ak0.pinimg.com/736x/73/22/dd/7322dd3be79c0c2a16ca4fa954de8e9f.jpg',
    starting_bid: 40,
    user_id: 5,
    start_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 3, d.getHours(), d.getMinutes(), d.getSeconds()),
    finish_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() + 10, d.getSeconds()),
    winner: 0
  },
  {
    id: 6,
    name: 'Expired Listing',
    description: 'This has expired',
    picture_url: 'https://s-media-cache-ak0.pinimg.com/736x/73/22/dd/7322dd3be79c0c2a16ca4fa954de8e9f.jpg',
    starting_bid: 50,
    user_id: 1,
    start_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 15, d.getHours(), d.getMinutes(), d.getSeconds()),
    finish_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1, d.getHours(), d.getMinutes() + 10, d.getSeconds()),
    winner: 0
  },
  {
    id: 7,
    name: 'Listing Sam Won',
    description: 'Congratulations Sam',
    picture_url: 'https://s-media-cache-ak0.pinimg.com/736x/73/22/dd/7322dd3be79c0c2a16ca4fa954de8e9f.jpg',
    starting_bid: 60,
    user_id: 5,
    start_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 14, d.getHours(), d.getMinutes(), d.getSeconds()),
    finish_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours() - 12, d.getMinutes() + 10, d.getSeconds()),
    winner: 4
  }
]

const users = [
  {
    id: 1,
    user_name: 'luke',
    name: 'Luke',
    password: 'luke',
    email: 'luke@luke.lu.ke'
  },
  {
    id: 2,
    user_name: 'jae',
    name: 'Jae',
    password: 'jae',
    email: 'jae@jae.ja.e'
  },
  {
    id: 3,
    user_name: 'jack',
    name: 'Jack',
    password: 'jack',
    email: 'jack@jack.ja.ck'
  },
  {
    id: 4,
    user_name: 'sam',
    name: 'Sam',
    password: 'sam',
    email: 'sam@sam.sa.m'
  },
  {
    id: 5,
    user_name: 'jules',
    name: 'Jules',
    password: 'jules',
    email: 'jules@jules.jul.es'
  }
]

const bids = [
  {
    id: 1,
    listing_id: 1,
    user_id: 3,
    bid_amount: 20,
    bid_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() - 20, d.getSeconds())
  },
  {
    id: 2,
    listing_id: 1,
    user_id: 4,
    bid_amount: 25,
    bid_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() - 15, d.getSeconds())
  },
  {
    id: 3,
    listing_id: 1,
    user_id: 3,
    bid_amount: 25.50,
    bid_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() - 10, d.getSeconds())
  },
  {
    id: 4,
    listing_id: 2,
    user_id: 1,
    bid_amount: 50.50,
    bid_date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() - 5, d.getSeconds())
  },
  {
    id: 5,
    listing_id: 7,
    user_id: 2,
    bid_amount: 80,
    bid_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 2, d.getHours(), d.getMinutes() - 5, d.getSeconds())
  },
  {
    id: 6,
    listing_id: 7,
    user_id: 4,
    bid_amount: 100,
    bid_date: new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1, d.getHours(), d.getMinutes() - 5, d.getSeconds())
  },
]

module.exports = {
  listings: listings,
  users: users,
  bids: bids
}
