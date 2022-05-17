const express = require('express');
const cors = require('cors');
require('dotenv').config
const port = process.env.PORT || 5000

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Running Doctor Portal Server');
});

// app.get('/hero', (req, res) =>{
//     res.send('Hero meets hero ku')
// })

app.listen(port, () => {
    console.log('Listening to port', port);
})