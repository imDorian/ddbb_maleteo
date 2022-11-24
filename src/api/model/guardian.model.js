const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
// const { validationPassword, validationEmail } = require('../../validators/validation');

const GuardianSchema = new Schema({
    ubicationsID:[{type: Schema.Types.ObjectId, ref: "Ubication"}],
    userID:{type: Schema.Types.ObjectId, ref:"User"}},
    {timestamps: true

});


const Guardian = mongoose.model('Guardian', GuardianSchema);

module.exports = Guardian;