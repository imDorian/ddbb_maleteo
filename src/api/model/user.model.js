const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
// const { validationPassword, validationEmail } = require('../../validators/validation');

const UserSchema = new Schema({
    
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    birthdate:{type: Date, required: true},
    image: {type: String},
    
},{
    timestamps: true
    });


const User = mongoose.model('User', UserSchema);

module.exports = User;