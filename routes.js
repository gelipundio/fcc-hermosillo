var express  = require('express')
var routes = express.Router()


let UsersController = require('./controllers/users')
routes.get('/users',UsersController.list)
	.post('/users', UsersController.addUser)
	.delete('/users', UsersController.deleteUser)
	.put('/users', UsersController.updateUser)
	.get('/users/:id', UsersController.getUser)

module.exports = routes
