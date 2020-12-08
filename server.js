const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const Tiktok = require('./model')
const app = express()
const port = process.env.PORT || 5000

mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}, (err, result) => {
    if(err){
        return res.send(err.message)
    }
    console.log('Connected to database')
})

app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.get('/', (req, res) => {
    res.status(200).send('Hakkym Dee Dev')
})

app.get('/tiktok', async (req, res) => {
    try {
        const data = await Tiktok.find({})
        if(!data){
            res.status({message: 'No data found'})
        }else{
            res.status(200).send(data)
        }
    } catch (error) {
        res.send(error)
    }
})

app.post('/tiktok', async (req, res) => {
    try {
        const data = await Tiktok.create(req.body)
        if(data){
            res.status(201).send({message: 'Data successfully created', data})
        }else{
            res.status(403).send({message: 'Invalid data input'})
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

app.listen(port, () =>{
    console.log(`Server running at port ${port}`)
})