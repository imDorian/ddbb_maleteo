const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
// const { validationPassword, validationEmail } = require('../../validators/validation');

const UserSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    image: {type: String},
    guardianID:{type: Schema.Types.ObjectId, ref:"guardian"},
    
});


const User = mongoose.model('User', UserSchema);

module.exports = User;