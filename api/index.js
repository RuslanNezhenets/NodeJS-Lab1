import Router from '../lib/Router.js'
import Application from '../lib/Application.js'

const PORT = process.env.PORT || 5000

const app = new Application()

const router = new Router()

router.get('/test', (req, res) => {
  res.end('You send request to /test')
})

app.addRouter(router)

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
