var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username : {type: String, lowercase: true, unique:true},
	hash     : String,
	salt     : String
});