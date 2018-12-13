const express = require('express')
const path = require('path')
const request = require('request')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.get('/sanity', function (req, res) {
    res.send("OK")
})

app.get('/recipes/:food', function (req, res, body) {
    request(`http://www.recipepuppy.com/api/?q=${req.params.food}`, function (err, response, body) {
        let data = JSON.parse(body)
        let recipes = data.results
        console.log(recipes)
        res.send(recipes)

    })
})


const port = 8080
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})
