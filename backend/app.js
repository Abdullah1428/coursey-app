import express from 'express'
import cors from 'cors'

import courseRoutes from './routes/courseRoutes.js'

const app = express()

// for parsing requests
app.use(express.json())

app.use(cors())

// to check backend is up and running
app.get('/', (_req, res) => {
  res.send('API is running...')
})

app.use('/api', courseRoutes)

// export app
export { app }
