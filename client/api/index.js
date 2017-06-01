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
    request.get(`/listings/${id}`)
    .end((err, res) => {
        if (err) {
            cb(err.message)
            return
        }
        const result = res.body
        cb(null, result)
    })
}

