// dependencies ----------------------------------------------------------------------------------
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())

// cors config ----------------------------------------------------------------------------------
const corsOptions = {
    origin: process.env.HOST_LINK,
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}
app.use(cors(corsOptions))
app.options('*', cors(corsOptions))


// routes --------------------------------------------------------------------------------------
app.get('/', (req, res) => {
    res.send('Backend is running');
})
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' })
})
const routes = [
    require('./routes/userMessageRoutes'),
    // add required routes
]
routes.forEach(route => {
    app.use(route)
})

// backend start -------------------------------------------------------------------------------
app.listen(process.env.PORT, function check(error) {
    if (error) {
        console.log("An error has occurred");
    } else {
        console.log("Started server");
    }
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})
