let express = require('express')
let bodyParser = require('body-parser')
let app = express()
let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/pilotoblog')

//MIDLEWARES
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))

//routes
let routes = require('./routes')
app.use('/', routes)

app.listen(3000,() => {
	console.log('funcionando en puerto 3000')
})