const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.get('/sanity', function (req, res){
    res.send("OK")
})

app.get('/recipes/:food', function(req, res){
    
})


const port = 8080
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})
