import Router from '../lib/Router.js'

const router = new Router()

router.get('/test', (req, res, payload) => {
  res.json(`You send GET request to ${req.url}`)
})

router.post('/test', (req, res, payload) => {
  res.json({ contentType: req.headers['content-type'], payload })
})

router.put('/test', (req, res, payload) => {
  res.json({ contentType: req.headers['content-type'], payload })
})

router.delete('/test', (req, res, payload) => {
  res.json(`You send DELETE request to ${req.url}`)
})

router.options('/test', (req, res, payload) => {
  res.json(`You send OPTIONS request to ${req.url}`)
})

export default router
