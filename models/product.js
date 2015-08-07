var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name:  String,
  description: { type: String, required: true },
  price:   { type: String, required: true },
  comments: [
  	{
  		user_ip: String, 
  		text: { type: String, required: '{PATH} is required!' }, 
  		date: { type: Date, default: Date.now } 
  	}
  ],
  date: { type: Date, default: Date.now },
});

// the schema is useless so far
// we need to create a model using it
//var Product = mongoose.model('Product', productSchema);

// make this available to our products in our Node applications
module.exports = productSchema;