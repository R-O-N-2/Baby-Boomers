const express = require('express')
const routes = require('./routes/AppRouter')
const db = require('./db')
const bodyParser = require('body-parser')
const logger = require('morgan')
let cors = require("cors");


const PORT = process.env.port || 3001
const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(cors());

app.use(express.static(`public`))

app.use('/api', routes)

app.use(`*`, express.static(`public`))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))