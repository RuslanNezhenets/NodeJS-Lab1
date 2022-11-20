import Router from '../lib/Router.js'

const router = new Router()

router.get('/user', (req, res, payload) => {
  res.json(`You send GET request to ${req.url}`)
})

router.post('/user', (req, res, payload) => {
  res.json({ contentType: req.headers['content-type'], payload })
})

router.put('/user', (req, res, payload) => {
  res.json({ contentType: req.headers['content-type'], payload })
})

router.delete('/user', (req, res, payload) => {
  res.json(`You send DELETE request to ${req.url}`)
})

router.options('/user', (req, res, payload) => {
  res.json(`You send OPTIONS request to ${req.url}`)
})

export default router
