const express = require('express')
const path = require('path')
const app = express()

const CONTACTS = [
    {
        id: 1,
        name: 'test',
        value: 'wwwefdwsaecew233',
        marked: false
    }
]

app.get('/api/contacts', (req, res) => {
    setTimeout(() => {
        res.status(200).json(CONTACTS)
    }, 1000)
})


app.post('api/contacts', (req,res) => {

})


app.use(express.static(path.resolve(__dirname, 'client')))

app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(3000, () => console.log('hi.....'))