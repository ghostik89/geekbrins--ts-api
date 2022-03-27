const express = require('express')
const fs = require('fs');

const app = express()
const data = fs.readFileSync('./db/db.backup.json')
const parsedData = JSON.parse(data)

app.get('/api/v1/places/', (req, res) => {
    try {
        const params = req.query
        let sendData = []
        let searchData = Object.keys(parsedData.places).map(elem => parsedData.places[elem])
        if (params.name) {
            sendData = searchData.filter(elem => elem.name.includes(params.name))
        }
        if (params.description) {
            console.log('here')
            sendData.concat(searchData.filter(elem => elem.description.includes(params.description)))
            console.log('here')
        }
        if (params.price) {
            sendData.concat(searchData.filter(elem => elem.price <= params.price))
        }
        return sendData.length !== 0 ? res.status(200).json(sendData) : res.status(404).json({message:'Not found'})
    } catch (e) {
        res.status(500).json({ message: "Internal server error" })
    }
})

app.listen(5000, () => {
    console.log('server started')
})