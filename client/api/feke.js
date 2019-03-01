import request from 'superagent'

const fekeUrl = 'http://localhost:3000/api/v1/feke'

export function getFeke () {
  request
    .get(`${fekeUrl}/`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get feke')
    })
}
