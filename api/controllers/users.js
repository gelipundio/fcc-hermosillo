let UserModel = require('../models/users')

module.exports.list = function list(req,res){
	UserModel.find({},(err, data) => {
		if(err) return res.status(500).json({ error:'error en bd' })
		res.json({ usuarios : data })
	})
}

module.exports.addUser = function addUser(req,res){
	//name, lastName, email, password
	let { name, lastName, email, password } = req.body
	let newUser = new UserModel({
		name : name,
		lastName : lastName,
		email : email,
		password : password
	})

	newUser.save((err, data) => {
		if(err) return res.status(500).json({ error:'error guardando' })
		res.json({ message : 'usuario guardado', user : data })
	})
}

module.exports.updateUser = function updateUser(req,res){
	res.send('update')
}

module.exports.deleteUser = function deleteUser(req,res){
	res.send('delete')
}

module.exports.getUser = function getUser(req,res){
	res.send('user')
}