let mongoose = require('mongoose')

let schema = mongoose.Schema({
	name : { type : String, required : true },
	lastName : { type : String, required : true},
	email : { type : String, required : true },
	password : { type : String, required : true },
	isActive : { type : Boolean, default : true },
	created_at : { type : Date, defualt : new Date() }
})

let model  = mongoose.model('User', schema)

module.exports = model