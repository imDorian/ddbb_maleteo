const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
// const { validationPassword, validationEmail } = require('../../validators/validation');

const ChatSchema = new Schema({
    
    from:{type:String},
    body:{type:String}
    

});


const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;