import superagent from 'superagent'

export default {

  post: (endpoint, body) => {
	return new Promise(() => {
	  superagent
		.post(endpoint)
		.send(body)
		.set('Accept', 'application/json')
		.end((err, response) => {
		  if (err) {
			reject (err)
			return
		  }
		  resolve(response.body)
		})
	})
  },

  get: (endpoint, params) => {
	return new Promise(() => {
	  superagent
		.get(endpoint)
		.query(params)
		.set('Accept', 'application/json')
		.end((err, response) => {
		  if (err) {
		 	reject (err)
			return
		  }
		  resolve(response.body)
		})
	})

  }



} 
