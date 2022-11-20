import Router from '../lib/Router.js'

const router = new Router()

router.get('/hello', (req, res, payload) => {
  res.json(`You send GET request to ${req.url}`)
})

router.post('/hello', (req, res, payload) => {
  res.json({ contentType: req.headers['content-type'], payload })
})

router.put('/hello', (req, res, payload) => {
  res.json({ contentType: req.headers['content-type'], payload })
})

router.delete('/hello', (req, res, payload) => {
  res.json(`You send DELETE request to ${req.url}`)
})

router.options('/hello', (req, res, payload) => {
  res.json(`You send OPTIONS request to ${req.url}`)
})

export default router
