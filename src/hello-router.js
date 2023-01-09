import Router from '../lib/Router.js'

const router = new Router()

router.get('/hello', (req, res) => {
  res.json('You send GET request to HELLO')
})

router.post('/user', (req, res, payload) => {
  res.json({
    text: 'You send POST request to HELLO',
    contentType: req.headers['content-type'],
    payload,
  })
})

router.put('/user', (req, res, payload) => {
  res.json({
    text: 'You send PUT request to HELLO',
    contentType: req.headers['content-type'],
    payload,
  })
})

router.delete('/hello', (req, res) => {
  res.json('You send DELETE request to HELLO')
})

router.options('/hello', (req, res) => {
  res.json('You send OPTIONS request to HELLO')
})

export default router
