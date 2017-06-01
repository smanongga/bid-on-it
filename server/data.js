module.exports = {
  listings,
  users,
  bids
}

const listings = [
  {
    id: 1,
    name: "Luke's listing",
    description: 'This is the description',
    picture_url: 'http://www.cutestpaw.com/wp-content/uploads/2011/11/To-infinity-and-beyond.jpeg',
    starting_bid: 10,
    user_id: 1,
    start_date: new Date (getFullYear(), getMonth(), getDate() - 9, getHour(), getMinute(), getSecond()),
    finish_date: new Date (getFullYear(), getMonth(), getDate(), getHour() + 1, getMinute(), getSecond()),
    winner: 0
  },
  {
    id: 2,
    name: "Jae's listing",
    description: 'This is another description',
    picture_url: 'https://s-media-cache-ak0.pinimg.com/originals/de/7a/9f/de7a9ff45c4087284940941534d2e410.jpg',
    starting_bid: 50,
    user_id: 2,
    start_date: new Date (getFullYear(), getMonth(), getDate() - 4, getHour(), getMinute(), getSecond()),
    finish_date: new Date (getFullYear(), getMonth(), getDate(), getHour(), getMinute() + 20, getSecond()),
    winner: 0
  },
  {
    id: 3,
    name: "Luke's other listing",
    description: 'This is also a  description',
    picture_url: 'http://www.laughspark.info/thumbfiles/705X705/funny-cute-cat-635796173634032620-17213.jpg',
    starting_bid: 20,
    user_id: 1,
    start_date: new Date (getFullYear(), getMonth(), getDate() - 1, getHour(), getMinute(), getSecond()),
    finish_date: new Date (getFullYear(), getMonth(), getDate(), getHour(), getMinute() + 2, getSecond()),
    winner: 0
  },
  {
    id: 4,
    name: "Luke's other other listing",
    description: 'This is another another description',
    picture_url: 'http://cdn.earthporm.com/wp-content/uploads/2015/03/cute-cats-sleeping-on-dogs-29__605.jpg',
    starting_bid: 200,
    user_id: 1,
    start_date: new Date (getFullYear(), getMonth(), getDate() - 8, getHour(), getMinute(), getSecond()),
    finish_date: new Date (getFullYear(), getMonth(), getDate(), getHour(), getMinute() + 40, getSecond()),
    winner: 0
  },
  {
    id: 5,
    name: "Jules's listing",
    description: 'This is yet another description',
    picture_url: 'https://s-media-cache-ak0.pinimg.com/736x/73/22/dd/7322dd3be79c0c2a16ca4fa954de8e9f.jpg',
    starting_bid: 40,
    user_id: 5,
    start_date: new Date (getFullYear(), getMonth(), getDate() - 3, getHour(), getMinute(), getSecond()),
    finish_date: new Date (getFullYear(), getMonth(), getDate(), getHour(), getMinute() + 10, getSecond()),
    winner: 0
  }
]

const users = [
  {
    id: 1,
    user_name: 'Luke',
    name: 'Luke',
    password: 'luke',
    email: 'luke@luke.lu.ke'
  },
  {
    id: 2,
    user_name: 'Jae',
    name: 'Jae',
    password: 'jae',
    email: 'jae@jae.ja.e'
  },
  {
    id: 3,
    user_name: 'Jack',
    name: 'Jack',
    password: 'jack',
    email: 'jack@jack.ja.ck'
  },
  {
    id: 4,
    user_name: 'Sam',
    name: 'Sam',
    password: 'sam',
    email: 'sam@sam.sa.m'
  },
  {
    id: 5,
    user_name: 'Jules',
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
    bid_date: new Date (getFullYear(), getMonth(), getDate(), getHour(), getMinute() - 20, getSecond())
  },
  {
    id: 2,
    listing_id: 1,
    user_id: 4,
    bid_amount: 25,
    bid_date: new Date (getFullYear(), getMonth(), getDate(), getHour(), getMinute() - 15, getSecond())
  },
  {
    id: 3,
    listing_id: 1,
    user_id: 3,
    bid_amount: 25.50,
    bid_date: new Date (getFullYear(), getMonth(), getDate(), getHour(), getMinute() - 10, getSecond())
  },
  {
    id: 4,
    listing_id: 2,
    user_id: 1,
    bid_amount: 50.50,
    bid_date: new Date (getFullYear(), getMonth(), getDate(), getHour(), getMinute() - 5, getSecond())
  },
]
