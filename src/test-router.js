import Router from '../lib/Router.js'

const router = new Router()

router.get('/test', (req, res) => {
  res.json('You send GET request to TEST')
})

router.post('/user', (req, res, payload) => {
  res.json({
    text: 'You send POST request to TEST',
    contentType: req.headers['content-type'],
    payload,
  })
})

router.put('/user', (req, res, payload) => {
  res.json({
    text: 'You send PUT request to TEST',
    contentType: req.headers['content-type'],
    payload,
  })
})

router.delete('/test', (req, res) => {
  res.json('You send DELETE request to TEST')
})

router.options('/test', (req, res) => {
  res.json('You send OPTIONS request to TEST')
})

export default router
