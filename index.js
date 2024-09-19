const express = require('express')
const app = express()
const port = 5000

const path = require('path ')

const basePath = path.join(_dirname, 'templates')

app.get('/', (req,res) => {
    res.sendFile(`${basePath}/index.html`)

})

app.listen(port, () => {
    console.log(`App rodando na porta:${port}`)
})