var restful = require('node-restful');
var mongoose = restful.mongoose;


var userSchema = new mongoose.Schema({
	name: String,
	email: String,
	age: Number
});







//returning model...
module.exports = restful.model('Users', userSchema);