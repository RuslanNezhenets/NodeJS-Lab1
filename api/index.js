import helloRouter from '../src/hello-router.js'
import testRouter from '../src/test-router.js'
import userRouter from '../src/user-router.js'
import Application from '../lib/Application.js'
const PORT = process.env.PORT || 5000

const app = new Application()

app.addRouter(helloRouter)
app.addRouter(testRouter)
app.addRouter(userRouter)

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))

app.shutdown()
