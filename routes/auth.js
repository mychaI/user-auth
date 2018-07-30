const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

router.get('/test', (req, res) => {
  res.json({
	confirmation: 'success',
	data: 'Test endpoint'
//	resource: req.params.resource,
//	query: req.query // from url query string

  })
})

module.exports = router
