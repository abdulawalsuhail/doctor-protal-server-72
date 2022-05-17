const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config
const port = process.env.PORT || 5000

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// doctordb
// a5QumLWYKAVmpgD5



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.s6ve2.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)      





app.get('/', (req, res) => {
    res.send('Running Doctor Portal Server');
});

// app.get('/hero', (req, res) =>{
//     res.send('Hero meets hero ku')
// })

app.listen(port, () => {
    console.log('Listening to port', port);
})