const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
// const { validationPassword, validationEmail } = require('../../validators/validation');

const GuardianSchema = new Schema({
    ubicationsID:[{type: Schema.Types.ObjectId, ref: "ubication"}],
    userID:{type: Schema.Types.ObjectId, ref:"user"}


    // nameGuardian: {type: String, required: true}},

    //puede dejar y recoger maletas
    
});


const Guardian = mongoose.model('Guardian', GuardianSchema);

module.exports = Guardian;