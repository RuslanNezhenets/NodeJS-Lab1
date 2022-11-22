import Router from '../lib/Router.js'

const router = new Router()

router.get('/user', (req, res) => {
  res.json('You send GET request to USER')
})

router.post('/user', (req, res, payload) => {
  res.json({
    text: 'You send POST request to USER',
    contentType: req.headers['content-type'],
    payload,
  })
})

router.put('/user', (req, res, payload) => {
  res.json({
    text: 'You send PUT request to USER',
    contentType: req.headers['content-type'],
    payload,
  })
})

router.delete('/user', (req, res) => {
  res.json('You send DELETE request to USER')
})

router.options('/user', (req, res) => {
  res.json('You send OPTIONS request to USER')
})

export default router
