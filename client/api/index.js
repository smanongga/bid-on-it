import request from 'superagent'


export function apiGetAllListings(cb){
    request.get('/listings')
    .end((err, res) => {
      if (err) {
        cb(err.message)
        return
      }
      const result = res.body
      cb(null, result)
    })
}

export function apiGetListing(id, cb){
    request.get(`/listing/${id}`)
    .end((err, res) => {
        if (err) {
            cb(err.message)
            return
        }
        const result = res.body
        cb(null, result)
    })
}

export function apiPostListing(obj, cb){
    const id = obj.user_id
    request.post(`/listings/add/${id}`)
    .send(obj)
    .end((err, res) => {
        if (err) cb(err)
        const result = res.body.listingId
        cb(null, result)
    })
}

