import express from 'express'
// import cookieParser from 'body-parser'
import bodyParser from 'body-parser'
import taskRouter from './routes/task.route.js'
const app=express()
app.use(bodyParser.json({limit:"16kb"}))
app.use('/api/v1/task',taskRouter)

export default app
