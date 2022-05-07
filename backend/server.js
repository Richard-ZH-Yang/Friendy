const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const cors = require('cors')

const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})