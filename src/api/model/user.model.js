const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
// const { validationPassword, validationEmail } = require('../../validators/validation');

const UserSchema = new Schema({
    
    email: {type: String},
    password: {type: String},
    name: {type: String},
    surname: {type: String},
    birthdate:{type: Date},
    image: {type: String},
    reservations: [{type: Schema.Types.ObjectId, ref:"Reservation"}]
    
},{
    timestamps: true
    });


const User = mongoose.model('User', UserSchema);

module.exports = User;