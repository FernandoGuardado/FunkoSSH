// Fernando Guardado
// Pop Figure Schema File for Mongoose

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var PopDate = new Date(dateString);

mongoose.connect(process.env.DB);

//Movie schema
var PopSchema = new Schema({
    name: { type: String, required: true, index: { unique: true }},
    releaseDate: { type: String, required: true },
    exclusive : { type : String, required: false }
});


//return the model
module.exports = mongoose.model('pop_figures', PopSchema);
